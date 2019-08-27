let data = document.querySelector("#card card-container");

function dataLog() { 
     
    fetch(``)
        .then(res => res.json()) // translates to json
        .then(async res => {
            const img = res.sprites.front_default;
            const name = res.name;
            const id = res.id;
            const all = {img, name, id, type, language, location}; 
            print(all); // calling the result with added tags
        })
        .catch(err => {
            error(err); // calling the result with added tags 
        })    
}