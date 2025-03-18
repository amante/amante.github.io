let map;
let answer;
let filterStocked = [];
let filterNoStocked = [];

const Pharmacies =
    [
      //["Nombre", direccion, region, comuna, latitud, longitud, stock]
      ['CRUZ VERDE', 'ALFREDO SILVA CARVALLO 1401. INTERIOR MONTSERRAT', 'METROPOLITANA', 'MAIPU', -33.531915, -70.775603,'SI'], 
      ['CRUZ VERDE', 'CENTRAL 129 (EX 145)', 'METROPOLITANA', 'MAIPU', -33.513669, -70.826522, 'SI'], 
      ['CRUZ VERDE', 'AV. WALKER MARTINEZ 1642. INTERIOR MONTSERRAT', 'METROPOLITANA', 'QUINTA NORMAL', -33.430501, -70.692356,'SI'], 
      ['CRUZ VERDE', 'AV. DOMINGO SANTA MARIA 4112. INTERIOR MONTSERRAT', 'METROPOLITANA', 'RENCA', -33.405687, -70.704351, 'SI'],      
      ['CRUZ VERDE', 'OHIGGINS 195, LOCAL 1', 'VALPARAISO', 'QUILLOTA', -32.8793428949969, -71.2467871500868, 'NO'], 
      ['CRUZ VERDE', 'J.J. PEREZ 202', 'VALPARAISO', 'LA CALERA', -32.788066282624, -71.1897310126255, 'SI'], 
      ['CRUZ VERDE', 'URMENETA 99', 'VALPARAISO', 'LIMACHE', -32.9849921792696, -71.2757177058683, 'SI'], 
      ['CRUZ VERDE', 'REPUBLICA 281', 'VALPARAISO', 'LIMACHE', -33.0025007197382, -71.2654977848501, 'NO'], 
      ['CRUZ VERDE', 'CHACABUCO 281', 'VALPARAISO', 'QUILLOTA', -32.878335491624, -71.246141889165, 'SI'], 
      ['CRUZ VERDE', 'URMENETA 96', 'VALPARAISO', 'LIMACHE', -32.9853313679932, -71.2759083062112, 'SI'], 
      ['CRUZ VERDE', 'PALMIRA ROMANO 405', 'VALPARAISO', 'LIMACHE', -33.0021934734243, -71.2680155185573, 'SI'], 
      ['CRUZ VERDE', 'AV. LOS CARRERA Nº 754, PRIMER NIVEL MALL PASEO QUILPUé, LOCAL 100-102', 'VALPARAISO', 'QUILPUE', -33.0480884691307, -71.4429118882056, 'NO'],
      ['CRUZ VERDE', 'BENAVENTE 1','COQUIMBO','OVALLE',-30.6017851,-71.19722333,'SI'],
      ['CRUZ VERDE', 'VICUÑA MACKENNA 56','COQUIMBO','OVALLE',-30.6029773,-71.20057228,'NO'],
      ['CRUZ VERDE', 'VICUÑA MACKENNA 184','COQUIMBO','OVALLE',-30.6052776,-71.2072376,'SI'],
      ['CRUZ VERDE', 'VICUÑA MACKENNA 890', 'STRIP CENTER MIRADOR','COQUIMBO','OVALLE',-30.60648485,-71.20913848,'SI'],
      ['CRUZ VERDE', 'PROLONGACIÓN BENAVENTE Nº1075 LOCAL 1270 MALL OPEN PLAZA OVALLE','COQUIMBO','OVALLE',-30.598981,-71.1833997,'NO'],
      //["Nombre", direccion, region, comuna, latitud, longitud, stock]
      ['GALENICA', 'ARLEGUI N° 580 L - 7 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0236943992421, -71.5542400534807, 'SI'], 
      ['GALENICA', 'AV. PEDRO MONTT N° 2060', 'VALPARAISO', 'VALPARAISO', -33.0471602357967, -71.615342743841, 'SI'], 
      ['GALENICA', 'AMERICO VESPUCIO 7500 LOCAL B3-1B', 'METROPOLITANA', 'LA FLORIDA', -33.52163, -70.597311, 'SI'], 
      ['GALENICA', 'IRARRAZAVAL 2661', 'METROPOLITANA', 'ÑUÑOA', -33.45427, -70.603641, 'NO'], 
      ['GALENICA', 'TENIENTE CRUZ 540. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'PUDAHUEL', -33.458155, -70.738266, 'Si'], 
      ['GALENICA', 'AV. CONCHA Y TORO 157', 'METROPOLITANA', 'PUENTE ALTO', -33.610491, -70.575739, 'SI'], 
      ['GALENICA', 'AV. CARRASCAL 4436. INTERIOR EKONO', 'METROPOLITANA', 'QUINTA NORMAL', -33.422899, -70.694128, 'SI'], 
      ['GALENICA', 'AV. CARRASCAL 6001. INTERIOR SUPERBODEGA ACUENTA', 'METROPOLITANA', 'QUINTA NORMAL', -33.4164, -70.711824, 'NO'], 
      ['GALENICA', 'EYZAGUIRRE  523', 'METROPOLITANA', 'SAN BERNARDO', -33.59314, -70.705474, 'Si'], 
      ['GALENICA', 'SAN ANTONIO 380', 'METROPOLITANA', 'SANTIAGO', -33.438483, -70.648308, 'Si'], 
      ['GALENICA', 'PROVIDENCIA 2592', 'METROPOLITANA', 'PROVIDENCIA', -33.41856159674302, -70.6031911075224,'Si'],
      ['GALENICA', 'GERóNIMO DE ALDERETE N° 1554, LOCAL 1', 'METROPOLITANA', 'VITACURA', -33.388055, -70.564917,'NO'] 
      ];
  
function initMap(){
  let mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  setMarkers(map);
} 

function setMarkers(map){

  let nombre;
  let direccion;
  let region;
  let ciudad;
  let latitud;
  let longitud;
  let stock;

  const infowindow = new google.maps.InfoWindow();

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
    
    for (let i = 0; i < Pharmacies.length; i++) {  
      const marker = new google.maps.Marker({
      map: map,
      position: { lat: latitud, lng: longitud },
      title: nombre,
      stock: stock,
      icon: Pharmacies[i][0] === "CRUZ VERDE" ? CruzVerdeIcon : GalenicaIcon  
    });

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
        case 6: stock = Pharmacies[i][j];
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

    function FilterMarkerStock(answer){
      console.log ('Calling FilterMarkerStock, stockSelection: ' + stock );
      var stockBoolean = document.getElementById("selector");
      console.log ('Calling stockBoolean: ' + stockBoolean );
      for (let i = 0; i < Pharmacies.length; i++) {
        for (let j = 0; j < Pharmacies[i].length; j++){
          if (Pharmacies[i][j] === "Si")
            filterStocked.push(Pharmacies[i]);
          else filterNoStocked.push(Pharmacies[i]); 
        }
        console.log('Arreglo con Stock' + filterStocked);
        console.log('Arreglo sin Stock' + filterNoStocked);
      }
    } 

window.initMap = initMap;