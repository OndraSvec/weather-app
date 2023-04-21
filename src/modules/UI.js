import getWeatherData from "./weatherAPI";

const searchResDiv = document.querySelector(".searchResult");

async function displayElement(responseData, responseSubData) {
  try {
    const response = await getWeatherData(getSearchResult());

    const DOMElement = document.createElement("h1");
    DOMElement.textContent = `Temperature: ${response[responseData][responseSubData]}°C`;
    const div = document.createElement("div");
    div.classList.add("hello");
    div.appendChild(DOMElement);
    searchResDiv.appendChild(div);
    console.log(response);
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
    displayElement("current", "temp_c");
  }
}
