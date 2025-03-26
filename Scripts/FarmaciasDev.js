let map;
let markers = [];
let infoBoxes = [];
let answer;
let AfilterMarker = [];
let Amarkers = [];
var farmasMarker = [];

function ShowCampaign(){

  const CircleMapData = {
    Zona0: {
      center: { lat: -32.8793428949969, lng: -71.2467871500868 },
      population: 8405837,
    },
    Zona1: {
      center: { lat: -18.478643, lng: -70.3183619 },
      population: 2714856,
    },
    Zona2: {
      center: { lat: -32.8793428949969, lng: -71.2467871500868 },
      population: 8405837,
    },
    Zona3: {
      center: { lat: -32.788066282624, lng: -71.2467871500868 },
      population: 3857799,
    },
    Zona4: {
      center: { lat: -32.9849921792696, lng: -71.2757177058683 }, 
      population: 1603502,
    },
    Zona5: {
      center: { lat: -33.0025007197382, lng: -71.2654977848501 },
      population: 2714856,
    },
    Zona6: {
      center: { lat: -23.09989857, lng: -70.44747479 },
      population: 8405837,
    },
    Zona7: {
      center: { lat: -41.44697699, lng: -72.95697665 },
      population: 3857799,
    },
    Zona8: {
      center: { lat: -32.9849921792696, lng: -71.2757177058683 },
      population: 1603502,
    },
    Zona9: {
      center: { lat: -30.598981, lng: -71.1833997 },
      population: 2714856,
    },
  };

/*  var CircleMapData = [

    {
      location: new google.maps.LatLng(-32.8793428949969,-71.2467871500868),
      weight: 10
  }, {
      location: new google.maps.LatLng(-32.788066282624,-71.1897310126255),
      weight: 20
  }, {
    location: new google.maps.LatLng(-32.9849921792696,-71.2757177058683),
    population: 500000
  }, {
    location: new google.maps.LatLng(-33.0025007197382,-71.2654977848501),
    population: 550000
  }, {
    location: new google.maps.LatLng(-32.878335491624,-71.246141889165),
    population: 600000
  }, {
    location: new google.maps.LatLng(-32.9853313679932,-71.2759083062112),
    population: 900000
  }, {
    location: new google.maps.LatLng(-33.0021934734243,-71.2680155185573),
    population: 850000
  }, {
    location: new google.maps.LatLng(-33.0480884691307,-71.4429118882056),
    population: 700000
    }
  ];*/
  var circleMap = null;
  
  for (const campaign in CircleMapData) {
    // Add the circle for this city to the map.
      circleMap = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: CircleMapData[campaign].center,
      radius: Math.sqrt(CircleMapData[campaign].population),
    });
  }
  circleMap.setMap(map);
}

function closeInfoBoxes() {
  infoBoxes.forEach((infoBox) => {
    infoBox.close();
  });
} 

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
    AfilterMarker = [];
  }

  function FilterMarkerStock(answer)
  {
    var stockBoolean = answer;
    clearMarkers();

    if (stockBoolean === "SI"){
      for (let i = 0; i < farmasMarker.length; i++)
        {
         if (farmasMarker[i].stock === stockBoolean){
          AfilterMarker.push(farmasMarker[i]);
          console.log(farmasMarker[i] + " se debe mostrar");
        }
        renderMarker(AfilterMarker);
      }
    }
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