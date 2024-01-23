function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -33.447487, lng: -70.673676 },
  });
}
window.initMap = initMap;