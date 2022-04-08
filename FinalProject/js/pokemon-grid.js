const d = document;
const links = d.querySelector(".links");
const main = document.getElementById("main-section");



export async function loadPokemons(url) {

  

  try{
    


    let res = await fetch(url);
    let json = await res.json();
    let template = "";
    let home;
    let prevLink;
    let nextLink;

    console.log(json);
    
    if(!res.ok) throw{status: res.status, statusText: res.statusText }

    for(let i = 0; i < json.results.length; i++){

      try{
        let res = await fetch(json.results[i].url);
        let pokemon = await res.json();
        
        console.log(pokemon);
        
        if(!res.ok) throw{status: res.status, statusText: res.statusText }

        template += `
        <figure>
          <p>Nº ${pokemon.id}</p>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
          <figcaption>${pokemon.name}</figcaption>
        </figure>
        `;
      } catch(err){
        let message = err.statusText || "Error cada pokemon";
        template += `
          <figure>
            <figcaption>${err.status}: ${message}</figcaption>
          </figure>
        `;
      }
    }
    
    main.innerHTML = template;
    home = `<a href ="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20">🏠`
    prevLink = json.previous ? `<a href="${json.previous}"> ⏮️`: "";
    nextLink = json.next ? `<a href="${json.next}"> ⏭️` : "";
    links.innerHTML = home + " " +prevLink + " " + nextLink;

  } catch(error){
    let message = error.statusText || "Error general";
    main.innerHTML = `<p>Error ${error.status}: ${message}</p>`;
  }
}


function removeChild(parent){
  parent.innerHTML = "";
  //  while(parent.firstChild){
  //   parent.removeChild(parent.firstChild);
  // }
}
