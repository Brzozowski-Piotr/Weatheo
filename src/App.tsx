import { useState } from "react";
import { Forecast } from "./components/Forecast";
import { AppMain } from "./components/AppMain";
import { Background } from "./components/Background";
import "./App.css";

function App() {
  const [showForecast, setShowForecast] = useState(false);
  const [weatherData, setWeatherData] = useState();
  return (
    <>
      <Background />
      {showForecast ? (
        <Forecast
          setShowForecast={setShowForecast}
          setWeatherData={setWeatherData}
          weatherData={weatherData}
        />
      ) : (
        //Passing as a argument update function "setShowForecast" from useState and save weather data from fetch
        <AppMain
          setShowForecast={setShowForecast}
          setWeatherData={setWeatherData}
        />
      )}
    </>
  );
}

export default App;
