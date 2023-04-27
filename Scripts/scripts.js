function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -33.447487, lng: -70.673676 },
  });
  
  setMarkers(map);
}

function setMarkers(map) {
  const vaccinationsCenterIDs = 
    [
      [ChIJ-xL7GbXPYpYRYvlfpxLb9gY],
      [ChIJ-cMnGA7PYpYRz1hGYJ4E5so],
  ];

  for (let i = 0; i < vaccinationsCenterIDs.length; i++) {
    const vaxcenter = vaccinationsCenterIDs[i];

  const request = {
    placeId: vaxcenter[0],
    fields: ["name", "formatted_address", "place_id", "geometry", "formatted_phone_number", "website", "icon"],
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

        const placeIdElement = document.createElement("p");
        placeIdElement.textContent = "ID: "+place.place_id;
        content.appendChild(placeIdElement);

        const placeAddressElement = document.createElement("p");
        placeAddressElement.textContent = "Dirección: "+place.formatted_address;
        content.appendChild(placeAddressElement);
        
        const phoneElement = document.createElement("p");
        phoneElement.textContent = "Teléfono: "+place.formatted_phone_number;
        content.appendChild(phoneElement);

        const websiteElement = document.createElement("a");
        websiteElement.setAttribute('href', place.website);
        websiteElement.textContent = place.website;
        content.appendChild(websiteElement);

        infowindow.setContent(content);
        infowindow.open(map, marker);
      });
    }
  });
}
}
window.initMap = initMap;