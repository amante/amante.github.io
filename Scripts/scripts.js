function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -33.447487, lng: -70.673676 },
  });
  
  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
const vaccinations = 
[
  ["Vacunatorio Internacional Inmunitas", -33.42269251621238, -70.60987858557121, 12],
  ["Kiñewen Ltda.", -36.82684827802099, -73.04134071814575, 11],
  ["Vacunatorio Neumann y Bertín ", -34.58507071409237, -70.99013399314826, 10],
  ["Clínica de Salud Sanymed", -23.654581449870122, -70.40194410537413, 9],
  ["Clínica Alemana de Valdivia", -39.818189519002686, -73.2397338044536, 8],
  ["Clínica Los Andes Chillán", -36.61485354679745, -72.10772415069209, 7],
  ["Darvax Salud", -33.43101841425493, -70.5661021023559, 6],
];

function setMarkers(map) {
  // Adds markers to the map.
  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.
  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  
  const image = {
     url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 100).
    anchor: new google.maps.Point(0, 32),
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  const shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: "poly",
  };

  for (let i = 0; i < vaccinations.length; i++) {
    const beach = vaccinations[i];

    new google.maps.Marker({
      position: { lat: beach[1], lng: beach[2] },
      map,
      icon: image,
      shape: shape,
      title: beach[0],
      zIndex: beach[3],
    });
  }
}

window.initMap = initMap;