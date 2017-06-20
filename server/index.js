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

app.get('/designers', function(req, res) {
  // console.log('INSDE OF APP.GET DESIGNERS: ', req.query.designType);
  // designsOrDesigners.selectAllDesigners(function(err, designers) {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
  //     designers.filter(function(designer) {
  //       if (designer.designType === req.query.designType) {
  //         return designer;
  //       }
  //     });
  //     res.json(designers);
  //   }
  // })
  designsOrDesigners.Designer.find({designType: req.query.designType}, function(err, designers) {
    if (err) {
      console.log('err', err);
    } else {
      // console.log('INSDE FIND DESIGNERS APP.GET:', designers);
      res.send(designers);
    }
  })
});

app.get('/designs', function (req, res) {
  console.log('INSIDE OF APP.GET DESIGNS: ');
  designsOrDesigners.selectAllDesigns(function(err, designs) {
    if(err) {
      res.sendStatus(500);
    } else {
      // console.log('INSDE GET/DESIGNS: ', designs);
      res.json(designs);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

