import React from "react";
import styled from "styled-components";
import { IWeatherIcon } from "../../interfaces/IOpenWeatherResponse";
import { formatTemperature, getDayFromTimestamp } from "../../utils";
import MaxMinTemperatures from "../atoms/MaxMinTemperatures";
import WeatherIcon from "../atoms/WeatherIcon";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  height: 7rem;
`;

const DayName = styled.div`
  font-size: 0.8em;
`;

const DailyWeatherIcon = styled(WeatherIcon)`
  font-size: 0.8rem;
  padding: 2rem;;
`;

const DailyForecast = ({ maxTemperature, minTemperature, timestamp, timezone, icon }: Props) => (
  <Wrapper>
    <DayName>{getDayFromTimestamp(timestamp, timezone)}</DayName>
    <DailyWeatherIcon iconId={icon?.id} />
    <MaxMinTemperatures
      maxTemperature={formatTemperature(maxTemperature)}
      minTemperature={formatTemperature(minTemperature)}
    />
  </Wrapper>
);

type Props = {
  timestamp: number;
  timezone: string;
  maxTemperature: number;
  minTemperature: number;
  icon?: IWeatherIcon;
};

export default DailyForecast;
