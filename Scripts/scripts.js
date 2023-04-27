function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -33.447487, lng: -70.673676 },
  });
  
  setMarkers(map);
}

function setMarkers(map) {
  const vaccinations = 
    [
      ["Vacunatorio Internacional Inmunitas", -33.42269251621238, -70.60987858557121, 12],
      ["Kiñewen Ltda.", -36.82684827802099, -73.04134071814575, 11],
      ["Vacunatorio Neumann y Bertín ", -34.58507071409237, -70.99013399314826, 10],
      ["Clínica de Salud Sanymed", -23.654581449870122, -70.40194410537413, 9],
      ["Clínica Alemana de Valdivia", -39.818189519002686, -73.2397338044536, 8],
      ["Clínica Los Andes Chillán", -36.61485354679745, -72.10772415069209, 7],
      //["Darvax Salud", -33.43101841425493, -70.5661021023559, 6],
  ];

  const request = {
    placeId: "ChIJ-cMnGA7PYpYRz1hGYJ4E5so",
    fields: ["name", "formatted_address", "place_id", "geometry", "formatted_phone_number", "website" ],
  };
  const infowindow = new google.maps.InfoWindow();
  const service = new google.maps.places.PlacesService(map);
  
  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
      });
  
      google.maps.event.addListener(marker, "click", () => {
        const content = document.createElement("div");
        
        const nameElement = document.createElement("h2");
        nameElement.textContent = place.name;
        content.appendChild(nameElement);

        const websiteElement = document.createElement("p");
        websiteElement.textContent = place.website;
        content.appendChild(websiteElement);
        
        const phoneElement = document.createElement("p");
        phoneElement.textContent = place.formatted_phone_number;
        content.appendChild(phoneElement);
  
        /**const placeIdElement = document.createElement("p");
  
        placeIdElement.textContent = place.place_id;
        content.appendChild(placeIdElement);
  
        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = place.formatted_address;
        content.appendChild(placeAddressElement);**/
        
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  });
}

window.initMap = initMap;