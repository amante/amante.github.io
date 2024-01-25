let map;

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //setMarkers(map);
}

  function setMarkers(map) {
    let latitud; 
    let longitud;

    const Pharmacies = 
      [
        //["Nombre", direccion, region, comuna, latitud, longitud]
        ["Farmacia Iberia", "VICTORIA Nº 3092","Valparaiso", "Valparaiso", "-33.0507821994016","-71.6029768890481"],
        ["Botica Unión",	"CONDELL 1205",	"VALPARAISO",	"VALPARAISO",	"-33.0436526830044",	"-71.6243601197905"],
        ["Farmacia Galénica",	"ARLEGUI N° 580 L - 7 OF. 201",	"VALPARAISO",	"VIÑA DEL MAR",	"-33.0236943992421",	"-71.5542400534807"]
    ];
  
    for (let i = 0; i < Pharmacies.length; i++) {
      for (let j = 0; j < Pharmacies[i].length; j++) {
        if (j = 4) {latitud = parseFloat(Pharmacies[i][j]);
        console.log(latitud)}
        if (j = 5) {longitud = parseFloat(Pharmacies[i][j]);
        console.log(longitud)}    
      }
      const marker = new google.maps.Marker({
        position: { lat: latitud, lng: longitud },
        map: map,
      });
    }
  }
   
window.initMap = initMap;