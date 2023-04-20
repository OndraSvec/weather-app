import getWeatherData from "./weatherAPI";
import "../styles/style.css";

export default async function displayH2() {
  const response = await getWeatherData();

  /*
  const h2 = document.createElement("h2");
  h2.textContent = response.location.country;
  const div = document.querySelector(".form-input");
  div.appendChild(h2);
  */
}
displayH2();
