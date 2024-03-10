import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <body>
      <div className="bg">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
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
    </body>
  );
}

export default App;
