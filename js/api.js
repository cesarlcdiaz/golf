

var request = require('request');
var express = require('express');
var app = express ();
var myApi = express.Router();
var bodyParser = require('body-parser');
var parseText = bodyParser.text();


myApi.post('/', parseText, function(req,res){
  var nyTimes = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + search +'&begin_date=20000101&api-key=d35c3a3a69b14c02761a89b33c3153c5:9:73741278'
  var search = req.body
  console.log(search);
  request(nyTimes, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var object = JSON.parse(body)
      res.send(object.response.docs[0].snippet);
    }
  })
});

module.exports = myApi