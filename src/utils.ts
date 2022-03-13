import { IWeatherIcon } from "./interfaces/IOpenWeatherResponse";

export const formatTemperature = (temperature: number): string => temperature ? `${Math.floor(temperature)}°C` : '';

export const getDayFromTimestamp = (timestamp: number, timezone: string): string => {
  try {
    const date = new Date(timestamp*1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', timeZone : timezone });
  } catch (error) {
    console.log(error);
  }
  return '';
};

export const getWeatherIcon = (weatherIcons: Array<IWeatherIcon>): IWeatherIcon | undefined => {
  let weatherIcon: IWeatherIcon;
  if (
    Array.isArray(weatherIcons) &&
    weatherIcons.length > 0
  ) {
    weatherIcon = weatherIcons[0];
  }
  return weatherIcon
}