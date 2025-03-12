let map;
let markers = [];
let infoBoxes = [];

function initMap() {
    if (typeof google === 'undefined') {
        console.error('Google Maps API is not loaded.');
        return;
    }

    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: -33.44879975806732,
            lng: -70.6692362259572
        },
        zoom: 8,
        mapTypeControl: false
    });

    google.maps.event.addListener(map, "click", function(event) {
        closeInfoBoxes();
    });

    setupCentros();
    setupCurrentLocation();
    setupAutocomplete();
}

function setupCentros() {
    const script = document.createElement("script");
    script.src = "https://cloud.mail.cs.msd.com/centros.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}

const centrosChile = function(results) {
    var centrosMarker = [];
    for (let i = 0; i < results.centros.length; i++) {
        renderMarker(results.centros, i, centrosMarker);
    }
};

function renderMarker(centros, i, centrosMarker) {
    // Define los iconos para cada tipo de marcador
    const iconPub = {
        url: "https://image.mail.cs.msd.com/lib/fe9a13737664057c73/m/1/icono_vacunatorios_publicos.png",
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    const iconPriv = {
        url: "https://image.mail.cs.msd.com/lib/fe9a13737664057c73/m/1/icono_vacunatorios_privados.png",
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    const iconMix = {
        url: "https://image.mail.cs.msd.com/lib/fe9a13737664057c73/m/1/icono_vacunatorios_publicosyprivados.png",
        scaledSize: new google.maps.Size(35, 35),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 0)
    };

    // const coords = JSON.parse(centros[i].coordenadas);
    const latLng = new google.maps.LatLng(centros[i].Latitude, centros[i].Longitude);

    var newMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: centros[i].Tipo == "PUB" ? iconPub : centros[i].Tipo == "PRIV" ? iconPriv : iconMix,
        name: centros[i].Nombre,
    });

    var url = 'https://www.google.com/maps/place/' + newMarker.position.lat() + ',' + newMarker.position.lng();
    newMarker.set('url', url);

    centrosMarker.push(newMarker);

    showInfoWindow(newMarker, centros[i]);
}

function showInfoWindow(marker) {

    var infoBox = new google.maps.InfoWindow({
        content: '<div id="content">' +
            ' <div id="siteNotice"></div>' +
            ' <h2 id="firstHeading" style="text-align:left;">' + marker.name + '</h2>' +
            ' <div id="bodyContent">' +
            // (marker.address ? '<p><b>Domicilio:</b> ' + marker.address + '</p>' : '') +
            // (marker.telephone ? '<p><b>Teléfono:</b> ' + marker.telephone + '</p>' : '') +
            /*(marker.website ? '<p><a style="cursor:pointer;" href="' + marker.website + '">Sitio Web</a></p>' : '') +*/
            (marker.url ? '<p><a target="_blank" style="font-weight: bold; font-size: 16px;" id="' + marker.name + '" href="' + marker.url + '">Cómo llegar</a></p>' : '') +
            ' </div>' +
            '</div>'
    });

    infoBoxes.push(infoBox);

    marker.addListener("click", () => {
        closeInfoBoxes();
        infoBox.open(map, marker);
        map.setZoom(14);
        map.setCenter(marker.getPosition());
    });
}

function setupCurrentLocation() {
    const locationButton = document.createElement("button");
    locationButton.textContent = "Mi ubicación";
    locationButton.classList.add("custom-map-control-button");
    map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);

    locationButton.addEventListener("click", () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    map.setCenter(pos);
                    clearMarkers();
                    addMarker('Mi ubicación', pos);
                    map.setZoom(14);
                    map.panTo(pos);
                },
                () => {
                    console.log("Error: Falló el servicio de geolocalización. Asegúrese de brindar los permisos necesarios.");
                }
            );
        } else {
            console.log("Error: Su navegador no soporta el servicio de geolocalización.");
        }
    });
}

function setupAutocomplete() {
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        clearMarkers();

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            addMarker(place.name, place.geometry.location);

            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });

        map.fitBounds(bounds);
    });
}

function clearMarkers() {
    markers.forEach((marker) => {
        marker.setMap(null);
    });
    markers = [];
}

function addMarker(title, location) {
    markers.push(
        new google.maps.Marker({
            position: location,
            map,
            title: title,
        })
    );
}

function closeInfoBoxes() {
    if (!infoBoxes) return;

    for (var index = 0; index < infoBoxes.length; index++) {
        infoBoxes[index].close();
    }
}