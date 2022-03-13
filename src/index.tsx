import React from "react";
import ReactDOM from "react-dom";
import WeatherWidget from "./components/organisms/WeatherWidget";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const App = () => (
  <div>
    <h1>Weather App!</h1>
    <ThemeProvider theme={theme}>
      <WeatherWidget />
    </ThemeProvider>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
