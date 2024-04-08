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
            <h1 className="cityName headerText">Gorzów Wielkopolski</h1>
            <h1 className="temperature headerText">5°C</h1>
          </div>
          <div className="forecastDetails">
            <span className="details detailsText">Ciśnienie: 1000 hPa</span>
            <span className="details detailsText">Wiatr: 6km/h</span>
            <span className="details detailsText">Odczuwalna: 33.5°C</span>
          </div>
        </div>
        <button className="submitButton">Back</button>
      </div>
    </div>
  );
};
