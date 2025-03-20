import farmacias from './Scripts/farmas.js';

let map; // Mapa de Google
let markers = []; // Marcadores en el mapa

// Inicializa el mapa
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.4489, lng: -70.6693 }, // Centrado en Santiago, Chile
        zoom: 13
    });

    // Mostrar todas las farmacias al inicio
    mostrarFarmacias(farmacias);
}

// Muestra marcadores en el mapa
function mostrarFarmacias(listaFarmacias) {
    // Elimina marcadores existentes
    markers.forEach(marker => marker.setMap(null));
    markers = []; // Limpia el array de marcadores

    // Crea nuevos marcadores para las farmacias
    listaFarmacias.forEach(farmacia => {
        const marker = new google.maps.Marker({
            position: { lat: farmacia.lat, lng: farmacia.lng },
            map: map,
            title: `${farmacia.nombre} - Stock: ${farmacia.stock}`
        });

        markers.push({ marker: marker, stock: farmacia.stock }); // Almacena el marcador y su stock
    });
}

// Filtra los marcadores según el stock
function actualizarMapa() {
    const select = document.getElementById("selector").value;

    if (select === "todas") {
        mostrarFarmacias(farmacias); // Muestra todas las farmacias
    } else if (select === "conStock") {
        const farmaciasConStock = farmacias.filter(farmacia => farmacia.Stock === "SI");
        mostrarFarmacias(farmaciasConStock); // Muestra solo las farmacias con stock
    }
}

window.initMap = initMap; // Expone initMap como función global para Google