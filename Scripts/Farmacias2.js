// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let map;
let service;
let infowindow;

function initMap() {
  const santiago = new google.maps.LatLng(-33.447487,-70.673676);

  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: santiago,
    zoom: 15,
  });

 // const request = {
   // query: "Museum of Contemporary Art Australia",
    //fields: ["name", "geometry"],
 // };

  //service = new google.maps.places.PlacesService(map);
  //service.findPlaceFromQuery(request, (results, status) => {
   // if (status === google.maps.places.PlacesServiceStatus.OK && results) {

   results = [
    ['IBERIA', 'VICTORIA Nº 3092', 'VALPARAISO', 'VALPARAISO', -33.0507821994016, -71.6029768890481], 
    ['BOTICA UNIÓN', 'CONDELL 1205', 'VALPARAISO', 'VALPARAISO', -33.0436526830044, -71.6243601197905], 
    ['GALENICA', 'ARLEGUI N° 580 L - 7 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0236943992421, -71.5542400534807]
];
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  //});
//}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}

window.initMap = initMap;