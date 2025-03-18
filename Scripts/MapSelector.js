const categoryFilter = document.getElementById('category-filter');
const mapContainer = document.getElementById('map');

// Initialize map (replace with your map setup)
let map;
const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

const markersData = [
  { lat: 37.7749, lng: -122.4194, category: 'category1', popup: 'Marker 1' },
  { lat: 34.0522, lng: -118.2437, category: 'category2', popup: 'Marker 2' },
  { lat: 40.7128, lng: -74.0060, category: 'category1', popup: 'Marker 3' },
  { name: 'CRUZ VERDE', 'VICUÑA MACKENNA 890', 'STRIP CENTER MIRADOR','COQUIMBO','OVALLE', lat: -30.60648485,lng: -71.20913848, stock: 'SI},
  {'CRUZ VERDE', 'PROLONGACIÓN BENAVENTE Nº1075 LOCAL 1270 MALL OPEN PLAZA OVALLE','COQUIMBO','OVALLE',-30.598981,-71.1833997,'NO'}
  // Add more marker data as needed
];

let markers = [];

// Function to create and add markers to the map
function addMarkers() {
    markers = markersData.map(data => {
        const marker = L.marker([data.lat, data.lng]).addTo(map).bindPopup(data.popup);
        marker.category = data.category; // Store category in marker object
        return marker;
    });
}

addMarkers();

categoryFilter.addEventListener('change', () => {
  const selectedCategory = categoryFilter.value;

  markers.forEach(marker => {
    if (selectedCategory === 'all' || marker.category === selectedCategory) {
      marker.setOpacity(1); // Show marker
    } else {
      marker.setOpacity(0); // Hide marker
    }
  });
});