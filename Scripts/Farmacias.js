let map;

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);

  setMarkers(map);
}

function setMarkers(map) {

  let nombre;
  let direccion;
  let region;
  let ciudad;
  let latitud;
  let longitud;

  const infowindow = new google.maps.InfoWindow();

  const Pharmacies =
    [
      //["Nombre", direccion, region, comuna, latitud, longitud]
      ['IBERIA', 'VICTORIA Nº 3092', 'VALPARAISO', 'VALPARAISO', -33.0507821994016, -71.6029768890481], 
      ['BOTICA UNIÓN', 'CONDELL 1205', 'VALPARAISO', 'VALPARAISO', -33.0436526830044, -71.6243601197905], 
      ['GALENICA', 'ARLEGUI N° 580 L - 7 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0236943992421, -71.5542400534807], 
      ['GALENICA', 'AV. PEDRO MONTT N° 2060', 'VALPARAISO', 'VALPARAISO', -33.0471602357967, -71.615342743841], 
      ['GALENICA', 'AMERICO VESPUCIO 7500 LOCAL B3-1B', 'METROPOLITANA', 'LA FLORIDA', -33.52163, -70.597311], 
      ['GALENICA', 'IRARRAZAVAL 2661', 'METROPOLITANA', 'ÑUÑOA', -33.45427, -70.603641], 
      ['GALENICA', 'TENIENTE CRUZ 540. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'PUDAHUEL', -33.458155, -70.738266], 
      ['GALENICA', 'AV. CONCHA Y TORO 157', 'METROPOLITANA', 'PUENTE ALTO', -33.610491, -70.575739], 
      ['GALENICA', 'AV. CARRASCAL 4436. INTERIOR EKONO', 'METROPOLITANA', 'QUINTA NORMAL', -33.422899, -70.694128], 
      ['GALENICA', 'AV. CARRASCAL 6001. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'QUINTA NORMAL', -33.4164, -70.711824], 
      ['GALENICA', 'EYZAGUIRRE  523', 'METROPOLITANA', 'SAN BERNARDO', -33.59314, -70.705474], 
      ['GALENICA', 'SAN ANTONIO 380', 'METROPOLITANA', 'SANTIAGO', -33.438483, -70.648308], 
      ['GALENICA', 'PROVIDENCIA 2592', 'METROPOLITANA', 'PROVIDENCIA', -33.41856159674302, -70.6031911075224], 
      ['GALENICA', 'GERóNIMO DE ALDERETE N° 1554, LOCAL 1', 'METROPOLITANA', 'VITACURA', -33.388055, -70.564917], 
      ['CENTRAL DE HOMEOPATIA SAN ANTONIO', 'PEDRO MONTT Nº 129 L - 3', 'VALPARAISO', 'SAN ANTONIO', -33.5800344387736, -71.6114727596172], 
      ['HOSPITAL 1', 'CARRERA N° 737', 'VALPARAISO', 'LA CALERA', -32.7872809066268, -71.1913238392171], 
      ['SAN NICOLAS', 'J.J. PEREZ N° 396', 'VALPARAISO', 'LA CALERA', -32.7862582411004, -71.189985617592], 
      ['FAMIFARMA', 'CHACABUCO Nº 208', 'VALPARAISO', 'CASABLANCA', -33.3200990278442, -71.406862450338]
    ];

  for (let i = 0; i < Pharmacies.length; i++) {
    for (let j = 0; j < Pharmacies[i].length; j++) {
      switch (j) {
        case 0: nombre = Pharmacies[i][j];
          break;
        case 1: direccion = Pharmacies[i][j];
          break;
        case 2: region = Pharmacies[i][j];
          break;
        case 3: ciudad = Pharmacies[i][j];
          break;
        case 4: latitud = parseFloat(Pharmacies[i][j]);
          break;
        case 5: longitud = parseFloat(Pharmacies[i][j]);
          break;
      }
    }
    const marker = new google.maps.Marker({
      map: map,
      position: { lat: latitud, lng: longitud },
      title: nombre
    });

    google.maps.event.addListener(marker, "click", () => {
      const content = document.createElement("div");

      const nameElement = document.createElement("h2");
      nameElement.textContent = "Nombre: " + nombre;
      content.appendChild(nameElement);

      const placeAddressElement = document.createElement("p");
      placeAddressElement.textContent = "Dirección: " + direccion;
      content.appendChild(placeAddressElement);

      const regionElement = document.createElement("p");
      regionElement.textContent = "Region: " + region;
      content.appendChild(regionElement);

      const cityElement = document.createElement("p");
      cityElement.textContent = "Ciudad: " + ciudad;
      content.appendChild(cityElement);

      infowindow.setContent(content);
      infowindow.open(map, marker);
    });
  }
}

window.initMap = initMap;