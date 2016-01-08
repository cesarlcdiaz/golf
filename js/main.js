function initMap() {
  var myLatLng = {lat: 33.672340, lng: -117.849041};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: myLatLng
  });


  var locations = [];

  locations.push({name: "Pelican Hill Golf Club", address:"22800 S Pelican Hill Rd, Newport Beach, CA 92657", web:"golfpelicanhill.com", phone:"(866) 921-3139", latlng : new google.maps.LatLng(33.587368, -117.843351)});

  locations.push({name: "Costa Mesa CC", address:"1701 Golf Course Dr, Costa Mesa, CA 92626", web:"costamesacountryclub.com",phone:"(714) 540-7500", latlng : new google.maps.LatLng(33.668630,-117.926816)});

  locations.push({name: "Coto de Caza Golf & Racquet Club", address:"25291 Vista Del Verde, Coto De Caza, CA 92679", web:"coto-de-caza.com", phone:"(949) 858-4100", latlng : new google.maps.LatLng(33.593684, -117.582163)});
  
  locations.push({name: "Escena", address:"1100 Clubhouse View Drive, Palm Springs, CA 92262", web:"escenagolf.com", phone:"(760) 778-2737", latlng : new google.maps.LatLng(33.837302, -116.496758)});
  
  locations.push({name: "The Reserve Club", address:"74001 Reserve Dr, Indian Wells, CA 92210", web:"thereserveclub.com", phone:"(760) 568-5599", latlng : new google.maps.LatLng(33.689647, -116.364011)});
  
  locations.push({name: "Iron Wood Country Club", address:"73735 Irontree Dr, Palm Desert, CA 92260", web:"ironwoodcountryclub.com", phone:"(760) 346-0551", latlng : new google.maps.LatLng(33.688658, -116.377234)});
  
  locations.push({name: "BIGHORN", address:"255 Palowet Dr, Palm Desert, CA 92260", web:"bighorngolf.com", phone:"(760) 341-4653", latlng : new google.maps.LatLng(33.681487, -116.397590)});
  
  locations.push({name: "Indian Wells", address:"46000 Club Dr, Indian Wells, CA 92210", web:"indianwellsclub.com", phone:"(760) 345-2561", latlng : new google.maps.LatLng(33.716594, -116.329313)});
  
  locations.push({name: "Catalina Island Golf Course", address:"1 Country Club Dr, Avalon, CA 90704", web:"visitcatalinaisland.com", phone:"(310) 510-0530", latlng : new google.maps.LatLng(33.336750,-118.331057)});
  
  locations.push({name: "Lake Tahoe Golf Course", address:"3021 US-50, South Lake Tahoe, CA 96150", web:"tahoeparadisegc.com", phone:"(530) 577-2121", latlng : new google.maps.LatLng(38.830537,-120.031264)});
  
  locations.push({name: "Black Bear Golf Club", address:"24505 Calusa Blvd, Eustis, FL 32736", web:"blackbeargolfclub.com", phone:"(352) 357-4732", latlng : new google.maps.LatLng(39.506252,-107.722317)});
  
  locations.push({name: "ASU Karsten Golf Course", address:"1125 E Rio Salado Pkwy, Tempe, AZ 85281", web:"asukarsten.com", phone:"(480) 921-8070", latlng : new google.maps.LatLng(33.374342,-111.868505)});
  
  locations.push({name: "The Wynn Golf Club", address:"3131 S Las Vegas Blvd, Las Vegas, NV 89109", web:"wynnlasvegas.com", phone:"(702) 770-3575", latlng : new google.maps.LatLng(36.128339,-115.164919)});
  
  locations.push({name: "Hidden Lakes Golf Course", address:"35 Fairgreen Ave, New Smyrna Beach, FL 32168", web:"hiddenlakesgolfclub.com", phone:"(386) 427-4138", latlng : new google.maps.LatLng(37.528020,-96.718455)});
  
  locations.push({name: "Glen Dornoch Waterway Golf", address:"4840 Glen Dornoch Way, Little River, SC 29566", web:"glensgolfgroup.com", phone:"(843) 249-2541", latlng : new google.maps.LatLng(33.807309,-79.044356)});
  
  locations.push({name: "Causeway Club", address:"10 Fernald Point Rd, Southwest Harbor, ME 04679", web:"thecausewayclub.org", phone:"(207) 244-3780", latlng : new google.maps.LatLng(44.292062,-68.331503)});
  
  locations.push({name: "Lions Municipal Golf Course", address:"2901 Enfield Rd, Austin, TX 78703", web:"austintexas.gov", phone:"(512) 477-6963", latlng : new google.maps.LatLng(30.290959,-97.777061)});
  
  locations.push({name: "Blue Ash Golf Course", address:"4040 Cooper Rd, Cincinnati, OH 45241", web:"blueash.com", phone:"(513) 686-1280", latlng : new google.maps.LatLng(39.247544,-84.393563)});
  
  locations.push({name: "SilverRock Resort", address:"79-179 Ahmanson Ln, La Quinta, CA 92253", web:"silverrock.org", phone:"(760) 777-8884", latlng : new google.maps.LatLng(33.667301,-116.280366)});
  
  locations.push({name: "Santa Ana CC", address:"20382 Newport Blvd, Santa Ana, CA 92707", web:"santaanacc.org", phone:"(714) 556-3000", latlng : new google.maps.LatLng(33.665493,-117.887574)});
  
  locations.push({name: "Newport beach Golf Course", address:"3100 Irvine Ave, Newport Beach, CA 92660", web:"newportbeachgolfcoursellc.com", phone:"(949) 852-8681", latlng : new google.maps.LatLng(33.660791,-117.878921)});

  locations.push({name: "Desert Willow", address:"38-995 Desert Willow Dr, Palm Desert, CA 92260", web:"desertwillow.com", phone:"(760) 346-0015", latlng : new google.maps.LatLng(33.765671,-116.366058)});
  /*
  locations.push({name: "", address:"", web:"", phone:"", latlng : new google.maps.LatLng()});
  locations.push({name: "", address:"", web:"", phone:"", latlng : new google.maps.LatLng()});
  locations.push({name: "", address:"", web:"", phone:"", latlng : new google.maps.LatLng()});

  */


  for(var i=0; i<locations.length;i++){
    var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});


    var infowindow = new google.maps;
    google.maps.event.addListener(marker,'click', function() {
      infowindow.open(map,marker);

    });
  //google.maps.event.addDomListener(window,'load', initialize);
}

}

