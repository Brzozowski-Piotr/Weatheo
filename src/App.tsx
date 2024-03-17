import { useState } from "react";
import { Forecast } from "./components/Forecast";
import { AppMain } from "./components/AppMain";
import { Background } from "./components/Background";
import "./App.css";

function App() {
  const [showForecast, setShowForecast] = useState(false);
  return (
    <>
      <Background />
      {showForecast ? (
        <Forecast />
      ) : (
        //Passing as a argument update function "setShowForecast" from useState
        <AppMain setShowForecast={setShowForecast} />
      )}
    </>
  );
}

export default App;
