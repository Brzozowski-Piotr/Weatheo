export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface Condition {
  text: string;
  icon: string;
  code: number;
}
export interface Current {
  temp_c: number;
  condition: Condition;
  wind_kph: number;
  pressure_mb: number;
  feelslike_c: number;
}

export interface Day {
  mintemp_c: number;
  maxtemp_c: number;
  condition: Condition;
}

export interface ForecastDay {
  date: string;
  day: Day;
}

export interface Forecast {
  forecastday: ForecastDay[];
}

export interface WeatherData {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface AutoFillItem {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
}
