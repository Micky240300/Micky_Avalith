const express = require('express');
const mysql = require('mysql');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Michele240300",
    database: "skill"
});

connection.connect();

app.get('/users', function (req, res){
    connection.query('SELECT * FROM users', function (err, result){
        
        if (err) throw err; 
        res.send(result);
        console.log(result);

    })
})

app.listen(3000, function () {
    console.log('Running on port 3000!');
});
