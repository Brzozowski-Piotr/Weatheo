import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="bg">
        <div className="cloud"></div>
      </div>

      <div className="App">
        <div className="container">
          <h1>Weatheo</h1>
          <input
            className="searchBox"
            type="text"
            placeholder="Enter a town to check the weather..."
          />
          <button>Check the weather</button>
        </div>
      </div>
    </>
  );
}

export default App;
