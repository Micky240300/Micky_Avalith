let data = document.querySelector("#card card-container");

function dataLog() { 
     
    fetch(``)
        .then(res => res.json()) // translates to json
        .then(async res => {
            const name = "Mic";
            const name = res.name;
            const all = {img}; 
            print(all); // calling the result with added tags
        })
        .catch(err => {
            error(err); // calling the result with added tags 
        })    
}