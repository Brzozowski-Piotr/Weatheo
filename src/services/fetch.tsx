import { useState, useEffect } from "react";
import { apiKey } from "../../main";
const place = "Warsaw";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`;

export const Fetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetching data from weatherapi.com
  useEffect(() => {
    const getData = async () => {
      try {
        //setting loading to true
        setLoading(true);
        //fetching
        const response = await fetch(url);
        // if response get 4xx error then throw error
        if (!response.ok) {
          throw new Error(`HTTP error accured ${response.status}`);
        }
        //converting data to json
        const weatherData = await response.json();
        setData(weatherData);
        console.log(weatherData);
        setError(null);
      } catch (error) {
        setError(error.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return <div>fetch</div>;
};
