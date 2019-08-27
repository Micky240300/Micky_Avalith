const submit = document.querySelector('#submit');
const body = document.querySelector('#body');
const query = document.querySelector('#query');
const params = document.querySelector('#params');
const dataUser = document.querySelector('#dataUser');
const message = document.querySelector('#message');

function postLogin() {

    const user = document.getElementById("user").value;
    const password = document.getElementById("pass").value;
    const data = { "user": user, "password": password };

        fetch('http://192.168.11.31:3000/login', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' 
        },
        method:'POST',
        body: JSON.stringify(data)
        })

        .then( res => res.json())
        .then( res =>{ 
            localStorage.setItem('token', res.token);

            
            message.innerHTML =  `<h6 class= "text-warning">Ha iniciado sesion correctamente</h6>`;
            dataUser.innerHTML = `<input id="name" name="name" type="text" placeholder="name">
                                <input id="surname" name="surname" type="text" placeholder="surname">`;

        })        
}

function getQuery() {

    const token = localStorage.getItem('token');
    
    fetch('http://192.168.11.31:3000/test/query?name=michele&surname=murtari', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })

    .then( res => res.json())
        .then( res =>{ 
            console.log(res.message);
        
        })   
}

function getParams() {

    const token = localStorage.getItem('token');
    
    fetch('http://192.168.11.31:3000/test/params/michele/murtari', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        },
    })

    .then( res => res.json())
        .then( res =>{ 
            console.log(res.message);
        
        })   
}

function postBody() {

    const token = localStorage.getItem('token');

    fetch('http://192.168.11.31:3000/test/body', {
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
            'Content-Type': 'application/json' 
        },
        method:'POST',
        body: JSON.stringify({ "name": "michele", "surname": "murtari" })
        })

        .then( res => res.json())
        .then( res =>{ 
            console.log(res.message);
        
        })        
}




submit.addEventListener("click", function (e){
    e.preventDefault();
    postLogin();
    getQuery();
    getParams();
    postBody();
 })
 