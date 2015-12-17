var newDiv = document.createElement('div');
document.body.appendChild(newDiv);
var newP = document.createElement('h1');
newDiv.appendChild(newP);
var newText = document.createTextNode("Easy 2 Find Golf");
newP.appendChild(newText);
newP.setAttribute();

var img = new Image();
var div = document.getElementById('firstimage');

img.onload = function() {
  div.appendChild(img);
};

img.src = 'images/Green.jpg';





