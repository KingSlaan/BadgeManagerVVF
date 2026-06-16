import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface WeatherInfo {
  temperature: number;
  weatherCode: number;
  city: string;
}

interface OpenMeteoResponse {
  current: {
    temperature_2m: number;
    weather_code: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private http = inject(HttpClient);

  getRomeWeather() {
    return this.http.get<OpenMeteoResponse>(
      'https://api.open-meteo.com/v1/forecast?latitude=41.9028&longitude=12.4964&current=temperature_2m,weather_code'
    );
  }
}
