export default async function getWeatherData() {
  try {
    const APIkey = "242db9d02ad5442f87771054231904";
    const location = "san jose costa rica";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    return weatherData;
  } catch (error) {
    return error;
  }
}
