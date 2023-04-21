import getWeatherData from "./weatherAPI";

const searchResDiv = document.querySelector(".searchResult");

function appendElement(caption, data, subdata, subsubdata, unit, target) {
  const DOMElement = document.createElement("p");
  DOMElement.textContent = `${caption}: ${data[subdata][subsubdata]}${unit}`;
  const div = document.querySelector(target);
  div.appendChild(DOMElement);
}

async function displayElements() {
  try {
    const response = await getWeatherData(getSearchResult());
    appendElement(
      "Temperature",
      response,
      "current",
      "temp_c",
      "°C",
      ".degrees"
    );
    appendElement(
      "Feels like",
      response,
      "current",
      "feelslike_c",
      "°C",
      ".feelsLike"
    );
  } catch (error) {
    searchResDiv.textContent = "Invalid location input";
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
