import { useState } from "react";
import { fetchWeatherData } from "../services/fetch";

export const AppMain = () => {
  const [placeValue, setPlaceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleWeatherFetch = (place: string) => {
    setIsLoading(true); // Set loading to true before fetching

    //using fetch logic to get weather data
    fetchWeatherData(place)
      .then((data) => {
        console.log("Fetched data succesfully", data);
        setIsLoading(false); // Set loading to false after fetching
      })
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Weatheo</h1>
        <input
          className="searchBox"
          type="text"
          value={placeValue}
          onChange={(e) => setPlaceValue(e.target.value)}
          placeholder="Enter a town to check the weather..."
        />
        {isLoading ? (
          <button className="loadingButton" disabled={true}>
            Checking...
          </button>
        ) : (
          <button
            className="submitButton"
            onClick={() => HandleWeatherFetch(placeValue)}
          >
            Check the weather
          </button>
        )}
      </div>
    </div>
  );
};
