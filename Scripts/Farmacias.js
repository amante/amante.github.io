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
  let stock;

  const infowindow = new google.maps.InfoWindow();

  const PharmaciesCruzVerde =
    [
      //["Nombre", direccion, region, comuna, latitud, longitud, stock]
      ['CRUZ VERDE', 'ALFREDO SILVA CARVALLO 1401. INTERIOR MONTSERRAT', 'METROPOLITANA', 'MAIPU', -33.531915, -70.775603,'Si'], 
      ['CRUZ VERDE', 'CENTRAL 129 (EX 145)', 'METROPOLITANA', 'MAIPU', -33.513669, -70.826522, 'Si'], 
      ['CRUZ VERDE', 'AV. WALKER MARTINEZ 1642. INTERIOR MONTSERRAT', 'METROPOLITANA', 'QUINTA NORMAL', -33.430501, -70.692356,'Si'], 
      ['CRUZ VERDE', 'AV. DOMINGO SANTA MARIA 4112. INTERIOR MONTSERRAT', 'METROPOLITANA', 'RENCA', -33.405687, -70.704351, 'Si'],      
      ['CRUZ VERDE', 'OHIGGINS 195, LOCAL 1', 'VALPARAISO', 'QUILLOTA', -32.8793428949969, -71.2467871500868, 'NO'], 
      ['CRUZ VERDE', 'J.J. PEREZ 202', 'VALPARAISO', 'LA CALERA', -32.788066282624, -71.1897310126255, 'Si'], 
      ['CRUZ VERDE', 'URMENETA 99', 'VALPARAISO', 'LIMACHE', -32.9849921792696, -71.2757177058683, 'Si'], 
      ['CRUZ VERDE', 'REPUBLICA 281', 'VALPARAISO', 'LIMACHE', -33.0025007197382, -71.2654977848501, 'NO'], 
      ['CRUZ VERDE', 'CHACABUCO 281', 'VALPARAISO', 'QUILLOTA', -32.878335491624, -71.246141889165, 'Si'], 
      ['CRUZ VERDE', 'URMENETA 96', 'VALPARAISO', 'LIMACHE', -32.9853313679932, -71.2759083062112, 'Si'], 
      ['CRUZ VERDE', 'PALMIRA ROMANO 405', 'VALPARAISO', 'LIMACHE', -33.0021934734243, -71.2680155185573, 'Si'], 
      ['CRUZ VERDE', 'AV. LOS CARRERA Nº 754, PRIMER NIVEL MALL PASEO QUILPUé, LOCAL 100-102', 'VALPARAISO', 'QUILPUE', -33.0480884691307, -71.4429118882056, 'No']
    ];

    const PharmaciesGalenica =
    [
      //["Nombre", direccion, region, comuna, latitud, longitud, stock]
      ['GALENICA', 'ARLEGUI N° 580 L - 7 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0236943992421, -71.5542400534807, 'Si'], 
      ['GALENICA', 'AV. PEDRO MONTT N° 2060', 'VALPARAISO', 'VALPARAISO', -33.0471602357967, -71.615342743841, 'Si'], 
      ['GALENICA', 'AMERICO VESPUCIO 7500 LOCAL B3-1B', 'METROPOLITANA', 'LA FLORIDA', -33.52163, -70.597311, 'Si'], 
      ['GALENICA', 'IRARRAZAVAL 2661', 'METROPOLITANA', 'ÑUÑOA', -33.45427, -70.603641, 'NO'], 
      ['GALENICA', 'TENIENTE CRUZ 540. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'PUDAHUEL', -33.458155, -70.738266, 'Si'], 
      ['GALENICA', 'AV. CONCHA Y TORO 157', 'METROPOLITANA', 'PUENTE ALTO', -33.610491, -70.575739, 'Si'], 
      ['GALENICA', 'AV. CARRASCAL 4436. INTERIOR EKONO', 'METROPOLITANA', 'QUINTA NORMAL', -33.422899, -70.694128, 'Si'], 
      ['GALENICA', 'AV. CARRASCAL 6001. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'QUINTA NORMAL', -33.4164, -70.711824, 'NO'], 
      ['GALENICA', 'EYZAGUIRRE  523', 'METROPOLITANA', 'SAN BERNARDO', -33.59314, -70.705474, 'Si'], 
      ['GALENICA', 'SAN ANTONIO 380', 'METROPOLITANA', 'SANTIAGO', -33.438483, -70.648308, 'Si'], 
      ['GALENICA', 'PROVIDENCIA 2592', 'METROPOLITANA', 'PROVIDENCIA', -33.41856159674302, -70.6031911075224,'Si'],
      ['GALENICA', 'GERóNIMO DE ALDERETE N° 1554, LOCAL 1', 'METROPOLITANA', 'VITACURA', -33.388055, -70.564917,'NO'] 
      ];
  
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
  
    for (let i = 0; i < PharmaciesCruzVerde.length; i++) {  
      const marker = new google.maps.Marker({
      map: map,
      position: { lat: latitud, lng: longitud },
      title: nombre,
      icon: CruzVerdeIcon,
    });

    for (let j = 0; j < PharmaciesCruzVerde[i].length; j++) {
      switch (j) {
        case 0: nombre = PharmaciesCruzVerde[i][j];
          break;
        case 1: direccion = PharmaciesCruzVerde[i][j];
          break;
        case 2: region = PharmaciesCruzVerde[i][j];
          break;
        case 3: ciudad = PharmaciesCruzVerde[i][j];
          break;
        case 4: latitud = parseFloat(PharmaciesCruzVerde[i][j]);
          break;
        case 5: longitud = parseFloat(PharmaciesCruzVerde[i][j]);
          break;
        case 6: stock = PharmaciesCruzVerde[i][j];
          break;
      }
      
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

            const stockElement = document.createElement("p");
            stockElement.textContent = "Stock: " + stock + " Disponible";
            content.appendChild(stockElement);
      
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });       
    }

    
    }
    for (let i = 0; i < PharmaciesGalenica.length; i++) {  
      const marker = new google.maps.Marker(
        {
          map: map,
          position: { lat: latitud, lng: longitud },
          title: nombre,
          icon: GalenicaIcon,
        }
      );
    
    for (let j = 0; j < PharmaciesGalenica[i].length; j++) {
      switch (j) {
        case 0: nombre = PharmaciesGalenica[i][j];
          break;
        case 1: direccion = PharmaciesGalenica[i][j];
          break;
        case 2: region = PharmaciesGalenica[i][j];
          break;
        case 3: ciudad = PharmaciesGalenica[i][j];
          break;
        case 4: latitud = parseFloat(PharmaciesGalenica[i][j]);
          break;
        case 5: longitud = parseFloat(PharmaciesGalenica[i][j]);
          break;
        case 6: stock = PharmaciesGalenica[i][j];
          break;
      }
      
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
    
            const stockElement = document.createElement("p");
            stockElement.textContent = "Stock: " + stock + " Disponible";
            content.appendChild(stockElement);
      
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });       
        }    
      }
    }
window.initMap = initMap;
