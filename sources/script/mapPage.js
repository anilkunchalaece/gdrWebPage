$(document).ready(function() {
    //for displaying empty map
    var mapEmpty = L.map('mapEmpty').setView([14.476832, 78.765157], 12);
    //-------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------------

    //For adding OSM Tile Layer to the Map
    var mapOSM = L.map('mapOSM').setView([14.476832, 78.765157], 12);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapOSM);
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------

    //For adding osm map tile layer and popUp
    var mapWithPopUp = L.map('mapWithPopUp').setView([14.476832, 78.765157], 12);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithPopUp);
    var ksrmMarker = L.marker([14.476832, 78.765157]).addTo(mapWithPopUp);
    ksrmMarker.bindPopup('KSRM College of Engineering').openPopup();
    //-------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------
    //For Map with multiple locaions
    //variable to hold the map lat and lon values
    var places = {
            "name": ["KSRM College Of Engineering", "KORM College Of Engineering", "KLM College Of Engineering"],
            "latLon": [
                [14.476832, 78.765157],
                [14.478855, 78.763658],
                [14.479601, 78.764584]
            ]
        }
        //console.log(locations.name.length)

    var mapWithMultipleLocations = L.map('mapWithMultipleLocations').setView([14.476832, 78.765157], 15);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithMultipleLocations);

    for (x in places.name) {
        //console.log(places.name[x]);
        //console.log(places.latLon[x])
        L.marker(places.latLon[x]).addTo(mapWithMultipleLocations).bindPopup(places.name[x]);
      }
      //---------------------------------------------------------------------------------------------
      //---------------------------------------------------------------------------------------------
  //For Map with Search Functionality
  var mapWithSearch = L.map('mapWithSearch').setView([14.476832, 78.765157], 15);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithSearch);
  var search = new L.Control.OSMGeocoder(
    {
      collapsed : false,
      position : 'bottomright',
      text : 'Search'
    });
  mapWithSearch.addControl(search);
    //----------------------------------------------------------------------------------------------
    //----------------------------------------------------------------------------------------------
  //For mapWithLocationAdding using Search Button
  var mapWithLocationAdding = L.map('mapWithLocationAdding').setView([14.476832,78.765157], 15);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithLocationAdding);
  var searchWithLocationAdding = new L.Control.OSMGeocoder(
    {
      collapsed : false,
      position : 'bottomright',
      text : 'Search',
      callback: function(results) {
        var name = results[0].display_name,
            latLon = [results[0].lat,results[0].lon];
        console.log();
        console.log(latLon);
        console.log(results[0]);

        mapWithLocationAdding.setView(latLon,10);
        L.marker(latLon).addTo(mapWithLocationAdding).bindPopup(name);
      }
    });

  mapWithLocationAdding.addControl(searchWithLocationAdding);
  //------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------
  var mapWithRouting = L.map('mapWithRouting').setView([14.476832,78.765157]);
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapWithRouting);

  L.Routing.control({
    routeWhileDragging: true,
    geocoder : new L.Control.OSMGeocoder()
  }).addTo(mapWithRouting);

});
