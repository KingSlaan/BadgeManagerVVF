import { VersionService } from './../../../services/version.service';
import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { VersionInfo, VersionInfoBE } from '../../../../interfaces/version-info';
import { DatePipe } from '@angular/common';
import { WeatherService, WeatherInfo } from './../../../services/weather.service';

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

  ngAfterViewInit(): void {
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
        this.weatherInfo.set({
          city: 'Roma',
          todayTemp: Math.round(data.current.temperature_2m),
          todayCode: data.current.weather_code,
          tomorrowTemp: Math.round(data.daily.temperature_2m_max[1]),
          tomorrowCode: data.daily.weather_code[1]
        });
      },
      error: (err) => {
        console.error('Error loading weather', err);
      }
    });

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
