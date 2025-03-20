let map;
let markers = [];
let infoBoxes = [];
let answer;
let AfilterMarker = [];
let Amarkers = [];
var farmasMarker = [];

  function initMap() {
  if (typeof google === 'undefined') {
    console.error('Google Maps API is not loaded.');
    return;
  }

  map = new google.maps.Map(document.getElementById("map"), {
    center: { 
      lat: -33.447487, 
      lng: -70.673676 
    },
    zoom: 8,
    mapTypeControl: false
  });
  
  google.maps.event.addListener(map, "click", function(event) {
    closeInfoBoxes();
});

setupFarmacias();
}

setupFarmacias = () => {
  const script = document.createElement("script");
  script.src = "./Scripts/farmas.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

const farmasChile = function(results) {
  for (let i = 0; i < results.farmacias.length; i++) {
      renderMarker(results.farmacias, i, farmasMarker);
    }
  };

  function clearMarkers() {
    for (let i = 0; i < farmasMarker.length; i++) {
      farmasMarker[i].setMap(null);
    }
    farmasMarker = [];
  }

  function FilterMarkerStock(answer)
  {
    console.log(farmasMarker);
    /*var stockBoolean = answer;
    clearMarkers();

    for (let i = 0; i < results.farmacias.length; i++)
      {
        for (let j = 0; j < results.farmacias[i].length; j++)
          {var x = results.farmacias[i][j];}
        
        var actualStock = x;
        if ( actualStock === stockBoolean)
          {AfilterMarker.push(results.farmacias[i]);}
    }
    renderMarker(AfilterMarker);*/
  } 

function renderMarker(farmas, i, farmasMarker) {
  const CruzVerdeIcon = {
    url: "https://images.ctfassets.net/ca03ioli1ast/1xGMXLosdwfK6wU6a8Gf4T/99daa806070e94667a3dd9c67a35c8ee/Logo_Cruz_FondoBlanco__3_.svg",
    scaledSize: new google.maps.Size(35, 35),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };
  
  const GalenicaIcon = {
  url: "https://farmaciagalenica.cl/wp-content/uploads/2023/03/lg_gl_n_.svg",
  scaledSize: new google.maps.Size(35, 35),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(0, 0)
  };

  const SalcoIcon = {
    url: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Logo_Salcobrand.svg",
    scaledSize: new google.maps.Size(35, 35),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 0)
  };

  const AhumadaIcon = {
    url: "https://www.farmaciasahumada.cl/Content/img/logo.svg",
    scaledSize: new google.maps.Size(35, 35),
    origin: new google.maps.Point(0, 0),
  };

  const OtrosIcon = {
    url: "https://banner2.cleanpng.com/20240216/ogy/transparent-google-maps-logo-google-maps-marker-with-global-regions-and-1710875716456.webp",
    scaledSize: new google.maps.Size(35, 35),
    origin: new google.maps.Point(0, 0),
  };

  const latLng = new google.maps.LatLng(farmas[i].Latitude, farmas[i].Longitude);

  var newMarker = new google.maps.Marker({
    position: latLng,
    title: farmas[i].Nombre,
    stock: farmas[i].Stock,
    map: map,
    icon: farmas[i].Nombre === 'CRUZ VERDE' ? CruzVerdeIcon : farmas[i].Nombre === 'GALENICA' ? GalenicaIcon : farmas[i].Nombre === 'SALCOBRAND' ? SalcoIcon : farmas[i].Nombre === "AHUMADA" ? AhumadaIcon : OtrosIcon
  });

  var url = 'https://www.google.com/maps/place/' + newMarker.position.lat() + ',' + newMarker.position.lng();
  newMarker.set('url', url);
  
  farmasMarker.push(newMarker);

  showInfoWindow(newMarker, farmas[i]);

  function closeInfoBoxes() {
    infoBoxes.forEach((infoBox) => {
      infoBox.close();
    });
  } 

  function showInfoWindow(marker, farmas) {
    
    var infoBox = new google.maps.InfoWindow({
      content: '<div id="content">' +
      '<h1 id="firstHeading" class="firstHeading">' + farmas.Nombre + '</h1>' + '<div id="bodyContent">' +
      '<p><b>Dirección: </b>' + farmas.Direccion + '</p>' +
      '<p><b>Region: </b>' + farmas.Region + '</p>' +
      '<p><b>Ciudad: </b>' + farmas.Comuna + '</p>' +
      '<p><b>Stock: </b>' + farmas.Stock + '</p>' +
      (marker.url ? '<p><a target="_blank" style="font-weight: bold; font-size: 16px;" id="' + marker.name + '" href="' + marker.url + '">Cómo llegar</a></p>' : '') +
      '</div>' +
      '</div>'
    });

    infoBoxes.push(infoBox);

    marker.addListener("click", () => {
      closeInfoBoxes();
      infoBox.open(map, marker);
      map.setZoom(10);
      map.setCenter(marker.getPosition());  
    });
  }
 
}
window.initMap = initMap;