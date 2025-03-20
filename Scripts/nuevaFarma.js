import farmacias from './farmas.js';

let map;
let markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.4489, lng: -70.6693 },
        zoom: 13
    });

    // Mostrar todos los marcadores al inicio
    mostrarFarmacias(farmacias);
}

function mostrarFarmacias(listaFarmacias) {
    // Limpia los marcadores anteriores
    markers.forEach(marker => marker.setMap(null));
    markers = [];

    // Añade nuevos marcadores
    listaFarmacias.forEach(farmacia => {
        const marker = new google.maps.Marker({
            position: { lat: farmacia.lat, lng: farmacia.lng },
            map: map,
            title: farmacia.nombre
        });

        // Guardamos el marcador
        markers.push({ marker: marker, stock: farmacia.stock });
    });
}

function actualizarMapa() {
    const select = document.getElementById("selector").value;

    if (select === "todas") {
        mostrarFarmacias(farmacias); // Muestra todas las farmacias
    } else if (select === "conStock") {
        const farmaciasConStock = farmacias.filter(farmacia => farmacia.Stock === "SI");
        mostrarFarmacias(farmaciasConStock); // Solo muestra las farmacias con stock
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initMap();
});