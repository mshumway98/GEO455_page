//Creating the map variable
var mymap = L.map("map", {
    center: [40.0, -95.0], 
    zoom: 5});

// Set up baselayers
var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


//Set up icon variables

var afc = L.icon({
    iconUrl: 'images/afc2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var nfc = L.icon({
    iconUrl: 'images/nfc2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});

var nfl = L.icon({
    iconUrl: 'images/nfl.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});


// Create custom popups with images
var SoldierPopup = "<b> Soldier Field </b> <br/> Chicago, Il <br/> Team: Chicago Bears <br/> Capacity: 61,500 <br/> <img src='images/Soldier.png', width='150px'/>";

var FordPopup = "<b> Ford Field </b> <br/> Detroit, MI <br/> Team: Detroit Lions <br/> Capacity: 65,000 <br/> <img src='images/Ford.png', width='150px'/>";

var LambeauPopup = "<b> Lambeau Field </b> <br/> Green Bay, Wi <br/> Team: Green Bay Packers <br/> Capacity: 81,441 <br/> <img src='images/Lambeau.jpg', width='150px'/>";

var USBankPopup = "<b> US Bank Stadium </b> <br/> Minneapolis, MN <br/> Team: Minnesota Vikings <br/> Capacity: 66,200 <br/> <img src='images/USBank.png', width='150px'/>";

var RJamesPopup = "<b> Raymond James Stadium </b> <br/> Tampa, FL <br/> Team: Tampa Bay Buccaneers <br/> Capacity: 65,890 <br/> <img src='images/RJames.png', width='150px'/>";

var MBenzPopup = "<b> Mercedes Benz Stadium </b> <br/> Atlanta, GA <br/> Team: Atlanta Falcons <br/> Capacity: 71,000 <br/> <img src='images/MBenz.png', width='150px'/>";

var BAmericaPopup = "<b> Bank of America Stadium </b> <br/> Charlotte, NC <br/> Team: Carolina Panthers <br/> Capacity: 74,867 <br/> <img src='images/BAmerica.jpg', width='150px'/>";

var SDomePopup = "<b> Mercedes Benz Superdome </b> <br/> New Orleans, LA <br/> Team: New Orleans Saints <br/> Capacity: 74,295 <br/> <img src='images/SDome.jpg', width='150px'/>";

var FXPopup = "<b> FedEx Field </b> <br/> North Englewood, MD <br/> Washington Commanders <br/> Capacity: 79,000 <br/> <img src='images/FX.png', width='150px'/>";

var ATTPopup = "<b> At&T Stadium </b> <br/> Dallas, TX <br/> Team: Dallas Cowboys <br/> Capacity: 80,000 <br/> <img src='images/ATT.png', width='150px'/>";

var LFinancialPopup = "<b> Lincoln Financial Field </b> <br/> Philadelphia, PA <br/> Team: Philadelphia Eagles <br/> Capacity: 67,594 <br/> <img src='images/LFinancial.png', width='150px'/>";

var MetlifePopup = "<b> MetLife Stadium </b> <br/> East Rutherford, NJ <br/> Teams: New York Jets and New York Giants <br/> Capacity: 82,500 <br/> <img src='images/Metlife.png', width='150px'/>";

var LeviPopup = "<b>Levi's Stadium </b> <br/> Santa Clara, CA <br/> Team: San Francisco 49ers <br/> Capacity: 68,500 <br/> <img src='images/Levi.png', width='150px'/>";

var SFarmPopup = "<b> State Farm Stadium </b> <br/> Glendale, AZ <br/> Team: Arizona Cardinals <br/> Capacity: 63,400 <br/> <img src='images/SFarm.png', width='150px'/>";

var SofiPopup = "<b> Sofi Stadium </b> <br/> Inglewood, CA <br/> Teams: Los Angeles Chargers and Los Angeles Rams <br/> Capacity: 70,000 <br/> <img src='images/Sofi.png', width='150px'/>";

var LumenPopup = "<b> Lumen Field </b> <br/> Seattle, WA <br/> Team: Seattle Seahawks <br/> Capacity: 68,740 <br/> <img src='images/Lumen.jpg', width='150px'/>";

var PBrownPopup = "<b> Paul Brown Stadium </b> <br/> Cincinnati, OH <br/> Team: Cincinnati Bengals <br/> Capacity: 65,515 <br/> <img src='images/PBrown.jpg', width='150px'/>";

var FEnergyPopup = "<b> First Energy Stadium </b> <br/> Cleveland, OH <br/> Team: Cleveland Browns <br/> Capacity: 67,895 <br/> <img src='images/FEnergy.png', width='150px'/>";

var MTBankPopup = "<b> M&T Bank Stadium </b> <br/> Baltimore, MD <br/> Team: Baltimore Ravens <br/> Capacity: 71,008 <br/> <img src='images/MTBank.png', width='150px'/>";

var HeinzPopup = "<b> Heinz Field </b> <br/> Pittsburgh, PA <br/> Team: Pittsburgh Steelers <br/> Capacity: 68,400 <br/> <img src='images/Heinz.png', width='150px'/>";

var LOilPopup = "<b> Lucas Oil Stadium </b> <br/> Indianapolis, IN <br/> Team: Indianapolis Colts <br/> Capacity: 67,000 <br/> <img src='images/LOil.jpg', width='150px'/>";

var TIAABankPopup = "<b> TIAA Bank Field </b> <br/> Jacksonville, FL <br/> Team: Jacksonville Jaguars <br/> Capacity: 67,264 <br/> <img src='images/TIAABank.jpg', width='150px'/>";

var NRGPopup = "<b> NRG Stadium </b> <br/> Houston, TX <br/> Team: Houston Texans <br/> Capacity: 71,795 <br/> <img src='images/NRG.png', width='150px'/>";

var NissanPopup = "<b> Nissan Stadium </b> <br/> Nashville, TN <br/> Team: Tennessee Titans <br/> Capacity: 69,143 <br/> <img src='images/Nissan.jpg', width='150px'/>";

var HighmarkPopup = "<b> Highmark Stadium </b> <br/> Buffalo, NY <br/> Team: Buffalo Bills <br/> Capacity: 71,608 <br/> <img src='images/Highmark.png', width='150px'/>";

var HRockPopup = "<b> Hard Rock Stadium </b> <br/> Miami, FL <br/> Team: Miami Dolphins <br/> Capacity: 65,326 <br/> <img src='images/HRock.png', width='150px'/>";

var GillettePopup = "<b> Gillette Stadium </b> <br/> Foxborough, MA <br/> Team: New England Patriots <br/> Capacity: 65,878 <br/> <img src='images/Gillette.png', width='150px'/>";

var EmpowerPopup = "<b> Empower Field at Mile High Stadium </b> <br/> Denver, CO <br/> Team: Denver Broncos <br/> Capacity: 76,125 <br/> <img src='images/Empower.jpg', width='150px'/>";

var ArrowheadPopup = "<b> Arrowhead Stadium </b> <br/> Kansas City, MO <br/> Team: Kansas City Chiefs <br/> Capacity: 76,416 <br/> <img src='images/Arrowhead.jpg', width='150px'/>";

var AllegiantPopup = "<b> Allegiant Stadium  </b> <br/> Las Vegas, NV <br/> Team: Las Vegas Raiders <br/> Capacity: 65,000 <br/> <img src='images/Allegiant.jpg', width='150px'/>";
var customOptions ={'maxWidth': '150','className' : 'custom'};

          
// Data points
coords = [
    [41.862306, -87.616672],
    [42.340156, -83.045808],
    [44.501306, -88.062167],
    [44.973881, -93.258094],
    [27.975967, -82.503350],
    [33.755300, -84.400600],
    [35.225808, -80.852861],
    [29.950931, -90.081364],
    [38.907697, -76.864517],
    [32.747778, -97.092778],
    [39.900775, -75.167453],
    [40.812194, -74.076983],
    [37.403300, -121.96940],
    [33.527700, -112.26260],
    [33.953500, -118.33900],
    [47.595153, -122.33163],
    [39.095442, -84.516039],
    [41.506022, -81.699564],
    [39.277969, -76.622767],
    [40.446786, -80.015761],
    [39.760056, -86.163806],
    [30.323925, -81.637356],
    [29.684781, -95.410956],
    [36.166461, -86.771289],
    [42.773739, -78.786978],
    [25.957919, -80.238842],
    [42.090925, -71.264350],
    [39.743936, -105.02010],
    [39.048914, -94.484039],
    [36.090900, -115.18330],
    
];

// Marker Layergroup
var natN = L.layerGroup();
L.marker(coords[0], {icon: nfc}).bindPopup(SoldierPopup, customOptions).addTo(natN);
L.marker(coords[1], {icon: nfc}).bindPopup(FordPopup, customOptions).addTo(natN);
L.marker(coords[2], {icon: nfc}).bindPopup(LambeauPopup, customOptions).addTo(natN);
L.marker(coords[3], {icon: nfc}).bindPopup(USBankPopup, customOptions).addTo(natN);
natN.addTo(mymap);

var natS = L.layerGroup();
L.marker(coords[4], {icon: nfc}).bindPopup(RJamesPopup, customOptions).addTo(natS);
L.marker(coords[5], {icon: nfc}).bindPopup(MBenzPopup, customOptions).addTo(natS);
L.marker(coords[6], {icon: nfc}).bindPopup(BAmericaPopup, customOptions).addTo(natS);
L.marker(coords[7], {icon: nfc}).bindPopup(SDomePopup, customOptions).addTo(natS);
natS.addTo(mymap);

var natE = L.layerGroup();
L.marker(coords[8], {icon: nfc}).bindPopup(FXPopup, customOptions).addTo(natE);
L.marker(coords[9], {icon: nfc}).bindPopup(ATTPopup, customOptions).addTo(natE);
L.marker(coords[10], {icon: nfc}).bindPopup(LFinancialPopup, customOptions).addTo(natE);
L.marker(coords[11], {icon: nfl}).bindPopup(MetlifePopup, customOptions).addTo(natE);
natE.addTo(mymap);

var natW = L.layerGroup();
L.marker(coords[12], {icon: nfc}).bindPopup(LeviPopup, customOptions).addTo(natW);
L.marker(coords[13], {icon: nfc}).bindPopup(SFarmPopup, customOptions).addTo(natW);
L.marker(coords[14], {icon: nfl}).bindPopup(SofiPopup, customOptions).addTo(natW);
L.marker(coords[15], {icon: nfc}).bindPopup(LumenPopup, customOptions).addTo(natW);
natW.addTo(mymap);

var ameN = L.layerGroup();
L.marker(coords[16], {icon: afc}).bindPopup(PBrownPopup, customOptions).addTo(ameN);
L.marker(coords[17], {icon: afc}).bindPopup(FEnergyPopup, customOptions).addTo(ameN);
L.marker(coords[18], {icon: afc}).bindPopup(MTBankPopup, customOptions).addTo(ameN);
L.marker(coords[19], {icon: afc}).bindPopup(HeinzPopup, customOptions).addTo(ameN);
ameN.addTo(mymap);

var ameS = L.layerGroup();
L.marker(coords[20], {icon: afc}).bindPopup(LOilPopup, customOptions).addTo(ameS);
L.marker(coords[21], {icon: afc}).bindPopup(TIAABankPopup, customOptions).addTo(ameS);
L.marker(coords[22], {icon: afc}).bindPopup(NRGPopup, customOptions).addTo(ameS);
L.marker(coords[23], {icon: afc}).bindPopup(NissanPopup, customOptions).addTo(ameS);
ameS.addTo(mymap);

var ameE = L.layerGroup();
L.marker(coords[24], {icon: afc}).bindPopup(HighmarkPopup, customOptions).addTo(ameE);
L.marker(coords[25], {icon: afc}).bindPopup(HRockPopup, customOptions).addTo(ameE);
L.marker(coords[26], {icon: afc}).bindPopup(GillettePopup, customOptions).addTo(ameE);
ameE.addTo(mymap);

var ameW = L.layerGroup();
L.marker(coords[27], {icon: afc}).bindPopup(EmpowerPopup, customOptions).addTo(ameW);
L.marker(coords[28], {icon: afc}).bindPopup(ArrowheadPopup, customOptions).addTo(ameW);
L.marker(coords[29], {icon: afc}).bindPopup(AllegiantPopup, customOptions).addTo(ameW);
ameW.addTo(mymap);

// Add Line
var line = L.polyline(coords, {color: "Navy", weight: 5}).bindPopup("Travel Path");
line.addTo(mymap);

// Add a scalebar 
L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap);


// Create menu items
var baseLayers = {
    'Grayscale': grayscale,
    'Streets': streets,
    'Satellite': satellite,
	};

var overlays = {
    'NFC North': natN,
    'NFC South': natS,
    'NFC East': natE,
    'NFC West': natW,
    'AFC North': ameN,
    'AFC South': ameS,
    'AFC East': ameE,
    'AFC West': ameW,
    'Travel Path': line,
};

//Create the menu window
var layerControl = L.control.layers(baseLayers, overlays, {collapsed: true}).addTo(mymap); //collapsed: true is defaults

//Create locator map
var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
    toggleDisplay: true,
    minimized: true,
    position: 'bottomleft'
}).addTo(mymap);

//Pop-up for showing XY coordinates on map
//// Create an empty popup
var popup = L.popup();
            
//// Function to set popup contents
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(
        "Go Pack Go!"
    ).openOn(mymap);}

//// Add event listener for click events to show lat long on the map
mymap.addEventListener("click", onMapClick);

// Add Navigation Buttons
L.easyButton(('<img src="images/Bears.png", height=80%, width=100%>'), function(btn, map){
    map.setView(coords[0], 15);
}).addTo(mymap);
L.easyButton(('<img src="images/Lions2.png", height=80%>'), function(btn, map){
    map.setView(coords[1], 15);
}).addTo(mymap);
L.easyButton(('<img src="images/Packers.png", height=80%>'), function(btn, map){
    map.setView(coords[2], 15);
}).addTo(mymap);
L.easyButton(('<img src="images/Vikings.png", height=80%>'), function(btn, map){
    map.setView(coords[3], 15);
}).addTo(mymap);

L.easyButton(('<img src="images/globe_icon.png", height=85%>'), function(btn, map){
    map.setView([40.0, -95.0], 5);
}).addTo(mymap);
