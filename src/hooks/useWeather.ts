import { useEffect, useState } from "react";
import { WEATHER_API } from "../constants";
import { IOpenWeatherResponse } from "../interfaces/IOpenWeatherResponse";

const useWeather = (lat: number, long: number): [IOpenWeatherResponse | undefined] => {
  const [weather, setWeather] = useState<IOpenWeatherResponse | undefined>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(`${WEATHER_API}&lat=${lat}&lon=${long}`);
        const weather: IOpenWeatherResponse = await response.json();
        console.log(weather);
        setWeather(weather);
      } catch (error) {}
    };
    if (typeof lat === "number" && typeof long === "number") {
      fetchWeather();
    }
  }, [lat, long]);

  return [weather];
};

export default useWeather;
