var aboutHeader = document.getElementById('aboutgolf');
var information = document.createElement('h2');
var firstText = document.createTextNode('Golf is a club and ball sport in which players use various clubs to hit balls into a series of holes on a course in as few strokes as possible.','Golf is a game whose aim is to hit a very small ball into an even smaller hole', 'with weapons singularly ill-designed for the purpose. On a recent survey', '80 percent of golfers admitted cheating. The other 20 percent lied.');
aboutHeader.appendChild(information);
information.setAttribute('style', 'color : #040303');
information.appendChild(firstText);

var aboutHeader = document.getElementById('funnygolf');
var information = document.createElement('h2');
var firstText = document.createTextNode('Golf is a game whose aim is to hit a very small ball into an even smaller hole, with weapons singularly ill-designed for the purpose.');
aboutHeader.appendChild(information);
information.setAttribute('style', 'color : #040303');
information.appendChild(firstText);

var aboutHeader = document.getElementById('surveygolf');
var information = document.createElement('h2');
var firstText = document.createTextNode('On a recent survey, 80 percent of golfers admitted cheating. The other 20 percent lied.');
aboutHeader.appendChild(information);
information.setAttribute('style', 'color : #040303');
information.appendChild(firstText);

var elem = document.createElement("img");
elem.setAttribute("src", "images/logos.png");
elem.setAttribute("height", "300");
elem.setAttribute("width", "800");
document.getElementById("img-logos").appendChild(elem);
/*
var servicesHeader = document.getElementById('services-header');
var information = document.createElement('h2');
var firstText = document.createTextNode('Tricks To Improve Your Golf Game Without Leaving Home');
aboutHeader.appendChild(information);
information.setAttribute('style', 'color : #040303');
information.appendChild(firstText);
*/