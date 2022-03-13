import React from "react";
import useGeoLocation from "../../hooks/useGeoLocation";
import useGetCityFromGeoLocation from "../../hooks/useGetCityFromGeoLocation";
import useWeather from "../../hooks/useWeather";
import { IWeatherIcon } from "../../interfaces/IOpenWeatherResponse";
import WeatherIcon from "../atoms/WeatherIcon";
import styled from "styled-components";
import { formatTemperature, getWeatherIcon } from "../../utils";
import DailyForecast from "../molecules/DailyForecast";

const CurrentWeather = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 50rem;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  font-size: medium;
  padding: 0.5rem;
`;

const Wrapper = styled.article`
  background-color: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.fg};
  max-width: 50rem;
`;

const CurrentConditions = styled.div`
  width: 5.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Temperature = styled.div`
  font-size: 1.6rem;
`;

const Description = styled.div`
  font-size: 0.9rem;
  padding-top: 3px;
  margin: 0 auto;
`;

const StyledIcon = styled.div`
  font-size: 2rem;
`;

const Forecast = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.6rem 0.3rem;
`;

const WeatherWidget = () => {
  const [lat, long] = useGeoLocation();
  const [city] = useGetCityFromGeoLocation(lat, long);
  const [weatherData] = useWeather(lat, long);

  const currentWeatherIcon: IWeatherIcon | undefined = getWeatherIcon(
    weatherData?.current?.weather
  );

  const currentTemperature: string = formatTemperature(
    weatherData?.current?.temp
  );

  const forecastItems = weatherData?.daily.map((item) => (
    <DailyForecast
      key={`dailyforecast-${item.dt}`}
      timestamp={item.dt}
      timezone={weatherData?.timezone}
      maxTemperature={item?.temp?.max}
      minTemperature={item?.temp?.min}
      icon={getWeatherIcon(item?.weather)}
    />
  ));

  return (
    <Wrapper>
      <CurrentWeather>
        <h2>{city}</h2>
        <StyledIcon>
          <WeatherIcon iconId={currentWeatherIcon?.id} />
        </StyledIcon>
        <CurrentConditions>
          <Temperature>{currentTemperature}</Temperature>
          <Description>{currentWeatherIcon?.description}</Description>
        </CurrentConditions>
      </CurrentWeather>
      <Forecast>{forecastItems}</Forecast>
    </Wrapper>
  );
};

export default WeatherWidget;
