import getWeatherData from "./weatherAPI";

const searchResDiv = document.querySelector(".searchResult");

function appendCondition(data, subdata, sub2data, sub3data) {
  const conditionDiv = searchResDiv.querySelector(".locationAndCondition");
  const para = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = `${data[subdata][sub2data][sub3data]}`;
  para.textContent = "Condition: ";
  const div = document.createElement("div");
  [para, span].forEach((element) => div.appendChild(element));
  conditionDiv.appendChild(div);
}

function appendElement(caption, data, subdata, subsubdata, unit, targetDiv) {
  const para = document.createElement("p");
  const span = document.createElement("span");
  span.textContent = `${data[subdata][subsubdata]} ${unit}`;
  para.textContent = `${caption}: `;
  const div = document.createElement("div");
  [para, span].forEach((element) => div.appendChild(element));
  targetDiv.appendChild(div);
}

function removeElement(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
}

async function displayElements() {
  try {
    const response = await getWeatherData(getSearchResult());
    const degrees = document.querySelector(".degrees");
    const feelsLike = document.querySelector(".feelsLike");
    const locationAndCondition = document.querySelector(
      ".locationAndCondition"
    );
    const wind = document.querySelector(".wind");
    const UV = document.querySelector(".UV");

    [degrees, feelsLike, locationAndCondition, wind, UV].forEach((div) =>
      removeElement(div)
    );
    appendElement(
      "City",
      response,
      "location",
      "name",
      "",
      locationAndCondition
    );
    appendElement(
      "Country",
      response,
      "location",
      "country",
      "",
      locationAndCondition
    );
    appendCondition(response, "current", "condition", "text");
    appendElement("Temperature", response, "current", "temp_c", "°C", degrees);
    appendElement("Temperature", response, "current", "temp_f", "°F", degrees);
    appendElement(
      "Feels like",
      response,
      "current",
      "feelslike_c",
      "°C",
      feelsLike
    );
    appendElement(
      "Feels like",
      response,
      "current",
      "feelslike_f",
      "°F",
      feelsLike
    );
    appendElement("Wind speed", response, "current", "wind_kph", "Kph", wind);
    appendElement("Wind direction", response, "current", "wind_dir", "", wind);
    appendElement("UV Index", response, "current", "uv", "", UV);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function getSearchResult() {
  const searchInp = document.getElementById("searchInput");
  const { value } = searchInp;
  searchInp.value = "";
  return value;
}

function showSearchResult() {
  searchResDiv.classList.remove("hidden");
}

export default function events() {
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", handleUserInput);

  function handleUserInput() {
    showSearchResult();
    displayElements();
  }
}