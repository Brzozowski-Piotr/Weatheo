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
          <div className="forecastDetails">
            <span className="detailsFirst detailsText">{`(-3333.5°C)`}</span>
            <span className="detailsSecond detailsText">hPa:1000</span>
            <span className="detailsSecond detailsText">W:300m/s</span>
          </div>
        </div>
        <button className="submitButton">Back</button>
      </div>
    </div>
  );
};
