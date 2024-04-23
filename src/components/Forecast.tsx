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

  const getDayOfWeek = (dateString: string) => {
    const dateObj = new Date(dateString);
    return dateObj.toLocaleDateString("en-US", { weekday: "long" });
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
              alt={`The weather for today appears to be ${weatherData.current.condition.text}`}
            />
            <h2 className="temperature">
              {weatherData.current.temp_c.toFixed(0)}°C
            </h2>
            <div className="cityNameContainer">
              <h1 className="cityName">{weatherData.location.name}</h1>
            </div>
          </div>
          <div className="rowContainer rowDetailsMargin">
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Feels like:</span>
              <span className="secondTextBoldDimmed">
                {weatherData.current.feelslike_c.toFixed(0)}°C
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
              Forecast for next 2 days:
            </span>
          </div>
          {/* Used slice to skip first array on object forecastday bcs he contains current weather data not for next day */}
          {weatherData.forecast.forecastday.slice(1).map((forecast, index) => (
            <div key={index} className="rowContainer rowForecastMargin">
              <div>
                <span className="secondTextBold">
                  {getDayOfWeek(forecast.date)}
                </span>
              </div>
              <div className="prognosisIconContainer">
                <img
                  className="weatherIconSmall"
                  src={forecast.day.condition.icon}
                  alt={`The weather for ${getDayOfWeek(
                    forecast.date
                  )} appears to be ${forecast.day.condition.text}`}
                />
              </div>
              <div>
                <span className="secondTextBold">
                  {forecast.day.mintemp_c.toFixed(0)}°C -{" "}
                  {forecast.day.maxtemp_c.toFixed(0)}°C
                </span>
              </div>
            </div>
          ))}
        </div>
        <button className="button submitButton" onClick={HandleBackButtonPress}>
          Back
        </button>
      </div>
    </div>
  );
};
