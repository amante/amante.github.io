// In this example, we center the map, and add a marker, using a LatLng object
// literal instead of a google.maps.LatLng object. LatLng object literals are
// a convenient way to add a LatLng coordinate and, in most cases, can be used
// in place of a google.maps.LatLng object.
let map;

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };
}

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  const marker = new google.maps.Marker({
    position: { lat: -33.522345, lng: -70.579265 },
    map: map,
  });
  
    const infowindow = new google.maps.InfoWindow();

    google.maps.event.addListener(marker, "click", () => {
      const content = document.createElement("div");
      
      const nameElement = document.createElement("h2");
      nameElement.textContent = "Farmacia Cruz verde";
      content.appendChild(nameElement);
    
      const placeAddressElement = document.createElement("p");
      placeAddressElement.textContent = "Dirección: Walker Martinez 1786";
      content.appendChild(placeAddressElement);
      
      const comunaElement = document.createElement("p");
      comunaElement.textContent = "Comuna: La Florida ";
      content.appendChild(comunaElement);

      const regionElement = document.createElement("p");
      regionElement.textContent = "Region: Metroplitana ";
      content.appendChild(regionElement);

      const stockElement = document.createElement("p");
      stockElement.textContent = "Stock de Gardasil 9: 10 unidades ";
      content.appendChild(regionElement);

      infowindow.setContent(content);
      infowindow.open(map, marker);
    });

window.initMap = initMap;
