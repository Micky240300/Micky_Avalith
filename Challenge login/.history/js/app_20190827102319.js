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

    console.log(data);

        fetch('http://192.168.11.31:3000/login', {

        headers: {

        ''    

        }

        })

        
}

submit.addEventListener("click", function (e){
    e.preventDefault();
    postLogin();
 })
 