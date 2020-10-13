


var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v10",
  accessToken: API_KEY
}).addTo(myMap);

L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
}).addto(MyMap);

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"



function style(feature) {
    var geojsonMarkerOptions = {
        radius: feature.properties.mag,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    return geojsonMarkerOptions;
}

d3.json(queryUrl, function (data) {
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            console.log(latlng);
                return L.circleMarker(latlng);

        },
        style: style(data)
    }).addTo(earthquakes);

    earthquakes.addTo(myMap)
})



