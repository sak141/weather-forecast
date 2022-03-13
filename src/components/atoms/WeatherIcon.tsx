import React from "react";
import Icon from "react-icons-weather";

const WeatherIcon = ({ iconId }: Props) => {
  return (
    <>
      {iconId ? (
        <Icon name="owm" iconId={iconId} flip="horizontal" rotate="90" />
      ) : null}
    </>
  );
};

type Props = {
  iconId: number;
};

export default WeatherIcon;
