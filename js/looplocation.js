for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].lat, locations[i].lon),
        map: map,
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i].description);
          infowindow.open(map, marker);
        }
      })(marker, i));
}
