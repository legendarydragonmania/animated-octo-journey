import presentDrinks from "./src/presentDrinks.js"
import alphabet from "./src/alphabet.js";
import './src/searchForm.js'

const URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${alphabet()}`;

window.addEventListener("DOMContentLoaded", () => {
    presentDrinks(URL)
})