var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var designsOrDesigners = require('../database-mongo');

var request = require('request');
var http = require('http');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/designers', function (req, res) {
  console.log('INSIDE OF APP.GET SERVER: ', req.body)
  designsOrDesigners.selectAllDesigns(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      // console.log('INSDE GET: ', data);
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

