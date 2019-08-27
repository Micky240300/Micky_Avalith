let data = document.querySelector("#card card-container");

function dataLog() { 
     
    fetch(``)
        .then(res => res.json()) // translates to json
        .then(async res => {
            const name = "michele";
            const surname = "murtari";
            const all = {name, surname}; 
            print(all); // calling the result with added tags
        })
        .catch(err => {
            error(err); // calling the result with added tags 
        })    
}