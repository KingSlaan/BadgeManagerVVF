import { VersionService } from './../../../services/version.service';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { VersionInfo, VersionInfoBE } from '../../../../interfaces/version-info';
import { DatePipe } from '@angular/common';
import { WeatherService, WeatherInfo } from './../../../services/weather.service';
import dailyMessages from 'src/assets/daily-message.json';
import { DailyMessage } from '../../../../interfaces/daily-message';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss'],
  imports: [DatePipe]
})
export class DefaultFooterComponent extends FooterComponent implements AfterViewInit {
  constructor() {
    super();
  }

  private versionService = inject(VersionService);
  private weatherService = inject(WeatherService);

  versionInfo = signal<VersionInfo>({
    "version": "0.0.0-Catan",
    "environment": "development",
    "buildDate": ""
  });

  versionInfoBE = signal<VersionInfoBE>({
    "appName": "Applicativo Badge VVF",
    "version": "0.0.0",
    "codeName": "",
    "buildDate": ""
  });

  weatherInfo = signal<WeatherInfo | null>(null);
  dailyMessage = signal<DailyMessage | null>(null);

  ngAfterViewInit(): void {
    this.dailyMessage.set(this.getDailyMessage());

    this.versionService.getVersion().subscribe(data => {
      setTimeout(() => {
        this.versionInfo.set((data ?? {}));
      });
    });

    this.versionService.getVersionBE().subscribe({
      next: (data: any) => {
        this.versionInfoBE.set((data.data ?? {}));
      },
      error: (err: any) => {
        console.error('Error loading tessere', err);
      },
    });

    this.weatherService.getRomeWeather().subscribe({
      next: (data) => {
        const days = data.daily.time.map((date, index) => {
          const parsedDate = new Date(date);

          return {
            date,
            temperature: Math.round(data.daily.temperature_2m_max[index]),
            weatherCode: data.daily.weather_code[index],
            dayLetter: this.getItalianDayLetter(parsedDate),
            isToday: index === 0
          };
        });

        this.weatherInfo.set({
          city: 'Roma',
          days
        });
      },
      error: (err) => {
        console.error('Error loading weather', err);
      }
    });

  }

  private getDailyMessage(): DailyMessage {
    const messages = dailyMessages as DailyMessage[];
    const dayOfYear = this.getDayOfYear(new Date());

    return messages[dayOfYear % messages.length];
  }

  private getDayOfYear(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - start.getTime();

    return Math.floor(diff / 86400000);
  }

  getItalianDayLetter(date: Date): string {
    return date
      .toLocaleDateString('it-IT', { weekday: 'short' })
      .charAt(0)
      .toUpperCase();
  }

  dailyMessageIcon(type: DailyMessage['type']): string {
    switch (type) {
      case 'tip':
        return '💡';
      case 'quote':
        return '💬';
      case 'safety':
        return '🦺';
      case 'firefighter':
        return '🚒';
      case 'history':
        return '📜';
      case 'curiosity':
        return '📚';
      default:
        return 'ℹ️';
    }
  }

  weatherIcon(code: number): string {
    if (code === 0) return '☀️';
    if ([1, 2, 3].includes(code)) return '⛅';
    if ([45, 48].includes(code)) return '🌫️';
    if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️';
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '❄️';
    if ([95, 96, 99].includes(code)) return '⛈️';

    return '🌡️';
  }

}
