let map;

const { Map } = await google.maps.importLibrary("maps");
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

function initMap() {
  const mapOptions = {
    zoom: 15,
    center: { lat: -33.447487, lng: -70.673676 },
  };

  const map = new Map(document.getElementById("map"), mapOptions);

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
      ['FAMIFARMA', 'CHACABUCO Nº 208', 'VALPARAISO', 'CASABLANCA', -33.3200990278442, -71.406862450338], 
      ['DR. SIMI', 'O"HIGGINS N°293', 'VALPARAISO', 'LOS ANDES', -32.8344438188261, -70.5975221792207], 
      ['DR SIMI', 'ESMERALDA N°286', 'VALPARAISO', 'LOS ANDES', -32.8334836244902, -70.5971417561781], 
      ['NUEVA MODERNA', 'PORTUS Nº1194, LOCAL 2', 'VALPARAISO', 'SAN FELIPE', -32.7504946484281, -70.7239589333067], 
      ['CRUZ VERDE', 'WALKER MARTINEZ 1786', 'METROPOLITANA', 'LA FLORIDA', -33.522345, -70.579265], 
      ['CRUZ VERDE', 'ALFREDO SILVA CARVALLO 1401. INTERIOR MONTSERRAT', 'METROPOLITANA', 'MAIPU', -33.531915, -70.775603], 
      ['CRUZ VERDE', 'CENTRAL 129 (EX 145)', 'METROPOLITANA', 'MAIPU', -33.513669, -70.826522], 
      ['CRUZ VERDE', 'AV. WALKER MARTINEZ 1642. INTERIOR MONTSERRAT', 'METROPOLITANA', 'QUINTA NORMAL', -33.430501, -70.692356], 
      ['CRUZ VERDE', 'AV. DOMINGO SANTA MARIA 4112. INTERIOR MONTSERRAT', 'METROPOLITANA', 'RENCA', -33.405687, -70.704351], 
      ['LIGA CONTRA LA EPILEPSIA', 'ARLEGUI N° 646 OF. 201', 'VALPARAISO', 'VIÑA DEL MAR', -33.0238793831336, -71.5531322426683], 
      ['CONAC', 'BLAS CUEVAS N° 965', 'VALPARAISO', 'VALPARAISO', -33.0524290091146, -71.609599253029], 
      ['POLICLINICO CONAC', 'EDUARDO LEFORT N°1638', 'ANTOFAGASTA', 'ANTOFAGASTA', -23.660025, -70.3949386], 
      ['FARMACIA CONAC CONCEPCIÓN', 'CAUPOLICAN N° 518 OFICINA 301', 'BIOBIO', 'CONCEPCION', -36.82646, -73.05121], 
      ['SAN IGNACIO', 'LA CONCEPCION N° 990', 'VALPARAISO', 'QUILLOTA', -32.8800607332315, -71.2564983497229],
      ['LA CRUZ', '21 DE MAYO N° 5481', 'VALPARAISO', 'LA CRUZ', -32.8252324978247, -71.2268391982971], 
      ['FARMACIA EL MELON', 'ISABEL BROWN N° 123', 'VALPARAISO', 'NOGALES', -32.6892394828406, -71.2148068285658], 
      ['CRUZ VERDE', 'AV. PEDRO MONTT Nº 2498', 'VALPARAISO', 'VALPARAISO', -33.0474816175073, -71.6099028859431], 
      ['SAN JOSE PAPUDO', 'CHORRILLOS N°93', 'VALPARAISO', 'PAPUDO', -32.5072043868488, -71.4471110053879], 
      ['VILLANELO', 'VILLANELO N° 255', 'VALPARAISO', 'VIÑA DEL MAR', -33.0250783431149, -71.557105718071], 
      ['VIÑAMARINA', 'ARLEGUI N° 616', 'VALPARAISO', 'VIÑA DEL MAR', -33.0238084195243, -71.5535155162474], 
      ['ECONOMICA', 'SANTIAGO TORRES N° 149 PUCHUNCAVI', 'VALPARAISO', 'PUCHUNCAVI', -32.7264534554681, -71.4141798241623], 
      ['ECONOMICA', 'PILOTO ALCAYAGA  N° 1919', 'VALPARAISO', 'QUINTERO', -32.7856824763479, -71.526446430538], 
      ['SANA SANA', 'CONDELL 1472', 'VALPARAISO', 'VALPARAISO', -33.0459267590154, -71.6221258623305], 
      ['ECONOMICA', 'NORMANDIE 1885', 'VALPARAISO', 'QUINTERO', -32.7849567205158, -71.5275574171605], 
      ['FARMAXPRESS', 'AVENIDA VICUÑA MACKENA 1050', 'VALPARAISO', 'VIÑA DEL MAR', -32.9724723416225, -71.5320218686291], 
      ['SANA SANA', 'ISIDORO DUBOURNAIS 320 EL QUISCO', 'VALPARAISO', 'EL QUISCO', -33.3986803449635, -71.6943870710659], 
      ['SANA SANA', 'AV. CENTENARIO 268, SAN ANTONIO', 'VALPARAISO', 'SAN ANTONIO', -33.5798869, -71.60942090000003], 
      ['FARMACIA SANA SANA', 'CALLE LUZ DIVINA Nº 1181, LOCAL 6 Y 7', 'VALPARAISO', 'ALGARROBO', -33.3705169, -71.6678957], 
      ['SANA SANA', 'AV. CONCON REÑACA 296', 'VALPARAISO', 'CONCON', -32.93394979999999, -71.5316035], 
      ['HAHNEMANN', 'ARLEGUI N° 443, L - 2', 'VALPARAISO', 'VIÑA DEL MAR', -33.0233129575313, -71.556134230226], 
      ['CENTRAL DE HOMEOPATÍA', 'AVENIDA SUECIA 3598', 'METROPOLITANA', 'ÑUÑOA', -33.4534826, -70.59994010000003], 
      ['HAHNNEMAN', 'Avenida Apoquindo 6210', 'METROPOLITANA', 'PROVIDENCIA', -33.4082291, -70.5663678], 
      ['MICKMAN', 'QUILLOTA N° 423', 'VALPARAISO', 'VIÑA DEL MAR', -33.0186727984426, -71.5467102608011], 
      ['FARMACIA MINELY', 'AV. PROVIDENCIA Nº 121', 'VALPARAISO', 'SAN ANTONIO', -33.6114086007081, -71.6110937287789], 
      ['FAMIFARMA', 'SERRANO Nº 301', 'VALPARAISO', 'VALPARAISO', -33.0367735067177, -71.6303326058118], 
      ['FAMIFARMA', 'CALLE SIETE 685', 'VALPARAISO', 'CONCON', -32.9244663893306, -71.5164225252732], 
      ['DR. SIMI', 'O´HIGGINS 186', 'VALPARAISO', 'QUILLOTA', -32.8790642414584, -71.2467373690042], 
      ['MASTER', 'LUIS REUS Nª 273 L.4', 'VALPARAISO', 'SAN ANTONIO', -33.5883437717979, -71.6082114019404], 
      ['DR. SIMI', 'PORTUS N° 239', 'VALPARAISO', 'SAN FELIPE', -32.7514425073796, -70.7232407620542], 
      ['DR SIMI', 'TRASLAVIÑA N°221', 'VALPARAISO', 'SAN FELIPE', -32.7500106610513, -70.7270127009622], 
      ['CRUZ VERDE', 'OHIGGINS 195, LOCAL 1', 'VALPARAISO', 'QUILLOTA', -32.8793428949969, -71.2467871500868], 
      ['CRUZ VERDE', 'J.J. PEREZ 202', 'VALPARAISO', 'LA CALERA', -32.788066282624, -71.1897310126255], 
      ['CRUZ VERDE', 'URMENETA 99', 'VALPARAISO', 'LIMACHE', -32.9849921792696, -71.2757177058683], 
      ['CRUZ VERDE', 'REPUBLICA 281', 'VALPARAISO', 'LIMACHE', -33.0025007197382, -71.2654977848501], 
      ['CRUZ VERDE', 'CHACABUCO 281', 'VALPARAISO', 'QUILLOTA', -32.878335491624, -71.246141889165], 
      ['CRUZ VERDE', 'URMENETA 96', 'VALPARAISO', 'LIMACHE', -32.9853313679932, -71.2759083062112], 
      ['CRUZ VERDE', 'PALMIRA ROMANO 405', 'VALPARAISO', 'LIMACHE', -33.0021934734243, -71.2680155185573], 
      ['CRUZ VERDE', 'AV. LOS CARRERA Nº 754, PRIMER NIVEL MALL PASEO QUILPUé, LOCAL 100-102', 'VALPARAISO', 'QUILPUE', -33.0480884691307, -71.4429118882056]
    ];

    const CruzVerdeIcon = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.araucoestacion.cl%2Ftiendas%2Ffarmacias-cruz-verde&psig=AOvVaw3VP25-gkhkKEHwYjjhqkkP&ust=1741869960724000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKC1_KLKhIwDFQAAAAAdAAAAABAE";
   

    for (let i = 0; i < Pharmacies.length; i++) {  
      const marker = new AdvancedMarkerElement ({
      map: map,
      position: { lat: latitud, lng: longitud },
      title: nombre,
      icon: CruzVerdeIcon,
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
      
            infowindow.setContent(content);
            infowindow.open(map, marker);
          });       
    }
  }    
}

window.initMap = initMap;