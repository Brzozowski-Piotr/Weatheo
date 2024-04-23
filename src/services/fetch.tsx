import { apiKey } from "../main";

export const fetchWeatherData = async (place: string) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${place}&days=3&aqi=yes&alerts=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error occurred: ${response.status}`);
    }
    const weatherData = await response.json();
    return { data: weatherData, error: null }; // return data and null error
  } catch (error) {
    console.error(error.message);
    return { data: null, error }; // return no data and error
  }
};
