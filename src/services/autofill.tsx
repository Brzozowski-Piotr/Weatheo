import { apiKey } from "../main";

export const autofill = async (place: string) => {
  const url = `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${place}`;

  try {
    const response = await fetch(url);
    console.log("fetch-autofill:", place);
    const autofillData = await response.json();
    return { data: autofillData }; // return data
  } catch (error) {
    return { data: null, error }; // return no data
  }
};
