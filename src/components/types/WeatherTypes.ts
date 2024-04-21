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

export interface WeatherData {
  location: Location;
  current: Current;
}
