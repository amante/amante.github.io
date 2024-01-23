function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  });
  
    const marker = new google.maps.Marker({
      position: { lat: -33.522345, lng: -70.579265 },
      map,
    });

    const infowindow = new google.maps.InfoWindow({
      content: "<p>Ubicación Farmacia:" + marker.getPosition() + "</p>",
    });
  
    google.maps.event.addListener(marker, "click", () => {
      infowindow.open(map, marker);
    });
  }
window.initMap = initMap;