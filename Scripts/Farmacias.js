let map;

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  setMarkers(map);
}

  function setMarkers(map) {
    
    let nombre;
    let direccion;
    let region;
    let ciudad;
    let latitud; 
    let longitud;

    const infowindow = new google.maps.InfoWindow();

    const Pharmacies = 
      [
        //["Nombre", direccion, region, comuna, latitud, longitud]
        ["Farmacia Iberia", "VICTORIA Nº 3092","Valparaiso", "Valparaiso", "-33.0507821994016","-71.6029768890481"],
        ["Botica Unión",	"CONDELL 1205",	"VALPARAISO",	"VALPARAISO",	"-33.0436526830044",	"-71.6243601197905"],
        ["Farmacia Galénica",	"ARLEGUI N° 580 L - 7 OF. 201",	"VALPARAISO",	"VIÑA DEL MAR",	"-33.0236943992421",	"-71.5542400534807"]
    ];
  
    for (let i = 0; i < Pharmacies.length; i++) {
      for (let j = 0; j < Pharmacies[i].length; j++) {
        switch (j){
          case 0: nombre = Pharmacies[i][j];
          break;
          case 1: direccion = Pharmacies[i][j];
          break;
          case 2: region = Pharmacies[i][j];
          break;
          case 3: ciudad = Pharmacies[i][j];
          break;
          case 4: latitud = parseFloat(Pharmacies[i][j]);
          break;
          case 5: longitud = parseFloat(Pharmacies[i][j]);
          break;
        }
        
        const marker = new google.maps.Marker({
          map: map,
          position: { lat: latitud, lng: longitud },
          title: nombre
        });
      
        google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        
        //const nameElement = document.createElement("h2");
        //nameElement.textContent = "Nombre: " + nombre;
        //content.appendChild(nameElement);

        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = "Dirección: " + direccion;
        content.appendChild(placeAddressElement);
        
        const regionElement = document.createElement("p");
        regionElement.textContent = "Region: " + region;
        content.appendChild(regionElement);

        const cityElement = document.createElement("p");
        cityElement.textContent = "Ciudad: " + ciudad;
        content.appendChild(cityElement);

        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
  }
}
  }
   
window.initMap = initMap;