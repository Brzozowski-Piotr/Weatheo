import { checkForLanguageDiacritic } from "./characterValidation";

export async function getUserLocation(): Promise<string> {
  try {
    // Get the user's current position using the Geolocation API
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );
    // Extract latitude and longitude from the obtained position
    const { latitude, longitude } = position.coords;
    // Fetch the name of the location based on latitude and longitude
    const location = await fetchLocationName(latitude, longitude);

    if (checkForLanguageDiacritic(location)) {
      // Replace Polish diacritic characters with their ASCII equivalents
      return location.replace(
        /[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g,
        (match) =>
          ({
            ą: "a",
            Ą: "A",
            ć: "c",
            Ć: "C",
            ę: "e",
            Ę: "E",
            ł: "l",
            Ł: "L",
            ń: "n",
            Ń: "N",
            ó: "o",
            Ó: "O",
            ś: "s",
            Ś: "S",
            ź: "z",
            Ź: "Z",
            ż: "z",
            Ż: "Z",
          }[match] || match)
      );
    }
    return location;
  } catch (error) {
    // Throw an error if location retrieval fails
    throw new Error("Failed to get your location");
  }
}

async function fetchLocationName(
  latitude: number,
  longitude: number
): Promise<string> {
  try {
    // Fetch location name from OpenStreetMap Nominatim API using latitude and longitude
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    // Parse the response JSON
    const data = await response.json();
    // Extract the location name from the response data
    if (data.address && data.address.city) {
      return data.address.city;
    } else if (data.address && data.address.town) {
      return data.address.town;
    } else if (data.address && data.address.village) {
      return data.address.village;
    } else if (data.address && data.address.hamlet) {
      return data.address.hamlet;
    } else {
      // If the location name cannot be determined from the response, throw an error
      throw new Error("The name of the place cannot be obtained");
    }
  } catch (error) {
    // Throw an error if fetching location name fails
    throw new Error(error);
  }
}
