function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: -33.447487, lng: -70.673676 },
    });
    
    setMarkers(map);
  }
  
  function setMarkers(map) {
    const vaccinationsCenterIDs = 
      [
        ['Clínica San José', 'ChIJkyrbMsepWpERxxZ5mwYKFDU'],
        ['Vacunatorio Medinort Salud Integral', 'ChIJTUSK4BDVr5YR8HElozPvqCw'],
        ['Vacunatorio Sociedad de Enfermería Asistencial E.I','ChIJJx93NpvVr5YRVreZUQvo-Xo'],
        ['Centro Médico y Dental Megasalud Calama', 'ChIJcYeOLsoJrJYRajE4R7GESps'],
        ['Centro Médico y Dental Megasalud Antofagasta','ChIJlYJDej3Vr5YRryV_mhDd4qk'],
        ['Vacunatorio y Sala de Procedimientos Daniela Alvar','ChIJMVIyV1TVr5YRjJneZ6K0f3o'],
        ['Clínica Atacama S.A.', 'ChIJ5zju-AUFmJYRYWbMmptLW7Q'],
        ['Clínica San Lorenzo', 'ChIJyTSUsXmoo5YRsozIbZInf4w'],
        ['Centro de Salud CEDIMED', 'ChIJ8_-ufXcEmJYRoqqukXa3LM4'],
        ['Sociedad Emergencia Móvil Integral', 'ChIJZ-tvdnLLkZYRUyecxJjsHeg'],
        ['Vacunatorio La Serena', 'ChIJP8giIw21kZYR0MhqgD3yYCY'],
        ['Centro Médico Integral de Chicureo', 'ChIJlwuAsUi4YpYRaiACfJKCRjk'],
        ['Consultorio Tantauco', 'ChIJe5hxe7bbYpYRIt4gGVDAEKc'],
        ['Clínica Redsalud Santiago ( Clinica Bicentenario)', 'ChIJJ3_79ojEYpYRAXns6LbUkl0'],
        ['Clinica Hospital del Profesor', 'ChIJ2Y_fXojEYpYRKyFjlMf7PY8'],
        ['Cesfam Santiago Occidente Carabineros de Chile','ChIJ2wEYenrDYpYR2am2F1-CQos'],
        ['Hospital Clínico Dr. José Joaquin Aguirre.', 'ChIJfUzy6cbFYpYRcQY1ciUOw9o'],
        ['Clínica Vespucio', 'ChIJhVGrEF7QYpYRZ_IK2NtbNCg'],
        ['Clínica BUPA', 'ChIJm_A_ekLQYpYRWnOtbgPShdQ'],
        ['Hospital Militar de Santiago', 'ChIJLa3HPOLNYpYREXYLdGsKiWU'],
        ['Sala de Procedimientos Vacunatorio Darvax', 'ChIJ-cMnGA7PYpYRz1hGYJ4E5so'],
        ['Clínica San Carlos de Apoquindo Redsalud Universidad Católica Christus','ChIJzUBbaRbMYpYRxh77blwt1dQ'],
        ['Hospital Clinico de la Fuerza Aérea de Chile Dr. Raul Yazigi','ChIJGUXVeLfOYpYR9mX9lHfqrlQ'],
        ['Centro Médico Militar Rosa O´Higgins', 'ChIJ0YMl0zrPYpYRFiQCMGEkJGo'],
        ['Hospital Privado Clínica Las Condes', 'ChIJ73EaMKvOYpYRrxilZyvmm34'],
        ['Hospital Clínico Universidad de Los Andes', 'ChIJA-JHbT7MYpYRZhUL5N84Mck'],
        ['Centro Médico Santa María La Dehesa', 'ChIJg2qGON3LYpYRLeOp3b9mmtw'],
        ['Clínica Alemana de La Dehesa', 'ChIJpRutVN_LYpYRphk_1D2V_oU'],
        ['Vacunatorio San Joaquín Universidad Catolica Christus','ChIJX_vy1g7QYpYRTgV5Z9HXfx0'],
        ['Clínica Los Maitenes', 'ChIJ98i7Hwn_YpYR_lrKql_PPzE'],
        ['Hospital de Carabineros', 'ChIJ7Yvg3kPOYpYR85iaip1oY5M'],
        ['Vacunatorio Varik', 'ChIJWYpUUtfPYpYR7mmrapyPev4'],
        ['Vacunatorio Vacci Protex ( Alto Tobalaba)', 'ChIJF6FLbNvRYpYR0U40xFUkPFA'],
        ['Establecimiento de Atencion abierta Clinica Las Condes de Peñalolén','ChIJscKA4-zRYpYRe1P3FoPUshs'],
        ['Vacunatorio Clínica Santa María','ChIJZ-Qt4AzFYpYRvTfHba-naOw'],
        ['Vacunatorio Sala de Procedimientos Edificio Los Españoles (Vacunatorio Clínica Indisa )','ChIJu3E8hmfPYpYRfbpZGrQi0qw'],
        ['Centro Médico Manuel Montt', 'ChIJLx8--XzPYpYRjI0KrEHI6kA'],
        ['Vacunatorio Clinica El Bosque Ltda.', 'ChIJM2qIBQ3PYpYRC-aqN4Xy-n0'],
        ['Hospital del Trabajador', 'ChIJpzgAoILFYpYRoWO58-HrcgU'],
        ['Clínica Dávila', 'ChIJqRkuOb7FYpYR9RZ9opfYcZk'],
        ['Centro de Especialidades Médicas (Vacunatorio Marcoleta U. Católica )','ChIJkWD7opfFYpYRxgALfZntsb4'],
        ['Centro Médico y Dental Fundación', 'ChIJ_5rYLCXFYpYRw9YRBSE_8pU'],
        ['Centro Médico Vida Íntegra Alameda', 'ChIJkZYRPqjFYpYRtJU1T7cJqLU'],
        ['Instituto de Seguridad del Trabajador', 'ChIJqWS97o3PYpYRiL8ckJw4vUU'],
        ['Clínica Alemana de Santiago', 'ChIJj18jE9XOYpYRjMZxAI_RVbU'],
        ['Centro de Diagnóstico Clinica Tabancura', 'ChIJD1zaQGTPYpYR2xOYGsLbnR4'],
        ['Policlínico Institucional de Gendarmería de Chile','ChIJw8wU6W7FYpYR4nJWLT9bEu8'],
        ['Hospital Clínico Fusat Rancagua', 'ChIJXe27MlVDY5YR83zviJ6whKU'],
        ['Clínica de Salud Integral', 'ChIJWbmF8xRDY5YRVFttBI_v5So'],
        ['Clínica Isamédica', 'ChIJC4T96mpDY5YR0LeM9WP2lw8'],
        ['Megasalud S.A. Centro Médico y Dental Rancagua','ChIJv2J1NkBDY5YRtZbuWndH77M'],
        ['Vacunatorio Neumann & Bertin Ltda.', 'ChIJ8cDYmBqQZJYR4KW54w_DzJo'],
        ['Clínica Universidad Católica del Maule', 'ChIJsdonr6TGZZYR_qgaHIsRLCI'],
        ['Clínica Infantil', 'ChIJ516V13HHZZYRMVx4OyGO5eI'],
        ['Centro Médico Cordillera', 'ChIJ_UE0sL3GZZYRGjC4Hf2-Suo'],
        ['Clínica del Maule', 'ChIJR-g0TLzGZZYRuyrCTLCx3HY'],
        ['Clínica Los Andes Chillán', 'ChIJY4np3iUoaZYR0LUsyZJdNP8'],
        ['Megasalud Chillán', 'ChIJG3FcctfXaJYRDjylfrVf4ks'],
        ['Megasalud S.A. Centro Médico y Dental Concepción','ChIJf9mYNtK1aZYRY7AV8e3aSLc'],
        ['Centro Médico Inmunomédica', 'ChIJubxm2dO1aZYRuajj-E-vF9s'],
        ['Centro de Salud Familiar Villa Nonguén', 'ChIJE7dKy6e2aZYR8uRHReeUW8U'],
        ['Sanatorio Alemán', 'ChIJeYx5d3C2aZYRUUwFvYweU38'],
        ['Kiñewen Ltda.', 'ChIJ4UF0O9O1aZYR7cJwfKbQNtU'],
        ['Clínica Universitaria de Concepción', 'ChIJMS4Ocpy1aZYRNrCPJNImHzc'],
        ['Clínica Los Andes Biobío', 'ChIJ21z1Slfda5YRyoMK-W_8Qq4'],
        ['Vacunatorio Endodent', 'ChIJdUlUGE7LaZYRI4fArOI_PhI'],
        ['Clínica Universitaria San Pedro de la Paz','ChIJKfgeRPnJaZYRbKpMGb-VPUk'],
        ['Clínica Alemana Temuco', 'ChIJ2625PffTFJYRYsdU-VsPCVE'],
        ['Hospital Clínico Universidad Mayor', 'ChIJ5bcORPDTFJYRbavdA8zwGKY'],
        ['Clínica Alemana Valdivia', 'ChIJz-Loa3ruFZYRGUFbv1OvDew'],
        ['Megasalud S.A. Centro Médico y Dental Valdivia','ChIJhXA-6HfuFZYRWCBObaJ7lX8'],
        ['Surmédica', 'ChIJz0iMdGjuFZYRpWeilwqi2IU'],
        ['Clínica Universitaria', 'ChIJQ1tKC1E6GJYRP-jd3q_b-uU'],
        ['Megasalud S.A. Centro Médico y Dental Puerto Montt','ChIJ5WUm51M6GJYRCM27qKX1F_0'],
        ['Clínica Puerto Montt', 'ChIJ7RxhJ6k7GJYRsRoo8qvMVxc'],
        ['Centro de Atención Profesional de Enfermería','ChIJpbTJKa07GJYR1xINKMKZfTQ'],
        ['Clínica Puerto Varas', 'ChIJlWBVG9UmGJYRsDkf-zMIIZM'],
        ['Vacunatorio Austral', 'ChIJxRYRaRwnGJYRZGsgqLhVxBE'],
        ['Clínica Alemana de Osorno', 'ChIJnzwy2XA2FpYRKLTGsdy-9h4'],
        ['Vacunatorio Sociedad Centro Médico Cochrane','ChIJYQ4blV82FpYRB3jJHhdn0Zc'],
        ['Centro Médico y Dental Clínica Bilbao', 'ChIJV0sNYMDE8r0R-xzOG5PkOpI'],
        ['Clínica Magallanes', 'ChIJgxvFf3Bksr0R4uPmhPN_SwI'],
        ['Megasalud S.A. Centro Médico y Dental Punta Arenas','ChIJbwWHM3pjsr0RlEwFKD8SWSc'],
    ];
  
    for (let i = 0; i < vaccinationsCenterIDs.length; i++) {
      const vaxcenter = vaccinationsCenterIDs[i];
  
    const request = {
        //placeId: vaxcenter[1],
        //fields: ["name", "formatted_address", "place_id", "geometry", "formatted_phone_number", "website", "icon"],
    };
    const infowindow = new google.maps.InfoWindow();
    const service = new google.maps.places.PlacesService(map);
    
    service.getDetails(request, (place, status) => {
      if (
        status === google.maps.places.PlacesServiceStatus.OK &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        const marker = new google.maps.Marker({
          map,
          position: place.geometry.location,
          title: vaxcenter[0],
        });
    
        google.maps.event.addListener(marker, "click", () => {
          const content = document.createElement("div");
          
          const nameElement = document.createElement("h2");
          nameElement.textContent = place.name;
          content.appendChild(nameElement);
  
          const placeIdElement = document.createElement("p");
          placeIdElement.textContent = "ID: "+place.place_id;
          content.appendChild(placeIdElement);
  
          const placeAddressElement = document.createElement("p");
          placeAddressElement.textContent = "Dirección: "+place.formatted_address;
          content.appendChild(placeAddressElement);
          
          const phoneElement = document.createElement("p");
          phoneElement.textContent = "Teléfono: "+place.formatted_phone_number;
          content.appendChild(phoneElement);
  
          const websiteElement = document.createElement("a");
          websiteElement.setAttribute('href', place.website);
          websiteElement.textContent = place.website;
          content.appendChild(websiteElement);
  
          infowindow.setContent(content);
          infowindow.open(map, marker);
        });
      }
    });
  }
  }
  window.initMap = initMap;