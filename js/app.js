var express = require('express'); 
var app = express(); 
var path = require('path');
 
app.get('/',function(req,res){ 
  res.send("Hello"); 
}); 
 
app.listen(1337); 
console.log('Server is Live');
