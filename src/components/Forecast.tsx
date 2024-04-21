import React from "react";
import { WeatherData } from "./types/WeatherTypes";
import "../App.css";

interface ForecastProps {
  setShowForecast: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: React.Dispatch<React.SetStateAction<undefined>>;
  weatherData: WeatherData;
}

export const Forecast: React.FC<ForecastProps> = ({
  setShowForecast,
  setWeatherData,
  weatherData,
}) => {
  const HandleBackButtonPress = () => {
    setWeatherData(undefined);
    setShowForecast(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="logoStyling logoSmallSize">Weatheo</h1>
        <div className="forecast">
          <div className="forecastHeader">
            <img
              className="weatherIconBig"
              src={weatherData.current.condition.icon}
              alt="Icon representing actual weather"
            />
            <h2 className="temperature">{weatherData.current.temp_c}°C</h2>
            <div className="cityNameContainer">
              <h1 className="cityName">{weatherData.location.name}</h1>
            </div>
          </div>
          <div className="rowContainer rowDetailsMargin">
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Feels like:</span>
              <span className="secondTextBoldDimmed">
                {weatherData.current.feelslike_c}°C
              </span>
            </div>
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Pressure:</span>
              <span className="secondTextBoldDimmed">
                {weatherData.current.pressure_mb}hPa
              </span>
            </div>
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Wind:</span>
              <span className="secondTextBoldDimmed">
                {weatherData.current.wind_kph}km/h
              </span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="forecastText">
            <span className="secondTextBoldDimmed">
              Forecast for next 3 days:
            </span>
          </div>
          <div className="rowContainer rowForecastMargin">
            <div>
              <span className="secondTextBold">Monday</span>
            </div>
            <div className="prognosisIconContainer">
              <img
                className="weatherIconSmall"
                src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
                alt="Icon representing weather for next 3 days"
              />
            </div>
            <div>
              <span className="secondTextBold">2°C - 4°C</span>
            </div>
          </div>
        </div>
        <button className="button submitButton" onClick={HandleBackButtonPress}>
          Back
        </button>
      </div>
    </div>
  );
};
