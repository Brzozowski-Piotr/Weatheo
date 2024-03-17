import { useState } from "react";
import { fetchWeatherData } from "../services/fetch";

//Interface used to update showForecast useState in App.tsx to change displayed component

/*Doing this way beacause is the easiest solution that comes to my head to prevent css animation 
with clouds/stars to start from beginnning when we move between pages.*/

/* This issue come from react nature of unmount and mount components, when this happend the animation "resets"*/
interface AppMainProps {
  setShowForecast: React.Dispatch<React.SetStateAction<boolean>>;
}
//Pasing as a argument updating function "setShowForecast" from useState in App.tsx
export const AppMain: React.FC<AppMainProps> = ({ setShowForecast }) => {
  const [placeValue, setPlaceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const HandleWeatherFetch = (place: string) => {
    setIsLoading(true); // Set loading to true before fetching

    //using fetch logic to get weather data
    fetchWeatherData(place)
      .then((data) => {
        console.log("Fetched data succesfully", data);
        setIsLoading(false); // Set loading to false after fetching
        setShowForecast(true); //Set showForecast to true to show component "<Forecast />"" in App.tsx
      })
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="logoFullSize">Weatheo</h1>
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
