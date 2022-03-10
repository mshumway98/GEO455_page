var mymap = L.map("map", {
    center: [38.6270, -90.1994], 
    zoom: 5});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


var myIcon = L.icon({
    iconUrl: 'images/icon_640.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});


var Chicago = L.marker([41.8781, -87.6298], {icon: myIcon}).bindPopup("<b>Chicago").addTo(mymap);
var Indianapolis = L.marker([39.7684, -86.1581], {icon: myIcon}).bindPopup("<b>Indianapolis").addTo(mymap);
var Boston = L.marker([42.3601, -71.0589], {icon: myIcon}).bindPopup("<b>Boston").addTo(mymap);
var Tampa = L.marker([27.9506, -82.4572], {icon: myIcon}).bindPopup("<b>Tampa").addTo(mymap);
var Orlando = L.marker([28.5384, -81.3789], {icon: myIcon}).bindPopup("<b>Orlando").addTo(mymap);
var Denver = L.marker([39.7392, -104.9903], {icon: myIcon}).bindPopup("<b>Denver").addTo(mymap);
var Yellowstone = L.marker([44.4280, -110.5885], {icon: myIcon}).bindPopup("<b>Yellowstone National Park").addTo(mymap);
var SisterBay = L.marker([45.1872, -87.1209], {icon: myIcon}).bindPopup("<b>Sister Bay").addTo(mymap);
var SF = L.marker([43.5460, -96.7313], {icon: myIcon}).bindPopup("<b>Sioux Falls").addTo(mymap);
var Minneapolis = L.marker([44.9778, -93.2650], {icon: myIcon}).bindPopup("<b>Minneapolis").addTo(mymap);
var Milwaukee = L.marker([43.0389, -87.9065], {icon: myIcon}).bindPopup("<b>Milwaukee").addTo(mymap);
var Provincetown = L.marker([42.0547, -70.1846], {icon: myIcon}).bindPopup("<b>St. Provincetown").addTo(mymap);