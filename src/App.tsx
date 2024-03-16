import React, { useState, useEffect } from "react";
import "./App.css";
import { Background } from "./components/Background";
import { AppMain } from "./components/AppMain";
function App() {
  return (
    <>
      <Background />
      <AppMain />
    </>
  );
}

export default App;
