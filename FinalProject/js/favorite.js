const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

const main = document.getElementById("main-section");

function removeChild(parent){
  parent.innerHTML = "";
  //  while(parent.firstChild){
  //   parent.removeChild(parent.firstChild);
  // }
}

export  function searchPokemon(value) {
  // event.preventDefault();
  // removeChild(main);
  // const { value } = event.target.pokemon;
  const favoriteContainer = document.getElementById("favoriteContainer");
  removeChild(favoriteContainer);

  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)

    .then(data => data.json())
    .then(response => renderPokemonData(response))



  //const renderPokemonData = data => {
  function renderPokemonData(data) { 
    
    const pokeCard = document.createElement("div");
    pokeCard.classList.add("poke-card");
  
    const pokeName = document.createElement("div");
    const pokeImg = document.createElement("img");
    const pokeImgContainer = document.createElement("div");
    pokeImgContainer.classList.add("img-container");
    const pokeId = document.createElement("div");
    const pokeTypes = document.createElement("div");
    pokeTypes.classList.add("poke-types");
    const pokeStats = document.createElement("div");
    pokeStats.classList.add("poke-stats");
    
    const checkTask = document.createElement('input');
    checkTask.setAttribute('type', 'button');
    checkTask.value = "Save";
    checkTask.classList.add("savePokemon")
    
    // const checkDelete = document.createElement("input");
    // checkDelete.setAttribute('type', 'button');
    // checkDelete.value = "Delete";
  
    pokeCard.appendChild(checkTask);
    // pokeCard.appendChild(checkDelete);
    
    pokeCard.appendChild(pokeImgContainer);
    pokeImgContainer.appendChild(pokeImg);
    pokeCard.appendChild(pokeName);
    pokeCard.appendChild(pokeId);
    pokeCard.appendChild(pokeTypes);
    pokeCard.appendChild(pokeStats);
    //removeChild(main);

    const sprite = data.sprites.front_default;
    const {stats, types} = data;
    
    //console.log(data);
   

    const name = data.name;
    pokeName.textContent = name;
    pokeImg.setAttribute('src', sprite);
    pokeId.textContent = `Nº ${data.id}`;
   // const favoriteContainer = document.getElementById("favoriteContainer");
    // favoriteContainer.classList.add("center");
    const setCardColor = types => {
      const colorOne = typeColors[types[0].type.name];
      const colorTwo = types[1] ? typeColors[types[1].type.name] : typeColors.default;
      pokeImg.style.background =  `radial-gradient(${colorTwo} 33%, ${colorOne} 33%)`;
      pokeImg.style.backgroundSize = ' 5px 5px';
  }
  
  const renderPokemonTypes = types => {
      pokeTypes.innerHTML = '';
      types.forEach(type => {
          const typeTextElement = document.createElement("div");
          typeTextElement.style.color = typeColors[type.type.name];
          typeTextElement.textContent = type.type.name;
          pokeTypes.appendChild(typeTextElement);
      });
  }
  
  function renderPokemonStats(stats) {
      pokeStats.innerHTML = '';
      stats.forEach(stat => {
          const statElement = document.createElement("div");
          const statElementName = document.createElement("div");
          const statElementAmount = document.createElement("div");
          statElementName.textContent = stat.stat.name;
          statElementAmount.textContent = stat.base_stat;
          statElement.appendChild(statElementName);
          statElement.appendChild(statElementAmount);
          pokeStats.appendChild(statElement);
          //statElement.appendChild(main);
      });
  } 
    //Llamada a funciones para construir pokemon
    setCardColor(types);
    renderPokemonTypes(types);
    renderPokemonStats(stats);

    //Añade el elemento al main
    // favoriteContainer.classList.add("center");
    favoriteContainer.appendChild(pokeCard);

    //CheckboxStateChange
    checkTask.addEventListener('click', () =>{
      let verificacion = JSON.parse(localStorage.getItem("user")) || [];

      verificacion.push(name);

      const setList = new Set(verificacion);
      let results;
      results = [...setList]; 

      favoritePokemons(results);
      
    })

  }

 }


 function favoritePokemons(info){
  const storage = window.localStorage;
  storage.setItem("user", JSON.stringify(info));
}