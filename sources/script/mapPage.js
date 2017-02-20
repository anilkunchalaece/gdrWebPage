
$(document).ready(function() {
  //for displaying empty map
  var mapEmpty = L.map('mapEmpty').setView([14.477234,78.804932], 13);


  //For adding OSM Tile Layer to the Map
  var mapOSM=L.map('mapOSM').setView([14.477234,78.80492],14);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapOSM);

});
