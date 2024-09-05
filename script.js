import FetchWrapper from "./fetch-wrapper.js";
const searchBtn = document.querySelector(".search-btn");
const recipeContainer = document.querySelector(".recipe-container");
const searchInput = document.querySelector(".search");
const API = new FetchWrapper(
  "https://api.spoonacular.com/recipes/complexSearch?query="
);

const lowerCaseAndHypenate = function () {
  searchInput.value.trim().replaceAll(" ", "-").toLowerCase();
};

const searchForRecipe = async function () {
  recipeContainer.innerHTML = "";
  lowerCaseAndHypenate();
  if (!searchInput.value) {
    return alert("You must enter a query!");
  }
  try {
    const data = await API.get(`${searchInput.value}`);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

searchBtn.addEventListener("click", searchForRecipe);
