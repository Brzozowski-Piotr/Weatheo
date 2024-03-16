import React from "react";

export const AppMain = () => {
  return (
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
  );
};
