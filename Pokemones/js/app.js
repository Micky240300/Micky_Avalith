const submit = document.querySelector('#submit'); 
const capture = document.querySelector('#capture'); 
const data = document.querySelector('#data'); 
const pokeCaptured = document.querySelector('#pokeCaptured'); 
let imgStorage = "";
let pokeArray = [];


function dataApi() { 
    const pkmn = document.querySelector('#pkmn').value.toLowerCase(); 
    if (pkmn === '') return
    fetch(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`)
        .then(res => res.json()) 
        .then(async res => {
            const img = res.sprites.front_default;
            const name = res.name;
            const id = res.id;
            const type = res.types.map(type => type.type.name).join(", ");
            const abilities = res.abilities.map(e => e.ability.url);
            const language = await fetchAbilities(abilities);  
            const location = await fetchLocations(id);
            const pokeData = {img, name, id, type, language, location}; 
            printPokemon(pokeData); 
            imgStorage = img;
            
        })
        .catch(() => {
            capture.innerHTML = "";
            data.innerHTML = "";
            printError(); 
        })    
}

const fetchAbilities = async abilities => {
    const fetched = abilities.map(url => fetch(url).then(res => res.json())) 
    const res = await Promise.all(fetched)
    return res.map(res => {
        const abyLanguage = res.names.find(name => name.language.name === "en");
        const en = abyLanguage.name;
        return en;
    }).join(", ")
}

async function fetchLocations(id) { 
    const res = await fetch(`https://pokeapi.co/api/v2/location/${id}/`);
    const array = await res.json();
    const areaLanguage = array.names.find(e => e.language.name === "en");
    const area = areaLanguage.name;
    return area;
}

function printPokemon(pokeData) { 
    capture.innerHTML = `<input type="submit" value="Capture" class="btn btn-dark mt-3">`;
    data.innerHTML =    `
                        <img class="sprite" src="${pokeData.img}"/>
                        <h6>Pokemon Name: ${pokeData.name}, Nº ${pokeData.id}</h6>
                        <hr>
                        <h6>Pokemon Type: ${pokeData.type}</h6>
                        <hr>
                        <h6>Pokemon Abilities: ${pokeData.language}</h6>
                        <hr>
                        <h6>Pokemon Location: ${pokeData.location}</h6>
                        `;
}

function printError() { 
    data.innerHTML = "errorrrr";
    
}

function createItem(imgStorage) {
    let item = {img: imgStorage};
    pokeArray.push(item);
    return item;
}

function savePokemon() { 
    if (pokeArray.length < 7) {
        localStorage.setItem('pokemon', JSON.stringify(pokeArray)); 
        loadPokemon();
    }
}

function loadPokemon() {
    pokeCaptured.innerHTML = "";

    pokeArray.forEach(e => {
        pokeCaptured.innerHTML +=  `
            <div class="captured-pokemon">
                <img src="${e.img}">
                <span class="close-pokemon">X</span>
            </div>
        `;
    });
}

function deletePokemon(img) {
    let indexArray;
    pokeArray.forEach((element, index) => {
        if (element.img === img) {
            indexArray = index;
        }
    });
    pokeArray.splice(indexArray,1);
    savePokemon();
}

//eventos
submit.addEventListener('click',function(e){
    e.preventDefault();
    dataApi(); 
}) 

capture.addEventListener('click',function(e){
    e.preventDefault();
    createItem(imgStorage)
    savePokemon();
})

document.addEventListener('DOMContentLoaded', loadPokemon);

pokeCaptured.addEventListener('click',function(e){
    e.preventDefault();
    if(e.path[0].nodeName === 'path'){
        let element = e.path[2].childNodes[0].currentSrc;
        deletePokemon(element);
    }
    deletePokemon();
})
