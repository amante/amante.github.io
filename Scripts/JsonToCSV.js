function convertToCSV(arr) {
    
    for (let i = 0; i < arr.length; i++) { 
        
        const array = [Object.keys(arr)].concat(arr)
  
        return array.map(it => {
          return Object.values(it).toString()
        }).join('\n')
      }  
  }
  
  
  console.log(
    convertToCSV( 
        [
            {
                "attributes": {
                    "OBJECTID": 1,
                    "C_DEIS": "101302",
                    "TIPO": " ",
                    "HORARIOS": "LUNES A VIERNES 8:00 A 19:30 Y SABADOS DE 9:00 A 12:30",
                    "LATITUD": -18.437655,
                    "LONGITUD": -70.290806,
                    "NOM_REGION": "REGIÓN DE ARICA Y PARINACOTA",
                    "NOM_COMUNA": "ARICA",
                    "SERVICIO": "S.S. Arica",
                    "EL_PUNTO_T": " ",
                    "PROVINCIA": "151",
                    "REGION": "15",
                    "COMUNA": "15101",
                    "NOM_PROVINCIA": null,
                    "X": 363683.6663,
                    "Y": 7960907.216,
                    "DIRECCION": "CANCHA RAYADA 4149",
                    "NOMBRE": "CESFAM AMADOR NEGHME",
                    "REGION_SINTILDE": "REGIÓN DE ARICA Y PARINACOTA",
                    "COMUNA_SINTILDE": "ARICA",
                    "EXTENSIÓN": "SI",
                    "TIPO_DE_PU": "INTRAMURO",
                    "CAMPAÑA_A": "COVID-19 E INFLUENZA"
                },
                "geometry": {
                    "x": 363683.66631656076,
                    "y": 7960907.216191774
                }
            },
        ]
    )
  )