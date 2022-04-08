import { searchPokemon} from "./favorite.js";
import {loadPokemons} from "./pokemon-grid.js";
// import { pokeball } from "./canvas.js";



const main = document.getElementById("main-section");
//Evento para buscar por formulario
const form = document.getElementById("searchPokemon");

// listener();
let pokeApi = "https://pokeapi.co/api/v2/pokemon/";

document.addEventListener("DOMContentLoaded", e=> loadPokemons(pokeApi));

document.addEventListener("click", e=>{
  if(e.target.matches(".links a")){
    e.preventDefault();
    removeChild(favoriteContainer);
    loadPokemons(e.target.getAttribute("href"));

  }
})

form.addEventListener("submit", function(event) {
  event.preventDefault();
  removeChild(main);
  const favoriteContainer = document.getElementById("favoriteContainer");
  favoriteContainer.classList.add("center");
  const { value } = event.target.pokemon;
  searchPokemon(value);
  
})


function removeChild(parent){
  parent.innerHTML = "";
  //  while(parent.firstChild){
  //   parent.removeChild(parent.firstChild);
  // }
}


function favoritePokemons(info){
  const storage = window.localStorage;
  storage.setItem("user", JSON.stringify(info));
}

const favorites = document.getElementById("favorites");

favorites.addEventListener("click", function(){
  removeChild(main);
  //removeChild(favoriteContainer);
  let test = JSON.parse(localStorage.getItem("user"));
  let section = document.createElement("section");
  //section.classList.add("grid-fruit");
  //main.appendChild(section);
  const favoriteContainer = document.getElementById("favoriteContainer");
  favoriteContainer.classList.remove("center");

   test.forEach(
    function(arrayElement){
      let info = document.createElement("div"); 
      info.innerHTML = `${(searchPokemon(arrayElement))}`;
      section.innerHTML = info;
    }
  )
  
});

// pokeball();
