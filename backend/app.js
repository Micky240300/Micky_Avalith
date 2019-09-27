const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Michele240300",
    database: "skill2"
});

connection.connect();

app.get('/', function (req, res){
   
        res.send("yo wasup!");
        
})


app.get('/users', function (req, res){
    connection.query('SELECT * FROM users', function (err, result){

        if (err) throw err; 

        res.send(result);
        console.log(result);
    })
})

app.get('/user/pets', function (req, res){
    
    let name = req.query.username;

    connection.query('SELECT users.id, users.username, pets.pet_name FROM users INNER JOIN pets ON users.id = pets.user_id WHERE users.username = ?',[name], function (error, result){

        if (error) throw error; 

        let test = {}

        for (const resultItem of result) {
            console.log(resultItem);
            if (test[resultItem.username]) {
                test[resultItem.username].pets.push(resultItem.pet_name)

            }else{

                test[resultItem.username] = {
                    id: resultItem.id,
                    username: resultItem.username,
                    pets: [resultItem.pet_name]
                }
            }
        }
        
        console.log(Object.values(test));
        res.send(Object.values(test));
    })
})


app.get('/user/games', function (req, res){

    let game = req.query.gamename;

    if (game = game) {

        connection.query('SELECT users.id, users.username, games.name FROM users INNER JOIN usersgames ON usersgames.users_id = users.id INNER JOIN games ON usersgames.game_id = games.id WHERE games.name = ?',[game], function (error, result){

            if (error) throw error; 
    
            res.send(result);
            console.log(result);
        })

    } else {

        connection.query('SELECT users.id, users.username, games.name FROM users INNER JOIN usersgames ON usersgames.users_id = users.id INNER JOIN games ON usersgames.game_id = games.id', function (error, result){

            if (error) throw error; 
    
            res.send(result);
            console.log(result);
        })
    }
})

//////////////////////////////////////////////
app.listen(3000, function () {              //
    console.log('Running on port 3000!');   //
});                                         //
//////////////////////////////////////////////
