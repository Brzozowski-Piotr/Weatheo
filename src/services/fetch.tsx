import { apiKey } from "../main";

export const fetchWeatherData = async (place: string) => {
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${place}&aqi=no`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error occurred: ${response.status}`);
    }
    const weatherData = await response.json();
    return { data: weatherData, error: null }; // Zwracaj dane i brak błędu
  } catch (error) {
    console.error(error.message);
    return { data: null, error }; // Zwracaj brak danych i błąd
  }
};
