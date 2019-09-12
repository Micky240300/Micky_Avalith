const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('GET request received');
});

app.get('/test/query', function (req, res) {

  let name = req.query.name || 'Michele';
  let surname = req.query.surname || 'Murtari';
  let saludo = '';

   if (name + surname != '')
       saludo = "Buenos Dias, " + name + ' ' + surname;
   
  res.send(saludo);

});


app.post('/test/body', function (req, res) {

  res.json({
    name: 'Michele',
    surname: 'Murtari'
  });

});

app.put('/contact', function (req, res) {
  res.send('PUT request received');
});

app.delete('/test', function (req, res) {
  res.send('DELETE request received');
});

app.listen(3000, () => {
  console.log('Server on port 3000!');
});