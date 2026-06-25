import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface WeatherDay {
  date: string;
  temperature: number;
  weatherCode: number;
  dayLetter: string;
  isToday: boolean;
}

export interface WeatherInfo {
  city: string;
  days: WeatherDay[];
}

interface OpenMeteoResponse {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    weather_code: number[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  getRomeWeather() {
  return this.http.get<OpenMeteoResponse>(
    'https://api.open-meteo.com/v1/forecast' +
    '?latitude=41.9028' +
    '&longitude=12.4964' +
    '&daily=weather_code,temperature_2m_max' +
    '&forecast_days=8' +
    '&timezone=Europe%2FRome'
  );
}
}
