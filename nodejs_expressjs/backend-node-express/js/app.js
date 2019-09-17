const express = require('express');
const app = express();
const morgan = require('morgan');

function logs(req, res, next) {     //middleware
  console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
  console.log(req.headers)
  next();
}

function token(req, res, next) { // middleware authorization token
  console.log(req.header('Authorization'));

   if (req.header('Authorization') == 'TOKENVALIDO') {
     next();    
  }else{
    
    return res
    .status(401)
    .send("Authorization error");

  }
}

app.use(express.json());
app.use(morgan('dev'));
app.use(logs);
app.use(token);

// app.all('/user', (req, res, next) => {
//   console.log('nice');
//   next();
// });

///////////////////CHALLENGE//////////////////////

// app.get('/test/query', function (req, res) {

//   let name = req.query.name || 'Michele';
//   let surname = req.query.surname || 'Murtari';
//   let saludo = '';

//    if (name + surname != '')
//        saludo = "Buenos Dias, " + name + ' ' + surname;
   
//   res.send(saludo);

// });


// app.post('/test/body/', function (req, res) {

//   let name = req.body.name || 'Michele';
//   let surname = req.body.surname || 'Murtari';
//   let saludo = '';

//   if (name + surname != '')
//        saludo = "Buenos Dias, " + name + ' ' + surname;
   
  
// //el json con los datos se lo asigno en el postman seccion body.

//   console.log(req.body);
//   // console.log(req.params);
//   res.send(saludo);
  
// });

///////////////////CHALLENGE//////////////////////

    app.get('/user', function (req, res) {
      res.json({
        name: 'Michele',
        surname: 'Murtari'
      });
    });

    app.post('/user/:id', (req, res) => {
      console.log(req.body);//el objeto
      console.log(req.params);//id
    //el json con los datos se lo asigno en el postman seccion body.
      res.send('POST request received');
      

    });

    app.put('/user/:id', function (req, res) {
      console.log(req.body);
      res.send(`User ${req.params.id} updated`);
    });

    app.delete('/user/:userId', function (req, res) {
      res.send(`User ${req.params.userId} deleted`);
    });

    app.use(express.static('../public'));

    app.listen(3000, () => {
      console.log('Server on port 3000!');
    });