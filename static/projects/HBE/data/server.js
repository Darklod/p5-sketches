var express = require('express');
var app = express();

var open = require('open');
open('http://localhost:3000/');

var server = app.listen(3000);

app.use(express.static('static'));

console.log("Server is running...");

process.on('exit', function () {
  console.log('About to exit.');
});
