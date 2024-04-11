import React from "react";
import "../App.css";

export const Forecast = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="logoStyling logoSmallSize">Weatheo</h1>
        <div className="forecast">
          <div className="forecastHeader">
            <img
              className="WeatherIconBig"
              src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
              alt="Icon representing actual weather"
            />
            <h2 className="temperature">20°C</h2>
            <h1 className="cityName headerText">Gorzów Wielkopolski</h1>
          </div>
          <div className="forecastContainer">
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Feels like:</span>
              <span className="secondTextBoldDimmed">3.5°C</span>
            </div>
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Pressure:</span>
              <span className="secondTextBoldDimmed">1018 hPa</span>
            </div>
            <div className="detailsContainer">
              <span className="secondTextBoldDimmed">Wind:</span>
              <span className="secondTextBoldDimmed">3.5km/h</span>
            </div>
          </div>
          <div className="separator"></div>
          <div className="forecastText">
            <span className="secondTextBoldDimmed">
              Forecast for next 3 days:
            </span>
          </div>
          <div className="prognosisContainer">
            <div>
              <span className="secondTextBold">Monday</span>
            </div>
            <div className="prognosisIconContainer">
              <img
                className="WeatherIconSmall"
                src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
                alt="Icon representing weather for next 3 days"
              />
            </div>
            <div>
              <span>2°C - 4°C</span>
            </div>
          </div>
        </div>
        <button className="submitButton">Back</button>
      </div>
    </div>
  );
};
