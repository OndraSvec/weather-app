export default async function getWeatherData() {
  try {
    const APIkey = "242db9d02ad5442f87771054231904";
    const location = "san jose costa rica";
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`
    );
    const weatherData = await response.json();

    return {
      location_city: weatherData.location.name,
      location_country: weatherData.location.country,
      condition: weatherData.current.condition.text,
      icon: weatherData.current.condition.icon,
      temp_c: weatherData.current.temp_c,
      temp_f: weatherData.current.temp_f,
      feelslike_c: weatherData.current.feelslike_c,
      feelslike_f: weatherData.current.feelslike_f,
      uv: weatherData.current.uv,
      wind_dir: weatherData.current.wind_dir,
      wind_kph: weatherData.current.wind_kph,
    };
  } catch (error) {
    return error;
  }
}
