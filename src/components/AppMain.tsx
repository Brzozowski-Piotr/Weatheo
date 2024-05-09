import { ChangeEvent, useState } from "react";
import { fetchWeatherData } from "../services/fetch";
import { getUserLocation } from "../services/geolocation";
import { autofill } from "../services/autofill";
import { checkForLanguageDiacritic } from "../services/characterValidation";
import { Footer } from "./Footer";
import { AutoFillItem } from "./types/WeatherTypes";

import "../styles/AppMain.css";

// Interface used to update showForecast useState in App.tsx to change displayed component

/* Doing this way beacause is the easiest solution that comes to my head to prevent css animation 
with clouds/stars to start from beginnning when we move between pages.*/

// This issue come from react nature of unmount and mount components, when this happend the animation "resets"
interface AppMainProps {
  setShowForecast: React.Dispatch<React.SetStateAction<boolean>>;
  setWeatherData: React.Dispatch<React.SetStateAction<undefined>>;
}
// Pasing as a argument updating function "setShowForecast" from useState in App.tsx
export const AppMain: React.FC<AppMainProps> = ({
  setShowForecast,
  setWeatherData,
}) => {
  const [placeValue, setPlaceValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [autoFillVisable, setIsAutoFillVisable] = useState(false);
  const [autoFill, setAutoFill] = useState(Object);
  const [error, setError] = useState("");

  const handleClick = () => {
    setIsAutoFillVisable(false);
  };

  const handleGetLocationButtonClick = async () => {
    try {
      const userLocation = await getUserLocation();
      setPlaceValue(userLocation);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAutoFillClick = (autofill: string) => {
    setPlaceValue(autofill);
    setIsAutoFillVisable(false);
    setAutoFill(null);
  };

  const handleWeatherFetch = (place: string) => {
    // Checking if input field is not empty or contains language diacritic
    if (place === "") {
      setError("The field must not be empty");
      return;
    } else if (checkForLanguageDiacritic(place)) {
      setError("Name of the town must not contain language diacritic");
      return;
    }

    setIsLoading(true); // Set loading to true before fetching

    // Using fetch logic to get weather data
    fetchWeatherData(place)
      .then((data) => {
        // Handling errors that can accure

        // When bad request occurs from fetch then error been displayed and other action been abandoned

        /* Checking data.error and data.error.message beacause when I checking only data.error.message
        the error accure "Cannot read properties of null (reading 'message')" when subBtn been pressed
        and input "searchBox" has been not empty and thats preventing fetch to be done */

        if (data.error && data.error.message === "HTTP error occurred: 400") {
          //console.log(data.error.message);
          setError("Name of the town seems to be incorrect");
          setIsLoading(false);
          return;
          // When null been provided from fetch then errer been displayed and other action been abandoned
        } else if (data.data === null) {
          //console.log("Fetching ended with null data", data);
          setIsLoading(false);
          setError("No weather data has been provided to be shown");
          return;
        }
        // When everything go well fetched data been showed
        //console.log("Fetched data succesfully", data.data);
        setWeatherData(data.data); //Set data provided from fetch to variable
        setIsLoading(false); // Set loading to false after fetching
        setShowForecast(true); //Set showForecast to true to show component "<Forecast />"" in App.tsx
      })
      // Catching unsupported errors and displaying it
      .catch((error) => {
        console.error(error.message);
        setIsLoading(false);
        setError(error.message);
      });
  };

  //When user press enter while typing on input then fetch request been send (it's faster than clicking submitButton)
  const handleEnterKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setIsAutoFillVisable(false);
      setAutoFill(null);
      setIsLoading(true);
      handleWeatherFetch(placeValue);
    }
  };

  // Handling input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPlaceValue(value);
    setError("");
    if (value.length >= 3) {
      autofill(value).then((data) => {
        if (!data) {
          setIsAutoFillVisable(false);
          setAutoFill(null);
          //console.log(value);
        } else if (data.data.length > 0) {
          //console.log(value);
          setIsAutoFillVisable(true);
          setAutoFill(data);
          //console.log(autoFill.data);
        }
      });
    } else if (value.length < 3) {
      setIsAutoFillVisable(false);
      setAutoFill(null);
    }
  };

  return (
    <div className="App" onClick={handleClick}>
      <div className="container">
        <h1 className="logoStyling logoFullSize">Weatheo</h1>
        {error !== "" ? (
          <div className="errorContainer">
            <span>An error accured: {error}</span>
          </div>
        ) : (
          <></>
        )}
        <div className="inputContainer">
          <input
            className="searchBox"
            type="text"
            value={placeValue}
            // Changed due to mulitple useState update
            onChange={handleInputChange}
            onKeyDown={handleEnterKeyPress}
            placeholder="Enter a town to check weather..."
          />
          <button
            className="getLocationButton"
            onClick={handleGetLocationButtonClick}
          >
            📍
          </button>
        </div>

        {isLoading ? (
          <button
            className="loading button defaultLoadingButton"
            disabled={true}
          >
            Checking...
          </button>
        ) : (
          <button
            className="submit button defaultButton"
            onClick={() => handleWeatherFetch(placeValue)}
          >
            Check the weather
          </button>
        )}
        <Footer />
        {autoFillVisable ? (
          <div className="autofillContainer">
            <div className="autofill">
              <ul>
                {autoFill.data.map(
                  (autofillitem: AutoFillItem, index: number) => (
                    <li
                      key={index}
                      onClick={() => handleAutoFillClick(autofillitem.name)}
                    >
                      {autofillitem.name}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
