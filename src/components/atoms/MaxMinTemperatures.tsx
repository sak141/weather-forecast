import React from "react";
import styled from "styled-components";

const Temperatures = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const MaxTemperature = styled.p`
  color: #ffb4b4;
  margin: 0;
`;
const MinTemperature = styled.p`
  color: #93bffe;
  margin: 0;
`;

const MaxMinTemperatures = ({ maxTemperature, minTemperature }: Props) => (
  <Temperatures>
    <MaxTemperature>{maxTemperature}</MaxTemperature>
    <MinTemperature>{minTemperature}</MinTemperature>
  </Temperatures>
);

type Props = {
  maxTemperature: string;
  minTemperature: string;
};

export default MaxMinTemperatures;
