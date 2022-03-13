export interface IWeatherIcon {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IDailyWeather {
  dt: number;
  temp: {
    min: number;
    max: number;
  };
  weather: Array<IWeatherIcon>;
}

export interface IOpenWeatherResponse  {
  lat: number;
  lon: number;
  timezone: string;
  current: {
    temp: number;
    weather: Array<IWeatherIcon>;
  };
  daily: Array<IDailyWeather>;
}
