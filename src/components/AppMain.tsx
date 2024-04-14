import { ChangeEvent, useState } from "react";
import { fetchWeatherData } from "../services/fetch";

//Interface used to update showForecast useState in App.tsx to change displayed component

/*Doing this way beacause is the easiest solution that comes to my head to prevent css animation 
with clouds/stars to start from beginnning when we move between pages.*/

/* This issue come from react nature of unmount and mount components, when this happend the animation "resets"*/
interface AppMainProps {
  setShowForecast: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: React.Dispatch<React.SetStateAction<undefined>>;
}
//Pasing as a argument updating function "setShowForecast" from useState in App.tsx
export const AppMain: React.FC<AppMainProps> = ({
  setShowForecast,
  setWeatherData,
}) => {
  const [placeValue, setPlaceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const HandleWeatherFetch = (place: string) => {
    //Checking if input field is not empty
    if (place === "") {
      setError("The field must not be empty");
      return;
    }

    setIsLoading(true); // Set loading to true before fetching

    //using fetch logic to get weather data
    fetchWeatherData(place)
      .then((data) => {
        //Handling errors that can accure

        //When bad request occurs from fetch then error been displayed and other action been abandoned

        /*Checking data.error and data.error.message beacause when I checking only data.error.message
        the error accure "Cannot read properties of null (reading 'message')" when subBtn been pressed
        and input "searchBox" has been not empty and thats preventing fetch to be done */

        if (data.error && data.error.message === "HTTP error occurred: 400") {
          //console.log(data.error.message);
          setError("Name of the town seems to be incorrect");
          setIsLoading(false);
          return;
          //When null been provided from fetch then errer been displayed and other action been abandoned
        } else if (data.data === null) {
          console.log("Fetching ended with null data", data);
          setIsLoading(false);
          setError("No weather data has been provided to be shown");
          return;
        }
        //When everything go well fetched data been showed
        console.log("Fetched data succesfully", data.data);
        setWeatherData(data.data); //Set data provided from fetch to variable
        setIsLoading(false); // Set loading to false after fetching
        setShowForecast(true); //Set showForecast to true to show component "<Forecast />"" in App.tsx
      })
      //Catching unsupported errors and displaying it
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
        setError(error.message);
      });
  };

  //Handling input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlaceValue(value);
    setError("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="logoStyling logoFullSize">Weatheo</h1>
        {error !== "" ? (
          <div className="errorContainer">
            <span>An error accured: {error}</span>
          </div>
        ) : (
          <></>
        )}

        <input
          className="searchBox"
          type="text"
          value={placeValue}
          //changed due to mulitple useState update
          onChange={handleInputChange}
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
