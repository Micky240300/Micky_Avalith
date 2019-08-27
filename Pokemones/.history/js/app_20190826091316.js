let lista = document.getElementById("listaPokemon")
const data = document.querySelector('#data'); // location


function consultarPokemon(id, num){ 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(function (response){
        response.json()
        .then(function (pokemon){
            crearPokemon(pokemon, num)
        })
        
    })
}

function consultarPokemones(){

    let primerId = Math.round(Math.random() * 150)
    let segundoId = Math.round(Math.random() * 150)

    consultarPokemon(primerId, 1)
    consultarPokemon(segundoId, 2)
}

function crearPokemon(pokemon, num){

    //Data convertida a HTML

    let item = lista.querySelector(`#pokemon-${num}`)

    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    nombre.textContent = pokemon.name

  
}

consultarPokemones()


const frm = document.querySelector('#frm'); // form


// Functions
function dataApi() { // function to call the API
    const pkmn = document.querySelector('#pkmn').value.toLowerCase(); // input value
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`)
        .then(res => res.json()) // translates to json
        

function fecthLocations(id) {
   return fetch(`https://pokeapi.co/api/v2/location/${id}/`)
    .then(res => res.json())
    .then(res => { 
        const areaLanguage = res.names.find(e => e.language.name === "en");
        const area = areaLanguage.name;
        return area;
    })
}

const fetchAbilities = async abilities => {
    const fetched = abilities.map(url => fetch(url).then(res => res.json())) // array with all fetched abilities
    const res = await Promise.all(fetched) // wait the responses
    return res.map(res => {
        const abyLanguage = res.names.find(e => e.language.name === "en");
        const en = abyLanguage.name;
        return en;
    }).join(", ")
}