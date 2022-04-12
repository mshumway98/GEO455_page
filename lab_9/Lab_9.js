var mymap = L.map('map', {
    center: [43.12944438101132, -89.42365678629186],
              zoom: 8,
          });
    
 var grayscale = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png', {
   attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.',
   maxZoom: 11,
   minZoom: 2
 }).addTo(mymap);

var migrationLayer = new L.migrationLayer({
        map: mymap,
        data: data,
        pulseRadius:75,
        pulseBorderWidth:2,
        arcWidth:1,
        arcLabel:true,
        arcLabelFont:'10px sans-serif',
        maxWidth:10
        }
    );
    migrationLayer.addTo(mymap);

    function hide(){
        migrationLayer.hide();
    }
    function show(){
        migrationLayer.show();
    }
    function play(){
        migrationLayer.play();
    }
    function pause(){
        migrationLayer.pause();
    }
