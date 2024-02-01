// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

let map;
let service;
let infowindow;
let latitud;
let longitud;
let direccion;

function initMap() {
  const santiago = new google.maps.LatLng(-33.447487,-70.673676);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: santiago,
    zoom: 8,
  });

   const results = [
    ['IBERIA', 'VICTORIA Nº 3092', 'VALPARAISO', 'VALPARAISO', -33.0507821994016, -71.6029768890481], 
    ['BOTICA UNIÓN', 'CONDELL 1205', 'VALPARAISO', 'VALPARAISO', -33.0436526830044, -71.6243601197905], 
    ['GALENICA', 'ARLEGUI N° 580 L - 7 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0236943992421, -71.5542400534807]
];
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
    }
  //});
//}

function createMarker(place) {
    for (let j=0; j <= place.length; j++){
        if (j=1){direccion = place[j];}
        if (j=2){region = place[j];}
        if (j=3){comuna = place[j];}
        if (j=4){latitud = place[j];}
        if (j=5){longitud = place[j];}   
    } 

  const marker = new google.maps.Marker({
    map,
    position: { lat: latitud, lng: longitud },
  });

  google.maps.event.addListener(marker, "click", () => {
    const content = document.createElement("div");

    const placeAddressElement = document.createElement("p");
    placeAddressElement.textContent = "Dirección: " + direccion;
    content.appendChild(placeAddressElement);

    infowindow.setContent(content);
    infowindow.open(map, marker);
  });
}

window.initMap = initMap;