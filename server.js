var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hola mundo!');
})

app.listen(3000, function(err){
  if(err)return console.log('hubo error'), process.exit(1);
  console.log('escuchando puerto');
})
