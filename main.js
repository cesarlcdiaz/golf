function initMap() {
  var myLatLng = {lat: 33.672340, lng: -117.849041};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: myLatLng
  });

  
  var locations = [];
  locations.push({name: "Rancho San Joaquin", latlng : new google.maps.LatLng(33.665604,-117.833176)});
  locations.push({name: "Costa Mesa CC", latlng : new google.maps.LatLng(33.668630,-117.926816)});

  
  
  for(var i=0; i<locations.length;i++){
  var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});
  
  }
}
