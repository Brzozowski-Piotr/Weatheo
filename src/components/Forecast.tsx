import React from "react";
import "../App.css";

export const Forecast = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="forecast">
          <div className="forecastHeader">
            <img
              className="weatherIcon"
              src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
              alt="Icon representing actual weather"
            />
            <h2 className="temperature">20°C</h2>
            <h1 className="cityName headerText">Gorzów Wielkopolski</h1>
          </div>
          <div className="forecastContainer">
            <div className="detailsContainer">
              <span className="detailsText">Feels like:</span>
              <span className="detailsText">3.5°C</span>
            </div>
            <div className="detailsContainer">
              <span className="detailsText">Pressure:</span>
              <span className="detailsText">1018 hPa</span>
            </div>
            <div className="detailsContainer">
              <span className="detailsText">Wind:</span>
              <span className="detailsText">3.5km/h</span>
            </div>
          </div>
          <div className="separator"></div>
        </div>
        <button className="submitButton">Back</button>
      </div>
    </div>
  );
};
