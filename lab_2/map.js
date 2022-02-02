var mymap = L.map("map").setView([43.81642117539796, -91.23209456992531], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibXNodW13YXk5OCIsImEiOiJja3o0cDUyOWkwaWdyMnVxb2x0Z2ZqNjJhIn0.K_YKwXVoUcB4-cL9mdbvog', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([43.81642117539796, -91.23209456992531])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am University of Wisconsin La Crosse.")
    .openPopup();