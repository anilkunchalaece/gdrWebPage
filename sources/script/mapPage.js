
$(document).ready(function() {
  //for displaying empty map
  var mapEmpty = L.map('mapEmpty').setView([14.476832,78.765157], 12);


  //For adding OSM Tile Layer to the Map
  var mapOSM=L.map('mapOSM').setView([14.476832,78.765157],12);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapOSM);

  //For adding osm map tile layer and popUp
  var mapWithPopUp = L.map('mapWithPopUp').setView([14.476832,78.765157],12);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithPopUp);
  var ksrmMarker = L.marker([14.476832,78.765157]).addTo(mapWithPopUp);
  ksrmMarker.bindPopup('KSRM College of Engineering').openPopup();

  

});
