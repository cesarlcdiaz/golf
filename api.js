var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
router.post('/', textParser, function(req,res) {
  var input = req.body;
  request('https://api.swingbyswing.com/v2/courses/search_by_location?lat={lat}&lng={lng}&radius={radius}&active_only={active_only}&hole_count={hole_count}&order_by={order_by}&from={from}&limit={limit}'+ input, function (error, res, body) {
    if (!error && res.statusCode == 200) {
      var description = JSON.parse(body);
       description = JSON.stringify(description.response.docs[0]);
       console.log(description);
       res.send(description);
    }
  });
});

module.exports = router;