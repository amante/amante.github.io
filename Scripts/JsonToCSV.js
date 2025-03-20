var obj = { "label":"value", "nestedLabel":{"nestedLabel2":"value2"} }
function iterateObject(obj) {
  var value = '', header = '';
          for (let array in obj) {
            if (obj.hasOwnProperty(array)) {
              if (isObject(obj[array])) {
                var out = iterateObject(obj[array]);
                value += out.value;
                header += out.header;
              } else {
                value += removeNewLine(obj[array]) + '; ';
                header += array + '; ';
              }
            }
          }
  return {
    "value":value,
    "header":header
  };
}
function isObject(obj) {
  return (typeof obj === 'object');
}
function removeNewLine(item) {
  return item.toString().replace(/(\r\n|\n|\r)/gm,"");
}

var results = iterateObject(obj);
$('#resultValue').html(results.value);
$('#resultHeader').html(results.header);


/*{"Nombre":	"AHUMADA"	"Direccion":	J J PEREZ 199	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78820653	,"Longitude":	-71,1894462	,"Stock":"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PROLONGACION JJ. PEREZ 12010	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7908926	,"Longitude":	-71,19209574	,"Stock":"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. 21 DE MAYO 311	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87438962	,"Longitude":	-71,24190673	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	O`HIGGINS 114-116	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87858575	,"Longitude":	-71,24676804	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	J.J. PEREZ 205	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78805236	,"Longitude":	-71,1894958	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CHACABUCO 299	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87832916	,"Longitude":	-71,24649439	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	CHACABUCO 225	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87815867	,"Longitude":	-71,24594507	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	J.J. PEREZ 247	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78769988	,"Longitude":	-71,18954054	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHACABUCO 281	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87833549	,"Longitude":	-71,24614189	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	URMENETA 68	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,98514311	,"Longitude":	-71,27634216	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	CARRERA 580	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78721368	,"Longitude":	-71,18949659	,"Stock":	"NO"}
{"Nombre":	HOSPITAL 1	"Direccion":	CARRERA N° 737	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78728091	,"Longitude":	-71,19132384	,"Stock":	"SI"}
{"Nombre":	SAN NICOLAS	"Direccion":	J.J. PEREZ N° 396	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78625824	,"Longitude":	-71,18998562	,"Stock":	"NO"}
{"Nombre":	FARMACIA TAMANACO	"Direccion":	ALDUNATE 222	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78811861	,"Longitude":	-71,19086396	,"Stock":	"NO"}
{"Nombre":	LA CRUZ	"Direccion":	21 DE MAYO N° 5481	"Region":	VALPARAISO	,"Comuna":	LA CRUZ	,"Latitude":	-32,8252325	,"Longitude":	-71,2268392	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	URMENETA 84	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,98524557	,"Longitude":	-71,27616289	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	URMENETA 96	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,98533137	,"Longitude":	-71,27590831	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PRAT 200	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,98428673	,"Longitude":	-71,27731522	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	O´HIGGINS 176, LB2	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87887476	,"Longitude":	-71,24674327	,"Stock":	"SI"}
{"Nombre":	SAN IGNACIO	"Direccion":	LA CONCEPCION N° 990	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,88006073	,"Longitude":	-71,25649835	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	O´HIGGINS 186	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87906424	,"Longitude":	-71,24673737	,"Stock":	"NO"}
{"Nombre":	ITALIA	"Direccion":	FREIRE N° 57	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87771931	,"Longitude":	-71,24530346	,"Stock":	"SI"}
{"Nombre":	CAPREDENA	"Direccion":	URMENETA 855	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,989559	,"Longitude":	-71,265662	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	J.J. PEREZ 152	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78869124	,"Longitude":	-71,18957551	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	21 DE MAYO 5628, LOCAL 1, LA CRUZ	"Region":	VALPARAISO	,"Comuna":	LA CRUZ	,"Latitude":	-32,8235326	,"Longitude":	-71,22608118	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PALMIRA ROMANO 405	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-33,00219347	,"Longitude":	-71,26801552	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL MELON	"Direccion":	ISABEL BROWN N° 123	"Region":	VALPARAISO	,"Comuna":	NOGALES	,"Latitude":	-32,68923948	,"Longitude":	-71,21480683	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	DIEGO PORTALES N° 802	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04694939	,"Longitude":	-71,44168129	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV.FREIRE N° 2414  LOCAL 1082	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04520291	,"Longitude":	-71,42026319	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS CARRERA Nº 754, PRIMER NIVEL MALL PASEO QUILPUé, LOCAL 100-102	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04808847	,"Longitude":	-71,44291189	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CLAUDIO VICUÑA  N° 806	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04671549	,"Longitude":	-71,44257418	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	VICUÑA MACKENNA 777-D	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0469722	,"Longitude":	-71,44465833	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	BLANCO N° 937	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04614668	,"Longitude":	-71,44077049	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	PORTALES N° 776	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04753056	,"Longitude":	-71,44239327	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	CLAUDIO VICUÑA N ° 651	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04614249	,"Longitude":	-71,44282601	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	THOMPSON N° 1491	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,05407037	,"Longitude":	-71,43858006	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	CLAUDIO VICUÑA  N° 928	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04736583	,"Longitude":	-71,44159643	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CLAUDIO VICUÑA N° 790	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04652414	,"Longitude":	-71,44267596	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RAMÓN FREIRE N° 2414, LOCAL 1028, BELLOTO	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04500952	,"Longitude":	-71,42186385	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CLAUDIO VICUÑA N° 791	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04640049	,"Longitude":	-71,44254406	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. FREIRE N° 471, VILLA HILTON BELLOTO	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04647736	,"Longitude":	-71,40425963	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	LAS BARRANCAS 2491 L 3C Y  4D	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,06619751	,"Longitude":	-71,42289415	,"Stock":	"NO"}
{"Nombre":	ECONOMICA	"Direccion":	SANTIAGO TORRES N° 149 PUCHUNCAVI	"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,72645346	,"Longitude":	-71,41417982	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CABO ORTIZ N° 189	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78471448	,"Longitude":	-71,52749719	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.NORMANDIE  N° 2017	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78649563	,"Longitude":	-71,52725937	,"Stock":	"SI"}
{"Nombre":	ECONOMICA	"Direccion":	PILOTO ALCAYAGA  N° 1919	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78568248	,"Longitude":	-71,52644643	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. NORMADIE 2065	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78685762	,"Longitude":	-71,52719489	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VALPARAISO N° 702	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04418041	,"Longitude":	-71,37401596	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	LATORRE N° 17, LOCAL 1	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04398316	,"Longitude":	-71,37395713	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV.VALPARAISO N° 855	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0444422	,"Longitude":	-71,37636769	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	LATORRE N° 51	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04325884	,"Longitude":	-71,37363791	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LATORRE N° 2 Y 6	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04420333	,"Longitude":	-71,37375962	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAÍSO N° 664	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04420185	,"Longitude":	-71,37336344	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VALPARAÍSO N° 1982, LOCAL N°7	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04525102	,"Longitude":	-71,3906612	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAÍSO N° 691	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04442869	,"Longitude":	-71,37423675	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VALPARAISO N° 505 C/ETCHEVERS	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02446439	,"Longitude":	-71,55538614	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LIBERTAD N° 335	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01891725	,"Longitude":	-71,55107332	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ALVAREZ  N° 1398	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02862179	,"Longitude":	-71,54344284	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. RAFAEL SOTOMAYOR N°230	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97074216	,"Longitude":	-71,54261597	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VALPARAISO 720	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02506619	,"Longitude":	-71,55241723	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	1 NORTE N° 2901 L - 4018 (JUMBO)	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,03557374	,"Longitude":	-71,52391366	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	QUILLOTA N° 441	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01833959	,"Longitude":	-71,54668997	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	15 NORTE N° 961 L- 115-118	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0076876	,"Longitude":	-71,54596626	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO N° 640	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0249401	,"Longitude":	-71,55329128	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO N° 404	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0243693	,"Longitude":	-71,55694609	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.LIBERTAD N° 1348 L-22	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00846991	,"Longitude":	-71,54827887	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO N° 298	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0241566	,"Longitude":	-71,55852404	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.LIBERTAD  N° 825	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01390552	,"Longitude":	-71,55011555	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	QUILLOTA N° 493	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01813299	,"Longitude":	-71,54665192	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.VALPARAISO N° 598	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02482389	,"Longitude":	-71,5541228	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	J.M.CARRERA  N° 201	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02755495	,"Longitude":	-71,57346841	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ANGAMOS  N° 242 L- 1	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97178189	,"Longitude":	-71,54203604	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALVARES N° 314	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02579666	,"Longitude":	-71,55857146	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. 1 NORTE Nº 2901 L- 4054	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,03583234	,"Longitude":	-71,52361059	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	4 PONIENTE N° 332	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01836505	,"Longitude":	-71,55558465	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. VALPARAISO 940	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02562604	,"Longitude":	-71,54840883	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AVDA. VALPARAISO N° 426-432	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02447191	,"Longitude":	-71,55633896	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV 15 NORTE 960	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00869413	,"Longitude":	-71,54524609	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	ARLEGUI N° 580 L - 7 OF. 201	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0236944	,"Longitude":	-71,55424005	,"Stock":	"SI"}
{"Nombre":	HAHNEMANN	"Direccion":	ARLEGUI N° 443, L - 2	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02331296	,"Longitude":	-71,55613423	,"Stock":	"SI"}
{"Nombre":	MICKMAN	"Direccion":	QUILLOTA N° 423	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0186728	,"Longitude":	-71,54671026	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AVDA. VALPARAISO N° 329	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02409395	,"Longitude":	-71,55806199	,"Stock":	"SI"}
{"Nombre":	NOVASALUD	"Direccion":	AV.LIBERTAD N° 80	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02168572	,"Longitude":	-71,55105678	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LIBERTAD N° 1348 L-39 MALL MARINA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0087218	,"Longitude":	-71,54830753	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVDA. VALPARAISO N° 490	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02457189	,"Longitude":	-71,55586019	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVDA. LIBERTAD N° 1217-1223	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00987951	,"Longitude":	-71,54901505	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VALPARAISO N° 616	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02487924	,"Longitude":	-71,55362134	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVDA. BORGOÑO N° 14410	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97268998	,"Longitude":	-71,54393408	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVDA. VALPARAISO N° 532	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02469712	,"Longitude":	-71,55502894	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTAD N° 800 - 828	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01415381	,"Longitude":	-71,54943776	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JORGE MONTT N° 2300 LAS SALINAS	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,99956685	,"Longitude":	-71,54801204	,"Stock":	"NO"}
{"Nombre":	SEREY	"Direccion":	VALPARAISO N° 694, LOCAL 6	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02499369	,"Longitude":	-71,55287539	,"Stock":	"SI"}
{"Nombre":	VILLANELO	"Direccion":	VILLANELO N° 255	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02507834	,"Longitude":	-71,55710572	,"Stock":	"SI"}
{"Nombre":	VIÑAMARINA	"Direccion":	ARLEGUI N° 616	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02380842	,"Longitude":	-71,55351552	,"Stock":	"SI"}
{"Nombre":	LIGA CONTRA LA EPILEPSIA	"Direccion":	ARLEGUI N° 646 OF. 201	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02387938	,"Longitude":	-71,55313224	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. VALPARAÍSO 683	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02482182	,"Longitude":	-71,55290255	,"Stock":	"SI"}
{"Nombre":	FARMAMED	"Direccion":	ARLEGUI N°914	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02452911	,"Longitude":	-71,54869835	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. VALPARAISO 421	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02430357	,"Longitude":	-71,55663379	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VALPARAISO N°1070 L 2116	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02603299	,"Longitude":	-71,54746793	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO 1070 L 3008	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02588946	,"Longitude":	-71,54743169	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. VALPARAISO 206	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0237975	,"Longitude":	-71,55976595	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTAD 269 L 101	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02007863	,"Longitude":	-71,55116031	,"Stock":	"NO"}
{"Nombre":	ALMENDRAL	"Direccion":	CHACABUCO Nº 2797	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04625059	,"Longitude":	-71,60711514	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO MONTT N° 2705	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04726128	,"Longitude":	-71,60793718	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ARGENTINA N° 51 LOCAL N° 2003	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04406194	,"Longitude":	-71,60484526	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	OBISPO VALDEZ SUBERCASEAUX  N° 1170 LOCAL 6 Y 7 PLACILLA	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,11870107	,"Longitude":	-71,57139983	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CARDENAL SAMORE Nº2335 LOCAL 1862 PLACILLA	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,13081947	,"Longitude":	-71,56526993	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CONDELL Nº 1202	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04373243	,"Longitude":	-71,62442672	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO MONTT Nº 2498	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04748162	,"Longitude":	-71,60990289	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SOTOMAYOR N° 160	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0382716	,"Longitude":	-71,62898552	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	CONDELL Nº1509  LOCAL  2	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04615922	,"Longitude":	-71,62136194	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	BELLAVISTA Nº 464	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0446691	,"Longitude":	-71,62361948	,"Stock":	"NO"}
{"Nombre":	GALENICA	"Direccion":	AV. PEDRO MONTT N° 2060	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04716024	,"Longitude":	-71,61534274	,"Stock":	"SI"}
{"Nombre":	IBERIA	"Direccion":	VICTORIA Nº 3092	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0507822	,"Longitude":	-71,60297689	,"Stock":	"SI"}
{"Nombre":	PLAYA ANCHA	"Direccion":	AV. PLAYA ANCHA Nº 172	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03059609	,"Longitude":	-71,6355116	,"Stock":	"SI"}
{"Nombre":	PORTEÑA	"Direccion":	AV.ARGENTINA Nº 301	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04596676	,"Longitude":	-71,60430184	,"Stock":	"NO"}
{"Nombre":	NACIONAL	"Direccion":	AV. PLAYA ANCHA Nº 257	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03000715	,"Longitude":	-71,63650022	,"Stock":	"SI"}
{"Nombre":	BOTICA UNIÓN	"Direccion":	CONDELL 1205	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04365268	,"Longitude":	-71,62436012	,"Stock":	"NO"}
{"Nombre":	FAMIFARMA	"Direccion":	SERRANO Nº 301	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03677351	,"Longitude":	-71,63033261	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. PEDRO MONTT Nº 1804	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04686532	,"Longitude":	-71,61822462	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. PEDRO MONTT Nº  1898	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04699546	,"Longitude":	-71,61717929	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. ARGENTINA N° 51 LOCAL N° 2027	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04436154	,"Longitude":	-71,60474702	,"Stock":	"SI"}
{"Nombre":	BOTICA "SALCOBRAND"	"Direccion":	PLAZA ANIBAL PINTO 1191-1199 LC 1 Y 2	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0431866	,"Longitude":	-71,62422853	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. BRASIL 1302	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04427667	,"Longitude":	-71,62298691	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AV. PEDRO MONTT Nº 1842 LOCAL A - 102	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04694527	,"Longitude":	-71,61785228	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. ARGENTINA N° 241	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04549417	,"Longitude":	-71,60448062	,"Stock":	"NO"}
{"Nombre":	MAS SALUD	"Direccion":	CONDEL Nº 1525	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0461876	,"Longitude":	-71,62129854	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO MONTT 1902	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04706281	,"Longitude":	-71,61697787	,"Stock":	"SI"}
{"Nombre":	CONAC	"Direccion":	BLAS CUEVAS N° 965	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,05242901	,"Longitude":	-71,60959925	,"Stock":	"SI"}
{"Nombre":	FAMIFARMA	"Direccion":	CHACABUCO Nº 208	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,32009903	,"Longitude":	-71,40686245	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CARLOS ALESSANDRI Nº 1915 - 1923	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,3610508	,"Longitude":	-71,66588216	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. IGNACIO CARRERA PINTO ESQUINA DR. GUILLERMO MÜCKE	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,36908549	,"Longitude":	-71,66916826	,"Stock":	"NO"}
{"Nombre":	GALVEZ	"Direccion":	LUZ DIVINA  SITIO Nº 5	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,37189291	,"Longitude":	-71,66733061	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	J.N. AGUIRRE Nº 017	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,39727272	,"Longitude":	-71,69444034	,"Stock":	"SI"}
{"Nombre":	EL QUISCO	"Direccion":	AV. ISIDORO DUBORNAIS Nº 177	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,39678773	,"Longitude":	-71,69476931	,"Stock":	"SI"}
{"Nombre":	SAN ENRIQUE	"Direccion":	SAN MARCOS Nº793 LOCAL 01	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,45525414	,"Longitude":	-71,66732206	,"Stock":	"SI"}
{"Nombre":	LAS CRUCES	"Direccion":	ERRAZURIZ Nº 182 LAS CRUCES	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,499676	,"Longitude":	-71,61606	,"Stock":	"NO"}
{"Nombre":	CARTAGENA	"Direccion":	ALMIRANTE LATORRE Nº80	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,54695892	,"Longitude":	-71,60273492	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CARTAGENA N°313	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,5465929	,"Longitude":	-71,60256243	,"Stock":	"NO"}
{"Nombre":	SAN SEBASTIAN	"Direccion":	CASANOVA Nº 328	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,54722063	,"Longitude":	-71,60315194	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CENTENARIO Nº 120	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58040658	,"Longitude":	-71,61135472	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PROVIDENCIA  N° 196	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,61196103	,"Longitude":	-71,61055007	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PEDRO MONTT Nº129 LOCAL 4	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58002657	,"Longitude":	-71,61141866	,"Stock":	"SI"}
{"Nombre":	MASTER	"Direccion":	LUIS REUS Nª 273 L.4	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58834377	,"Longitude":	-71,6082114	,"Stock":	"NO"}
{"Nombre":	FARMACIA MINELY	"Direccion":	AV. PROVIDENCIA Nº 121	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6114086	,"Longitude":	-71,61109373	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CENTENARIO Nº 102	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58050834	,"Longitude":	-71,61165939	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV: PROVIDENCIA  Nº 102	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,61139135	,"Longitude":	-71,61062987	,"Stock":	"NO"}
{"Nombre":	SAN ENRIQUE	"Direccion":	AV. CENTENARIO  N° 67	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58089478	,"Longitude":	-71,61214499	,"Stock":	"SI"}
{"Nombre":	SAN NICOLAS	"Direccion":	AV. EL MOLO N° 139	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,59597048	,"Longitude":	-71,61166237	,"Stock":	"SI"}
{"Nombre":	CENTRAL DE HOMEOPATIA SAN ANTONIO	"Direccion":	PEDRO MONTT Nº 129 L - 3	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58003444	,"Longitude":	-71,61147276	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. RAMON BARROS LUCO N° 105 LOC. 10	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58142193	,"Longitude":	-71,61407824	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. EL GOLF Nº05	"Region":	VALPARAISO	,"Comuna":	SANTO DOMINGO	,"Latitude":	-33,64036116	,"Longitude":	-71,6267028	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ATAMU TEKENA S/N	"Region":	VALPARAISO	,"Comuna":	ISLA DE PASCUA	,"Latitude":	-27,14974948	,"Longitude":	-109,4289015	,"Stock":	"NO"}
{"Nombre":	SANA SANA	"Direccion":	CONDELL 1472	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04592676	,"Longitude":	-71,62212586	,"Stock":	"NO"}
{"Nombre":	LAS REJAS	"Direccion":	PEDRO AGUIRRE CERDA 21 - VENTANAS	"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,7417636	,"Longitude":	-71,48481051	,"Stock":	"SI"}
{"Nombre":	CABILDO	"Direccion":	AV. HUMERES N° 753	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,42693871	,"Longitude":	-71,06781722	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. HUMERES N° 688	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,42635592	,"Longitude":	-71,06705957	,"Stock":	"SI"}
{"Nombre":	NUEVA CABILDO	"Direccion":	AV. HUMERES N°571	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,42686886	,"Longitude":	-71,06767739	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. HUMERES N° 552	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,42663481	,"Longitude":	-71,06765078	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	BORJA GARCIA HUIDOBRO N° 051	"Region":	VALPARAISO	,"Comuna":	CATEMU	,"Latitude":	-32,77801075	,"Longitude":	-70,96239024	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PEDRO POLANCO N° 263	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44873432	,"Longitude":	-71,23116211	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ORTIZ DE ROZAS N° 600	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4489412	,"Longitude":	-71,23220951	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	ORTIZ DE ROZAS N° 434	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44892892	,"Longitude":	-71,23035859	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	ORTIZ DE ROZAS N° 498	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44888137	,"Longitude":	-71,2310062	,"Stock":	"SI"}
{"Nombre":	PORTALES	"Direccion":	PORTALES N° 706	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44989419	,"Longitude":	-71,23339233	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	ORTIZ DE ROZAS N°476	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44891331	,"Longitude":	-71,23073046	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. SANTA TERESA N° 683, L-18	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83543882	,"Longitude":	-70,60434526	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ARGENTINA N° 805, L-1020	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,82716268	,"Longitude":	-70,60266884	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MAIPU N° 302	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83352667	,"Longitude":	-70,59730277	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	O"HIGGINS N°293	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83444382	,"Longitude":	-70,59752218	,"Stock":	"SI"}
{"Nombre":	EL CONDOR	"Direccion":	ESMERALDA N° 443	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83294346	,"Longitude":	-70,59918322	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ESMERALDA N° 299	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83334714	,"Longitude":	-70,59723546	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. ARGENTINA N° 805, L-1013	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,82717307	,"Longitude":	-70,60256221	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. SANTA TERESA N° 683, L-104-106	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83555509	,"Longitude":	-70,60442214	,"Stock":	"NO"}
{"Nombre":	SANTA ROSA	"Direccion":	O'HIGGINS N° 298	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83449519	,"Longitude":	-70,59773676	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	MAIPU N°254	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83289819	,"Longitude":	-70,59707786	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ESMERALDA N° 315	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83326149	,"Longitude":	-70,59758647	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MAIPU N°320	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83364321	,"Longitude":	-70,59735828	,"Stock":	"SI"}
{"Nombre":	DEL VALLE	"Direccion":	DOMINGO FERNANDEZ CONCHA 303	"Region":	VALPARAISO	,"Comuna":	PAPUDO	,"Latitude":	-32,5080766	,"Longitude":	-71,44492111	,"Stock":	"NO"}
{"Nombre":	SAN JOSE PAPUDO	"Direccion":	CHORRILLOS N°93	"Region":	VALPARAISO	,"Comuna":	PAPUDO	,"Latitude":	-32,50720439	,"Longitude":	-71,44711101	,"Stock":	"SI"}
{"Nombre":	NUEVA ANTONIO	"Direccion":	A. CAMUS  90	"Region":	VALPARAISO	,"Comuna":	PUTAENDO	,"Latitude":	-32,62580327	,"Longitude":	-70,71687425	,"Stock":	"NO"}
{"Nombre":	FARMAVIDA	"Direccion":	COMERCIO N° 478	"Region":	VALPARAISO	,"Comuna":	PUTAENDO	,"Latitude":	-32,62688923	,"Longitude":	-70,71660722	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CALLE ARTURO PRAT N° 798	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74996696	,"Longitude":	-70,72556515	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MERCED N° 176	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7513976	,"Longitude":	-70,72519305	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 199 - B	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74999606	,"Longitude":	-70,72545419	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PORTUS N° 239	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75144251	,"Longitude":	-70,72324076	,"Stock":	"NO"}
{"Nombre":	NUEVA MODERNA	"Direccion":	PORTUS Nº1194, LOCAL 2	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75049465	,"Longitude":	-70,72395893	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COMBATE DE LAS COIMAS N° 210	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75079652	,"Longitude":	-70,72430628	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. LIBERTADOR BERNARDO O'HIGGINS N° 1150, L-1030	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75648558	,"Longitude":	-70,72310852	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	CALLE ARTURO PRAT N° 245	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74970233	,"Longitude":	-70,72663328	,"Stock":	"SI"}
{"Nombre":	BELLPARMA	"Direccion":	MAIPU N° 1121	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74818828	,"Longitude":	-70,72966702	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	TRES CARRERA S/N ESQUINA O'HIGGINS	"Region":	VALPARAISO	,"Comuna":	SANTA MARIA	,"Latitude":	-32,74857107	,"Longitude":	-70,65661978	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MOISES CHACON N° 140	"Region":	VALPARAISO	,"Comuna":	ZAPALLAR	,"Latitude":	-32,55435414	,"Longitude":	-71,45558812	,"Stock":	"NO"}
{"Nombre":	FARMARKET	"Direccion":	AV. CARLOS LEON BRICEÑO N° 498	"Region":	VALPARAISO	,"Comuna":	ZAPALLAR	,"Latitude":	-32,62971057	,"Longitude":	-71,42277736	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	BALMACEDA N° 57	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,84217266	,"Longitude":	-70,9528724	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA N° 64	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,84197832	,"Longitude":	-70,95261175	,"Stock":	"NO"}
{"Nombre":	ANTONIO	"Direccion":	MERCED N°750	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75091071	,"Longitude":	-70,72714748	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANZANA 16, SITIO 7	"Region":	VALPARAISO	,"Comuna":	JUAN FERNANDEZ	,"Latitude":	-33,635261	,"Longitude":	-78,831572	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	BILBAO ESQUINA PADRE HURTADO	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,26149761	,"Longitude":	-70,12921393	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	VIVAR 723	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2148853	,"Longitude":	-70,1485841	,"Stock":	"NO"}
{"Nombre":	FARMACHILE	"Direccion":	SIMON BOLIVAR 263-A	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02807071	,"Longitude":	-71,54305236	,"Stock":	"SI"}
{"Nombre":	NATURAL LIFE	"Direccion":	BLANCO 47 LOCAL 3	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04372449	,"Longitude":	-71,37238706	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ALESSANDRI 4085 LOCAL 1120	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,99750891	,"Longitude":	-71,51299516	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARRETERA F 30 - E   KM 45 LOC 1 MAITENCILLO	"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,64604325	,"Longitude":	-71,4250085	,"Stock":	"SI"}
{"Nombre":	SAN JAVIER	"Direccion":	EL MEMBRILLO 3150 LOCAL 8	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02075535	,"Longitude":	-71,51562428	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS GINKOS 5 LOCAL 11,12,13	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,94435934	,"Longitude":	-71,54569914	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CON CON REÑACA 3850 LOCAL 1013	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,94015677	,"Longitude":	-71,54617747	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MAGALLANES 866	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9299786	,"Longitude":	-71,51896302	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MANANTIALES 945 LOCAL 104	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,92986984	,"Longitude":	-71,51728003	,"Stock":	"NO"}
{"Nombre":	FAMIFARMA	"Direccion":	CALLE SIETE 685	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,92446639	,"Longitude":	-71,51642253	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	HÉROES DE LA CONCEPCIÓN 2653  SUPERMERCADO LIDER	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23573422	,"Longitude":	-70,14335989	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	TARAPACA 599	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2138705	,"Longitude":	-70,1492774	,"Stock":	"SI"}
{"Nombre":	FARMACIA ARAUCO	"Direccion":	VIVAR 976	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2171173	,"Longitude":	-70,1486324	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. RAMÓN FREIRE 1351	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04563964	,"Longitude":	-71,41773772	,"Stock":	"NO"}
{"Nombre":	FARMACIA CRUZ DEL SUR	"Direccion":	AVENIDA LOS CÓNDORES 3824	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,27439532	,"Longitude":	-70,09639978	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	HÉROES DE LA CONCEPCIÓN 2555 L158-160A	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,232718	,"Longitude":	-70,142465	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	HEROES DE LA CONCEPCION 2855	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23888504	,"Longitude":	-70,14481902	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	BLANCO 946	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04629255	,"Longitude":	-71,44068887	,"Stock":	"SI"}
{"Nombre":	MAS SALUD	"Direccion":	BLANCO 970	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04630952	,"Longitude":	-71,44028249	,"Stock":	"SI"}
{"Nombre":	FARMACIA VALPARAISO	"Direccion":	AV. VALPARAISO 1291	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04455764	,"Longitude":	-71,38165978	,"Stock":	"SI"}
{"Nombre":	HOMEONATUR	"Direccion":	CLAUDIO VICUÑA 878	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04691124	,"Longitude":	-71,44224768	,"Stock":	"NO"}
{"Nombre":	ECONOMICA	"Direccion":	NORMANDIE 1885	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78495672	,"Longitude":	-71,52755742	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PACIFICO 5095 GÓMEZ CARREÑO	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,99924023	,"Longitude":	-71,51925056	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO 786	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02530077	,"Longitude":	-71,55064721	,"Stock":	"NO"}
{"Nombre":	MONTEMAR	"Direccion":	BORGOÑO 25180	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,92022359	,"Longitude":	-71,50994124	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	TARAPACA 496	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,213904	,"Longitude":	-70,150348	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. ARTURO PRAT 1170 LOCAL 1	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2186591	,"Longitude":	-70,15486909	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	VIVAR 706-710	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2147384	,"Longitude":	-70,1485386	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	VIVAR 854	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2161886	,"Longitude":	-70,14863579	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. FRANCISO BILBAO 3545 LOCAL 14	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,257849	,"Longitude":	-70,13251305	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MANUEL RODRIGUEZ 964 LOCAL 8	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,22326117	,"Longitude":	-70,14669656	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	GENARO GALLO 2955 LOCAL 7	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,24291156	,"Longitude":	-70,14214754	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	PRAT N°776	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75003438	,"Longitude":	-70,72594588	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	DIEGO PORTALES 822	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04670313	,"Longitude":	-71,441364	,"Stock":	"SI"}
{"Nombre":	FARMACIA FAMILIAR	"Direccion":	REPUBLICA 221	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-33,00223864	,"Longitude":	-71,26602617	,"Stock":	"NO"}
{"Nombre":	NUEVA SALUD	"Direccion":	AV. NORMANDIE 2680 L-1	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,79244976	,"Longitude":	-71,5266699	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. LIBERTAD 1279 L-1	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00943861	,"Longitude":	-71,54897025	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. GOMEZ CARREÑO 3601 L-5	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,98898601	,"Longitude":	-71,5251539	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. LIBERTAD 1279 LOCAL 2	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00940235	,"Longitude":	-71,54897991	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	AV. VALPARAISO 763	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0445449	,"Longitude":	-71,3750847	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. DIEGO PORTALES 551 LOCAL 9	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,32266321	,"Longitude":	-71,40528971	,"Stock":	"SI"}
{"Nombre":	LA SALUD	"Direccion":	AVENIDA LUIS GUEVARA ORTUZAR Nº 2002 LOCAL Nº 6	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04392182	,"Longitude":	-71,64660344	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ESMERALDA 1148	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04273358	,"Longitude":	-71,62476106	,"Stock":	"SI"}
{"Nombre":	Torres MPD	"Direccion":	AVENIDA EL SALTO 2972	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,3996351	,"Longitude":	-70,6289499	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VALPARAISO 2150, LOCAL 10	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,89662075	,"Longitude":	-71,26576878	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	SAN MARTIN 174	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,732	,"Longitude":	-70,735941	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	BERNARDINO BRAVO  0115	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733602	,"Longitude":	-70,733803	,"Stock":	"SI"}
{"Nombre":	BUIN	"Direccion":	MANUEL RODRIGUEZ 270	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,729515	,"Longitude":	-70,739232	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE MANUEL BALMACEDA 114	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733423	,"Longitude":	-70,737859	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SANTA MARÍA N° 304	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733185	,"Longitude":	-70,737136	,"Stock":	"SI"}
{"Nombre":	EL ALBA	"Direccion":	FRANCISCO JAVIER KRUGGER 3881. L - 1	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,761703	,"Longitude":	-70,735348	,"Stock":	"NO"}
{"Nombre":	KURTH	"Direccion":	ANIBAL PINTO 300	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733048	,"Longitude":	-70,73906	,"Stock":	"NO"}
{"Nombre":	PLAZA BUIN	"Direccion":	JOSE MANUEL BALMACEDA 899	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,732228	,"Longitude":	-70,748244	,"Stock":	"SI"}
{"Nombre":	SANTA CATALINA	"Direccion":	ANIBAL PINTO 436	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,734744	,"Longitude":	-70,739339	,"Stock":	"SI"}
{"Nombre":	SUIZA	"Direccion":	CAMINO LONGITUDINAL SUR  4251. L-1. LINDEROS	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,776768	,"Longitude":	-70,744247	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JOSE MANUEL BALMACEDA 157	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733334	,"Longitude":	-70,738417	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MAIPO 3147. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,730963	,"Longitude":	-70,774937	,"Stock":	"SI"}
{"Nombre":	CALERA DE TANGO	"Direccion":	CALERA DE TANGO 593-B. PARADERO 9. LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,629789	,"Longitude":	-70,762771	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO LONQUEN. S/N INTERIOR SUPERMERCADO.	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,573438	,"Longitude":	-70,768774	,"Stock":	"NO"}
{"Nombre":	EFRAIN	"Direccion":	CAMINO LONQUEN NORTE S/N. PARCELA 30. PARAD.13	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,611584	,"Longitude":	-70,792824	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO 2500. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,518821	,"Longitude":	-70,707453	,"Stock":	"SI"}
{"Nombre":	HELP	"Direccion":	AEROPUERTO 7344	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,506955	,"Longitude":	-70,703202	,"Stock":	"SI"}
{"Nombre":	KÜMELEN	"Direccion":	FELIX MARGOZ 695 - A	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,491124	,"Longitude":	-70,713333	,"Stock":	"NO"}
{"Nombre":	LA FE	"Direccion":	PASAJE LAS TINAJAS 7596. L-5	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,504598	,"Longitude":	-70,71962	,"Stock":	"SI"}
{"Nombre":	VILLA MEXICO	"Direccion":	5 DE ABRIL 1094	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,509773	,"Longitude":	-70,731929	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. AMERICO VESPUCIO 1501. INTERIOR MALL PLAZA OESTE. LOCAL 257 C-262	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,515049	,"Longitude":	-70,717181	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. JOSE JOAQUIN PEREZ 7262	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429454	,"Longitude":	-70,735863	,"Stock":	"SI"}
{"Nombre":	DAVIFAR	"Direccion":	AV. JOSE JOAQUIN PEREZ 6570. INTERIOR ALVI	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429131	,"Longitude":	-70,726508	,"Stock":	"SI"}
{"Nombre":	DYLAN 2	"Direccion":	JOSÉ JOAQUÍN PÉREZ 7287	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429571	,"Longitude":	-70,737089	,"Stock":	"SI"}
{"Nombre":	ITALIA	"Direccion":	AV. JOSE JOAQUIN PEREZ 7274	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,4294	,"Longitude":	-70,736099	,"Stock":	"NO"}
{"Nombre":	ECONOSUR	"Direccion":	AV. JOSE JOAQUIN PEREZ 6915-A	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,428999	,"Longitude":	-70,730842	,"Stock":	"SI"}
{"Nombre":	SANTO THOMAS	"Direccion":	AV. JOSE JOAQUIN PEREZ 7441, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429812	,"Longitude":	-70,740262	,"Stock":	"NO"}
{"Nombre":	SILVA	"Direccion":	HUELEN 1622	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,418565	,"Longitude":	-70,741292	,"Stock":	"NO"}
{"Nombre":	SILVA	"Direccion":	SALVADOR GUTIERREZ 7990 L-2	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,416828	,"Longitude":	-70,75024	,"Stock":	"SI"}
{"Nombre":	PHARMA VITAE	"Direccion":	SALVADOR GUTIERREZ 6307	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,421301	,"Longitude":	-70,720529	,"Stock":	"SI"}
{"Nombre":	DB FARMACIAS	"Direccion":	SALVADOR GUTIERREZ 7359	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,418314	,"Longitude":	-70,740797	,"Stock":	"SI"}
{"Nombre":	TIERRA DEL FUEGO	"Direccion":	SALVADOR GUTIERREZ 7698	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,417544	,"Longitude":	-70,745069	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. JOSE JOAQUIN PEREZ 7177	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429507	,"Longitude":	-70,734104	,"Stock":	"SI"}
{"Nombre":	LA UNION	"Direccion":	SALVADOR GUTIERREZ 8165 L-B	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,416666	,"Longitude":	-70,756012	,"Stock":	"NO"}
{"Nombre":	NEPTUNO	"Direccion":	AV. JOSE JOAQUIN PEREZ 6107 L-A	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,430582	,"Longitude":	-70,720156	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO CHICUREO ESQUINA LOS INGLESES. LOCAL 13.	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,285167	,"Longitude":	-70,680634	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	COLINA SUR 14500. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,276682	,"Longitude":	-70,628112	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CALETERA ORIENTE. GENERAL SAN MARTIN 19000	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,238284	,"Longitude":	-70,6955	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GENERAL SAN MARTIN 068. STRIP CENTER MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,20679	,"Longitude":	-70,677604	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	CARRETERA GENERAL SAN MARTIN 381	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,201996	,"Longitude":	-70,673851	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA INMACULADA CONCEPCION 47  LOCALES 4,5,6. INTERIOR TOTTUS	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204402	,"Longitude":	-70,676177	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARRETERA GENERAL SAN MARTIN 068. STRIP CENTER MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,206653	,"Longitude":	-70,67745	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PASEO COLINA SUR 14500. L-113  PIEDRA ROJA. VIVO PIEDRA ROJA	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,27775	,"Longitude":	-70,626086	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	FONTT 032	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,20352	,"Longitude":	-70,674931	,"Stock":	"SI"}
{"Nombre":	HELIFARMA	"Direccion":	AV. LA INMACULADA CONCEPCION  425	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,203796	,"Longitude":	-70,680483	,"Stock":	"SI"}
{"Nombre":	NUEVA REAL	"Direccion":	AV. LA INMACULADA CONCEPCION 86-A	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204546	,"Longitude":	-70,675481	,"Stock":	"NO"}
{"Nombre":	SAN MARTIN	"Direccion":	CARRETERA GENERAL SAN MARTIN 071. L-A	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204707	,"Longitude":	-70,675653	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMINO CHICUREO. LOTE 2. C3.  L-1  FUNDO EL CASTILLO	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,28584	,"Longitude":	-70,675528	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CARRETERA GENERAL SAN MARTIN. KM 6.3	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,286342	,"Longitude":	-70,675789	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LA HIJUELA DE  ALGARROBAL. LOCAL 11-B	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,278084	,"Longitude":	-70,703552	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. INDEPENDENCIA  4142. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,391512	,"Longitude":	-70,675618	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PEDRO FONTOVA 5810. INTERIOR TOTTUS	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,371545	,"Longitude":	-70,671232	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	INDEPENDENCIA  6035	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,369164	,"Longitude":	-70,688358	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	Pasaje La Palma 3370-A	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,39746387	,"Longitude":	-70,67100999	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. INDEPENDENCIA 4884	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,384673	,"Longitude":	-70,680374	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARDENAL JOSE MARIA CARO 1771. INTERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,373601	,"Longitude":	-70,681658	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. INDEPENDENCIA 3557  LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,395801	,"Longitude":	-70,671745	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. INDEPENDENCIA   4801	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,384684	,"Longitude":	-70,680084	,"Stock":	"SI"}
{"Nombre":	FARMACIAS Y PERFUMERIAS FAMILIAR S.P.A.	"Direccion":	LOS ZAPADORES 1200. EKONO	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,386684	,"Longitude":	-70,657897	,"Stock":	"SI"}
{"Nombre":	SAN ANDRES	"Direccion":	MANIZALES 1898	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3755	,"Longitude":	-70,685012	,"Stock":	"NO"}
{"Nombre":	LA PALMILLA	"Direccion":	PEDRO FONTOVA 5102	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,379992	,"Longitude":	-70,672946	,"Stock":	"SI"}
{"Nombre":	NUEVA REAL	"Direccion":	BARON DE JURAS REALES 4011	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,393648	,"Longitude":	-70,682455	,"Stock":	"NO"}
{"Nombre":	TEATINOS	"Direccion":	AVENID INDEPENDENCIA  3187 - B	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,397903	,"Longitude":	-70,66924	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PRESBITERO MORAGA SUR 1	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,402767	,"Longitude":	-71,129139	,"Stock":	"SI"}
{"Nombre":	CURACAVI	"Direccion":	GERMAN RIESCO 111 L-A	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,40257	,"Longitude":	-71,129915	,"Stock":	"SI"}
{"Nombre":	EL SOL	"Direccion":	AMBROSIO O'HIGGINS 1447	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,404934	,"Longitude":	-71,135298	,"Stock":	"SI"}
{"Nombre":	ESMERALDA	"Direccion":	AMBROSIO O'HIGGINS 1793	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,403179	,"Longitude":	-71,131006	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	RIQUELME 69. LOCALES 3 Y 4.  INTERIOR SUPERMERCADO LIDER	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,54579	,"Longitude":	-70,667759	,"Stock":	"SI"}
{"Nombre":	LOS MAQUIS	"Direccion":	AV. PADRE HURTADO 10904	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,561121	,"Longitude":	-70,670763	,"Stock":	"NO"}
{"Nombre":	BEAR	"Direccion":	TUCAPEL 11881	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,574654	,"Longitude":	-70,666662	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	AV. LO BLANCO 996 A	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,58241	,"Longitude":	-70,676809	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. PADRE HURTADO 12135	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,582698	,"Longitude":	-70,676898	,"Stock":	"SI"}
{"Nombre":	SALUD/CANAIMA	"Direccion":	JULIO COVARRUBIAS 10004	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55352	,"Longitude":	-70,660676	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 10375. LOCAL 40. INTERIOR TOTTUS	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55402	,"Longitude":	-70,675009	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 9863	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55014	,"Longitude":	-70,671941	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 13065	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,574529	,"Longitude":	-70,690897	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 9876 - 9878	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,550408	,"Longitude":	-70,671984	,"Stock":	"NO"}
{"Nombre":	EL BOSQUE	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA  12284	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,567216	,"Longitude":	-70,685352	,"Stock":	"SI"}
{"Nombre":	FARMASUR	"Direccion":	CLAUDIO ARRAU 45. LOCAL 1 C	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,564087	,"Longitude":	-70,682348	,"Stock":	"SI"}
{"Nombre":	LANVAR	"Direccion":	CLAUDIO ARRAU   970	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,56634	,"Longitude":	-70,672649	,"Stock":	"SI"}
{"Nombre":	LOS MAQUIS	"Direccion":	OBSERVATORIO   1055	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,561361	,"Longitude":	-70,663524	,"Stock":	"NO"}
{"Nombre":	MARAZUL	"Direccion":	LO MARTINEZ 748. LOCAL A	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,572276	,"Longitude":	-70,668293	,"Stock":	"SI"}
{"Nombre":	NUEVA ERA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 13014	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,574332	,"Longitude":	-70,690502	,"Stock":	"NO"}
{"Nombre":	SALUD	"Direccion":	GENERAL KORNER   824	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,549335	,"Longitude":	-70,682112	,"Stock":	"NO"}
{"Nombre":	SAN SEBASTIAN	"Direccion":	AV. PADRE HURTADO 11931	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,566959	,"Longitude":	-70,672546	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	OBSERVATORIO 1029 C	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,561298	,"Longitude":	-70,663916	,"Stock":	"SI"}
{"Nombre":	DON ANTONIO	"Direccion":	AV. LIBERTADORES   318-A	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,680065	,"Longitude":	-70,980118	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	AV. LIBERTADORES  301	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,679122	,"Longitude":	-70,979236	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 5199. LOCAL - 2. INTERIOR ESPACIO URBANO	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,457041	,"Longitude":	-70,70509	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PADRE ALBERTO HURTADO 60. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,452695	,"Longitude":	-70,69151	,"Stock":	"NO"}
{"Nombre":	BELGOCHILENA	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3700. INTERIOR TERMINAL DE BUSES	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45393	,"Longitude":	-70,687752	,"Stock":	"NO"}
{"Nombre":	CARRERA	"Direccion":	LOS PINGUINOS 4294	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,471008	,"Longitude":	-70,692411	,"Stock":	"SI"}
{"Nombre":	CENTRO DE SALUD LAS REJAS	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 6064	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,457573	,"Longitude":	-70,706486	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3002	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,450529	,"Longitude":	-70,67748	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3250. PASEO ARAUCO ESTACION	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,451139	,"Longitude":	-70,679883	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3806-3810	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,453339	,"Longitude":	-70,687819	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN BORJA 184. LOCAL 506 - 508. PASEO ARAUCO ESTACION	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,453006	,"Longitude":	-70,680365	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 4102	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,454199	,"Longitude":	-70,692347	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. MATUCANA 24. L - 2G	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,448949	,"Longitude":	-70,679158	,"Stock":	"SI"}
{"Nombre":	ELENA	"Direccion":	5 DE ABRIL 5940	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,465727	,"Longitude":	-70,708569	,"Stock":	"SI"}
{"Nombre":	ESPOZ	"Direccion":	AV. GLADYS MARIN MILLIE 6997	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,467524	,"Longitude":	-70,730906	,"Stock":	"SI"}
{"Nombre":	ESPOZ	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 6002	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45794	,"Longitude":	-70,707389	,"Stock":	"NO"}
{"Nombre":	PURA SALUD	"Direccion":	5 DE ABRIL 4698	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,461825	,"Longitude":	-70,698417	,"Stock":	"SI"}
{"Nombre":	NUESTRA SALUD	"Direccion":	LAS ACACIAS 3112	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,559202	,"Longitude":	-70,709637	,"Stock":	"NO"}
{"Nombre":	PUDAHUEL	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 6036 L-B	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,450672	,"Longitude":	-70,677606	,"Stock":	"NO"}
{"Nombre":	SAINT GERMAIN	"Direccion":	5 DE ABRIL 5101	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,464421	,"Longitude":	-70,70544	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3470. MALL PLAZA "AHUMADA"	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,451979	,"Longitude":	-70,682283	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 4850. CLINICA BICENTENARIO	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,456732	,"Longitude":	-70,70273	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAN FRANCISCO DE BORJA 122. PASEO ARAUCO ESTACION	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,453167	,"Longitude":	-70,68039	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 3250, LOCAL 87. ESTACION CENTRAL	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45142698	,"Longitude":	-70,67957158	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. AMERICO VESPUCIO 1737. L-P-1285, P-1281. MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,368062	,"Longitude":	-70,678301	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. AMERICO VESPUCIO 1737. LOCAL 1005. MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,368062	,"Longitude":	-70,678301	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. AMERICO VESPUCIO 1737. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,368062	,"Longitude":	-70,678301	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. PEDRO FONTOVA 7571	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,351179	,"Longitude":	-70,670396	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO 1737.  L- 1193    MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,36799	,"Longitude":	-70,678378	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. EL PARQUE 4023 LOCAL 113. STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,393935	,"Longitude":	-70,620979	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO FONTOVA 7789. L-4	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,347738	,"Longitude":	-70,670353	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTA MARTA DE HUECHURABA 7300	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,354562	,"Longitude":	-70,677469	,"Stock":	"NO"}
{"Nombre":	FARMAVIDA	"Direccion":	AV. RECOLETA 5418	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,376326	,"Longitude":	-70,637787	,"Stock":	"NO"}
{"Nombre":	MAIPO	"Direccion":	AV. CACIQUES CHILENOS SUR 1392	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,357631	,"Longitude":	-70,669881	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. PEDRO FONTOVA 7777.  L-2	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,348222	,"Longitude":	-70,670417	,"Stock":	"SI"}
{"Nombre":	SANTA TERESITA	"Direccion":	CAMINO EL BOSQUE DE SANTIAGO 486	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,375266	,"Longitude":	-70,632974	,"Stock":	"SI"}
{"Nombre":	BENJAMIN	"Direccion":	GENERAL PRIETO  1034. L- 112	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,429863	,"Longitude":	-70,653707	,"Stock":	"NO"}
{"Nombre":	BICENTENARIO	"Direccion":	SALOMON SACK 351. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41974	,"Longitude":	-70,670227	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	AV. INDEPENDENCIA 1102	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41751	,"Longitude":	-70,656496	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "CRUZ VERDE"	"Direccion":	INDEPENDENCIA 2127. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,40684316	,"Longitude":	-70,66013906	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VIVACETA 975. INTERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,419606	,"Longitude":	-70,663331	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. INDEPENDENCIA   936	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,420034	,"Longitude":	-70,655933	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. INDEPENDENCIA 990	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,419416	,"Longitude":	-70,656062	,"Stock":	"SI"}
{"Nombre":	LA URGENCIA	"Direccion":	AV. INDEPENDENCIA  299	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,42831	,"Longitude":	-70,653742	,"Stock":	"NO"}
{"Nombre":	MAESTRE	"Direccion":	AV. SALOMON SACK 928	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,414275	,"Longitude":	-70,678147	,"Stock":	"SI"}
{"Nombre":	VECINAL ASFAR	"Direccion":	NUEVA DE MATTE  2599	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,408777	,"Longitude":	-70,671801	,"Stock":	"NO"}
{"Nombre":	NUEVA REAL	"Direccion":	AV. INDEPENDENCIA  3998	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,391351	,"Longitude":	-70,674733	,"Stock":	"NO"}
{"Nombre":	RENACER	"Direccion":	AV. INDEPENDENCIA 179	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,430315	,"Longitude":	-70,653208	,"Stock":	"SI"}
{"Nombre":	VALLE DE VIDA	"Direccion":	AV. HIPODROMO CHILE 1372.  L-1	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,407093	,"Longitude":	-70,660249	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. INDEPENDENCIA 902-906	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,420452	,"Longitude":	-70,655914	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SANTOS DUMONT 999. INTERIOR HOSPITAL CLINICO U. DE CHILE	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,421012	,"Longitude":	-70,652988	,"Stock":	"NO"}
{"Nombre":	ASFAR	"Direccion":	INDEPENDENCIA 1946. STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,409206	,"Longitude":	-70,66053	,"Stock":	"SI"}
{"Nombre":	ECUANASER	"Direccion":	BALMACEDA 3535-LA ISLITA	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,745037	,"Longitude":	-70,864777	,"Stock":	"NO"}
{"Nombre":	ECUANASER	"Direccion":	AV. SANTELICES 555-C	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,754429	,"Longitude":	-70,90094	,"Stock":	"NO"}
{"Nombre":	FARMA-MARKET	"Direccion":	GALVEZ 06	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,756367	,"Longitude":	-70,896568	,"Stock":	"SI"}
{"Nombre":	Farmagroup	"Direccion":	AVENIDA SANTA ROSA 6482	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,520695	,"Longitude":	-70,636318	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AMERICO VESPUCIO 33. L-120 Y 121. ESTACION INTERMODAL LA CISTERNA	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,538005	,"Longitude":	-70,664369	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO 33. L-26. ESTACION INTERMODAL LA CISTERNA	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,538335	,"Longitude":	-70,663864	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	FERNANDEZ  ALBANO 27	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,52376657	,"Longitude":	-70,6601124	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8701	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5358487	,"Longitude":	-70,6640925	,"Stock":	"NO"}
{"Nombre":	CARMEN	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6494	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,516616	,"Longitude":	-70,658521	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMERICO VESPUCIO  33    LOCAL 5  EST.INTERMODAL	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,538403	,"Longitude":	-70,664446	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6567	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,517198	,"Longitude":	-70,658919	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 7390	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,522719	,"Longitude":	-70,660394	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8501. PETROBRAS	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,533328	,"Longitude":	-70,663444	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AMERICO VESPUCIO 75. ESTACION INTERMODAL LA CISTERNA	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5378	,"Longitude":	-70,663723	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8039. PETROBRAS	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,527418	,"Longitude":	-70,661756	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6486	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,516263	,"Longitude":	-70,658422	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 9253	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,54304	,"Longitude":	-70,666405	,"Stock":	"SI"}
{"Nombre":	LA GRANJA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8239	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,529805	,"Longitude":	-70,662457	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	RIQUELME  6	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,545669	,"Longitude":	-70,668057	,"Stock":	"SI"}
{"Nombre":	MARTINEZ  ACUÑA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 9303	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,54348	,"Longitude":	-70,666708	,"Stock":	"NO"}
{"Nombre":	SANTA ANSELMA	"Direccion":	SANTA ANSELMA 0199	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,530878	,"Longitude":	-70,664811	,"Stock":	"SI"}
{"Nombre":	SANTA RITA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA  9312	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,543684	,"Longitude":	-70,666555	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6701	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,518528	,"Longitude":	-70,659275	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA   6608	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5179239	,"Longitude":	-70,6588086	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 7877-7883	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,523955	,"Longitude":	-70,660611	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA  8877	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,538229	,"Longitude":	-70,664881	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. AMERICO VESPUCIO 6325. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,511522	,"Longitude":	-70,590659	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. AMERICO VESPUCIO 7310. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51988986	,"Longitude":	-70,59560334	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	FROILAN ROA 7107. INTERIOR MALL PLAZA VESPUCIO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,516006	,"Longitude":	-70,5976	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	LA FLORIDA 9497	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,543243	,"Longitude":	-70,570288	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	ROJAS MAGALLANES 3638. CENTRO COMERCIAL LAS FLORES DE TOBALABA	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,535917	,"Longitude":	-70,555482	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SANTA AMALIA 1763. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,545723	,"Longitude":	-70,569232	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	VICUÑA MACKENNA 6100. MALL FLORIDA CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,510377	,"Longitude":	-70,608662	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VICUÑA MACKENNA 6100. MALL FLORIDA CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,511162	,"Longitude":	-70,608098	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VICUÑA MACKENNA 6540  PARADERO 11	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,515655	,"Longitude":	-70,606581	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. VICUÑA MACKENNA 9587. ESQUINA SANTA AMALIA.	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,543827	,"Longitude":	-70,58935	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	VICUÑA MACKENNA PONIENTE 7196. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,519608	,"Longitude":	-70,602804	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	WALKER MARTINEZ 2051	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,522497	,"Longitude":	-70,574622	,"Stock":	"SI"}
{"Nombre":	C.A.	"Direccion":	AV. SANTA RAQUEL 9306. LOCAL D	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,539579	,"Longitude":	-70,603521	,"Stock":	"SI"}
{"Nombre":	CRUZ DEL SUR	"Direccion":	AV. VICUÑA MACKENNA 10401	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,546259	,"Longitude":	-70,588342	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO 7500	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,522077	,"Longitude":	-70,597461	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ENRIQUE OLIVARES 594	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,539606	,"Longitude":	-70,583173	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "CRUZ VERDE"	"Direccion":	LA FLORIDA  9385. COSTADO SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,539997	,"Longitude":	-70,571672	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA FLORIDA 9660   LOCALES 9-10	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,543129	,"Longitude":	-70,569974	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN JOSE DE LA ESTRELLA 1370. INTERIOR PUERTO CRISTO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,55396	,"Longitude":	-70,602718	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANCHEZ FONTECILLA 8968  LOCALES 9,10,11. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,534741	,"Longitude":	-70,554336	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SERAFIN ZAMORA 57 63	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,520704	,"Longitude":	-70,600007	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VICENTE VALDES 85	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,526927	,"Longitude":	-70,596404	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	IRRARAZAVAL 4971 L-6	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45453284	,"Longitude":	-70,57780936	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 6100 LOCAL 1110  MALL FLORIDA CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,510715	,"Longitude":	-70,608632	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 7110    L.219-220-221 MALL PLAZA VESPUCIO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51926	,"Longitude":	-70,600275	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 7110 LOCAL C 102 MALL PLAZA VESPUCIO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51926	,"Longitude":	-70,600275	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 9797   ESSO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,546543	,"Longitude":	-70,588089	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA ORIENTE 6100 LOCAL 134. MALL FLORIDA CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,510449	,"Longitude":	-70,608448	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	WALKER MARTINEZ 1786	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,522345	,"Longitude":	-70,579265	,"Stock":	"NO"}
{"Nombre":	VITA	"Direccion":	AV. VICUÑA MACKENNA 9705	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,546051	,"Longitude":	-70,588269	,"Stock":	"SI"}
{"Nombre":	M & L	"Direccion":	AV. WALKER MARTINEZ 1583 B	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,522596	,"Longitude":	-70,580692	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. VICUÑA MACKENNA PONIENTE 7287	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52095	,"Longitude":	-70,601131	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	WALKER MARTINEZ 1786, LOCAL 9B	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,521946	,"Longitude":	-70,579651	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SERAFIN ZAMORA 35	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,520843	,"Longitude":	-70,600292	,"Stock":	"SI"}
{"Nombre":	EBEN EZER	"Direccion":	AV. TRINIDAD  PONIENTE 1420	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,546778	,"Longitude":	-70,606382	,"Stock":	"SI"}
{"Nombre":	HERRERA	"Direccion":	AVENIDA LA FLORIDA 10149, LOCAL 4, CENTRO COMERCIAL EL ALBA	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,54932	,"Longitude":	-70,56899	,"Stock":	"NO"}
{"Nombre":	FAMILY	"Direccion":	VICUÑA MACKENNA ORIENTE 6420	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,512918	,"Longitude":	-70,60613	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	AMERICO VESPUCIO 7500 LOCAL B3-1B	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52163	,"Longitude":	-70,597311	,"Stock":	"NO"}
{"Nombre":	JUMBO	"Direccion":	VICUÑA MACKENNA 6100. MALL FLORIDA CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,511162	,"Longitude":	-70,608098	,"Stock":	"NO"}
{"Nombre":	LOS CANELOS	"Direccion":	VICUÑA MACKENNA 9417	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,543129	,"Longitude":	-70,589694	,"Stock":	"SI"}
{"Nombre":	NOVASALUD.COM	"Direccion":	AV. VICUÑA MACKENNA 6975   L-3024	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,517489	,"Longitude":	-70,601603	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	VICUÑA MACKENNA 7110	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,518724	,"Longitude":	-70,600416	,"Stock":	"SI"}
{"Nombre":	REY FARMA	"Direccion":	GENERAL ARRIAGADA  440	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,557606	,"Longitude":	-70,59041	,"Stock":	"NO"}
{"Nombre":	ROSARIO	"Direccion":	ROJAS MAGALLANES 841	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,535457	,"Longitude":	-70,603641	,"Stock":	"SI"}
{"Nombre":	ROTONDA  LA FLORIDA	"Direccion":	SERAFIN ZAMORA 53	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,520682	,"Longitude":	-70,600015	,"Stock":	"NO"}
{"Nombre":	SANTA RAQUEL	"Direccion":	AV. SANTA RAQUEL 10819	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,558974	,"Longitude":	-70,601216	,"Stock":	"NO"}
{"Nombre":	SU FARMA	"Direccion":	AV. DIEGO PORTALES 2372. LOCAL A Y B.	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,559242	,"Longitude":	-70,55976	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA FLORIDA 9871	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,547833	,"Longitude":	-70,568365	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. ROJAS MAGALLANES 1280  ESQUINA AV.LA FLORIDA	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,535564	,"Longitude":	-70,573944	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUÑA MACKENNA 11091. STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,560726	,"Longitude":	-70,585402	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUÑA MACKENNA 6100. MALL FLORIDA CENTER. LOCAL 3107	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,510688	,"Longitude":	-70,608514	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUÑA MACKENNA PONIENTE 6331. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,514212	,"Longitude":	-70,608076	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUÑA MACKENNA 7304	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,520753	,"Longitude":	-70,598985	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VICUÑA MACKENNA 7747	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,521165	,"Longitude":	-70,600887	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUÑA MACKENNA 9101	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,539481	,"Longitude":	-70,59156	,"Stock":	"SI"}
{"Nombre":	ELIANA	"Direccion":	AV. SAN GREGORIO 0620	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,537686	,"Longitude":	-70,619313	,"Stock":	"SI"}
{"Nombre":	FARMACIA TU BIENESTAR	"Direccion":	ARTURO PRAT 1982 L-21 PISO 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,47185628	,"Longitude":	-70,64652739	,"Stock":	"NO"}
{"Nombre":	LOS PALTOS	"Direccion":	JOAQUIN EDWARDS BELLO 9927	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,549518	,"Longitude":	-70,625259	,"Stock":	"SI"}
{"Nombre":	LOS PALTOS	"Direccion":	JOAQUIN EDWARDS BELLO 10480	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,555958	,"Longitude":	-70,623943	,"Stock":	"NO"}
{"Nombre":	ESPOZ	"Direccion":	AV. SANTA ROSA 8850 - A	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,541513	,"Longitude":	-70,634116	,"Stock":	"NO"}
{"Nombre":	DE LO ALTO	"Direccion":	ALMIRANTE LATORRE 10691, VILLA LOS ROBLES	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,556595	,"Longitude":	-70,645634	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTA ROSA 13015. INTERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,605702	,"Longitude":	-70,626815	,"Stock":	"SI"}
{"Nombre":	FARMA SUR	"Direccion":	PROFESOR JULIO CHAVEZ 13013	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,581962	,"Longitude":	-70,657895	,"Stock":	"SI"}
{"Nombre":	FARMAVECINA	"Direccion":	BERNARDINO PARADA 0726	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,577688	,"Longitude":	-70,65703	,"Stock":	"NO"}
{"Nombre":	SANTA ROSA SUR	"Direccion":	PORTO  ALEGRE 12604	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,579892	,"Longitude":	-70,638617	,"Stock":	"SI"}
{"Nombre":	SOZAFAR	"Direccion":	BALDOMERO LILLO 1462	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,582305	,"Longitude":	-70,636514	,"Stock":	"NO"}
{"Nombre":	SAN VENANCIO	"Direccion":	VENANCIA LEIVA  1811  L-3	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,556434	,"Longitude":	-70,645119	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BALDOMERO LILLO 1872	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,582752	,"Longitude":	-70,631836	,"Stock":	"SI"}
{"Nombre":	LANVAR	"Direccion":	PATAGONIA 12811-A,  P. 36 SANTA ROSA	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,582824	,"Longitude":	-70,63424	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. FRANCISCO BILBAO 8750. PORTAL LA REINA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,428451	,"Longitude":	-70,540534	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JORGE ALESSANDRI 1131. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,462165	,"Longitude":	-70,547272	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	AV. FRANCISCO BILBAO 7391	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,43071187	,"Longitude":	-70,55490533	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA PRINCIPE DE GALES  7230	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,438801	,"Longitude":	-70,557014	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV.LARRAIN  6637	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,452498	,"Longitude":	-70,561026	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CARLOS OSSANDON 1188	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,442901	,"Longitude":	-70,543431	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PRINCIPE DE GALES 6812	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,438604	,"Longitude":	-70,561627	,"Stock":	"SI"}
{"Nombre":	LA REINA	"Direccion":	LARRAIN 6997	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451793	,"Longitude":	-70,555594	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PRINCIPE DE GALES 9140, LOCAL 214, INTERIOR LIDER LAS BRUJAS	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,441254	,"Longitude":	-70,535856	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV.PRINCIPE DE GALES 8481	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,44052	,"Longitude":	-70,543281	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRINCIPE DE GALES 9200	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,441344	,"Longitude":	-70,536114	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA DEHESA 1751	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,356144	,"Longitude":	-70,51721	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA LARRAIN 6563	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,452677	,"Longitude":	-70,56197	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PRINCIPE DE GALES  7215	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,438908	,"Longitude":	-70,557142	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CARLOS OSSANDON 1300	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,441182	,"Longitude":	-70,543302	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. FRANCIA 670	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,231773	,"Longitude":	-70,807404	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	ARTURO PRAT 1221 L-2	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,287867	,"Longitude":	-70,871476	,"Stock":	"SI"}
{"Nombre":	LAMPA	"Direccion":	BAQUEDANO 1045	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,285472	,"Longitude":	-70,8771	,"Stock":	"NO"}
{"Nombre":	LETICIA	"Direccion":	SARGENTO ALDEA 810 L- A YB	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,284891	,"Longitude":	-70,877341	,"Stock":	"NO"}
{"Nombre":	CHILENA	"Direccion":	LOS HALCONES 2180	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,294326	,"Longitude":	-70,867519	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA MONTAÑA 2528   L- 9,10,11,12	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,324002	,"Longitude":	-70,745991	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AMERICO VESPUCIO 1463	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,425986	,"Longitude":	-70,577036	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	APOQUINDO 3363	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416492	,"Longitude":	-70,595146	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA APOQUINDO 4671	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41278	,"Longitude":	-70,581016	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	APOQUINDO 5240	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,410738	,"Longitude":	-70,573879	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	APOQUINDO 5879	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409386	,"Longitude":	-70,569378	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMINO LAS FLORES 12640	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,394132	,"Longitude":	-70,515708	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CRISTOBAL COLON 4317	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,423788	,"Longitude":	-70,580627	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CRISTOBAL COLON 6064	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416613	,"Longitude":	-70,565058	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CRISTOBAL COLON 6560	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416989	,"Longitude":	-70,560795	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	IV CENTENARIO 1016	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,418207	,"Longitude":	-70,552336	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	IV CENTENARIO 933	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416469	,"Longitude":	-70,554331	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	APOQUINDO 3449	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416237	,"Longitude":	-70,594157	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	APOQUINDO 4831	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,411938	,"Longitude":	-70,579265	,"Stock":	"SI"}
{"Nombre":	GAYOSO	"Direccion":	MATEO DE TORO Y ZAMBRANO 21	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,61519666	,"Longitude":	-70,69933255	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LAS CONDES 10295. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,384242	,"Longitude":	-70,533968	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LAS CONDES 12916	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,370732	,"Longitude":	-70,512382	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	LOS MILITARES 6872	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401531	,"Longitude":	-70,56049	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PAUL HARRIS 10287	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,386052	,"Longitude":	-70,531178	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	TOMAS MORO 1149	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,424932	,"Longitude":	-70,550758	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO EL ALBA 11969. STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,400958	,"Longitude":	-70,514375	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO EL ALBA 12351	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,399511	,"Longitude":	-70,509439	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO EL ALBA 11865	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401253	,"Longitude":	-70,517153	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO EL ALBA 11969	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401145	,"Longitude":	-70,514333	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	CRISTOBAL COLON  5090	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41878	,"Longitude":	-70,572098	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	SAN DAMIAN 20	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,376502	,"Longitude":	-70,525642	,"Stock":	"NO"}
{"Nombre":	CENTRO MEDICO	"Direccion":	APOQUINDO 3990	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41501	,"Longitude":	-70,588537	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALEXANDER FLEMING 7759	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,425209	,"Longitude":	-70,55233	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO SUR 1040 LOCAL 13	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,423851	,"Longitude":	-70,578522	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	APOQUINDO  3337	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41655	,"Longitude":	-70,595404	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. APOQUINDO  3539	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416089	,"Longitude":	-70,593258	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. APOQUINDO  4343	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414976	,"Longitude":	-70,585297	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. APOQUINDO 4400  LOCAL 145-147  ESC.MILITAR SUBCENTRO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41344	,"Longitude":	-70,582926	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. APOQUINDO 5020-5024	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,411423	,"Longitude":	-70,576242	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	APOQUINDO 6005	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409177	,"Longitude":	-70,567914	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. APOQUINDO  7272	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,408266	,"Longitude":	-70,553483	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO EL ALBA 11101  LOCAL  4	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401262	,"Longitude":	-70,523223	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CRISTOBAL COLON 4008	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,424663	,"Longitude":	-70,584343	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CRISTOBAL COLON 6071	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41668	,"Longitude":	-70,564999	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. EL BOSQUE NORTE 190  LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415081	,"Longitude":	-70,601305	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EVARISTO LILLO 29  LOCAL 1    ESCUELA MILITAR	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,413539	,"Longitude":	-70,581816	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. FRANCISCO BILBAO  4144. L-235.INTERIOR JUMBO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,43126	,"Longitude":	-70,578745	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. FRANCISCO BILBAO  8750  LOCAL  2018   PORTAL LA REINA	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,428769	,"Longitude":	-70,540587	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ISIDORA GOYENECHEA 3600	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414087	,"Longitude":	-70,593607	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LAS CONDES 12461, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3723976	,"Longitude":	-70,5166295	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LO FONTECILLA  441      CLINICA LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,384428	,"Longitude":	-70,529523	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LO FONTECILLA 441. CLINICA LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,384402	,"Longitude":	-70,529446	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS DOMINICOS 7550  LOCAL 1 Y 2  ROTONDA ATENAS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,417584	,"Longitude":	-70,552786	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS MILITARES 6900	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401473	,"Longitude":	-70,560305	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MARTIN DE ZAMORA 6089	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414768	,"Longitude":	-70,565532	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PATAGONIA 19	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,408416	,"Longitude":	-70,545064	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE KENNEDY 5413. LOCAL 350. PARQUE ARAUCO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,401871	,"Longitude":	-70,580534	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE KENNEDY 7915	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,392399	,"Longitude":	-70,55434	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE KENNEDY 9001.  L-2178. MALL ALTO LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,388784	,"Longitude":	-70,545276	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE KENNEDY 9001. MALL ALTO LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,388784	,"Longitude":	-70,545276	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE KENNEDY 5601  SUPERMERCADO TOTTUS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,388793	,"Longitude":	-70,545233	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ROSARIO NORTE 100	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,407756	,"Longitude":	-70,571323	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. APOQUINDO 4411. LOCAL 181-A	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,413942	,"Longitude":	-70,583546	,"Stock":	"SI"}
{"Nombre":	FARPLUS	"Direccion":	APOQUINDO 5841	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409471	,"Longitude":	-70,569528	,"Stock":	"NO"}
{"Nombre":	HERGOFAR	"Direccion":	MALAGA 115	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415699	,"Longitude":	-70,586818	,"Stock":	"SI"}
{"Nombre":	LA DEHESA	"Direccion":	AV. EL RODEO 13400	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,351513	,"Longitude":	-70,510453	,"Stock":	"NO"}
{"Nombre":	LORENA	"Direccion":	ISABEL LA CATOLICA 6113	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,425196	,"Longitude":	-70,563362	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ENCOMENDEROS 74	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,417204	,"Longitude":	-70,60186	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALEXANDER FLEMING 8898, LOCALES 3, 4 Y 5	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,423777	,"Longitude":	-70,538633	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. FRANCISCO BILBAO 4144. LOCAL 160. INTERIOR JUMBO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,431271	,"Longitude":	-70,578737	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. FRANCISCO BILBAO  8750. PORTAL LA REINA	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,428728	,"Longitude":	-70,540595	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA PLAZA  590. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,390101	,"Longitude":	-70,49899	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "SALCOBRAND"	"Direccion":	LAS CONDES 12145	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,373666	,"Longitude":	-70,519669	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LAS CONDES 14151	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,367972	,"Longitude":	-70,500964	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LAS CONDES 8231	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,398228	,"Longitude":	-70,551397	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LAS TERRAZAS 1203 1205	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,392287	,"Longitude":	-70,514933	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANQUEHUE NORTE 330	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,405257	,"Longitude":	-70,568665	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. MANQUEHUE NORTE 457. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40377	,"Longitude":	-70,569	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MARTIN DE ZAMORA 2919	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4245	,"Longitude":	-70,592566	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PADRE HURTADO 751	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41604	,"Longitude":	-70,539075	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PATAGONIA 99	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409332	,"Longitude":	-70,54435	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. PRESIDENTE KENNEDY 9001. LOCAL 2110. MALL ALTO LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,38882	,"Longitude":	-70,545284	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ROGER DE FLOR 2800	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416765	,"Longitude":	-70,600618	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	TOMAS MORO 20	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,408472	,"Longitude":	-70,551813	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "SALCOBRAND"	"Direccion":	PADRE HURTADO NORTE 40	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,394043	,"Longitude":	-70,545963	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA DEHESA 1445. INTERIOR PORTAL LA DEHESA	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,358348	,"Longitude":	-70,517145	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LOS TRAPENSES 3515	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,344178	,"Longitude":	-70,544609	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	EL RODEO 12850. STRIP CENTER SHOPPING LA DEHESA	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,353025	,"Longitude":	-70,520621	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LA DEHESA 457. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,362883	,"Longitude":	-70,514956	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LAS CONDES 14791. LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,363743	,"Longitude":	-70,494014	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE ALCALDE DELANO 10630	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,355517	,"Longitude":	-70,537916	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA DEHESA 1445   LOCAL 2093   PORTAL LA DEHESA	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,358008	,"Longitude":	-70,517016	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VALLE APACIBLE  10528	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,344637	,"Longitude":	-70,543868	,"Stock":	"SI"}
{"Nombre":	VITA	"Direccion":	AV. LO BARNECHEA 1205	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,357631	,"Longitude":	-70,506598	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA DEHESA 2035	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35221	,"Longitude":	-70,518806	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. EL RODEO 13442	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,351484	,"Longitude":	-70,510665	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LOS TRAPENSES 3023. LOCAL 8	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,581858	,"Longitude":	-70,562464	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SANTA BLANCA 1996	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,355194	,"Longitude":	-70,532187	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	MONEDA 1617 L-6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,506327	,"Longitude":	-70,69199	,"Stock":	"NO"}
{"Nombre":	GIRENO	"Direccion":	AV. GABRIELA MISTRAL 9173	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,5277232	,"Longitude":	-70,7003834	,"Stock":	"SI"}
{"Nombre":	LA FE	"Direccion":	AV. CENTRAL 7821	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,519716	,"Longitude":	-70,69593	,"Stock":	"NO"}
{"Nombre":	L-V	"Direccion":	OBISPO JAVIER VASQUEZ (EX MAIPU) 6730	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,508946	,"Longitude":	-70,686296	,"Stock":	"NO"}
{"Nombre":	SU FARMA	"Direccion":	LO OVALLE 03496	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,504495	,"Longitude":	-70,688189	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	NEPTUNO 720. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444907	,"Longitude":	-70,723416	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SAN PABLO 6256	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444244	,"Longitude":	-70,724233	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ECUADOR  5455-A	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,457708	,"Longitude":	-70,711831	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LAS REJAS NORTE 2	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,456902	,"Longitude":	-70,705629	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	NEPTUNO 814  L-C	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444155	,"Longitude":	-70,723418	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	AV. SAN PABLO 6303	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444262	,"Longitude":	-70,724212	,"Stock":	"NO"}
{"Nombre":	R Y C	"Direccion":	AV. SAN PABLO 6358  L-18	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444262	,"Longitude":	-70,724555	,"Stock":	"SI"}
{"Nombre":	ESPOZ	"Direccion":	AV. SAN PABLO 7185	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444589	,"Longitude":	-70,736032	,"Stock":	"SI"}
{"Nombre":	LAS ROSAS	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 5313 L-10	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,45717	,"Longitude":	-70,705887	,"Stock":	"SI"}
{"Nombre":	LOS EDILES	"Direccion":	Avenida Dorsal 5509	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4498676	,"Longitude":	-70,710776	,"Stock":	"NO"}
{"Nombre":	SAN FRANCISCO	"Direccion":	SAN FRANCISCO 7028	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,436258	,"Longitude":	-70,732881	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 5155	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,457153	,"Longitude":	-70,706123	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. SAN PABLO 6183	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444083	,"Longitude":	-70,722624	,"Stock":	"NO"}
{"Nombre":	ESPOZ	"Direccion":	AV. SAN PABLO 6179	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444155	,"Longitude":	-70,722897	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JOSE PEDRO ALESSANDRI 3430	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,485628	,"Longitude":	-70,599306	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JOSE PEDRO ALESSANDRI 2127. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,474337	,"Longitude":	-70,598792	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	MACUL 2555	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,477933	,"Longitude":	-70,59904	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	VICUÑA MACKENNA 4114	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,491661	,"Longitude":	-70,617414	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. JOSE PEDRO ALESSANDRI 2841  LOCAL1	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,480686	,"Longitude":	-70,599312	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. JOSE PEDRO ALESSANDRI 4105	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,491518	,"Longitude":	-70,599723	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	JOSE PEDRO ALESSANDRI  3354	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,485057	,"Longitude":	-70,599336	,"Stock":	"SI"}
{"Nombre":	EL LIBANO	"Direccion":	EL LIBANO 5162	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,498747	,"Longitude":	-70,592374	,"Stock":	"SI"}
{"Nombre":	FARMASTORE J. RAFAH	"Direccion":	FROILAN ROA 5470	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,503862	,"Longitude":	-70,60101	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	5 DE ABRIL 27	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510502	,"Longitude":	-70,757643	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALBERTO LLONA 1670. INTERIOR MEGASALUD	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,511849	,"Longitude":	-70,755695	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. AMERICO VESPUCIO 1001. MALL ARAUCO MAIPU	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,481847	,"Longitude":	-70,753649	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AMERICO VESPUCIO 399. LOCAL 121. MEGA JOHNSONS MAIPU	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,481149	,"Longitude":	-70,754035	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JORGE ANDRES GUERRA 16190. STRIP CENTER UNIMARC	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,542137	,"Longitude":	-70,771024	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA AMBROSIO O'HIGGINS 1326, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,40551	,"Longitude":	-70,13635	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ALCALDE JOSE LUIS INFANTE LARRAIN 1541	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,560708	,"Longitude":	-70,780705	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO 1001. LOCAL 1029. ARAUCO MAIPU	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,481847	,"Longitude":	-70,753649	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. PAJARITOS 1790. INTERIOR ESPACIO URBANO	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510738	,"Longitude":	-70,757381	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. PAJARITOS 2689. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50288	,"Longitude":	-70,757278	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PAJARITOS 4500. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,481442	,"Longitude":	-70,745228	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	AV. LOS PAJARITOS 2340	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5060179	,"Longitude":	-70,7579657	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ALFREDO SILVA CARVALLO 1415	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,531558	,"Longitude":	-70,775088	,"Stock":	"SI"}
{"Nombre":	ALMENDRA	"Direccion":	LA FARFANA 1696-A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,489442	,"Longitude":	-70,774272	,"Stock":	"SI"}
{"Nombre":	AVANTT	"Direccion":	ALFREDO SILVA CARVALLO 750  - C	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,528134	,"Longitude":	-70,767239	,"Stock":	"NO"}
{"Nombre":	AVANTT	"Direccion":	CALLE LIBERTADOR BERNARDO O’HIGGINS N° 588	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50109	,"Longitude":	-70,7637	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. NUEVA SAN MARTIN 2025	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,524617	,"Longitude":	-70,787233	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	RINCONADA 1900. UNIMARC	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,507479	,"Longitude":	-70,784079	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	SEGUNDA TRANVERSAL 4090	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,488435	,"Longitude":	-70,742558	,"Stock":	"SI"}
{"Nombre":	BERNALES	"Direccion":	AV. LOS PAJARITOS (EX-RAMON FREIRE) 3842	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,489342	,"Longitude":	-70,753128	,"Stock":	"SI"}
{"Nombre":	BLÜMEL	"Direccion":	BAGDAD 877	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,544882	,"Longitude":	-70,768632	,"Stock":	"SI"}
{"Nombre":	APOTHEKE	"Direccion":	EL OLIMPO 1990, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51232	,"Longitude":	-70,775493	,"Stock":	"NO"}
{"Nombre":	CENTRAL	"Direccion":	SEGUNDA TRANSVERSAL 2982  L-5-E	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,501359	,"Longitude":	-70,745498	,"Stock":	"SI"}
{"Nombre":	CERRILLOS	"Direccion":	SIMON BOLIVAR 4435	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,473639	,"Longitude":	-70,722624	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	Avenida Los Pajaritos 2122	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5079754	,"Longitude":	-70,7575915	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	5 DE ABRIL 81	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510502	,"Longitude":	-70,758265	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALFREDO SILVA CARVALLO 1401. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,531915	,"Longitude":	-70,775603	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMERICO VESPUCIO 1001  LOCAL1068	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,481847	,"Longitude":	-70,753649	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO 399  LOCALES 523-524	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,480565	,"Longitude":	-70,754106	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO NORTE 1955. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,471974	,"Longitude":	-70,759642	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CENTRAL 129 (EX 145)	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,513669	,"Longitude":	-70,826522	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	INGENIERO EDUARDO DOMINGUEZ 666. LA FARFANA. STRIP CENTER SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,491272	,"Longitude":	-70,777807	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS PAJARITOS 1920	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,509885	,"Longitude":	-70,757388	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS PAJARITOS 3302. INTERIOR JUMBO	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,496314	,"Longitude":	-70,757549	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS PAJARITOS 2222	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,506799	,"Longitude":	-70,757471	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PARQUE CENTRAL PONIENTE 21  LOTE 1. CIUDAD SATELITE	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,554432	,"Longitude":	-70,795816	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	MONUMENTO N° 1991-1995	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,509247	,"Longitude":	-70,758702	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LOS PAJARITOS  3074, L-6	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,49932	,"Longitude":	-70,757557	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PAJARITOS 1921, LOCAL 3. ESTACION METRO PLAZA MAIPU	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510569	,"Longitude":	-70,757243	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ALBERTO LLONA 1724  L-49. INTERIOR GALERIA	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,511164	,"Longitude":	-70,755733	,"Stock":	"SI"}
{"Nombre":	DEL PARQUE	"Direccion":	PARQUE CENTRAL PONIENTE 747	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,558795	,"Longitude":	-70,789529	,"Stock":	"SI"}
{"Nombre":	ECONOFARMA	"Direccion":	LA SINFONIA 1290. L-12	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,489639	,"Longitude":	-70,766376	,"Stock":	"SI"}
{"Nombre":	EXPRESS	"Direccion":	ALFREDO SILVA CARVALLO 775	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,528159	,"Longitude":	-70,767318	,"Stock":	"NO"}
{"Nombre":	LOS MAQUIS	"Direccion":	LA SINFONIA 1257	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4898	,"Longitude":	-70,766676	,"Stock":	"SI"}
{"Nombre":	MAIPU	"Direccion":	EL HUASO 2471  VILLA LOS ROBLES	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,514635	,"Longitude":	-70,791331	,"Stock":	"NO"}
{"Nombre":	MEBAL	"Direccion":	EL OLIMPO 2107	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510064	,"Longitude":	-70,775509	,"Stock":	"NO"}
{"Nombre":	MEVIC	"Direccion":	EL CONQUISTADOR 795	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,52235	,"Longitude":	-70,796797	,"Stock":	"SI"}
{"Nombre":	MEVIC	"Direccion":	PASAJE NUBIA 16616 VILLA EL ABRAZO	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,542754	,"Longitude":	-70,777843	,"Stock":	"SI"}
{"Nombre":	MI SALUD	"Direccion":	LAS GOLONDRINAS ORIENTE 4182	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,488567	,"Longitude":	-70,738144	,"Stock":	"SI"}
{"Nombre":	PLUSVIDA	"Direccion":	AV. EL OLIMPO 1911  L- A Y B	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,512774	,"Longitude":	-70,775431	,"Stock":	"NO"}
{"Nombre":	PRINCIPAL	"Direccion":	5 DE ABRIL 176.  L-10. EN GALERIA.	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510681	,"Longitude":	-70,759638	,"Stock":	"SI"}
{"Nombre":	PRINCIPAL	"Direccion":	CHACABUCO 50  L-2. INTERIOR GALERIA	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,508982	,"Longitude":	-70,758115	,"Stock":	"NO"}
{"Nombre":	PUDAHUELISIMO	"Direccion":	NUEVA SAN MARTIN 1330	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,524581	,"Longitude":	-70,775423	,"Stock":	"NO"}
{"Nombre":	SAINT GERMAIN	"Direccion":	EL DESCANSO  618  -A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,470066	,"Longitude":	-70,748094	,"Stock":	"SI"}
{"Nombre":	SAINT GERMAIN	"Direccion":	PABLO BURCHARD 11	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,47627	,"Longitude":	-70,741378	,"Stock":	"SI"}
{"Nombre":	VIDA SALUD	"Direccion":	ALBERTO LLONA N° 1560	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,513081	,"Longitude":	-70,755816	,"Stock":	"SI"}
{"Nombre":	SAN FELIPE	"Direccion":	PRIMO DE RIVERA 1493. EKONO	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,492323	,"Longitude":	-70,738309	,"Stock":	"NO"}
{"Nombre":	ECONOFARMA	"Direccion":	DOS NORTE 1373. MAYORISTA 10	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,501216	,"Longitude":	-70,741035	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	LUMEN  3630	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,495531	,"Longitude":	-70,736547	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LOS PAJARITOS (EX-RAMON FREIRE) 1924	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,509863	,"Longitude":	-70,757396	,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	AV. CENTRAL 6008	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,4987115	,"Longitude":	-70,6883654	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PLAZA DE ARMAS 537	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686092	,"Longitude":	-71,21389	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	VICUÑA MACKENNA 153	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,68064	,"Longitude":	-71,208747	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PLAZA DE ARMAS 561	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686111	,"Longitude":	-71,214668	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SERRANO 395 L-4      MALL PLAZA LEYAN	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,684917	,"Longitude":	-71,213814	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SERRANO 501	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686172	,"Longitude":	-71,21389	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SERRANO   388	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,6847282	,"Longitude":	-71,2138318	,"Stock":	"NO"}
{"Nombre":	EKONOFARMA	"Direccion":	PLAZA DE ARMAS 468 L-A	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,685574	,"Longitude":	-71,215179	,"Stock":	"SI"}
{"Nombre":	PRIETO CENTRO	"Direccion":	ORTUZAR 691	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,688137	,"Longitude":	-71,215378	,"Stock":	"SI"}
{"Nombre":	REDONDO	"Direccion":	ORTUZAR   857	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,69083	,"Longitude":	-71,215614	,"Stock":	"SI"}
{"Nombre":	SERRANO	"Direccion":	ANSELMO ALARCÓN 175, EL BOLLENAR	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,5697886	,"Longitude":	-71,2069605	,"Stock":	"NO"}
{"Nombre":	SERRANO	"Direccion":	CONDE DE MANSO   617	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,69146	,"Longitude":	-71,215843	,"Stock":	"SI"}
{"Nombre":	B&S	"Direccion":	VICUÑA MACKENNA 0742	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,681099	,"Longitude":	-71,19368	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PLAZA DE ARMAS 489	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686211	,"Longitude":	-71,213768	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ORTUZAR 548	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686588	,"Longitude":	-71,215347	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SALVADOR 1866	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,450135	,"Longitude":	-70,621558	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	JUAN MOYA MORALES 1310	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,465888	,"Longitude":	-70,588277	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ANTONIO VARAS 2108	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,446473	,"Longitude":	-70,611272	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMPO DE DEPORTE 180	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455188	,"Longitude":	-70,609099	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CHILE -ESPAÑA 597	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,449477	,"Longitude":	-70,597856	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	IRARRAZAVAL 2305. MEGASALUD ÑUÑOA	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453939	,"Longitude":	-70,607203	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	IRARRAZAVAL 4123	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455452	,"Longitude":	-70,586945	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JOSE DOMINGO CAÑAS 1701	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,456271	,"Longitude":	-70,613901	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMPO DE DEPORTES 156	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455027	,"Longitude":	-70,60908	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	EMILIA TELLEZ 5593	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,441491	,"Longitude":	-70,572884	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. GRECIA 245. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455309	,"Longitude":	-70,627108	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA GRECIA 3031	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,464631	,"Longitude":	-70,60006	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. IRARRAZAVAL 2928. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454507	,"Longitude":	-70,600608	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PEDRO DE VALDIVIA 2523	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,445605	,"Longitude":	-70,606138	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PEDRO DE VALDIVIA 3774	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,457269	,"Longitude":	-70,605366	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SIMON BOLIVAR 3756	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448483	,"Longitude":	-70,591257	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SIMON BOLIVAR 4800 L- 115	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448273	,"Longitude":	-70,580555	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	SUCRE 3250	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,447789	,"Longitude":	-70,597547	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	SIMON BOLIVAR 3751	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,44865941	,"Longitude":	-70,59153144	,"Stock":	"NO"}
{"Nombre":	BLANCO	"Direccion":	HAMBURGO 1065	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,444647	,"Longitude":	-70,577197	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ANTONIO VARAS 2280. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448329	,"Longitude":	-70,610647	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COVENTRY 601	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448564	,"Longitude":	-70,580705	,"Stock":	"SI"}
{"Nombre":	FARMANUESTRA	"Direccion":	GRECIA 320. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455765	,"Longitude":	-70,626106	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IRARRAZAVAL 1489. MONSERRAT	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453053	,"Longitude":	-70,615452	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. IRARRAZAVAL 2520	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454087	,"Longitude":	-70,60476	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. IRARRAZAVAL 2768    ESQUINA LYON	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454342	,"Longitude":	-70,602297	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IRARRAZAVAL 3612	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455219	,"Longitude":	-70,593017	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IRARRAZAVAL 4949	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454494	,"Longitude":	-70,579021	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IRARRAZAVAL 5696	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453431	,"Longitude":	-70,571554	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE PEDRO ALESSANDRI 1166. PORTAL ÑUÑOA	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,465302	,"Longitude":	-70,598239	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. JOSE PEDRO ALESSANDRI 331 333	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45816	,"Longitude":	-70,598017	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. OSSA  1220	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,442758	,"Longitude":	-70,572611	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PEDRO DE VALDIVIA 2520	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,445565	,"Longitude":	-70,606112	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO DE VALDIVIA 3601 LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455649	,"Longitude":	-70,605221	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	TOBALABA 4507 LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,434033	,"Longitude":	-70,582342	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA IRARRAZAVAL 024	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,451961	,"Longitude":	-70,630442	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	IRARRAZAVAL 5662	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453527	,"Longitude":	-70,572037	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PEDRO DE VALDIVIA 3376	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453478	,"Longitude":	-70,604792	,"Stock":	"NO"}
{"Nombre":	GALENICA	"Direccion":	IRARRAZAVAL 2661	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45427	,"Longitude":	-70,603641	,"Stock":	"SI"}
{"Nombre":	INSTITUCIONAL	"Direccion":	BROWN NORTE 235. PDI	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,453256	,"Longitude":	-70,591758	,"Stock":	"NO"}
{"Nombre":	PHARMA 93	"Direccion":	EXEQUIEL FERNANDEZ  93	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455528	,"Longitude":	-70,599674	,"Stock":	"NO"}
{"Nombre":	R Y C	"Direccion":	IGNACIO CARRERA PINTO 3777	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,470498	,"Longitude":	-70,591226	,"Stock":	"SI"}
{"Nombre":	REDOXX	"Direccion":	ZAÑARTU 2540	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,472138	,"Longitude":	-70,605781	,"Stock":	"SI"}
{"Nombre":	REDOXX	"Direccion":	OBISPO ORREGO 1015	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,462935	,"Longitude":	-70,620185	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MATTA ORIENTE 301	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454772	,"Longitude":	-70,627526	,"Stock":	"NO"}
{"Nombre":	SANTA GEMITA	"Direccion":	IRARRAZAVAL 2993	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454722	,"Longitude":	-70,599873	,"Stock":	"SI"}
{"Nombre":	SANTA GEMITA	"Direccion":	IRARRAZAVAL 3006	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454762	,"Longitude":	-70,599854	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SUECIA 3071	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448165	,"Longitude":	-70,600672	,"Stock":	"NO"}
{"Nombre":	EL MANZANO	"Direccion":	AV. EL MANZANO   690 F	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,57056	,"Longitude":	-70,805837	,"Stock":	"SI"}
{"Nombre":	LOS MAQUIS	"Direccion":	SEGUNDA AVENIDA 749	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,562008	,"Longitude":	-70,79502	,"Stock":	"SI"}
{"Nombre":	MEVIC	"Direccion":	PRIMERA TRANSVERSAL 2470	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,504348	,"Longitude":	-70,752557	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	CAMINO A MELIPILLA   2436  LOCAL 13	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,569701	,"Longitude":	-70,815772	,"Stock":	"NO"}
{"Nombre":	FARMA-MARKET	"Direccion":	EL MANZANO 285	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,568003	,"Longitude":	-70,808887	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GENERAL BAQUEDANO 890	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,813498	,"Longitude":	-70,743019	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA MIGUEL CAMPINO 66	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,81605	,"Longitude":	-70,74264	,"Stock":	"NO"}
{"Nombre":	PLAZA PAINE	"Direccion":	LA CONCEPCION 264	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,809498	,"Longitude":	-70,738717	,"Stock":	"SI"}
{"Nombre":	CARDENAL CARO	"Direccion":	CENTRAL 6056	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,499456	,"Longitude":	-70,688726	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARLOS VALDOVINOS 2020. L-2. SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,478816	,"Longitude":	-70,663113	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE JOAQUIN PRIETO 5531	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,502505	,"Longitude":	-70,667851	,"Stock":	"NO"}
{"Nombre":	DAVILA	"Direccion":	QUEMCHI 5956	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,503059	,"Longitude":	-70,676747	,"Stock":	"SI"}
{"Nombre":	EXODO	"Direccion":	LO OVALLE 2607	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,507397	,"Longitude":	-70,680191	,"Stock":	"NO"}
{"Nombre":	FARMAMEDDICA	"Direccion":	CERRILLOS 4030	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,481706	,"Longitude":	-70,685762	,"Stock":	"NO"}
{"Nombre":	FARMAVITAL	"Direccion":	CLUB HIPICO  5005	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,495616	,"Longitude":	-70,670473	,"Stock":	"SI"}
{"Nombre":	G Y V NACIONAL	"Direccion":	CERRILLOS 4030	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,481706	,"Longitude":	-70,685762	,"Stock":	"SI"}
{"Nombre":	IDAHUE	"Direccion":	CARLOS VALDOVINOS 2816	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,478489	,"Longitude":	-70,672005	,"Stock":	"SI"}
{"Nombre":	SPLENDID	"Direccion":	AV. CLOTARIO BLEST (EX AV.LA FERIA ) N° 4760	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,490017	,"Longitude":	-70,674475	,"Stock":	"NO"}
{"Nombre":	VILLA SUR	"Direccion":	CLOTARIO BLEST 5435	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,49694	,"Longitude":	-70,677979	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AV. CENTRAL   6398	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,502397	,"Longitude":	-70,690115	,"Stock":	"NO"}
{"Nombre":	LH FARMA	"Direccion":	CLOTARIO BLEST 2615	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,447601	,"Longitude":	-70,658096	,"Stock":	"NO"}
{"Nombre":	FARMA-MARKET	"Direccion":	AV. VICUÑA MACKENNA 1374  LOC. A,B,C,	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,610554	,"Longitude":	-70,873439	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ALCALDE LUIS ARAYA CERECEDA 4237	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,607203	,"Longitude":	-70,899843	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 503. LOCAL A. MONSERRAT	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,606915	,"Longitude":	-70,854744	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 2005. L-2 SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,61071	,"Longitude":	-70,880887	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	21 DE MAYO   4436	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,60872	,"Longitude":	-70,900199	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALCALDE LUIS ARAYA CERECEDA 4341	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,607217	,"Longitude":	-70,899797	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	DOCTOR PRADO TAGLE 01	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,608474	,"Longitude":	-70,899997	,"Stock":	"NO"}
{"Nombre":	MALLOCO	"Direccion":	BALMACEDA 251	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,604735	,"Longitude":	-70,852638	,"Stock":	"SI"}
{"Nombre":	PEÑAFLOR	"Direccion":	21 DE MAYO  4242	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,608146	,"Longitude":	-70,899534	,"Stock":	"SI"}
{"Nombre":	AHORROFARMA	"Direccion":	21 DE MAYO  4075. LOCAL 2 INTERIOR SUPERBODEGA ACUENTA	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,606942	,"Longitude":	-70,897499	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	21 DE MAYO 4555 C,D	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,609133	,"Longitude":	-70,900701	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ANTUPIREN 8340	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,479232	,"Longitude":	-70,545225	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. GRECIA 5532	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,468936	,"Longitude":	-70,575921	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MAR TIRRENO 3349. L-2039	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,486668	,"Longitude":	-70,579823	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO 3100	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,484731	,"Longitude":	-70,579397	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CONSISTORIAL 3349	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,487957	,"Longitude":	-70,54916	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MARIANO SANCHEZ FONTECILLA 12000. INTERIOR JUMBO	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,486444	,"Longitude":	-70,557757	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. TOBALABA 11835	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,484198	,"Longitude":	-70,558365	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	SAN LUIS DE MACUL 5171. VEGAMERCADO	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,506258	,"Longitude":	-70,579184	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO 3100 LIDER	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,485825	,"Longitude":	-70,579606	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. GRECIA 8585, LOCAL B-14	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,475988	,"Longitude":	-70,54338	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SANCHEZ FONTECILLA 12000. INTERIOR JUMBO	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4864	,"Longitude":	-70,557735	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MAR TIRRENO  5449  ROTONDA QUILIN	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,486668	,"Longitude":	-70,579823	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CONSISTORIAL 2701	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,483805	,"Longitude":	-70,547014	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	CONSISTORIAL 1431	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4714531	,"Longitude":	-70,5415139	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. GRECIA 5843	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,469629	,"Longitude":	-70,574566	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. TOBALABA 13949	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,502822	,"Longitude":	-70,561093	,"Stock":	"NO"}
{"Nombre":	EL VALLE	"Direccion":	EL VALLE 6060	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,476053	,"Longitude":	-70,573552	,"Stock":	"NO"}
{"Nombre":	FARMACIAS 24	"Direccion":	AV. LAS TORRES 4591	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,500751	,"Longitude":	-70,585358	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	LAS PARCELAS 9001. INTERIOR UNIMARC	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,472427	,"Longitude":	-70,538437	,"Stock":	"SI"}
{"Nombre":	GENNETIKA	"Direccion":	LAS PARCELAS 8889	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,47234	,"Longitude":	-70,538712	,"Stock":	"SI"}
{"Nombre":	GALLARDO	"Direccion":	SANTA MARIA 2286	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,477724	,"Longitude":	-70,572401	,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	SAN LUIS DE MACUL 6248	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,507497	,"Longitude":	-70,568472	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	TOBALABA 12175	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,487541	,"Longitude":	-70,558636	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CONSISTORIAL  3477, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,489299	,"Longitude":	-70,549871	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	NUEVA PROVIDENCIA 1355	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429187	,"Longitude":	-70,61886	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LOS LEONES 1185	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,430206	,"Longitude":	-70,60277	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "SALCOBRAND"	"Direccion":	MANUEL MONTT 1140	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,438335	,"Longitude":	-70,615679	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	11 DE SEPTIEMBRE 1313	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429516	,"Longitude":	-70,619555	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. ANDRES BELLO 2447. INTERIOR COSTANERA CENTER	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,417669	,"Longitude":	-70,608276	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CARLOS ANTUNEZ 2490	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,426723	,"Longitude":	-70,601793	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	FRANCISCO BILBAO  2489	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,436607	,"Longitude":	-70,599068	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	FRANCISCO BILBAO  3785	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,431701	,"Longitude":	-70,583823	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LA CONCEPCION 135	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,424529	,"Longitude":	-70,615893	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	LOS LEONES 1160	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429951	,"Longitude":	-70,602705	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PEDRO DE VALDIVIA 1885	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43953833	,"Longitude":	-70,60791103	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. PROVIDENCIA 2001	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423571	,"Longitude":	-70,612406	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PROVIDENCIA 2499	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419342	,"Longitude":	-70,604413	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	RANCAGUA 0180	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,440999	,"Longitude":	-70,630386	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	SALVADOR 89	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,434669	,"Longitude":	-70,62618	,"Stock":	"SI"}
{"Nombre":	ARAVIL	"Direccion":	PROVIDENCIA 1773	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,426189	,"Longitude":	-70,614756	,"Stock":	"SI"}
{"Nombre":	ASODI	"Direccion":	RANCAGUA 250	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,440781	,"Longitude":	-70,629562	,"Stock":	"SI"}
{"Nombre":	BIOFORMULA	"Direccion":	GENERAL FLORES 38	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,427717	,"Longitude":	-70,618554	,"Stock":	"NO"}
{"Nombre":	CARMEN	"Direccion":	PEDRO DE VALDIVIA 12	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423555	,"Longitude":	-70,612476	,"Stock":	"SI"}
{"Nombre":	GALFARMA	"Direccion":	SALVADOR 149	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,435256	,"Longitude":	-70,625978	,"Stock":	"NO"}
{"Nombre":	CARMEN	"Direccion":	SALVADOR 702	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,439826	,"Longitude":	-70,624619	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ANDRES BELLO 2447. INTERIOR COSTANERA CENTER	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,417669	,"Longitude":	-70,608274	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BARCELONA 2095	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,425088	,"Longitude":	-70,61072	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BELLAVISTA 415	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,431983	,"Longitude":	-70,62928	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ELIODORO YAÑEZ 1281	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,433335	,"Longitude":	-70,617624	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. FRANCISCO BILBAO  2191	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,437794	,"Longitude":	-70,604202	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LOS CONQUISTADORES 1850  INTERIOR CLINICA INDISA	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,421184	,"Longitude":	-70,617806	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PROVIDENCIA 1310	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,428724	,"Longitude":	-70,620177	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTA BEATRIZ 22	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,427531	,"Longitude":	-70,617328	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PROVIDENCIA 2012	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423414	,"Longitude":	-70,61227	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PROVIDENCIA 2208	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,421677	,"Longitude":	-70,60969	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PROVIDENCIA 2502. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419248	,"Longitude":	-70,604177	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PROVIDENCIA 2594  L-1          LUIS THAYER OJEDA	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,418717	,"Longitude":	-70,602791	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PROVIDENCIA 2699	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,418256	,"Longitude":	-70,60153	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RICARDO LYON 62	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,422469	,"Longitude":	-70,609555	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SALVADOR  42	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,434087	,"Longitude":	-70,626311	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTA ISABEL 865  LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,445095	,"Longitude":	-70,619839	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SEMINARIO 101	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,440891	,"Longitude":	-70,629926	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PROVIDENCIA 1470	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,427663	,"Longitude":	-70,617597	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PROVIDENCIA 2532	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419075	,"Longitude":	-70,60373	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SEMINARIO 97	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,440721	,"Longitude":	-70,629962	,"Stock":	"NO"}
{"Nombre":	CESFAR	"Direccion":	GENERAL HOLLEY 2371	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419407	,"Longitude":	-70,60731	,"Stock":	"NO"}
{"Nombre":	RPFARMA	"Direccion":	PROVIDENCIA 1438	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,427875	,"Longitude":	-70,618122	,"Stock":	"SI"}
{"Nombre":	INGLESA	"Direccion":	LUIS THAYER OJEDA 157	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419908	,"Longitude":	-70,602225	,"Stock":	"SI"}
{"Nombre":	LIDO	"Direccion":	ELIODORO YAÑEZ 2865	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42803	,"Longitude":	-70,593875	,"Stock":	"SI"}
{"Nombre":	MIIFARMACIA	"Direccion":	AVENIDA MANUEL MONTT N° 1556, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,442015	,"Longitude":	-70,614844	,"Stock":	"NO"}
{"Nombre":	PANONIA	"Direccion":	LO BELTRÁN N° 1763	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,38683	,"Longitude":	-70,56657	,"Stock":	"SI"}
{"Nombre":	REDSANA	"Direccion":	AV. SALVADOR 149. INTERIOR EDIFICIO GALENO	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,435558	,"Longitude":	-70,626007	,"Stock":	"NO"}
{"Nombre":	PHARMA 93	"Direccion":	COYANCURA 2221	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423723	,"Longitude":	-70,608705	,"Stock":	"NO"}
{"Nombre":	TAJAMAR	"Direccion":	AVENIDA MANUEL MONTT N° 018, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429029	,"Longitude":	-70,620002	,"Stock":	"SI"}
{"Nombre":	VALDANI D	"Direccion":	PEDRO DE VALDIVIA 925 L-6	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,431623	,"Longitude":	-70,609424	,"Stock":	"SI"}
{"Nombre":	FARS FARMACIA MEDICUS	"Direccion":	ANTONIO VARAS 303, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,430466	,"Longitude":	-70,616951	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PROVIDENCIA 1364	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,428348	,"Longitude":	-70,619257	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PROVIDENCIA 1694	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,426402	,"Longitude":	-70,615652	,"Stock":	"SI"}
{"Nombre":	SAN JORGE	"Direccion":	TEATINOS 642 L-10	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PROVIDENCIA 2203	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,421784	,"Longitude":	-70,609775	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PROVIDENCIA 2295	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,420786	,"Longitude":	-70,608145	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PROVIDENCIA 2593	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,418753	,"Longitude":	-70,60278	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RICARDO LYON 1848	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,437816	,"Longitude":	-70,603767	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SALVADOR 115	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,434875	,"Longitude":	-70,626121	,"Stock":	"NO"}
{"Nombre":	FARMA UNO	"Direccion":	SAN DANIEL   8850-A	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,432032	,"Longitude":	-70,752579	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO DE LAS FLORES 20217. CIUDAD DE LOS VALLES	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,449343	,"Longitude":	-70,848439	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. RAMON FREIRE  7001 A . ESQUINA LAS TORRES	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,467965	,"Longitude":	-70,731704	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	TENIENTE CRUZ 570. MAYORISTA 10	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,454986	,"Longitude":	-70,738717	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	KM 18,5 RUTA 68 - LO AGUIRRE	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,457511	,"Longitude":	-70,823418	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	PASAJE DOÑA VERONICA 227. L - 1	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,462165	,"Longitude":	-70,737344	,"Stock":	"SI"}
{"Nombre":	CATHERINNE	"Direccion":	SERRANO 1183	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,436402	,"Longitude":	-70,767458	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AEROPUERTO C.A.M. BENITEZ. LOCAL C-63	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,396873	,"Longitude":	-70,791846	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ISLA PORTEZUELO 615. LOCAL 1564. SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,453321	,"Longitude":	-70,763032	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	LAGUNA SUR 8438. EKONO.	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,460241	,"Longitude":	-70,75188	,"Stock":	"NO"}
{"Nombre":	EMIFAR	"Direccion":	AV. SAN FRANCISCO 8687	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,436491	,"Longitude":	-70,750583	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	TENIENTE CRUZ 540. INTERIOR SUPERBODEGA ACUENTA	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,458155	,"Longitude":	-70,738266	,"Stock":	"SI"}
{"Nombre":	LAISA	"Direccion":	AUSTRAL 8741. LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,459909	,"Longitude":	-70,761441	,"Stock":	"SI"}
{"Nombre":	LAS ALMENDRAS	"Direccion":	AV. LAGUNA SUR 8383-8387	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,46037	,"Longitude":	-70,750371	,"Stock":	"NO"}
{"Nombre":	FARMASOL	"Direccion":	LAGUNA SUR 7355. ESQUINA PASAJE MALAL 298 B	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,462093	,"Longitude":	-70,741764	,"Stock":	"SI"}
{"Nombre":	ESPOZ	"Direccion":	SAN PABLO 8919 - A	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,443027	,"Longitude":	-70,75863	,"Stock":	"NO"}
{"Nombre":	FARMA OFERTA	"Direccion":	AV. SANTA VICTORIA 1005 - A	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,439105	,"Longitude":	-70,758029	,"Stock":	"NO"}
{"Nombre":	ROMINA	"Direccion":	LA TRAVESIA 7446	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,45713	,"Longitude":	-70,744183	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN PABLO 8315	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,444607	,"Longitude":	-70,740637	,"Stock":	"SI"}
{"Nombre":	ESPOZ	"Direccion":	SAN PABLO 8735	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,444047	,"Longitude":	-70,753544	,"Stock":	"SI"}
{"Nombre":	SAN PIO	"Direccion":	CERRO CARACOL 9526. L - 1	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,437548	,"Longitude":	-70,77114	,"Stock":	"NO"}
{"Nombre":	SERRANO	"Direccion":	SERRANO   1336	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,433966	,"Longitude":	-70,766762	,"Stock":	"SI"}
{"Nombre":	TIERRA DEL FUEGO	"Direccion":	LA ESTRELLA 1361 - D	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,43214	,"Longitude":	-70,750476	,"Stock":	"NO"}
{"Nombre":	TORRES	"Direccion":	LAGUNA SUR 8405 - C	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,460071	,"Longitude":	-70,751806	,"Stock":	"NO"}
{"Nombre":	LAS PRINCESAS	"Direccion":	SAN PABLO 9142 E	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,44197	,"Longitude":	-70,763715	,"Stock":	"SI"}
{"Nombre":	HABANA	"Direccion":	ANGEL PIMENTEL 22	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,589384	,"Longitude":	-70,580445	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CAMILO HENRIQUEZ  4583	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,557954	,"Longitude":	-70,559352	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMILO HENRIQUEZ 3296. L173-177. MALL PLAZA TOBALABA	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,568989	,"Longitude":	-70,554782	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CAMILO HENRIQUEZ 3692. L-BH 140-144. MALL PLAZA TOBALABA	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,569053	,"Longitude":	-70,554921	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CONCHA Y TORO 3779. MEGASALUD PUENTE ALTO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,572866	,"Longitude":	-70,582934	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CONCHA Y TORO 3854. L-1053. JUMBO PUENTE ALTO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,572973	,"Longitude":	-70,582806	,"Stock":	"NO"}
{"Nombre":	MACARENA	"Direccion":	NONATO COO 3923	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,568748	,"Longitude":	-70,572128	,"Stock":	"SI"}
{"Nombre":	HABANA	"Direccion":	NONATO COO   2696 L-6	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,585541	,"Longitude":	-70,568172	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AVENIDA GABRIELA PONIENTE  1700, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,582367	,"Longitude":	-70,601532	,"Stock":	"SI"}
{"Nombre":	LOS TOROS	"Direccion":	LOS TOROS  01087	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,567925	,"Longitude":	-70,570904	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CONCHA Y TORO 494	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,607167	,"Longitude":	-70,57639	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CONCHA Y TORO 1149. L 43-44. INT. LíDER, FRENTE A PLAZUELA , P 37	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,598678	,"Longitude":	-70,577779	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CONCHA Y TORO 1149. L 56-57. ESPACIO URBANO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,598678	,"Longitude":	-70,577779	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CONCHA Y TORO 26. INTERIOR PLAZA PUENTE	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,612042	,"Longitude":	-70,575437	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LOS TOROS 5441. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,566537	,"Longitude":	-70,556883	,"Stock":	"SI"}
{"Nombre":	ALBORADA	"Direccion":	CIRCUNVALACION 01955	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,613616	,"Longitude":	-70,550664	,"Stock":	"SI"}
{"Nombre":	ARES	"Direccion":	AV. CONCHA Y TORO 4115. INTERIOR MAXI AHORRO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,568443	,"Longitude":	-70,583565	,"Stock":	"NO"}
{"Nombre":	BLÜMEL	"Direccion":	LAS NIEVES 02251. INTERIOR SUPERMERCADO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,590008	,"Longitude":	-70,556168	,"Stock":	"SI"}
{"Nombre":	CARMEN	"Direccion":	SANTA DELIA 8937 L-1640	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,609991	,"Longitude":	-70,551392	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CAMILO HENRIQUEZ 3692.  LOCAL A-113. MALL PLAZA TOBALABA	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,569029	,"Longitude":	-70,554929	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CONCHA Y TORO 194	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,609906	,"Longitude":	-70,575866	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CONCHA Y TORO 3854. L 1021.	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,572383	,"Longitude":	-70,583299	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CONCHA Y TORO 3955 LOCALES 7, 8, 9, 10, 11 Y 21 STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,569366	,"Longitude":	-70,583538	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CONCHA Y TORO 398. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,608347	,"Longitude":	-70,576046	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. DIEGO PORTALES 6330  LOCALES 5. SUPERMERCADO LIDER	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,559537	,"Longitude":	-70,551508	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ESTACION PLAZA PTE. ALTO     LINEA 4 DEL METRO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,609517	,"Longitude":	-70,575524	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. NONATO COO 3108	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,581626	,"Longitude":	-70,568794	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTO DOMINGO 67  LOCALES 44-45. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,611657	,"Longitude":	-70,577084	,"Stock":	"SI"}
{"Nombre":	J M	"Direccion":	27 DE SEPTIEMBRE 04353. CASAS VIEJAS	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,608356	,"Longitude":	-70,528214	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. CONCHA Y TORO 15	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,612363	,"Longitude":	-70,575343	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. CONCHA Y TORO 3926-3928	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,56988	,"Longitude":	-70,583879	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GABRIELA ORIENTE 02710. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,574457	,"Longitude":	-70,555361	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	JOSE LUIS COO 0137	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60908	,"Longitude":	-70,574543	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	BALMACEDA 389	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60815	,"Longitude":	-70,575295	,"Stock":	"NO"}
{"Nombre":	EMANUEL	"Direccion":	GABRIELA PONIENTE 393	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,579919	,"Longitude":	-70,586681	,"Stock":	"SI"}
{"Nombre":	ESTRELLA	"Direccion":	AV. CONCHA Y TORO 180	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,610182	,"Longitude":	-70,575802	,"Stock":	"SI"}
{"Nombre":	FARMA-ULLOA	"Direccion":	GABRIELA PONIENTE 835	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,580687	,"Longitude":	-70,592212	,"Stock":	"SI"}
{"Nombre":	FENIX	"Direccion":	SAN PEDRO 848	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,623362	,"Longitude":	-70,58452	,"Stock":	"NO"}
{"Nombre":	GALENICA	"Direccion":	AV. CONCHA Y TORO 157	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,610491	,"Longitude":	-70,575739	,"Stock":	"SI"}
{"Nombre":	LA OLA	"Direccion":	EL SAUCE 01554	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,630905	,"Longitude":	-70,618973	,"Stock":	"NO"}
{"Nombre":	SALUD FARMA	"Direccion":	AV. CONCHA Y TORO 3175	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,580998	,"Longitude":	-70,58118	,"Stock":	"NO"}
{"Nombre":	LOS PALTOS	"Direccion":	RODAS 3267	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,582317	,"Longitude":	-70,6010208	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	EJERCITO LIBERTADOR 01139	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,627987	,"Longitude":	-70,589894	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	AVENIDA MEXICO 1589, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,594228	,"Longitude":	-70,559138	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	LUIS MATTE LARRAIN   1600	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,587918	,"Longitude":	-70,599049	,"Stock":	"NO"}
{"Nombre":	PABLO	"Direccion":	ANGEL PIMENTEL  01312	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,588325	,"Longitude":	-70,564033	,"Stock":	"SI"}
{"Nombre":	PATRICIO	"Direccion":	SUPERINTENDENTE LUIS MORENO PAZ  0214	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,611894	,"Longitude":	-70,551872	,"Stock":	"NO"}
{"Nombre":	PATRICIO	"Direccion":	EL TRANQUE 0642	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,625231	,"Longitude":	-70,609237	,"Stock":	"NO"}
{"Nombre":	ROKI	"Direccion":	JOSE LUIS COO  0129	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,609146	,"Longitude":	-70,574638	,"Stock":	"SI"}
{"Nombre":	ROUBILLARD	"Direccion":	BALMACEDA 267	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60907	,"Longitude":	-70,57569	,"Stock":	"SI"}
{"Nombre":	BLANCA	"Direccion":	GABRIELA PONIENTE 3960. L-2. INTERIOR SUPERBODEGA ACUENTA	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,582199	,"Longitude":	-70,606087	,"Stock":	"SI"}
{"Nombre":	VALHFARM	"Direccion":	DIAGONAL ORIENTE N° 1921	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,44551	,"Longitude":	-70,607655	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CONCHA Y TORO 242	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,609616	,"Longitude":	-70,575918	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JUAN DE DIOS MALEBRAN  1750 L-5  CIUDAD  DEL SOL	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,595224	,"Longitude":	-70,590104	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	O'HIGGINS 358. LOCAL 12	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,367345	,"Longitude":	-70,730949	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANUEL ANTONIO MATTA 900. L-4A Y 5A. INTERIOR SUPERMERCADO	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,366789	,"Longitude":	-70,720092	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	O'HIGGINS 314. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,35618	,"Longitude":	-70,729107	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LAS TORRES   450	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,38230577	,"Longitude":	-70,73004489	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. MANUEL ANTONIO MATTA   1231	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,366843	,"Longitude":	-70,713917	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	JOSE FRANCISCO VERGARA 199	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,367224	,"Longitude":	-70,734052	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA BERNARDO O’HIGGINS N°581 LOCAL 03-04, MALL ARAUCO QUILICURA	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,34872	,"Longitude":	-70,73017	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	O'HIGGINS 358.  L-18. PATIO QUILICURA	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,355561	,"Longitude":	-70,729102	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. O'HIGGINS   99	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,362901	,"Longitude":	-70,729855	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	JOSE FRANCISCO VERGARA 198	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,367146	,"Longitude":	-70,734183	,"Stock":	"SI"}
{"Nombre":	FARMAX	"Direccion":	JOSE FRANCISCO VERGARA   190	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,367148	,"Longitude":	-70,734184	,"Stock":	"SI"}
{"Nombre":	HELIFARMA	"Direccion":	AV. SAN LUIS 405	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3652095	,"Longitude":	-70,7471012	,"Stock":	"NO"}
{"Nombre":	REAL	"Direccion":	MANUEL ANTONIO MATTA 528. INERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,365681	,"Longitude":	-70,729257	,"Stock":	"SI"}
{"Nombre":	NUEVA REAL	"Direccion":	O'HIGGINS 276 LOCAL A	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,358277	,"Longitude":	-70,729319	,"Stock":	"NO"}
{"Nombre":	FARMAVIDA	"Direccion":	AV. SANTA LUISA   226 L-B	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,359495	,"Longitude":	-70,736804	,"Stock":	"NO"}
{"Nombre":	SCANDIC	"Direccion":	AV. MANUEL ANTONIO MATTA   0355	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,361861	,"Longitude":	-70,744786	,"Stock":	"SI"}
{"Nombre":	VECINA SANTA LAURA	"Direccion":	SANTA LAURA  903	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,353151	,"Longitude":	-70,750601	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RAIMUNDO ROMO   393	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,367883	,"Longitude":	-70,732212	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. WALKER MARTINEZ 1642. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,430501	,"Longitude":	-70,692356	,"Stock":	"NO"}
{"Nombre":	EMIFAR	"Direccion":	AV. CARRASCAL 5931	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,416474	,"Longitude":	-70,711044	,"Stock":	"SI"}
{"Nombre":	MYPHARMA	"Direccion":	AVENIDA SAN PABLO 4745	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,439481	,"Longitude":	-70,699922	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN PABLO 4898. INTERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,440224	,"Longitude":	-70,70243	,"Stock":	"NO"}
{"Nombre":	ESPOZ	"Direccion":	AV. CARRASCAL   4496	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,422404	,"Longitude":	-70,695852	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	AV. CARRASCAL 4436. INTERIOR EKONO	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,422899	,"Longitude":	-70,694128	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	AV. CARRASCAL 6001. INTERIOR SUPERBODEGA ACUENTA	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4164	,"Longitude":	-70,711824	,"Stock":	"SI"}
{"Nombre":	BARROSO	"Direccion":	SALVADOR GUTIERREZ   6097	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,421695	,"Longitude":	-70,717868	,"Stock":	"NO"}
{"Nombre":	MACARENA	"Direccion":	SALVADOR GUTIERREZ   5769	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,42251	,"Longitude":	-70,713359	,"Stock":	"SI"}
{"Nombre":	MENDOZA	"Direccion":	AV. CARRASCAL   4360	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,423105	,"Longitude":	-70,69258	,"Stock":	"NO"}
{"Nombre":	MEVIC	"Direccion":	PADRE LORENZO EITING   5807	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,428854	,"Longitude":	-70,715467	,"Stock":	"NO"}
{"Nombre":	MYPHARMA	"Direccion":	MARÍA ROZAS VELÁSQUEZ 1051 (EX LAS REJAS)	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,441632	,"Longitude":	-70,707257	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	RECOLETA 3501. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,393881	,"Longitude":	-70,642527	,"Stock":	"SI"}
{"Nombre":	B P M	"Direccion":	ZAPADORES 576	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,391151	,"Longitude":	-70,641205	,"Stock":	"SI"}
{"Nombre":	BICENTENARIO	"Direccion":	AV. RECOLETA 3308	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,395727	,"Longitude":	-70,642694	,"Stock":	"NO"}
{"Nombre":	BICENTENARIO	"Direccion":	AV. ZAPADORES 1062	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,387485	,"Longitude":	-70,649775	,"Stock":	"SI"}
{"Nombre":	BICENTENARIO	"Direccion":	AV. ZAPADORES 525	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,391281	,"Longitude":	-70,639252	,"Stock":	"NO"}
{"Nombre":	CRUZ DEL NORTE	"Direccion":	AV. RECOLETA   4006 - C	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,388507	,"Longitude":	-70,642304	,"Stock":	"NO"}
{"Nombre":	FARMARKET	"Direccion":	AV. EL SALTO 2506. INTERIOR MAYORISTA 10	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,403864	,"Longitude":	-70,631957	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RECOLETA 2299 A	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,405722	,"Longitude":	-70,643143	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA RECOLETA 2746, LOCAL 15 STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,402695	,"Longitude":	-70,643003	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. RECOLETA 320. LOCAL 400. INTERIOR RECOLETA CENTER	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,429534	,"Longitude":	-70,647091	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PERU 805-831 L-A	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,423839	,"Longitude":	-70,63992	,"Stock":	"SI"}
{"Nombre":	AGUSTIN	"Direccion":	ARTESANOS  645	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33431624	,"Longitude":	-70648996	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA RECOLETA 323 L-42	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,429292	,"Longitude":	-70,646867	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. RECOLETA 2305	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,405557	,"Longitude":	-70,643163	,"Stock":	"SI"}
{"Nombre":	FARMACUBA	"Direccion":	BUENOS AIRES 415	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,427016	,"Longitude":	-70,643651	,"Stock":	"SI"}
{"Nombre":	RP FARMA	"Direccion":	AVENIDA RECOLETA 3646	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,392179	,"Longitude":	-70,642522	,"Stock":	"SI"}
{"Nombre":	GANDARA	"Direccion":	PRINCIPAL IGNACIO CARRERA PINTO 670	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,381035	,"Longitude":	-70,647114	,"Stock":	"NO"}
{"Nombre":	LA BOTICA CUBANA	"Direccion":	DARDIGNAC  537	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,43188	,"Longitude":	-70,646897	,"Stock":	"SI"}
{"Nombre":	LA BOTICA CUBANA	"Direccion":	AV. RECOLETA 899	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,422004	,"Longitude":	-70,644768	,"Stock":	"NO"}
{"Nombre":	MARSIL	"Direccion":	ANTONIA LOPEZ DE BELLO   635	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,431012	,"Longitude":	-70,648316	,"Stock":	"NO"}
{"Nombre":	MARSIL	"Direccion":	ARTESANOS  865	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,431213	,"Longitude":	-70,651344	,"Stock":	"SI"}
{"Nombre":	OCHOA	"Direccion":	AVENIDA EL SALTO 2689, EX 2691 A	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,402302	,"Longitude":	-70,630699	,"Stock":	"SI"}
{"Nombre":	EL SALTO	"Direccion":	AV. EL SALTO 1875. L-3	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,410583	,"Longitude":	-70,636818	,"Stock":	"SI"}
{"Nombre":	VITALE	"Direccion":	AV. RECOLETA 624	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,424771	,"Longitude":	-70,645658	,"Stock":	"NO"}
{"Nombre":	SANTA TERESITA	"Direccion":	AV. ZAPADORES 608	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,390746	,"Longitude":	-70,64278	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	Pasaje Santa María 3305	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-29,936595	,"Longitude":	-71,2404205	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. DOMINGO SANTA MARIA 4120 L - 1. INTERIOR MONSERRAT	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,405203	,"Longitude":	-70,704613	,"Stock":	"NO"}
{"Nombre":	CARLA	"Direccion":	MANUEL RODRIGUEZ 1522	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,400796	,"Longitude":	-70,721388	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. DOMINGO SANTA MARIA 3962. INTERIOR SANTA ISABEL	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,406582	,"Longitude":	-70,700875	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. DOMINGO SANTA MARIA 4112. INTERIOR MONTSERRAT	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,405687	,"Longitude":	-70,704351	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. DOMINGO SANTA MARIA 3795	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,407449	,"Longitude":	-70,69781	,"Stock":	"NO"}
{"Nombre":	IRIS	"Direccion":	CAUPOLICAN 1520	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,402086	,"Longitude":	-70,702024	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	AVENIDA BRASIL 7085, LOCALES 1, 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,400438	,"Longitude":	-70,744682	,"Stock":	"NO"}
{"Nombre":	DONDE'L LORITO	"Direccion":	AV. VICUÑA MACKENNA 998. INTERIOR SUPERBODEGA ACUENTA	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,409302	,"Longitude":	-70,746696	,"Stock":	"NO"}
{"Nombre":	TIERRA DEL FUEGO	"Direccion":	CONDELL 1307	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,40632	,"Longitude":	-70,727722	,"Stock":	"SI"}
{"Nombre":	VECINA	"Direccion":	BRASIL 6980-F	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,400637	,"Longitude":	-70,743166	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BALMACEDA 4168	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,404343	,"Longitude":	-70,705514	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ARTURO PRAT 573 575	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,592758	,"Longitude":	-70,704956	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	EYZAGUIRRE 599	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,594272	,"Longitude":	-70,705896	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PRESIDENTE JORGE ALESSANDRI 20040	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,630736	,"Longitude":	-70,707929	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PRESIDENTE JORGE ALESSANDRI 20040. MALL PLAZA SUR BOULEVARD	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,630736	,"Longitude":	-70,707929	,"Stock":	"NO"}
{"Nombre":	NETFARMA	"Direccion":	GENERAL URRUTIA 378. LOCAL G	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,61646	,"Longitude":	-70,704634	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ARTURO PRAT 589	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,592704	,"Longitude":	-70,70516	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SAN JOSE 69. INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,597239	,"Longitude":	-70,699727	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	PADRE HURTADO 13694. UNIMARC	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,587471	,"Longitude":	-70,678018	,"Stock":	"NO"}
{"Nombre":	COMUNITARIA	"Direccion":	O'HIGGINS 35	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,593117	,"Longitude":	-70,696953	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ARTURO PRAT 599	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59272	,"Longitude":	-70,705239	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EYZAGUIRRE 307	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,590117	,"Longitude":	-70,704405	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EYZAGUIRRE 574	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,593808	,"Longitude":	-70,705735	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PRESIDENTE JORGE ALESSANDRI 20040. MALL PLAZA SUR	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,630736	,"Longitude":	-70,707929	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR  BERNARDO O'HIGGINS 572	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5916	,"Longitude":	-70,704514	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	EYZAGUIRRE  571	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,593808	,"Longitude":	-70,705703	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	EYZAGUIRRE  646	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,579	,"Longitude":	-70,70039	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Libertador Bernardo O'Higgins 498	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5918855	,"Longitude":	-70,703638	,"Stock":	"NO"}
{"Nombre":	FARMAOFERTA	"Direccion":	EYZAGUIRRE 928	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,599058	,"Longitude":	-70,709647	,"Stock":	"NO"}
{"Nombre":	TU AHORRO	"Direccion":	SAN JOSÉ 387	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59661	,"Longitude":	-70,70375	,"Stock":	"SI"}
{"Nombre":	FARMAVECINA	"Direccion":	SANTA MARTA 518 A	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,587015	,"Longitude":	-70,687668	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	EYZAGUIRRE  523	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59314	,"Longitude":	-70,705474	,"Stock":	"SI"}
{"Nombre":	HERRERA	"Direccion":	FROILáN ROA 580, LOCAL 12	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5151799	,"Longitude":	-70,599065	,"Stock":	"NO"}
{"Nombre":	LAS ALMENDRAS	"Direccion":	ABEL REYES INOSTROZA 8804	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,669163	,"Longitude":	-70,742432	,"Stock":	"SI"}
{"Nombre":	LATORRE	"Direccion":	OCHAGAVIA 13021	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,570131	,"Longitude":	-70,699538	,"Stock":	"NO"}
{"Nombre":	LOS ALMENDROS	"Direccion":	O'HIGGINS 9	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,592994	,"Longitude":	-70,697068	,"Stock":	"NO"}
{"Nombre":	LOS OLIVOS	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 13631	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,579037	,"Longitude":	-70,694487	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	PORTALES ORIENTE 1102 L-A	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,606113	,"Longitude":	-70,694624	,"Stock":	"SI"}
{"Nombre":	PETIT-KORNFELD	"Direccion":	VICTORIA 521	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,593754	,"Longitude":	-70,7028	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	LO OVALLE 347 A	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,517887	,"Longitude":	-70,629028	,"Stock":	"NO"}
{"Nombre":	DAMYFAR	"Direccion":	RIO PETORCA 18. METRO CAMINO AGRICOLA	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,49175	,"Longitude":	-70,617843	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SANTA ROSA 5320, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,506374	,"Longitude":	-70,638138	,"Stock":	"NO"}
{"Nombre":	CONTIGO	"Direccion":	SEBASTOPOL 406	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,516587	,"Longitude":	-70,632648	,"Stock":	"NO"}
{"Nombre":	FARMASTORE J. RAFAH	"Direccion":	PINTOR CICARELLI   492	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,476614	,"Longitude":	-70,634325	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	VECINAL 5351	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,505712	,"Longitude":	-70,623572	,"Stock":	"SI"}
{"Nombre":	ULTRA SOLIDARIA	"Direccion":	AMUNATEGUI 841	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,433885	,"Longitude":	-70,657366	,"Stock":	"SI"}
{"Nombre":	LA FLORIDA	"Direccion":	DEPARTAMENTAL 30	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,508212	,"Longitude":	-70,61467	,"Stock":	"NO"}
{"Nombre":	THERAPIA IV	"Direccion":	IGNACIO VALDIVIESO 2361	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,473563	,"Longitude":	-70,626895	,"Stock":	"SI"}
{"Nombre":	SAN ANDRES	"Direccion":	COMERCIO 19672	"Region":	METROPOLITANA	,"Comuna":	SAN JOSE DE MAIPO	,"Latitude":	-33,639899	,"Longitude":	-70,352269	,"Stock":	"NO"}
{"Nombre":	SAN JOSE	"Direccion":	COMERCIO   19823	"Region":	METROPOLITANA	,"Comuna":	SAN JOSE DE MAIPO	,"Latitude":	-33,641654	,"Longitude":	-70,352481	,"Stock":	"NO"}
{"Nombre":	FARMAPRECIO	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5101	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,500371	,"Longitude":	-70,654082	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4004	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,491357	,"Longitude":	-70,650793	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5728	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,506356	,"Longitude":	-70,655614	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6150. L-1008 Y 1076	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,512247	,"Longitude":	-70,657293	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4293 PARADERO 9	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,493283	,"Longitude":	-70,652121	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5001 PARADERO 11	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,499427	,"Longitude":	-70,653833	,"Stock":	"NO"}
{"Nombre":	ALEMANA	"Direccion":	LEONIDAS VIAL 1103	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,494985	,"Longitude":	-70,652631	,"Stock":	"NO"}
{"Nombre":	CARLY	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5417	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,502822	,"Longitude":	-70,654847	,"Stock":	"SI"}
{"Nombre":	CARYVON	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4558	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,495502	,"Longitude":	-70,652532	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EL LLANO SUBERCASEAUX 3519  LOCAL 1074, PORTAL EL LLANO	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,48597	,"Longitude":	-70,650719	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5731	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50653	,"Longitude":	-70,655888	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6001  1 Y 2	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,509787	,"Longitude":	-70,656783	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5485	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,504008	,"Longitude":	-70,655161	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4501	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,495043	,"Longitude":	-70,652588	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	VARAS MENA   788	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,510475	,"Longitude":	-70,649316	,"Stock":	"SI"}
{"Nombre":	LO VIAL	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4768	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,497369	,"Longitude":	-70,65305	,"Stock":	"SI"}
{"Nombre":	SAN JOSE	"Direccion":	SAN IGNACIO 4204	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,491061	,"Longitude":	-70,657234	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA   5940, LOCALES U Y T	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,509031	,"Longitude":	-70,656352	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA  5617	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,505736	,"Longitude":	-70,655635	,"Stock":	"SI"}
{"Nombre":	ALEJANDRA	"Direccion":	AV. SANTA ROSA 10489	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,557758	,"Longitude":	-70,631279	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	AV. SANTA ROSA 8049	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,533632	,"Longitude":	-70,634773	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SANTA ROSA 9233  LOCAL 1    LIDER	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,545141	,"Longitude":	-70,634109	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	AVENIDA SANTA ROSA 8507	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,537941	,"Longitude":	-70,63472	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA SANTA ROSA 8091	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,533973	,"Longitude":	-70,634794	,"Stock":	"SI"}
{"Nombre":	FARMAVITAL	"Direccion":	ELIAS FERNANDEZ ALBANO  8105	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,53221	,"Longitude":	-70,647176	,"Stock":	"NO"}
{"Nombre":	Saludfarma	"Direccion":	Avenida SANTA ROSA 8097 - A	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,533932	,"Longitude":	-70,634776	,"Stock":	"SI"}
{"Nombre":	SUR	"Direccion":	SAN FRANCISCO  9855	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,550088	,"Longitude":	-70,653216	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COMPAÑIA DE JESUS 1214. LOCALES 102 Y 103.	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438783	,"Longitude":	-70,654192	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ESTADO 54	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442404	,"Longitude":	-70,64912	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	HUERFANOS 902	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439508	,"Longitude":	-70,649606	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1395	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444743	,"Longitude":	-70,655576	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 779	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44298	,"Longitude":	-70,647425	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 965	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,443546	,"Longitude":	-70,649924	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PASEO "AHUMADA" 101	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,441919	,"Longitude":	-70,650647	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PASEO "AHUMADA" 389	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438652	,"Longitude":	-70,651106	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PASEO PUENTE 666 LOCAL 02	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43515	,"Longitude":	-70,651572	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PASEO PUENTE 689	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43517	,"Longitude":	-70,651481	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PORTAL BULNES 405	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438342	,"Longitude":	-70,649705	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PORTAL BULNES 445	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43778	,"Longitude":	-70,649807	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAN FRANCISCO 521	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,450905	,"Longitude":	-70,646866	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAN MARTIN 30. CENTRO MEDICO AVANSALUD	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444692	,"Longitude":	-70,657432	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	SAN ANTONIO 785	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434315	,"Longitude":	-70,648925	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	TEATINOS 316	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439741	,"Longitude":	-70,655234	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	TOESCA 1844 1882  LOCAL 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,453286	,"Longitude":	-70,661319	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ESTADO 234	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440242	,"Longitude":	-70,649445	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	NATANIEL COX 620	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,453223	,"Longitude":	-70,652669	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	PORTUGAL 480	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448018	,"Longitude":	-70,635315	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	TEATINOS 4	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444376	,"Longitude":	-70,654233	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PASEO "AHUMADA" 226	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440397	,"Longitude":	-70,650848	,"Stock":	"NO"}
{"Nombre":	ALMAGRO	"Direccion":	SAN DIEGO 540	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,452209	,"Longitude":	-70,650317	,"Stock":	"SI"}
{"Nombre":	ARAUCO	"Direccion":	ARAUCO 1055	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472055	,"Longitude":	-70,6476	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	Bandera 845, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4338878	,"Longitude":	-70,653042	,"Stock":	"SI"}
{"Nombre":	FRANCESA	"Direccion":	SAN PABLO 2090	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434817	,"Longitude":	-70,666167	,"Stock":	"NO"}
{"Nombre":	JARDIN	"Direccion":	SAN PABLO 2259	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434891	,"Longitude":	-70,66833	,"Stock":	"SI"}
{"Nombre":	Toesca	"Direccion":	TOESCA 2008	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,453686	,"Longitude":	-70,66313	,"Stock":	"NO"}
{"Nombre":	BULFOR	"Direccion":	COQUIMBO 35	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45322	,"Longitude":	-70,631027	,"Stock":	"NO"}
{"Nombre":	C.A.	"Direccion":	SAN DIEGO 2068	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472874	,"Longitude":	-70,64833	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SAN PABLO 2302	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434942	,"Longitude":	-70,669063	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	10 DE JULIO HUAMACHUCO 1625	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,454199	,"Longitude":	-70,657393	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALMIRANTE GOTUZZO  92	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442601	,"Longitude":	-70,655424	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMUNATEGUI 94-96	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442615	,"Longitude":	-70,656071	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BANDERA 313	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439754	,"Longitude":	-70,652326	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COMPAÑIA DE JESUS 2304 2308  LOCAL 5-6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440305	,"Longitude":	-70,668658	,"Stock":	"NO"}
{"Nombre":	CARMEN	"Direccion":	EJERCITO LIBERTADOR 303	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,450824	,"Longitude":	-70,660718	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ESTADO 234, 236, 238	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440198	,"Longitude":	-70,649679	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ESTADO 397	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438418	,"Longitude":	-70,649678	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Campbell 3090	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4518218	,"Longitude":	-70,6775422	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	HUERFANOS 1201	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439884	,"Longitude":	-70,653694	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	HUERFANOS 806	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439374	,"Longitude":	-70,648249	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 1461 LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444976	,"Longitude":	-70,656521	,"Stock":	"NO"}
{"Nombre":	FARMABIZA	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 1516	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,445856	,"Longitude":	-70,657296	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 2295, OFICINA 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,447494	,"Longitude":	-70,667542	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 658  LOCAL 8	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442798	,"Longitude":	-70,645669	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LIRA 49	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44261	,"Longitude":	-70,641265	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MARCOLETA 377	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4423637	,"Longitude":	-70,6406479	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MATUCANA 775	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43624	,"Longitude":	-70,680221	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MONJITAS 801 ESQUINA SAN ANTONIO	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437024	,"Longitude":	-70,648573	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO "AHUMADA" 127	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,441039	,"Longitude":	-70,650571	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO "AHUMADA" 201	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440775	,"Longitude":	-70,650794	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO "AHUMADA" 298	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439627	,"Longitude":	-70,65095	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO "AHUMADA" 347	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439101	,"Longitude":	-70,651027	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO BULNES  216 LOCALES 1,2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448828	,"Longitude":	-70,65269	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PORTUGAL 175	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444562	,"Longitude":	-70,636873	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PORTUGAL 481- 497	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448138	,"Longitude":	-70,635397	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RONDIZZONI 1650	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,470108	,"Longitude":	-70,656666	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN DIEGO 2093	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,473182	,"Longitude":	-70,648356	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN MARTIN 405	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439123	,"Longitude":	-70,658111	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN PABLO 2398	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435005	,"Longitude":	-70,670935	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	TEATINOS 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444325	,"Longitude":	-70,654243	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.VICUÑA MACKENNA 699	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451871	,"Longitude":	-70,631019	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO "AHUMADA" 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,443532	,"Longitude":	-70,65037	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO PUENTE 598	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435902	,"Longitude":	-70,652175	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PASEO PUENTE 894	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43359	,"Longitude":	-70,651714	,"Stock":	"SI"}
{"Nombre":	RENACER	"Direccion":	SAN PABLO 2676	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435076	,"Longitude":	-70,673595	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALMIRANTE LATORRE 310	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451659	,"Longitude":	-70,664505	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN DIEGO 1102	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,459652	,"Longitude":	-70,649083	,"Stock":	"SI"}
{"Nombre":	DAMYFAR	"Direccion":	SAN DIEGO 656	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,453532	,"Longitude":	-70,650089	,"Stock":	"NO"}
{"Nombre":	DANIELA	"Direccion":	PORTUGAL 16	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440547	,"Longitude":	-70,640044	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ARTURO PRAT 62	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,445336	,"Longitude":	-70,650068	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	BANDERA 602	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436267	,"Longitude":	-70,652806	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	BANDERA 86	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442275	,"Longitude":	-70,651929	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	CATEDRAL 2297	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439117	,"Longitude":	-70,668408	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1396, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,445318	,"Longitude":	-70,655397	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	MIRAFLORES 384	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438143	,"Longitude":	-70,645596	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN ANTONIO 248	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439945	,"Longitude":	-70,648088	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN DIEGO 2090	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,473156	,"Longitude":	-70,648319	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	SAN PABLO 2798	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435148	,"Longitude":	-70,674663	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. SANTA ROSA   2085	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472753	,"Longitude":	-70,642096	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SANTA ROSA 59	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44402	,"Longitude":	-70,645905	,"Stock":	"NO"}
{"Nombre":	EL GATO	"Direccion":	SAN ALFONSO 154. LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,452502	,"Longitude":	-70,676273	,"Stock":	"SI"}
{"Nombre":	FARMA REBAJAS	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 980	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,443911	,"Longitude":	-70,650349	,"Stock":	"NO"}
{"Nombre":	FARMAVIP	"Direccion":	BASCUÑAN GUERRERO 1599	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,468318	,"Longitude":	-70,67168	,"Stock":	"NO"}
{"Nombre":	SAN ANTONIO	"Direccion":	SAN ANTONIO 575	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436187	,"Longitude":	-70,648659	,"Stock":	"SI"}
{"Nombre":	FARMAMEDICAL	"Direccion":	FRANKLIN 1010	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,473205	,"Longitude":	-70,646771	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	SAN ANTONIO 380	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438483	,"Longitude":	-70,648308	,"Stock":	"SI"}
{"Nombre":	GALLERY	"Direccion":	AMUNATEGUI 339	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439745	,"Longitude":	-70,656618	,"Stock":	"NO"}
{"Nombre":	GALLERY	"Direccion":	HUERFANOS 555	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439056	,"Longitude":	-70,645121	,"Stock":	"SI"}
{"Nombre":	LA BOTICA  "SALCOBRAND"	"Direccion":	HUERFANOS 1199	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439907	,"Longitude":	-70,653656	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	MERCED 529	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437821	,"Longitude":	-70,644655	,"Stock":	"NO"}
{"Nombre":	FARMA + SALUD	"Direccion":	JOSÉ FRANCISCO VERGARA 409, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,368978	,"Longitude":	-70,73123	,"Stock":	"SI"}
{"Nombre":	MAGISTRALES	"Direccion":	PORVENIR 353	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,455568	,"Longitude":	-70,635285	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	MERCED 722	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438127	,"Longitude":	-70,64739	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	PORTUGAL 134	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,443653	,"Longitude":	-70,637373	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	21 DE MAYO 572	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436375	,"Longitude":	-70,650014	,"Stock":	"SI"}
{"Nombre":	NASER	"Direccion":	MEIGGS 34	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451113	,"Longitude":	-70,677267	,"Stock":	"NO"}
{"Nombre":	NOBEL	"Direccion":	AV. MANUEL MATTA  696	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45845	,"Longitude":	-70,643207	,"Stock":	"NO"}
{"Nombre":	NOVASALUD.COM	"Direccion":	SAN MARTIN 25	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444566	,"Longitude":	-70,657417	,"Stock":	"SI"}
{"Nombre":	MAVI	"Direccion":	SAN DIEGO 2021	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472144	,"Longitude":	-70,648422	,"Stock":	"SI"}
{"Nombre":	OCHOA	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 2281	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448076	,"Longitude":	-70,668078	,"Stock":	"SI"}
{"Nombre":	OMARI	"Direccion":	SAN ALFONSO 136	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,452377	,"Longitude":	-70,6763	,"Stock":	"NO"}
{"Nombre":	OTERO	"Direccion":	RICARDO CUMMING 85	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444331	,"Longitude":	-70,667775	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	SAN FRANCISCO 60	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444549	,"Longitude":	-70,647123	,"Stock":	"NO"}
{"Nombre":	PUNTO AHORRO	"Direccion":	SAN ANTONIO 437	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43778	,"Longitude":	-70,648389	,"Stock":	"NO"}
{"Nombre":	PHARMA 93	"Direccion":	SAN ANTONIO 65. LOCAL 105 C	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442127	,"Longitude":	-70,647777	,"Stock":	"SI"}
{"Nombre":	PICAGALLO	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 2546	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449163	,"Longitude":	-70,671954	,"Stock":	"SI"}
{"Nombre":	RECCIUS	"Direccion":	SAN ANTONIO 229	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439983	,"Longitude":	-70,648078	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	AGUSTINAS 2299	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442523	,"Longitude":	-70,667848	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	RICARDO CUMMING 968	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,433214	,"Longitude":	-70,669173	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN PABLO 984	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434257	,"Longitude":	-70,651607	,"Stock":	"NO"}
{"Nombre":	S.O.S	"Direccion":	SAN MARTIN 505	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438091	,"Longitude":	-70,658229	,"Stock":	"NO"}
{"Nombre":	OMARI	"Direccion":	SAN ALFONSO 9	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,450546	,"Longitude":	-70,676745	,"Stock":	"SI"}
{"Nombre":	SANTA GEMITA	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1138	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444487	,"Longitude":	-70,652109	,"Stock":	"SI"}
{"Nombre":	SANTA GEMITA	"Direccion":	PORTUGAL 44	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44129	,"Longitude":	-70,639325	,"Stock":	"SI"}
{"Nombre":	SANTIAGO	"Direccion":	ARTURO PRAT 901	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,456598	,"Longitude":	-70,647779	,"Stock":	"NO"}
{"Nombre":	SANTO THOMAS	"Direccion":	CONFERENCIA 1401	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,466479	,"Longitude":	-70,674323	,"Stock":	"SI"}
{"Nombre":	Multilab	"Direccion":	ESPERANZA 15	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448416	,"Longitude":	-70,674566	,"Stock":	"NO"}
{"Nombre":	SIERRA BELLA	"Direccion":	SIERRA BELLA 1499	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,464062	,"Longitude":	-70,635162	,"Stock":	"NO"}
{"Nombre":	VALDIVIESO	"Direccion":	CATEDRAL 1787	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438506	,"Longitude":	-70,662218	,"Stock":	"SI"}
{"Nombre":	VANIA	"Direccion":	MIRAFLORES 498	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436791	,"Longitude":	-70,645765	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BRASIL 303	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,441039	,"Longitude":	-70,664933	,"Stock":	"SI"}
{"Nombre":	DEL BARRIO	"Direccion":	ROBERTO ESPINOZA 1404	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,46408	,"Longitude":	-70,651942	,"Stock":	"NO"}
{"Nombre":	NUEVA BOGOTA	"Direccion":	LIRA 1784	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,467902	,"Longitude":	-70,633326	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. BERNARDO O'HIGGINS 1101	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,664012	,"Longitude":	-70,929075	,"Stock":	"NO"}
{"Nombre":	SAN PATRICIO	"Direccion":	CAMINO A MELIPILLA 16850. STRIP CENTER UNIMARC	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,543478	,"Longitude":	-70,780365	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BERNARDO O'HIGGINS 807. EXTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,662449	,"Longitude":	-70,925036	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. BERNARDO O'HIGGINS 200, LOCAL 107	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,65989785	,"Longitude":	-70,91833523	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. BERNARDO O'HIGGINS 1132	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,663994	,"Longitude":	-70,928719	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. BERNARDO O'HIGGINS 1092.  L 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,663947	,"Longitude":	-70,92897	,"Stock":	"NO"}
{"Nombre":	MI FARMACIA	"Direccion":	AV. BERNARDO O'HIGGINS 1092 B	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,663996	,"Longitude":	-70,92897	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA BERNARDO O'HIGGINS 1085	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,663898	,"Longitude":	-70,928893	,"Stock":	"NO"}
{"Nombre":	EL SOL	"Direccion":	FRANCISCO CHACON   851	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,664959	,"Longitude":	-70,928483	,"Stock":	"NO"}
{"Nombre":	FARMA-MARKET	"Direccion":	BALMACEDA 1147	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,665333	,"Longitude":	-70,922989	,"Stock":	"SI"}
{"Nombre":	MOLYFARMA	"Direccion":	CAMINO A MELIPILLA 4960, L-2	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,580297	,"Longitude":	-70,82755	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	BERNARDO O'HIGGINS   1010	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,66351	,"Longitude":	-70,927703	,"Stock":	"SI"}
{"Nombre":	TALAGANTE	"Direccion":	FRANCISCO CHACON   702	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,663086	,"Longitude":	-70,929585	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	ARTURO PRAT 234	"Region":	METROPOLITANA	,"Comuna":	TIL-TIL	,"Latitude":	-33,08462	,"Longitude":	-70,929154	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	GERONIMO DE ALDERETE 1280	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,391689	,"Longitude":	-70,562933	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANQUEHUE NORTE 1410	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,393156	,"Longitude":	-70,572447	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	NUEVA COSTANERA 3885	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,398658	,"Longitude":	-70,597748	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	TABANCURA 1141	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,38263	,"Longitude":	-70,53547	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VITACURA 3920	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,400241	,"Longitude":	-70,592311	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VITACURA 6710	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,388536	,"Longitude":	-70,567643	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VITACURA 8111	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,385371	,"Longitude":	-70,555836	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO NORTE 2515	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,392332	,"Longitude":	-70,592531	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BUENAVENTURA 1770	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,386375	,"Longitude":	-70,568129	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	LUIS PASTEUR 5875	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,388543	,"Longitude":	-70,577656	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PIO XI 1615	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,397601	,"Longitude":	-70,582612	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	VITACURA 6345	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,389958	,"Longitude":	-70,570359	,"Stock":	"SI"}
{"Nombre":	GALFARMA	"Direccion":	LUIS PASTEUR 6593	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,381172	,"Longitude":	-70,571151	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMERICO VESPUCIO NORTE 2484	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,392663	,"Longitude":	-70,592741	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARMEN FARIÑA 6509   ESQ. JUAN XXIII	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,385533	,"Longitude":	-70,57036	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. COSTANERA SUR MONSEÑOR ESCRIVA DE BALAGUER 9499  LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,376251	,"Longitude":	-70,544675	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LUIS PASTEUR 5531	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,39235	,"Longitude":	-70,580762	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. NUEVA COSTANERA 4177  LOCAL1	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,394506	,"Longitude":	-70,597154	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SANTA MARIA 7030  LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,376663	,"Longitude":	-70,56727	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "CRUZ VERDE"	"Direccion":	VITACURA   6602	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,388865	,"Longitude":	-70,568275	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VITACURA 3480	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,404437	,"Longitude":	-70,596735	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VITACURA 4175	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,399489	,"Longitude":	-70,589736	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VITACURA 8201	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,385089	,"Longitude":	-70,554664	,"Stock":	"NO"}
{"Nombre":	ARBOLARIA	"Direccion":	VITACURA 8994	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,383134	,"Longitude":	-70,550077	,"Stock":	"SI"}
{"Nombre":	NOVASALUD.COM	"Direccion":	VITACURA 6710 LOCAL B-9, SHOPPING LOS COBRES	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,388395	,"Longitude":	-70,567456	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRECIA 5791	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,469665	,"Longitude":	-70,574566	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHACABUCO 347	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2456126	,"Longitude":	-73,3169606	,"Stock":	"NO"}
{"Nombre":	LA ESTRELLA	"Direccion":	CONDELL 654	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,24644061	,"Longitude":	-73,320482	,"Stock":	"SI"}
{"Nombre":	SALUDFARMA EIRL	"Direccion":	CAUPOLICÁN 512-A	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2469036	,"Longitude":	-73,3181066	,"Stock":	"NO"}
{"Nombre":	PLAZA	"Direccion":	CHACABUCO CON ESMERALDA	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,24659229	,"Longitude":	-73,3165665	,"Stock":	"NO"}
{"Nombre":	FUTURO	"Direccion":	ESMERALDA Nº 515-B	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,247087	,"Longitude":	-73,318293	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	ESMERALDA 390-B	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2466874	,"Longitude":	-73,31628252	,"Stock":	"SI"}
{"Nombre":	ITALIA	"Direccion":	CARLOS PALACIOS N°394	"Region":	ÑUBLE	,"Comuna":	BULNES	,"Latitude":	-36,74330073	,"Longitude":	-72,2979747	,"Stock":	"SI"}
{"Nombre":	SANITEX	"Direccion":	CARLOS PALACIOS N°339	"Region":	ÑUBLE	,"Comuna":	BULNES	,"Latitude":	-36,7436624	,"Longitude":	-72,29723415	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAAVEDRA Nº 908	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,79899116	,"Longitude":	-73,3991242	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COVADONGA Nº 267	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,80168268	,"Longitude":	-73,3995545	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Saavedra 939	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,7985233	,"Longitude":	-73,3991744	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CONDELL 175	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,80582	,"Longitude":	-73,391974	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAAVEDRA Nº 565	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,80189092	,"Longitude":	-73,40028829	,"Stock":	"SI"}
{"Nombre":	UNION	"Direccion":	SAAVEDRA Nº 946	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,7985868	,"Longitude":	-73,39921243	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida O'Higgins 2681	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9145924	,"Longitude":	-73,0286748	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	M. RODRIGUEZ 925	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,92961862	,"Longitude":	-73,02321878	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	MANUEL RODRIGUEZ 855 LOCAL B	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,92904871	,"Longitude":	-73,02361073	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	M. RODRIGUEZ 1500	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,93428151	,"Longitude":	-73,0217847	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	M. RODRIGUEZ 575	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9257459	,"Longitude":	-73,024873	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	8 ORIENTE 720 LOCALES 1 Y 2	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,89931376	,"Longitude":	-73,03281053	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CINCO DE ABRIL N°702	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60915833	,"Longitude":	-72,10173889	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVDA. LONG. NORTE N°134, L-1003 (JUMBO)	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,5957	,"Longitude":	-72,10701944	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AVDA. COLLÍN N°698, L-12 Y 14 (LIDER)	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61546111	,"Longitude":	-72,10407778	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	EL ROBLE Nº 770, LOCAL 6	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60943056	,"Longitude":	-72,10062222	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CINCO DE ABRIL N°731	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60962778	,"Longitude":	-72,10187222	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. LONGITUDINAL NORTE N°134 (JUMBO)	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,5957	,"Longitude":	-72,10701944	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CINCO DE ABRIL N° 701	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60916667	,"Longitude":	-72,10170278	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. ECUADOR Nº 599, LOCAL 1060 (TOTTUS)	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,59988889	,"Longitude":	-72,10008889	,"Stock":	"SI"}
{"Nombre":	BARRIOSALUD	"Direccion":	ARAUCO N°637	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60801667	,"Longitude":	-72,10298889	,"Stock":	"NO"}
{"Nombre":	EL LEON	"Direccion":	CINCO DE ABRIL N°795	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61038056	,"Longitude":	-72,10214167	,"Stock":	"SI"}
{"Nombre":	EL LEON	"Direccion":	MAIPÓN N°799	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61071111	,"Longitude":	-72,10066389	,"Stock":	"NO"}
{"Nombre":	EL LEON EXPRESS	"Direccion":	EL ROBLE N° 674	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60909167	,"Longitude":	-72,10201667	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	EL ROBLE N°699	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60912778	,"Longitude":	-72,10172778	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PAUL HARRIS Nº1155, L-3 (LIDER EXPRESS)	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,59360278	,"Longitude":	-72,07862778	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	FRANCISCO RAMÍREZ Nº 1	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6086	,"Longitude":	-72,09291667	,"Stock":	"SI"}
{"Nombre":	SANTOS	"Direccion":	CINCO DE ABRIL N° 775	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61014167	,"Longitude":	-72,10205556	,"Stock":	"NO"}
{"Nombre":	DEL FORMULARIO	"Direccion":	AVDA. LOS PUELCHES Nº 1695	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,62511111	,"Longitude":	-72,0873	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	MAIPON 723	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6104329	,"Longitude":	-72,1018035	,"Stock":	"NO"}
{"Nombre":	SALUD NATURAL	"Direccion":	CINCO DE ABRIL N° 569	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60756111	,"Longitude":	-72,101075	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	CINCO DE ABIRL Nº 749	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60984167	,"Longitude":	-72,10195	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	AVDA. OHIGGINS Nº 2305, LOCAL Nº 1	"Region":	ÑUBLE	,"Comuna":	CHILLAN VIEJO	,"Latitude":	-36,62305062	,"Longitude":	-72,12687264	,"Stock":	"SI"}
{"Nombre":	SOMOS FARMACIA	"Direccion":	MATTA N°600	"Region":	ÑUBLE	,"Comuna":	COELEMU	,"Latitude":	-36,487657	,"Longitude":	-72,70454445	,"Stock":	"SI"}
{"Nombre":	MAS	"Direccion":	JULIO LAMAS N°271	"Region":	ÑUBLE	,"Comuna":	COELEMU	,"Latitude":	-36,48680163	,"Longitude":	-72,70318564	,"Stock":	"NO"}
{"Nombre":	VIDASUR	"Direccion":	EXEQUIEL LARENAS Nº 419	"Region":	ÑUBLE	,"Comuna":	COELEMU	,"Latitude":	-36,49058153	,"Longitude":	-72,70289539	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	BARROS ARANA 724	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,826279	,"Longitude":	-73,0496934	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BARROS ARANA 501	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,827363	,"Longitude":	-73,0524439	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JUAN BOSCO Nº 501	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8158535	,"Longitude":	-73,0320309	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JUAN BOSCO Nº 2084 L-6-8	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,81753936	,"Longitude":	-73,03292182	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVDA.21 DE MAYO 3225	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8084019	,"Longitude":	-73,07822737	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. P DE VALDIVIA 1010 LOCAL 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8462368	,"Longitude":	-73,052255	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RENGO 601	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82629253	,"Longitude":	-73,05325988	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BARROS ARANA 599	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82687652	,"Longitude":	-73,05149604	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	OHIGGINS 801	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8267888	,"Longitude":	-73,0479693	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHACABUCO 70	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,83401119	,"Longitude":	-73,05511618	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ANIBAL PINTO 510	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8263116	,"Longitude":	-73,0498765	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. P DE VALDIVIA 976	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,84551045	,"Longitude":	-73,05226796	,"Stock":	"SI"}
{"Nombre":	SOCOSEP	"Direccion":	SAN MARTIN 1386-1392 LOCALES 3 Y 4	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,824856	,"Longitude":	-73,039873	,"Stock":	"NO"}
{"Nombre":	SETOP PHARMA	"Direccion":	BARROS ARANA 289	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8284679	,"Longitude":	-73,0551018	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RAMÓN CARRASCO Nº 52, LOCAL Nº 1820	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,79041598	,"Longitude":	-73,06074647	,"Stock":	"NO"}
{"Nombre":	CAPREDENA	"Direccion":	BLANCO ENCALADA 410	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,713304	,"Longitude":	-73,112307	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	MAIPÚ 616	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8248116	,"Longitude":	-73,0522187	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	COLO COLO 378	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8270019	,"Longitude":	-73,0478114	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	FREIRE 660 LOCAL 23	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82560822	,"Longitude":	-73,05110218	,"Stock":	"SI"}
{"Nombre":	ENGELNAT	"Direccion":	CAUPOLICAN Nº 321 L-7 GALERÍA ARRAYANES	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82880842	,"Longitude":	-73,05003432	,"Stock":	"NO"}
{"Nombre":	INSUVAL	"Direccion":	CAUPOLICAN 1281-A	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8189918	,"Longitude":	-73,0562606	,"Stock":	"SI"}
{"Nombre":	LORENZO ARENAS	"Direccion":	AV. 21 DE MAYO 2700	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,81080905	,"Longitude":	-73,07269696	,"Stock":	"NO"}
{"Nombre":	LOS CARRERAS	"Direccion":	GALVARINO 1880/JUAN DE DIOS RIVERA Nº 1614 LOCAL 1 BARIO NORTE	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,80722945	,"Longitude":	-73,04775722	,"Stock":	"NO"}
{"Nombre":	NONGUÉN	"Direccion":	CAMINO NONGUÉN 1080	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,83312826	,"Longitude":	-73,00564595	,"Stock":	"SI"}
{"Nombre":	NOVAFAR	"Direccion":	GENERAL GOROSTIAGA 1284 LOCAL 3	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8248176	,"Longitude":	-73,0158124	,"Stock":	"SI"}
{"Nombre":	NOVASALUD.COM	"Direccion":	ONGOLMO N° 144 LOCAL 102	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,827167	,"Longitude":	-73,041462	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	JANEQUEO 197	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82579198	,"Longitude":	-73,03925807	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	TEGUALDA 860 1º PISO (TERMINAL COLLAO)	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,81528909	,"Longitude":	-73,02224022	,"Stock":	"SI"}
{"Nombre":	TOME	"Direccion":	EGAÑA 1097 LOCAL 1	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,617692	,"Longitude":	-72,956681	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BARROS ARANA 762	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8260719	,"Longitude":	-73,0490738	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RAMÓN CARRASCO 292- 294	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,78976325	,"Longitude":	-73,05885785	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BARROS ARANA 779	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8259093	,"Longitude":	-73,0489773	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BARROS ARANA 709	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8263306	,"Longitude":	-73,0499267	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	FREIRE 707	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8251391	,"Longitude":	-73,0503748	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PLAZA PERÚ 111-115 LOCAL 2 Y 3	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8271899	,"Longitude":	-73,0403313	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BARROS ARANA 1068 LOCAL 4 Y 1	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82440969	,"Longitude":	-73,04507843	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAN MARTÍN Nº 608-612	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82889447	,"Longitude":	-73,04978547	,"Stock":	"NO"}
{"Nombre":	SANA	"Direccion":	AV. GRAL. NOVOA 871	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82007559	,"Longitude":	-73,01902286	,"Stock":	"SI"}
{"Nombre":	SANATORIO ALEMAN	"Direccion":	JUNGE 75	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,84379075	,"Longitude":	-73,05237888	,"Stock":	"SI"}
{"Nombre":	THERAPÍA	"Direccion":	CALLE DOS N° 1946 PARQUE EJERCITO	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8123646	,"Longitude":	-73,0632638	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MANUEL MONTT 2328 (SUPER. LIDER)	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-36,99509483	,"Longitude":	-73,16208232	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANUEL MONTT 399	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02669273	,"Longitude":	-73,14746056	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANUEL MONTT 541	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02786071	,"Longitude":	-73,14664529	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	COUSIÑO 131	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02577883	,"Longitude":	-73,14780876	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANUEL MONTT 401	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02673708	,"Longitude":	-73,14741452	,"Stock":	"SI"}
{"Nombre":	ZURITA	"Direccion":	LOS ROBLES 3108	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-36,98340029	,"Longitude":	-73,162375	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS LEONES 770	"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,47612911	,"Longitude":	-73,34510702	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	OHIGGINS Nº 101	"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,47278267	,"Longitude":	-73,34748769	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ARTURO PRAT Nº 1280	"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,47628106	,"Longitude":	-73,34694698	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. COLÓN 8961	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,800273	,"Longitude":	-73,08443801	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AUTOPISTA CONCEP. THNO Nº 9000 L-9	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79422435	,"Longitude":	-73,06883979	,"Stock":	"NO"}
{"Nombre":	FARMACIA EXTERNA CLINICA ANDES SALUD CONCEPCION	"Direccion":	AV. JORGE ALESSANDRI 2047	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,80051165	,"Longitude":	-73,07187915	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BÉLGICA 1431 LOCAL 1	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,78221201	,"Longitude":	-73,10422815	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. COLÓN Nº 7948 L- 1 Y 2	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,78706446	,"Longitude":	-73,08698576	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COSTANERA NORTE 1 9871	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,80210941	,"Longitude":	-73,08765385	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA FLORESTA	"Direccion":	AVENIDA DOS Nº 35	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79771282	,"Longitude":	-73,10748855	,"Stock":	"SI"}
{"Nombre":	SANA Nº 2	"Direccion":	POTSDAM 153-A	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,801309	,"Longitude":	-73,086498	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	LA ARAUCANA 490	"Region":	BIOBIO	,"Comuna":	HUALQUI	,"Latitude":	-36,97241977	,"Longitude":	-72,93680881	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAAVEDRA Nº 599	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,60997925	,"Longitude":	-73,65522518	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	RIOSECO Nº 267	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,60823127	,"Longitude":	-73,65290021	,"Stock":	"SI"}
{"Nombre":	NUEVA FARMACIA LEBU	"Direccion":	FREIRE Nº 444	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,61017991	,"Longitude":	-73,65464377	,"Stock":	"SI"}
{"Nombre":	FUTURO	"Direccion":	SAAVEDRA Nº 281	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,60706837	,"Longitude":	-73,6536689	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	RIOSECO Nº 155	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,609714	,"Longitude":	-73,648329	,"Stock":	"SI"}
{"Nombre":	FARMATODO	"Direccion":	IGNACIO CARRERA PINTO Nº 610	"Region":	BIOBIO	,"Comuna":	LOS ALAMOS	,"Latitude":	-37,62774387	,"Longitude":	-73,45922593	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	PEDRO AGUIRRE CERDA 617	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,09216888	,"Longitude":	-73,15706211	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PEDRO AGUIRRE CERDA 681	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,09174149	,"Longitude":	-73,15739874	,"Stock":	"SI"}
{"Nombre":	SAN PABLO	"Direccion":	PEDRO AGUIRRE CERDA 753	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,09113478	,"Longitude":	-73,15779596	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	FREIRE 500	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,73756787	,"Longitude":	-72,99531051	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	FREIRE 688	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,73670726	,"Longitude":	-72,99291402	,"Stock":	"NO"}
{"Nombre":	FARMA EDAN	"Direccion":	MAIPÚ 100	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,73693373	,"Longitude":	-72,99405037	,"Stock":	"SI"}
{"Nombre":	PENCO	"Direccion":	MAIPÚ 301	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,73910014	,"Longitude":	-72,99263892	,"Stock":	"NO"}
{"Nombre":	RENACER	"Direccion":	C. HENRIQUEZ 4 LIRQUÉN	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,7131933	,"Longitude":	-72,9767201	,"Stock":	"NO"}
{"Nombre":	BECERRA	"Direccion":	ERNESTO RIQUELME Nº 247	"Region":	ÑUBLE	,"Comuna":	PINTO	,"Latitude":	-36,7031925	,"Longitude":	-71,89307333	,"Stock":	"SI"}
{"Nombre":	QUILLÓN	"Direccion":	AVDA. CAYUMANQUI N°407	"Region":	ÑUBLE	,"Comuna":	QUILLON	,"Latitude":	-36,74282804	,"Longitude":	-72,47401648	,"Stock":	"SI"}
{"Nombre":	SUR	"Direccion":	AVDA. CAYUMANQUI N°565	"Region":	ÑUBLE	,"Comuna":	QUILLON	,"Latitude":	-36,7429527	,"Longitude":	-72,4716615	,"Stock":	"SI"}
{"Nombre":	ITATA	"Direccion":	AVDA. CAYUMANQUI Nº510-C	"Region":	ÑUBLE	,"Comuna":	QUILLON	,"Latitude":	-36,74315044	,"Longitude":	-72,47254126	,"Stock":	"NO"}
{"Nombre":	SOMOS FARMACIA	"Direccion":	AVDA. ARTURO PRAT N°477 L-15	"Region":	ÑUBLE	,"Comuna":	QUIRIHUE	,"Latitude":	-36,2831618	,"Longitude":	-72,54516708	,"Stock":	"SI"}
{"Nombre":	QUIRIHUE	"Direccion":	AVDA. ARTURO PRAT Nº 510, LOCAL 1-A	"Region":	ÑUBLE	,"Comuna":	QUIRIHUE	,"Latitude":	-36,28266032	,"Longitude":	-72,54444807	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IGNACIO SERRANO N°527	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,42651944	,"Longitude":	-71,95776667	,"Stock":	"NO"}
{"Nombre":	SAAVEDRA	"Direccion":	IGNACIO SERRANO N°493	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,43166944	,"Longitude":	-71,95945278	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	IGNACIO SERRANO N°593	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,42559167	,"Longitude":	-71,95745278	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	INDEPENDENCIA Nº 651	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,424975	,"Longitude":	-71,95730556	,"Stock":	"SI"}
{"Nombre":	SALUD NATURAL	"Direccion":	VICUÑA MACKENA N°561	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,42448889	,"Longitude":	-71,95637222	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	MICHIMALONCO 1120	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8428314	,"Longitude":	-73,09438895	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO EL VENADO 1380 L- 5, 6 Y 7	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,85300333	,"Longitude":	-73,09357561	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PEDRO AGUIRRE CERDA 1055 LOCAL 20	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,83922889	,"Longitude":	-73,09625012	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LAGUNA GRANDE Nº 115, SAN PEDRO DEL VALLE	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,83895137	,"Longitude":	-73,11958136	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	VICTORIA Nº 1	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,83888	,"Longitude":	-73,09539	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	HUERTOS FAMILIARES Nº 39, LAS VIOLETAS Nº 1732, LOCAL 3	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,83258411	,"Longitude":	-73,11081195	,"Stock":	"SI"}
{"Nombre":	FARMA MAS AHORRO	"Direccion":	AV. PORTAL DE SAN PEDRO 3750, MODULO 9	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,85465563	,"Longitude":	-73,13579624	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PEDRO AGUIRRE C. 1055 LOCAL 6	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8392094	,"Longitude":	-73,09672157	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PORTAL DE SAN PEDRO 6950 L- 22-23-24	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,88383433	,"Longitude":	-73,14114584	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MICHIMALONCO 1300	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,84362497	,"Longitude":	-73,09778961	,"Stock":	"NO"}
{"Nombre":	BIOFARMA	"Direccion":	AV. LOS MAÑIOS 7045, LOCAL 1 (SUPERMERCADO)	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,841949	,"Longitude":	-73,107373	,"Stock":	"SI"}
{"Nombre":	BIOFARMA SUCURSAL	"Direccion":	DIAG. BIO BIO 160	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8353107	,"Longitude":	-73,11962566	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. J. ALESSANDRI 3177 L-B. 105	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79096882	,"Longitude":	-73,06888501	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. COLÓN 170 LOCAL 1008	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71241476	,"Longitude":	-73,11459882	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	AV. COLÓN N° 3875 LOCAL5	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7517889	,"Longitude":	-73,0925379	,"Stock":	"SI"}
{"Nombre":	ARAUCARIA	"Direccion":	ARAUCARIA 252 LOCAL 3 Y 4, LAS HIGUERAS	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,74680621	,"Longitude":	-73,10811261	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. COLÓN 300	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71314858	,"Longitude":	-73,11369645	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV.J. ALESSANDRI 3177 L-BS C-1136-140-144-148	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79150506	,"Longitude":	-73,06507839	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. COLÓN 396	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71370308	,"Longitude":	-73,11285443	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. COLÓN 3284	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,74326381	,"Longitude":	-73,0979295	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. J.ALESSANDRI 3177 L- BF 124-125-128-129-132-133-136-137	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79156916	,"Longitude":	-73,06902152	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. COLÓN 200 LOCAL- 5	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71265519	,"Longitude":	-73,11441382	,"Stock":	"SI"}
{"Nombre":	ESTACIÓN	"Direccion":	BILBAO 445 LOCAL 2	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,724683	,"Longitude":	-73,116367	,"Stock":	"NO"}
{"Nombre":	PORTUS	"Direccion":	LAS LILAS Nº 16, LOS CONDORES	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7571935	,"Longitude":	-73,09030442	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	LAS AMAPOLAS 68, LOS CÓNDORES	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,75770892	,"Longitude":	-73,09265521	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. J. ALESSANDRI 3177 L- 26 BOULEVARD	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79068577	,"Longitude":	-73,06846095	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. COLÓN 242	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71287548	,"Longitude":	-73,11409497	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AUTOPISTA 7001	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,77905	,"Longitude":	-73,07739	,"Stock":	"NO"}
{"Nombre":	BIOSALUD	"Direccion":	DANIEL VERA 801	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,54780821	,"Longitude":	-72,9350515	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANUEL MONTT 1065	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,61884749	,"Longitude":	-72,95677269	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	MANUEL MONTT 1115	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,61867152	,"Longitude":	-72,95597228	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	EGAÑA 1006	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,61855842	,"Longitude":	-72,95621007	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANUEL MONTT 1077	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,61878941	,"Longitude":	-72,95653941	,"Stock":	"SI"}
{"Nombre":	FARMA	"Direccion":	ESMERALDA N°204	"Region":	ÑUBLE	,"Comuna":	YUNGAY	,"Latitude":	-37,12012993	,"Longitude":	-72,01650808	,"Stock":	"SI"}
{"Nombre":	FARMITALIA	"Direccion":	HUAMACHUCO N°216 - B	"Region":	ÑUBLE	,"Comuna":	YUNGAY	,"Latitude":	-37,1203817	,"Longitude":	-72,01648693	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ESMERALDA Nº 266-A	"Region":	ÑUBLE	,"Comuna":	YUNGAY	,"Latitude":	-37,12015088	,"Longitude":	-72,01733994	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COLÓN 411	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,469141	,"Longitude":	-72,350826	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COLÓN 491	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467728	,"Longitude":	-72,350758	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COLÓN 341	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,469838	,"Longitude":	-72,350865	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALEMANIA 686 LOCAL 2 Y 3, INTERIOR SUPERMERCADO SANTA ISABEL	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,46832	,"Longitude":	-72,337495	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VALDIVIA 440 LOCAL 131 INTERIOR MALL PLAZA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,468482	,"Longitude":	-72,352279	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MARCONI 1177 LOCAL 1, 2 Y 3 INTERIOR SUPERMERCADO	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,458829	,"Longitude":	-72,341324	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALEMANIA 600 LOCAL 1	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,468664	,"Longitude":	-72,338565	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COLÓN 412	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,469134	,"Longitude":	-72,35089	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MENDOZA 477 LOCAL 117 AL 120 INTERIOR MALL PLAZA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467826	,"Longitude":	-72,353757	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	ERCILLA 190 INTERIOR SUPERMERCADO JUMBO	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,472141	,"Longitude":	-72,355652	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	RICARDO VICUÑA 284 INTERIOR SUPERMERCADO LIDER	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,473136	,"Longitude":	-72,349356	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	COLÓN 468	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,468317	,"Longitude":	-72,350828	,"Stock":	"SI"}
{"Nombre":	CLINICA	"Direccion":	LAUTARO 200	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,470247	,"Longitude":	-72,34828	,"Stock":	"NO"}
{"Nombre":	STEP	"Direccion":	LAUTARO 594 LOCAL 4	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47016729	,"Longitude":	-72,3535876	,"Stock":	"SI"}
{"Nombre":	CLINICA LOS ANDES	"Direccion":	COLO COLO 802 CENTRO MEDICO CLINICA LOA ANDES	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,46702008	,"Longitude":	-72,33730659	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ALMAGRO 599	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,466286	,"Longitude":	-72,349491	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	COLÓN 358-A	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,469398	,"Longitude":	-72,350869	,"Stock":	"SI"}
{"Nombre":	TREBOL	"Direccion":	RIO CLARO 160	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,03448557	,"Longitude":	-72,40133557	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	RIO CLARO 98-A	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,03454349	,"Longitude":	-72,40196803	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	RIO CLARO 250	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,03445	,"Longitude":	-72,40250493	,"Stock":	"NO"}
{"Nombre":	SAN SEBASTIAN	"Direccion":	O'HIGGINS 763-A	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,09895153	,"Longitude":	-72,5615016	,"Stock":	"SI"}
{"Nombre":	YUMBEL	"Direccion":	O'HIGGINS 790	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,09870987	,"Longitude":	-72,56150834	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 215	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,28089957	,"Longitude":	-72,7145072	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	SAN MARTIN 549-B	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,500921	,"Longitude":	-72,673111	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	BALMACEDA 243 LOCAL 3	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,28053176	,"Longitude":	-72,7147528	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	BALMACEDA 151	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,28180872	,"Longitude":	-72,7139151	,"Stock":	"SI"}
{"Nombre":	MANANTIAL	"Direccion":	ARTURO PRAT 682	"Region":	BIOBIO	,"Comuna":	SANTA BARBARA	,"Latitude":	-37,670176	,"Longitude":	-72,02028635	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VILLAGRAN 770	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37,722218	,"Longitude":	-72,24101369	,"Stock":	"SI"}
{"Nombre":	CORDILLERA	"Direccion":	PEDRO LAGOS 549	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37,71991276	,"Longitude":	-72,24307118	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	VILLAGRAN 724	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37,72212377	,"Longitude":	-72,24148773	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN MARTIN 401	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,50143711	,"Longitude":	-72,67063726	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN MARTIN 336	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,50172613	,"Longitude":	-72,66968831	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA CENTRAL	"Direccion":	SAN MARTIN 423	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,50136176	,"Longitude":	-72,67102034	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	PASAJE 2 Nº 207, SECTOR LAS MONJAS	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,79009796	,"Longitude":	-73,06003728	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. COSME CHURRUCA 75 LOCALES 13,14 Y 15 LOMAS SAN SEBASTIAN	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,7908145	,"Longitude":	-73,0504411	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANUEL MONTT 360 LOCAL 2	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02633884	,"Longitude":	-73,14788508	,"Stock":	"NO"}
{"Nombre":	ZURITA	"Direccion":	MANUEL MONTT 400	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,02675738	,"Longitude":	-73,14756016	,"Stock":	"NO"}
{"Nombre":	FARMACIA FLORIDA	"Direccion":	E. RAMÍREZ 563	"Region":	BIOBIO	,"Comuna":	FLORIDA	,"Latitude":	-36,82295426	,"Longitude":	-72,66297315	,"Stock":	"SI"}
{"Nombre":	BIOSALUD HUALQUI	"Direccion":	BULNES 430	"Region":	BIOBIO	,"Comuna":	HUALQUI	,"Latitude":	-36,97646359	,"Longitude":	-72,93767692	,"Stock":	"SI"}
{"Nombre":	BIO BIO	"Direccion":	LAUTARO 127	"Region":	BIOBIO	,"Comuna":	SANTA JUANA	,"Latitude":	-37,17534108	,"Longitude":	-72,93837468	,"Stock":	"SI"}
{"Nombre":	FARMACIA GREENFARMA	"Direccion":	Jose Cardenio Avello 206	"Region":	BIOBIO	,"Comuna":	SANTA JUANA	,"Latitude":	-37,1749714	,"Longitude":	-72,93902754	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	O'HIGGINS 751 LOCAL 1	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,099056	,"Longitude":	-72,561352	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. JORGE KENRICK Nº35 LOCAL 3 Y 4	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,05898496	,"Longitude":	-71,58706086	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV ARGENTINA 251-257 ESQUINA QUILLOTA 6	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04509411	,"Longitude":	-71,60464013	,"Stock":	"NO"}
{"Nombre":	RIOS	"Direccion":	VILLAGRAN 601	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37,72186392	,"Longitude":	-72,24302617	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 5919, PARADERO 15	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,509017	,"Longitude":	-70,656577	,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	AV. RECOLETA 387	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,428648	,"Longitude":	-70,646664	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	"AHUMADA" 301	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439616	,"Longitude":	-70,650931	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CHICUREO  2300, LOCALES 10 Y 11	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,286075	,"Longitude":	-70,675307	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	O'HIGGINS 581 LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3679755	,"Longitude":	-70,73027306	,"Stock":	"NO"}
{"Nombre":	SAN ENRIQUE	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 215	"Region":	METROPOLITANA	,"Comuna":	ALHUE	,"Latitude":	-34,03096349	,"Longitude":	-71,09947573	,"Stock":	"NO"}
{"Nombre":	VECINA LOS JARDINES	"Direccion":	LO CRUZAT 0460	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,355257	,"Longitude":	-70,72069	,"Stock":	"SI"}
{"Nombre":	LA CISTERNA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8121	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,52857	,"Longitude":	-70,662178	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMILO HENRIQUEZ 3692	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,568772	,"Longitude":	-70,554846	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BAQUEDANO 502. INTERIOR CENTRO COMERCIAL	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,808089	,"Longitude":	-70,742343	,"Stock":	"NO"}
{"Nombre":	ESTRELLA	"Direccion":	VICUÑA MACKENNA 3061	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,479241	,"Longitude":	-70,621923	,"Stock":	"SI"}
{"Nombre":	YORUGUA	"Direccion":	LA FLORIDA 6938.	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51832	,"Longitude":	-70,581926	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LARRAIN 7059-A	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451782	,"Longitude":	-70,554803	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PRESIDENTE KENNEDY 9001. L-1072	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,388784	,"Longitude":	-70,545276	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	LARRAIN 5819	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,453339	,"Longitude":	-70,569738	,"Stock":	"SI"}
{"Nombre":	ECUANASER	"Direccion":	SAN ANTONIO 140	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,652887	,"Longitude":	-71,151305	,"Stock":	"SI"}
{"Nombre":	DEL SOL	"Direccion":	LA GALAXIA 2520	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50662	,"Longitude":	-70,796288	,"Stock":	"NO"}
{"Nombre":	Los Orientales	"Direccion":	Avenida Oriental 7179	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4683144	,"Longitude":	-70,5567675	,"Stock":	"SI"}
{"Nombre":	MUNDO VERDE	"Direccion":	COLON 448, LOCAL 6, PASEO ALCALA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,468616	,"Longitude":	-72,350823	,"Stock":	"NO"}
{"Nombre":	NETFARMA	"Direccion":	LAS AZALEAS 604, LOCAL 3, INTERIOR SUPERMERCADO ACUENTA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,466537	,"Longitude":	-72,366667	,"Stock":	"NO"}
{"Nombre":	ALTO ORIENTE	"Direccion":	VITACURA 6780	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,387665	,"Longitude":	-70,566669	,"Stock":	"SI"}
{"Nombre":	CENTRAL	"Direccion":	LAGO BOLSENA 18601	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,55801	,"Longitude":	-70,790548	,"Stock":	"SI"}
{"Nombre":	QFARMA	"Direccion":	CALLE PRAT Nº 5122	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-32,99548198	,"Longitude":	-71,18269613	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ARTURO PRAT Nº 651	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8290785	,"Longitude":	-73,0606348	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS CARRERA 301 LOCALES 109, 111, 115	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8252481	,"Longitude":	-73,0568401	,"Stock":	"SI"}
{"Nombre":	CLINICA LOS CARRERA	"Direccion":	CAUPOLICAN 958	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04884326	,"Longitude":	-71,43613394	,"Stock":	"NO"}
{"Nombre":	HOSP. PETORCA	"Direccion":	MANUEL MONTT 860	"Region":	VALPARAISO	,"Comuna":	PETORCA	,"Latitude":	-32,25203553	,"Longitude":	-70,92883994	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LOS CARRERA PONIENTE N°301 L-B 1012-1016-1020 BH 1017-1021-1025	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,818938	,"Longitude":	-73,050319	,"Stock":	"SI"}
{"Nombre":	CENTRO MEDICO	"Direccion":	APOQUINDO 4124	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414786	,"Longitude":	-70,587784	,"Stock":	"SI"}
{"Nombre":	FARMACIA GONZALEZ	"Direccion":	DIEGO PORTALES Nº 1010 LOCAL 17 Y 18	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47594	,"Longitude":	-72,9490401	,"Stock":	"SI"}
{"Nombre":	FARMACIA COOPERCARAB	"Direccion":	URMENETA Nº778	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,472435	,"Longitude":	-72,9467468	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ANTONIO VARAS 549	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4725917	,"Longitude":	-72,9423996	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ANTONIO VARAS 952	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4745746	,"Longitude":	-72,9482602	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	Avenida Vicuña Mackenna 298	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4451546	,"Longitude":	-70,6325658	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	URMENETA Nº580 LOCAL 106	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4720795	,"Longitude":	-72,9432738	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ANTONIO VARAS 599	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4727103	,"Longitude":	-72,9431891	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	JUAN SOLER MANFREDINI 51, LOCALES 3 Y 4	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47305569	,"Longitude":	-72,937181	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ANTONIO VARAS N° 555	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,472597	,"Longitude":	-72,9424348	,"Stock":	"NO"}
{"Nombre":	FARMACIA  "AHUMADA"	"Direccion":	AVDA. JUAN SOLER MANFREDINI 51 LOCAL 114-115 MALL COSTANERA	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4730157	,"Longitude":	-72,9375633	,"Stock":	"SI"}
{"Nombre":	FARMACIA  "AHUMADA"	"Direccion":	AVDA. PARQUE INDUSTRIAL 400	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4608313	,"Longitude":	-72,9500958	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ANTONIO VARAS 598	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4726831	,"Longitude":	-72,9431954	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	CRUCERO  1915	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4768588	,"Longitude":	-72,9677483	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. PRESIDENTE IBAÑEZ 173 LOCAL 1	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4617201	,"Longitude":	-72,9441155	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. 4ª TERRAZA 5001 ESQ. MICHIMAVIDA, L 1, VALLE VOLCANES	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4613525	,"Longitude":	-72,9128934	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	GUILLERMO BUHLER 1799	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5873366	,"Longitude":	-73,1269441	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMASALUD	"Direccion":	AV. EL PALOMAR N° 1525, INT. UNIMARC	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3895946	,"Longitude":	-70,3253776	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDA	"Direccion":	COLCHAGUA N° 653	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5773393	,"Longitude":	-70,7588917	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA	"Direccion":	RIQUELME N° 147	"Region":	ATACAMA	,"Comuna":	HUASCO	,"Latitude":	-28,463192	,"Longitude":	-71,223232	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTIKA	"Direccion":	MAIPU N° 421	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3654643	,"Longitude":	-70,3339203	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTIKA	"Direccion":	COUSIÑO  N° 325	"Region":	ATACAMA	,"Comuna":	CALDERA	,"Latitude":	-27,0676726	,"Longitude":	-70,8215656	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ESTADO 377	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43898	,"Longitude":	-70,649603	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	O'HIGGINS  N° 500	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3662305	,"Longitude":	-70,333719	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. COPAYAPU  N° 2406, INT. PORTAL JUMBO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3834611	,"Longitude":	-70,315271	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ATACAMA N° 567	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3670573	,"Longitude":	-70,3343976	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	COLIPI  N° 484, MALL PLAZA REAL	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3665639	,"Longitude":	-70,331303	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. LOS CARRERA N° 3356, STRIPCENTER JUMBO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,386957	,"Longitude":	-70,3054267	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 1101	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5769585	,"Longitude":	-70,7585972	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 1040	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5766603	,"Longitude":	-70,7591002	,"Stock":	"SI"}
{"Nombre":	FARMACIA  "SALCOBRAND"	"Direccion":	CHACABUCO  N° 393	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,36655	,"Longitude":	-70,333286	,"Stock":	"NO"}
{"Nombre":	FARMACIA  "SALCOBRAND"	"Direccion":	COLIPI  N° 484, MALL PLAZA REAL	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3656598	,"Longitude":	-70,3304044	,"Stock":	"SI"}
{"Nombre":	FARMACIA  "SALCOBRAND"	"Direccion":	MAIPU N° 355	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3644846	,"Longitude":	-70,3328406	,"Stock":	"NO"}
{"Nombre":	FARMACIA  "SALCOBRAND"	"Direccion":	ARTURO PRAT  N° 1120	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5770093	,"Longitude":	-70,7584246	,"Stock":	"NO"}
{"Nombre":	FARMACIA MILANO	"Direccion":	AV. HENRIQUEZ N° 495	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3679802	,"Longitude":	-70,3239383	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	O'HIGGINS N° 561	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3662864	,"Longitude":	-70,3334619	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ARTURO PRAT N° 1100	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5769305	,"Longitude":	-70,7585786	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. COPAYAPU N° 2296	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3834759	,"Longitude":	-70,3152579	,"Stock":	"NO"}
{"Nombre":	FARMACIA PUNTA NEGRA	"Direccion":	AV. LOS CARRERA N° 5926	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,4089945	,"Longitude":	-70,2863246	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATERRA	"Direccion":	MIGUEL LEMEUR   N° 418	"Region":	ATACAMA	,"Comuna":	TIERRA AMARILLA	,"Latitude":	-27,467171	,"Longitude":	-70,26522	,"Stock":	"NO"}
{"Nombre":	FARMACIA MULET	"Direccion":	ARTURO PRAT N° 1410	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5782538	,"Longitude":	-70,7561489	,"Stock":	"NO"}
{"Nombre":	FARMACIA SANTIAGO	"Direccion":	ARTURO PRAT N° 889	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,575904	,"Longitude":	-70,7603609	,"Stock":	"SI"}
{"Nombre":	FARMACIA   LA NACIONAL	"Direccion":	COLCHAGUA  N° 581	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5767955	,"Longitude":	-70,7585122	,"Stock":	"SI"}
{"Nombre":	FARMACIA CRUZ	"Direccion":	GANA N° 298	"Region":	ATACAMA	,"Comuna":	CALDERA	,"Latitude":	-27,0663606	,"Longitude":	-70,8230686	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLINICA ATACAMA	"Direccion":	INFANTE  N°  861	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3656145	,"Longitude":	-70,3280473	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN MARTIN	"Direccion":	JUAN MARTINEZ N° 1107	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":	-26,3913476	,"Longitude":	-70,0451472	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR.  SIMI	"Direccion":	ATACAMA N° 592	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3673035	,"Longitude":	-70,3341629	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	MAIPU   N° 445	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3650779	,"Longitude":	-70,3335109	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	ARTURO PRAT N° 850	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5757166	,"Longitude":	-70,7606297	,"Stock":	"SI"}
{"Nombre":	FARMACIA PAEZ	"Direccion":	RAUL BARRIONUEVO  N° 156	"Region":	ATACAMA	,"Comuna":	CHAÑARAL	,"Latitude":	-26,3355927	,"Longitude":	-70,6138995	,"Stock":	"SI"}
{"Nombre":	FARMACIA VARAS	"Direccion":	ZULETA N° 150	"Region":	ATACAMA	,"Comuna":	CHAÑARAL	,"Latitude":	-26,3445445	,"Longitude":	-70,6175131	,"Stock":	"SI"}
{"Nombre":	RUDOLPH	"Direccion":	CONCEPCIÓN Nº 620	"Region":	LOS RIOS	,"Comuna":	LAGO RANCO	,"Latitude":	-40,32255556	,"Longitude":	-72,47255556	,"Stock":	"NO"}
{"Nombre":	TORRES	"Direccion":	BALMACEDA SUR Nº 047	"Region":	LOS RIOS	,"Comuna":	LOS LAGOS	,"Latitude":	-39,86344	,"Longitude":	-72,813917	,"Stock":	"SI"}
{"Nombre":	VITAL	"Direccion":	MARIQUINA Nº 66 - B	"Region":	LOS RIOS	,"Comuna":	MARIQUINA	,"Latitude":	-39,53902778	,"Longitude":	-72,96341667	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA Nº 241	"Region":	LOS RIOS	,"Comuna":	FUTRONO	,"Latitude":	-40,13144444	,"Longitude":	-72,38983333	,"Stock":	"NO"}
{"Nombre":	ALBORADA	"Direccion":	BALMACEDA Nº 500	"Region":	LOS RIOS	,"Comuna":	FUTRONO	,"Latitude":	-40,1316666	,"Longitude":	-72,38652778	,"Stock":	"SI"}
{"Nombre":	LANCO	"Direccion":	LIBERTAD Nº 223	"Region":	LOS RIOS	,"Comuna":	LANCO	,"Latitude":	-39,45211111	,"Longitude":	-72,77491667	,"Stock":	"SI"}
{"Nombre":	CENTRO	"Direccion":	O´HIGGINS Nº 36	"Region":	LOS RIOS	,"Comuna":	PAILLACO	,"Latitude":	-40,071527	,"Longitude":	-72,8764726	,"Stock":	"SI"}
{"Nombre":	PLAZA	"Direccion":	O´HIGGINS Nº 367	"Region":	LOS RIOS	,"Comuna":	PAILLACO	,"Latitude":	-40,0711944	,"Longitude":	-72,8724722	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	O´HIGGINS Nº 238	"Region":	LOS RIOS	,"Comuna":	PAILLACO	,"Latitude":	-40,071194	,"Longitude":	-72,87433	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COMERCIO Nº 585	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,333972	,"Longitude":	-72,95611	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	PEDRO LAGOS N° 622	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,334403	,"Longitude":	-72,954823	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	PEDRO LAGOS Nº 601	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,33425	,"Longitude":	-72,95463889	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MIGUEL	"Direccion":	AV. 4 DE JULIO N° 706	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":	-26,245923	,"Longitude":	-69,626426	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MARTINEZ DE ROSAS Nº 720	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,64258333	,"Longitude":	-72,33180556	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MARTINEZ DE ROSAS Nº 690	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,64253056	,"Longitude":	-72,33147222	,"Stock":	"NO"}
{"Nombre":	PANGUIPULLI	"Direccion":	BERNARDO O´HIGGINS Nº 491	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,64208333	,"Longitude":	-72,32877778	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	MARTINEZ DE ROSAS Nº 531	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,64305556	,"Longitude":	-72,32969444	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-114	"Direccion":	MANUEL MONTT 902	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73866683	,"Longitude":	-72,58895419	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND" L-377	"Direccion":	MANUEL RODRIGUEZ 911	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73646959	,"Longitude":	-72,58852378	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	MANUEL MONTT Nº 380	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,29477778	,"Longitude":	-73,08147222	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-367	"Direccion":	AVENIDA ALEMANIA 0780	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73636622	,"Longitude":	-72,61581743	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ESMERALDA Nº 700, LOCAL Nº 5	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,29475	,"Longitude":	-73,08113888	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	ESMERALDA Nº 723	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,2944444	,"Longitude":	-73,08105556	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-380	"Direccion":	AVENIDA ALEMANIA 0425	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7355034	,"Longitude":	-72,6077411	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ESMERALDA Nº 731	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,2945	,"Longitude":	-73,081	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI F 0053	"Direccion":	DIEGO PORTALES 907	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73749926	,"Longitude":	-72,58853814	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-368	"Direccion":	MANUEL MONTT 801	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73833076	,"Longitude":	-72,59027941	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-377	"Direccion":	AVENIDA SAN MARTIN 0831	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73875181	,"Longitude":	-72,61397053	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA" L-209	"Direccion":	MANUEL MONTT 901	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73852688	,"Longitude":	-72,58893701	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND" L-36	"Direccion":	MANUEL BULNES 502	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73864756	,"Longitude":	-72,58912466	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RAMÓN PICARTE Nº 343	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8142749	,"Longitude":	-73,2449441	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BUERAS Nº 1400	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,82735765	,"Longitude":	-73,23572159	,"Stock":	"NO"}
{"Nombre":	PRAT	"Direccion":	LETELIER Nº 236	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8136659	,"Longitude":	-73,2458505	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ARAUCO Nº 697	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8161221	,"Longitude":	-73,2406324	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	INDEPENDENCIA Nº 550	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8145587	,"Longitude":	-73,2470964	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Arauco 561	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8162435	,"Longitude":	-73,2424288	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RAMÓN PICARTE Nº 384	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,814339	,"Longitude":	-73,2443977	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RAMÓN PICARTE Nº 301	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8141905	,"Longitude":	-73,2455349	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIA	"Direccion":	MAIPU N°256	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83300585	,"Longitude":	-70,59712252	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMILO HENRIQUEZ Nº 450	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8137413	,"Longitude":	-73,2454148	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L-374	"Direccion":	MANUEL MONTT 701	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7381759	,"Longitude":	-72,5917477	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F0026	"Direccion":	MANUEL BULNES 274	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73625498	,"Longitude":	-72,58864494	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "AHUMADA" L-381	"Direccion":	AVENIDA ALEMANIA 01605	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7311333	,"Longitude":	-72,6214517	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND" L-319	"Direccion":	MANUEL BULNES 532	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73884028	,"Longitude":	-72,58913361	,"Stock":	"SI"}
{"Nombre":	K-SOL	"Direccion":	RAMÓN PICARTE N°2621, LOCAL A	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8337946	,"Longitude":	-73,215431	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND" L-83	"Direccion":	AVENIDA ALEMANIA 0815	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73389198	,"Longitude":	-72,61358739	,"Stock":	"NO"}
{"Nombre":	FARMACIA NOVASALUD	"Direccion":	GENERAL LAGOS 468 LOCAL 6	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73767975	,"Longitude":	-72,59309176	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-116	"Direccion":	MANUEL BULNES 298	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73644243	,"Longitude":	-72,58863393	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA" L-368	"Direccion":	HOCHSTETTER N°890	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73776059	,"Longitude":	-72,61725289	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L-481	"Direccion":	SAN MARTIN 0675 LOCAL 2 Y 3	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73931135	,"Longitude":	-72,61138174	,"Stock":	"NO"}
{"Nombre":	PAGUE MENOS	"Direccion":	RIQUELME N°751	"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,4756903	,"Longitude":	-73,347294	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-169	"Direccion":	ARTURO PRAT 530	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73848623	,"Longitude":	-72,59058035	,"Stock":	"NO"}
{"Nombre":	FARMACIA CENTRAL	"Direccion":	MANUEL MONTT 730	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73835187	,"Longitude":	-72,59136049	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PORTALES 3698. L1236	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,622261	,"Longitude":	-70,7005997	,"Stock":	"SI"}
{"Nombre":	FARMACIA QUELLON	"Direccion":	RAMON FREIRE 329	"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,1179237	,"Longitude":	-73,6167145	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	LADRILLEROS 399	"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,1175146	,"Longitude":	-73,6167806	,"Stock":	"SI"}
{"Nombre":	FARMACIA CHILHUE	"Direccion":	JUAN LADRILLERO #202	"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,1164894	,"Longitude":	-73,6302719	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	ARTURO PRAT 46, ACHAO	"Region":	LOS LAGOS	,"Comuna":	QUINCHAO	,"Latitude":	-42,472032	,"Longitude":	-73,489772	,"Stock":	"SI"}
{"Nombre":	FARMACIA USYDAL	"Direccion":	RAMÓN FREIRE 506	"Region":	LOS LAGOS	,"Comuna":	DALCAHUE	,"Latitude":	-42,3788566	,"Longitude":	-73,6499556	,"Stock":	"NO"}
{"Nombre":	FARMACIA AUSTRAL	"Direccion":	RAMON FREIRE 480	"Region":	LOS LAGOS	,"Comuna":	DALCAHUE	,"Latitude":	-42,3793656	,"Longitude":	-73,6477666	,"Stock":	"NO"}
{"Nombre":	FARMACIA AUSTRAL	"Direccion":	SARGENTO CANDELARIA 286	"Region":	LOS LAGOS	,"Comuna":	CHONCHI	,"Latitude":	-42,6229172	,"Longitude":	-73,7785645	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	21 de Mayo 359	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,478643	,"Longitude":	-70,3183619	,"Stock":	"SI"}
{"Nombre":	FARMACIA CHILOE	"Direccion":	ARTURO PRAT Nº 280	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8674435	,"Longitude":	-73,8230288	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	PUDETO Nº301	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8689461	,"Longitude":	-73,8261185	,"Stock":	"NO"}
{"Nombre":	FARMACIA NUEVA ERA	"Direccion":	ARTURO PRAT 183	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8665733	,"Longitude":	-73,8279114	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	18 de Septiembre 1402	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4844634	,"Longitude":	-70,3071063	,"Stock":	"NO"}
{"Nombre":	ISAIAS  2	"Direccion":	Tucapel 2596	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4745351	,"Longitude":	-70,289813	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PUDETO Nº254	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8687706	,"Longitude":	-73,8270569	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	PUDETO Nº289	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8689651	,"Longitude":	-73,8260727	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	ELEUTERIO RAMÍREZ Nº 330	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8695296	,"Longitude":	-73,8258669	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUDETO	"Direccion":	PUDETO 341 LOCAL 11	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8671989	,"Longitude":	-73,8295364	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	COLON 180 LOCAL 2012	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7124709	,"Longitude":	-73,1145233	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SAN MARTIN 407	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4817868	,"Longitude":	-73,7636596	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BLANCO 293	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4828719	,"Longitude":	-73,7636332	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	SAN MARTIN 369	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4821281	,"Longitude":	-73,763651	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	SAN MARTIN 321	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4826706	,"Longitude":	-73,7636375	,"Stock":	"SI"}
{"Nombre":	FARMACIA AUSTRAL	"Direccion":	GALVARINO RIVEROS 1000	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4737517	,"Longitude":	-73,7739771	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	ELEUTERIO RAMIREZ 247	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4793025	,"Longitude":	-73,7635803	,"Stock":	"NO"}
{"Nombre":	FARMAUSTRAL	"Direccion":	BERNARDO O	"Region":	AYSEN	,"Comuna":	CHILE CHICO	,"Latitude":	-46,540901	,"Longitude":	-71,72228	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. EJERCITO 470, LOCAL 1040 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4682802	,"Longitude":	-72,9329285	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	AVDA. LA CRUZ 2006 (INTERIOR UNIMARC MIRASOL)	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47504928	,"Longitude":	-72,98350811	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVDA. RAMÓN MUNITA Nº1625, VILLA YOLANDA	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,45565747	,"Longitude":	-72,93600082	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	VOLCÁN HORNOPIRÉN Nº1728, LOCAL 6 Y 7	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4509109	,"Longitude":	-72,9210236	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	ANTONIO VARAS 693 A PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,472929	,"Longitude":	-72,9446449	,"Stock":	"SI"}
{"Nombre":	ECONOFARMA	"Direccion":	SAN DIEGO 437 LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451012	,"Longitude":	-70,650483	,"Stock":	"NO"}
{"Nombre":	NETFARMA	"Direccion":	JULIO COVARRUBIAS 9985	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55293	,"Longitude":	-70,66059	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	21 DE MAYO Nº 1685-1687	"Region":	ANTOFAGASTA	,"Comuna":	TOCOPILLA	,"Latitude":	-22,085578	,"Longitude":	-70,193006	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. LOS NOTROS 1280 LOCAL 11,12,13 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4810568	,"Longitude":	-72,9838731	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	ANTONIO VARAS 875	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4741711	,"Longitude":	-72,9472571	,"Stock":	"SI"}
{"Nombre":	FARMACIA VICTORIA	"Direccion":	21 DE MAYO Nº 1513-1529	"Region":	ANTOFAGASTA	,"Comuna":	TOCOPILLA	,"Latitude":	-22,087498	,"Longitude":	-70,193206	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	GABRIELA MISTRAL 900 LOCAL9,10 Y 11 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,40424758	,"Longitude":	-72,91650653	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. AUSTRAL Nº1400, LOCAL 2 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,44635949	,"Longitude":	-72,93711126	,"Stock":	"NO"}
{"Nombre":	FARMACIA GALENO G	"Direccion":	ALMIRANTE LATORRE N° 795-B	"Region":	ANTOFAGASTA	,"Comuna":	MEJILLONES	,"Latitude":	-23,09989857	,"Longitude":	-70,44747479	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	VOLCAN PUNTIAGUDO Nº100, LOCAL 108, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,46044968	,"Longitude":	-72,9236412	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVDA PARQUE INDUSTRIAL Nº400 EX 300 LOCAL Nº117 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,46016023	,"Longitude":	-72,9541111	,"Stock":	"NO"}
{"Nombre":	FARMACIA FIGUESAN	"Direccion":	ALMIRANTE LATORRE N° 637	"Region":	ANTOFAGASTA	,"Comuna":	MEJILLONES	,"Latitude":	-23,10000589	,"Longitude":	-70,44820569	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CARACOLES Nº359	"Region":	ANTOFAGASTA	,"Comuna":	SAN PEDRO DE ATACAMA	,"Latitude":	-22,91166999	,"Longitude":	-68,19988221	,"Stock":	"SI"}
{"Nombre":	FARMACIA PSUYING TANG	"Direccion":	ANDRÉS BELLO Nº304, LOCAL 1 PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3229566	,"Longitude":	-72,9844912	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. DEL SALVADOR Nº 401 LOCAL 1 , PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,317908	,"Longitude":	-72,9850495	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	CENTRO COMERCIAL DOÑA EMA  LOCAL 30 KM 1.5 RUTA 225  CAMINO ENSENADA	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,32262097	,"Longitude":	-72,94986248	,"Stock":	"SI"}
{"Nombre":	BOTICA NILSSON 1	"Direccion":	BALMACEDA 674	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90536682	,"Longitude":	-71,2500745	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	SAN FRANCISCO Nº 400, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,317269	,"Longitude":	-72,9850813	,"Stock":	"NO"}
{"Nombre":	NUEVA ALAMEDA	"Direccion":	AVENIDA FRANCISCO DE AGUIRRE 605	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90631632	,"Longitude":	-71,24865298	,"Stock":	"SI"}
{"Nombre":	ORIENTE	"Direccion":	CIENFUEGOS 496	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90288438	,"Longitude":	-71,24708715	,"Stock":	"SI"}
{"Nombre":	PERALTA	"Direccion":	ALDUNATE 947	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95253193	,"Longitude":	-71,33826528	,"Stock":	"SI"}
{"Nombre":	ZEDEKIEL ARCANGEL	"Direccion":	FUNDICION SUR 134	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-30,2678015	,"Longitude":	-71,4846396	,"Stock":	"NO"}
{"Nombre":	RIVERA 1	"Direccion":	SAN MARTIN 219	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	-30,03427899	,"Longitude":	-70,71350613	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVDA. DEL SALVADOR Nº400	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,31790723	,"Longitude":	-72,98526764	,"Stock":	"NO"}
{"Nombre":	NUEVA CENTRAL	"Direccion":	COMERCIO 272, COMBARBALÁ	"Region":	COQUIMBO	,"Comuna":	COMBARBALA	,"Latitude":	-31,17731535	,"Longitude":	-71,00305109	,"Stock":	"NO"}
{"Nombre":	CHOAPA	"Direccion":	MANUEL BULNES 498 LOCAL 4	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,78139635	,"Longitude":	-70,9644415	,"Stock":	"SI"}
{"Nombre":	JARUFE	"Direccion":	MATILDE SALAMANCA 199-C,	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,77808136	,"Longitude":	-70,96422131	,"Stock":	"SI"}
{"Nombre":	FARMACIA TANG	"Direccion":	SAN JOSE  Nº 317 PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3173415	,"Longitude":	-72,984554	,"Stock":	"SI"}
{"Nombre":	FARMACIA  "AHUMADA"	"Direccion":	SAN FRANCISCO N°350	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3178909	,"Longitude":	-72,9851825	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	FEDERICO ERRAZURIZ 370, CALBUCO	"Region":	LOS LAGOS	,"Comuna":	CALBUCO	,"Latitude":	-41,770456	,"Longitude":	-73,1273123	,"Stock":	"SI"}
{"Nombre":	FARMACIA GALENO	"Direccion":	ANTONIO VARAS 402 LOS MUERMOS	"Region":	LOS LAGOS	,"Comuna":	LOS MUERMOS	,"Latitude":	-41,3953869	,"Longitude":	-73,46523285	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS CARRERA Nº 1504 LOCAL 1	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04860076	,"Longitude":	-71,43239061	,"Stock":	"NO"}
{"Nombre":	JUMBO	"Direccion":	FRANCISCO BILBAO 8750	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,428755	,"Longitude":	-70,540598	,"Stock":	"SI"}
{"Nombre":	CRUZ DEL SUR	"Direccion":	AVENIDA LOS AROMOS, PARCELA 29, LOCAL8	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2679711	,"Longitude":	-70,09607449	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA RAMON PEREZ OPAZO Nº 3161 LOCAL 5 Y 6	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,26927335	,"Longitude":	-70,10110838	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	TARAPACA 1695	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2146756	,"Longitude":	-70,139008	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SANTIAGO POLANCO 2315 LOCAL 14	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2466913	,"Longitude":	-70,13265556	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	VIVAR 762-A	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2151758	,"Longitude":	-70,14856409	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ELEUTERIO  RAMIREZ 981	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5731825	,"Longitude":	-73,1350991	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ERRAZURIZ 1358	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5731788	,"Longitude":	-73,12657	,"Stock":	"SI"}
{"Nombre":	FARMACIA VERONICA	"Direccion":	ANTONIO VARAS 82 CALBUCO	"Region":	LOS LAGOS	,"Comuna":	CALBUCO	,"Latitude":	-41,7695891	,"Longitude":	-73,1276465	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CESAR ERCILLA 1075	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5814352	,"Longitude":	-73,1169736	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ZENTENO 1530	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,583654	,"Longitude":	-73,1222075	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ELEUTERIO RAMIREZ 935	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5732155	,"Longitude":	-73,1344936	,"Stock":	"SI"}
{"Nombre":	FARMAX	"Direccion":	AVENIDA PROGRESO 2000	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,22891897	,"Longitude":	-70,13097882	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BAQUEDANO Nº 506  LLANQUIHUE	"Region":	LOS LAGOS	,"Comuna":	LLANQUIHUE	,"Latitude":	-41,2546828	,"Longitude":	-73,0061713	,"Stock":	"NO"}
{"Nombre":	FARMACIA LYNCH	"Direccion":	PATRICIO LYNCH 1733	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57472566	,"Longitude":	-73,12008619	,"Stock":	"SI"}
{"Nombre":	FARMACIA PLAZA	"Direccion":	Errazuriz 410	"Region":	LOS LAGOS	,"Comuna":	LLANQUIHUE	,"Latitude":	-41,2571415	,"Longitude":	-73,005636	,"Stock":	"SI"}
{"Nombre":	GENESIS	"Direccion":	AVENIDA LOS AROMOS 3018 L 12	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2692916	,"Longitude":	-70,09529409	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	VICUÑA MACKENNA 3361 LOCAL 2  INTERIOR SUPER-LIDER	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,4835	,"Longitude":	-70,620789	,"Stock":	"NO"}
{"Nombre":	FARMACIA JERUSALEN	"Direccion":	COMERCIO 307, POZO ALMONTE, TARAPACA, CHILE	"Region":	TARAPACA	,"Comuna":	POZO ALMONTE	,"Latitude":	-20,25911891	,"Longitude":	-69,78562563	,"Stock":	"SI"}
{"Nombre":	FARMACIA LAHUEN	"Direccion":	ALMEIDA 11 MAULLIN	"Region":	LOS LAGOS	,"Comuna":	MAULLIN	,"Latitude":	-41,61611208	,"Longitude":	-73,59633118	,"Stock":	"NO"}
{"Nombre":	FARMACIA AUSTRAL	"Direccion":	O'HIGGINS ESQ. PEDRO MALDONADO S/Nº HORNOPIREN COMUNA DE HUALAIHUE	"Region":	LOS LAGOS	,"Comuna":	HUALAIHUE	,"Latitude":	-41,965623	,"Longitude":	-72,4705	,"Stock":	"NO"}
{"Nombre":	LAS AMERICAS	"Direccion":	AVENIDA LAS AMERICAS MANZANA 19 SITIO 1 LA PAMPA	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,28789574	,"Longitude":	-70,103513	,"Stock":	"SI"}
{"Nombre":	NACIONAL	"Direccion":	VIVAR 855 LOCAL 4A	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21550905	,"Longitude":	-70,14867067	,"Stock":	"SI"}
{"Nombre":	FARMACIA BELLO	"Direccion":	AVENIDA LA TIRANA 3745 LOCAL 19	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,26208641	,"Longitude":	-70,12457371	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ELEUTERIO RAMIREZ 903	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57306483	,"Longitude":	-73,13541986	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ELEUTERIO RAMIREZ 884	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5731389	,"Longitude":	-73,1353865	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ELEUTERIO RAMIREZ 1000	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5733039	,"Longitude":	-73,1321691	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ZENTENO 1518	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,583654	,"Longitude":	-73,1222075	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	SARGENTO ALDEA N° 743. PUERTO AYSEN	"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	-45,405236	,"Longitude":	-72,697167	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 307. COYHAIQUE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5722174	,"Longitude":	-72,070786	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AV. LO BARNECHEA 840	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,360463	,"Longitude":	-70,505631	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "AHUMADA"	"Direccion":	SARGENTO ALDEA N° 1089. PUERTO AYSEN	"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	-45,403506	,"Longitude":	-72,69255	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 378. COYHAIQUE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5729543	,"Longitude":	-72,0711755	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	JULIO BUSHMANN 2223	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5752545	,"Longitude":	-73,1115262	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PLAZUELA YUNGAY  N|609	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5733703	,"Longitude":	-73,13043035	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	VICTORIA 380	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5739554	,"Longitude":	-73,1577059	,"Stock":	"SI"}
{"Nombre":	FARMACIA MEDICAMENTA	"Direccion":	ERRAZURIZ 1298	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5731097	,"Longitude":	-73,1275746	,"Stock":	"SI"}
{"Nombre":	ISAIAS 3	"Direccion":	Gregorio Argomedo 832	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4501134	,"Longitude":	-70,2939801	,"Stock":	"SI"}
{"Nombre":	JERUSALEM	"Direccion":	BALMACEDA 272	"Region":	TARAPACA	,"Comuna":	PICA	,"Latitude":	-20,4906225	,"Longitude":	-69,32795763	,"Stock":	"NO"}
{"Nombre":	FARMACIA REPUBLICA	"Direccion":	REAL 1293	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58185581	,"Longitude":	-73,16233635	,"Stock":	"SI"}
{"Nombre":	TU SALUD	"Direccion":	Avenida Capitán Ávalos 2010, local 13	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4888531	,"Longitude":	-70,2855929	,"Stock":	"NO"}
{"Nombre":	PLAYA BRAVA	"Direccion":	AVENIDA PLAYA BRAVA 1890	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2416767	,"Longitude":	-70,1427559	,"Stock":	"NO"}
{"Nombre":	FARMACIA FRUTILLAR	"Direccion":	CARLOS RICHTER 162 FRUTILLAR	"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,12651408	,"Longitude":	-73,05891842	,"Stock":	"SI"}
{"Nombre":	ISAIAS 4	"Direccion":	San Ignacio de Loyola 1067	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4991074	,"Longitude":	-70,307411	,"Stock":	"SI"}
{"Nombre":	FARMACIA RAHUE	"Direccion":	TEMUCO 633	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5784273	,"Longitude":	-73,1559175	,"Stock":	"SI"}
{"Nombre":	CONCEPCION	"Direccion":	Cristóbal Colón 517	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4774109	,"Longitude":	-70,3179266	,"Stock":	"NO"}
{"Nombre":	PRINCIPAL	"Direccion":	SARGENTO ALDEA  739-A	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,215827	,"Longitude":	-70,1480556	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	21 de Mayo 299	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,478343	,"Longitude":	-70,318959	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	VIVAR 647	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2141697	,"Longitude":	-70,1485423	,"Stock":	"NO"}
{"Nombre":	FARMACIA CONDELL	"Direccion":	SAN CARLOS Nº 424, FRESIA	"Region":	LOS LAGOS	,"Comuna":	FRESIA	,"Latitude":	-41,15213581	,"Longitude":	-73,41915518	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	21 de Mayo 399	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4787936	,"Longitude":	-70,3181522	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Cristóbal Colón 601	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4772242	,"Longitude":	-70,3175857	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	18 de Septiembre 1063	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4825954	,"Longitude":	-70,3123376	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	18 de Septiembre 2501	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4902393	,"Longitude":	-70,2894061	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN IGNACIO	"Direccion":	PATRICIO LYNCH 1742	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57459528	,"Longitude":	-73,12002182	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	21 de Mayo 383	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4787835	,"Longitude":	-70,3183398	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	TARAPACA 671-683	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21391831	,"Longitude":	-70,14884233	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	General Manuel Baquedano 561	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,47804376	,"Longitude":	-70,31725513	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA ARTURO PRAT 1732	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,24135633	,"Longitude":	-70,14388025	,"Stock":	"SI"}
{"Nombre":	FARMAHORIZONTE	"Direccion":	Benjamin Vicuña Mackenna 538	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4820494	,"Longitude":	-70,312568	,"Stock":	"NO"}
{"Nombre":	FARMAX	"Direccion":	Avenida Manuel Castillo Ibaceta 3431	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,5013913	,"Longitude":	-70,2840821	,"Stock":	"SI"}
{"Nombre":	ISAIAS	"Direccion":	Cancha Rayada 4136	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4380166	,"Longitude":	-70,290278	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	RUTA A -16 3350 LOCAL 3 SUPERMERCADO UNIMARC	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,272929	,"Longitude":	-70,095332	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	HEROES DE LA CONCEPCION 2555, MALL LAS AMERICAS	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23375108	,"Longitude":	-70,142802	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Cristóbal Colón 598	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4774508	,"Longitude":	-70,3175743	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	21 de Mayo 300	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4785935	,"Longitude":	-70,3188784	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITAL	"Direccion":	AVENIDA LOS ALAMOS  1056-B	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,265327	,"Longitude":	-70,101574	,"Stock":	"NO"}
{"Nombre":	ZONA VITAL	"Direccion":	LA PAMPA 3779 LOCAL 3-4 SECTOR A 1	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2781833	,"Longitude":	-70,09883009	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PEDRO AGUIRRE CERDA 0413	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1716395	,"Longitude":	-70,9435415	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SARMIENTO 722	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1564064	,"Longitude":	-70,901824	,"Stock":	"NO"}
{"Nombre":	LA ESTRELLA	"Direccion":	IGNACIO CARRERA PINTO 716	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,15896899	,"Longitude":	-70,9051609	,"Stock":	"SI"}
{"Nombre":	LA ESTRELLA	"Direccion":	AV. SALVADOR ALLENDE    0349	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,15860874	,"Longitude":	-70,93168259	,"Stock":	"SI"}
{"Nombre":	FARMACIAS OSORNO	"Direccion":	PATRICIO LYNCH  1598	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,574318	,"Longitude":	-73,122865	,"Stock":	"SI"}
{"Nombre":	FUENTE DE SALUD	"Direccion":	JOSÉ MENÉNDEZ 619-A	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,15806836	,"Longitude":	-70,91516018	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	ELEUTERIO RAMIREZ Nº 690	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5729657	,"Longitude":	-73,1386442	,"Stock":	"SI"}
{"Nombre":	FARMACIA REPUBLICA	"Direccion":	REPUBLICA 440	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,573883	,"Longitude":	-73,151848	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PEDRO MONTT 296	"Region":	LOS LAGOS	,"Comuna":	PURRANQUE	,"Latitude":	-40,912669	,"Longitude":	-73,159155	,"Stock":	"NO"}
{"Nombre":	PUERTO NATALES	"Direccion":	ESMERALDA 701	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,7281549	,"Longitude":	-72,50075289	,"Stock":	"SI"}
{"Nombre":	FARMACIA SUR	"Direccion":	PEDRO MONTT 126	"Region":	LOS LAGOS	,"Comuna":	PURRANQUE	,"Latitude":	-40,91432335	,"Longitude":	-73,15907478	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	BORIES 683	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1580992	,"Longitude":	-70,9045563	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR SIMI	"Direccion":	ELEUTERIO RAMIREZ 370	"Region":	LOS LAGOS	,"Comuna":	PURRANQUE	,"Latitude":	-40,91268152	,"Longitude":	-73,1604588	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BORIES 970-972	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,16172221	,"Longitude":	-70,90842247	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE NOGUEIRA 1120	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1630936	,"Longitude":	-70,9095965	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BORIES 701	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,15887051	,"Longitude":	-70,90532261	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BAQUEDANO 331	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,7333	,"Longitude":	-72,50378	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PADRE ZAVATTARO 388	"Region":	MAGALLANES	,"Comuna":	PORVENIR	,"Latitude":	-53,29626015	,"Longitude":	-70,36828995	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SOTOMAYOR Nº 1898	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4625212	,"Longitude":	-68,9245562	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ELEUTERIO RAMIREZ Nº 2031	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4619078	,"Longitude":	-68,9259892	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ELEUTERIO RAMIREZ Nº 2092	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4619083	,"Longitude":	-68,9269157	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VIVAR Nº 1902-1912, LOCAL 1051	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4618494	,"Longitude":	-68,9246287	,"Stock":	"NO"}
{"Nombre":	FARMACIA QUINCHAO	"Direccion":	SERRANO Nº 019, ACHAO	"Region":	LOS LAGOS	,"Comuna":	QUINCHAO	,"Latitude":	-42,471176	,"Longitude":	-73,491798	,"Stock":	"NO"}
{"Nombre":	FARMACIA NACIMIENTO	"Direccion":	CALLE CENTENARIO Nº186, CHONCHI	"Region":	LOS LAGOS	,"Comuna":	CHONCHI	,"Latitude":	-42,62276522	,"Longitude":	-73,77264619	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DR SIMI	"Direccion":	ARTURO PRAT Nº 615. COYHAIQUE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5751624	,"Longitude":	-72,0725319	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "SALCOBRAND"	"Direccion":	FRANCISCO BILBAO Nº 326. COYHAIQUE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5722302	,"Longitude":	-72,0703806	,"Stock":	"SI"}
{"Nombre":	REDPOPULAR LOCAL N°1	"Direccion":	LATORRE Nº 1903	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4696522	,"Longitude":	-68,9244232	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	LATORRE Nº 1997	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4592304	,"Longitude":	-68,9257965	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. GRANADEROS Nª 1474	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4658451	,"Longitude":	-68,9272766	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	LATORRE Nº 1965	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4697647	,"Longitude":	-68,9248276	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	LATORRE Nº 1883 LOCAL 4	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4697533	,"Longitude":	-68,9247894	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	LATORRE Nº 1979	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4697914	,"Longitude":	-68,9249268	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. GRANADEROS Nº 3651, L-1070	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4463736	,"Longitude":	-68,9279296	,"Stock":	"SI"}
{"Nombre":	REDPOPULAR LOCAL N°2	"Direccion":	AV. ACONCAGUA Nº 2588	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4722626	,"Longitude":	-68,9325047	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CHORRILLOS Nº 1749, INT JUMBO	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,45586785	,"Longitude":	-68,92384529	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. BALMACEDA Nº 3242, L-104	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,44970095	,"Longitude":	-68,92081416	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. GRAU Nº 1060	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4437746	,"Longitude":	-68,9047366	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. BALMACEDA Nº 3242, L-145	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4494937	,"Longitude":	-68,9206109	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. BALMACEDA Nº 3242, L-116	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,44866419	,"Longitude":	-68,92088413	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. BALMACEDA Nº 3242, INT. LIDER	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,45046886	,"Longitude":	-68,92138839	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. CHORRILLOS Nº 1749, L-109, INT JUMBO	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,45525806	,"Longitude":	-68,92409742	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MAIPU Nº 745	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6513861	,"Longitude":	-70,3970822	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COQUIMBO Nº 712	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65466647	,"Longitude":	-70,40178001	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	M. A. MATTA Nº 2503-2511	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6502202	,"Longitude":	-70,3966426	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. GRECIA Nº 430	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,67061537	,"Longitude":	-70,40711761	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. ANGAMOS Nº785	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,66701893	,"Longitude":	-70,40427446	,"Stock":	"SI"}
{"Nombre":	FARMACIA GALENO	"Direccion":	LAS CRUCES Nº 790	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,67525605	,"Longitude":	-70,40797614	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. ANGAMOS Nº 745, LOCAL 2040	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,66764835	,"Longitude":	-70,40442342	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. ARGENTINA Nº 01910	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6927042	,"Longitude":	-70,4100382	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	IGNACIO CARRERA PINTO Nº909	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,58404737	,"Longitude":	-70,38110018	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	CAPARROSA Nº355	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,56486101	,"Longitude":	-70,39087584	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº8700	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5873263	,"Longitude":	-70,3900052	,"Stock":	"SI"}
{"Nombre":	DEL NORTE	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 5750	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,61735403	,"Longitude":	-70,38905721	,"Stock":	"SI"}
{"Nombre":	EKONOFARMA	"Direccion":	HUAMACHUCO Nº8481-A	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5915151	,"Longitude":	-70,38084269	,"Stock":	"SI"}
{"Nombre":	ECOMAX L-1	"Direccion":	F. SALAZAR Nº 01650	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,75199181	,"Longitude":	-72,61786541	,"Stock":	"NO"}
{"Nombre":	F.PINTO L-1	"Direccion":	A. PINTO Nº11	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73428372	,"Longitude":	-72,57953453	,"Stock":	"SI"}
{"Nombre":	FARMACIA CRUZ AZUL SEVILLA	"Direccion":	A. PINTO Nº 196	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73668012	,"Longitude":	-72,58048846	,"Stock":	"NO"}
{"Nombre":	FARMAX L-2	"Direccion":	M. RECABARREN Nº 02320	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,75688558	,"Longitude":	-72,64015423	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA" L-320	"Direccion":	AV. ALEMANIA Nº 0671 L.2086	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73417037	,"Longitude":	-72,61122572	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L-435	"Direccion":	AV. ALEMANIA Nº 0671 L-1107	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73437101	,"Longitude":	-72,61144	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-372	"Direccion":	AV. ALEMANIA Nº 0671 L-1002	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73451416	,"Longitude":	-72,61152253	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-947	"Direccion":	RUDECINDO ORTEGA Nº 01575 L-1 Y 2	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,71779726	,"Longitude":	-72,56541263	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-370	"Direccion":	AV. ALEMANIA Nº 0671 L-1011	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73429651	,"Longitude":	-72,61128767	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F0070	"Direccion":	AV. BALMACEDA Nº 1498	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7347873	,"Longitude":	-72,58007749	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMA LAWEN	"Direccion":	HUICHAHUE Nº260	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,760716	,"Longitude":	-72,591414	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"(L-331)	"Direccion":	LAUTARO Nº 84	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79806516	,"Longitude":	-72,7064541	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" (L-406)	"Direccion":	CHORRILLOS Nº 402	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79814646	,"Longitude":	-72,70779702	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	PEDRO AGUIRRE Nº 421 L-1 Y 2	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79832446	,"Longitude":	-72,71066467	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"(L-610)	"Direccion":	LAUTARO Nº 302	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79823919	,"Longitude":	-72,70934287	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI F0182	"Direccion":	LAUTARO Nº 1	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79807521	,"Longitude":	-72,70547086	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITASUR (L-01)	"Direccion":	OHIGGINS Nº 1257 L-4	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,80719191	,"Longitude":	-72,68958132	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAEXPRESS	"Direccion":	CRNEL. ILABACA Nº 810	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,79357331	,"Longitude":	-72,70579295	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"  L 340	"Direccion":	OHIGGINS Nº 412	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,27597698	,"Longitude":	-71,97443389	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L 434	"Direccion":	OHIGGINS Nº 717 L- 1 Y 2	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,27501254	,"Longitude":	-71,97025653	,"Stock":	"SI"}
{"Nombre":	FARMACIA RELMU	"Direccion":	FRESIA Nº 354	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,2760737	,"Longitude":	-71,9765094	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L 371	"Direccion":	OHIGGINS Nº 400	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,27600807	,"Longitude":	-71,97459274	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L 373	"Direccion":	OHIGGINS Nº 302	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,27641503	,"Longitude":	-71,97594189	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUCÓN	"Direccion":	CAM. INTERNACIONAL Nº 2000 L-3	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,28295395	,"Longitude":	-71,95024383	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"(L-492)	"Direccion":	GRAL. LAGOS Nº 567	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23443301	,"Longitude":	-72,33275309	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" 774	"Direccion":	GRAL. LAGOS Nº 522	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23462052	,"Longitude":	-72,33316347	,"Stock":	"SI"}
{"Nombre":	FARMACIA CENTRAL 01	"Direccion":	CONFEDERACIÓN SUIZA Nº1268	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,2350856	,"Longitude":	-72,33236692	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"(L-608)	"Direccion":	PISAGUA Nº 1257-A	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23503082	,"Longitude":	-72,33361683	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SANTA CRUZ Nº 795	"Region":	ARAUCANIA	,"Comuna":	TRAIGUEN	,"Latitude":	-38,24913427	,"Longitude":	-72,66859613	,"Stock":	"NO"}
{"Nombre":	FARMACIA MIRAFLORES	"Direccion":	SANTA CRUZ Nº 730	"Region":	ARAUCANIA	,"Comuna":	TRAIGUEN	,"Latitude":	-38,24863084	,"Longitude":	-72,66831718	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	SANTA CRUZ Nº 902	"Region":	ARAUCANIA	,"Comuna":	TRAIGUEN	,"Latitude":	-38,25050553	,"Longitude":	-72,66838155	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	SANTA CRUZ Nº 813	"Region":	ARAUCANIA	,"Comuna":	TRAIGUEN	,"Latitude":	-38,24953238	,"Longitude":	-72,66860686	,"Stock":	"NO"}
{"Nombre":	FARMACIA CRISTAL	"Direccion":	OHIGGINS Nº 405	"Region":	ARAUCANIA	,"Comuna":	CURACAUTIN	,"Latitude":	-38,4373866	,"Longitude":	-71,89296468	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	OHIGGINS Nº 640	"Region":	ARAUCANIA	,"Comuna":	CURACAUTIN	,"Latitude":	-38,43785511	,"Longitude":	-71,88985332	,"Stock":	"SI"}
{"Nombre":	FARMACHILE	"Direccion":	SOTOMAYOR Nº 398	"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,745978	,"Longitude":	-72,95115697	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	A. PRAT Nº 269	"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,74448016	,"Longitude":	-72,95282531	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	P. DE VALDIVIA Nº 117	"Region":	ARAUCANIA	,"Comuna":	CARAHUE	,"Latitude":	-38,71134337	,"Longitude":	-73,1667196	,"Stock":	"SI"}
{"Nombre":	FARMACHILE	"Direccion":	LAUTARO Nº 298	"Region":	ARAUCANIA	,"Comuna":	CARAHUE	,"Latitude":	-38,71230821	,"Longitude":	-73,16674911	,"Stock":	"NO"}
{"Nombre":	FARMACIA TOLTÉN	"Direccion":	SAN MARTÍN Nº 548	"Region":	ARAUCANIA	,"Comuna":	TOLTEN	,"Latitude":	-39,17795818	,"Longitude":	-73,16193455	,"Stock":	"NO"}
{"Nombre":	FARMACIA CUNCO	"Direccion":	AV. SANTA MARÍA Nº 520	"Region":	ARAUCANIA	,"Comuna":	CUNCO	,"Latitude":	-38,93273201	,"Longitude":	-72,03106586	,"Stock":	"SI"}
{"Nombre":	FARMACIA PARIS	"Direccion":	LORD COCHRANE Nº 600	"Region":	ARAUCANIA	,"Comuna":	GORBEA	,"Latitude":	-39,10233649	,"Longitude":	-72,67400565	,"Stock":	"SI"}
{"Nombre":	FARMACIA RUKALAHUEN	"Direccion":	SAAVEDRA Nº 393	"Region":	ARAUCANIA	,"Comuna":	PUREN	,"Latitude":	-38,03396901	,"Longitude":	-73,07264724	,"Stock":	"SI"}
{"Nombre":	F. "CRUZ VERDE" L-376	"Direccion":	CAMILO HENRIQUEZ Nº445	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28140737	,"Longitude":	-72,22680201	,"Stock":	"NO"}
{"Nombre":	F. "CRUZ VERDE" L-375	"Direccion":	AV. P. DE VALDIVIA Nº 712	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28280105	,"Longitude":	-72,22792324	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND" L-293	"Direccion":	CAMILO HENRIQUEZ Nº288 L. 05	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28028686	,"Longitude":	-72,22533528	,"Stock":	"NO"}
{"Nombre":	F. "AHUMADA" L-231	"Direccion":	CAMILO HENRIQUEZ Nº555	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2824414	,"Longitude":	-72,2278521	,"Stock":	"NO"}
{"Nombre":	F. DERIVAL	"Direccion":	P. MONTT Nº 563	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28311564	,"Longitude":	-72,22667141	,"Stock":	"SI"}
{"Nombre":	DR. SIMI 63 CL063	"Direccion":	CAMILO HENRIQUEZ Nº 490	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28191073	,"Longitude":	-72,22693394	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	OHIGGINS Nº 707	"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,5309316	,"Longitude":	-72,43402816	,"Stock":	"SI"}
{"Nombre":	F. OHIGGINS	"Direccion":	OHIGGINS Nº 916	"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,53289434	,"Longitude":	-72,43522592	,"Stock":	"NO"}
{"Nombre":	F. "SALCOBRAND"	"Direccion":	OHIGGINS Nº 812	"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,53154941	,"Longitude":	-72,43464656	,"Stock":	"SI"}
{"Nombre":	F. "CRUZ VERDE"	"Direccion":	AV. FCO. BILBAO Nº 496	"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,9863501	,"Longitude":	-72,63823983	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	OCARROL Nº 964	"Region":	ARAUCANIA	,"Comuna":	COLLIPULLI	,"Latitude":	-37,95695866	,"Longitude":	-72,43627247	,"Stock":	"NO"}
{"Nombre":	FARMACIA VITASUR IV	"Direccion":	OCARROL Nº 1002	"Region":	ARAUCANIA	,"Comuna":	COLLIPULLI	,"Latitude":	-37,95675901	,"Longitude":	-72,43659829	,"Stock":	"SI"}
{"Nombre":	F. FRANCIA	"Direccion":	P. MONTT Nº 648	"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,37087366	,"Longitude":	-72,6314835	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	CARRETERA EL COBRE N° 759	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,18395938	,"Longitude":	-70,72506137	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CORDOVEZ 671	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9032268	,"Longitude":	-71,2478462	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RUTA 5, PARCELA 69, SECTOR VEGA SUR, LOCAL 1033, MALL PORTAL	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91580758	,"Longitude":	-71,25859035	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 3464	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93241438	,"Longitude":	-71,25918401	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CORDOVEZ 510	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90300606	,"Longitude":	-71,24987153	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	A. SOLARI 1400 LOCAL E-11	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91267685	,"Longitude":	-71,25794072	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BENAVENTE 1	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6017851	,"Longitude":	-71,19722333	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	V. MACKENNA 56, OVALLE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6029773	,"Longitude":	-71,20057228	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ARTURO PRAT 182, VICUÑA	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	-30,0348947	,"Longitude":	-70,7121516	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	IGNACIO SILVA 217	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63124324	,"Longitude":	-71,16525716	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	REGIMIENTO ARICA 6145 LOCAL 5	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94911228	,"Longitude":	-71,26961012	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CORDOVEZ 651	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90324096	,"Longitude":	-71,24799746	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BRASIL 765	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90138279	,"Longitude":	-71,24630162	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	BALMACEDA 3463	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93352575	,"Longitude":	-71,26026164	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	A. SOLARI 1400 LOCAL 2021-2025	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91235229	,"Longitude":	-71,25782542	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LOS ALAMOS 580, SINDEMPART	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,98796905	,"Longitude":	-71,3358322	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	V. MACKENNA 72 - 90	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6052776	,"Longitude":	-71,2072376	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALBERTO SOLARI 1400 LOCAL 104 B 108 112 Y 116	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91222503	,"Longitude":	-71,2581714	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CIENFUEGOS 491	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9028975	,"Longitude":	-71,2472847	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CORDOVEZ 588, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90293264	,"Longitude":	-71,24903876	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALDUNATE 1447	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95688132	,"Longitude":	-71,33930101	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	V. MACKENNA 46	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6022992	,"Longitude":	-71,1987278	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVDA. FCO. DE AGUIRRE 2 LOCAL 9 Y 10	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90106706	,"Longitude":	-71,25811174	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	DOMEYKO 55	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9642606	,"Longitude":	-71,3303492	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	CONSTITUCIÓN 389	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,62980414	,"Longitude":	-71,16384297	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BALMACEDA 3039, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9285576	,"Longitude":	-71,25871476	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALEJANDRO RODRÍGUEZ	"Direccion":	BENAVENTE 82	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6007286	,"Longitude":	-71,1947596	,"Stock":	"SI"}
{"Nombre":	ECONAT	"Direccion":	CONSTITUCIÓN 636	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63027671	,"Longitude":	-71,16302002	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	REGIMIENTO ARICA 6001	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94894516	,"Longitude":	-71,27247433	,"Stock":	"SI"}
{"Nombre":	ECONAT	"Direccion":	CONSTITUCIÓN N°490	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,6307543	,"Longitude":	-71,1642824	,"Stock":	"NO"}
{"Nombre":	NUEVA ESTRELLA	"Direccion":	CAUPOLICÁN 789	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,9113128	,"Longitude":	-71,5029814	,"Stock":	"SI"}
{"Nombre":	EL INDIECITO	"Direccion":	CAUPOLICÁN 484	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,91039926	,"Longitude":	-71,51027992	,"Stock":	"NO"}
{"Nombre":	SAN ALFONSO	"Direccion":	JOSE MIGUEL CARRERA 136	"Region":	COQUIMBO	,"Comuna":	MONTE PATRIA	,"Latitude":	-30,6946231	,"Longitude":	-70,9583059	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 1397	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9133142	,"Longitude":	-71,2519735	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RUTA 5 1500 LOCAL 1009 MALL PORTAL	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91359517	,"Longitude":	-71,25921203	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. EL SAUCE 981, LOCAL 105, SINDEMPART	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,98737	,"Longitude":	-71,34243	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	CARRETERA EL COBRE N°190	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,18106599	,"Longitude":	-70,73014684	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	BALMACEDA 2154	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,92142938	,"Longitude":	-71,25498984	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CORDOVEZ 601 - 607	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9031511	,"Longitude":	-71,2484874	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VICUÑA MACKENNA 180	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6052776	,"Longitude":	-71,2072376	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALDUNATE 1310-1312	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9557066	,"Longitude":	-71,3389743	,"Stock":	"SI"}
{"Nombre":	SANTO REMEDIO	"Direccion":	INDEPENDENCIA 41	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,6323167	,"Longitude":	-71,1689148	,"Stock":	"SI"}
{"Nombre":	SAN ALFONSO	"Direccion":	ANDRES BELLO 339	"Region":	COQUIMBO	,"Comuna":	MONTE PATRIA	,"Latitude":	-30,76850063	,"Longitude":	-70,94136016	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VICUÑA MACKENNA 184	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6052776	,"Longitude":	-71,2072376	,"Stock":	"NO"}
{"Nombre":	ESBAL	"Direccion":	LAS ORQUIDEAS 4369, LOCAL 19, VILLA LA FLORIDA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91576275	,"Longitude":	-71,21378148	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	NICARAGUA 1571, LAS COMPAÑIAS	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,8868057	,"Longitude":	-71,2427822	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. EL LIBERTADOR 1401, LOCAL 1618, CENTRO COMERCIAL SISA NORTE, LAS COMPAÑIAS	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,88825697	,"Longitude":	-71,24346629	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	Avenida Balmaceda 887	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9073079	,"Longitude":	-71,2500897	,"Stock":	"SI"}
{"Nombre":	FARMA OFERTAS	"Direccion":	VICUÑA MACKENNA 233	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6029535	,"Longitude":	-71,2011749	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	LINARES 580, TIERRAS BLANCAS	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96156317	,"Longitude":	-71,2604667	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	CIENFUEGOS 375 LOCAL C	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9017216	,"Longitude":	-71,2470563	,"Stock":	"NO"}
{"Nombre":	SALAMANCA	"Direccion":	MANUEL BULNES 421-A	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,781463	,"Longitude":	-70,9644018	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SANTIAGO DEL APOSTOL 4063, LOCAL 15-16- Y 17	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9438006	,"Longitude":	-71,2465849	,"Stock":	"NO"}
{"Nombre":	LOHSE	"Direccion":	Matilde Salamanca 220	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,7785922	,"Longitude":	-70,9648235	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	LOS CLARINES 59, SINDEMPART	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9786341	,"Longitude":	-71,3447287	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHACABUCO 302	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	-30,03461219	,"Longitude":	-70,71331421	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GABRIELA MISTRAL 3251 LOCAL	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93887251	,"Longitude":	-71,25025233	,"Stock":	"SI"}
{"Nombre":	FARMAVITAL	"Direccion":	CIENFUEGOS 451	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9026509	,"Longitude":	-71,2472751	,"Stock":	"NO"}
{"Nombre":	FARMACIAS REGIONAL	"Direccion":	ALDUNATE 1676	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95882993	,"Longitude":	-71,33961364	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	GABRIELA MISTRAL 514	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	-30,03369514	,"Longitude":	-70,71046082	,"Stock":	"NO"}
{"Nombre":	FARMACIA KARVIC	"Direccion":	SANTIAGO TRIGO 570	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9663018	,"Longitude":	-71,3364766	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	AVDA. VIÑA DEL MAR 2960	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,8725681	,"Longitude":	-71,2376994	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MATILDE SALAMANCA 221	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,7789743	,"Longitude":	-70,96462417	,"Stock":	"SI"}
{"Nombre":	PUNTO BLANCO 2	"Direccion":	ESMERALDA 2399, LAS COMPAÑIAS	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,87768638	,"Longitude":	-71,24611599	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	ALDUNATE 1185	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95469738	,"Longitude":	-71,33876655	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA 18 SEPTIEMBRE 5040 LOCAL 9-10	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91837026	,"Longitude":	-71,20976499	,"Stock":	"SI"}
{"Nombre":	FARMACIAS A.L.A	"Direccion":	Linares 703	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9620714	,"Longitude":	-71,2588352	,"Stock":	"NO"}
{"Nombre":	FARMACIA RENDIC	"Direccion":	JUAN BOLIVAR N° 314	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5873169	,"Longitude":	-70,389949	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	CARRETERA EL COBRE N° 1002	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,18697693	,"Longitude":	-70,71965404	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BRASIL N° 801	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16931711	,"Longitude":	-70,74636614	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	INDEPENDENCIA N° 602	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1699638	,"Longitude":	-70,74366	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMANUESTRA	"Direccion":	BANDERA Nº 7525	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6010845	,"Longitude":	-70,3822838	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	DR. SALINAS N° 1165	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1666809	,"Longitude":	-70,75073102	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	RECREO N° 620, LOCALES 7,8 Y 9	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1594654	,"Longitude":	-70,73820107	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CARRETERA EL COBRE N° 750 LOCAL 1030	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,18497116	,"Longitude":	-70,7244391	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MIGUEL RAMIREZ N ° 1550 LOCAL 3	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17568527	,"Longitude":	-70,70443723	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ALAMEDA N° 604, LOCAL 1	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16546567	,"Longitude":	-70,74261153	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	C.C. OVIEDO CAVADA Nº 5319	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,62358853	,"Longitude":	-70,38475335	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA EINSTEIN N°287 LOCAL 116	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17291897	,"Longitude":	-70,71713087	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 9400	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5792976	,"Longitude":	-70,3905271	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SAMUEL ROMAN ROJAS N° 810 LOCAL 1	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,13945568	,"Longitude":	-70,73590051	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	INDEPENDENCIA N° 798	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1694815	,"Longitude":	-70,746165	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	INDEPENDENCIA N° 615	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1698216	,"Longitude":	-70,7435056	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA EINSTEIN N°287 LOCAL 110	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17263239	,"Longitude":	-70,71694943	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CARRETERA EL COBRE N° 750 LOCAL 1069	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,18447657	,"Longitude":	-70,72536342	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	INDEPENDENCIA N° 548  A 566	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1699315	,"Longitude":	-70,742939	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	RECREO N° 620 LOCALES15 A 17	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1594654	,"Longitude":	-70,7384371	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	M. A. MATTA Nº1919	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6543555	,"Longitude":	-70,4017928	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	MANUEL RODRIGUEZ N° 901	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58791301	,"Longitude":	-70,98522291	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	A. PRAT Nº 553-555	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6484309	,"Longitude":	-70,3968487	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	MANUEL RODRIGUEZ 796	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58777223	,"Longitude":	-70,98679706	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CARAMPANGUE N° 923	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58627788	,"Longitude":	-70,99079108	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MANUEL RODRIGUEZ N° 787 LOCALES 1 Y 2	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58757172	,"Longitude":	-70,98674276	,"Stock":	"NO"}
{"Nombre":	VÍA VERDE	"Direccion":	AVENIDA LA COMPAÑÍA N° 093	"Region":	OHIGGINS	,"Comuna":	GRANEROS	,"Latitude":	-34,068378	,"Longitude":	-70,724356	,"Stock":	"SI"}
{"Nombre":	GRANEROS	"Direccion":	AVENIDA LA COMPAÑÍA N° 329	"Region":	OHIGGINS	,"Comuna":	GRANEROS	,"Latitude":	-34,067408	,"Longitude":	-70,728391	,"Stock":	"NO"}
{"Nombre":	LA COMPAÑÍA	"Direccion":	AVENIDA LA COMPAÑÍA N° 028	"Region":	OHIGGINS	,"Comuna":	GRANEROS	,"Latitude":	-34,068042	,"Longitude":	-70,725371	,"Stock":	"NO"}
{"Nombre":	SAN JUAN	"Direccion":	JOSÉ MIGUEL CARRERA N° 385	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,2920636	,"Longitude":	-71,30947457	,"Stock":	"SI"}
{"Nombre":	RAPEL	"Direccion":	CARLOS FRENOS, 350, LAS CABRAS	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,2932184	,"Longitude":	-71,3126292	,"Stock":	"SI"}
{"Nombre":	FARCO	"Direccion":	MANUEL RODRIGUEZ 538, PERALILLO	"Region":	OHIGGINS	,"Comuna":	PERALILLO	,"Latitude":	-34,47899041	,"Longitude":	-71,48123476	,"Stock":	"SI"}
{"Nombre":	PERALILLO	"Direccion":	AVENIDA ERRÁZURIZ N° 368	"Region":	OHIGGINS	,"Comuna":	PERALILLO	,"Latitude":	-34,47992126	,"Longitude":	-71,47913727	,"Stock":	"NO"}
{"Nombre":	CUARTOCENTENARIO	"Direccion":	INDEPENDENCIA N° 562	"Region":	OHIGGINS	,"Comuna":	PICHIDEGUA	,"Latitude":	-34,35903623	,"Longitude":	-71,2824977	,"Stock":	"SI"}
{"Nombre":	LO MIRANDA	"Direccion":	LAS CARMELITAS N° 44-D	"Region":	OHIGGINS	,"Comuna":	DOÑIHUE	,"Latitude":	-34,19839987	,"Longitude":	-70,88969001	,"Stock":	"NO"}
{"Nombre":	M & M	"Direccion":	CARMEN LARRAÍN N° 42	"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,70828747	,"Longitude":	-71,04289105	,"Stock":	"NO"}
{"Nombre":	LOURDES	"Direccion":	DELFÍN CARVALLO N° 440-A	"Region":	OHIGGINS	,"Comuna":	DOÑIHUE	,"Latitude":	-34,22630711	,"Longitude":	-70,96454438	,"Stock":	"SI"}
{"Nombre":	SAN ENRIQUE	"Direccion":	HERMANOS CARRERA N° 544	"Region":	OHIGGINS	,"Comuna":	LITUECHE	,"Latitude":	-34,1142851	,"Longitude":	-71,7260195	,"Stock":	"SI"}
{"Nombre":	FLORES	"Direccion":	ARTURO PRAT N° 487	"Region":	OHIGGINS	,"Comuna":	MARCHIGUE	,"Latitude":	-34,3953308	,"Longitude":	-71,621572	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANUEL RODRÍGUEZ 232-C, NANCAGUA	"Region":	OHIGGINS	,"Comuna":	NANCAGUA	,"Latitude":	-34,65103208	,"Longitude":	-71,20323981	,"Stock":	"NO"}
{"Nombre":	PRINCIPAL	"Direccion":	ARMANDO JARAMILLO N° 161	"Region":	OHIGGINS	,"Comuna":	NANCAGUA	,"Latitude":	-34,65131963	,"Longitude":	-71,20469065	,"Stock":	"SI"}
{"Nombre":	EKONOFARMACIA II	"Direccion":	JUAN MONTES ESQUINA PROGRESO S/N	"Region":	OHIGGINS	,"Comuna":	NAVIDAD	,"Latitude":	-33,959395	,"Longitude":	-71,829519	,"Stock":	"NO"}
{"Nombre":	MATUS	"Direccion":	ARGOMEDO N° 1895	"Region":	OHIGGINS	,"Comuna":	QUINTA DE TILCOCO	,"Latitude":	-34,35539136	,"Longitude":	-70,96364216	,"Stock":	"NO"}
{"Nombre":	MAGISTRAL	"Direccion":	DEMOCRACIA N° 135-B	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40692643	,"Longitude":	-70,8608348	,"Stock":	"SI"}
{"Nombre":	HOSPITAL	"Direccion":	DEMOCRACIA N° 91-A	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40711814	,"Longitude":	-70,86052121	,"Stock":	"SI"}
{"Nombre":	MAGISTRAL	"Direccion":	MURIALDO N° 46-A	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":	-34,29839171	,"Longitude":	-70,82114815	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAS	"Direccion":	MONSEÑOR LARRAÍN N° 1499	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,57369109	,"Longitude":	-70,99489554	,"Stock":	"NO"}
{"Nombre":	LOURDES	"Direccion":	MANUEL RODRÍGUEZ N° 1079	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58850049	,"Longitude":	-70,9824726	,"Stock":	"SI"}
{"Nombre":	VÍA VERDE	"Direccion":	INDEPENDENCIA N° 361-B	"Region":	OHIGGINS	,"Comuna":	SAN FRANCISCO DE MOSTAZAL	,"Latitude":	-33,97852603	,"Longitude":	-70,71232482	,"Stock":	"NO"}
{"Nombre":	KARMEL	"Direccion":	SAN GUILLERMO N° 358	"Region":	OHIGGINS	,"Comuna":	SAN FRANCISCO DE MOSTAZAL	,"Latitude":	-33,97725654	,"Longitude":	-70,71014344	,"Stock":	"NO"}
{"Nombre":	CRUZ DEL SUR	"Direccion":	GERMÁN RIESCO N° 1096	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43899912	,"Longitude":	-71,07928108	,"Stock":	"SI"}
{"Nombre":	CARDEMIL	"Direccion":	RAFAEL CASANOVA N° 158-D	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64103665	,"Longitude":	-71,36695875	,"Stock":	"SI"}
{"Nombre":	ALLIENDE	"Direccion":	RAFAEL CASANOVA N° 135	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64114956	,"Longitude":	-71,3676717	,"Stock":	"SI"}
{"Nombre":	CORDILLERA	"Direccion":	RAFAEL TAGLE N° 88	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":	-34,2941869	,"Longitude":	-70,8189692	,"Stock":	"NO"}
{"Nombre":	POSTO VERDE	"Direccion":	INDEPENDENCIA N° 639	"Region":	OHIGGINS	,"Comuna":	PICHIDEGUA	,"Latitude":	-34,36013447	,"Longitude":	-71,28071671	,"Stock":	"SI"}
{"Nombre":	POSTO VERDE	"Direccion":	SAN MARTÍN N° 209-A	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4055515	,"Longitude":	-70,8608034	,"Stock":	"NO"}
{"Nombre":	POSTO VERDE	"Direccion":	SARMIENTO N° 378	"Region":	OHIGGINS	,"Comuna":	PEUMO	,"Latitude":	-34,39270923	,"Longitude":	-71,16894174	,"Stock":	"NO"}
{"Nombre":	MEJOR SALUD	"Direccion":	CAMINO LAS ROSAS N° 5, LOCAL 1	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,16622606	,"Longitude":	-70,6675657	,"Stock":	"SI"}
{"Nombre":	MACHALÍ	"Direccion":	ARTURO PRAT N° 116, LOCAL 101	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,17880031	,"Longitude":	-70,65267408	,"Stock":	"SI"}
{"Nombre":	EL COBRE	"Direccion":	SANTA MARÍA N° 349	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1680071	,"Longitude":	-70,7499651	,"Stock":	"SI"}
{"Nombre":	EL COBRE	"Direccion":	AVENIDA BRASIL N° 1071	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1689643	,"Longitude":	-70,7496176	,"Stock":	"NO"}
{"Nombre":	NETFARMA	"Direccion":	AVENIDA EL SOL N° 1071, LOCAL 9	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,15505824	,"Longitude":	-70,71415531	,"Stock":	"SI"}
{"Nombre":	LA BOTICA ANICH	"Direccion":	AVENIDA BRASIL N° 853	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,169356	,"Longitude":	-70,746807	,"Stock":	"NO"}
{"Nombre":	CUGAT VIDA BAQUEDANO	"Direccion":	CAMINO SAN RAMÓN N° 3202, INTERIOR SUPERMERCADO	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16584303	,"Longitude":	-70,77482207	,"Stock":	"NO"}
{"Nombre":	CUGAT VIDA	"Direccion":	SANTA MARÍA ESQUINA BRASIL N° 381	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16993276	,"Longitude":	-70,75052931	,"Stock":	"SI"}
{"Nombre":	SIBONAT	"Direccion":	GERMÁN RIESCO N° 314	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17048871	,"Longitude":	-70,73949108	,"Stock":	"SI"}
{"Nombre":	SU SALUD	"Direccion":	AVENIDA NELSON PEREIRA N° 2637, LOCAL 3	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1345652	,"Longitude":	-70,73726259	,"Stock":	"SI"}
{"Nombre":	GALENO	"Direccion":	FREIRE N° 480, LOCAL 6	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17204613	,"Longitude":	-70,73508648	,"Stock":	"NO"}
{"Nombre":	GALENO	"Direccion":	AVENIDA REPÚBLICA DE CHILE N° 391, LOCAL 4	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,15484848	,"Longitude":	-70,73665894	,"Stock":	"SI"}
{"Nombre":	BELÉN	"Direccion":	AVENIDA BRASIL N° 1016, LOCAL 7	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16895745	,"Longitude":	-70,74853512	,"Stock":	"NO"}
{"Nombre":	LA BOTICA ANICH	"Direccion":	INDEPENDENCIA N° 701	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1696481	,"Longitude":	-70,7447377	,"Stock":	"NO"}
{"Nombre":	CORDILLERA	"Direccion":	AVENIDA EL SOL N° 01905	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1613028	,"Longitude":	-70,7046607	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA SAN MARTÍN N° 385	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16917241	,"Longitude":	-70,74635376	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA MANUEL RODRÍGUEZ N° 976	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5883832	,"Longitude":	-70,98412663	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	Claudio Cancino 68	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,6405198	,"Longitude":	-71,3679406	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	EXEQUIEL GONZÁLEZ N° 399	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,44008461	,"Longitude":	-71,07920002	,"Stock":	"SI"}
{"Nombre":	CUGAT VIDA	"Direccion":	GENARO LISBOA N°165, LOCAL 1	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43873097	,"Longitude":	-71,07942176	,"Stock":	"NO"}
{"Nombre":	CARMEN	"Direccion":	ERRÁZURIZ N° 206	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64051481	,"Longitude":	-71,36344779	,"Stock":	"NO"}
{"Nombre":	FARMAXOL	"Direccion":	AVENIDA MANUEL RODRÍGUEZ N° 939	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58806333	,"Longitude":	-70,98463457	,"Stock":	"SI"}
{"Nombre":	POSTO VERDE	"Direccion":	CARLOS FRESNO N° 300, LOCAL 1	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,29183388	,"Longitude":	-71,31064664	,"Stock":	"SI"}
{"Nombre":	POSTO VERDE	"Direccion":	ANIBAL PINTO N° 246-A	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,38736845	,"Longitude":	-72,00575477	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA LA COMPAÑÍA N° 039, LOCAL 11	"Region":	OHIGGINS	,"Comuna":	GRANEROS	,"Latitude":	-34,068134	,"Longitude":	-70,725272	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ARTURO PRAT N° 206-B	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40704105	,"Longitude":	-70,85992585	,"Stock":	"SI"}
{"Nombre":	POSTO VERDE	"Direccion":	GERMAN RIESCO N° 995	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43906673	,"Longitude":	-71,07838259	,"Stock":	"NO"}
{"Nombre":	POSTO VERDE	"Direccion":	GERMAN RIESCO N° 924-928	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43954283	,"Longitude":	-71,07757276	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MANUEL RODRIGUEZ N°826	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58795881	,"Longitude":	-70,98623971	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	MANUEL RODRIGUEZ N° 902	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,588039	,"Longitude":	-70,985126	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	GERMAN RIESCO N° 1001-1009	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43899617	,"Longitude":	-71,07863948	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	GERMAN RIESCO N° 698	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,4403123	,"Longitude":	-71,07589828	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	GERMAN RIESCO N° 902	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43956953	,"Longitude":	-71,07749734	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL RECETARIO	"Direccion":	ERRAZURIZ Nº 567-B	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1631381	,"Longitude":	-70,9117247	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	RAFAEL CASANOVA N° 199	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64095297	,"Longitude":	-71,36726888	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PLAZA DE ARMAS 98	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64054635	,"Longitude":	-71,36640495	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ORLANDI N° 34	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,6423336	,"Longitude":	-71,3651666	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	RAFAEL CASANOVA N°104	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64091106	,"Longitude":	-71,36635699	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA ORTUZAR N°323 LOCAL 1	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,38654814	,"Longitude":	-72,00353027	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MIRAFLORES N° 399	"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,70874572	,"Longitude":	-71,04402798	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT N°140	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40745322	,"Longitude":	-70,86012121	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	CARLOS CONDELL N°100, LOCAL 1.	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4089948	,"Longitude":	-70,8608876	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ARTURO PRAT N° 54	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40830391	,"Longitude":	-70,86064982	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. BALMACEDA Nº 2408	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64686	,"Longitude":	-70,40131182	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ARTURO PRAT Nº 605	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64877227	,"Longitude":	-70,39654509	,"Stock":	"SI"}
{"Nombre":	EKONOFARMA II	"Direccion":	JOSÉ SANTOS OSSA Nº2250	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65288279	,"Longitude":	-70,39804101	,"Stock":	"NO"}
{"Nombre":	FARMACIA GALENO G	"Direccion":	M. A. MATTA Nº 2019	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6535904	,"Longitude":	-70,4008664	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT Nº 543	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6483428	,"Longitude":	-70,3969311	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT Nº 640	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6490788	,"Longitude":	-70,3962855	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	JOSÉ SANTOS OSSA Nº2332	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65223417	,"Longitude":	-70,39725512	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. ARGENTINA Nº 1105	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,66510149	,"Longitude":	-70,39876377	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ARTURO PRAT Nº 656	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64928094	,"Longitude":	-70,39606154	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOVOA	"Direccion":	M. A. MATTA Nº 2517	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6500851	,"Longitude":	-70,3964732	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN LUIS	"Direccion":	URIBE Nº 800	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65254374	,"Longitude":	-70,39756894	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	BAQUEDANO Nº 730	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65060032	,"Longitude":	-70,39640486	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. J.M. CARRERA Nº 1527, LOCAL 3	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,66124084	,"Longitude":	-70,40217698	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ZENTENO Nº 21, INTERIOR LIDER	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,63795145	,"Longitude":	-70,39593279	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ZENTENO Nº 21, INTERIOR LIDER	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,63658035	,"Longitude":	-70,39598647	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. BALMACEDA Nº 2355, INTERIOR TOTTUS	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64692225	,"Longitude":	-70,40264368	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	14 DE FEBRERO Nº2465	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65197374	,"Longitude":	-70,39511204	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	HIJUELAS N°3 ( SERVICENTRO RUTA 5 SUR)	"Region":	OHIGGINS	,"Comuna":	SAN FRANCISCO DE MOSTAZAL	,"Latitude":	-33,96883841	,"Longitude":	-70,70863546	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA PADRE HURTADO N° 3, LOCALES 4B, 5 Y 6	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,177393	,"Longitude":	-70,695552	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AVENIDA SAN JUAN N°133 LOCALES B Y C	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1771543	,"Longitude":	-70,6984606	,"Stock":	"NO"}
{"Nombre":	FARMACIA RETIRO	"Direccion":	ERRAZURIZ 151	"Region":	MAULE	,"Comuna":	RETIRO	,"Latitude":	-36,0580177	,"Longitude":	-71,7664948	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN LUIS	"Direccion":	ERRAZURIZ N°24	"Region":	MAULE	,"Comuna":	RETIRO	,"Latitude":	-36,0461845	,"Longitude":	-71,7561264	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL CARMEN	"Direccion":	1 NORTE N° 175	"Region":	MAULE	,"Comuna":	LONGAVI	,"Latitude":	-35,964596	,"Longitude":	-71,685335	,"Stock":	"SI"}
{"Nombre":	FARMACIA PRAT	"Direccion":	ARTURO PRAT N° 212	"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,97638	,"Longitude":	-71,802794	,"Stock":	"NO"}
{"Nombre":	FARMACIA HUALAÑÉ	"Direccion":	ARTURO PRAT N° 286	"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,976145	,"Longitude":	-71,803193	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN FRANCISCO	"Direccion":	COMALLE N°147-B	"Region":	MAULE	,"Comuna":	TENO	,"Latitude":	-34,8699799	,"Longitude":	-71,1616898	,"Stock":	"NO"}
{"Nombre":	FARMACIA DOCTOR FARMA	"Direccion":	COMALLE N° 102	"Region":	MAULE	,"Comuna":	TENO	,"Latitude":	-34,8704567	,"Longitude":	-71,1612778	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMASUR	"Direccion":	HUAMACHUCO N° 830	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,5381088	,"Longitude":	-71,4877853	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN PABLO	"Direccion":	HUAMACHUCO N° 735	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,5387993	,"Longitude":	-71,4872894	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTICA	"Direccion":	HUAMACHUCO N° 880	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,5377159	,"Longitude":	-71,4883499	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	HUAMACHUCO N°841	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,5382881	,"Longitude":	-71,4880219	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ARTURO PRAT N° 2305	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5954971	,"Longitude":	-71,7296448	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	ARTURO PRAT N° 2317	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5954666	,"Longitude":	-71,7297821	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ARTURO PRAT N° 2405	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5951958	,"Longitude":	-71,7308426	,"Stock":	"NO"}
{"Nombre":	FARMACIA GAETE	"Direccion":	ARTURO PRAT N° 2464	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5951843	,"Longitude":	-71,7320175	,"Stock":	"SI"}
{"Nombre":	FARMACIA MIMIZA	"Direccion":	AVENIDA ABATE MOLINA Nº605	"Region":	MAULE	,"Comuna":	VILLA ALEGRE	,"Latitude":	-35,6765915	,"Longitude":	-71,7420675	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	QUECHEREGUAS N°1995	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,115135	,"Longitude":	-71,281571	,"Stock":	"SI"}
{"Nombre":	FARMACIA MOLINA	"Direccion":	QUECHEREGUAS N°1972	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,115025	,"Longitude":	-71,281174	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	QUECHEREGUAS N° 2047	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,115815	,"Longitude":	-71,281785	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MARTIN	"Direccion":	MAIPÚ N° 2083	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,1168862	,"Longitude":	-71,2808968	,"Stock":	"NO"}
{"Nombre":	FARMACIA ARAGÓN	"Direccion":	ANIBAL PINTO N° 602	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,140495	,"Longitude":	-71,824279	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	ANIBAL PINTO N°640	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,140571	,"Longitude":	-71,82384	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	IGUALDAD N° 689-C	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,144595	,"Longitude":	-71,827077	,"Stock":	"SI"}
{"Nombre":	FARMACIA PARRAL	"Direccion":	ANIBAL PINTO N° 550	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,140346	,"Longitude":	-71,824904	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ANIBAL PINTO N°632	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,140561	,"Longitude":	-71,823929	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ANIBAL PINTO N° 650	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,140627	,"Longitude":	-71,823721	,"Stock":	"SI"}
{"Nombre":	FARMACIA ANTONIO VARAS	"Direccion":	ANTONIO VARAS N° 505	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,966637	,"Longitude":	-72,316617	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL	"Direccion":	VICTORIA N°653	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,967596	,"Longitude":	-72,318652	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN ALFONSO	"Direccion":	MONTT N° 587	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,965128	,"Longitude":	-72,32538	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	VICTORIA N° 501	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,967629	,"Longitude":	-72,317787	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	VICTORIA N° 607	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,967633	,"Longitude":	-72,318022	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MIGUEL	"Direccion":	VICTORIA N° 611	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,967614	,"Longitude":	-72,318462	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	VICTORIA N°545  LOCAL 100	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,96762	,"Longitude":	-72,318295	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	INDEPENDENCIA N° 611	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846789	,"Longitude":	-71,594347	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. ANIBAL LEÓN BUSTOS N° 280	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,8446962	,"Longitude":	-71,6087218	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	INDEPENDENCIA N° 535	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846524	,"Longitude":	-71,595831	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	INDEPENDENCIA N° 543	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846322	,"Longitude":	-71,5955357	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL CARMEN	"Direccion":	BRASIL N° 699	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,845118	,"Longitude":	-71,590645	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	INDEPENDENCIA N° 495	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846443	,"Longitude":	-71,596183	,"Stock":	"NO"}
{"Nombre":	FARMACIA NUEVA FRANCESA	"Direccion":	INDEPENDENCIA N° 794	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,847495	,"Longitude":	-71,59184	,"Stock":	"SI"}
{"Nombre":	FARMACIA ROCA	"Direccion":	MAIPÚ N° 511	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,847715	,"Longitude":	-71,59629	,"Stock":	"NO"}
{"Nombre":	FARMACIA NUEVA FRANCESA N° 2	"Direccion":	CHACABUCO N° 483	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84673	,"Longitude":	-71,59609	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ELEUTERIO RAMIREZ Nº1977-1979	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4618911	,"Longitude":	-68,9255047	,"Stock":	"SI"}
{"Nombre":	FARMACIA PRINCIPAL	"Direccion":	MIRAFLORES N° 497	"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,70638262	,"Longitude":	-71,04236173	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANTA CRUZ	"Direccion":	RAFAEL CASANOVA N° 454-C	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,6416075	,"Longitude":	-71,3710681	,"Stock":	"SI"}
{"Nombre":	FARMACIA NUEVA PROGRESO	"Direccion":	INDEPENDENCIA N° 481	"Region":	OHIGGINS	,"Comuna":	SAN FRANCISCO DE MOSTAZAL	,"Latitude":	-33,98085149	,"Longitude":	-70,71256892	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	INDEPENDENCIA N° 536	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846591	,"Longitude":	-71,595358	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	JANUARIO ESPINOZA N° 1183	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,838374	,"Longitude":	-71,587361	,"Stock":	"NO"}
{"Nombre":	FARMACIA ORIENTE 2	"Direccion":	JANUARIO ESPINOZA N° 643 L-4	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84645896	,"Longitude":	-71,58947125	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVDA. INDEPENDENCIA N°504	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846624	,"Longitude":	-71,595883	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	JANUARIO ESPINOZA N°612 LOCAL 4-B	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84618825	,"Longitude":	-71,58909912	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	FREIRE N° 586-B	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,331606	,"Longitude":	-72,411033	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	FREIRE N° 702	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,333106	,"Longitude":	-72,410259	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMASUR	"Direccion":	FREIRE N° 805-B	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,334175	,"Longitude":	-72,409846	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	FREIRE N° 664-A	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,332438	,"Longitude":	-72,410707	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	JESUS PONS N° 409	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98580443	,"Longitude":	-71,22672395	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CALLE BERNARDO O'HIGGINS N° 201 LOCAL 72	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98968774	,"Longitude":	-71,24380703	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVDA. ESPAÑA N° 703	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98569207	,"Longitude":	-71,22604275	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	BERNARDO O´HIGGINS N°828	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,982454	,"Longitude":	-71,2443355	,"Stock":	"SI"}
{"Nombre":	FARMACIA BELMONTE	"Direccion":	AVENIDA. RAUQUEN N° 2229 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9717014	,"Longitude":	-71,20965356	,"Stock":	"NO"}
{"Nombre":	FARMACIA UNIVERSO	"Direccion":	CALLE BERNARDO O'HIGGINS N° 796 CURICÓ.	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98286132	,"Longitude":	-71,24452479	,"Stock":	"SI"}
{"Nombre":	FARMACIA PRAT	"Direccion":	PRAT N° 619 - A	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98173549	,"Longitude":	-71,24353673	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	PEÑA N° 724	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98358181	,"Longitude":	-71,24168119	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	PEÑA N° 707	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98381683	,"Longitude":	-71,24171071	,"Stock":	"SI"}
{"Nombre":	FARMACIA CRUZ DE ORO	"Direccion":	PEÑA N° 851	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98209266	,"Longitude":	-71,24192219	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	PEÑA N° 856	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98203399	,"Longitude":	-71,24189233	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ARTURO PRAT N° 500	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98389251	,"Longitude":	-71,2416694	,"Stock":	"NO"}
{"Nombre":	FARMACIA FERNANDEZ	"Direccion":	PRAT N° 780	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98421212	,"Longitude":	-71,24559789	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PEÑA N° 898	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98140937	,"Longitude":	-71,24196851	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PRAT N° 499	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98386251	,"Longitude":	-71,24167307	,"Stock":	"NO"}
{"Nombre":	FARMACIA ENOC	"Direccion":	O´HIGGINS N° 760-B	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,983361	,"Longitude":	-71,244416	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	CONSTITUCION 405	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63096678	,"Longitude":	-71,16491621	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAUPOLICAN 575	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,91101681	,"Longitude":	-71,50514058	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	MANUEL BULNES 399	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,7820628	,"Longitude":	-70,9633292	,"Stock":	"NO"}
{"Nombre":	FARMACIA PRINCIPAL Nº 2	"Direccion":	1 SUR Nº 1699-B	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42746013	,"Longitude":	-71,65211479	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	1 NORTE Nº 1472	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42694962	,"Longitude":	-71,65565502	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	1 SUR Nº 1201	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42754351	,"Longitude":	-71,65979317	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	1 SUR Nº 1196	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42763262	,"Longitude":	-71,65984015	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GUILLERMO ULRIKSEN 3128	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9443037	,"Longitude":	-71,24213728	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	1 NORTE Nº 1518	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42698977	,"Longitude":	-71,65546913	,"Stock":	"SI"}
{"Nombre":	FARMACIA SOCORRO	"Direccion":	1 SUR Nº 1295	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42776859	,"Longitude":	-71,65857819	,"Stock":	"NO"}
{"Nombre":	FARMACIA SOCORRO	"Direccion":	1 SUR Nº 901	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42715598	,"Longitude":	-71,663877	,"Stock":	"SI"}
{"Nombre":	FARMACIA CUBILLOS	"Direccion":	1 SUR Nº 1606	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42813056	,"Longitude":	-71,6540089	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	1 SUR Nº 1403	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42771464	,"Longitude":	-71,65689282	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	1 SUR Nº 1399	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42781056	,"Longitude":	-71,65708188	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	1 SUR Nº 1296	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42782287	,"Longitude":	-71,65856896	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	1 SUR Nº 1501	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42789023	,"Longitude":	-71,65550972	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	4 NORTE Nº 1530	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42341124	,"Longitude":	-71,65506529	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	1 SUR Nº 1591	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42798844	,"Longitude":	-71,6543236	,"Stock":	"SI"}
{"Nombre":	FARMACIA PALMA	"Direccion":	14 SUR Nº 1310	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4423663	,"Longitude":	-71,66204333	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA EL ARENAL Nº 411 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42913764	,"Longitude":	-71,67127668	,"Stock":	"NO"}
{"Nombre":	FARMACIA LIRCAY	"Direccion":	8 SUR Nº 2866	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43967146	,"Longitude":	-71,63534454	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	2 SUR Nº 2015	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42965716	,"Longitude":	-71,64647127	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN AGUSTIN	"Direccion":	2 SUR ESQ. 12 ORIENTE Nº 1907	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42962723	,"Longitude":	-71,64783587	,"Stock":	"SI"}
{"Nombre":	FARMACIA 11 ORIENTE	"Direccion":	11 ORIENTE N° 1397 3 NORTE	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42498141	,"Longitude":	-71,65006232	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA FLORIDA	"Direccion":	19 SUR Nº 0173	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43901599	,"Longitude":	-71,68307968	,"Stock":	"SI"}
{"Nombre":	FARMACIA ORIENTE Nº3	"Direccion":	2 SUR  Nº 1996	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42991354	,"Longitude":	-71,64669992	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAX	"Direccion":	AVDA. COLIN Nº 0264	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,44087625	,"Longitude":	-71,68332869	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	EL ARENAL Nº 411 LOCAL 1018	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42947601	,"Longitude":	-71,6710566	,"Stock":	"SI"}
{"Nombre":	FARMACIA ORIENTE Nº 1	"Direccion":	14 ORIENTE Nº1246 (1 Y 2 NORTE) TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42682377	,"Longitude":	-71,64496894	,"Stock":	"SI"}
{"Nombre":	FARMACIA EXPRESS	"Direccion":	8 SUR 29 Y 30 ORIENTE  Nº2987 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,44013578	,"Longitude":	-71,63389479	,"Stock":	"SI"}
{"Nombre":	FARMACIA ESTACION	"Direccion":	CALLE 12 NORTE Nº 1590	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,41299637	,"Longitude":	-71,65320394	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACENTER	"Direccion":	2 NORTE Nº 3158	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43043676	,"Longitude":	-71,63143122	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL SOL	"Direccion":	26 SUR Nº 457 ESQ. 4 PTE	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,44781073	,"Longitude":	-71,67994607	,"Stock":	"NO"}
{"Nombre":	FARMACIA SR. MOLINA	"Direccion":	17 PONIENTE Nº 0231 19 Y 20 SUR VILLA GALILEA D	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43573515	,"Longitude":	-71,68914929	,"Stock":	"NO"}
{"Nombre":	LA BOTICA DE MELANIA	"Direccion":	12 ORIENTE N° 848 LOCAL 3	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,430763	,"Longitude":	-71,647901	,"Stock":	"SI"}
{"Nombre":	FARMACIA SIETE SUR	"Direccion":	7 SUR 7 Y 8 OTE N°1415	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43462781	,"Longitude":	-71,65716023	,"Stock":	"SI"}
{"Nombre":	FARMACIA CARACOL	"Direccion":	Avenida Carlos Schorr 265	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42918	,"Longitude":	-71,6748324	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	EL ARENAL N°411 LOCAL 1027	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42910973	,"Longitude":	-71,67220704	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACITY	"Direccion":	20 SUR N°318, VILLA ECUADOR	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,442092	,"Longitude":	-71,678883	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. PARQUE CENTRAL PONIENTE 121 CIUDAD SATELITE	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,554753	,"Longitude":	-70,794807	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVDA. BERNARDO O´HIGGINS N° 201, LOCAL 1008	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9921723	,"Longitude":	-71,2447299	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	8 ORIENTE N°1154	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427217	,"Longitude":	-71,65573	,"Stock":	"SI"}
{"Nombre":	FARMACIA CARACOL	"Direccion":	1 SUR N°858	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427073	,"Longitude":	-71,664596	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA TENIENTE MERINO Nº 464	"Region":	AYSEN	,"Comuna":	COCHRANE	,"Latitude":	-47,253679	,"Longitude":	-72,574097	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	BANDERA 591 - 597	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436348	,"Longitude":	-70,652779	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	MAGALLANES 1050 L-16	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,93154457	,"Longitude":	-71,5182162	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	DIEGO PORTALES Nº 2090	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-32,99643331	,"Longitude":	-71,18656129	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. APOQUINDO 3472. LOCAL 104	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416165	,"Longitude":	-70,593985	,"Stock":	"NO"}
{"Nombre":	JOSE JOAQUIN PEREZ	"Direccion":	JOSE JOAQUIN PEREZ 7368	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429776	,"Longitude":	-70,738503	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	AV. FROILAN ROA 5308. LOCAL 2. SUPERMERCADO EKONO	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,502075	,"Longitude":	-70,600726	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA ORIENTE 7110. LOCALES EM 104/108/112/116/120/124	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,518732	,"Longitude":	-70,600101	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	A. AMERICO VESPUCIO 680. LOCAL 01. INTERIOR STRIP CENTER	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,380121	,"Longitude":	-70,647222	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. MANQUEHUE ORIENTE 2030. LOCAL1	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,361037	,"Longitude":	-70,54416	,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	SAN FRANCISCO 8524. L-5	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,436402	,"Longitude":	-70,747107	,"Stock":	"NO"}
{"Nombre":	FARESP	"Direccion":	PIO NONO 165	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMA ITALIA	"Direccion":	AV. PADRE HURTADO 11026, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,562389	,"Longitude":	-70,671168	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. SANTA MARIA 6674. LOCALES 11, 12, 13	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,376878	,"Longitude":	-70,570704	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA LARRAIN 5862, LOCALES S-1076 Y S-1080. MALL PLAZA EGAÑA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,453375	,"Longitude":	-70,569373	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MAR TIRRENO 3349. LOCAL 9. MALL PASEO QUILIN	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,485827	,"Longitude":	-70,576948	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PORTALES 3698. LOCAL 1200	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,637132	,"Longitude":	-70,707496	,"Stock":	"SI"}
{"Nombre":	La Botika	"Direccion":	GENERAL BAQUEDANO 910. LOCAL 06	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,814597	,"Longitude":	-70,742987	,"Stock":	"NO"}
{"Nombre":	HYGEIA	"Direccion":	DIEGO PORTALES 58. LOTE 2. LOCALIDAD DE HOSPITAL	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,867351	,"Longitude":	-70,747239	,"Stock":	"NO"}
{"Nombre":	FARMACHILE	"Direccion":	QUILLOTA Nº 0151	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02495838	,"Longitude":	-71,54887127	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JORGE ALESSANDRI 3177. L BT108,112,116,120 Y 124	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79110498	,"Longitude":	-73,06805206	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	LOS CARRERA Nº 1420 LOCAL 4 Y 5	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,487973	,"Longitude":	-72,34273	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	ANTONIO VARAS 529 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4725424	,"Longitude":	-72,9420712	,"Stock":	"NO"}
{"Nombre":	FARMACIA SANA SANA	"Direccion":	LIBERTAD Nº 249	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6019887	,"Longitude":	-71,2019892	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL FORMULARIO	"Direccion":	LOS CLARINES Nº 2281	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9924133	,"Longitude":	-71,3296663	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	CIENFUEGOS Nº344	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90164882	,"Longitude":	-71,24698882	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CUATRO ESQUINAS Nº1617 LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94465755	,"Longitude":	-71,2416179	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LA CANTERA Nº1955, LOCALES 1,2 Y 3, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,97263459	,"Longitude":	-71,3014946	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVDA. LAS AMERICAS Nº 4225	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,28863476	,"Longitude":	-70,10377076	,"Stock":	"SI"}
{"Nombre":	S.O.S	"Direccion":	SANTO DOMINGO 1405	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436795	,"Longitude":	-70,657049	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CORONEL SANTIAGO BUERAS Nº 1000	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,83009312	,"Longitude":	-73,23979855	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN PABLO 8315. LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,444602	,"Longitude":	-70,740605	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LARRAIN 5862. LOCAL S-1092/S-1096. MALL PLAZA EGAÑA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,453393	,"Longitude":	-70,569373	,"Stock":	"NO"}
{"Nombre":	BIAGI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 4440	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4552787	,"Longitude":	-70,6963794	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LARRAIN 5862. LOCAL BF-117. MALL PLAZA EGAÑA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,453321	,"Longitude":	-70,569395	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	CATEDRAL 1265, local 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437723	,"Longitude":	-70,654806	,"Stock":	"SI"}
{"Nombre":	FUNDACION DIABETES JUVENIL	"Direccion":	LOTA 2344	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423311	,"Longitude":	-70,605615	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. BILBAO 4144	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,431226	,"Longitude":	-70,57875	,"Stock":	"SI"}
{"Nombre":	QUIRON	"Direccion":	PADRE HURTADO 10521. LOCAL-B	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,582359	,"Longitude":	-70,676769	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	SAN PABLO 1054	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434235	,"Longitude":	-70,652457	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	HUERFANOS 811	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439284	,"Longitude":	-70,648337	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LUIS PASTEUR 6625	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,380874	,"Longitude":	-70,571004	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	GRAL. JOSE MIGUEL CARRERA 460, LAS CABRAS	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,29094382	,"Longitude":	-71,30895729	,"Stock":	"SI"}
{"Nombre":	VIDA SANA	"Direccion":	Cancha Rayada 4130	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4381519	,"Longitude":	-70,2901966	,"Stock":	"NO"}
{"Nombre":	FARMEDICA	"Direccion":	BALMACEDA 1463-A	"Region":	ÑUBLE	,"Comuna":	COIHUECO	,"Latitude":	-36,629103	,"Longitude":	-71,832709	,"Stock":	"SI"}
{"Nombre":	FARMACIA BRIELY	"Direccion":	GREGORIO MIRA Nº208 LOCAL 4	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58074383	,"Longitude":	-71,60989994	,"Stock":	"NO"}
{"Nombre":	SAN IGNACIO	"Direccion":	AV. PADRE HURTADO 11337	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,561191	,"Longitude":	-70,670804	,"Stock":	"NO"}
{"Nombre":	FARMAX	"Direccion":	PARQUE CENTRAL ORIENTE 1156	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,561066	,"Longitude":	-70,785774	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VICUÑA MACKENNA Nº890 STRIP CENTER MIRADOR	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60648485	,"Longitude":	-71,20913848	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LO FONTECILLA 441. LOCAL 2. INTERIOR CLC	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,383848	,"Longitude":	-70,530234	,"Stock":	"SI"}
{"Nombre":	VIDASUR	"Direccion":	MANUEL MONTT 1216	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,6181214	,"Longitude":	-72,9547733	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	FRANKLIN 798	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,473039	,"Longitude":	-70,643776	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS TOROS 5441	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,566394	,"Longitude":	-70,556867	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	LEVARTE 802 PLAYA ANCHA	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03634505	,"Longitude":	-71,64291916	,"Stock":	"NO"}
{"Nombre":	FARMACIA CAPREDENA	"Direccion":	AV BRASIL 1930 VALPARAISO CHILE	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04513378	,"Longitude":	-71,61652467	,"Stock":	"SI"}
{"Nombre":	MONTT	"Direccion":	BALMACEDA 535	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,732305	,"Longitude":	-70,743102	,"Stock":	"SI"}
{"Nombre":	FABY	"Direccion":	AVENIDA SANTA ROSA 4399	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,497745	,"Longitude":	-70,63954	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT Nº 61. RENGO	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4079171	,"Longitude":	-70,8602279	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CUEVAS Nº 405. LOCAL 1030. MALL DEL CENTRO	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17044924	,"Longitude":	-70,72927895	,"Stock":	"SI"}
{"Nombre":	FARMACIA MED	"Direccion":	ARTURO PRAT  Nº 295. RENGO	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40548813	,"Longitude":	-70,85875459	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	SAN FRANCISCO 685 PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3184043	,"Longitude":	-72,9852841	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV.CONCHA Y TORO 179	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,614601	,"Longitude":	-70,574974	,"Stock":	"SI"}
{"Nombre":	EL QUÍMICO	"Direccion":	AV. ENRIQUE OLIVARES 1278	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,539678	,"Longitude":	-70,574327	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	SANTA MARIA MANQUEHUE 6938	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,37686	,"Longitude":	-70,570189	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. LIBERTAD 1259	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0096006	,"Longitude":	-71,54898562	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O´HIGGINS N° 0450, LOCAL C9	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5899275	,"Longitude":	-70,98588359	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SARGENTO ALDEA 1070 PUERTO AYSEN	"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	-45,4043845	,"Longitude":	-72,6946926	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	ELEUTERIO RAMIREZ 1027 OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5733194	,"Longitude":	-73,1324509	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Libertador Bernardo O'Higgins 799	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4427803	,"Longitude":	-70,6476384	,"Stock":	"SI"}
{"Nombre":	HOSP. PSIQUIATRICO P. PINEL	"Direccion":	JOSE ANTONIO SALINAS N°2500	"Region":	VALPARAISO	,"Comuna":	PUTAENDO	,"Latitude":	-32,61912721	,"Longitude":	-70,68975191	,"Stock":	"SI"}
{"Nombre":	FARMACIA FE Y ALEGRIA	"Direccion":	JUAN O'DONOVAN  N° 6521, PAIPOTE	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,41077636	,"Longitude":	-70,27078478	,"Stock":	"SI"}
{"Nombre":	DEL VALLE	"Direccion":	SERRANO N°276	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44851508	,"Longitude":	-71,23233727	,"Stock":	"NO"}
{"Nombre":	FARMAEXPRESS	"Direccion":	PEDRO POLANCO N°214	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,44871836	,"Longitude":	-71,23104473	,"Stock":	"SI"}
{"Nombre":	COSMOFARMA	"Direccion":	COBIJA Nº 2188	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4654169	,"Longitude":	-68,9275824	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 11385	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5554321	,"Longitude":	-70,3913366	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DESIERTO	"Direccion":	HUAMACHUCO Nº 9003	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5842511	,"Longitude":	-70,3812861	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	BALMACEDA N°393	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,84144629	,"Longitude":	-70,95607213	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CENTRO COMERCIAL MALL OPEN PLAZA, PROLONGACIÓN BENAVENTE Nº 1075, LOCAL 1210	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,59894406	,"Longitude":	-71,18298128	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PROLONGACIÓN BENAVENTE Nº1075, LOCAL 1270, MALL OPEN PLAZA OVALLE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,598981	,"Longitude":	-71,1833997	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº9400	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5776499	,"Longitude":	-70,390766	,"Stock":	"SI"}
{"Nombre":	MEDICAR	"Direccion":	ARZOBISPO VALDIVIESO 424	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,411454	,"Longitude":	-70,632738	,"Stock":	"NO"}
{"Nombre":	MACPHARMA	"Direccion":	ARANJUEZ PONIENTE 399, VALLE LO CAMPINO	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3835543	,"Longitude":	-70,7238878	,"Stock":	"NO"}
{"Nombre":	LATINOAMERICANA	"Direccion":	RECOLETA 2345	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,405239	,"Longitude":	-70,643166	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VITACURA 4607. LOCAL 19	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,398342	,"Longitude":	-70,586475	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA MACUL 4225, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,492448	,"Longitude":	-70,599843	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	PROVIDENCIA 2592	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4185616	,"Longitude":	-70,60319111	,"Stock":	"NO"}
{"Nombre":	GANDARA	"Direccion":	PARQUE RIESCO 3335	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,3966993	,"Longitude":	-70,6259688	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA TOBALABA 1375	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,426481	,"Longitude":	-70,590895	,"Stock":	"NO"}
{"Nombre":	FARMACIA + VIDA	"Direccion":	CARMEN Nº320	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9879378	,"Longitude":	-71,2382271	,"Stock":	"NO"}
{"Nombre":	TARM	"Direccion":	O´HIGGINS Nº31	"Region":	MAULE	,"Comuna":	RAUCO	,"Latitude":	-34,924381	,"Longitude":	-71,316266	,"Stock":	"SI"}
{"Nombre":	LA BOTICA CUBANA	"Direccion":	RECOLETA 432	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,427931	,"Longitude":	-70,646621	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. JOSE DOMINGO CAÑAS 2151. LOCALES A-B-C-D	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,456848	,"Longitude":	-70,608662	,"Stock":	"SI"}
{"Nombre":	VALLE DE VIDA	"Direccion":	DIAGONAL CERVANTES 637	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435497	,"Longitude":	-70,649902	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	WALKER MARTINEZ 3600. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,522238	,"Longitude":	-70,556499	,"Stock":	"SI"}
{"Nombre":	HUELQUEN	"Direccion":	CAMINO PADRE HURTADO C-2. L344. HUELQUEN	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,82376	,"Longitude":	-70,644629	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	O´HIGGINS 449	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,828641	,"Longitude":	-73,052382	,"Stock":	"NO"}
{"Nombre":	SAN CARLOS	"Direccion":	AV. SAN CARLOS 0581	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,597338	,"Longitude":	-70,569459	,"Stock":	"SI"}
{"Nombre":	SAN FELIPE	"Direccion":	MONUMENTO 1794-2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510824	,"Longitude":	-70,7588	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	1 NORTE Nº2119	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427674	,"Longitude":	-71,645089	,"Stock":	"SI"}
{"Nombre":	OLIPAR	"Direccion":	AVENIDA COLÍN Nº0747, 27 Y 28 SUR	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,445897	,"Longitude":	-71,688625	,"Stock":	"NO"}
{"Nombre":	FARMACIA JULIAN	"Direccion":	LOS ALERCES N° 125	"Region":	OHIGGINS	,"Comuna":	LOLOL	,"Latitude":	-34,72820147	,"Longitude":	-71,64579423	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIOFARMA	"Direccion":	ARTURO PRAT Nº116, LOCAL 3	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98345	,"Longitude":	-71,236435	,"Stock":	"NO"}
{"Nombre":	FARMACIA DON FERNANDO	"Direccion":	16 SUR 9 1/2 ORIENTE Nº1526	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,447547	,"Longitude":	-71,657979	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMINO EL VENADO 716 CUMBRE DE ANDALUÉ	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,84964942	,"Longitude":	-73,09310544	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	TALCA Nº117 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4726845	,"Longitude":	-72,9432338	,"Stock":	"SI"}
{"Nombre":	FARMACIA CENTRAL DE HOMEOPATÍA HAHNEMANN	"Direccion":	ILLAPEL N° 10 LOCAL 108 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,472333	,"Longitude":	-72,9365772	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN LORENZO	"Direccion":	DIEGO PORTALES S/N	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	VALPARAISO Nº 630	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04420201	,"Longitude":	-71,37288166	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV.CENTENARIO Nº293	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,57983395	,"Longitude":	-71,60901082	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	DIEGO PORTALES 702 L-1 RECREO	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02644959	,"Longitude":	-71,57154173	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BARROS ARANA 805	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21588157	,"Longitude":	-70,14732689	,"Stock":	"SI"}
{"Nombre":	INTEGRAL	"Direccion":	MARIQUINA Nº 1295	"Region":	LOS RIOS	,"Comuna":	MARIQUINA	,"Latitude":	-39,538861	,"Longitude":	-72,962722	,"Stock":	"SI"}
{"Nombre":	FARMACIA CHANCO	"Direccion":	ABDON FUENTEALBA N° 202	"Region":	MAULE	,"Comuna":	CHANCO	,"Latitude":	-35,733236	,"Longitude":	-72,533399	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA PAZ	"Direccion":	AVDA. LIBERTADOR B. O"HIGGINS N° 405-B	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,696103	,"Longitude":	-71,406494	,"Stock":	"NO"}
{"Nombre":	FARMACIA CHANCO	"Direccion":	PADRE SAMUEL JOFRÉ N° 441	"Region":	MAULE	,"Comuna":	PELLUHUE	,"Latitude":	-35,845923	,"Longitude":	-72,636955	,"Stock":	"SI"}
{"Nombre":	FARMACIA CUREPTO	"Direccion":	O'HIGGINS N°1	"Region":	MAULE	,"Comuna":	CUREPTO	,"Latitude":	-35,093991	,"Longitude":	-72,018406	,"Stock":	"NO"}
{"Nombre":	FARMACIA LICANTEN	"Direccion":	LAUTARO N° 436-A LICANTÉN	"Region":	MAULE	,"Comuna":	LICANTEN	,"Latitude":	-34,985259	,"Longitude":	-71,987823	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAULE	"Direccion":	AVDA. DIEGO PORTALES, SITIO N° 2, ESQ. SERRANO	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,520618	,"Longitude":	-71,688412	,"Stock":	"SI"}
{"Nombre":	PLUS	"Direccion":	CALLE INTERIOR 349 VILLA DOÑA IGNACIA	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,454318	,"Longitude":	-71,681859	,"Stock":	"SI"}
{"Nombre":	VALLE DE VIDA	"Direccion":	INDEPENDENCIA 4775	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,385515	,"Longitude":	-70,679476	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RICARDO LYON 3154	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,450081	,"Longitude":	-70,602289	,"Stock":	"NO"}
{"Nombre":	CATEDRAL	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 8702	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,537639	,"Longitude":	-70,664474	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COLON 787	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,589241	,"Longitude":	-70,706917	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AMERICO VESPUCIO 1501. LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,515708	,"Longitude":	-70,715736	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SANTA MARIA 6736. LOCAL C	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,377147	,"Longitude":	-70,570682	,"Stock":	"SI"}
{"Nombre":	FARMACIA PENCAHUE	"Direccion":	ALONSO DE RIVERA N°780	"Region":	MAULE	,"Comuna":	PENCAHUE	,"Latitude":	-35,393858	,"Longitude":	-71,803368	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVDA. COLON 1500 LOCALES 7 Y 8 PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,33432127	,"Longitude":	-72,96311796	,"Stock":	"SI"}
{"Nombre":	FARMACIA SIN REMEDIO	"Direccion":	URCISINIO OPAZO S/N ESQ. ALAMEDA	"Region":	MAULE	,"Comuna":	RIO CLARO	,"Latitude":	-35,281728	,"Longitude":	-71,259361	,"Stock":	"NO"}
{"Nombre":	FARMACIA PUMAITEN	"Direccion":	OSCAR BONILLA N° 177	"Region":	MAULE	,"Comuna":	ROMERAL	,"Latitude":	-34,959664	,"Longitude":	-71,125873	,"Stock":	"SI"}
{"Nombre":	SAN BENJAMÍN	"Direccion":	AVDA. SAN RAFAEL N° 353 LOCAL B	"Region":	MAULE	,"Comuna":	SAN RAFAEL	,"Latitude":	-35,307083	,"Longitude":	-71,518017	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PASEO INDEPENDENCIA Nº 757	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1695641	,"Longitude":	-70,7453153	,"Stock":	"NO"}
{"Nombre":	SALESIANOS	"Direccion":	AV. PRESIDENTE SALVADOR ALLENDE 1724	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,492609	,"Longitude":	-70,727345	,"Stock":	"SI"}
{"Nombre":	HERNANDEZ	"Direccion":	INDEPENDENCIA 1306	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41552	,"Longitude":	-70,657328	,"Stock":	"SI"}
{"Nombre":	SANTA HELENA	"Direccion":	PENINSULA 1808	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4697126	,"Longitude":	-70,5745148	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	ANTONIO VARAS 503 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47252614	,"Longitude":	-72,94178903	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANANTIALES 1021 - 1121 LOCAL 1B	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,93071139	,"Longitude":	-71,51903105	,"Stock":	"SI"}
{"Nombre":	SAN BERNARDO	"Direccion":	Victoria 416	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5923566	,"Longitude":	-70,7025779	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LA PLAZA 2501	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,399901	,"Longitude":	-70,506545	,"Stock":	"NO"}
{"Nombre":	LA ERA ARCAYA	"Direccion":	HUASCO 7399, LOCAL 1, POBLACIóN CLARA ESTRELLA	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,517694	,"Longitude":	-70,681275	,"Stock":	"SI"}
{"Nombre":	VIVE	"Direccion":	BACTERIOLOGICO 10835. LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,557078	,"Longitude":	-70,581025	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	DIEGO PORTALES 748 L-3	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04782251	,"Longitude":	-71,4426797	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	AVDA. CESAR ERCILLA  1740 LOCAL1, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58690757	,"Longitude":	-73,12428117	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	MIGUEL DE CERVANTES N°462	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8258103	,"Longitude":	-73,04782972	,"Stock":	"SI"}
{"Nombre":	BARRIO SALUD	"Direccion":	ISABEL RIQUELME N° 602 LOCAL 1	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60846556	,"Longitude":	-72,09975956	,"Stock":	"NO"}
{"Nombre":	FARMADAVILA	"Direccion":	Avenida Santa María 2010	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4727987	,"Longitude":	-70,3064832	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	SERRANO 395. LOCAL 13	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,684943	,"Longitude":	-71,213897	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	JOSE MANUEL BALMACEDA 124. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733441	,"Longitude":	-70,73803	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARLOS SILVA VILDOSOLA 9073	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,439517	,"Longitude":	-70,535706	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LIBERTADOR GENERAL BERNARDO O'HIGGINS. N° 580 LOCALES 8 Y 9.	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442418	,"Longitude":	-70,644475	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	AV. LA FLORIDA 10299	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,552393	,"Longitude":	-70,564459	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	DOMINGO SANTA MARIA 4084. LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,405579	,"Longitude":	-70,70387	,"Stock":	"NO"}
{"Nombre":	AHORRO MAS	"Direccion":	URUGUAY 1699	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,532827	,"Longitude":	-70,643745	,"Stock":	"NO"}
{"Nombre":	BOTICA FAMILIAR	"Direccion":	TRONCAL SAN FRANCISCO 3205	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,581322	,"Longitude":	-70,568901	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	LIBERTADOR GENERAL BERNARDO O'HIGGINS 851	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,443188	,"Longitude":	-70,648252	,"Stock":	"SI"}
{"Nombre":	FAR-Q-FAR	"Direccion":	HAYDN 4647	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,500823	,"Longitude":	-70,622567	,"Stock":	"SI"}
{"Nombre":	FARMA-MARKET	"Direccion":	BALMACEDA 4316. LOCAL 3. LA ISLITA	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,741059	,"Longitude":	-70,862267	,"Stock":	"NO"}
{"Nombre":	FARMAUNIDAS	"Direccion":	ISLA GRANDE DE TIERRA DEL FUEGO 214	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,461171	,"Longitude":	-70,761021	,"Stock":	"SI"}
{"Nombre":	Pharmatodo	"Direccion":	SAN DIEGO 2325	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,476001	,"Longitude":	-70,648308	,"Stock":	"NO"}
{"Nombre":	PROFAR	"Direccion":	PEREZ VALENZUELA 1077	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,428755	,"Longitude":	-70,623168	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	COVADONGA 102	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,615155	,"Longitude":	-70,588513	,"Stock":	"SI"}
{"Nombre":	ALQUIMIA	"Direccion":	SERRANO 134. LOCAL1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,446267	,"Longitude":	-70,649092	,"Stock":	"SI"}
{"Nombre":	SANTO REMEDIO	"Direccion":	GRAN AVENIDA G. JOSE MIGUEL CARRERA 9876	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,550408	,"Longitude":	-70,672051	,"Stock":	"SI"}
{"Nombre":	LINCE	"Direccion":	CONDELL 679. LOCAL103-104	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,441576	,"Longitude":	-70,627416	,"Stock":	"NO"}
{"Nombre":	EZ	"Direccion":	FRANKLIN 403	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472261	,"Longitude":	-70,632998	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ISABEL LA CATOLICA 5075	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,425854	,"Longitude":	-70,570385	,"Stock":	"NO"}
{"Nombre":	LAS ANIMAS	"Direccion":	PEDRO AGUIRRE CERDA Nº 398	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8126451	,"Longitude":	-73,2210892	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AVENIDA PEDRO MONTT 2765 LC 02	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04702701	,"Longitude":	-71,61739435	,"Stock":	"SI"}
{"Nombre":	FARMACENTER	"Direccion":	5 NORTE Nº3471	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42750717	,"Longitude":	-71,62543251	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA SANTA MARÍA N° 375, 1B	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,159228	,"Longitude":	-70,747318	,"Stock":	"SI"}
{"Nombre":	FARMACIA GREEN	"Direccion":	CALLE DUAO Nº163 VILLA SANTA TERSITA DE COLIN MAULE	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,453733	,"Longitude":	-71,685197	,"Stock":	"NO"}
{"Nombre":	REAL	"Direccion":	PRAT S/N, SECTOR ESTACIÓN LOTE 5A	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,98429594	,"Longitude":	-71,27730475	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	VALPARAISO 722, VILLA ALEMANA	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04422797	,"Longitude":	-71,37435984	,"Stock":	"NO"}
{"Nombre":	HUERTOS FAMILIARES	"Direccion":	UNO SUR 101	"Region":	METROPOLITANA	,"Comuna":	TIL-TIL	,"Latitude":	-33,134092	,"Longitude":	-70,807326	,"Stock":	"NO"}
{"Nombre":	MANRIQUEZ	"Direccion":	COMPAÑIA 1303	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438917	,"Longitude":	-70,655427	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. PRESIDENTE JORGE ALESSANDRI 20040. MALL PLAZA SUR	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,632683	,"Longitude":	-70,712988	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. APOQUINDO 2827. LOCAL 101-102-106-107	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,417669	,"Longitude":	-70,60011	,"Stock":	"SI"}
{"Nombre":	FARMA OFERTA	"Direccion":	AV. BOULEVARD AEROPUERTO NORTE 9623. LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,428666	,"Longitude":	-70,775666	,"Stock":	"NO"}
{"Nombre":	LA FAMILIA	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS N° 4801. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,456768	,"Longitude":	-70,704061	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO A SAN JOSÉ DE MAIPO 07722, LOCALES 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,598196	,"Longitude":	-70,521768	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	DUBLÉ ALMEYDA 4231	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,457976	,"Longitude":	-70,586044	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. SANTA CLARA 354	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,388731	,"Longitude":	-70,61969	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. O'HIGGINS 358, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,360087	,"Longitude":	-70,729864	,"Stock":	"SI"}
{"Nombre":	SAJANI	"Direccion":	SANTA ANITA 7776, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,519492	,"Longitude":	-70,689288	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	GERÓNIMO DE ALDERETE 1291	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,391606	,"Longitude":	-70,562988	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. LIBERTADOR BERNARDO O'HIGGINS 6004	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,457887	,"Longitude":	-70,707376	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ROSARIO NORTE 532, LOCAL 103	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,404495	,"Longitude":	-70,57303	,"Stock":	"NO"}
{"Nombre":	FARMAMáS	"Direccion":	LORD COCHRANE 36, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4458217	,"Longitude":	-70,6552892	,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	AV. CARDENAL RAÚL SILVA HENRÍQUEZ 7987. LOCAL B	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,531727	,"Longitude":	-70,623037	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PROVIDENCIA 2315	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42058	,"Longitude":	-70,607791	,"Stock":	"SI"}
{"Nombre":	LA FARFANA	"Direccion":	AV. PRESIDENTE JORGE ALESSANDRI 420	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,488663	,"Longitude":	-70,762705	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JOSE ALCALDE DELANO 10492, 10497, 10515, 10533, 10545. LOCAL 116	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,355588	,"Longitude":	-70,538644	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. JOSE PEDRO ALESSANDRI 1166. LOCAL 4014. PORTAL ÑUÑOA	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,464859	,"Longitude":	-70,598253	,"Stock":	"SI"}
{"Nombre":	LOS ALPES	"Direccion":	PADRE JAIME LARRAÍN HURTADO 610	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,468627	,"Longitude":	-70,6986	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	JOSE ALCALDE DELANO 12205. LOCAL 21. CLINICA ALEMANA	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,354405	,"Longitude":	-70,526413	,"Stock":	"NO"}
{"Nombre":	LATINOAMERICANA	"Direccion":	PEDRO DE VALDIVIA 3584	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455497	,"Longitude":	-70,605109	,"Stock":	"SI"}
{"Nombre":	PURA PHARMA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 4386	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,494193	,"Longitude":	-70,652187	,"Stock":	"SI"}
{"Nombre":	URGENCIA	"Direccion":	Cristóbal Colón 511	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,477579	,"Longitude":	-70,3179787	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. VICUÑA MACKENNA 420 L-6	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97307531	,"Longitude":	-71,53962345	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MAIPU N° 110  MALL PLAZA COPIAPO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3692353	,"Longitude":	-70,339603	,"Stock":	"SI"}
{"Nombre":	FARMACIA INDEPENDIENTE EL LOA	"Direccion":	AVDA.  VICUÑA MACKENA N° 2201	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,46371087	,"Longitude":	-68,92784434	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	HUAMACHUCO Nº801	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,53843966	,"Longitude":	-71,48767642	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	AVENIDA CAUPOLICAN 545, LOS VILOS	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,91120351	,"Longitude":	-71,50303504	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PEÑA Nº610 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,984848	,"Longitude":	-71,24145	,"Stock":	"SI"}
{"Nombre":	MAGNAE FARMACIAS	"Direccion":	BALMACEDA Nº1015, LOCAL 1, EDIFICIO FLEMING, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,908893	,"Longitude":	-71,250164	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	1 SUR Nº1201, LOCAL 2	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4275382	,"Longitude":	-71,659386	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENICA CIRCUNVALACIÓN Nº1055, LOCAL 168,169.170 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,432848	,"Longitude":	-71,629764	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CIRCUNVALACIÓN ORIENTE Nº1055 LOCAL 155-156 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,432795	,"Longitude":	-71,629729	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA BERNARDO O´HIGGINS Nº201, LOCAL 40	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9921723	,"Longitude":	-71,2447299	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LEÓN JUAN LUIS DIEZ Nº1900, LOCAL 2	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,970276	,"Longitude":	-71,230598	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANTO REMEDIO	"Direccion":	OSSA Nº2046	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65430449	,"Longitude":	-70,39972641	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	VICTORIA Nº520 CAUQUENES	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,967516	,"Longitude":	-72,317995	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CARLOS RICHTER 200 FRUTILLAR	"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,12724344	,"Longitude":	-73,0573225	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CIRCUNVALACIÓN ORIENTE Nº1055 LOCALES 101-102-103	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42726632	,"Longitude":	-71,62636334	,"Stock":	"SI"}
{"Nombre":	PUCÓN	"Direccion":	AVENIDA IRARRAZAVAL N°765	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45354	,"Longitude":	-70,62307	,"Stock":	"NO"}
{"Nombre":	FORMAS	"Direccion":	AV. FERMÍN VIVACETA 1802	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,408571	,"Longitude":	-70,667048	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CERRO EL PLOMO 5680, LOCAL 104. EDIFICIO NUEVA LAS CONDES SEIS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40549	,"Longitude":	-70,573364	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ESTRELLA DE CHILE 191 L-1 Y 3	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,78544853	,"Longitude":	-71,52731514	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	LOS CARRERA Nº 200	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,474515	,"Longitude":	-72,347962	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	MONJITAS 810. LOCAL 13-A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43701	,"Longitude":	-70,649003	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALCALDE FERNANDO CASTILLO VELASCO 8751. LOCLES 1 Y 2.	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451746	,"Longitude":	-70,554911	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMÉRICO VESPUCIO 1076. LOCALES 14 Y 15.	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,498622	,"Longitude":	-70,743073	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. LA DEHESA 1445. L-1020. INTERIOR PORTAL LA DEHESA	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,359899	,"Longitude":	-70,516457	,"Stock":	"NO"}
{"Nombre":	BICENTENARIO	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 1414	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,366592	,"Longitude":	-70,713097	,"Stock":	"SI"}
{"Nombre":	SUPER FARMA	"Direccion":	AV. VICUÑA MACKENNA 01412 L-1	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	NETFARMA	"Direccion":	AVENIDA EL SOL Nº 1834	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,161111	,"Longitude":	-70,705274	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALEMANA	"Direccion":	AVENIDA  ESPAÑA Nº 872	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,154698	,"Longitude":	-70,743084	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA SAN JUAN Nº 2184. MACHALI	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1709896	,"Longitude":	-70,6820286	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	RAMIREZ Nº 538	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2138635	,"Longitude":	-70,1492466	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. VALPARAISO 680	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,024986	,"Longitude":	-71,55281095	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND" L-280	"Direccion":	SATURNINO EPULEF 1504	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2916931	,"Longitude":	-72,2210061	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	EDUARDO CASTILLO VELASCO 5500. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,46204	,"Longitude":	-70,575038	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" 573	"Direccion":	MAQUEHUE N°1244 L.5 Y 6	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,77193767	,"Longitude":	-72,59758566	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CHAMISERO 15135. LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,309657	,"Longitude":	-70,660729	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA" L-448	"Direccion":	AV. GABRIELA MISTRAL 02621 L.1	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73526871	,"Longitude":	-72,64048126	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA" L-622	"Direccion":	LOS PABLOS N°1880	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,74454392	,"Longitude":	-72,63775151	,"Stock":	"NO"}
{"Nombre":	FARMACIA CRUZ AZUL	"Direccion":	MIRAFLORES N°1508	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7358862	,"Longitude":	-72,57963461	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	MANUEL BULNES N°394	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73737229	,"Longitude":	-72,58886591	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	M. RODRIGUEZ N°961	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73652234	,"Longitude":	-72,58790307	,"Stock":	"SI"}
{"Nombre":	VILLA NATURA	"Direccion":	VICENTE REYES N°727	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28223797	,"Longitude":	-72,22692643	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	A. PRAT N°232	"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,74414544	,"Longitude":	-72,95253026	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI F0129	"Direccion":	M. MONTT N°890	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73862106	,"Longitude":	-72,58938322	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	TAHAI 1259	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMÉRICO VESPUCIO 1501. LOCAL D-165. MALL PLAZA OESTE	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,515816	,"Longitude":	-70,715478	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO CHICUREO 130. STRIP CENTER PUERTAS DE CHICUREO	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,285642	,"Longitude":	-70,680653	,"Stock":	"SI"}
{"Nombre":	IPHARMA	"Direccion":	SAN MARTIN 602	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,37037498	,"Longitude":	-70,73858461	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ISABEL LA CATOLICA 6072	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,425263	,"Longitude":	-70,564374	,"Stock":	"SI"}
{"Nombre":	SAN PABLO	"Direccion":	AV LAS SALINAS 610, LAS CRUCES	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,49402482	,"Longitude":	-71,62628617	,"Stock":	"NO"}
{"Nombre":	BIOSPHARE	"Direccion":	GUARDA VIEJA 27	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423	,"Longitude":	-70,61102	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	FCO. BILBAO 402	"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,98589364	,"Longitude":	-72,63917754	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAPLUSS	"Direccion":	PRAT Nº 785, TALTAL	"Region":	ANTOFAGASTA	,"Comuna":	TALTAL	,"Latitude":	-25,4054866	,"Longitude":	-70,4824276	,"Stock":	"NO"}
{"Nombre":	FARMACIA  "SALCOBRAND"	"Direccion":	MAIPU N° 110, MALL PLAZA COPIAPO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3692353	,"Longitude":	-70,339603	,"Stock":	"SI"}
{"Nombre":	HOSPITAL MIRAFLORES	"Direccion":	LOS FRESNOS 276 MIRAFLORES	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02723341	,"Longitude":	-71,53146817	,"Stock":	"SI"}
{"Nombre":	HOSPITAL IST	"Direccion":	ALVARES 662	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02651858	,"Longitude":	-71,55282305	,"Stock":	"SI"}
{"Nombre":	HOSPITAL REÑACA	"Direccion":	ANABAENA 336 JARDIN DEL MAR	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,98393301	,"Longitude":	-71,53289481	,"Stock":	"NO"}
{"Nombre":	CLÍNICA CIUDAD DEL MAR	"Direccion":	13 NORTE 635	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00982265	,"Longitude":	-71,5495913	,"Stock":	"SI"}
{"Nombre":	HOSPITAL FRICKE	"Direccion":	ALVARES 1532	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02968202	,"Longitude":	-71,54185699	,"Stock":	"NO"}
{"Nombre":	HOSPITAL VIÑA DEL MAR	"Direccion":	LIMACHE 1741	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02899909	,"Longitude":	-71,53908644	,"Stock":	"NO"}
{"Nombre":	HOSPITAL QUINTERO	"Direccion":	ARANGUIZ TUDELA 380	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,77911303	,"Longitude":	-71,53115999	,"Stock":	"SI"}
{"Nombre":	HOSPITAL CARLOS VAN BUREN	"Direccion":	SAN IGNACIO 725	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,05028165	,"Longitude":	-71,61095982	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DEL SALVADOR	"Direccion":	SUBIDA CARVALLO 200 ,VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,02112126	,"Longitude":	-71,64226114	,"Stock":	"SI"}
{"Nombre":	HOSPITAL CLAUDIO VICUÑA	"Direccion":	CARMEN GUERRERO 945	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58919292	,"Longitude":	-71,60856015	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DR. EDUARDO PEREIRA	"Direccion":	IBSEN S/Nª CERRO DELICIAS	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,05683951	,"Longitude":	-71,58964275	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA" L-604	"Direccion":	BARROS ARANA N°308 L.3	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73226462	,"Longitude":	-72,57408634	,"Stock":	"NO"}
{"Nombre":	ROXANA	"Direccion":	SAN PABLO 2899	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435238	,"Longitude":	-70,676104	,"Stock":	"NO"}
{"Nombre":	ESPOZ	"Direccion":	AV. SAN PABLO 4102, LOCAL 8.	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,438174	,"Longitude":	-70,691725	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	SANTA ROSA 93	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444907	,"Longitude":	-70,645655	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. LOS PAJARITOS 2624. LOCALES 1-2-3-4	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,503524	,"Longitude":	-70,757514	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ALCALDE FERNANDO CASTILLO VELASCO 9100, 3° PISO. HOSPITAL MLITAR	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451137	,"Longitude":	-70,53947	,"Stock":	"NO"}
{"Nombre":	FARMACIA IGUALDAD	"Direccion":	IGUALDAD Nº 640	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,14452	,"Longitude":	-71,827224	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	BENAVENTE 371	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6007286	,"Longitude":	-71,1947596	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA VICUÑA MACKENNA Nº1	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60173	,"Longitude":	-71,19847	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	2 NORTE Nº3230 LOCAL H (JUMBO NORTE)	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,431786	,"Longitude":	-71,627517	,"Stock":	"SI"}
{"Nombre":	FARMACIA VICTORIA	"Direccion":	CALLE 11 ORIENTE Nº2759 VILLA DON ARTURO	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,41036	,"Longitude":	-71,646312	,"Stock":	"SI"}
{"Nombre":	FARMACIA CHANCO	"Direccion":	CALLE ARTURO PRAT Nº560, PELLUHUE	"Region":	MAULE	,"Comuna":	PELLUHUE	,"Latitude":	-35,814345	,"Longitude":	-72,576195	,"Stock":	"SI"}
{"Nombre":	DEL SUR	"Direccion":	BALMACEDA NORTE Nº 91	"Region":	LOS RIOS	,"Comuna":	LOS LAGOS	,"Latitude":	-39,861972	,"Longitude":	-72,8154167	,"Stock":	"NO"}
{"Nombre":	HOSPITAL SAN FRANCISCO	"Direccion":	SAN FRANCISCO 76; LLAY LLAY, CHILE	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,84267922	,"Longitude":	-70,95508426	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	M. A. MATTA Nº 2001	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,65362165	,"Longitude":	-70,4010078	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MAIPU Nº 210	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64696329	,"Longitude":	-70,40134526	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	HOTU MATUA  S/Nº	"Region":	VALPARAISO	,"Comuna":	ISLA DE PASCUA	,"Latitude":	-27,1584148	,"Longitude":	-109,4296115	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	INDEPENDENCIA Nº521 LOCAL B	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,169983	,"Longitude":	-70,742444	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	RAFAEL CASANOVA Nº 222	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,641472	,"Longitude":	-71,368182	,"Stock":	"SI"}
{"Nombre":	FARMA SALUD	"Direccion":	COLÓN 222 LOCAL 4	"Region":	BIOBIO	,"Comuna":	LOS ALAMOS	,"Latitude":	-37,625965	,"Longitude":	-73,4623389	,"Stock":	"NO"}
{"Nombre":	6 DE MAYO	"Direccion":	GENERAL BERNARDINO PARADA 728	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,5777053	,"Longitude":	-70,6567737	,"Stock":	"SI"}
{"Nombre":	FARMATODO	"Direccion":	ALMIRANTE LATORRE 9440	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,5471426	,"Longitude":	-70,6436499	,"Stock":	"NO"}
{"Nombre":	LEMBACH	"Direccion":	AVENIDA MANUEL MONTT 536	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43316141	,"Longitude":	-70,61742922	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	DOCTOR BARROS BORGOÑO 63, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42933414	,"Longitude":	-70,61886936	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AVENIDA PROVIDENCIA 2580, L-018	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,41878805	,"Longitude":	-70,60310889	,"Stock":	"SI"}
{"Nombre":	FARMA OFERTA	"Direccion":	SAN FRANCISCO 8851	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,43628157	,"Longitude":	-70,75425492	,"Stock":	"SI"}
{"Nombre":	LOS ORIENTALES	"Direccion":	AVENIDA IRARRAZABAL 4818	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454448	,"Longitude":	-70,580033	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	PEDRO FONTOVA 7810, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,34560929	,"Longitude":	-70,67051897	,"Stock":	"SI"}
{"Nombre":	GIRENO	"Direccion":	AVENIDA GABRIEL GONZALEZ VIDELA 2364	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,53605038	,"Longitude":	-70,78630799	,"Stock":	"NO"}
{"Nombre":	REDONDO	"Direccion":	SERRANO 346	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,6844104	,"Longitude":	-71,21400936	,"Stock":	"NO"}
{"Nombre":	VECINA LARAPINTA	"Direccion":	LOS HALCONES 1380	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,2943637	,"Longitude":	-70,8675202	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. VALPARAISO 684	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02498534	,"Longitude":	-71,55284304	,"Stock":	"SI"}
{"Nombre":	PUNTO FARMACIA	"Direccion":	14 NORTE 571 PISO 1 PROSALUD	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00878469	,"Longitude":	-71,55052456	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA 21 DE MAYO 3225 LOCAL 258	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,80839199	,"Longitude":	-73,07817157	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALCáZAR 635 LOCAL 1	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,4796454	,"Longitude":	-72,3628701	,"Stock":	"SI"}
{"Nombre":	CAPSULA FARMA	"Direccion":	Aníbal Pinto 1514	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4825424	,"Longitude":	-70,3035783	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL SAN MARTIN DE QUILLOTA	"Direccion":	CONCEPCIÓN Nº 1050, QUILLOTA	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87989627	,"Longitude":	-71,25761631	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DOCTOR MARIO SANCHEZ LA CALERA	"Direccion":	CARRERA Nº 1603, LA CALERA	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,79270806	,"Longitude":	-71,20477077	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	INMACULADA CONCEPCIóN N° 212	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204236	,"Longitude":	-70,677328	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVDA KENNEDY 5413 L-230	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4019547	,"Longitude":	-70,5796966	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	1 ORIENTE Nº315	"Region":	MAULE	,"Comuna":	LONGAVI	,"Latitude":	-35,965945	,"Longitude":	-71,68376	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N° 3470	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4520328	,"Longitude":	-70,6824122	,"Stock":	"SI"}
{"Nombre":	MAS VIDA Y SALUD	"Direccion":	SANTA LAURA 356 LOCAL 1	"Region":	BIOBIO	,"Comuna":	HUALQUI	,"Latitude":	-36,94964	,"Longitude":	-72,930417	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	HAMBURGO 671 LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,44826995	,"Longitude":	-70,57668864	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA IRARRAZAVAL 2401, LOCAL 13	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4540843	,"Longitude":	-70,6061524	,"Stock":	"SI"}
{"Nombre":	VITAUD	"Direccion":	AVENIDA SAN PABLO 6600, LOCAL 16	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4445215	,"Longitude":	-70,7283133	,"Stock":	"SI"}
{"Nombre":	FARMACIA ACEVEDO	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 8251, LOCAL 24	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,59251713	,"Longitude":	-70,39022797	,"Stock":	"SI"}
{"Nombre":	FARMACIA MÁS SALUD	"Direccion":	AVENIDA SAN  MARTÍN Nº49 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,988931	,"Longitude":	-71,234719	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL DEL COBRE "DR.SALVADOR ALLENDE	"Direccion":	AVENIDA CHORRILLOS 689, CALAMA, ANTOFAGASTA, CHILE	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4526137	,"Longitude":	-68,908144	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. JORGE ALESSANDRI 3177. L 6 BOULEVARD	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7908644	,"Longitude":	-73,06790186	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. PEDRO DE VALDIVIA 904	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,844799	,"Longitude":	-73,052546	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. J. ALESSANDRI 3177 L-BT 113-117	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79141428	,"Longitude":	-73,06757999	,"Stock":	"SI"}
{"Nombre":	FARMACIA ECOFARMA LAS HERAS	"Direccion":	7 NORTE Nº1218  5 Y 6 ORIENTE TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,418396	,"Longitude":	-71,658639	,"Stock":	"SI"}
{"Nombre":	TU FARMACIA	"Direccion":	CARRETERA GENERAL SAN MARTíN 0331	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,2071502	,"Longitude":	-70,6778272	,"Stock":	"SI"}
{"Nombre":	FARMAC IA TRI-O FARMA	"Direccion":	ARTURO FERNANDEZ 1371 (ACCESO POR ERNESTO RIQUELME) , IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2211814	,"Longitude":	-70,1444616	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARUCH	"Direccion":	BAQUEDANO N°909	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6519666	,"Longitude":	-70,3950072	,"Stock":	"SI"}
{"Nombre":	FARMACIA PROSALUD	"Direccion":	SIMON BOLIVAR Nº 598	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64726799	,"Longitude":	-70,39495447	,"Stock":	"NO"}
{"Nombre":	FARMACIA BICENTENARIO	"Direccion":	AV. OSCAR BONILLA Nº 9204	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,58141141	,"Longitude":	-70,37923929	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	AVENIDA CONCHA Y TORO 125	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,610535	,"Longitude":	-70,575592	,"Stock":	"SI"}
{"Nombre":	LUNA LUZ	"Direccion":	SANTA RAQUEL 10666, LA FLORIDA, SANTIAGO	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5570298	,"Longitude":	-70,6010937	,"Stock":	"SI"}
{"Nombre":	OMLU	"Direccion":	CALERA DE TANGO, PARCELA 11, LOCAL 3, PARADERO 9	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,62745936	,"Longitude":	-70,7693298	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MANQUEHUE SUR 31, LOCALES 194, 196, 232	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409287	,"Longitude":	-70,567331	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. SOR VICENTA 2575 LOCAL 6	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,44539528	,"Longitude":	-72,33244284	,"Stock":	"SI"}
{"Nombre":	FARMACIA DERMAEXPRES	"Direccion":	SALVADOR REYES N°1145	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6589785	,"Longitude":	-70,3985179	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALMIRANTE RIVEROS 1210-1214. LOCAL 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,615891	,"Longitude":	-70,684447	,"Stock":	"NO"}
{"Nombre":	CATAGUS	"Direccion":	AVENIDA FEDERICO ERRAZURIZ 1591	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,421222	,"Longitude":	-70,759911	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	CASTELLON 318	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8270075	,"Longitude":	-73,0462138	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	CAUPOLICÁN 713 LOCAL 4	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8246553	,"Longitude":	-73,0526551	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	AV. CONSTITUCION 176 CASABLANCA CHILE	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,31935541	,"Longitude":	-71,40987065	,"Stock":	"NO"}
{"Nombre":	JUSTICIA	"Direccion":	BLANCO 1090 ,2º PISO VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04193004	,"Longitude":	-71,62438394	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR.SIMI	"Direccion":	FEDERICO ERRAZURIZ Nº 599 –B, COMUNA DE CALBUCO	"Region":	LOS LAGOS	,"Comuna":	CALBUCO	,"Latitude":	-41,7745255	,"Longitude":	-73,1273185	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	SAN FRANCISCO 666, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3184498	,"Longitude":	-72,9850138	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. CURAUMA NORTE 2961 LOCAL 3, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,13171098	,"Longitude":	-71,56444928	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	SERRANO 574	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4796179	,"Longitude":	-73,7620475	,"Stock":	"SI"}
{"Nombre":	Dr. Sana Sana	"Direccion":	Libertador Bernardo O'Higgins 0107	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5930986	,"Longitude":	-70,6991555	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. PEDRO FONTOVA 7523	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,352352	,"Longitude":	-70,670593	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. HOLANDA 2954, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,445742	,"Longitude":	-70,597237	,"Stock":	"SI"}
{"Nombre":	AVANTT	"Direccion":	SANTA ELENA 320. LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5251	,"Longitude":	-70,763078	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AV. CHAMISERO 9790	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,312367	,"Longitude":	-70,656921	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO SAN ALBERTO HURTADO 2390. LOCAL 2 Y 4.	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,569344	,"Longitude":	-70,815406	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	RIQUELME 2270	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,551099	,"Longitude":	-70,633926	,"Stock":	"SI"}
{"Nombre":	URGENCIA - "SALCOBRAND"	"Direccion":	AV. PORTUGAL 174-178	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,444484	,"Longitude":	-70,636964	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. TOBALABA 5151. LOCAL105	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,43656	,"Longitude":	-70,577532	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	HUERFANOS 956	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439546	,"Longitude":	-70,650358	,"Stock":	"SI"}
{"Nombre":	FARMA OFERTAS	"Direccion":	VICUÑA MACKENNA 1800. LOCAL C	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,610749	,"Longitude":	-70,877618	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA PLAZA 1250, L-D	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,395568	,"Longitude":	-70,505683	,"Stock":	"NO"}
{"Nombre":	HYGEA	"Direccion":	MAPOCHO 4288. LOCAL1	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,431124	,"Longitude":	-70,693334	,"Stock":	"SI"}
{"Nombre":	La Rebaja	"Direccion":	SAN DIEGO 265, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448676	,"Longitude":	-70,650841	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	MERCED 306	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437217	,"Longitude":	-70,641309	,"Stock":	"SI"}
{"Nombre":	LA POPULAR	"Direccion":	MAC IVER 157	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440885	,"Longitude":	-70,646484	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PEDRO TORRES 384. LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,451281	,"Longitude":	-70,589247	,"Stock":	"SI"}
{"Nombre":	BELLFARMA	"Direccion":	HUANHUALI 1331	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,05865793	,"Longitude":	-71,38603374	,"Stock":	"NO"}
{"Nombre":	FCIA O'HIGGINS	"Direccion":	SAN MARTIN Nº 311	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4053399	,"Longitude":	-70,8606676	,"Stock":	"NO"}
{"Nombre":	OMARI	"Direccion":	SAN ALFONSO 343	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,454473	,"Longitude":	-70,675836	,"Stock":	"SI"}
{"Nombre":	MAPOCHO	"Direccion":	MAPOCHO NORTE N°8031-B	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,421835	,"Longitude":	-70,751345	,"Stock":	"SI"}
{"Nombre":	CUETO	"Direccion":	CUETO 1143, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4318884	,"Longitude":	-70,6732513	,"Stock":	"SI"}
{"Nombre":	FARMALIFE	"Direccion":	AVENIDA VICUÑA MACKENNA N° 1695	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4653353	,"Longitude":	-70,6270358	,"Stock":	"NO"}
{"Nombre":	DE LO ALTO	"Direccion":	OMAR HERRERA GUTIéRREZ 1815	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,576386	,"Longitude":	-70,604061	,"Stock":	"SI"}
{"Nombre":	SOLUFAR	"Direccion":	LEQUENA 6683, LOCAL C	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3595941	,"Longitude":	-70,6826858	,"Stock":	"NO"}
{"Nombre":	VALDIVIA	"Direccion":	IRARRáZAVAL 070	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,452131	,"Longitude":	-70,629842	,"Stock":	"NO"}
{"Nombre":	FARMACIA CATIRAI	"Direccion":	AV PEDRO DE VALDIVIA 1493 LOCAL 7	"Region":	BIOBIO	,"Comuna":	SANTA JUANA	,"Latitude":	-37,17117469	,"Longitude":	-72,95363903	,"Stock":	"SI"}
{"Nombre":	SANTA ANA SPA	"Direccion":	ARTURO PRAT 340	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,368223	,"Longitude":	-70,727678	,"Stock":	"SI"}
{"Nombre":	VALLE DE VIDA	"Direccion":	CARDENAL CARO 1752	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,37366	,"Longitude":	-70,68186	,"Stock":	"SI"}
{"Nombre":	MAS SALUD	"Direccion":	ARTURO PRAT 685	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,592316	,"Longitude":	-70,706579	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMASALUD	"Direccion":	PRAT Nº762 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,984247	,"Longitude":	-71,245313	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. LOS CARRERA N° 3791, INT. LIDER	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3903366	,"Longitude":	-70,302145	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	BARROS ARANA 741 LOCAL 21	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,826094	,"Longitude":	-73,049529	,"Stock":	"NO"}
{"Nombre":	V Y M	"Direccion":	ICTINOS 1138	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,46615	,"Longitude":	-70,5606	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. VICUñA MACKENNA 7110, LOCAL C-108	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,519252	,"Longitude":	-70,600301	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. SALVADOR 1822, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,449721	,"Longitude":	-70,621659	,"Stock":	"SI"}
{"Nombre":	FARMAMASPLUS	"Direccion":	AV. MANUEL ANTONIO MATTA 77	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,455612	,"Longitude":	-70,63091	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. CAMILO HENRíQUEZ 3692, LOCALES 114-116 A	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,567875	,"Longitude":	-70,554729	,"Stock":	"SI"}
{"Nombre":	TODO SALUD	"Direccion":	VICUñA MACKENNA 2444, LOCAL 1C	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,611046	,"Longitude":	-70,884501	,"Stock":	"NO"}
{"Nombre":	MEDDICA	"Direccion":	CATEDRAL 1850, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438544	,"Longitude":	-70,662868	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA APOQUINDO 4411, LOCALES 170, 172, 174 SUBCENTRO ESCUELA MILITAR	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414384	,"Longitude":	-70,584583	,"Stock":	"SI"}
{"Nombre":	CRUZ DEL SUR	"Direccion":	AVENIDA RECOLETA 3403	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,394334	,"Longitude":	-70,642493	,"Stock":	"SI"}
{"Nombre":	SANTO REMEDIO	"Direccion":	CARRETERA SAN MARTIN N°685, L-12	"Region":	VALPARAISO	,"Comuna":	RINCONADA	,"Latitude":	-32,83342083	,"Longitude":	-70,68915301	,"Stock":	"SI"}
{"Nombre":	ANGEL	"Direccion":	21 de Mayo 632	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,48098	,"Longitude":	-70,316338	,"Stock":	"NO"}
{"Nombre":	CENTRO INTEGRAL DE SALUD SUR	"Direccion":	CHILOé 1799	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA CARLOS PRATS 901 LOCAL 1258, CORONEL, CHILE	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,01262	,"Longitude":	-73,15838	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTICA DEL RIO	"Direccion":	AVDA VICUÑA MACKENNA Nº 263, RIO NEGRO	"Region":	LOS LAGOS	,"Comuna":	RIO NEGRO	,"Latitude":	-40,7969142	,"Longitude":	-73,2187381	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA SALUD	"Direccion":	COCHRANE Nº 104, ENTRE LAGOS	"Region":	LOS LAGOS	,"Comuna":	PUYEHUE	,"Latitude":	-40,68377377	,"Longitude":	-72,59932267	,"Stock":	"SI"}
{"Nombre":	MIFARMA	"Direccion":	MANUEL BULNES  Nº 301 LONCOCHE	"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,3681199	,"Longitude":	-72,6315127	,"Stock":	"SI"}
{"Nombre":	FARMACIA FIJA	"Direccion":	ALCAZAR Nº 1059 COLLIPULLI	"Region":	ARAUCANIA	,"Comuna":	COLLIPULLI	,"Latitude":	-37,9582687	,"Longitude":	-72,4321187	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	CAUPOLICAN 566-B	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8151207	,"Longitude":	-73,2441753	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	SAN ISIDRO GAETE 476 L-2  MAITENCILLO	"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,63426666	,"Longitude":	-71,42406183	,"Stock":	"SI"}
{"Nombre":	FARMACIA BOTICA CUENCA DEL MATAQUITO	"Direccion":	CALLE JOSÉ MIGUEL CARRERA Nº19, LOCAL 2	"Region":	MAULE	,"Comuna":	CUREPTO	,"Latitude":	-35,09283053	,"Longitude":	-72,0180115	,"Stock":	"NO"}
{"Nombre":	DON ANTONIO	"Direccion":	AVENIDA RAFAEL ARIZTÍA Nº 530, LOCAL Nº 1538, QUILLOTA	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87595073	,"Longitude":	-71,23479676	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	MANUEL MONTT 1600	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,0025541	,"Longitude":	-73,1606044	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTICA CURICÓ	"Direccion":	CALLE MONTT Nº625-B CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,982724	,"Longitude":	-71,243354	,"Stock":	"SI"}
{"Nombre":	FARMAXPRESS	"Direccion":	AVENIDA VICUÑA MACKENA 1050	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97247234	,"Longitude":	-71,53202187	,"Stock":	"SI"}
{"Nombre":	CESFAR	"Direccion":	AVENIDA LAS CONDES 12523, LOCAL 4A, EDIF. 1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3722679	,"Longitude":	-70,5162059	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	PANTALEON CORTÉS N°852, LOCAL 3	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6014227	,"Longitude":	-70,3813678	,"Stock":	"SI"}
{"Nombre":	FARMACIA SUR	"Direccion":	JANUARIO ESPINOZA Nº759, LOCAL 2	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	MEDDICA	"Direccion":	AV. MANUEL A. MATTA 1336, QUILICURA	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,366749	,"Longitude":	-70,7135657	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	IGNACIO SERRANO 917	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,619365	,"Longitude":	-72,957515	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MAIPU N°364	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6482551	,"Longitude":	-70,4000665	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	OFICINA PETRONILA N°195 A Y B	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,56214	,"Longitude":	-70,39173	,"Stock":	"SI"}
{"Nombre":	DMEDICAL	"Direccion":	LO BASCUñAN 832	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA COLÍN Nº 665	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4447369	,"Longitude":	-71,6885169	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR COMUNITARIA	"Direccion":	SARGENTO ALDEA Nº 2415, LOCAL 4	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5939463	,"Longitude":	-71,7310383	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR COMUNITARIA	"Direccion":	DIEGO PORTALES Nº4 RAUCO	"Region":	MAULE	,"Comuna":	RAUCO	,"Latitude":	-34,924854	,"Longitude":	-71,316361	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR COMUNITARIA	"Direccion":	ESTADO 279 CURICO	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9858664	,"Longitude":	-71,2386841	,"Stock":	"SI"}
{"Nombre":	FARMACIA HUMANA	"Direccion":	ORSODELI Nº108-A LICANTÉN	"Region":	MAULE	,"Comuna":	LICANTEN	,"Latitude":	-34,985648	,"Longitude":	-71,984961	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL FORMULARIO	"Direccion":	AV. LA PAMPA S/N LOCAL 14 CENTRO COMERCIAL ROSSI	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2706402	,"Longitude":	-70,10152814	,"Stock":	"SI"}
{"Nombre":	FARMAEXPRESS	"Direccion":	CAMILO MORI 1086 LOCAL C	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8418482	,"Longitude":	-73,0977797	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN CARLOS	"Direccion":	CONSTITUCIóN N°260	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63240435	,"Longitude":	-71,16646222	,"Stock":	"SI"}
{"Nombre":	FARMACIA CABRERO	"Direccion":	RíO CLARO 185 LOCAL 25	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,03458966	,"Longitude":	-72,40149368	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL DE ANTOFAGASTA	"Direccion":	AVENIDA SEPTIMO DE LINEA 3505	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6386309	,"Longitude":	-70,3957848	,"Stock":	"NO"}
{"Nombre":	FARMACIA S Y G	"Direccion":	GRANADEROS N°2205	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4588057	,"Longitude":	-68,9285598	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AV. BALMACEDA N°2355	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6460472	,"Longitude":	-70,4008339	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CALETERA 1502-1480 LC 03, RUTA 68 ,VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,12152611	,"Longitude":	-71,56207428	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	AV. HUMERES N°694	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,42653099	,"Longitude":	-71,06738257	,"Stock":	"NO"}
{"Nombre":	FARMACONSULTA	"Direccion":	ALMAGRO 483	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,46810088	,"Longitude":	-72,34950104	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BARROS ARANA 780, LOCAL 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8259706	,"Longitude":	-73,0488097	,"Stock":	"NO"}
{"Nombre":	BELLFARMA	"Direccion":	COIMAS N°157	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74955474	,"Longitude":	-70,72399116	,"Stock":	"NO"}
{"Nombre":	AZUCENA	"Direccion":	PASAJE BELGICA 1-D, SANTA JULIA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00577352	,"Longitude":	-71,4961182	,"Stock":	"SI"}
{"Nombre":	OCCA	"Direccion":	AV. ERRAZURIZ 629, LOCAL 119, VALPARAÍSO (INTERIOR ESTACION PUERTO)	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03831894	,"Longitude":	-71,6275953	,"Stock":	"SI"}
{"Nombre":	REGIONAL	"Direccion":	AV. PEDRO MONTT  2743 LOCAL 01	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04730538	,"Longitude":	-71,60755307	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LUIS PASTEUR 5479, VITACURA	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,393113	,"Longitude":	-70,581422	,"Stock":	"NO"}
{"Nombre":	QFARMA	"Direccion":	BLANCO ENCALADA  1300.	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04685597	,"Longitude":	-71,43585436	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL LAGO	"Direccion":	COLO - COLO N° 1814	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,29873832	,"Longitude":	-72,23115921	,"Stock":	"NO"}
{"Nombre":	FARMACIA CRERIK	"Direccion":	AVENIDA INDEPENDENCIA Nº 457 LOCAL 2	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1701429	,"Longitude":	-70,7413572	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA BERNARDO O''HIGGINS Nº 701.SAN FERNANDO	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5868473	,"Longitude":	-70,9849113	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITASUR(L-5)	"Direccion":	LAUTARO N° 301 ANGOL	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,798409	,"Longitude":	-72,7094196	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	CAUPOLICAN 840, LOS VILOS	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,9113643	,"Longitude":	-71,5059247	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	BENAVENTE 102, OVALLE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60113118	,"Longitude":	-71,1959942	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	FRANCISCO DE AGUIRRE 02, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90320674	,"Longitude":	-71,25802574	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND" HUANHUALI	"Direccion":	HUANHUALI 991, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9165155	,"Longitude":	-71,2446609	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DR. EDUARDO VALENZUELA	"Direccion":	SALINAS Nº1201, LOCAL UNO, SAN FELIPE, CHILE	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75147566	,"Longitude":	-70,72738251	,"Stock":	"NO"}
{"Nombre":	COMUNAL CMVM VIÑA DEL MAR	"Direccion":	VON SCHROEDER 273	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0244445	,"Longitude":	-71,5613769	,"Stock":	"SI"}
{"Nombre":	BIOFARMAC	"Direccion":	TEGUALDA Nº 76 LOCAL 11	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8165305	,"Longitude":	-73,0253652	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	VALDIVIA 149 LOCAL 39	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,712617	,"Longitude":	-73,115358	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MANUEL RODRÍGUEZ Nº 719	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9837744	,"Longitude":	-71,2431103	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA POPULAR	"Direccion":	MAIPU Nº1846, MOLINA	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,114262	,"Longitude":	-71,279147	,"Stock":	"SI"}
{"Nombre":	MAPUCHE MAKELAWEN	"Direccion":	CONDELL 1295	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04475583	,"Longitude":	-71,62378264	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR LLACOLÉN	"Direccion":	LOS ACACIOS 43, SAN PEDRO DE LA PAZ	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8401021	,"Longitude":	-73,102523	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL DE IQUIQUE	"Direccion":	LA TORRE N° 345	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,215223	,"Longitude":	-70,151629	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA  NICOLAS NARANJO PALACIOS	"Direccion":	MERCED 1455	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5770975	,"Longitude":	-70,7546529	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE OVALLE	"Direccion":	Ariztía Poniente 7	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,59910936	,"Longitude":	-71,19958085	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL COLTAUCO	"Direccion":	REPUBLICA DE CHILE 451	"Region":	OHIGGINS	,"Comuna":	COLTAUCO	,"Latitude":	-34,28867882	,"Longitude":	-71,08416065	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR DE REQUINOA	"Direccion":	CALLE COMERCIO 121, REQUINOA	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":	-34,2807597	,"Longitude":	-70,8128531	,"Stock":	"SI"}
{"Nombre":	FARMACIA TU SANTA CRUZ	"Direccion":	PLAZA DE ARMAS 242, SANTA CRUZ	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,6402297	,"Longitude":	-71,3656832	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR DE BUIN CONCEJAL RAMÓN CALDERÓN HORMAZÁBAL	"Direccion":	CARLOS CONDELL 334, BUIN	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,7316093	,"Longitude":	-70,7402579	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE CONCHALI	"Direccion":	INDEPENDENCIA 5663, CONCHALI	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3755176	,"Longitude":	-70,6852379	,"Stock":	"SI"}
{"Nombre":	POPULAR LA PINCOYA	"Direccion":	RECOLETA 5640, HUECHURABA	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3739447	,"Longitude":	-70,6367691	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL PABLO NERUDA	"Direccion":	DORSAL 6741, LO PRADO	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4504795	,"Longitude":	-70,7305975	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL DE MACUL	"Direccion":	ARTURO PRAT 4345, MACUL	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,4935058	,"Longitude":	-70,6145727	,"Stock":	"NO"}
{"Nombre":	CESFAM ADRIANA MADRID DE COSTABAL	"Direccion":	AV. FRANCISCO COSTABAL 78, MARíA PINTO	"Region":	METROPOLITANA	,"Comuna":	MARIA PINTO	,"Latitude":	-33,5165303	,"Longitude":	-71,1216851	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA DE PEñALOLEN	"Direccion":	AV. GRECIA 8735, PEñALOLEN	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,476666	,"Longitude":	-70,541662	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	MANUEL BULNES N° 815	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,741864	,"Longitude":	-72,5897709	,"Stock":	"NO"}
{"Nombre":	FARMACIA CLINICA UNIVERSITARIA DE PUERTO MONTT	"Direccion":	AVDA BELLAVISTA N° 1140 PICHIPELLUCO PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,477745	,"Longitude":	-72,91385446	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANA SANA	"Direccion":	OÑEDERRA Nº698-D	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,3323	,"Longitude":	-72,412189	,"Stock":	"SI"}
{"Nombre":	ESMERALDA	"Direccion":	PADRE SOTO 318, LOCAL E	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,17982377	,"Longitude":	-70,65703528	,"Stock":	"SI"}
{"Nombre":	NORDENFLYCHT	"Direccion":	RAFAEL RIESCO BERNALES 386	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4962574	,"Longitude":	-70,7522832	,"Stock":	"NO"}
{"Nombre":	FARMAXAL	"Direccion":	AVENIDA LO MARCOLETA N°0426	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36079	,"Longitude":	-70,74781	,"Stock":	"SI"}
{"Nombre":	BOTIQUIN SUR	"Direccion":	LA TRAVESÍA 8611	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,45510049	,"Longitude":	-70,75462558	,"Stock":	"NO"}
{"Nombre":	ANTONELLA	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA 4933	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	PORTALES	"Direccion":	LAS NACIONES 1176	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	MOLY FARMA	"Direccion":	EL MAITEN 300, LA ISLITA	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,7355797	,"Longitude":	-70,8620355	,"Stock":	"SI"}
{"Nombre":	SOLUFAR	"Direccion":	AVENIDA PEDRO FONTOVA 7280, LOCAL 103	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	PEDRO AGUIRRE CERDA 651	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,091962	,"Longitude":	-73,157283	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA POPULAR	"Direccion":	FREIRE ESQ. CRUZ CONSTITUCIÓN	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,331048	,"Longitude":	-72,411983	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ANFIÓN MUÑOZ N° 360	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8149179	,"Longitude":	-73,2366476	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL QUILPUE-BELLOTO	"Direccion":	BAQUEDANO 960	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04461587	,"Longitude":	-71,44020364	,"Stock":	"NO"}
{"Nombre":	BOTICA MUNICIPAL	"Direccion":	Avenida Valparaíso 384	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0439854	,"Longitude":	-71,3696109	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA DR. GERMAN IRARRAZABAL JAQUE	"Direccion":	MOLINA 1, LIMACHE	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-33,0016861	,"Longitude":	-71,26616186	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	CAMINO TRONCAL 1591, VILLA ALEMANA	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0478126	,"Longitude":	-71,34839551	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	TERCERA DEL SUR 680, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,11725009	,"Longitude":	-71,56918244	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL DE OLMUE	"Direccion":	AV.GRANIZO 5350 OLMUE, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-32,99525228	,"Longitude":	-71,17984399	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	ARAUCO N° 371	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8153803	,"Longitude":	-73,2450448	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL EL QUISCO	"Direccion":	CARRERA PINTO 70 COMUNA ,EL QUISCO,CHILE	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,39758395	,"Longitude":	-71,69422423	,"Stock":	"NO"}
{"Nombre":	GEOFARMA	"Direccion":	AV. CONCóN REñACA N°372 L-1	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,93390691	,"Longitude":	-71,52982047	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL BANAMOR	"Direccion":	PINTO Nº 29 QUILLOTA	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87759496	,"Longitude":	-71,24921165	,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN JUAN DE DIOS DE LOS ANDES	"Direccion":	AVENIDA ARGENTINA N°315	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,82929541	,"Longitude":	-70,59598783	,"Stock":	"SI"}
{"Nombre":	CAE HOSPITAL SAN JUAN DE DIOS DE LOS ANDES	"Direccion":	AVENIDA ARGENTINA 315, LOS ANDES	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,82928408	,"Longitude":	-70,59616923	,"Stock":	"NO"}
{"Nombre":	HOSPITAL SAN AGUSTIN	"Direccion":	DR. VICTOR DÍAZ Nº 1020, LA LIGUA	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,45051554	,"Longitude":	-71,23801301	,"Stock":	"SI"}
{"Nombre":	CESFAM RAUL SANCHEZ	"Direccion":	PAPUDO 655, LA LIGUA	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,45072113	,"Longitude":	-71,23252995	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR LA LIGUA	"Direccion":	PORTALES 555, LA LIGUA	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,45011479	,"Longitude":	-71,23163222	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMA ALERCE	"Direccion":	PARQUE ALERCE ANDINO 1901, LOCAL 3, ALERCE SUR, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,40662149	,"Longitude":	-72,91454315	,"Stock":	"SI"}
{"Nombre":	POPULAR VALPARAíSO	"Direccion":	MOLINA 468, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04626101	,"Longitude":	-71,62038002	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AVDA. PDTE. IBAñEZ N°1433,LOCAL 104 PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4723235	,"Longitude":	-72,9683757	,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN CAMILO	"Direccion":	AVENIDA MIRAFLORES 2050, SAN FELIPE	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7494086	,"Longitude":	-70,70909222	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR DE PENCAHUE	"Direccion":	CALLE JULIO ZACARÍAS MEZA S/N ESQ. HERNANDO BRAVO DE VILLALBA PENCAHUE	"Region":	MAULE	,"Comuna":	PENCAHUE	,"Latitude":	-35,3976	,"Longitude":	-71,798214	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR DE HUALAÑÉ	"Direccion":	AVENIDAD LIBERTAD Nº90	"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,977561	,"Longitude":	-71,801006	,"Stock":	"NO"}
{"Nombre":	FARMACIA FENIX	"Direccion":	DIEGO BAHAMONDE N°365-B QUEMCHI	"Region":	LOS LAGOS	,"Comuna":	QUEMCHI	,"Latitude":	-42,144203	,"Longitude":	-73,473397	,"Stock":	"NO"}
{"Nombre":	LICAN	"Direccion":	TUCAPEL JIMENEZ 133	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4424057	,"Longitude":	-70,6588659	,"Stock":	"SI"}
{"Nombre":	HERNANDEZ	"Direccion":	PADRE HURTADO 15787	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	MARCOLETA 328, TORRE 9, PISO 1, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4421821	,"Longitude":	-70,6398758	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	PORTUGAL 628, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4500623	,"Longitude":	-70,6347531	,"Stock":	"NO"}
{"Nombre":	PARIS	"Direccion":	SAN DIEGO 249	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4483952	,"Longitude":	-70,6508984	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA GENERAL OSCAR BONILLA 5900, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4573202	,"Longitude":	-70,714213	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA VITACURA 2700, LOCAL 101	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415786	,"Longitude":	-70,6044182	,"Stock":	"NO"}
{"Nombre":	GALFARMA	"Direccion":	AVENIDA VITACURA 3815	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,4012596	,"Longitude":	-70,5930235	,"Stock":	"SI"}
{"Nombre":	LOS ANDES	"Direccion":	SERRANO 201	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4471481	,"Longitude":	-70,648984	,"Stock":	"SI"}
{"Nombre":	MARSIL	"Direccion":	DARDIGNAC 461	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4320665	,"Longitude":	-70,6457797	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 8903, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5386093	,"Longitude":	-70,6647591	,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	MAPOCHO 5041, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4283758	,"Longitude":	-70,7044521	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA IRARRAZAVAL 3965	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA IRARRAZAVAL 3239	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4550914	,"Longitude":	-70,5971785	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA FRANCISCO BILBAO 2851	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4356042	,"Longitude":	-70,5916376	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LAS BELLOTAS 182	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4221422	,"Longitude":	-70,6082024	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	TARAPACA 929	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4470231	,"Longitude":	-70,6491245	,"Stock":	"SI"}
{"Nombre":	FARMA TOTAL	"Direccion":	AVENIDA VICUÑA MACKENNA 171, ACCESO B	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4432872	,"Longitude":	-70,6335284	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ORTÚZAR N° 602	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,687302	,"Longitude":	-71,215482	,"Stock":	"SI"}
{"Nombre":	OSTER	"Direccion":	AVENIDA RECOLETA 5802 A	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3711345	,"Longitude":	-70,6358339	,"Stock":	"NO"}
{"Nombre":	ARCA	"Direccion":	BAZTAN 210	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,6861588	,"Longitude":	-71,2166838	,"Stock":	"NO"}
{"Nombre":	FARMA MAS AHORRO	"Direccion":	AVENIDA COLON 6742 LOCAL 1	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7763241	,"Longitude":	-73,0863963	,"Stock":	"SI"}
{"Nombre":	FARMACIA LINCOYAN	"Direccion":	LINCOYAN Nº 530	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8275196	,"Longitude":	-73,0537746	,"Stock":	"SI"}
{"Nombre":	FARMACIA CONCEPCION	"Direccion":	Cochrane 1012	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8277986	,"Longitude":	-73,0439175	,"Stock":	"SI"}
{"Nombre":	CAROLINA	"Direccion":	VEINTIUNO DE MAYO 1081, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6671317	,"Longitude":	-70,9285577	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN IGNACIO 1624	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,56099	,"Longitude":	-70,826991	,"Stock":	"SI"}
{"Nombre":	SEGAL	"Direccion":	LO MARTINEZ 919, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,57297242	,"Longitude":	-70,66575746	,"Stock":	"NO"}
{"Nombre":	DR SIMI	"Direccion":	ESMERALDA N°286	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83348362	,"Longitude":	-70,59714176	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA MACUL 2075	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,4738253	,"Longitude":	-70,5989287	,"Stock":	"SI"}
{"Nombre":	PHARMASTORE LTDA	"Direccion":	SAN PABLO 1527, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4345216	,"Longitude":	-70,6591205	,"Stock":	"SI"}
{"Nombre":	FARMACIA TRIFARMA	"Direccion":	1 NORTE Nº1410 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,426597	,"Longitude":	-71,656847	,"Stock":	"SI"}
{"Nombre":	JOVITA	"Direccion":	AVENIDA GRECIA 6918	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4720336	,"Longitude":	-70,5614221	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PROVIDENCIA 2120	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4226275	,"Longitude":	-70,6111186	,"Stock":	"SI"}
{"Nombre":	COES	"Direccion":	AVENIDA CUATRO PONIENTE 0391-A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51616	,"Longitude":	-70,79138	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SARGENTO ALDEA 830	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,28494	,"Longitude":	-70,876251	,"Stock":	"NO"}
{"Nombre":	NOS	"Direccion":	PORTALES 4290	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,6376671	,"Longitude":	-70,7077474	,"Stock":	"SI"}
{"Nombre":	DAMYFAR	"Direccion":	GRECIA 5540	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,46923792	,"Longitude":	-70,57537359	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHICUREO S/N SECTOR PIEDRA ROJA, STRIP CENTER CLINICA LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,283324	,"Longitude":	-70,650977	,"Stock":	"SI"}
{"Nombre":	BLANCA	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA 10167	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55315	,"Longitude":	-70,6739704	,"Stock":	"NO"}
{"Nombre":	MIVAL	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 10686-A	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5581059	,"Longitude":	-70,6779023	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	FERMÍN VIVACETA 1030, LOCALES 8 Y 9	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4185974	,"Longitude":	-70,6635713	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTICA DE TODOS	"Direccion":	ERRAZURIZ N°0900 PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3292463	,"Longitude":	-72,9713831	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR CABILDO	"Direccion":	LAUTARO S/N, CABILDO	"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,4256484	,"Longitude":	-71,06510813	,"Stock":	"SI"}
{"Nombre":	FARMACIA AURORA	"Direccion":	CARVALLO N° 307	"Region":	ATACAMA	,"Comuna":	CALDERA	,"Latitude":	-27,0683547	,"Longitude":	-70,8226749	,"Stock":	"SI"}
{"Nombre":	FARMACIA GENESIS	"Direccion":	TARAPACA N° 1698	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2147638	,"Longitude":	-70,1390347	,"Stock":	"SI"}
{"Nombre":	FARMACIA CIUDADANA PUERTO MONTT	"Direccion":	ANÍBAL PINTO 142	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,472736	,"Longitude":	-72,94692028	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR MAULLIN	"Direccion":	GASPAR DEL RIO N°85, MAULLIN	"Region":	LOS LAGOS	,"Comuna":	MAULLIN	,"Latitude":	-41,6159547	,"Longitude":	-73,5956317	,"Stock":	"SI"}
{"Nombre":	BOTICA COMUNAL LA ESTRELLA	"Direccion":	LOS CONCEJALES L-2	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,36105437	,"Longitude":	-70,32868549	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR LOS ANDES	"Direccion":	YERBAS BUENAS N° 345	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83268853	,"Longitude":	-70,60123866	,"Stock":	"NO"}
{"Nombre":	FARMACIA CLINICA RIO BLANCO	"Direccion":	AVDA SANTA MARIA N°777	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,84594131	,"Longitude":	-70,5870436	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR PUTAENDO	"Direccion":	CAMUS 130, PUTAENDO	"Region":	VALPARAISO	,"Comuna":	PUTAENDO	,"Latitude":	-32,62582756	,"Longitude":	-70,71707722	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL POZO ALMONTE	"Direccion":	COMERCIO N° 397, POZO ALMONTE, TARAPACÁ	"Region":	TARAPACA	,"Comuna":	POZO ALMONTE	,"Latitude":	-20,258373	,"Longitude":	-69,785572	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOGALES	"Direccion":	PEDRO FELIX VICUÑA 368	"Region":	VALPARAISO	,"Comuna":	NOGALES	,"Latitude":	-32,73637823	,"Longitude":	-71,20088535	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV FRANCIA 586	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04842741	,"Longitude":	-71,61296064	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL LOS MUERMOS	"Direccion":	EXTENSION MAKENNA N°150, LOS MUERMOS	"Region":	LOS LAGOS	,"Comuna":	LOS MUERMOS	,"Latitude":	-41,3971427	,"Longitude":	-73,4568502	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA CALBUCO	"Direccion":	ANTONIO VARAS ESQUINA MANUEL RODRIGUEZ, CALBUCO	"Region":	LOS LAGOS	,"Comuna":	CALBUCO	,"Latitude":	-41,7700449	,"Longitude":	-73,1318091	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	VICUÑA MACKENNA 223, OVALLE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6031774	,"Longitude":	-71,20148895	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMABOTICA	"Direccion":	BALMACEDA 1115, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91006992	,"Longitude":	-71,25131772	,"Stock":	"SI"}
{"Nombre":	ECO FARMACIA	"Direccion":	PRAT N°911	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7503572	,"Longitude":	-70,72411638	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA LOS ALAMOS 3052-B, ALTO HOSPICIO,  TARAPACA	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2666319	,"Longitude":	-70,103189	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	RAMóN PICARTE N° 3057, LOCAL 01-A	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8381431	,"Longitude":	-73,20992	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	CARLOS PRATS 0901 LOCAL 1206	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,013501	,"Longitude":	-73,159967	,"Stock":	"NO"}
{"Nombre":	HAHNEMANN	"Direccion":	AVENIDA PROVIDENCIA 2195, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	FARMAROD	"Direccion":	AV. LAGUNA SUR 8669	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	ADICH	"Direccion":	QUEBEC 496	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LA FLORIDA 9127, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	INDI	"Direccion":	SAN DIEGO 1505	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	BARROS ARANA 461	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8274345	,"Longitude":	-73,0529804	,"Stock":	"SI"}
{"Nombre":	FARMACIA MI BOTICA	"Direccion":	VILLA ALEGRE 675 LOCAL1	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,4993696	,"Longitude":	-72,6742106	,"Stock":	"NO"}
{"Nombre":	FARMACIA ANDRADE	"Direccion":	AV. PADRE ALBERTO HURTADO 277, VILLA GALILEA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47543361	,"Longitude":	-72,36949215	,"Stock":	"NO"}
{"Nombre":	FARMACIA RENGO	"Direccion":	RENGO, URRIOLA 481	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4101428	,"Longitude":	-70,8557303	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. EDMUNDO ELUCHANS 2030 L-2	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,95666097	,"Longitude":	-71,54379531	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. J. ALESSANDRI 3177 L1, L2, L3	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,79189	,"Longitude":	-73,069122	,"Stock":	"SI"}
{"Nombre":	DEL PACIFICO	"Direccion":	ATAMU TEKENA S/N°,ISLA DE PASCUA	"Region":	VALPARAISO	,"Comuna":	ISLA DE PASCUA	,"Latitude":	-27,1545533	,"Longitude":	-109,4330404	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO	"Direccion":	JOAQUIN EDWARDS BELLO 10670	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,5580386	,"Longitude":	-70,6235524	,"Stock":	"SI"}
{"Nombre":	FARMACIA TERMINAL	"Direccion":	BULNES Nº1098-D	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,335734	,"Longitude":	-72,405489	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMANDINA	"Direccion":	AV. PROGRESO 2000, LOCAL 74, RAMPA 2, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,22834582	,"Longitude":	-70,13125103	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAVECINA	"Direccion":	ASTORGA Nº 319	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1690023	,"Longitude":	-70,7433789	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	6 PONIENTE N°150	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01997272	,"Longitude":	-71,55853154	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL CASTRO	"Direccion":	GAMBOA  502, CASTRO	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4817301	,"Longitude":	-73,7689477	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTIKA	"Direccion":	O'HIGGINS N° 801	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3681873	,"Longitude":	-70,3311491	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA	"Direccion":	AV. BERNARDO O´HIGGINS Nº322 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,988391	,"Longitude":	-71,243887	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR PEUMO	"Direccion":	CALLE CARMEN Nº 33. PEUMO	"Region":	OHIGGINS	,"Comuna":	PEUMO	,"Latitude":	-34,396506	,"Longitude":	-71,169021	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA PLACILLA	"Direccion":	CALLE ALMIRANTE LATORRE Nº 2229	"Region":	OHIGGINS	,"Comuna":	PLACILLA	,"Latitude":	-34,6387343	,"Longitude":	-71,116709	,"Stock":	"NO"}
{"Nombre":	FCIA POPULAR SAN VICENTE	"Direccion":	ARTURO PRAT Nº 921	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43848358	,"Longitude":	-71,07754731	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA RENGO	"Direccion":	MANUEL RODRIGUEZ Nº344	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,41040866	,"Longitude":	-70,85725734	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	TRASLAVIÑA N°221	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75001066	,"Longitude":	-70,7270127	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN BENJAMIN-2	"Direccion":	AVENIDA CARACOL DEL CASTILLO S/N	"Region":	MAULE	,"Comuna":	PELARCO	,"Latitude":	-35,38278403	,"Longitude":	-71,44716928	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL BOTICARIO	"Direccion":	AVENIDA ABATE MOLINA Nº663	"Region":	MAULE	,"Comuna":	VILLA ALEGRE	,"Latitude":	-35,67726911	,"Longitude":	-71,74134204	,"Stock":	"SI"}
{"Nombre":	NICFARMA	"Direccion":	AVENIDA ORIENTE 1231, LOCAL 10	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,4568131	,"Longitude":	-72,3352426	,"Stock":	"NO"}
{"Nombre":	FARMACIA VALLE LAS RASTRAS	"Direccion":	21 1/2 NORTE Nº3326, TALCA (PARQUE RESIDENCIAL BICENTENERIO)	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,411168	,"Longitude":	-71,621209	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDANUEVA	"Direccion":	ARTURO PRAT Nº2530	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5949867	,"Longitude":	-71,7329384	,"Stock":	"SI"}
{"Nombre":	FARMACIA PORTOFINO	"Direccion":	MERINO JARPA N° 547	"Region":	ATACAMA	,"Comuna":	CHAÑARAL	,"Latitude":	-26,346569	,"Longitude":	-70,6217926	,"Stock":	"SI"}
{"Nombre":	SALAMOVICH	"Direccion":	AVENIDA SAN PABLO 3242	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4357571	,"Longitude":	-70,6796692	,"Stock":	"SI"}
{"Nombre":	BOTICA ANDINA	"Direccion":	FREIRE N°676	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83489946	,"Longitude":	-70,60350227	,"Stock":	"NO"}
{"Nombre":	FARMACIA OLIPAR Nº2	"Direccion":	1 ORIENTE Nº176, LOCAL 2 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43893	,"Longitude":	-71,666505	,"Stock":	"SI"}
{"Nombre":	COMUNAL CONCON	"Direccion":	CHAÑARCILLO 1150	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,92877132	,"Longitude":	-71,51488721	,"Stock":	"NO"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	GOROSTIAGA N° 451, IQUIQUE, REGION TARAPACA	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2161171	,"Longitude":	-70,1510135	,"Stock":	"NO"}
{"Nombre":	POPULAR RECOLETA RICARDO SILVA SOTO	"Direccion":	AVENIDA RECOLETA 2774	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4013924	,"Longitude":	-70,6438089	,"Stock":	"SI"}
{"Nombre":	POPULAR COMUNA SAN RAMóN	"Direccion":	AVENIDA OSSA 1771	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,5424288	,"Longitude":	-70,6441567	,"Stock":	"SI"}
{"Nombre":	TALA FARMACIA	"Direccion":	ENRIQUE ALCALDE 966	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6622354	,"Longitude":	-70,9272831	,"Stock":	"SI"}
{"Nombre":	SOLIDARIA DE PROVIDENCIA	"Direccion":	AVENIDA SALVADOR 1029	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4431031	,"Longitude":	-70,6238587	,"Stock":	"NO"}
{"Nombre":	SOLIDARIA POPULAR DE PUENTE ALTO	"Direccion":	BALMACEDA 265	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,6096166	,"Longitude":	-70,5749222	,"Stock":	"SI"}
{"Nombre":	POPULAR DE SAN JOAQUIN	"Direccion":	RIVAS 692 A-B	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,47885	,"Longitude":	-70,64082	,"Stock":	"NO"}
{"Nombre":	BOTICA COMUNITARIA DRA. ELOÍSA DÍAZ	"Direccion":	SANTO DOMINGO 916	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4360483	,"Longitude":	-70,6502	,"Stock":	"NO"}
{"Nombre":	SANA SANA	"Direccion":	ISIDORO DUBOURNAIS 320 EL QUISCO	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,39868034	,"Longitude":	-71,69438707	,"Stock":	"SI"}
{"Nombre":	MUNICIPAL DR. CARLOS LORCA TOBAR	"Direccion":	AVENIDA INDEPENDENCIA 753	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4225286	,"Longitude":	-70,6554333	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA DE LA REINA	"Direccion":	AVENIDA ALCALDE FERNANDO CASTILLO VELASCO 8580	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451401	,"Longitude":	-70,5425766	,"Stock":	"SI"}
{"Nombre":	LA BOTICA	"Direccion":	GENERAL ORDOÑEZ 176 A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5078239	,"Longitude":	-70,7597067	,"Stock":	"NO"}
{"Nombre":	COMUNITARIA QUINTA NORMAL	"Direccion":	CARRASCAL 4447	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4228283	,"Longitude":	-70,6943413	,"Stock":	"SI"}
{"Nombre":	MUNICIPAL SOLIDARIA DE QUILICURA	"Direccion":	COVADONGA 520	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3694954	,"Longitude":	-70,7323235	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ERRAZURIZ N° 1040	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8179525	,"Longitude":	-73,2354843	,"Stock":	"NO"}
{"Nombre":	COMUNITARIA VIDA BUENA	"Direccion":	AVENIDA AMÉRICO VESPUCIO 002	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,5416023	,"Longitude":	-70,6218289	,"Stock":	"SI"}
{"Nombre":	MUNICIPAL DE LA CISTERNA	"Direccion":	PEDRO AGUIRRE CERDA 0161	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5347123	,"Longitude":	-70,665507	,"Stock":	"SI"}
{"Nombre":	POPULAR DR. JUAN CARLOS CONCHA GUTIÉRREZ	"Direccion":	CLOTARIO BLEST 6021	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,5020717	,"Longitude":	-70,6806731	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA LA PINTANA	"Direccion":	AVENIDA SANTA ROSA 12975	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,58459295	,"Longitude":	-70,62909552	,"Stock":	"NO"}
{"Nombre":	COMUNAL ESTACIÓN CENTRAL	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 3920	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45395554	,"Longitude":	-70,69001094	,"Stock":	"SI"}
{"Nombre":	VITABOTICA	"Direccion":	AVENIDA PADRE HURTADO N°1873	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,38183	,"Longitude":	-70,55197	,"Stock":	"NO"}
{"Nombre":	AMIGA	"Direccion":	BRASIL 8005	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,3980042	,"Longitude":	-70,7506951	,"Stock":	"NO"}
{"Nombre":	COMUNITARIA ISLA DE MAIPO	"Direccion":	ALCALDE LÓPEZ 9	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,7549526	,"Longitude":	-70,8967418	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA EL BOSQUE	"Direccion":	ALEJANDRO GUZMÁN 735	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5559025	,"Longitude":	-70,6654898	,"Stock":	"SI"}
{"Nombre":	MUNICIPAL PEÑAFLOR	"Direccion":	ERNESTO PRADO TAGLE 93	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6075489	,"Longitude":	-70,9005907	,"Stock":	"SI"}
{"Nombre":	COMUNAL COLINA	"Direccion":	ALPATACAL 540	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,2067054	,"Longitude":	-70,6704478	,"Stock":	"NO"}
{"Nombre":	CIUDADANA	"Direccion":	AVENIDA VICUÑA MACKENNA 7210	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5211633	,"Longitude":	-70,6009705	,"Stock":	"SI"}
{"Nombre":	FARMACIA SOLIDARIA	"Direccion":	MERCED 727	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,6847978	,"Longitude":	-71,2169875	,"Stock":	"NO"}
{"Nombre":	CIUDADANA	"Direccion":	Avenida Vicuña Mackenna 10777	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5586597	,"Longitude":	-70,5869976	,"Stock":	"NO"}
{"Nombre":	COMUNAL DE PADRE HURTADO	"Direccion":	CAMINO SAN ALBERTO HURTADO 3295	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,57832423	,"Longitude":	-70,82545114	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	BLANCO ENCALADA Nº 11	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,87739463	,"Longitude":	-71,24379914	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUMBO RANCAGUA	"Direccion":	CARRETERA EL COBRE Nº 750. RANCAGUA	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1849507	,"Longitude":	-70,7244665	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	RENGO 468 LOCAL 11 S	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8278194	,"Longitude":	-73,0521425	,"Stock":	"NO"}
{"Nombre":	SOFIA	"Direccion":	Ginebra 3603	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4474519	,"Longitude":	-70,296178	,"Stock":	"SI"}
{"Nombre":	FARMACENTER	"Direccion":	RUTA DE LA FRUTA, KM 62, EL MANZANO	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,16861597	,"Longitude":	-71,39717824	,"Stock":	"NO"}
{"Nombre":	QULLANI	"Direccion":	Avenida Diego Portales 1599	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4785581	,"Longitude":	-70,2980831	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO	"Direccion":	Cancha Rayada 3529	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4501902	,"Longitude":	-70,2936391	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL ARICA SECTRO CENTRO	"Direccion":	18 DE SEPTIEMBRE 453	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4787763	,"Longitude":	-70,3172672	,"Stock":	"SI"}
{"Nombre":	FCIA. DR. SIMI	"Direccion":	SAN MARTIN Nº 170	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,3851868	,"Longitude":	-70,8478478	,"Stock":	"SI"}
{"Nombre":	WELEDA	"Direccion":	SIMON BOLIVAR 4188, ÑUñOA	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4483751	,"Longitude":	-70,5888523	,"Stock":	"NO"}
{"Nombre":	AMIGA	"Direccion":	AVENIDA JOSÉ MANUEL BALMACEDA 4420	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,4030648	,"Longitude":	-70,7102563	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	AVENIDA ALESSANDRI 271	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9660362	,"Longitude":	-71,3419145	,"Stock":	"NO"}
{"Nombre":	BOTICA CIUDADANA	"Direccion":	PAMPA BAJA 678	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,92071255	,"Longitude":	-71,2539867	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA	"Direccion":	EL MIRADOR 70	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63852611	,"Longitude":	-71,17698344	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	SAN MARTIN 275	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	-30,034289	,"Longitude":	-70,713374	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR	"Direccion":	LAUTARO 746	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":	-31,9123775	,"Longitude":	-71,5070567	,"Stock":	"SI"}
{"Nombre":	FARMACIA PARA TODOS	"Direccion":	AMERICA 294	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL SAN MIGUEL	"Direccion":	TERESA VIAL 1290	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,4928027	,"Longitude":	-70,6557312	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR DE CERRILLOS	"Direccion":	PILOTO LAZO 120	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,4880599	,"Longitude":	-70,7031634	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA LEBU	"Direccion":	CARRERA 668-B	"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,607749	,"Longitude":	-73,65539	,"Stock":	"NO"}
{"Nombre":	BOTICA DEL CARBÓN	"Direccion":	COUSIÑO 599	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,092477	,"Longitude":	-73,157996	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL CORONEL	"Direccion":	LOS NOTROS 1489 LAGUNILLAS 2	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-36,986846	,"Longitude":	-73,154341	,"Stock":	"SI"}
{"Nombre":	FARMACIA VECINA	"Direccion":	JUAN MACKENNA 1247, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,574933	,"Longitude":	-73,1309844	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL SAN PABLO	"Direccion":	BOLIVIA 498	"Region":	LOS LAGOS	,"Comuna":	SAN PABLO	,"Latitude":	-40,41226883	,"Longitude":	-73,01218292	,"Stock":	"NO"}
{"Nombre":	DRUGSTORE PATAGONIA	"Direccion":	ARTURO PRAT 330, FUTALEUFU	"Region":	LOS LAGOS	,"Comuna":	FUTALEUFU	,"Latitude":	-43,1852697	,"Longitude":	-71,8674685	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR TOMÉ	"Direccion":	IGNACIO SERRANO 1055	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,616854	,"Longitude":	-72,959534	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL CHIGUAYANTE	"Direccion":	MANUEL RODRIGUEZ 300 LOCAL 1A	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,920582	,"Longitude":	-73,027281	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE CONCEPCION	"Direccion":	ANIBAL PINTO 450 LOCAL 8	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,826763	,"Longitude":	-73,049522	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL FARMARAUCO	"Direccion":	SERRANO 440	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,247224	,"Longitude":	-73,319376	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL PENCO	"Direccion":	MAIPÚ 201	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,738075	,"Longitude":	-72,993213	,"Stock":	"SI"}
{"Nombre":	FARMACIA ASISTENCIAL COMUNAL ÑIQUÉN	"Direccion":	ERNESTO ZUÑIGA 180	"Region":	ÑUBLE	,"Comuna":	ÑIQUEN	,"Latitude":	-36,28215924	,"Longitude":	-71,81525489	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL COMUNAL CHILLÁN	"Direccion":	LIBERTAD 1040	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60772	,"Longitude":	-72,095557	,"Stock":	"SI"}
{"Nombre":	FARMACIA ASISTENCIAL COMUNAL SAN CARLOS	"Direccion":	SERRANO Nº 02 ESQUINA AVENIDA PRAT	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,433555	,"Longitude":	-71,960144	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL COMUNAL CHILLÁN VIEJO	"Direccion":	REINO DE CHILE 1211 VILLA RÍOS DEL SUR	"Region":	ÑUBLE	,"Comuna":	CHILLAN VIEJO	,"Latitude":	-36,63088	,"Longitude":	-72,111343	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL COMUNAL COIHUE	"Direccion":	ARTURO PRAT 1643	"Region":	ÑUBLE	,"Comuna":	COIHUECO	,"Latitude":	-36,628439	,"Longitude":	-71,831801	,"Stock":	"SI"}
{"Nombre":	FARMACIA SOCIAL MUNICIPAL	"Direccion":	ROSAS 160	"Region":	BIOBIO	,"Comuna":	SANTA BARBARA	,"Latitude":	-37,6689305	,"Longitude":	-72,0216994	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA	"Direccion":	CAUPOLICAN 399	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,471309	,"Longitude":	-72,350784	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL	"Direccion":	IBIETA 225	"Region":	BIOBIO	,"Comuna":	SAN ROSENDO	,"Latitude":	-37,2641045	,"Longitude":	-72,7261048	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA LAJA	"Direccion":	Balmaceda 272	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,28041046	,"Longitude":	-72,71500373	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR	"Direccion":	O´HIGGINS 851	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,09752698	,"Longitude":	-72,56158304	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL CABRERO	"Direccion":	LAS DELICIAS 355	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,0374828	,"Longitude":	-72,4059368	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	FREIRE 402	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,5024031	,"Longitude":	-72,6710921	,"Stock":	"SI"}
{"Nombre":	FARMACIA BERNARDINO YAÑEZ QUINTEROS	"Direccion":	GANA 242	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37,72091095	,"Longitude":	-72,24519125	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE CARTAGENA	"Direccion":	CASANOVA 210, CARTAGENA	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,54712686	,"Longitude":	-71,6037521	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE" ( FRANQUICIA)	"Direccion":	AVENIDA SAN JUAN 133 C, LOCAL 40	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,17716096	,"Longitude":	-70,69837209	,"Stock":	"NO"}
{"Nombre":	DEL MAR	"Direccion":	7 NORTE 457	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01590721	,"Longitude":	-71,55320198	,"Stock":	"SI"}
{"Nombre":	BRUNOFARMA	"Direccion":	Lautaro 1042	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4806222	,"Longitude":	-70,3079602	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	AVDA. HEROES DE LA CONCEPCION 2608, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2361011	,"Longitude":	-70,1432444	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA RAMÓN FREIRE Nº 1551, LOCAL Nº 9	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,89808657	,"Longitude":	-71,24600986	,"Stock":	"SI"}
{"Nombre":	FARMACIA GACEMA II	"Direccion":	AV. ARGENTINA N°1667	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6594138	,"Longitude":	-70,3963646	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DR. PEDRO PULGAR MELGAREJO	"Direccion":	AV. LOS ALAMOS N° 3101, ALTO HOSPICIO	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2649839	,"Longitude":	-70,1005814	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	AV. PASCUAL BABURIZZA N°510	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,84348079	,"Longitude":	-70,59258769	,"Stock":	"NO"}
{"Nombre":	FARMACIA PRO-B	"Direccion":	3 ORIENTE Nº2, LOCAL Nº1	"Region":	MAULE	,"Comuna":	LONGAVI	,"Latitude":	-35,9682024	,"Longitude":	-71,6816479	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI LOCAL	"Direccion":	CHILLáN N° 637, RAHUE BAJO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57694019	,"Longitude":	-73,15527538	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA MANUEL LABRA LILLO Nº350	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98698058	,"Longitude":	-71,21357682	,"Stock":	"NO"}
{"Nombre":	FARMACIA HUEPE	"Direccion":	ARGENTINA 440, CHILLAN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6077703	,"Longitude":	-72,0928932	,"Stock":	"SI"}
{"Nombre":	ECONOFARMA	"Direccion":	RENÉ OLIVARES 1427, L. 6-7	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,53295313	,"Longitude":	-70,77456793	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LOS CARRERA 1302	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04863513	,"Longitude":	-71,43571065	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMÉRICO VESPUCIO 33, INTERMODAL LA CISTERNA PISO -1, L. 129	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5384135	,"Longitude":	-70,6636748	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	CLUB HIPICO 4676 L-5	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,4919827	,"Longitude":	-70,668105	,"Stock":	"SI"}
{"Nombre":	VIVI	"Direccion":	OBSERVATORIO 978	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5610884	,"Longitude":	-70,6651557	,"Stock":	"NO"}
{"Nombre":	TU BARRIO	"Direccion":	VICUñA MACKENNA 1612	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,5454071	,"Longitude":	-70,6480283	,"Stock":	"NO"}
{"Nombre":	MARIANA	"Direccion":	SAN ALBERTO HURTADO 2483	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,5698982	,"Longitude":	-70,8163784	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	DEL PARQUE 4722	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3898186	,"Longitude":	-70,6185843	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	SAN FRANCISCO 104-110	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4445417	,"Longitude":	-70,646855	,"Stock":	"SI"}
{"Nombre":	CARMEN	"Direccion":	AVENIDA LA DEHESA 4580	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,3302858	,"Longitude":	-70,5197462	,"Stock":	"NO"}
{"Nombre":	TOBALABA	"Direccion":	AVENIDA TOBALABA 15009	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,5090332	,"Longitude":	-70,5608283	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN MARTÍN 555, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,7365868	,"Longitude":	-70,7365618	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SALESIANOS 1334, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,490979	,"Longitude":	-70,6573761	,"Stock":	"NO"}
{"Nombre":	LA BOTICA ITALIA	"Direccion":	AVENIDA SANTA ISABEL 0301	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4468525	,"Longitude":	-70,6271953	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA CONSISTORIAL 2100, LOCALES 119-120	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4760865	,"Longitude":	-70,5431413	,"Stock":	"SI"}
{"Nombre":	LONQUIMAY	"Direccion":	AUGUSTO WYBERT 4593	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,415106	,"Longitude":	-70,6979884	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LA FLORIDA 9660, LOCAL 16	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5424699	,"Longitude":	-70,570287	,"Stock":	"NO"}
{"Nombre":	DOCTOR FARMA	"Direccion":	POMETO 898, VILLA ALEMANA	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,05748931	,"Longitude":	-71,39008194	,"Stock":	"SI"}
{"Nombre":	BENJAMIN	"Direccion":	LAS REJAS SUR 1390-B	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4719894	,"Longitude":	-70,7041005	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR PATAGONA	"Direccion":	ERRAZURIZ N° 3145  COYHAIQUE,REGIONAYSEN	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5749776	,"Longitude":	-72,0689665	,"Stock":	"NO"}
{"Nombre":	SOZAFAR	"Direccion":	AVENIDA LA BANDERA 9535	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,5481882	,"Longitude":	-70,6459138	,"Stock":	"SI"}
{"Nombre":	RUKALAF	"Direccion":	VARAS MENA 190	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,5116734	,"Longitude":	-70,6207438	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PROVIDENCIA 1947, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4240057	,"Longitude":	-70,6129589	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	AVENIDA SANTA ROSA 41	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4437355	,"Longitude":	-70,6459621	,"Stock":	"NO"}
{"Nombre":	FARMA GRAU	"Direccion":	RÍO ACONCAGUA 624	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,5746113	,"Longitude":	-70,8120153	,"Stock":	"SI"}
{"Nombre":	FARMAMASPLUS	"Direccion":	AVENIDA SAN PABLO 3135	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4355426	,"Longitude":	-70,6785403	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANQUEHUE SUR 31, LOCALES 38 Y 42	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4095335	,"Longitude":	-70,5673523	,"Stock":	"NO"}
{"Nombre":	FARMARECET	"Direccion":	AVENIDA IRARRAZAVAL 1302	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4529336	,"Longitude":	-70,6174891	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	PEDRO FONTOVA 7789	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,347631	,"Longitude":	-70,6704192	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA VITACURA 2837, LOCAL 102, E1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4145582	,"Longitude":	-70,6034898	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	MAPOCHO 4131	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4318304	,"Longitude":	-70,6911528	,"Stock":	"NO"}
{"Nombre":	JUMBO	"Direccion":	EL LLANO SUBERCASEUX 3519	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,4867883	,"Longitude":	-70,6508589	,"Stock":	"SI"}
{"Nombre":	PHAROL	"Direccion":	SAN PABLO 3136	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4356179	,"Longitude":	-70,6785313	,"Stock":	"NO"}
{"Nombre":	SAN DIEGO	"Direccion":	SAN DIEGO 1566	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4670079	,"Longitude":	-70,6486073	,"Stock":	"NO"}
{"Nombre":	FARMA TOUT	"Direccion":	AVENIDA O'HIGGINS 0201	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3601991	,"Longitude":	-70,7296068	,"Stock":	"SI"}
{"Nombre":	FARMACIAS 24	"Direccion":	VICUÑA MACKENNA 1720	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":	-33,5457397	,"Longitude":	-70,6459084	,"Stock":	"SI"}
{"Nombre":	NUEVA SALUD	"Direccion":	ORTÚZAR 1062	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,692401	,"Longitude":	-71,2157689	,"Stock":	"SI"}
{"Nombre":	JESUS DEL GRAN PODER	"Direccion":	AVENIDA RECOLETA 3724	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,3915498	,"Longitude":	-70,6424865	,"Stock":	"NO"}
{"Nombre":	BOTIFARM	"Direccion":	VICTORIA 790	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4633107	,"Longitude":	-70,6445068	,"Stock":	"SI"}
{"Nombre":	DE LO ALTO	"Direccion":	OMAR HERRERA GUTIÉRREZ 1475	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5756582	,"Longitude":	-70,5991508	,"Stock":	"NO"}
{"Nombre":	VITAUD 2.0	"Direccion":	AVENIDA LAS REJAS SUR 487	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4624591	,"Longitude":	-70,7053178	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VICUÑA MACKENNA ORIENTE 7110	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5188712	,"Longitude":	-70,6008749	,"Stock":	"SI"}
{"Nombre":	PLAZA BOLLENAR	"Direccion":	LOS BOLDOS 219, LOCALES 1-A, 2-B, 3-C, 4-D, BOLLENAR, MELIPILLA	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,570338	,"Longitude":	-71,2131711	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	MARGA MARGA 1650.	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,05652255	,"Longitude":	-71,42705124	,"Stock":	"SI"}
{"Nombre":	BARRIO-SALUD	"Direccion":	CINCO DE ABRIL N° 676	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,608668	,"Longitude":	-72,101664	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE VALDIVIA	"Direccion":	INDEPENDENCIA N° 455	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8134252	,"Longitude":	-73,2467585	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA LA UNIÓN	"Direccion":	RAMÍREZ N° 706	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,29384776	,"Longitude":	-73,08407976	,"Stock":	"NO"}
{"Nombre":	FARMACIA EXPRESS	"Direccion":	CALLE 29 SUR 13 PONIENTE Nº161 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,446975	,"Longitude":	-71,692352	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-489	"Direccion":	INES DE SUAREZ N° 1513 LOCAL 2 TEMUCO	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7426196	,"Longitude":	-72,635788	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. BERNARDO O'HIGGINS 716	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58667142	,"Longitude":	-70,9846505	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOFFEN	"Direccion":	VIVAR N° 1187	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2191974	,"Longitude":	-70,148934	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL QUILPUE	"Direccion":	SAN MARTIN 1270	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,05200136	,"Longitude":	-71,43371548	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL PEÑA BLANCA	"Direccion":	SARGENTO ALDEA 660	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0380805	,"Longitude":	-71,35617714	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL SANTO TOMAS LIMACHE	"Direccion":	CARELMAPU S/N, LIMACHE	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,99889429	,"Longitude":	-71,26844472	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL PANGUIPULLI	"Direccion":	SOR MERCEDES N° 136	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,64100744	,"Longitude":	-72,34069294	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AV. ESPAñA 1395, PUNTA ARENAS. CHILE	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1381532	,"Longitude":	-70,8903059	,"Stock":	"SI"}
{"Nombre":	FUNDACION DIABETES JUVENIL DE CHILE	"Direccion":	AV VALPARAISO 507 OFICINA 208	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02463385	,"Longitude":	-71,55547666	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR DE LICANTÉN	"Direccion":	JUAN ESTEBAN MONTERO Nº25	"Region":	MAULE	,"Comuna":	LICANTEN	,"Latitude":	-34,98763702	,"Longitude":	-71,98377942	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	21 de Mayo 320	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,478665	,"Longitude":	-70,318816	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL HUALPÉN	"Direccion":	MAFIL 275 A	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79363	,"Longitude":	-73,090106	,"Stock":	"SI"}
{"Nombre":	FARMACIA CIUDADANA DE CALAMA	"Direccion":	ESMERALDA N° 1814	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4718279	,"Longitude":	-68,9243323	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. BORGOÑO14351	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97254187	,"Longitude":	-71,54412239	,"Stock":	"NO"}
{"Nombre":	FARMACIAS CALAFATE	"Direccion":	Avenida René Schneider 1440	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,97023298	,"Longitude":	-71,25700471	,"Stock":	"SI"}
{"Nombre":	FARMACIAS A.L.A	"Direccion":	AVENIDA EL SAUCE 986, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,98716948	,"Longitude":	-71,34214457	,"Stock":	"SI"}
{"Nombre":	FARMACIA AHORRO MAS	"Direccion":	JUAN ANTONIO RIOS 43	"Region":	BIOBIO	,"Comuna":	LOS ALAMOS	,"Latitude":	-37,626503	,"Longitude":	-73,458692	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA LLANQUIHUE	"Direccion":	LOS VOLCANES N°407, LLANQUIHUE	"Region":	LOS LAGOS	,"Comuna":	LLANQUIHUE	,"Latitude":	-41,2606312	,"Longitude":	-73,0078406	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR.SIMI	"Direccion":	AVENIDA GABRIELA MISTRAL N°939, LOCALES 20Y21, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,3875209	,"Longitude":	-72,9196524	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL QUELLON	"Direccion":	22 DE MAYO N°351, QUELLON	"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,118186	,"Longitude":	-73,6181715	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR MOVIL MACHALI	"Direccion":	MIRANDA  420, MACHALI	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA VISTA HERMOSA	"Direccion":	OFICINA AUSONIA N°180	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5595111	,"Longitude":	-70,3946219	,"Stock":	"SI"}
{"Nombre":	FARMACIA SUPERFARMA	"Direccion":	M. A. MATTA N°2207	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6521985	,"Longitude":	-70,3991683	,"Stock":	"SI"}
{"Nombre":	FARMACIA O´HIGGINS	"Direccion":	O´HIGGINS 265, TALTAL	"Region":	ANTOFAGASTA	,"Comuna":	TALTAL	,"Latitude":	-25,4064683	,"Longitude":	-70,4818328	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	BARROS ARANA 871 LOCAL 4	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8253022	,"Longitude":	-73,0474997	,"Stock":	"NO"}
{"Nombre":	FARMACIA IGNAFAR	"Direccion":	MAIPÚ 155 C	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,737497	,"Longitude":	-72,993669	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	O´HIGGINS 2401 L 1 Y 2	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,912472	,"Longitude":	-73,029374	,"Stock":	"NO"}
{"Nombre":	INTEGRAL LANCO	"Direccion":	LIBERTAD N° 338	"Region":	LOS RIOS	,"Comuna":	LANCO	,"Latitude":	-39,4525314	,"Longitude":	-72,7745461	,"Stock":	"NO"}
{"Nombre":	FARMACIA GUTI	"Direccion":	AVENIDA ARGOMEDO Nº 1753-A	"Region":	OHIGGINS	,"Comuna":	QUINTA DE TILCOCO	,"Latitude":	-34,3542862	,"Longitude":	-70,9626394	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AV. PEREZ ZUJOVIC N°5470	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6187078	,"Longitude":	-70,3924183	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE PADRE LAS CASAS	"Direccion":	MAQUEHUE N° 1441 PADRE LAS CASAS	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,7733042	,"Longitude":	-72,5975803	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE COLLIPULLI	"Direccion":	AVDA.SAAVEDRA SUR N° 1355	"Region":	ARAUCANIA	,"Comuna":	COLLIPULLI	,"Latitude":	-37,9580903	,"Longitude":	-72,4309864	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR MUNICIPAL " EL TOQUI"	"Direccion":	MANUEL ANTONIO MATTA Nº 1315 LOCAL 2, GALERÍA BORDE RÍO	"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,5323528	,"Longitude":	-72,4395296	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE VICTORIA DR. EDUARDO BURGOS	"Direccion":	GOROSTIAGA N° 677 VICTORIA	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,2355368	,"Longitude":	-72,3311887	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE VILLARRICA	"Direccion":	ANFION MUÑOZ N° 405 VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2801358	,"Longitude":	-72,2269967	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE PUCON	"Direccion":	KACHELE Nº140	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,2796073	,"Longitude":	-71,9599778	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA FLORENCIA CONCHA	"Direccion":	VILLAGRAN N° 240	"Region":	ARAUCANIA	,"Comuna":	CARAHUE	,"Latitude":	-38,7116714	,"Longitude":	-73,1622602	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE ANGOL	"Direccion":	AVENIDA O´HIGGINS Nº1, ANGOL	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,8064657	,"Longitude":	-72,6921149	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE PITRUFQUEN	"Direccion":	FRANCISCO BILBAO N° 517 PITRUFQUEN	"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,9834722	,"Longitude":	-72,644204	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. GABRIELA MISTRAL 1255, LOS ANGELES	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47334653	,"Longitude":	-72,32935883	,"Stock":	"SI"}
{"Nombre":	FARMACIA MIMIZA	"Direccion":	BALMACEDA Nº 290	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,600824	,"Longitude":	-71,7091559	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DESIERTO II	"Direccion":	HUAMACHUCO 9163, ANTOFAGASTA	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5792347	,"Longitude":	-70,3817743	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MUJICA 475, RANCAGUA	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1678073	,"Longitude":	-70,741449	,"Stock":	"SI"}
{"Nombre":	FARMACIA PARADA	"Direccion":	MAIPÚ Nº419 LOCAL 8 LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84747	,"Longitude":	-71,597559	,"Stock":	"SI"}
{"Nombre":	FARMACIA MENDOZA	"Direccion":	AV. LAGUNA REDONDA PASAJE 17 N° 425	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,806603	,"Longitude":	-73,072502	,"Stock":	"SI"}
{"Nombre":	FARMACIA GALENO	"Direccion":	MAIPU N° 220	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6471671	,"Longitude":	-70,4010733	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN MIGUEL Nº2	"Direccion":	FREIRE Nº632, LOCAL Nº3	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,332346	,"Longitude":	-72,410727	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALAMED	"Direccion":	AVENIDA BERNARDO O'HIGGINS 516, RANCAGUA	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1655584	,"Longitude":	-70,7415723	,"Stock":	"NO"}
{"Nombre":	FARMACIA LEON	"Direccion":	ARTURO PRAT 21, MACHALI	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1798205	,"Longitude":	-70,6531783	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. AMIGO	"Direccion":	CONDELL 1525, LOCAL 4 ,VALPARAÍSO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0461783	,"Longitude":	-71,6213104	,"Stock":	"SI"}
{"Nombre":	FARMACIA LAS RASTRAS	"Direccion":	32 ORIENTE Nº1447 TALCA.	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,432204	,"Longitude":	-71,622728	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR.SIMI	"Direccion":	LADRILLEROS 489, QUELLON	"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,1173131	,"Longitude":	-73,621664	,"Stock":	"SI"}
{"Nombre":	PHARMA PUERTO	"Direccion":	Barros Luco 2148	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5993947	,"Longitude":	-71,6132844	,"Stock":	"NO"}
{"Nombre":	PUNTO FARMACIA	"Direccion":	LAS ENCINAS 1390 LOCAL 17	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9304251	,"Longitude":	-71,5237541	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. ARGENTINA 808, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0514574	,"Longitude":	-71,6026067	,"Stock":	"NO"}
{"Nombre":	GALVEZ	"Direccion":	AV. EL PERAL N°295, CARTAGENA	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,5259622	,"Longitude":	-71,5974592	,"Stock":	"NO"}
{"Nombre":	SANA SANA	"Direccion":	AV. CENTENARIO 268, SAN ANTONIO	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5798869	,"Longitude":	-71,6094209	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	FREIRE 752 C.	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04653732	,"Longitude":	-71,40703093	,"Stock":	"SI"}
{"Nombre":	FARMAZEN	"Direccion":	VICTORIA 0603	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04568	,"Longitude":	-71,35555	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DE CURANILAHUE	"Direccion":	CAMILO HENRIQUEZ N° 14	"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,472913	,"Longitude":	-73,343239	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	1 SUR Nº1678 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,428019	,"Longitude":	-71,652607	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CIRCUNVALACIóN SUR N° 459	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,84179795	,"Longitude":	-73,24571616	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA LAS RASTRAS Nº1695, LOCAL Nº10 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,431995	,"Longitude":	-71,608402	,"Stock":	"NO"}
{"Nombre":	24 HORAS	"Direccion":	Chacabuco 410	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4766044	,"Longitude":	-70,3150166	,"Stock":	"SI"}
{"Nombre":	MZ	"Direccion":	DIEGO PORTALES 1380	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4770788	,"Longitude":	-70,2998646	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ARTURO PRAT N°491	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6497564	,"Longitude":	-70,3961648	,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA, SEDE PUNTA ARENAS	"Direccion":	AV. BULNES N° 315	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1557276	,"Longitude":	-70,9009807	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIAS	"Direccion":	CONDELL 1201	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0435194	,"Longitude":	-71,6243813	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	HUANHIALI 839, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91604162	,"Longitude":	-71,24768594	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE FRUTILLAR	"Direccion":	ARTURO ALESSANDRI S/N°SECTOR ESTACION, FRUTILLAR	"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,1275859	,"Longitude":	-73,0606867	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA ALESSANDRI N°1117, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96772487	,"Longitude":	-71,26356835	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND" MALL VIVO COQUIMBO	"Direccion":	BAQUEDANO 86, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95839067	,"Longitude":	-71,33776499	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	VARELA 1300, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9564346	,"Longitude":	-71,33760118	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	VICUÑA MACKENNA 204, OVALLE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60306983	,"Longitude":	-71,20078024	,"Stock":	"NO"}
{"Nombre":	FARMACIAS CALAFATE	"Direccion":	AVENIDA CUATRO ESQUINAS 1580, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9450851	,"Longitude":	-71,24080035	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA LA TIRANA N° 3745, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,26072938	,"Longitude":	-70,12500308	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL SANTO  REMEDIO	"Direccion":	AV. ARTUTO PHILLIPS 325 LOCAL 1, SANTO DOMINGO	"Region":	VALPARAISO	,"Comuna":	SANTO DOMINGO	,"Latitude":	-33,634137	,"Longitude":	-71,612407	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALEMANA	"Direccion":	AVENIDA EINSTEIN Nº 509	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1767756	,"Longitude":	-70,7211077	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA AVENIDA	"Direccion":	ERRAZURIZ 989, SANTA CRUZ	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,6346534	,"Longitude":	-71,355763	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV ARGENTINA 540 LOCAL 103	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0484549	,"Longitude":	-71,6033886	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	21 DE MAYO Nº 1512	"Region":	ANTOFAGASTA	,"Comuna":	TOCOPILLA	,"Latitude":	-22,094366	,"Longitude":	-70,2020221	,"Stock":	"NO"}
{"Nombre":	MINAY	"Direccion":	DIEGO PORTALES 1594, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5606082	,"Longitude":	-70,5649249	,"Stock":	"SI"}
{"Nombre":	FARMACIA CONSTITUCIÓN	"Direccion":	INFANTE Nº207, LOCAL 3	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,334711	,"Longitude":	-72,406092	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVDA. TERESA WILLS MONTT N° 2263, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,26911033	,"Longitude":	-70,1262806	,"Stock":	"NO"}
{"Nombre":	FARMACIA BUENA SALUD	"Direccion":	Pedro Montt 160	"Region":	LOS LAGOS	,"Comuna":	PURRANQUE	,"Latitude":	-40,9121889	,"Longitude":	-73,1598496	,"Stock":	"SI"}
{"Nombre":	FCIA POPULAR MARCHIHUE	"Direccion":	LIBERTAD 443	"Region":	OHIGGINS	,"Comuna":	MARCHIGUE	,"Latitude":	-34,3971829	,"Longitude":	-71,619778	,"Stock":	"SI"}
{"Nombre":	FARMACIA BUENAVIDA	"Direccion":	PEDRO AGUIRE CERDA N°162, QUEILEN	"Region":	LOS LAGOS	,"Comuna":	QUEILEN	,"Latitude":	-42,8899545	,"Longitude":	-73,4753981	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	JOSE JOAQUÍN PÉREZ 6094	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4307458	,"Longitude":	-70,7201185	,"Stock":	"NO"}
{"Nombre":	VILLASANA	"Direccion":	CARRASCAL 3892	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,424565	,"Longitude":	-70,6876438	,"Stock":	"SI"}
{"Nombre":	HELP SERVICE	"Direccion":	AEROPUERTO 7344	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,5087263	,"Longitude":	-70,7047861	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AMÉRICO VESPUCIO 696	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL CARMEN	"Direccion":	AVENIDA EL CARMEN 1260	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5168493	,"Longitude":	-70,7635388	,"Stock":	"SI"}
{"Nombre":	FARMACIA IDINI	"Direccion":	WALKER MARTINEZ N°317, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3166872	,"Longitude":	-72,9840865	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CRISTÓBAL COLÓN 5081	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4188645	,"Longitude":	-70,5721916	,"Stock":	"SI"}
{"Nombre":	FARMATOTAL	"Direccion":	ANTONIO VARAS 398	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4311642	,"Longitude":	-70,6162772	,"Stock":	"NO"}
{"Nombre":	VADEMECUM	"Direccion":	RODOLFO JARAMILLO 2500	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,5643119	,"Longitude":	-70,8220376	,"Stock":	"SI"}
{"Nombre":	CENTRAL DE HOMEOPATÍA	"Direccion":	AVENIDA SUECIA 3598	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4534826	,"Longitude":	-70,5999401	,"Stock":	"NO"}
{"Nombre":	LO BARNECHEA FARMACIA	"Direccion":	AVENIDA EL RODEO 13533	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,3513558	,"Longitude":	-70,5088114	,"Stock":	"NO"}
{"Nombre":	VACSALUD	"Direccion":	MIRAFLORES 241, LOCAL 10	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4397858	,"Longitude":	-70,645218	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	VICUÑA MACKENNA 4686, CENTRO MÉDICO	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,4969193	,"Longitude":	-70,6152247	,"Stock":	"SI"}
{"Nombre":	BELEN	"Direccion":	AV. SANTA LUISA 400-B	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3509701	,"Longitude":	-70,7392114	,"Stock":	"SI"}
{"Nombre":	MEDFARMA	"Direccion":	AVENIDA PROVIDENCIA 1037	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4307117	,"Longitude":	-70,622858	,"Stock":	"NO"}
{"Nombre":	JUMBO	"Direccion":	AVENIDA MARIANO SÁNCHEZ FONTECILLA 12000	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4880184	,"Longitude":	-70,5566759	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA GRECIA 6799	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,471899	,"Longitude":	-70,5630629	,"Stock":	"NO"}
{"Nombre":	Easyfarma	"Direccion":	CARRETERA GENERAL SAN MARTÍN 105	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,1805616	,"Longitude":	-70,6482312	,"Stock":	"NO"}
{"Nombre":	MEGA AHORRO	"Direccion":	Avenida cardenal Raúl Silva Henríquez 9235	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,532433	,"Longitude":	-70,623861	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA RECOLETA 836, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4224674	,"Longitude":	-70,6450967	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SANTO DOMINGO 983, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4361342	,"Longitude":	-70,651229	,"Stock":	"SI"}
{"Nombre":	PURA PHARMA	"Direccion":	CUATRO PONIENTE 01221	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	SANA SANA	"Direccion":	DOMINGO SANTA MARIA 3465	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,4090166	,"Longitude":	-70,6929219	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA MANUEL MONTT 1221, LOCAL 101	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4390756	,"Longitude":	-70,6157943	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1322, LOCAL 5A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4450458	,"Longitude":	-70,6544701	,"Stock":	"NO"}
{"Nombre":	Manríquez	"Direccion":	MANUEL MONTT 435, LOCAL 104	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4323635	,"Longitude":	-70,618157	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PADRE HURTADO SUR 785	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41556421	,"Longitude":	-70,53952902	,"Stock":	"SI"}
{"Nombre":	CATEDRAL	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1113	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6640777	,"Longitude":	-70,9294041	,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	LO FONTECILLA 101, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3827104	,"Longitude":	-70,532091	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CALERA DE TANGO, PARAD. 4 1/2, LOCAL A-4	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,6255747	,"Longitude":	-70,781462	,"Stock":	"SI"}
{"Nombre":	GAVE	"Direccion":	CAMINO AL BOSQUE DE SANTIAGO 498	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3751323	,"Longitude":	-70,6334845	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	O'HIGGINS 800	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,441217	,"Longitude":	-70,7541512	,"Stock":	"NO"}
{"Nombre":	FARMACEUS	"Direccion":	VISVIRI 3760	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4901627	,"Longitude":	-70,7540395	,"Stock":	"SI"}
{"Nombre":	CURMAN	"Direccion":	AVENIDA SANTA ROSA 12980, LOCALES 6 Y 7	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,5853427	,"Longitude":	-70,6283267	,"Stock":	"SI"}
{"Nombre":	IBIZA	"Direccion":	PARQUE CENTRAL PONIENTE 309	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5562226	,"Longitude":	-70,7931437	,"Stock":	"SI"}
{"Nombre":	PUNTO FARMA	"Direccion":	AVENIDA EL GUANACO 4484	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3790741	,"Longitude":	-70,6577512	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 10850, LOCAL 10	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5622809	,"Longitude":	-70,3911513	,"Stock":	"SI"}
{"Nombre":	VALLE DE VIDA	"Direccion":	MATUCANA 4, LOCAL H	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4500768	,"Longitude":	-70,6792031	,"Stock":	"NO"}
{"Nombre":	SAINT GERMAIN	"Direccion":	LONGITUDINAL 5045	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4747329	,"Longitude":	-70,7488747	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AV. BALMACEDA N°2355	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6460605	,"Longitude":	-70,400822	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDA BICENTENARIO	"Direccion":	21 NORTE Nº3051 VILLA BICENTENARIO TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,410307	,"Longitude":	-71,624766	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AVENIDA CHORRRILLOS Nº1821, LOCAL 1	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,59956842	,"Longitude":	-71,7319203	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL EL BELLOTO	"Direccion":	FREIRE 917, BELLOTO	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,04664787	,"Longitude":	-71,40934846	,"Stock":	"NO"}
{"Nombre":	FARMACIA BICENTENARIO	"Direccion":	20 NORTE Nº3095 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,411986	,"Longitude":	-71,624058	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAYENEL	"Direccion":	LOS SAUCES N°71, VILLA CAYENEL, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4499984	,"Longitude":	-72,9575065	,"Stock":	"NO"}
{"Nombre":	ELIXIR	"Direccion":	GENERAL NOVOA 415, CONCEPCIÓN	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8176219	,"Longitude":	-73,0256974	,"Stock":	"NO"}
{"Nombre":	BIOSALUD	"Direccion":	MARIANO EGAÑA, 1016	"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,6184449	,"Longitude":	-72,9563275	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA ECONÓMICA	"Direccion":	AV. ARGENTINA N°01975	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6928011	,"Longitude":	-70,4102699	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. PEDRO MONTT 2513, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04708432	,"Longitude":	-71,60955817	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV ARGENTINA 540 LOCAL 333-335	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04898463	,"Longitude":	-71,60360976	,"Stock":	"NO"}
{"Nombre":	FARMACIA MARTÍN GALENO	"Direccion":	AV. LUIS CRUZ MARTÍNEZ Nº1366	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,114515	,"Longitude":	-71,280465	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	SALVADOR ALLENDE N°2241, LOCAL 5 Y 6	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,237878	,"Longitude":	-70,135155	,"Stock":	"NO"}
{"Nombre":	FARMACIA GERIATRICO	"Direccion":	CAUPOLICAN 198, LIMACHE	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,9878242	,"Longitude":	-71,2776357	,"Stock":	"NO"}
{"Nombre":	FARMACIA TRI-O FARMA	"Direccion":	AVDA. SALVADOR ALLENDE 2399, LOCAL 3, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23315783	,"Longitude":	-70,13598198	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	AV. B. O'HIGGINS Nº2933, VILLA NUEVA ALAMEDA	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1573639	,"Longitude":	-70,7657332	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MIGUEL	"Direccion":	CHACABUCO Nº390 LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,848164	,"Longitude":	-71,596479	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ARAUCO Nº 623, LOCAL 8, CHILLáN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6080136	,"Longitude":	-72,1030567	,"Stock":	"NO"}
{"Nombre":	HUEPE	"Direccion":	AV. PAUL HARRIS 790, CHILLAN, CHILLáN, REGIóN DEL BíO BíO	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,58827849	,"Longitude":	-72,09264912	,"Stock":	"SI"}
{"Nombre":	TELEFARMA	"Direccion":	CAMINO COLONIA BERNARDO O'HIGGINS Nº 1541, LOCAL 8, VILLA EMMANUEL	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,58712961	,"Longitude":	-72,07612617	,"Stock":	"NO"}
{"Nombre":	FARMACIA BOTICA DE  MELANIA Nº2	"Direccion":	AVENIDA CENTENARIO Nº 15	"Region":	MAULE	,"Comuna":	YERBAS BUENAS	,"Latitude":	-35,7501844	,"Longitude":	-71,5860492	,"Stock":	"NO"}
{"Nombre":	FARMACIA MANZANO	"Direccion":	AVENIDA RAUQUÉN Nº672, SARMIENTO	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,94417284	,"Longitude":	-71,20241318	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	1 SUR Nº1339	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4276801	,"Longitude":	-71,6579112	,"Stock":	"SI"}
{"Nombre":	FARMACIA 21 DE MAYO	"Direccion":	AVENIDA 21 DE MAYO 2637 LOCAL 3	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8190942	,"Longitude":	-72,9876878	,"Stock":	"SI"}
{"Nombre":	FARMACIA ILOCA	"Direccion":	AVENIDA BESOAIN S/N DUAO	"Region":	MAULE	,"Comuna":	LICANTEN	,"Latitude":	-34,9373474	,"Longitude":	-72,1821844	,"Stock":	"NO"}
{"Nombre":	PACÍFICO	"Direccion":	GABRIELA MISTRAL N° 621, VALDIVIA.	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8422434	,"Longitude":	-73,217213	,"Stock":	"SI"}
{"Nombre":	SANTO REMEDIO 3	"Direccion":	ESMERALDA N°607	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83208658	,"Longitude":	-70,60128049	,"Stock":	"NO"}
{"Nombre":	FARMAVECINA	"Direccion":	AV. LIBERTADOR BERNARDO O´HIGGINS N°01586	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17162019	,"Longitude":	-70,71573781	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	LORD COCHRANE N° 520	"Region":	ARAUCANIA	,"Comuna":	GORBEA	,"Latitude":	-39,10065895	,"Longitude":	-72,67413139	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAXAHORRO	"Direccion":	MAQUEHUE N° 850	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,7678319	,"Longitude":	-72,59612	,"Stock":	"SI"}
{"Nombre":	FARMACIA GUZMAN	"Direccion":	COMERCIO N° 101	"Region":	ARAUCANIA	,"Comuna":	RENAICO	,"Latitude":	-37,67135484	,"Longitude":	-72,58651972	,"Stock":	"SI"}
{"Nombre":	FARMACIA GUZMAN(L-01)	"Direccion":	BERNARDO O´HIGGINS N° 253	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,8066654	,"Longitude":	-72,6917915	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-1025	"Direccion":	AVDA. PABLO NERUDA N° 02025	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737918	,"Longitude":	-72,6309573	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI F0203	"Direccion":	AVDA. SAN MARTIN N° 0567 LOCAL 2	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7395175	,"Longitude":	-72,6107599	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MIRAFLORES	"Direccion":	ZENTENO N° 111 LOCAL2	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7355472	,"Longitude":	-72,582504	,"Stock":	"NO"}
{"Nombre":	FARMACIAS PEHUEN	"Direccion":	SATURNINO EPULEF N° 1328 LOCAL 2	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2897181	,"Longitude":	-72,2232353	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" MOVIL	"Direccion":	AVDA. ALEMANIA Nº780	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7340645	,"Longitude":	-72,613626	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL LA CALERA	"Direccion":	JOSé JOAQUíN PéREZ Nº 595-599 LOCAL 3 LA CALERA	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7843552	,"Longitude":	-71,1901678	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAVEGA	"Direccion":	AV. SALVADOR ALLENDE Nº 330	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6285475	,"Longitude":	-70,3924734	,"Stock":	"NO"}
{"Nombre":	BOTICA COMUNAL CASABLANCA	"Direccion":	CHACABUCO 172	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,3208678	,"Longitude":	-71,4072475	,"Stock":	"SI"}
{"Nombre":	FARMACIA HCS	"Direccion":	CARDENIO AVELLO 36	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8142633	,"Longitude":	-73,0315073	,"Stock":	"NO"}
{"Nombre":	PLAZA HIJUELAS	"Direccion":	MANUEL RODRíGUEZ #1496 LOCAL 1	"Region":	VALPARAISO	,"Comuna":	HIJUELAS	,"Latitude":	-32,7997531	,"Longitude":	-71,1458655	,"Stock":	"NO"}
{"Nombre":	FARMACIA NOVAVITA	"Direccion":	PATRICIO LYNCH N° 426	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21272389	,"Longitude":	-70,15131671	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL NORTE	"Direccion":	AV. RICAVENTURA Nº 11785	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5517833	,"Longitude":	-70,3954368	,"Stock":	"SI"}
{"Nombre":	FARMACIAS KNOP	"Direccion":	PRAT N°441	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,647519	,"Longitude":	-70,397643	,"Stock":	"SI"}
{"Nombre":	FARMACIAS KNOP	"Direccion":	LATORRE Nº1986	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4605178	,"Longitude":	-68,9258484	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Diego Portales 640, locales BH 1121, 1125, 1129, 1133	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4702474	,"Longitude":	-70,3067767	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIENTOS DE MAR	"Direccion":	AVENIDA MILLACO 534, LOCAL 13 A, PICHILEMU	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,3896409	,"Longitude":	-72,0130995	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	TERESA WILMS MONTT 2263, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2689628	,"Longitude":	-70,1260426	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	RENGO 524	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8271274	,"Longitude":	-73,0525131	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR LAGUNA VERDE	"Direccion":	VILLA EL EDEN BAJO, LAGUNA VERDE	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,10309852	,"Longitude":	-71,66855095	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	ARAUCO 683	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6086747	,"Longitude":	-72,1033257	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANTA FE	"Direccion":	AVENIDA BALMACEDA Nº1598-C, VILLA LA PAZ II CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,972274	,"Longitude":	-71,248068	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	BULNES 699	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,7270026	,"Longitude":	-72,5015736	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAGALLANES	"Direccion":	MANUEL BAQUEDANO N° 330 LOCAL B	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,7269353	,"Longitude":	-72,5014067	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MAQUEHUE N° 1281 LOCAL 4  PADRE  LAS CASAS	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,7729188	,"Longitude":	-72,597446	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOGAN	"Direccion":	AVENIDA BOSQUES DE MONTEMAR N° 65 OF. 301	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9498808	,"Longitude":	-71,5423347	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. LOS CARRERA N° 4723, PASEO SN. FERNANDO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3978036	,"Longitude":	-70,2940467	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	DIEGO PORTALES 331, COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95747917	,"Longitude":	-71,33904814	,"Stock":	"SI"}
{"Nombre":	MI FARMACIA	"Direccion":	JUAN DE DIOS PENI 504, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90740777	,"Longitude":	-71,24977039	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	RUTA 5 NORTE 6650, LA SERENA, CHILE	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94793386	,"Longitude":	-71,2838235	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BAQUEDANO 86, COQUIMBO, CHILE	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9581614	,"Longitude":	-71,33778107	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GUILLERMO ULRIKSEN 1634, LA SERENA, CHILE	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91977406	,"Longitude":	-71,23496471	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 2885, LA SERENA	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,92645968	,"Longitude":	-71,25807612	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL QUINTERO	"Direccion":	ARTURO PRAT N°1751	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,783769	,"Longitude":	-71,5301817	,"Stock":	"SI"}
{"Nombre":	FARMACIA SALUD MAULE	"Direccion":	12 NORTE Nº1354 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,412337	,"Longitude":	-71,655709	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA	"Direccion":	GERMÁN RIESCO N° 120	"Region":	LOS RIOS	,"Comuna":	FUTRONO	,"Latitude":	-40,12957401	,"Longitude":	-72,38519204	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	GALVARINO RIVERA N°1703, CASTRO	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4684273	,"Longitude":	-73,7853822	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MARTIN 2	"Direccion":	AVDA. IGNACIO CARRERA PINTO Nº170	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4321662	,"Longitude":	-71,6775934	,"Stock":	"NO"}
{"Nombre":	FARMACIA COSAM LOS ANDES	"Direccion":	OHIGGINS N°470	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83397641	,"Longitude":	-70,59961476	,"Stock":	"NO"}
{"Nombre":	FARMACIA DE URGENCIA	"Direccion":	BAJOS DE MATTE N° 0620	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,7220948	,"Longitude":	-70,7404191	,"Stock":	"SI"}
{"Nombre":	DE LO ALTO	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA 9200	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,5424943	,"Longitude":	-70,6655236	,"Stock":	"SI"}
{"Nombre":	ARUMI	"Direccion":	Juan de Dios Flores 1281, local 48	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4470749	,"Longitude":	-70,2837328	,"Stock":	"SI"}
{"Nombre":	FLORES	"Direccion":	EL VALLE 6381, L.2	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4771531	,"Longitude":	-70,5691758	,"Stock":	"NO"}
{"Nombre":	ECOPHARMA	"Direccion":	AVENIDA MANUEL ANTONIO MATTA N° 60, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45504	,"Longitude":	-70,62894	,"Stock":	"SI"}
{"Nombre":	CRUZ DEL SUR	"Direccion":	AVENIDA LAGUNA SUR 7313	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,4624729	,"Longitude":	-70,7394115	,"Stock":	"NO"}
{"Nombre":	SHALOM	"Direccion":	CABO VIRGENES 2156	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5778423	,"Longitude":	-70,6081204	,"Stock":	"NO"}
{"Nombre":	SAN CARLOS	"Direccion":	AVENIDA GABRIELA 03950	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,58230738	,"Longitude":	-70,60593262	,"Stock":	"SI"}
{"Nombre":	ANTONIO	"Direccion":	AVENIDA LAS TORRES 191	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3618588	,"Longitude":	-70,7207696	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA BERNARDO O'HIGGINS 308, L.3	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,35652082	,"Longitude":	-70,72891173	,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	EYZAGUIRRE 646	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,595207	,"Longitude":	-70,7063346	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARLOS CONDELL N° 1687 QUILLOTA	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8968333	,"Longitude":	-71,2435823	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Merced 255	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98461848	,"Longitude":	-71,23815466	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Diego Portales 640, locales B 1065/1068/1073	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4702474	,"Longitude":	-70,3067767	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIVO MÁS	"Direccion":	O´HIGGINS 825 LOCAL 14	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8264213	,"Longitude":	-73,0477683	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	AV. PEDRO MONTT 1772	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0467841	,"Longitude":	-71,6186976	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. ISIDORO DUBOURNAIS  0450 LOCAL 05 ,EL QUISCO	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,3869837	,"Longitude":	-71,6902845	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	TARAPACA N° 503, ESQ. OBISPO LABBE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,214131	,"Longitude":	-70,150089	,"Stock":	"NO"}
{"Nombre":	FARMACIA MÓVIL DEL NORTE	"Direccion":	CHUQUICAMATA N° 1714, EL SALVADOR	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	CAYUMANQUI Nº 428, QUILLóN, REGIóN DEL BIOBíO	"Region":	ÑUBLE	,"Comuna":	QUILLON	,"Latitude":	-36,74301288	,"Longitude":	-72,4737107	,"Stock":	"NO"}
{"Nombre":	FARMACIA DE LA CLÍNICA PUERTO MONTT	"Direccion":	PANAMERICANA N°400, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4585888	,"Longitude":	-72,9559756	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	EYZAGUIRRE 624, LOCAL 2, SAN BERNARDO	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL DE CURACAVí	"Direccion":	AVENIDA AMBROSIO O'HIGGINS 500	"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	BOTICA NATURLAND	"Direccion":	AVENIDA PADRE HURTADO 875, LOCAL BS 1465 - BS 1469, PISO 0, MALL PLAZA LOS DOMINICOS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIAS AMIGA	"Direccion":	FRANKLIN N°991, SANTIAGO	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,472866	,"Longitude":	-70,646491	,"Stock":	"NO"}
{"Nombre":	FARMACIAS LA UNIÓN	"Direccion":	Arturo Prat 1091	"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,2904895	,"Longitude":	-73,0804231	,"Stock":	"SI"}
{"Nombre":	PICARTE	"Direccion":	AVENIDA RAMÓN PICARTE N° 493	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81459511	,"Longitude":	-73,24274684	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	O´HIGGINS 914 LOCAL 4	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8263873	,"Longitude":	-73,0463571	,"Stock":	"NO"}
{"Nombre":	MASSALUD	"Direccion":	GUIDO BECK DE RAMBERGA N° 630	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,56865537	,"Longitude":	-72,00580765	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ILLAPEL N°10, LOCAL C3A, CENTRO COMERCIAL PASEO COSTANERA, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4723017	,"Longitude":	-72,9365863	,"Stock":	"SI"}
{"Nombre":	FARMACIA CODEGUA	"Direccion":	CALLE ANDES Nº 88, CODEGUA	"Region":	OHIGGINS	,"Comuna":	CODEGUA	,"Latitude":	-34,0353709	,"Longitude":	-70,6673001	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA MéXICO 2627, LOCAL 108	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,58681207	,"Longitude":	-70,5629459	,"Stock":	"NO"}
{"Nombre":	SANTA GEMITA	"Direccion":	AVENIDA JOSE PEDRO ALESSANDRI 80 Y 84	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	INSTITUTO TRAUMATOLóGICO DR. TEODORO GEBAUER WEISSER	"Direccion":	SAN MARTIN 771	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	PUNTO BLANCO	"Direccion":	HUANHUALí Nº 501	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9151106	,"Longitude":	-71,25241413	,"Stock":	"NO"}
{"Nombre":	ONCOCENTRO	"Direccion":	MARINA 1702 VIÑA DEL MAR	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0274844	,"Longitude":	-71,5385916	,"Stock":	"SI"}
{"Nombre":	VITALPHARMA	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 5649	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SARGENTO ALDEA 830, LOCALES 41 Y 42, LAMPA	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,2849425	,"Longitude":	-70,87625215	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 1564,   LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	SAN DIEGO 1399, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA RECOLETA 460, CLíNICA DAVILA	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	DIAGONAL RANCAGUA 910, LOCAL 4 Y 5	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	VALLE DE VIDA	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 825, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN DANIEL	"Direccion":	AVENIDA HUAMACHUCO Nº632-A SAN CLEMENTE	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,539652	,"Longitude":	-71,485704	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SUECIA 55	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	LOS LUNES N°13 QUILPUÉ	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,035851	,"Longitude":	-71,4841017	,"Stock":	"NO"}
{"Nombre":	FARMACIA G Y M	"Direccion":	2 NORTE 1 ORIENTE Nº35	"Region":	MAULE	,"Comuna":	VILLA ALEGRE	,"Latitude":	-35,69363637	,"Longitude":	-71,68031754	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVDA. 21 DE MAYO N°950 LOCAL 7, SAN ANTONIO	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5889925	,"Longitude":	-71,6112608	,"Stock":	"NO"}
{"Nombre":	TU FARMACIA	"Direccion":	AVENIDA SANTA SARA, PARCELA 8, LOTE 12, LOCAL D	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. PROVIDENCIA 2327	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	LUIS THAYER OJEDA 0146, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PADRE SERGIO CORREA 14.500, LOCALES 5 Y 6, MALL VIVO PIEDRA ROJA	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	DB FARMACIAS	"Direccion":	MAPOCHO 7366, LOCAL  1	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	LOS MOLINEROS 1720, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,470602	,"Longitude":	-70,568442	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GENERAL MACKENNA 1130	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CARRETERA GENERAL SAN MARTIN 027	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204695	,"Longitude":	-70,676266	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA LARRAíN 5862, LOCALES BM 916, 920 Y 924, INTERIOR MALL PLAZA EGAñA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA INDEPENDENCIA 565, INTERIOR MALL BARRIO INDEPENDENCIA	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,42460368	,"Longitude":	-70,65456218	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 845, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	BANDERA 200	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	GAMA	"Direccion":	SAN ISIDRO 66	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	TU FARMACIAONLINE	"Direccion":	SAN EUGENIO 1543, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	C.A.	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA  6485	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PASEO "AHUMADA"  11	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	BANDERA  605	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O’HIGGINS 727 AL 729	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	PURA PHARMA	"Direccion":	AVENIDA IRARRáZAVAL 1915, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	COMUNAL DE TIL TIL	"Direccion":	IGNACIO CARRERA PINTO 010	"Region":	METROPOLITANA	,"Comuna":	TIL-TIL	,"Latitude":	-33,085245	,"Longitude":	-70,929662	,"Stock":	"SI"}
{"Nombre":	FARMA-ULLOA	"Direccion":	BALMACEDA 489, LOCALES N° 46 Y 47	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	SAN CARLOS	"Direccion":	AVENIDA GABRIELA 03950	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CONCHA Y TORO 3458, LOCALES 5,6 Y 7, METRO ESTACIóN SóTERO DEL RíO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA VICUñA MACKENNA ORIENTE  7110, TORRE B, LOCALES 108 – 112	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,518401	,"Longitude":	-70,599124	,"Stock":	"SI"}
{"Nombre":	J M	"Direccion":	NONATO COO 1348	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,596522	,"Longitude":	-70,566342	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LAS INDUSTRIAS 15560, LOCALES 2, 3 Y 4, INTERIOR SUPERMERCADO LIDER	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	PRINCIPAL	"Direccion":	AVENIDA ESQUINA BLANCA  0261, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	AVENIDA CONCHA Y TORO 62	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. ANGAMOS N°2170, LOCAL 129	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6949627	,"Longitude":	-70,4162617	,"Stock":	"NO"}
{"Nombre":	TOGA	"Direccion":	AVENIDA CON CON REÑACA Nº 110, L-5	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9340598	,"Longitude":	-71,5366032	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	TARAPACÁ N° 385	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,213937	,"Longitude":	-70,151545	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	SAN ANTONIO 1195	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01096038	,"Longitude":	-71,54285127	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Diego Portales 157, local 304	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4686526	,"Longitude":	-70,3079602	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. DIVINA PROVIDENCIA 132, LLOLLEO SAN ANTONIO	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6117247	,"Longitude":	-71,6108053	,"Stock":	"SI"}
{"Nombre":	FARMACIA SHOFAR	"Direccion":	ABDON CIFUENTES 1914	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,7926104	,"Longitude":	-73,0456995	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Diego Portales 157 locales 112, 113, 114 Y 115	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4686526	,"Longitude":	-70,3079602	,"Stock":	"NO"}
{"Nombre":	FARMACIA SOLIDARIA PICHIDEGUA	"Direccion":	CHORRILLOS 46	"Region":	OHIGGINS	,"Comuna":	PICHIDEGUA	,"Latitude":	-34,36015656	,"Longitude":	-71,27860762	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	VICUÑA MAKENNA 797.	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0465452	,"Longitude":	-71,4445891	,"Stock":	"SI"}
{"Nombre":	FARMACIA O'HIGGINS	"Direccion":	ARTURO PRAT 115, MACHALI	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1789658	,"Longitude":	-70,6524149	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CHACABUCO N° 281, QUILLOTA	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,878338	,"Longitude":	-71,246225	,"Stock":	"NO"}
{"Nombre":	VEJAR	"Direccion":	AVENIDA PRESIDENTE FREI N° 625 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,7944462	,"Longitude":	-73,3910372	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PISAGUA 20	"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,70920444	,"Longitude":	-71,04290962	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. ANGAMOS N°02170, LOCAL 103	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6949627	,"Longitude":	-70,4162617	,"Stock":	"NO"}
{"Nombre":	FARMAINTEGRAL	"Direccion":	MAIPU N°384	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,83414085	,"Longitude":	-70,59746028	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LOS LAURELES N° 80, ISLA TEJA, VALDIVIA	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8107995	,"Longitude":	-73,2528225	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	ANIBAL PINTO N° 695 LOCAL 6	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8244622	,"Longitude":	-73,0512288	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN ANDRES	"Direccion":	AVENIDA CAHUIL 310, PICHILEMU	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,4146533	,"Longitude":	-71,9986406	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDAMED	"Direccion":	AV. BERNARDO O'HIGGINS N° 1404-A	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,218859	,"Longitude":	-70,141902	,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	ARTURO PRAT N°272 LOCAL 6-B	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6460864	,"Longitude":	-70,3991514	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA VIOLETA	"Direccion":	23 ORIENTE Nº1655 LOCAL 6 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,425464	,"Longitude":	-71,630654	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALAMEDA	"Direccion":	PRIETO Nº941	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,33249	,"Longitude":	-72,41996	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA BERNARDO O’HIGGINS 308, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA AMBULATORIA DEL CENTRO DE DIAGNOSTICO TERAPEUTICO	"Direccion":	LOS CARRERA N° 1320	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3728556	,"Longitude":	-70,3219595	,"Stock":	"SI"}
{"Nombre":	EUREKA	"Direccion":	GENERAL GOROSTIAGA 57, LOCAL 2B	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	MAZEL TOV	"Direccion":	AVENIDA PADRE HURTADO 13164	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	COFAR + SALUD	"Direccion":	AVENIDA APOQUINDO 5016, LOCAL 10	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	FARMACIA KUMELEN	"Direccion":	GENERAL URRUTIA N° 725 LICAN RAY	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,4876843	,"Longitude":	-72,1602155	,"Stock":	"NO"}
{"Nombre":	MUNDO	"Direccion":	AVENIDA SANTA ROSA 1390	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	TORRES	"Direccion":	AVENIDA SANTA ROSA 16.401, LOCALES 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-30,612182	,"Longitude":	-70,627722	,"Stock":	"SI"}
{"Nombre":	FARMACIA LAHUEN	"Direccion":	ARTURO PRAT N° 394	"Region":	ARAUCANIA	,"Comuna":	VILCUN	,"Latitude":	-38,6699481	,"Longitude":	-72,2244122	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN AGUSTIN	"Direccion":	PEDRO AGUIRRE CERDA Nº 536, LOCAL 101	"Region":	ARAUCANIA	,"Comuna":	MELIPEUCO	,"Latitude":	-38,85296637	,"Longitude":	-71,69118041	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA VITACURA 6980, LOCAL 4, SUPERMERCADO TOTTUS	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA VILLA ALEGRE	"Direccion":	NATANIEL COX  998	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	EL TREBOL	"Direccion":	EL TRéBOL 1240	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	EL TREBOL	"Direccion":	SARGENTO MENADIER 40	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,615979	,"Longitude":	-70,574113	,"Stock":	"SI"}
{"Nombre":	FARMACIA FALMEZ	"Direccion":	AVENIDA PARQUE CENTRAL PONIENTE 1739	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	ANTONIO	"Direccion":	AVENIDA LAS TORRES 191, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36187	,"Longitude":	-70,72075	,"Stock":	"SI"}
{"Nombre":	ISAMAR	"Direccion":	AVENIDA SIMóN BOLíVAR 4429	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,474021	,"Longitude":	-70,722929	,"Stock":	"NO"}
{"Nombre":	FARMACIA PETER SWUAN	"Direccion":	LAREDO 8465	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	SANTA ESPERANZA	"Direccion":	PASAJE EL VIENES SUR 06388	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	SAN SEBASTIAN	"Direccion":	AVENIDA VICUñA MACKENNA 4015, LOCAL F	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,610575	,"Longitude":	-70,903689	,"Stock":	"NO"}
{"Nombre":	MULTIFARMA	"Direccion":	MELGAREJO 1072	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,953876	,"Longitude":	-71,3377173	,"Stock":	"SI"}
{"Nombre":	PUNTO SALUD	"Direccion":	AVENIDA AMéRICO VESPUCIO 8278, DEPARTAMENTO 13	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	CLíNICA BUPA SANTIAGO	"Direccion":	AVENIDA DEPARTAMENTAL 01455	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	SOLGREENS	"Direccion":	AVENIDA RECOLETA105 A Y B	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	LF	"Direccion":	EL PERAL 07185	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	BALMACEDA 619	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9049731	,"Longitude":	-71,2502797	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA EL AMANECER 1401, LOCALES 5 Y 6	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9636773	,"Longitude":	-71,2951293	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O’HIGGINS 2288	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA ÑIELOL L-01	"Direccion":	MANUEL BULNES N° 279 LOCAL 2	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7362005	,"Longitude":	-72,5883493	,"Stock":	"SI"}
{"Nombre":	DR ALIVIO	"Direccion":	SAN PABLO 1090	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43423	,"Longitude":	-70,65283	,"Stock":	"SI"}
{"Nombre":	LA BOTICA PANDA	"Direccion":	AVENIDA GENERAL BAQUEDANO 954	"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	PUNTOFARMA	"Direccion":	GENERAL SAN MARTíN N° 042, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,18206	,"Longitude":	-70,64975	,"Stock":	"SI"}
{"Nombre":	FARMAVIDA Y SALUD	"Direccion":	AVENIDA VICUñA MACKENNA 690	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA SOCIAL DEL CIRCULO DE GENDARMERíA DE CHILE (CIRGENCHI)	"Direccion":	ALONSO DE OVALLE 1626	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44712	,"Longitude":	-70,65862	,"Stock":	"NO"}
{"Nombre":	ESSALUD	"Direccion":	AVENIDA O’HIGGINS 037-A	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	VIDA	"Direccion":	AVENIDA GRECIA 5536, LOCAL 5540	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,469058	,"Longitude":	-70,575416	,"Stock":	"SI"}
{"Nombre":	FARMACY	"Direccion":	SANTA CLARA 301, OFICINA 805-A, CIUDAD EMPRESARIAL	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMEX	"Direccion":	COQUIMBO 1201	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIAS DR. AHORRO	"Direccion":	MONUMENTO 1954, LOCAL 1934B	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN JOSé	"Direccion":	AVENIDA LAS PARCELAS 2959 A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	NUEVA SALUD	"Direccion":	SERRANO 510	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,686269	,"Longitude":	-71,213993	,"Stock":	"NO"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA SEDE CONCEPCION	"Direccion":	ANGOL 341	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8300951	,"Longitude":	-73,0539513	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	RAMON CARRASCO 418 LCOAL 1	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,78906929	,"Longitude":	-73,05640381	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	VIVAR N° 1091, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2184564	,"Longitude":	-70,1489389	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	RIO CLARO 199	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,034601	,"Longitude":	-72,401928	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIA	"Direccion":	VALPARAISO 539 L-5	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0245043	,"Longitude":	-71,5550849	,"Stock":	"SI"}
{"Nombre":	FARMACIAS +SALUD	"Direccion":	JOSE MANSO DE VELASCO 221, LOCAL 103	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,471438	,"Longitude":	-72,347335	,"Stock":	"NO"}
{"Nombre":	FARMACIA PRO-B	"Direccion":	MANUEL RODRÍGUEZ Nº456, LOCAL 1, LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846893	,"Longitude":	-71,597623	,"Stock":	"NO"}
{"Nombre":	FARMACIA VALLE VOLCANES	"Direccion":	AVENIDA SAN FRANCISCO N°1176, LOCAL 5,6,7 DE PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3239122	,"Longitude":	-72,9855155	,"Stock":	"SI"}
{"Nombre":	FARMACIA RED DE CLINICAS REGIONALES	"Direccion":	INFANTE N° 861	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,365522	,"Longitude":	-70,328031	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR DE PLACERES	"Direccion":	IRENE MORALES 615	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0428443	,"Longitude":	-71,5890556	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. GRECIA N°1120	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4708875	,"Longitude":	-68,9316175	,"Stock":	"NO"}
{"Nombre":	FARMACIA CENTRAL HOSPITAL PROVINCIAL DEL HUASCO	"Direccion":	AV. HUASCO N°392, ACCESO SUR, VALLENAR	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA CENTRAL HOSPITAL DE DIEGO DE ALMAGRO	"Direccion":	JUAN MARTINEZ N° 2200, DIEGO DE ALMAGRO	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA CENTRAL HOSPITAL DE CHAÑARAL	"Direccion":	ARTURO PRAT N° 1000	"Region":	ATACAMA	,"Comuna":	CHAÑARAL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	UNIDAD DE FARMACIA HOSPITAL DE HUASCO	"Direccion":	CANTERA Nª 105	"Region":	ATACAMA	,"Comuna":	HUASCO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	1 SUR Nº1138	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427373	,"Longitude":	-71,660782	,"Stock":	"SI"}
{"Nombre":	FARMACIA Y PERFUMERIA MI AROMA	"Direccion":	RIQUELME Nº 199 - A	"Region":	ATACAMA	,"Comuna":	HUASCO	,"Latitude":	-28,4645224	,"Longitude":	-71,224622	,"Stock":	"SI"}
{"Nombre":	GACEMA LOCAL N°3	"Direccion":	AV. PEDRO AGUIRRE CERDA Nº 5900	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6152982	,"Longitude":	-70,3885444	,"Stock":	"NO"}
{"Nombre":	NOVASALUD	"Direccion":	AV. BALMACEDA N°2532 LOCAL  101	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,645787	,"Longitude":	-70,400432	,"Stock":	"SI"}
{"Nombre":	NUESTRA FARMACIA	"Direccion":	JORGE GILES 1564, LOCALES C Y D	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,422921	,"Longitude":	-70,734777	,"Stock":	"NO"}
{"Nombre":	SANTA MARTA	"Direccion":	AVENIDA JUANITA 0365	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,620278	,"Longitude":	-70,612901	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	EYZAGUIRRE 592	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33593943	,"Longitude":	-70,706063	,"Stock":	"SI"}
{"Nombre":	FÁTIMA	"Direccion":	BARROS ARANA 704	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,597052	,"Longitude":	-70,700052	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	ANÍBAL PINTO Nº695 LOCAL-A	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,14048	,"Longitude":	-71,823026	,"Stock":	"SI"}
{"Nombre":	FARMACIA ADONAY	"Direccion":	MANUEL CASTRO RAMOS N°2495	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,244451	,"Longitude":	-70,129519	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	AV. LOS CARRERA N° 3408, L. 7	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3877334	,"Longitude":	-70,305151	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLÍNICA PUERTO VARAS	"Direccion":	OTTO BADER N°810, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3189081	,"Longitude":	-72,990701	,"Stock":	"NO"}
{"Nombre":	FARMACIA POSTO VERDE	"Direccion":	AVENIDA ORTUZAR Nº 334	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,38634732	,"Longitude":	-72,00339	,"Stock":	"NO"}
{"Nombre":	BURSAN	"Direccion":	AV. PEDRO MONTT 2251 LOCAL3, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,047365	,"Longitude":	-71,607299	,"Stock":	"SI"}
{"Nombre":	GALENICA	"Direccion":	GERóNIMO DE ALDERETE N° 1554, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,388055	,"Longitude":	-70,564917	,"Stock":	"SI"}
{"Nombre":	DíAZ	"Direccion":	NEPTUNO 814, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,443623	,"Longitude":	-70,723448	,"Stock":	"SI"}
{"Nombre":	VERTICAL	"Direccion":	RIO CLARO 1450, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,463623	,"Longitude":	-70,574069	,"Stock":	"NO"}
{"Nombre":	CMH	"Direccion":	SANTOS DUMONT 738, 2° PISO, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,421649	,"Longitude":	-70,64738	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	PEÑA Nº736 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DHARMASALUD	"Direccion":	DEL CASTILLO N° 1094, VALDIVIA	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,868282	,"Longitude":	-73,398944	,"Stock":	"NO"}
{"Nombre":	GAMA	"Direccion":	AVENIDA SANTA ISABEL 453, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449079	,"Longitude":	-70,64049	,"Stock":	"SI"}
{"Nombre":	ITALIANA	"Direccion":	AVENIDA MANUEL MONTT 1465	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44094	,"Longitude":	-70,615098	,"Stock":	"SI"}
{"Nombre":	ROCIO	"Direccion":	SAN MARTIN 121, LOCAL F	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,609082	,"Longitude":	-70,904189	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	SAN PABLO 2090, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434587	,"Longitude":	-70,666151	,"Stock":	"NO"}
{"Nombre":	PARIS	"Direccion":	TARAPACA 1115, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44712	,"Longitude":	-70,651376	,"Stock":	"SI"}
{"Nombre":	PARIS	"Direccion":	AVENIDA SANTA ROSA 1138	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,458985	,"Longitude":	-70,643066	,"Stock":	"NO"}
{"Nombre":	GUARDIAN	"Direccion":	SAN ANTONIO 371	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438256	,"Longitude":	-70,648248	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE TENO	"Direccion":	SOTOMAYOR Nº270	"Region":	MAULE	,"Comuna":	TENO	,"Latitude":	-34,86714763	,"Longitude":	-71,16178649	,"Stock":	"SI"}
{"Nombre":	DEL BARRIO	"Direccion":	Santa Marta 272 A	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4506725	,"Longitude":	-70,7152439	,"Stock":	"SI"}
{"Nombre":	FARMACENTRO	"Direccion":	CALLE BOLIVIA 2833	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1853155	,"Longitude":	-70,7633781	,"Stock":	"SI"}
{"Nombre":	DEL FORMULARIO	"Direccion":	CAMILO HENRÍQUEZ N° 780	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,817345	,"Longitude":	-73,244074	,"Stock":	"NO"}
{"Nombre":	PAULA SALUD	"Direccion":	AVENIDA DIAGONAL DOÑIHUE 2121	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17812264	,"Longitude":	-70,76194523	,"Stock":	"SI"}
{"Nombre":	FARMACIA LIGA CHILENA	"Direccion":	CHACABUCO Nº557	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9850205	,"Longitude":	-71,2360641	,"Stock":	"NO"}
{"Nombre":	FARMACIA LIGA CHILENA	"Direccion":	7 ORIENTE Nº 1264	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4258675	,"Longitude":	-71,6565615	,"Stock":	"NO"}
{"Nombre":	URGENCIA - "AHUMADA"	"Direccion":	AVENIDA IRARRÁZAVAL 4221	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455672	,"Longitude":	-70,58563	,"Stock":	"SI"}
{"Nombre":	FARMACIA UNO ORIENTE	"Direccion":	1 ORIENTE 16 1/2 SUR Nº0112 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,443419	,"Longitude":	-71,666997	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	SAN ANTONIO 80	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,441766	,"Longitude":	-70,648019	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	VIVAR N°762	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,215324	,"Longitude":	-70,148547	,"Stock":	"NO"}
{"Nombre":	FARMACIA PENINSULA	"Direccion":	FILOMENA VALENZUELA N°295-C	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,236657	,"Longitude":	-70,149805	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MATEO	"Direccion":	AVENIDA O´HIGGINS Nº203, LOCAL 1 COLBÚN	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,698272	,"Longitude":	-71,406408	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE LINARES	"Direccion":	Freire 495	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84569011	,"Longitude":	-71,60048962	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA APOQUINDO 6314 LOCAL 102-B,	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	AVENIDA PEDRO DE VALDIVIA 56 Y 92	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LUIS THAYER OJEDA 0150	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PROVIDENCIA 2006, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O’HIGGINS N°570 Y 572	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL SEGUNDO PISO DEL ÁREA DE CONSULTAS AMBULATORIAS CRS	"Direccion":	ESPERANZA N° 2150	"Region":	METROPOLITANA	,"Comuna":	SAN RAMON	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA INDEPENDENCIA 565, LOCAL TM-50	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,42481166	,"Longitude":	-70,65443832	,"Stock":	"NO"}
{"Nombre":	REAL	"Direccion":	AVENIDA MANUEL ANTONIO MATTA N° 991, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA APOQUINDO N° 4610, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41256	,"Longitude":	-70,58221	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA VICUñA MACKENNA N°475 A 491	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	SOLUFAR	"Direccion":	AVELLANEDA 052	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,326216	,"Longitude":	-70,52277	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA ISABEL RIQUELME SUR N° 1446, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA VICUñA MACKENNA N° 302, LOCAL 19	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	TRINIDAD	"Direccion":	AVENIDA VICUñA MACKENNA N°1040	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	LAFONT	"Direccion":	LAGO BOLSENA N° 18601, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	PEVAL LTDA	"Direccion":	MAPOCHO N°5595	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIAS AYSEN	"Direccion":	AVENIDA SAN PABLO N° 1723	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA EL BOSQUE 164	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,421762	,"Longitude":	-70,598359	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	AVENIDA BERNARDO O'HIGGINS 555, LOCAL 1, SUPERMERCADO LIDER	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,734141	,"Longitude":	-70,749025	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	ANDRÉS BELLO 2447, LOCAL 192, COSTANERA CENTER	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,418056	,"Longitude":	-70,607297	,"Stock":	"NO"}
{"Nombre":	FARMACIAS 21 DE MAYO	"Direccion":	21 DE MAYO N° 820, LOCAL 122-A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	AITUE	"Direccion":	BALMACEDA N° 1435, LOCALES G Y F	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,613542	,"Longitude":	-70,860688	,"Stock":	"SI"}
{"Nombre":	BRAIN	"Direccion":	JOSé DOMINGO CAñAS N° 2151, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMA-MARKET	"Direccion":	AVENIDA MIRAFLORES N° 936, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,601279	,"Longitude":	-70,860642	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CHAMISERO N° 10.290, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	SOLGREENS	"Direccion":	SANTA FILOMENA N° 470	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42998	,"Longitude":	-70,64535	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMINO EL ALBA N° 11969, LOCAL 211	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMéRICO VESPUCIO N° 1307 / ISABEL LA CATóLICA N° 4394, LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	AVENIDA EL PEñóN N° 01467	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	SOLUFAR	"Direccion":	LOS ALMENDROS N°6199, LOCAL B, C Y D	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,491755	,"Longitude":	-70,714808	,"Stock":	"SI"}
{"Nombre":	FARMALIVIO	"Direccion":	SANTA RAQUEL N° 8403	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	VALVIC	"Direccion":	PRIMERA TRANSVERSAL N° 842, LOCALES 1 Y 2	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,565517	,"Longitude":	-70,799506	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	JOSé LUIS COO N°0120	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	FARMACHILE	"Direccion":	AV. LIBERTAD 1059	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0115821	,"Longitude":	-71,5494681	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. BORGOÑO 14650 L-4	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97038	,"Longitude":	-71,54308	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR PICHILEMU	"Direccion":	AVENIDA ORTUZAR 472	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,3877513	,"Longitude":	-72,00226538	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EL BOSQUE NORTE 0121	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416139	,"Longitude":	-70,600328	,"Stock":	"SI"}
{"Nombre":	QFARMA	"Direccion":	PRAT 4865	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-32,9950924	,"Longitude":	-71,1845054	,"Stock":	"SI"}
{"Nombre":	FARMACIA CONSULTORIO NAVAL	"Direccion":	AVDA. VALPARAISO 1799	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSÉ JOAQUÍN PÉREZ 12010	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,79095281	,"Longitude":	-71,19173743	,"Stock":	"SI"}
{"Nombre":	BUERAS	"Direccion":	SANTIAGO BUERAS N° 1984	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,824139	,"Longitude":	-73,227918	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. VALPARAÍSO 1070 L-2064	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0259251	,"Longitude":	-71,5474757	,"Stock":	"NO"}
{"Nombre":	SUFARMA	"Direccion":	URIBE 434, L14, LA LIGUA	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4466	,"Longitude":	-71,230052	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	PASEO PUENTE 825	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,433587	,"Longitude":	-70,651805	,"Stock":	"SI"}
{"Nombre":	CLINICAL PHARMA	"Direccion":	AV. COLÓN 2572 LOCAL 1, VALPARAISO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0504452	,"Longitude":	-71,60930497	,"Stock":	"SI"}
{"Nombre":	EKIS	"Direccion":	ESMERALDA 1132	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0425708	,"Longitude":	-71,6248309	,"Stock":	"NO"}
{"Nombre":	PHARMACYS RP	"Direccion":	LAS HORTENSIAS 61 A	"Region":	VALPARAISO	,"Comuna":	SANTO DOMINGO	,"Latitude":	-33,6415741	,"Longitude":	-71,610849	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA DE RENCA	"Direccion":	GENERAL FREIRE 4935	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-30,400686	,"Longitude":	-70,722082	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	JOSÉ JOAQUÍN PÉREZ N° 12010 LOCAL 1220	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,791608	,"Longitude":	-71,192378	,"Stock":	"NO"}
{"Nombre":	FARMACIA CARLOS SCHORR	"Direccion":	AVENIDA CARLOS SCHORR Nº272 TALCA.	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,429364	,"Longitude":	-71,67446	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	ILLAPEL, 10, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4716035	,"Longitude":	-72,9375161	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUMBO CALAMA	"Direccion":	AVENIDA CHORRILLOS 1759	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4554586	,"Longitude":	-68,9239176	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MARCO	"Direccion":	AV. LOS EXPLORADORES N°14123	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,52825806	,"Longitude":	-70,39722852	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DESIERTO MEF	"Direccion":	AV. PEDRO AGUIRRE CERDA N°9630	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,57588748	,"Longitude":	-70,39079368	,"Stock":	"SI"}
{"Nombre":	FARMACIA BOTICA BRAUNAU	"Direccion":	OTTO KLEIN DORNER S/N°, NUEVA BRAUNAU, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3255893	,"Longitude":	-73,079912	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA Y SALUD	"Direccion":	AVENIDA JOSÉ IGNACIO CARRERA PINTO Nº175 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,431657	,"Longitude":	-71,677784	,"Stock":	"NO"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	1 SUR Nº1841	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42854348	,"Longitude":	-71,64892006	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDANUEVA	"Direccion":	1 NORTE Nº1201, LOCAL 1241 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,426134	,"Longitude":	-71,659828	,"Stock":	"SI"}
{"Nombre":	JUMBO HUALPEN	"Direccion":	COSTANERA NORTE N° 9781 INTERIOR SUPERMERCADO JUMBO	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,80729	,"Longitude":	-73,0905	,"Stock":	"SI"}
{"Nombre":	FARMACIA CHILENA	"Direccion":	COLO COLO N° 682	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,823742	,"Longitude":	-73,049699	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AV. ROOSEVELT N° 1702	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,821779	,"Longitude":	-73,035685	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BARROS ARANA N° 1068 LOCAL 26	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,825031	,"Longitude":	-73,044638	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. AMIGO	"Direccion":	AV. ARGENTINA 275-A	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0456913	,"Longitude":	-71,6046164	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA RAMÓN PICARTE N° 2661	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,834464	,"Longitude":	-73,214651	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL PUEBLO	"Direccion":	LORD COCHRANE N° 272	"Region":	LOS RIOS	,"Comuna":	PAILLACO	,"Latitude":	-40,074032	,"Longitude":	-72,873627	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA PEDRO MONTT N° 4300	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,849995	,"Longitude":	-73,231018	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	AVENIDA 21 DE MAYO N° 3225 LOCALES 122, 123 Y 124	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,808286	,"Longitude":	-73,078223	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOFARMA LAGUNILLAS	"Direccion":	JUAN ANTONIO RIOS N° 3039 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-36,982064	,"Longitude":	-73,163507	,"Stock":	"SI"}
{"Nombre":	FARMACIA HIGEA	"Direccion":	14 de Febrero 2578	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6515102	,"Longitude":	-70,3943358	,"Stock":	"NO"}
{"Nombre":	FARMACIA LIRCAY	"Direccion":	2 PONIENTE Nº 1372	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4238387	,"Longitude":	-71,66775345	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	LA ESTRELLA 770-A	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,444749	,"Longitude":	-70,754041	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUMBO ANTOFAGASTA	"Direccion":	AV. ANGAMOS N°745	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6674293	,"Longitude":	-70,4049819	,"Stock":	"SI"}
{"Nombre":	SANA SANA	"Direccion":	AVENIDA DOMINGO SANTA MARÍA 2718-A	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,41373	,"Longitude":	-70,680112	,"Stock":	"SI"}
{"Nombre":	LO OSSA	"Direccion":	ALCALDE EDUARDO CASTILLO VELASCO N° 5474	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,462034	,"Longitude":	-70,574794	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PLACER 1310	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,475861	,"Longitude":	-70,650059	,"Stock":	"SI"}
{"Nombre":	MEDICAL STORES	"Direccion":	AVENIDA EL CANAL N° 19591, LOCAL 124	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,448542	,"Longitude":	-70,84299	,"Stock":	"NO"}
{"Nombre":	VIDA FARM	"Direccion":	AVENIDA ZAPADORES N° 269	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,395475	,"Longitude":	-70,628802	,"Stock":	"NO"}
{"Nombre":	PHARMA-VITAE	"Direccion":	SAMUEL IZQUIERDO N° 2765	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,411537	,"Longitude":	-70,709678	,"Stock":	"SI"}
{"Nombre":	BOTICA CUBANA	"Direccion":	BANDERA 628	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43588	,"Longitude":	-70,6514	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	ARTURO PRAT Nº692-A	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7490493	,"Longitude":	-70,7296072	,"Stock":	"SI"}
{"Nombre":	SU SALUD	"Direccion":	JOSÉ MANUEL CARRERA N° 405	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,452457	,"Longitude":	-70,663262	,"Stock":	"NO"}
{"Nombre":	DAVIFAR	"Direccion":	ARTESANOS N° 731	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,43106	,"Longitude":	-70,650028	,"Stock":	"SI"}
{"Nombre":	FARMAVEN	"Direccion":	ROSAS 1175, LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435328	,"Longitude":	-70,653958	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA INDEPENDENCIA N° 2098	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,407128	,"Longitude":	-70660954	,"Stock":	"NO"}
{"Nombre":	GUSI	"Direccion":	AVENIDA RECOLETA N° 3199	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,397037	,"Longitude":	-70,642605	,"Stock":	"SI"}
{"Nombre":	EKONOPLUS	"Direccion":	CIRUJANO VIDELA 1315 L-2	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45157309	,"Longitude":	-70,61750425	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LAS CONDES N° 12340, LOC. 6 Y 7	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,372344	,"Longitude":	-70,518426	,"Stock":	"SI"}
{"Nombre":	BOTICA DE MELANIA	"Direccion":	AVDA CENTENARIO Nº115	"Region":	MAULE	,"Comuna":	YERBAS BUENAS	,"Latitude":	-35,746993	,"Longitude":	-71,582376	,"Stock":	"NO"}
{"Nombre":	FARMACIA CENTENARIO	"Direccion":	BERNARDO O`HIGGINS Nº423	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,696065	,"Longitude":	-71,406484	,"Stock":	"SI"}
{"Nombre":	FARMACIA RÍO CLARO	"Direccion":	2 SUR Nº2380 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,415619	,"Longitude":	-71,644404	,"Stock":	"NO"}
{"Nombre":	CHILE	"Direccion":	CARMEN N° 478	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449327	,"Longitude":	-70,641589	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA INDEPENDENCIA N° 565, LOCAL 31, NIVEL -1	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,424567	,"Longitude":	-70,654489	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA CARDENAL RAÚL SILVA HENRÍQUEZ N° 10297, LOCALES 9, 10 Y 11	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,550415	,"Longitude":	-70,618169	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA ARTURO PRAT Nº 2318	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,5956521	,"Longitude":	-71,7299817	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	RENGO N° 107 LOCAL 5	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467551	,"Longitude":	-72,348625	,"Stock":	"NO"}
{"Nombre":	MONTEAGUILA	"Direccion":	ZAÑARTU N° 95 LOCAL 103, MONTEAGUILA	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,083548	,"Longitude":	-72,439443	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PADRE HURTADO SUR 785, LOCAL LC-1004	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415884	,"Longitude":	-70,539431	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMERICO VESPUCIO N° 1737, LOCAL BH-1, MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,364142	,"Longitude":	-70,679158	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PROVIDENCIA N° 1956, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,424133	,"Longitude":	-70,613131	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PAJARITOS N° 1682, LOCALES 1 Y 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,511898	,"Longitude":	-70,757528	,"Stock":	"SI"}
{"Nombre":	BLÜMEL	"Direccion":	CAPELLÁN FLORENCIO INFANTE N° 3330, LOCAL 101	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,547242	,"Longitude":	-70,789907	,"Stock":	"SI"}
{"Nombre":	ALEM	"Direccion":	GENERAL URRUTIA N° 528	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,615334	,"Longitude":	-70,707553	,"Stock":	"NO"}
{"Nombre":	REAL	"Direccion":	AVENIDA DOMINGO SANTA MARÍA N° 1789	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,415553	,"Longitude":	-70,664085	,"Stock":	"SI"}
{"Nombre":	INDI	"Direccion":	AVENIDA VICUÑA MACKENNA PONIENTE N° 6239	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,513258	,"Longitude":	-70,60896	,"Stock":	"NO"}
{"Nombre":	LOS ROBLES	"Direccion":	COVADONGA N° 366	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,594872	,"Longitude":	-70,702702	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO	"Direccion":	SAN LUIS N° 1221, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,364346	,"Longitude":	-70,752052	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	SAN MARTÍN N° 295, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440359	,"Longitude":	-70,657891	,"Stock":	"SI"}
{"Nombre":	CHICUREO	"Direccion":	CAMINO A CHICUREO N° 3100, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,286592	,"Longitude":	-70,669755	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA MACUL N° 3019, LOCALES 2, 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,482241	,"Longitude":	-70,599307	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ESTADO N° 29, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442882	,"Longitude":	-70,648983	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA ISIDORA GOYENECHEA N° 3280, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,414502	,"Longitude":	-70,596581	,"Stock":	"NO"}
{"Nombre":	FIRST FARMA	"Direccion":	AVENIDA EL PEÑÓN 02373	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,579468	,"Longitude":	-70,555591	,"Stock":	"NO"}
{"Nombre":	BIOFORMULA	"Direccion":	SAN ISIDRO N° 825	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,454451	,"Longitude":	-70,641882	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA N° 5018, LOCAL 101/1	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,499546	,"Longitude":	-70,653691	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	ENRIQUE MAC IVER N° 524, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,436609	,"Longitude":	-70,647393	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 2259, LOCALES D, E, F Y G	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,669991	,"Longitude":	-70,940531	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LOS PRESIDENTES N° 8950, CENTRO MÉDICO PEÑALOLÉN	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,490155	,"Longitude":	-70,545131	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	ENRIQUE GÓMEZ CORREA N° 5750, LOCALES 1 Y 2	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,50656	,"Longitude":	-70,591258	,"Stock":	"NO"}
{"Nombre":	Bilbao	"Direccion":	FRANCISCO BILBAO N° 281, LOCAL 9	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,601221	,"Longitude":	-70,875548	,"Stock":	"NO"}
{"Nombre":	ARCOIRIS	"Direccion":	12 DE FEBRERO N° 93-B	"Region":	BIOBIO	,"Comuna":	TUCAPEL	,"Latitude":	-37,242472	,"Longitude":	-71,942691	,"Stock":	"SI"}
{"Nombre":	SALUD	"Direccion":	ARTURO PRAT 499, HUEPIL	"Region":	BIOBIO	,"Comuna":	TUCAPEL	,"Latitude":	-37,24202	,"Longitude":	-71,941752	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANA	"Direccion":	LOS CANELOS N° 102	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,844243	,"Longitude":	-73,098263	,"Stock":	"SI"}
{"Nombre":	QFARMA	"Direccion":	LO NARVAEZ 6172	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-33,00705079	,"Longitude":	-71,17233152	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LA FLORIDA 8988, LOCAL 1284	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,535352	,"Longitude":	-70,572471	,"Stock":	"SI"}
{"Nombre":	PUNTOFARMA	"Direccion":	AVENIDA PEDRO FONTOVA 6931	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,358559	,"Longitude":	-70,670348	,"Stock":	"NO"}
{"Nombre":	DR.SIMI F0240	"Direccion":	PASAJE PORTALES N° 55 LOCAL 9	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73584617	,"Longitude":	-72,59995276	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	OCHO NORTE 313	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01456105	,"Longitude":	-71,55485624	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MIFARMA SPA	"Direccion":	FRANCISCO BILBAO N° 343	"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,98562259	,"Longitude":	-72,64004006	,"Stock":	"SI"}
{"Nombre":	FARMACIA NA-ROA	"Direccion":	AVDA VILLARRICA N° 300 G LOCAL 7	"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,36774188	,"Longitude":	-72,62301915	,"Stock":	"SI"}
{"Nombre":	FARMACIA DON JOSÉ	"Direccion":	CONSTITUCION 136	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,6327664	,"Longitude":	-71,1672277	,"Stock":	"NO"}
{"Nombre":	MAGNAE FARMACIAS	"Direccion":	AVDA. CUATRO ESQUINAS 1540, L-8	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9438988	,"Longitude":	-71,2436581	,"Stock":	"SI"}
{"Nombre":	FARMACIA A.L.A.	"Direccion":	GABRIEL GONZALEZ VIDELA 3445	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9334962	,"Longitude":	-71,2546631	,"Stock":	"NO"}
{"Nombre":	FARMACIA PUNTO BLANCO	"Direccion":	VICUÑA  MACKENNA 212	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60304011	,"Longitude":	-71,20112834	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALGARROBO	"Direccion":	AV. RAMON PEREZ OPAZO N° 2621, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2519224	,"Longitude":	-70,1260679	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITASUR( L-6)	"Direccion":	LAUTARO N° 40  ANGOL	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,7951889	,"Longitude":	-72,716362	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIA	"Direccion":	AV. VALPARAÍSO 988	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0258512	,"Longitude":	-71,547826	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F0237	"Direccion":	ACEVEDO AVIADOR N° 1258 LOCAL 4  VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,30089	,"Longitude":	-72,18216	,"Stock":	"NO"}
{"Nombre":	DR.SIMI	"Direccion":	ASTORGA 166	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16724011	,"Longitude":	-70,74283787	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA MUNICIPAL DE SALAMANCA	"Direccion":	MATILDE SALAMANCA N° 113	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,7760557	,"Longitude":	-70,9632908	,"Stock":	"NO"}
{"Nombre":	NEFRES	"Direccion":	AVENIDA CENTRAL 7397, LOCALES 4 Y 5	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,521553	,"Longitude":	-70,697128	,"Stock":	"NO"}
{"Nombre":	BELEN	"Direccion":	LUIS REUSS 246 LOCAL 02	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,587855	,"Longitude":	-71,608911	,"Stock":	"SI"}
{"Nombre":	NEVADOS	"Direccion":	ALONSO DE ERCILLA N° 2780, CHILLÁN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,625689	,"Longitude":	-72,078316	,"Stock":	"SI"}
{"Nombre":	AMIGA	"Direccion":	AVENIDA LOS LEONES 44, LOCAL 10	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,419082	,"Longitude":	-70,605745	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ERRAZURIZ N° 1040, LOCAL 1096	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,818349	,"Longitude":	-73,234319	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACEUTICA CHILOE	"Direccion":	GAMBOA N° 421 , CASTRO	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4817917	,"Longitude":	-73,7655028	,"Stock":	"SI"}
{"Nombre":	FARMACIA NEOFARMA	"Direccion":	VIVAR N° 1191, IQUIQUE	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,219252	,"Longitude":	-70,149039	,"Stock":	"NO"}
{"Nombre":	CESFAM EL TABO	"Direccion":	AV. SAN MARCOS 729, EL TABO	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	QUECHEREGUAS Nº1987 LOCAL-2	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,11511147	,"Longitude":	-71,28142435	,"Stock":	"SI"}
{"Nombre":	SOFIA 2	"Direccion":	Patricio Lynch 597	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4788404	,"Longitude":	-70,3159714	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DR. SIMI	"Direccion":	LYNCH 1320, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5738712	,"Longitude":	-73,1295351	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	EL ARRAYÁN 2410	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,372818	,"Longitude":	-71,667021	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN JUAN	"Direccion":	BALMACEDA N° 438	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90260254	,"Longitude":	-71,24978225	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AV. COPAYAPU N° 2406, L. 1008, PORTAL JUMBO	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,382486	,"Longitude":	-70,315557	,"Stock":	"NO"}
{"Nombre":	RÍO BUENO	"Direccion":	ESMERALDA N° 1285	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,333108	,"Longitude":	-72,953781	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA LAS CABRAS	"Direccion":	CALLE PRAT 715	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,29088037	,"Longitude":	-71,30707061	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AUTOPISTA CONCEPCION TALCAHUANO 6891 LOCAL 7	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,778014	,"Longitude":	-73,077227	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA BELLAVISTA N° 1273 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,78626	,"Longitude":	-73,03772	,"Stock":	"SI"}
{"Nombre":	FARMACIA ARAVAL	"Direccion":	TOSCANIA N° 3467 LOCAL 2	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,78916	,"Longitude":	-73,097169	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	BARROS ARANA N° 746	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,826203	,"Longitude":	-73,049299	,"Stock":	"SI"}
{"Nombre":	FARMAMET	"Direccion":	MONUMENTO N° 1924	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,509706	,"Longitude":	-70,758947	,"Stock":	"NO"}
{"Nombre":	CLARITA	"Direccion":	AVENIDA RECOLETA N° 3022	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,398336	,"Longitude":	-70,642976	,"Stock":	"NO"}
{"Nombre":	LOS ANDES	"Direccion":	AVENIDA INDEPENDENCIA N° 510	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,424916	,"Longitude":	-70,654913	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA DEPARTAMENTAL N° 1455, PISO 1, EDIFICIO C, INTERIOR CLíNICA BUPA	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,509453	,"Longitude":	-70,598256	,"Stock":	"SI"}
{"Nombre":	FARMACIA MANANTIALES	"Direccion":	Daniel Bernales N°3	"Region":	OHIGGINS	,"Comuna":	MALLOA	,"Latitude":	-34,44190311	,"Longitude":	-70,94428391	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL CARMEN Nº2	"Direccion":	AVENIDA BERNARDO O´HIGGINS Nº479-B LINARES	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,695618	,"Longitude":	-71,406737	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR DE PLACILLA DE PEÑUELAS	"Direccion":	AV. OBISPO VALDEZ SUBRCASEAUX 1421 LC 11	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,1253474	,"Longitude":	-71,5784802	,"Stock":	"SI"}
{"Nombre":	UNIDAD DE FARMACIA CONSULTORIO ADOSADO HOSPITAL DE CHANCO	"Direccion":	AVENIDA PADRE ROLANDO ESCOBAR Nº640 CHANCO	"Region":	MAULE	,"Comuna":	CHANCO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	FARMACIA TALLÓN	"Direccion":	ALEJANDRO CRUZ Nº124	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,53789497	,"Longitude":	-71,48675707	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDAFARMA	"Direccion":	CHACABUCO Nº456-D	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84715198	,"Longitude":	-71,59612607	,"Stock":	"SI"}
{"Nombre":	24 HORAS	"Direccion":	21 de Mayo 497	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4798191	,"Longitude":	-70,317182	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	AVENIDA COLIN Nº0695, LOCAL Nº10 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,443132	,"Longitude":	-71,6866	,"Stock":	"SI"}
{"Nombre":	MAS SALUD	"Direccion":	Las Torres 2662	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4849427	,"Longitude":	-70,2831399	,"Stock":	"NO"}
{"Nombre":	GALA	"Direccion":	ARLEGUI 263 L-4	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0228077	,"Longitude":	-71,5586694	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. ALEMANIA 831, LOCAL 19, CENTRO COMERCIAL ALEMANIA	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,4682	,"Longitude":	-72,335924	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. LIBERTAD N° 448 L-2	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0179981	,"Longitude":	-71,55025967	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CHACABUCO N° 209, INT. UNIMARC	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,36811638	,"Longitude":	-70,33490545	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR ANCUD	"Direccion":	BLANCO ENCALADA N°660, ESQUINA PUDETO, ANCUD	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,8679791	,"Longitude":	-73,8281557	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR COLBÚN SOMOS TODOS	"Direccion":	AVENIDA BERNARDO O´HIGGINS Nº420	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,6966884	,"Longitude":	-71,40638108	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAS 2	"Direccion":	PISAGUA 12	"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,70905405	,"Longitude":	-71,0431395	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO	"Direccion":	Avenida Senador Luis Valente Rossi 2330 - 2332	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,493725	,"Longitude":	-70,2949143	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	FRANCISCO BILBAO 317, COYHAIQUE, CHILE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,572525	,"Longitude":	-72,070626	,"Stock":	"NO"}
{"Nombre":	DIVINA SALUD	"Direccion":	ARTURO PRAT 321	"Region":	OHIGGINS	,"Comuna":	COLTAUCO	,"Latitude":	-34,2929699	,"Longitude":	-71,08049789	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CHACABUCO 274 - 278	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8781006	,"Longitude":	-71,2461758	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	BERNARDO O´HIGGINS N°1, LOS MUERMOS	"Region":	LOS LAGOS	,"Comuna":	LOS MUERMOS	,"Latitude":	-41,3961513	,"Longitude":	-73,4608997	,"Stock":	"SI"}
{"Nombre":	CRONOFARMA	"Direccion":	Avenida Capitán Ávalos 2616	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4777957	,"Longitude":	-70,2829422	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	LUIS CARRERA 2215	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,390025	,"Longitude":	-70,586908	,"Stock":	"NO"}
{"Nombre":	"AHUMADA"	"Direccion":	HUÉRFANOS 763	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439249	,"Longitude":	-70,647669	,"Stock":	"SI"}
{"Nombre":	LA ALIANZA	"Direccion":	AVENIDA SAN PABLO N° 7145,	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,444277	,"Longitude":	-70,735411	,"Stock":	"NO"}
{"Nombre":	LA PAC	"Direccion":	CLUB HÍPICO 2576, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,478052	,"Longitude":	-70,664663	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	AV. ANDRES BELLO 627	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,046557	,"Longitude":	-71,4439222	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUERTO OCTAY	"Direccion":	AMUNATEGUI 598	"Region":	LOS LAGOS	,"Comuna":	PUERTO OCTAY	,"Latitude":	-40,9731966	,"Longitude":	-72,8835636	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	SORIANO 2855	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58970198	,"Longitude":	-73,10413138	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAYENEL 2	"Direccion":	DIEGO PORTALES N° 1000 LOCAL 8, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,475709	,"Longitude":	-72,9488923	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	JUAN SOLER MANFREDINI N°31, LOCAL 100 A, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4740959	,"Longitude":	-72,9343238	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM ALCALDE FRANCISCO SEPULVEDA SALGADO	"Direccion":	ADOLFO NOVOA Nº236	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,69647292	,"Longitude":	-71,40410638	,"Stock":	"NO"}
{"Nombre":	JOE'S PHARMACY	"Direccion":	IGNACIO CARRERA PINTO Nº210 D	"Region":	VALPARAISO	,"Comuna":	CATEMU	,"Latitude":	-32,7772072	,"Longitude":	-70,9641617	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALMAGRO 596	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,466377	,"Longitude":	-72,349504	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	BELLAVISTA 418	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0442283	,"Longitude":	-71,6234264	,"Stock":	"SI"}
{"Nombre":	FUNDACIÓN PÉREZ RIFO	"Direccion":	LIMACHE 1708 L-5	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0290888	,"Longitude":	-71,5396358	,"Stock":	"SI"}
{"Nombre":	FARMACIA TOCOPILLA	"Direccion":	21 DE MAYO 1532-1524	"Region":	ANTOFAGASTA	,"Comuna":	TOCOPILLA	,"Latitude":	-22,09384082	,"Longitude":	-70,2016776	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA CRISTOBAL COLÓN N° 9500 LOCAL 1	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,802631	,"Longitude":	-73,082659	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA JORGE ALESSANDRI N° 3177 LOCAL 13/BG-194	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,791736	,"Longitude":	-73,069236	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA PAICAVI N° 312 LOCAL 1 Y 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,825064	,"Longitude":	-73,040962	,"Stock":	"NO"}
{"Nombre":	UNIDAD DE FARMACIA HOSPITAL REGIONAL DE COPIAPO	"Direccion":	LOS CARRERA N°1320	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3728556	,"Longitude":	-70,3219595	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL ELQUI	"Direccion":	BALMACEDA S/N	"Region":	COQUIMBO	,"Comuna":	PAIHUANO	,"Latitude":	-30,0289206	,"Longitude":	-70,5162828	,"Stock":	"SI"}
{"Nombre":	FARMACIAS ARAGON	"Direccion":	INDEPENDENCIA N° 601, SAN CARLOS	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,4255253	,"Longitude":	-71,9575217	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	EL ROBLE N° 787, CHILLAN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,609288	,"Longitude":	-72,100454	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR COMUNAL QUIRIHUE	"Direccion":	ESMERALDA N°698, QUIRIHUE	"Region":	ÑUBLE	,"Comuna":	QUIRIHUE	,"Latitude":	-36,282384	,"Longitude":	-72,5399	,"Stock":	"SI"}
{"Nombre":	ALMA RA	"Direccion":	ARLEGUI 367 L-A	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,023116	,"Longitude":	-71,5571484	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	HUAYTIQUINA N°1425-B	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4363398	,"Longitude":	-68,9142246	,"Stock":	"NO"}
{"Nombre":	FARMACIA SYG II	"Direccion":	AVENIDA ARTURO PRAT 1597	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4455921	,"Longitude":	-68,9237325	,"Stock":	"SI"}
{"Nombre":	FARMACIA BUENASALUD	"Direccion":	AV. PEDRO AGUIRRE CERDA N°9448-B	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,57882898	,"Longitude":	-70,39065542	,"Stock":	"SI"}
{"Nombre":	FARMACIA BICENTENARIO II	"Direccion":	HUAMACHUCO N°9594	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,57587753	,"Longitude":	-70,38189418	,"Stock":	"SI"}
{"Nombre":	FARMACIA EXPRESS MAULE	"Direccion":	COSTADO ORIENTE PLAZA DE MAULE	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	35,523292	,"Longitude":	71,691047	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	2 NORTE Nº3587 LOCAL Nº3 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43331305	,"Longitude":	-71,62157269	,"Stock":	"SI"}
{"Nombre":	FARMACIA TUTUQUÉN	"Direccion":	CAMINO A TUTUQUÉN Nº1500	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,97521226	,"Longitude":	-71,26416591	,"Stock":	"NO"}
{"Nombre":	FARMACIA REYES	"Direccion":	AV. GENERAL RENÉ SCHNEIDER Nº63, LOCAL 8	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,8351569	,"Longitude":	-71,6001915	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN MATEO Nº2	"Direccion":	CAPITAN REBOLLEDO Nº186 PANIMÁVIDA	"Region":	MAULE	,"Comuna":	COLBUN	,"Latitude":	-35,7632543	,"Longitude":	-71,4196774	,"Stock":	"SI"}
{"Nombre":	SUFARMA	"Direccion":	ORTIZ DE ROZAS Nº754	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4490304	,"Longitude":	-71,2338972	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALMENDRA	"Direccion":	AVENIDA DUAO Nº058, SANTA TERESITA DE COLIN	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,4537679	,"Longitude":	-71,68765197	,"Stock":	"SI"}
{"Nombre":	SRA. FELICINDA	"Direccion":	21 DE MAYO 439	"Region":	METROPOLITANA	,"Comuna":	ALHUE	,"Latitude":	-34,031997	,"Longitude":	-71,100263	,"Stock":	"NO"}
{"Nombre":	FARMACIA BICHARA	"Direccion":	BRASIL 1033	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16902008	,"Longitude":	-70,74891819	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA GLORIA	"Direccion":	AVENIDA BERNARDO O'HIGGINS 0484	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16634564	,"Longitude":	-70,72927402	,"Stock":	"NO"}
{"Nombre":	FARMACIA MOVIL ITINERANTE MUNICIPAL DE ZAPALLAR	"Direccion":	MOISES CHACON Nº168	"Region":	VALPARAISO	,"Comuna":	ZAPALLAR	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-1087	"Direccion":	DIEGO PORTALES N° 996	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737715	,"Longitude":	-72,6107599	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L-759	"Direccion":	MANUEL BULNES N° 413 TEMUCO	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,738567	,"Longitude":	-72,589077	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI 168	"Direccion":	AVDA. LUIS DURAND N° 02175 LOCAL B - 101 TEMUCO	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,718058	,"Longitude":	-72,651082	,"Stock":	"SI"}
{"Nombre":	FARMACIA ECONOSUR	"Direccion":	PASAJE ROBERTO BOLAÑOS N° 1890 VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,28569	,"Longitude":	-72,2279	,"Stock":	"NO"}
{"Nombre":	FARMACIA VITASUR L-07	"Direccion":	CAMILO HENRIQUEZ N° 565 LOCAL 4 VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,281942	,"Longitude":	-72,227197	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"(1085)	"Direccion":	AVDA. O´HIGGINS N° 1744 LOCAL 4 - 5 - 6	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,80738	,"Longitude":	-72,690799	,"Stock":	"NO"}
{"Nombre":	NETFARMA	"Direccion":	JOSÉ MIGUEL INFANTE 5506	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,407039	,"Longitude":	-70,729457	,"Stock":	"NO"}
{"Nombre":	KÜMELKALEN	"Direccion":	EXEQUIEL FERNÁNDEZ 5109	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,499498	,"Longitude":	-70,602774	,"Stock":	"SI"}
{"Nombre":	TODOFARMA	"Direccion":	VICHUQUéN 313	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44716	,"Longitude":	-70,64065	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALDUNATE 1499  Y 1491	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95716954	,"Longitude":	-71,33934256	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ISIDORA GOYENECHEA 3103	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41455	,"Longitude":	-70,59771	,"Stock":	"NO"}
{"Nombre":	PUNTOFARMA	"Direccion":	ALPATACAL 0346	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,205994	,"Longitude":	-70,672716	,"Stock":	"SI"}
{"Nombre":	FARMAPRECIO	"Direccion":	SAN ANTONIO 237	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439988	,"Longitude":	-70,647929	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMÉRICO VESPUCIO 1501, LOCAL C278, C282, C286 Y BS 230, MALL PLAZA OESTE	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,517344	,"Longitude":	-70,716387	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PEDRO DE VALDIVIA 1698	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,438181	,"Longitude":	-70,607309	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	ELEUTERIO RAMÍREZ 1315-1319, LOCALES 7 Y 8	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449923	,"Longitude":	-70,65341	,"Stock":	"SI"}
{"Nombre":	LAS PRINCESAS	"Direccion":	AVENIDA BRASIL 7928	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,397786	,"Longitude":	-70,751326	,"Stock":	"SI"}
{"Nombre":	BOTICA ALQUIMIA	"Direccion":	ESMERALDA 1432	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,666703	,"Longitude":	-70,932409	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	21 de Mayo 596	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4806601	,"Longitude":	-70,3167926	,"Stock":	"SI"}
{"Nombre":	EL BIENESTAR	"Direccion":	AVENIDA SAN PABLO 3162	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435799	,"Longitude":	-70,678813	,"Stock":	"NO"}
{"Nombre":	RADANET	"Direccion":	GENERAL JOSÉ ARTIGAS 3001, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,446328	,"Longitude":	-70,599096	,"Stock":	"NO"}
{"Nombre":	MEDDICA	"Direccion":	AVENIDA ORIENTAL 7321	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33468548	,"Longitude":	-70,555155	,"Stock":	"SI"}
{"Nombre":	FARMATOP	"Direccion":	PRIMERA TRANSVERSAL 353	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,56303	,"Longitude":	-70,796775	,"Stock":	"SI"}
{"Nombre":	MUNDO FARMA	"Direccion":	EUCALIPTUS 273, LOCAL 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,608402	,"Longitude":	-70,705799	,"Stock":	"SI"}
{"Nombre":	ARAUCOMED	"Direccion":	SÉPTIMO DE LÍNEA 209	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,360947	,"Longitude":	-70,714081	,"Stock":	"NO"}
{"Nombre":	PINTO MARTÍNEZ	"Direccion":	LO ESPINOZA 2851	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,412241	,"Longitude":	-70,706067	,"Stock":	"SI"}
{"Nombre":	SANTA RAQUEL	"Direccion":	AVENIDA TRAVESÍA 8358-A, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,456492	,"Longitude":	-70,748815	,"Stock":	"NO"}
{"Nombre":	SR. WANG	"Direccion":	SAZIE 2642	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,452377	,"Longitude":	-70,673018	,"Stock":	"NO"}
{"Nombre":	CHILEFARMA	"Direccion":	LOS LEONES 1458, LOCAL 103	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,432608	,"Longitude":	-70,601808	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL AMIGO DEL PUEBLO	"Direccion":	AVDA. PLAYA BRAVA N° 2125	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2429768	,"Longitude":	-70,1396421	,"Stock":	"SI"}
{"Nombre":	DEPARTAMENTAL	"Direccion":	BENOZZO GOZZOLI 5395	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,506007	,"Longitude":	-70,629232	,"Stock":	"SI"}
{"Nombre":	BIOCUBA	"Direccion":	MAIPÚ 036, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50686	,"Longitude":	-70,756833	,"Stock":	"NO"}
{"Nombre":	BIENESTAR	"Direccion":	AVENIDA JOSÉ MIGUEL CARRERA 8766	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,536503	,"Longitude":	-70,663944	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA VICUÑA MACKENNA 7492, LOCAL 3 A	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,521406	,"Longitude":	-70,597731	,"Stock":	"NO"}
{"Nombre":	ECONOFARMA	"Direccion":	Avenida El Guanaco 3100	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,39494009	,"Longitude":	-70,65819257	,"Stock":	"NO"}
{"Nombre":	NOAH	"Direccion":	AVENIDA EL GUANACO 3562	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,392548	,"Longitude":	-70,657338	,"Stock":	"SI"}
{"Nombre":	PHARMACOSTA	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 1322	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,46008	,"Longitude":	-70,6521	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMÉRICO VESPUCIO 1651, L.13, MULTICENTER QUILICURA	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,374177	,"Longitude":	-70,718153	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	COMPAÑÍA DE JESÚS 1039	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,438388	,"Longitude":	-70,65174	,"Stock":	"NO"}
{"Nombre":	HERRERA	"Direccion":	MONUMENTO N° 2194	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,507339	,"Longitude":	-70,758931	,"Stock":	"SI"}
{"Nombre":	FARMABIEN	"Direccion":	DIECIOCHO 690	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,454415	,"Longitude":	-70,656558	,"Stock":	"NO"}
{"Nombre":	JUMBO	"Direccion":	AVENIDA AMÉRICO VESPUCIO 1001, INTERIOR SUPERMERCADO JUMBO	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,479687	,"Longitude":	-70,752152	,"Stock":	"NO"}
{"Nombre":	LA BOTIKA	"Direccion":	GENERAL MACKENNA 1555, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,433166	,"Longitude":	-70,659742	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	CATEDRAL 1267	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437674	,"Longitude":	-70,654989	,"Stock":	"SI"}
{"Nombre":	LA FAMILIA	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 3565, LOCAL 1-A	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4522	,"Longitude":	-70,68458	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA VICUÑA MACKENNA ORIENTE 7110, LOCAL 15	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,516661	,"Longitude":	-70,599949	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	6 ORIENTE Nº1015	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42856426	,"Longitude":	-71,65858438	,"Stock":	"SI"}
{"Nombre":	FARMACIA LAWEN	"Direccion":	5 ORIENTE Nº925 ESQUINA 3 SUR	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,429762	,"Longitude":	-71,66034	,"Stock":	"NO"}
{"Nombre":	FARMAMASPLUS	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA 3024	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,482346	,"Longitude":	-70,648882	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN BORJA 122, LOCALES 0529 Y 0531, MALL ARAUCO ESTACIÓN	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,454507	,"Longitude":	-70,679502	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BALMACEDA 750-A	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,608667	,"Longitude":	-70,856258	,"Stock":	"SI"}
{"Nombre":	ECUAFARMA	"Direccion":	EMILIA LASCAR 89	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,606427	,"Longitude":	-70,898616	,"Stock":	"SI"}
{"Nombre":	NUEVA REAL	"Direccion":	LAS TORRES 306	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,356384	,"Longitude":	-70,729464	,"Stock":	"NO"}
{"Nombre":	POPULAR LA PINCOYA	"Direccion":	PEDRO FONTOVA 7824	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,345385	,"Longitude":	-70,67047	,"Stock":	"SI"}
{"Nombre":	VIVAS	"Direccion":	AV. DEL CANAL 19796, CIUDAD DE LOS VALLES	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA APOQUINDO 8613, LOCAL 4. INTERIOR METRO LOS DOMINICOS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,407925	,"Longitude":	-70,545131	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	NUEVA COSTANERA 3900, TM 152, NIVEL 1, CENTRO COMERCIAL CASA COSTANERA	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,398752	,"Longitude":	-70,598584	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 108, LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,437929	,"Longitude":	-70,636741	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA APOQUINDO 5680, LOCAL 101	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409468	,"Longitude":	-70,570792	,"Stock":	"SI"}
{"Nombre":	OFTÁLMIKA	"Direccion":	AV. LOS LEONES 419	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,423517	,"Longitude":	-70,60464	,"Stock":	"NO"}
{"Nombre":	PLAZA	"Direccion":	BALMACEDA 514	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,732435	,"Longitude":	-70,743248	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAS AYUDA	"Direccion":	MARTINEZ DE ALDUNATE 1449 B PUNTA ARENAS CHILE	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,164589	,"Longitude":	-70,917853	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	14 NORTE N°976 L-20 NIVEL-1 MALL MARINA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0097828	,"Longitude":	-71,5457297	,"Stock":	"NO"}
{"Nombre":	FARMACIA MANZANO	"Direccion":	AVENIDA ESPERANZA Nº537-A SAGRADA FAMILIA	"Region":	MAULE	,"Comuna":	SAGRADA FAMILIA	,"Latitude":	-34,99954312	,"Longitude":	-71,37864797	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	FREIRE 120, LOCAL1	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0449749	,"Longitude":	-71,4000647	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	AVENIDA VALPARAISO 802, L-5	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0441825	,"Longitude":	-71,3753734	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	SANTIAGO Nº907, L-2	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,04386	,"Longitude":	-71,3767	,"Stock":	"NO"}
{"Nombre":	FARMACIA JUMBO	"Direccion":	AVENIDA RAMON FREIRE 2414, EL BELLOTO	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0451752	,"Longitude":	-71,4213787	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUMBO	"Direccion":	EJERCITO N° 470, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4685648	,"Longitude":	-72,9336654	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CALETERA ORIENTE AUTOPISTA LOS LIBERTADORES 22909, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,207196	,"Longitude":	-70,666266	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN ALBERTO HURTADO 59	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,454613	,"Longitude":	-70,690985	,"Stock":	"SI"}
{"Nombre":	FARMAVEN	"Direccion":	CIUDAD DE MÉXICO 302-B	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,509793	,"Longitude":	-70,736941	,"Stock":	"SI"}
{"Nombre":	SAN MIGUEL	"Direccion":	BRASIL Nº601	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846128	,"Longitude":	-71,59106	,"Stock":	"SI"}
{"Nombre":	FARMACIA GUERRA	"Direccion":	BALMACEDA Nº62	"Region":	MAULE	,"Comuna":	RAUCO	,"Latitude":	-34,924773	,"Longitude":	-71,3162596	,"Stock":	"NO"}
{"Nombre":	FARMACIA DE LA FAMILIA	"Direccion":	5 ORIENTE Nº1120 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427323	,"Longitude":	-71,659899	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	AV. MATURANA 115	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0458335	,"Longitude":	-71,3739481	,"Stock":	"NO"}
{"Nombre":	AHORRO	"Direccion":	AV. MARGA MARGA 1505	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0556244	,"Longitude":	-71,4267625	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CARMEN Nº1220, LOCAL 117 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,975133	,"Longitude":	-71,239588	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. MAGALLANES 1050 L-1	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,93283199	,"Longitude":	-71,51795181	,"Stock":	"SI"}
{"Nombre":	FARMACIA 18	"Direccion":	18 de Septiembre 1394	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4843106	,"Longitude":	-70,3073208	,"Stock":	"SI"}
{"Nombre":	FARMEDICAL	"Direccion":	Linderos 1217	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4549723	,"Longitude":	-70,2842297	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA FÓRMULA	"Direccion":	VILLA DON SEBASTIÁN DE RAUQUÉN, CALLE RECIFE Nº2714	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,95868241	,"Longitude":	-71,22541802	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	ALMIRANTE LATORRE 280	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,78937103	,"Longitude":	-71,18596238	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. BRASIL N° 941, CENTRO COMERCIAL TOTTUS	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5792432	,"Longitude":	-70,7606587	,"Stock":	"NO"}
{"Nombre":	EL FARO	"Direccion":	AVENIDA BALMACEDA 1099	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9097591	,"Longitude":	-71,2501962	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL MARIO HENRíQUEZ LILLO	"Direccion":	AVENIDA ISIDORO DUBOURNAIS 4120	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,438453	,"Longitude":	-71,6840675	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL SAN ANTONIO	"Direccion":	RAMÓN BARROS LUCO 1881	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5961915	,"Longitude":	-71,6136962	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA ISIDORO DUBOURNAIS Nº195	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,3969935	,"Longitude":	-71,6946404	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL DEL HOSPITAL DR. ERNESTO TORRES GALDAMES	"Direccion":	HEROES DE LA CONCEPCIÓN N°502	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,214209	,"Longitude":	-70,138068	,"Stock":	"SI"}
{"Nombre":	FARMACIAS KNOP	"Direccion":	ALDUNATE N°1160	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95450868	,"Longitude":	-71,33848711	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA NUEVA EINSTEIN 290	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17392508	,"Longitude":	-70,71818094	,"Stock":	"NO"}
{"Nombre":	FARMACIAS KNOP LA SERENA	"Direccion":	BALMACEDA 457	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9025829	,"Longitude":	-71,2499921	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA 21 DE MAYO 950	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5889925	,"Longitude":	-71,6112608	,"Stock":	"SI"}
{"Nombre":	CHILENA	"Direccion":	AV AGUA SANTA N°4024 LOCAL 07	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04891891	,"Longitude":	-71,56151329	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CHACABUCO Nº294	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,3196346	,"Longitude":	-71,4065209	,"Stock":	"NO"}
{"Nombre":	BENDITO REMEDIO	"Direccion":	PEDRO MONTT 94	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5801211	,"Longitude":	-71,6123495	,"Stock":	"SI"}
{"Nombre":	FARMACIA TU SALUD	"Direccion":	HERMANOS CARRERA 561	"Region":	OHIGGINS	,"Comuna":	LITUECHE	,"Latitude":	-34,11493633	,"Longitude":	-71,72652047	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESAM LIMACHE	"Direccion":	DOLORES 258	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	9 ORIENTE Nº1241	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4255911	,"Longitude":	-71,65436893	,"Stock":	"SI"}
{"Nombre":	OLíMPICA	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N° 4677, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4556666	,"Longitude":	-70,699572	,"Stock":	"SI"}
{"Nombre":	LIFEPHARMACY	"Direccion":	AVENIDA SAN JOSé N° 501, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,596344	,"Longitude":	-70,705373	,"Stock":	"SI"}
{"Nombre":	CARYVON	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA N° 3052	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,482413	,"Longitude":	-70,648958	,"Stock":	"NO"}
{"Nombre":	MANANTIALES	"Direccion":	SAN MARTíN 147	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40653686	,"Longitude":	-70,8612919	,"Stock":	"SI"}
{"Nombre":	O2	"Direccion":	AVENIDA JOSE MIGUEL CARRERA 5832	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	O2	"Direccion":	AVENIDA JOSE MIGUEL CARRERA 4910	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,49832	,"Longitude":	-70,65335	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTICA	"Direccion":	ARTURO PRAT 1570, COIHUECO	"Region":	ÑUBLE	,"Comuna":	COIHUECO	,"Latitude":	-36,628138	,"Longitude":	-71,833102	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MAIPON N° 801	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,610461	,"Longitude":	-72,100532	,"Stock":	"SI"}
{"Nombre":	KNOP OVALLE	"Direccion":	VICUÑA MACKENNA 102 103	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60256896	,"Longitude":	-71,19944221	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAELQUI	"Direccion":	PASAJE J 496, TIERRAS BLANCAS	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,961589	,"Longitude":	-71,2543286	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA MÓVIL DE RÍO BUENO	"Direccion":	AVENIDA EJÉRCITO LIBERTADOR N° 1500	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,335424	,"Longitude":	-72,95078	,"Stock":	"SI"}
{"Nombre":	FARMACIA ESTACIóN	"Direccion":	AVENIDA MONSEÑOR ENRIQUE ALVEAR Nº285	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,98422572	,"Longitude":	-72,31786533	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA SANTA MARíA N° 6902, LOCALES 16, 18 Y 19	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,376684	,"Longitude":	-70,569367	,"Stock":	"NO"}
{"Nombre":	TRINIDAD	"Direccion":	ALCALDE LUIS ARAYA CERECEDA N° 4356, LOCAL 15	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,607885	,"Longitude":	-70,900372	,"Stock":	"SI"}
{"Nombre":	DMEDICAL	"Direccion":	PUENTE N° 605	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,435896	,"Longitude":	-70,651476	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO APACIBLE N° 635, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,447517	,"Longitude":	-70,844694	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL EL TABO	"Direccion":	NICOLÁS ESQUINA SARA	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,45763437	,"Longitude":	-71,66103259	,"Stock":	"NO"}
{"Nombre":	Fraccion	"Direccion":	ROSARIO NORTE N° 86	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,408102	,"Longitude":	-70,571349	,"Stock":	"SI"}
{"Nombre":	FARMAFULL	"Direccion":	AVENIDA JOSé PEDRO ALESSANDRI N° 927, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,463344	,"Longitude":	-70,598375	,"Stock":	"NO"}
{"Nombre":	MáS AHORRO	"Direccion":	AVENIDA LOS PAJARITOS N° 3436-B	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,495778	,"Longitude":	-70,757582	,"Stock":	"NO"}
{"Nombre":	FARMA MAS	"Direccion":	CABO DE HORNOS N° 0491, VILLA LOS HéROES	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,537207	,"Longitude":	-70,784922	,"Stock":	"SI"}
{"Nombre":	SERVIFARMA	"Direccion":	ARTURO PRAT N° 1377, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,286396	,"Longitude":	-70,874024	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMA ATACAMA	"Direccion":	AV. EL PALOMAR N° 1419	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,37983583	,"Longitude":	-70,33089614	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA BARROS LUCO Nº2970, LOCAL 4 Y 6	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,607921	,"Longitude":	-71,613889	,"Stock":	"NO"}
{"Nombre":	MANQUEL	"Direccion":	CONSISTORIAL 2119, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,47852949	,"Longitude":	-70,5452085	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AMUNATEGUI 270, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440461	,"Longitude":	-70,6566	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIA	"Direccion":	AV. CARDENAL SAMORE 2290 L-14 PLACILLA	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,1319574	,"Longitude":	-71,5658811	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	CERRO TRONADOR 498, VALLE VOLCANES , PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4579561	,"Longitude":	-72,9082277	,"Stock":	"SI"}
{"Nombre":	FARMAFEL	"Direccion":	O'HIGGINS Nº493	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8337113	,"Longitude":	-70,5999717	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	BLANCO 987	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0462909	,"Longitude":	-71,4394215	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	URMENETA 36	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,9850431	,"Longitude":	-71,2766336	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA 21 DE MAYO 5426, LOCALES 8 Y 9	"Region":	VALPARAISO	,"Comuna":	LA CRUZ	,"Latitude":	-32,8264811	,"Longitude":	-71,2268265	,"Stock":	"SI"}
{"Nombre":	SAN NICOLÁS	"Direccion":	SAN NICOLAS 1279	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,497996	,"Longitude":	-70,657877	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALTO CACHAPOAL1	"Direccion":	IGNACIO CARRERA PINTO 1240, LOCAL 3	"Region":	OHIGGINS	,"Comuna":	PICHIDEGUA	,"Latitude":	-34,36374729	,"Longitude":	-71,2731692	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA PAREDONES	"Direccion":	I-620 15	"Region":	OHIGGINS	,"Comuna":	PAREDONES	,"Latitude":	-34,64871338	,"Longitude":	-71,89998992	,"Stock":	"SI"}
{"Nombre":	FARMACIA HERRERA	"Direccion":	MANUEL SOLIS 340	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,40378496	,"Longitude":	-70,86213262	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ESMERALDA 334	"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2464363	,"Longitude":	-73,3169704	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	QUECHEREGUAS Nº1797	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,099171	,"Longitude":	-71,279855	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOBIO	"Direccion":	AV. MANUEL RODRIGUEZ N° 1687	"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,936857	,"Longitude":	-73,020207	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV: ROOSEVELT N° 1694	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,822028	,"Longitude":	-73,03595	,"Stock":	"NO"}
{"Nombre":	COOPERCARAB CONCEPCION	"Direccion":	AV. O´HIGGINS N° 80	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,830712	,"Longitude":	-73,057079	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. VALPARAÍSO 401 L-3	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02427992	,"Longitude":	-71,55670535	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	O´HIGGINS N° 597	"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,532743	,"Longitude":	-72,434946	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. VALPARAÍSO 502	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,024662	,"Longitude":	-71,5554549	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. VALPARAÍSO 929	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0255412	,"Longitude":	-71,5486022	,"Stock":	"NO"}
{"Nombre":	TU FARMACIA	"Direccion":	CACERES 591	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1664705	,"Longitude":	-70,7426197	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA SIN IGUAL	"Direccion":	LATORRE N°2064	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4539147	,"Longitude":	-68,9267434	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA SOR VICENTA 2515, LOS ANGELES	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,446339	,"Longitude":	-72,33356	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO	"Direccion":	Calle Paris 3574	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,448037	,"Longitude":	-70,298231	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA LAS PARCELAS 990 LOCALES 1 2 3	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9211762	,"Longitude":	-71,208462	,"Stock":	"SI"}
{"Nombre":	FARMACIA A.L.A.	"Direccion":	LOS CLARINES 1195	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9850033	,"Longitude":	-71,3360144	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	BALMACEDA NORTE N° 25, LOS LAGOS	"Region":	LOS RIOS	,"Comuna":	LOS LAGOS	,"Latitude":	-39,86164	,"Longitude":	-72,815805	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALIAGA	"Direccion":	AVENIDA ERRAZURIZ 1479	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,62981477	,"Longitude":	-71,34922225	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAS	"Direccion":	AVENIDA COMERCIO 1990, LOCAL4	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,40372047	,"Longitude":	-72,02485648	,"Stock":	"NO"}
{"Nombre":	FARMACIA PRINCIPAL	"Direccion":	AVENIDA ESPAÑA 975	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,4376472	,"Longitude":	-71,07752957	,"Stock":	"NO"}
{"Nombre":	FARMACIA O'HIGGINS	"Direccion":	GENARO LISBOA 344	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43925745	,"Longitude":	-71,07933186	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR VALLE HERMOSO	"Direccion":	CALLE ESMERALDA S/Nº	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4482297	,"Longitude":	-71,2277268	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" (L-763)	"Direccion":	GENERAL LAGOS N°  545 VICTORIA	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,234229	,"Longitude":	-72,332877	,"Stock":	"SI"}
{"Nombre":	FARMACIA RELONCAVI	"Direccion":	AVDA. ARTURO MERINO BENITEZ N° 600, LOCAL 03, POBLACION PICHIPELLUCO, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4727665	,"Longitude":	-72,9110021	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. BORGOÑO 14768 L-4 REÑACA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9696494	,"Longitude":	-71,5443745	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA ESTRELLA	"Direccion":	AVENIDA LOS FLAMENCOS 01364, PUNTA ARENAS	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1230224	,"Longitude":	-70,8960479	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PUENTE N° 524, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43694	,"Longitude":	-70,651515	,"Stock":	"NO"}
{"Nombre":	SAN FELIPE	"Direccion":	PASAJE ANTONIO GAUDí N° 1835, CASA 35	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,574347	,"Longitude":	-70,803266	,"Stock":	"SI"}
{"Nombre":	FARMABAST	"Direccion":	GRAJALES N° 2167	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451556	,"Longitude":	-70,665861	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALMIRANTE LATORRE N° 310, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451464	,"Longitude":	-70,664086	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	BALMACEDA 122	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,733092	,"Longitude":	-70,737866	,"Stock":	"NO"}
{"Nombre":	ARCA	"Direccion":	ORTUZAR 955	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,69035	,"Longitude":	-71,215604	,"Stock":	"SI"}
{"Nombre":	TOCORNAL	"Direccion":	DOMINGO TOCORNAL 0748, BLOQUE LC, 8	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,601354	,"Longitude":	-70,566089	,"Stock":	"NO"}
{"Nombre":	FARMALYM	"Direccion":	MAIPÚ 420	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,591004	,"Longitude":	-70,707775	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	SALESIANOS 1128, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,492331	,"Longitude":	-70,651993	,"Stock":	"SI"}
{"Nombre":	BICENTENARIO	"Direccion":	CACIQUE COLIN 427	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,273091	,"Longitude":	-70,746269	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. VICUñA MACKENNA 27, LOCAL 14	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA ALEMANA	"Direccion":	AVENIDA CACHAPOAL 225, LOCAL 3	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17693252	,"Longitude":	-70,74331541	,"Stock":	"NO"}
{"Nombre":	FARMACIA NOLY	"Direccion":	CHILLAN 645- A1	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5871353	,"Longitude":	-70,9865253	,"Stock":	"SI"}
{"Nombre":	FARMACIA TONGOY	"Direccion":	GOMEZ CARREÑO 31	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-30,25685352	,"Longitude":	-71,49427464	,"Stock":	"NO"}
{"Nombre":	FARMACIA KNOP	"Direccion":	GREGORIO CORDOVEZ 676	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9030926	,"Longitude":	-71,247573	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTICA	"Direccion":	ALBERTO HURTADO 4192	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94758332	,"Longitude":	-71,24719757	,"Stock":	"SI"}
{"Nombre":	SAN JUAN	"Direccion":	CONDEL 1299 - A	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,044744	,"Longitude":	-71,6237125	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. VALPARAÍSO 670	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02503383	,"Longitude":	-71,55294973	,"Stock":	"SI"}
{"Nombre":	SALEM	"Direccion":	AVENIDA ISIDORO DUBOURNAIS Nº830, LOCAL 21-A	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,4043889	,"Longitude":	-71,6936002	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA CENTENARIO Nº 112	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5806413	,"Longitude":	-71,6113669	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	LOS CARRERA 958	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0484211	,"Longitude":	-71,4400501	,"Stock":	"NO"}
{"Nombre":	NUEVA	"Direccion":	OBISPO VALDES SUBERCASEAUX 1285 CURAUMA	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,1194136	,"Longitude":	-71,5725049	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALOPATICA NOVAVITA	"Direccion":	BARROS ARANA N° 1643	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,224026	,"Longitude":	-70,147894	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	CLAUDIO VICUÑA 848	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0467603	,"Longitude":	-71,442251	,"Stock":	"SI"}
{"Nombre":	FARMACIA SERVICIO SALUD IQUIQUE	"Direccion":	HEROES DE LA CONCEPCION N°502, INTERIOR HOSPITAL SECTOR OFICINAS PRAIS	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,215378	,"Longitude":	-70,137531	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALOPATICA LA BOTIKA	"Direccion":	SALVADOR ALLENDE N° 3432, OFICINA 101	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,255369	,"Longitude":	-70,130956	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	ARTURO PRAT N°619	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6488424	,"Longitude":	-70,3962756	,"Stock":	"SI"}
{"Nombre":	NUEVA VIDA	"Direccion":	ARTURO PRAT N° 230 LOCAL F	"Region":	ÑUBLE	,"Comuna":	SAN NICOLAS	,"Latitude":	-36,503017	,"Longitude":	-72,213068	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. FERROCARRIL N° 2001, SECTOR LA PALOMA, LOCALES TC 6, 7, 8 Y 9, CENTRO COMERCIAL PASEO ALERCE	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4379758	,"Longitude":	-72,9089146	,"Stock":	"NO"}
{"Nombre":	FARMACIA PUERTA DEL SUR	"Direccion":	ISLA ROBINSON CRUSOE N°6371, PUERTA SUR 13	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4701767	,"Longitude":	-72,9987004	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	AV. VALPARAÍSO 993	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0444956	,"Longitude":	-71,377381	,"Stock":	"SI"}
{"Nombre":	PHARMACY Y DRUGSTORE	"Direccion":	BALMACEDA Nº1121	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,8410618	,"Longitude":	-70,9571869	,"Stock":	"SI"}
{"Nombre":	FARMACIA BOSQUEMAR	"Direccion":	EL REFUGIO N° 1599, LOCAL N°4, BOSQUEMAR, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4874093	,"Longitude":	-73,0016827	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	TANGUE 26 - 36	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,6042117	,"Longitude":	-71,197335	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AVENIDA CARTAGENA 707	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,547743	,"Longitude":	-71,5981842	,"Stock":	"NO"}
{"Nombre":	FARMACIA LITORAL	"Direccion":	CAMINO A MIRASOL 2348 B	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,3335953	,"Longitude":	-71,6462925	,"Stock":	"NO"}
{"Nombre":	COMUNAL MóVIL ITINERANTE COLINA	"Direccion":	PEDRO AGUIRRE CERDA N° 7	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	ERASMO ESCALA 2220	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,445231	,"Longitude":	-70,666594	,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	FROILÁN ROA 580, LOCALES 14 Y 15	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,515166	,"Longitude":	-70,599054	,"Stock":	"SI"}
{"Nombre":	FRACCION	"Direccion":	ANTONIO BELLET 302	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,424914	,"Longitude":	-70,618937	,"Stock":	"NO"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	5 DE ABRIL 17, LOCALES 9 Y 10, PISO 3	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510296	,"Longitude":	-70,757747	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	ALCANTARA 44, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415644	,"Longitude":	-70,589276	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	"AHUMADA" N° 280, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4398	,"Longitude":	-70-651034	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA EL LLANO SUBERCASEAUX N° 3519 A, LOCAL 2007	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,485742	,"Longitude":	-70,651618	,"Stock":	"SI"}
{"Nombre":	PANUL	"Direccion":	AVENIDA VICUÑA MACKENNA PONIENTE 7431, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5223562	,"Longitude":	-70,5995541	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA MANUEL MONTT 2222, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,448112	,"Longitude":	-70,613439	,"Stock":	"SI"}
{"Nombre":	BOTICA VILLA OLIMPICA	"Direccion":	SALVADOR 1350	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,464058	,"Longitude":	-70,620901	,"Stock":	"NO"}
{"Nombre":	FARMACIA CONDELL	"Direccion":	AVENIDA MANSO DE VELASCO Nº298-B CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,987895	,"Longitude":	-71,233439	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATOTAL 2	"Direccion":	CAMILO HENRIQUEZ N° 392	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,280869	,"Longitude":	-72,226096	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALTOS DEL PARQUE N° 5800, LOCALES 11 Y 12, CENTRO COMERCIAL ALTOS DEL PARQUE	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,499379	,"Longitude":	-70,55307	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CARLOS PEÑA OTAEGUI 11900, LOCAL 1, EDIFICIO C, CENTRO COMERCIAL SAN CARLOS DE APOQUINDO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,412275	,"Longitude":	-70,512754	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO EL ALBA 12351, INTERIOR CLÍNICA SAN CARLOS DE APOQUINDO	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,400163	,"Longitude":	-70,509617	,"Stock":	"SI"}
{"Nombre":	COMUNITARIA MAS SALUD	"Direccion":	AV. CONSTITUCIÓN 793 L-1	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,3113763	,"Longitude":	-71,4095042	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMéRICO VESPUCIO 51, LOCALES 124 Y 125	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,518085	,"Longitude":	-70,707673	,"Stock":	"NO"}
{"Nombre":	FARMA UNO	"Direccion":	AVENIDA APOQUINDO 4900, LOCAL 25	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,411367	,"Longitude":	-70,578132	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	36 ORIENTE Nº3431	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,416371	,"Longitude":	-71,609685	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL VALLE	"Direccion":	Ortiz de Rozas N° 741	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4529782	,"Longitude":	-71,2405353	,"Stock":	"NO"}
{"Nombre":	FARMACIA SANTA MARÍA	"Direccion":	Diez Oriente 63	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4423532	,"Longitude":	-71,6532848	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA CAMILO HENRÍQUEZ Nº434-A	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9814396	,"Longitude":	-71,2411506	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDA Y SALUD Nº2	"Direccion":	14 SUR 2 PONIENTE Nº650-B TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,440462	,"Longitude":	-71,670075	,"Stock":	"SI"}
{"Nombre":	CHILE	"Direccion":	AVENIDA VICUÑA MACKENNA 747	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45119	,"Longitude":	-70,631256	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA AMÉRICO VESPUCIO 399, LOCALES 311, 313 Y 315	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,482769	,"Longitude":	-70,749581	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PORTAL DE SAN PEDRO 6950 LOCALES 5, 6A Y 6B, PATIO BOSQUEMAR, SAN PEDRO DE LA PAZ	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,88386	,"Longitude":	-73,140303	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	HUéRFANOS 987	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439439	,"Longitude":	-70,650805	,"Stock":	"NO"}
{"Nombre":	FARMAFULL	"Direccion":	AVENIDA JOSé PEDRO ALESSANDRI N° 61, local 1	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45544	,"Longitude":	-70,598251	,"Stock":	"SI"}
{"Nombre":	MAXIMA	"Direccion":	AVENIDA GRECIA N° 8585, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,476837	,"Longitude":	-70,544403	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DOCTOR SIMI FRANQUICIA l-266	"Direccion":	VICTORIA 715	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,581999	,"Longitude":	-72,053866	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AVENIDA MéXICO N° 1915	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,592963	,"Longitude":	-70,559144	,"Stock":	"NO"}
{"Nombre":	FARMA CHILE	"Direccion":	JORGE DéLANO N° 70	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,482677	,"Longitude":	-70,747523	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA PROVIDENCIA N° 2153	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,421265	,"Longitude":	-70,609068	,"Stock":	"NO"}
{"Nombre":	SU SALUD	"Direccion":	ROMERO N° 2850	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,447941	,"Longitude":	-70,674098	,"Stock":	"NO"}
{"Nombre":	SAN LUIS	"Direccion":	CóNDOR N° 1029	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,450256	,"Longitude":	-70,649512	,"Stock":	"SI"}
{"Nombre":	FARMA NATURAL CARE	"Direccion":	GENERAL MACKENNA N° 1186	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,433105	,"Longitude":	-70,654554	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA PROVIDENCIA N° 1090	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429928	,"Longitude":	-70,622686	,"Stock":	"SI"}
{"Nombre":	POPULAR DE CERRO NAVIA	"Direccion":	IGUALDAD 1150	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,434253	,"Longitude":	-70,728599	,"Stock":	"NO"}
{"Nombre":	FARMACIA SANA SANA	"Direccion":	CALLE LUZ DIVINA Nº 1181, LOCAL 6 Y 7	"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,3705169	,"Longitude":	-71,6678957	,"Stock":	"SI"}
{"Nombre":	BOTICA MUNICIPAL LA CRUZ	"Direccion":	AV. 21 DE MAYO Nº 5010	"Region":	VALPARAISO	,"Comuna":	LA CRUZ	,"Latitude":	-32,8287202	,"Longitude":	-71,2279538	,"Stock":	"NO"}
{"Nombre":	FARMASALUTE	"Direccion":	HERNANDO DE MAGALLANES 972	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,416565	,"Longitude":	-70,560012	,"Stock":	"NO"}
{"Nombre":	FARMACIA LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	CLARO SOLAR N° 780 LOCAL 11	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,739286	,"Longitude":	-72,591226	,"Stock":	"SI"}
{"Nombre":	FARMACIA RORAIMA	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA N° 6761	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,519065	,"Longitude":	-70,659516	,"Stock":	"SI"}
{"Nombre":	FARMABIEN	"Direccion":	AVENIDA SAN PABLO N° 1527	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434378	,"Longitude":	-70,659125	,"Stock":	"SI"}
{"Nombre":	GAMA	"Direccion":	SAN ISIDRO N° 319, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,448067	,"Longitude":	-70,643716	,"Stock":	"NO"}
{"Nombre":	SANTO REMEDIO	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA N°6680	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,518851	,"Longitude":	-70,659047	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	APOQUINDO N° 5873-5875, LOCALES 4 Y 5	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409496	,"Longitude":	-70,569288	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	ARTURO PRAT N° 165 – 165 A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,446719	,"Longitude":	-70,649782	,"Stock":	"NO"}
{"Nombre":	MI BIOFARMA	"Direccion":	ALEJANDRO GUZMAN N° 495-A	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,555298	,"Longitude":	-70,667803	,"Stock":	"SI"}
{"Nombre":	INSTAFARM	"Direccion":	ESCUELA AGRíCOLA N° 2461	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,490661	,"Longitude":	-70,607347	,"Stock":	"SI"}
{"Nombre":	BOTICA AMAPOLAS	"Direccion":	AMAPOLAS N° 4891	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,440055	,"Longitude":	-70,580634	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	Evaristo Lillo 29	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4135882	,"Longitude":	-70,5818707	,"Stock":	"NO"}
{"Nombre":	VIDAFARMA	"Direccion":	CLAUDIO ARRAU N° 758	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,565898	,"Longitude":	-70,675059	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA AMERICO VESPUCIO 3100	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,485636	,"Longitude":	-70,577971	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 8999, LOCALES 6 Y 7	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,539334	,"Longitude":	-70,665102	,"Stock":	"NO"}
{"Nombre":	MONTES	"Direccion":	AVENIDA SEMINARIO 505	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,447018	,"Longitude":	-70,628688	,"Stock":	"SI"}
{"Nombre":	FARMACIA ANIBAL PINTO	"Direccion":	ANIBAL PINTO N° 1828	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,810761	,"Longitude":	-73,059571	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MARCOS	"Direccion":	CLAUDIO GAY ORIENTE N° 4395	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,752626	,"Longitude":	-73,084518	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	PEDRO AGUIRRE CERDA 350 LOCAL 1A Y 1B	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,841124	,"Longitude":	-73,080616	,"Stock":	"NO"}
{"Nombre":	DOCTOR GALENO	"Direccion":	ANTONIO MATTA N° 1352	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,460149	,"Longitude":	-70,652644	,"Stock":	"SI"}
{"Nombre":	DERMOFAR	"Direccion":	O'connell 64	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4083104	,"Longitude":	-70,5689993	,"Stock":	"NO"}
{"Nombre":	OPENFARMA	"Direccion":	SAN FRANCISCO N° 581, LOCAL N° 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,451854	,"Longitude":	-70,6469	,"Stock":	"NO"}
{"Nombre":	AURA FARMA	"Direccion":	AVENIDA LOS LIBERTADORES N° 1724	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,689036	,"Longitude":	-71,047561	,"Stock":	"SI"}
{"Nombre":	SERVIFARMA	"Direccion":	DOMINICA N° 311, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42643	,"Longitude":	-70,641825	,"Stock":	"SI"}
{"Nombre":	SALUD ETERNA	"Direccion":	LA CAMPANA N° 2978	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,582411	,"Longitude":	-70,557016	,"Stock":	"SI"}
{"Nombre":	MENIER	"Direccion":	EDUARDO GARAY N° 207	"Region":	METROPOLITANA	,"Comuna":	MARIA PINTO	,"Latitude":	-33,511991	,"Longitude":	-71,12467	,"Stock":	"NO"}
{"Nombre":	SPACIO FARMA	"Direccion":	MONTE PALOMAR N° 194	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,524946	,"Longitude":	-70,773422	,"Stock":	"SI"}
{"Nombre":	MEDIPLUS	"Direccion":	MAR CARIBE N° 920 LOCAL B	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,442022	,"Longitude":	-70,741035	,"Stock":	"NO"}
{"Nombre":	ULTRA SOLIDARIA	"Direccion":	IRARRáZAVAL N° 3694	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,455232	,"Longitude":	-70,59216	,"Stock":	"NO"}
{"Nombre":	ALQUIMIA	"Direccion":	LOS JESUITAS MANZANA 25, SITIO 1, VILLA CHILOé	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,584532	,"Longitude":	-70,813532	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	MIRAFLORES N° 51	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,732221	,"Longitude":	-70,684642	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ELIODORO YAñEZ N° 2616, LOCAL 114	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,429024	,"Longitude":	-70,598769	,"Stock":	"SI"}
{"Nombre":	TODOFARMA	"Direccion":	AVENIDA LAS CONDES N° 7700, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,400464	,"Longitude":	-70,554376	,"Stock":	"NO"}
{"Nombre":	ESPOZ	"Direccion":	LAGUNA SUR N° 7301	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,462508	,"Longitude":	-70,738786	,"Stock":	"SI"}
{"Nombre":	Elo	"Direccion":	PADRE HURTADO N° 18154, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,625689	,"Longitude":	-70,67957	,"Stock":	"NO"}
{"Nombre":	YERMEN	"Direccion":	TOCORNAL (EX PEDRO DUARTE) N° 1035	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,610187	,"Longitude":	-70,592173	,"Stock":	"NO"}
{"Nombre":	PORTALES DE MAIPú	"Direccion":	PORTALES N° 1359, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,518011	,"Longitude":	-70,777077	,"Stock":	"SI"}
{"Nombre":	SU SALUD	"Direccion":	SERRANO N° 58	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,445101	,"Longitude":	-70,64927	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA. APOQUINDO N° 4610, LOCAL N° 2	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,413088	,"Longitude":	-70,582048	,"Stock":	"SI"}
{"Nombre":	ABARCA	"Direccion":	INDEPENDENCIA N° 5307, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,379738	,"Longitude":	-70,683343	,"Stock":	"NO"}
{"Nombre":	FAMILIARES	"Direccion":	AVENIDA BRASIL 7906	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,39819	,"Longitude":	-70,750022	,"Stock":	"SI"}
{"Nombre":	GEMINIS	"Direccion":	AVENIDA OSSA N° 047	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,539238	,"Longitude":	-70,662479	,"Stock":	"NO"}
{"Nombre":	DYLAN	"Direccion":	LA ESTRELLA 1361-C	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	CHILENA	"Direccion":	AVENIDA ECUADOR N° 5455-A	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,463867	,"Longitude":	-70,704988	,"Stock":	"SI"}
{"Nombre":	FARMABARRIO	"Direccion":	LIBERTADOR BERNARDO O’HIGGINS N° 4103	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,453903	,"Longitude":	-70,692683	,"Stock":	"SI"}
{"Nombre":	SEGAL	"Direccion":	EYZAGUIRRE N° 1971	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,614891	,"Longitude":	-70,597926	,"Stock":	"SI"}
{"Nombre":	BOTICA COMUNITARIA	"Direccion":	CARMEN N°1200	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,459785	,"Longitude":	-70,638872	,"Stock":	"NO"}
{"Nombre":	DE LO ALTO	"Direccion":	PASAJE VOLCáN MENCHECA N° 994	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,593045	,"Longitude":	-70,54364	,"Stock":	"SI"}
{"Nombre":	FARMALIANZA	"Direccion":	KAMARI ORIENTE N° 1618	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,597301	,"Longitude":	-70,591082	,"Stock":	"NO"}
{"Nombre":	ITALPHARMA	"Direccion":	COLóN N° 6595	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,515169	,"Longitude":	-70,667092	,"Stock":	"NO"}
{"Nombre":	UNO	"Direccion":	ORTUZAR N° 852	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,690637	,"Longitude":	-71,215615	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN FRANCISCO N° 332	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44903	,"Longitude":	-70,646996	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA VITACURA 2710, LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,415662	,"Longitude":	-70,604484	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	HUéRFANOS N° 1109	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,439453	,"Longitude":	-70,652353	,"Stock":	"NO"}
{"Nombre":	BARRIO FARMA	"Direccion":	AVENIDA ROJAS MAGALLANES N° 94 B	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,535878	,"Longitude":	-70,59407	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AVENIDA PRíNCIPE DE GALES N° 8531, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,440635	,"Longitude":	-70,542538	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	GENERAL MACKENNA N° 1201, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,432976	,"Longitude":	-70,654672	,"Stock":	"NO"}
{"Nombre":	RIVAC	"Direccion":	AVENIDA IRARRáZAVAL N° 2401, LOCAL 1, INTERIOR SUPERMERCADO LíDER EXPRESS	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,454045	,"Longitude":	-70,606429	,"Stock":	"SI"}
{"Nombre":	GO FARMA F1	"Direccion":	AVENIDA LARRAíN N° 6793, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,452195	,"Longitude":	-70,559221	,"Stock":	"SI"}
{"Nombre":	ROSARIO	"Direccion":	AVENIDA DIEGO PORTALES N° 1594	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,56038	,"Longitude":	-70,56494	,"Stock":	"SI"}
{"Nombre":	FARMABARRIO	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 4103, TORRE A, EDIFICIO ECOCAPITAL	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,453903	,"Longitude":	-70,692683	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA NUEVA PROVIDENCIA N° 2566	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,417632	,"Longitude":	-70,60378	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA CARLOS VALDOVINOS N° 200, LOCAL D1, PATIO OUTLET LA FáBRICA	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,485474	,"Longitude":	-70,627277	,"Stock":	"NO"}
{"Nombre":	LA FAMILIA	"Direccion":	JOSé MIGUEL CARRERA N° 8363	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,531257	,"Longitude":	-70,662879	,"Stock":	"NO"}
{"Nombre":	VIDA SALUD	"Direccion":	RAMóN FREIRE N° 1529	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,510339	,"Longitude":	-70,777923	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO CARLOS VIAL INFANTE 25	"Region":	METROPOLITANA	,"Comuna":	PIRQUE	,"Latitude":	-33,654566	,"Longitude":	-70,573071	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. BERNARDO O´HIGGINS 701 LOCALES: 2228, 2232, 2236	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58659912	,"Longitude":	-70,98526718	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PASAJE SANTA TERESA N° 757, LOCAL 1, COMUNA DE CHILLáN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,609897	,"Longitude":	-72,101777	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	DIAGONAL DOñIHUE 2251	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,17895697	,"Longitude":	-70,7685128	,"Stock":	"SI"}
{"Nombre":	FARMACIA SU SALUD	"Direccion":	CARLOS NIENY 14, LOCAL 1	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA SEGAL	"Direccion":	AVENIDA MANUEL RODRÍGUEZ 770	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58764775	,"Longitude":	-70,98696401	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA CONHA Y TORO 1086-1088-1090, PLAZUELA INDEPENDENCIA LOCALES 26, 27 Y 28	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,601013	,"Longitude":	-70,579016	,"Stock":	"SI"}
{"Nombre":	SALVADOR	"Direccion":	AVENIDA PROVIDENCIA 727, LOCAL 711	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43276	,"Longitude":	-70,62542	,"Stock":	"SI"}
{"Nombre":	COOPERCARAB	"Direccion":	AVENIDA ANTONIO VARAS 2519	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45027	,"Longitude":	-70,61016	,"Stock":	"SI"}
{"Nombre":	BOSQUES	"Direccion":	LAS TORTOLAS Nº 184, REÑACA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9593098	,"Longitude":	-71,5411733	,"Stock":	"NO"}
{"Nombre":	FENIX FARMA	"Direccion":	DIEGO PORTALES 409	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95745258	,"Longitude":	-71,3394812	,"Stock":	"SI"}
{"Nombre":	DOCTOR SIMI	"Direccion":	LOS ALAMOS 545 LOCAL3	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,98793401	,"Longitude":	-71,33580317	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI (0185)	"Direccion":	AVDA. PISAGUA N° 1150 LOCAL 1 Y 2 VICTORIA	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23379	,"Longitude":	-72,333485	,"Stock":	"NO"}
{"Nombre":	TU FARMACIA	"Direccion":	CAMINO EL ALGARROBAL SITIO R-14, LOCAL 104	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,278017	,"Longitude":	-70,70376	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	CLAUDIO VICUÑA 836	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,046758	,"Longitude":	-71,4423663	,"Stock":	"SI"}
{"Nombre":	FUNDACIÓN DR. JORGE PEREZ RIFO	"Direccion":	AVENIDA LAS CONDES 8631	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,395914	,"Longitude":	-70,548321	,"Stock":	"SI"}
{"Nombre":	EGIPCIA	"Direccion":	ARAUCO #731	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,609149	,"Longitude":	-72,103435	,"Stock":	"NO"}
{"Nombre":	GISEMI	"Direccion":	AVENIDA 21 DE MAYO Nº 512, LOCAL 8	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8679075	,"Longitude":	-71,2387667	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. LIBERTAD 1191	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0110792	,"Longitude":	-71,5489196	,"Stock":	"NO"}
{"Nombre":	FARMAMED	"Direccion":	AVENIDA RAMÓN BARROS LUCO Nº 1704	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5949651	,"Longitude":	-71,6129217	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMANOVA	"Direccion":	INMACULADA CONCEPCIÓN Nº180, LOCAL 3	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6119818	,"Longitude":	-71,6096303	,"Stock":	"SI"}
{"Nombre":	FARMACIA COOPERCARAB LIMITADA	"Direccion":	VICUÑA MACKENNA N° 435 TEMUCO	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73751	,"Longitude":	-72,591437	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI  F0268	"Direccion":	TORREMOLINOS N° 485 LOCAL 109 TEMUCO	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,732526	,"Longitude":	-72,614921	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	1 NORTE N° 0115 LOCAL 1 LABRANZA	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,721545	,"Longitude":	-72,563544	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	RENGO 451	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467509	,"Longitude":	-72,352877	,"Stock":	"SI"}
{"Nombre":	BARRIO SALUD	"Direccion":	COLON 426	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,468856	,"Longitude":	-72,350847	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	AV. SANTA MARÍA 150 L-3	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,93390416	,"Longitude":	-71,53604377	,"Stock":	"NO"}
{"Nombre":	FARMA FER	"Direccion":	QUECHEREGUAS Nº2329	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,118768	,"Longitude":	-71,283235	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA FRANCISCO BILBAO 8898, LOCAL 3032, PORTAL LA REINA	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,42831	,"Longitude":	-70,54109	,"Stock":	"SI"}
{"Nombre":	FARMACIA INSTITUCIONAL	"Direccion":	CAMINO A PENCO N° 450	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,78581	,"Longitude":	-73,02297	,"Stock":	"SI"}
{"Nombre":	FARMACIA UNIFARMA	"Direccion":	AVENIDA MANUEL LABRA LILLO Nº1100	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9869302	,"Longitude":	-71,2129646	,"Stock":	"NO"}
{"Nombre":	FARMACIA ARAGÓN Nº3	"Direccion":	CAMINO LA VIÑA Nº4475 LOCAL 5 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,430344	,"Longitude":	-71,603813	,"Stock":	"SI"}
{"Nombre":	FARMACIA CONDELL Nº2	"Direccion":	MEMBRILLAR Nº225	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,988901	,"Longitude":	-71,23698	,"Stock":	"NO"}
{"Nombre":	FARMACIA DE LA FAMILIA Nº2	"Direccion":	2 SUR Nº1501 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42881202	,"Longitude":	-71,65558485	,"Stock":	"NO"}
{"Nombre":	FARMACIA CERRO ALTO	"Direccion":	ROSAS Nº1063 CONSTITUCIÓN	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,339389	,"Longitude":	-72,41631	,"Stock":	"SI"}
{"Nombre":	FARMACIA  FARMACONTIGO	"Direccion":	3 SUR Nº2117, LOCAL 101	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,430819	,"Longitude":	-71,6453833	,"Stock":	"SI"}
{"Nombre":	FARMACIA MÓVIL	"Direccion":	1 NORTE 2 Y 3 ORIENTE Nº1350 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN RAFAEL	"Direccion":	ANTONIO VARAS Nº696	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,966388	,"Longitude":	-72,318888	,"Stock":	"NO"}
{"Nombre":	SANTA BARBARA	"Direccion":	ARTURO PRAT 745, SANTA BARBARA	"Region":	BIOBIO	,"Comuna":	SANTA BARBARA	,"Latitude":	-37,670206	,"Longitude":	-72,019197	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIAS	"Direccion":	REPUBLICA 257	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-33,0024593	,"Longitude":	-71,2656898	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA SAN CLEMENTE	"Direccion":	LOS ESPINOS S/N LOCAL Nº1	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,5373847	,"Longitude":	-71,48302807	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL SOL	"Direccion":	VALDIVIA Nº157	"Region":	MAULE	,"Comuna":	SAGRADA FAMILIA	,"Latitude":	-34,9995734	,"Longitude":	-71,3811564	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SALUD	"Direccion":	ARTURO PRAT N° 310	"Region":	ARAUCANIA	,"Comuna":	VILCUN	,"Latitude":	-38,67003999	,"Longitude":	-72,22334576	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F0282	"Direccion":	AVDA. BERNARDO O´HIGGINS N° 402	"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,802431	,"Longitude":	-72,69857	,"Stock":	"SI"}
{"Nombre":	FARMACIA DE TODOS	"Direccion":	MIGUEL ANSORENA N° 425 C LOCAL 5 PUCON	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,276581	,"Longitude":	-71,974481	,"Stock":	"NO"}
{"Nombre":	FARMACIA LOS LAGOS	"Direccion":	O'HIGGINS 778	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,575436	,"Longitude":	-73,1363125	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI F0183	"Direccion":	PALGUIN N° 590 LOCAL 2 Y 4 PUCON	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,277557	,"Longitude":	-71,972722	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMATOTAL L- 4	"Direccion":	CAMILO HENRIQUEZ Nª 558 VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,282223	,"Longitude":	-72,227565	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI F0286	"Direccion":	PEDRO LEON GALLO Nª 706 LOCAL 5 VILLARRICA	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,284258	,"Longitude":	-72,229634	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA AMÉRICO VESPUCIO 1737 B, BE1141. INTERIOR MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,366041	,"Longitude":	-70,678872	,"Stock":	"SI"}
{"Nombre":	LOS RÍOS	"Direccion":	CAUPOLICAN 579, GALERIA SANTIAGO, LOCAL 16	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81509442	,"Longitude":	-73,24440945	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	INDEPENDENCIA 1815 A 1843 PISO 1 LOCAL B-105	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0470903	,"Longitude":	-71,6182333	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA CAMINO LOS TRAPENSES 3515, LOCAL 217	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,34309	,"Longitude":	-70,54448	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	SAN MARTIN 559	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,500977	,"Longitude":	-72,673005	,"Stock":	"NO"}
{"Nombre":	IPHARMA	"Direccion":	SAN ANTONIO 1225	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01086672	,"Longitude":	-71,54282742	,"Stock":	"NO"}
{"Nombre":	SANTO REMEDIO	"Direccion":	EDUARDO FREI Nº 592	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8426068	,"Longitude":	-70,603556	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAHORRO	"Direccion":	LIBERTAD Nº247 CHANCO	"Region":	MAULE	,"Comuna":	CHANCO	,"Latitude":	-35,733902	,"Longitude":	-72,532955	,"Stock":	"SI"}
{"Nombre":	BUENA SALUD	"Direccion":	PUNTA ARENAS 7825, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,526631	,"Longitude":	-70,610083	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	5 ORIENTE Nº1255	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42568	,"Longitude":	-71,6598	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	AVENIDA BALMACEDA 201	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,73268	,"Longitude":	-70,73856	,"Stock":	"SI"}
{"Nombre":	RAMÍREZ	"Direccion":	CARRETERA GENERAL SAN MARTÍN 340, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,20154	,"Longitude":	-70,67405	,"Stock":	"NO"}
{"Nombre":	VITA	"Direccion":	AV. CONCHA Y TORO 625	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,6057736	,"Longitude":	-70,57655	,"Stock":	"NO"}
{"Nombre":	DEL AHORRO	"Direccion":	AV. MANUEL RODRIGUEZ 649	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43652	,"Longitude":	-70,65961	,"Stock":	"SI"}
{"Nombre":	JOSEFA	"Direccion":	AV. JOSE JOAQUIN PEREZ 6658, LOCAL F	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,429399	,"Longitude":	-70,726686	,"Stock":	"SI"}
{"Nombre":	LA BOTICA DEL PUERTO	"Direccion":	AV. PEDRO MONTT Nº 106	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5800186	,"Longitude":	-71,6121964	,"Stock":	"SI"}
{"Nombre":	SEPULVEDA	"Direccion":	FEDERICO ERRAZURIZ 692, LOCAL 12	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,446546	,"Longitude":	-70,762705	,"Stock":	"NO"}
{"Nombre":	FARMAEXPRESS	"Direccion":	AV. PRESIDENTE BALMACEDA 2630, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,42764	,"Longitude":	-70,67403	,"Stock":	"SI"}
{"Nombre":	FARMALILA	"Direccion":	AV. PRESIDENTE SALVADOR ALLENDE 523	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,495079	,"Longitude":	-70,637248	,"Stock":	"NO"}
{"Nombre":	FARMADESCUENTO S.P.A.	"Direccion":	RAUL LABBE 13723, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,361859	,"Longitude":	-70,506028	,"Stock":	"NO"}
{"Nombre":	ACEVEDO	"Direccion":	EXEQUIEL FERNANDEZ 175, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45595	,"Longitude":	-70,59989	,"Stock":	"SI"}
{"Nombre":	COPIHUE	"Direccion":	NAZARIO CHACON ZAMORA 7495, LOCALES 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,521967	,"Longitude":	-70,577284	,"Stock":	"SI"}
{"Nombre":	FARMAS	"Direccion":	AV. LOS LIBERTADORES 341	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,679734	,"Longitude":	-70,980203	,"Stock":	"SI"}
{"Nombre":	FARMAIDEAL	"Direccion":	AVENIDA 10 DE JULIO 229	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4512	,"Longitude":	-70,6338	,"Stock":	"NO"}
{"Nombre":	BUSTAMANTE	"Direccion":	AVENIDA EL OLIMPO 896	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,52044	,"Longitude":	-70,775319	,"Stock":	"SI"}
{"Nombre":	SANTA LAURA	"Direccion":	SANTA LAURA 1435, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,40577	,"Longitude":	-70,66105	,"Stock":	"NO"}
{"Nombre":	SANTIAGO	"Direccion":	CORONEL 8623B, VILLA SERRANO	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,541954	,"Longitude":	-70,615665	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. ALCALDE CASTILLO VELASCO 8751, PORTAL LA REINA	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,451346	,"Longitude":	-70,540876	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PORTUGAL 46, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44111	,"Longitude":	-70,63922	,"Stock":	"SI"}
{"Nombre":	CRUCES	"Direccion":	CARLOS ACHARÁN N° 1360	"Region":	LOS RIOS	,"Comuna":	MARIQUINA	,"Latitude":	-39,539893	,"Longitude":	-72,962768	,"Stock":	"SI"}
{"Nombre":	CLINICA CHILLAN	"Direccion":	PEDRO AGUIRRE CERDA N° 35, 1ER PISO	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61481913	,"Longitude":	-72,1075954	,"Stock":	"NO"}
{"Nombre":	FARMACIA MIMIZA	"Direccion":	ARTURO PRAT N°2599 SAN JAVIER	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,594582	,"Longitude":	-71,733838	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	RAFAEL CASANOVA N°412 (EX N°344)	"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64178588	,"Longitude":	-71,36979197	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA ORTUZAR 314	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,3860932	,"Longitude":	-72,003485	,"Stock":	"NO"}
{"Nombre":	FARMACIA ROMERAL	"Direccion":	AVENIDA QUILVO N°620 ROMERAL	"Region":	MAULE	,"Comuna":	ROMERAL	,"Latitude":	-34,952979	,"Longitude":	-71,124923	,"Stock":	"SI"}
{"Nombre":	FARMACIA DOCTOR FARMA	"Direccion":	AVENIDA 18 DE SEPTIEMBRE, CHéPICA	"Region":	OHIGGINS	,"Comuna":	CHEPICA	,"Latitude":	-34,72744656	,"Longitude":	-71,27391203	,"Stock":	"SI"}
{"Nombre":	DEL RANCO	"Direccion":	CONCEPCIÓN N° 341, LOCAL 3	"Region":	LOS RIOS	,"Comuna":	LAGO RANCO	,"Latitude":	-40,32444	,"Longitude":	-72,4829	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	SAN MARTÍN N° 98	"Region":	LOS RIOS	,"Comuna":	LOS LAGOS	,"Latitude":	-39,86163936	,"Longitude":	-72,81548257	,"Stock":	"NO"}
{"Nombre":	EKONOFARMACIAS	"Direccion":	AV. DIVINA PROVIDENCIA 92, LLOLLEO	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6128849	,"Longitude":	-71,6183453	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIG FARMA	"Direccion":	ANIBAL PINTO N° 534	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,826004	,"Longitude":	-73,049884	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE SANTA JUANA	"Direccion":	IRARRAZABAL N° 297	"Region":	BIOBIO	,"Comuna":	SANTA JUANA	,"Latitude":	-37,176389	,"Longitude":	-72,938365	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI 295	"Direccion":	IGNACIO ZENTENO Nº 1353	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5814682	,"Longitude":	-73,1235637	,"Stock":	"SI"}
{"Nombre":	FARMAES	"Direccion":	BILBAO 1860, OFICINA 102	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57646654	,"Longitude":	-73,11829202	,"Stock":	"SI"}
{"Nombre":	FARMALOOP	"Direccion":	AVENIDA PRíNCIPE DE GALES 6273	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,43817	,"Longitude":	-70,5676	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AMERICO VESPUCIO 925, LOCAL 8, INTERIOR LIDER	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,46331	,"Longitude":	-70,57457	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PROVIDENCIA 2128, LOCAL 3 Y 2132, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4222	,"Longitude":	-70,61111	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	PALMIRA ROMANO 1230, LOCAL 10	"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-33,0163834	,"Longitude":	-71,2722678	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL HERBARIO DE CALBUCO	"Direccion":	ERNESTO RIQUELME 125 CALBUCO	"Region":	LOS LAGOS	,"Comuna":	CALBUCO	,"Latitude":	-41,7696522	,"Longitude":	-73,1280655	,"Stock":	"NO"}
{"Nombre":	HERBALMED	"Direccion":	THOMPSON 601	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,214904	,"Longitude":	-70,149103	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JOSE MANUEL INFANTE 927	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43969	,"Longitude":	-70,62151	,"Stock":	"SI"}
{"Nombre":	FARMACIA SOLUFARMA	"Direccion":	AVENIDA BALMACEDA Nº438-A CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,997102	,"Longitude":	-71,248139	,"Stock":	"SI"}
{"Nombre":	ALHUE	"Direccion":	21 DE MAYO 423, L-1 Y 2	"Region":	METROPOLITANA	,"Comuna":	ALHUE	,"Latitude":	-34,03184	,"Longitude":	-71,10049	,"Stock":	"NO"}
{"Nombre":	ARMONIA	"Direccion":	PASAJE SANTA CATALINA 271-A, LOCALES 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,196	,"Longitude":	-70,67777	,"Stock":	"SI"}
{"Nombre":	FARMAGRAN	"Direccion":	AVENIDA LAS PARCELAS 4085	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,47289	,"Longitude":	-70,7294	,"Stock":	"NO"}
{"Nombre":	EBEN EZER	"Direccion":	ESTADOS UNIDOS 1299	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,4314	,"Longitude":	-70,73772	,"Stock":	"NO"}
{"Nombre":	CHILE	"Direccion":	MERCED 618	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43807	,"Longitude":	-70,64611	,"Stock":	"SI"}
{"Nombre":	B&S	"Direccion":	PARCELA 18B, RUTA G730, LOTE A, LOCAL 1, SECTOR SANTA EMILIA	"Region":	METROPOLITANA	,"Comuna":	MARIA PINTO	,"Latitude":	-33,52113	,"Longitude":	-71,14516	,"Stock":	"SI"}
{"Nombre":	FARMACIA MASSALUD SPA	"Direccion":	GENERAL URRUTIA N° 605 LICAN RAY	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,488442	,"Longitude":	-72,158859	,"Stock":	"SI"}
{"Nombre":	EL REMEDIO	"Direccion":	LA MAMPARA 182, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,46219	,"Longitude":	-70,73552	,"Stock":	"NO"}
{"Nombre":	BRALE	"Direccion":	LONGITUDINAL 4717	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,47855	,"Longitude":	-70,74926	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AV. IRARRAZAVAL 2704, L-3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45408	,"Longitude":	-70,60317	,"Stock":	"NO"}
{"Nombre":	Skol	"Direccion":	AV. IRARÁZAVAL 635	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45289	,"Longitude":	-70,62404	,"Stock":	"NO"}
{"Nombre":	BASTIAN	"Direccion":	ALEJANDRO GUZMAN 1082	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,55652	,"Longitude":	-70,66161	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA KENNEDY 5601, LOCALES L-2-L18	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40119	,"Longitude":	-70,57541	,"Stock":	"SI"}
{"Nombre":	SOLIDARIA MOVIL	"Direccion":	JOSÉ FRANCISCO VERGARA 450	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36886	,"Longitude":	-70,73205	,"Stock":	"SI"}
{"Nombre":	LAS ANIMAS CENTRO	"Direccion":	CHACABUCO N° 320	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81296931	,"Longitude":	-73,24495248	,"Stock":	"NO"}
{"Nombre":	ECO FARMACIAS	"Direccion":	AVENIDA IRRARAZAVAL 2879	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45483	,"Longitude":	-70,60114	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PRESIDENTE KENNEDY 5601, LOCAL L2-22	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40113	,"Longitude":	-70,57539	,"Stock":	"NO"}
{"Nombre":	ALHELÍ	"Direccion":	AV LIBERTAD N°45 L-20 Y N° 53 L-21 EDIF PLENOCENTRO	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02207027	,"Longitude":	-71,5515935	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AV. AMéRICO VESPUCIO 1737, LOCALES BE1097, BE1101, INTERIOR MALL PLAZA NORTE	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,36453	,"Longitude":	-70,67828	,"Stock":	"SI"}
{"Nombre":	POLICLINICO CONAC	"Direccion":	EDUARDO LEFORT N°1638	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,660025	,"Longitude":	-70,3949386	,"Stock":	"SI"}
{"Nombre":	FARMACIA GENÉRICA	"Direccion":	MANUEL MONTT N° 460 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,027102	,"Longitude":	-73,147234	,"Stock":	"SI"}
{"Nombre":	LA BOTICA PENQUISTA	"Direccion":	MAIPU N° 583 LOCAL 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,824831	,"Longitude":	-73,052715	,"Stock":	"NO"}
{"Nombre":	LA BOTICA DOÑA VANESA	"Direccion":	PRINCIPAL SITIO 1, PARCELA 2B, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	PIRQUE	,"Latitude":	-33,70176586	,"Longitude":	-70,5629148	,"Stock":	"SI"}
{"Nombre":	EL PRINCIPAL	"Direccion":	PRINCIPAL 19, LOCAL 8	"Region":	METROPOLITANA	,"Comuna":	PIRQUE	,"Latitude":	-33,70308919	,"Longitude":	-70,56422584	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	ANIBAL PINTO N° 311	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,828196	,"Longitude":	-73,048844	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMALUZ	"Direccion":	LINCOYAN N° 1089 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,822041	,"Longitude":	-73,057672	,"Stock":	"SI"}
{"Nombre":	FARMACIA ANDES	"Direccion":	34 SUR 5 PONIENTE, 1629	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,45190884	,"Longitude":	-71,68247079	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMADERM	"Direccion":	5 ORIENTE Nº1166 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42688526	,"Longitude":	-71,65973292	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOVAVIDA	"Direccion":	AVENIDA ESPERANZA Nº41 LOCAL 2 Y 3 SAGRADA FAMILIA	"Region":	MAULE	,"Comuna":	SAGRADA FAMILIA	,"Latitude":	-35,00095	,"Longitude":	-71,384821	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. AMIGO	"Direccion":	DIEGO PORTALES 878	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0465129	,"Longitude":	-71,4413327	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. BENIDORM 916 CASA 62	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0086009	,"Longitude":	-71,5459088	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA BALMACEDA 1350	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,912798	,"Longitude":	-71,250473	,"Stock":	"NO"}
{"Nombre":	FARMACIA NUEVA NATURA	"Direccion":	AV. VALPARAÍSO 499	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0443594	,"Longitude":	-71,3713385	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	8 SUR 30 ORIENTE Nº3035	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,440775	,"Longitude":	-71,632449	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUNTO A TI	"Direccion":	12 NORTE Nº1473	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,412701	,"Longitude":	-71,653099	,"Stock":	"SI"}
{"Nombre":	VIDASOLMAR	"Direccion":	CAMINO MELIPILLA 7022	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,5803371	,"Longitude":	-70,8298055	,"Stock":	"NO"}
{"Nombre":	BIOCUBA	"Direccion":	PEDRO DE VALDIVIA N°331	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4265763	,"Longitude":	-70,6135626	,"Stock":	"SI"}
{"Nombre":	FARMACIA NAHUEN	"Direccion":	CALLE SARGENTO ALDEA Nº510	"Region":	VALPARAISO	,"Comuna":	NOGALES	,"Latitude":	-32,7383818	,"Longitude":	-71,2009702	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM SAN ISIDRO CALINGASTA	"Direccion":	18 DE SEPTIEMBRE 101	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":	1	,"Longitude":	1	,"Stock":	"NO"}
{"Nombre":	FARMACEUTICA CHILOE	"Direccion":	SARGENTO CANDELARIA N°371	"Region":	LOS LAGOS	,"Comuna":	CHONCHI	,"Latitude":	-42,622067	,"Longitude":	-73,779608	,"Stock":	"SI"}
{"Nombre":	SANA SANA	"Direccion":	AV. CONCON REÑACA 296	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9339498	,"Longitude":	-71,5316035	,"Stock":	"SI"}
{"Nombre":	FARMAGENTE	"Direccion":	NAPOLEON 2943, OF.1-B	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41841	,"Longitude":	-70,59874	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA JOSÉ ALCALDE DÉLANO N° 10533, LOCAL 112	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35685	,"Longitude":	-70,53999	,"Stock":	"NO"}
{"Nombre":	CHICUREO	"Direccion":	SANTA ELENA 103, L-3	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,22453	,"Longitude":	-70,72636	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	COVADONGA N° 337	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59499	,"Longitude":	-70,7024	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN ISIDRO 12 Y 14	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4426	,"Longitude":	-70,64477	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV.LAS CONDES 12265, L 56	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3728	,"Longitude":	-70,51781	,"Stock":	"SI"}
{"Nombre":	CARRASCAL	"Direccion":	AVENIDA CARRASCAL N° 6020	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4162	,"Longitude":	-70,71226	,"Stock":	"SI"}
{"Nombre":	COOPERCARAB	"Direccion":	ENRIQUE MAC IVER 245	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43977	,"Longitude":	-70,64661	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	COLON N° 200 LOCAL 6	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71287	,"Longitude":	-73,11435	,"Stock":	"NO"}
{"Nombre":	MEKI	"Direccion":	AV. EL SALTO 4001, L-8	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,39233	,"Longitude":	-70,62391	,"Stock":	"SI"}
{"Nombre":	VECINAL ASFAR	"Direccion":	AV. IRARRÁZAVAL 2584	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45409	,"Longitude":	-70,60409	,"Stock":	"NO"}
{"Nombre":	COYHAIQUE	"Direccion":	AVENIDA VITACURA 5480	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,39428	,"Longitude":	-70,57905	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA AMANDINA PINO	"Direccion":	FRANCISCO BARROS N°203	"Region":	ÑUBLE	,"Comuna":	COELEMU	,"Latitude":	-36,490083	,"Longitude":	-72,704229	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	IGNACIO CARRERA PINTO 70	"Region":	BIOBIO	,"Comuna":	NEGRETE	,"Latitude":	-37,585264	,"Longitude":	-72,530731	,"Stock":	"SI"}
{"Nombre":	NUEVA VIDA	"Direccion":	AV. JOSE JOAQUIN PEREZ 7438 A	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,43003	,"Longitude":	-70,74049	,"Stock":	"SI"}
{"Nombre":	CHILENA	"Direccion":	GALILEO 1610	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,498181	,"Longitude":	-70,728467	,"Stock":	"NO"}
{"Nombre":	FARMAUNIDAS	"Direccion":	MANUEL ANTONIO TOCORNAL 602	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45056	,"Longitude":	-70,63986	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	VICUÑA MACKENNA 887 L3	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0478168	,"Longitude":	-71,4444914	,"Stock":	"NO"}
{"Nombre":	FARMAUNIÓN	"Direccion":	LIRA 108	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44373	,"Longitude":	-70,64079	,"Stock":	"NO"}
{"Nombre":	MEDIAHORRO	"Direccion":	DIAGONAL CERVANTES 753	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43432	,"Longitude":	-70,64923	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AV. VICUÑA MACKENNA 1085	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4553343	,"Longitude":	-70,6322908	,"Stock":	"SI"}
{"Nombre":	FARMILIA FARMACIA	"Direccion":	AV.PORTALES 2143, L-C12345	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5187291	,"Longitude":	-70,7880361	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. MATTA Nº 712	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04058696	,"Longitude":	-71,59055438	,"Stock":	"NO"}
{"Nombre":	FONTOVA	"Direccion":	PEDRO FONTOVA 4625	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3849	,"Longitude":	-70,67171	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N° 1020, LOCAL 44	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44403	,"Longitude":	-70,65028	,"Stock":	"NO"}
{"Nombre":	FARMACIA PUNTA DE LOBOS	"Direccion":	COMERCIO 2241	"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,40562344	,"Longitude":	-72,02577577	,"Stock":	"NO"}
{"Nombre":	FARMACIA RED FARMA	"Direccion":	CARAMPANGUE 492	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5883227	,"Longitude":	-70,9911564	,"Stock":	"SI"}
{"Nombre":	FARMACIA LACKUNTUR	"Direccion":	LA TORRE Nº 1497	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4652962	,"Longitude":	-68,9253516	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. PEDRO AGUIRRE CERDA N°10578	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5458839	,"Longitude":	-70,3917742	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIOCUBA	"Direccion":	AURELIO MANZANO N° 531	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82712	,"Longitude":	-73,05319	,"Stock":	"NO"}
{"Nombre":	FARMALU	"Direccion":	SAN MARTIN 022	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA AVICENA	"Direccion":	BALMACEDA Nº584	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,9655438	,"Longitude":	-72,3175849	,"Stock":	"NO"}
{"Nombre":	FARMACIA OLIVAR	"Direccion":	MANUEL OLEGARIO SOTO Nº 5	"Region":	OHIGGINS	,"Comuna":	OLIVAR	,"Latitude":	-34,20928314	,"Longitude":	-70,80463934	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA	"Direccion":	SANTA SARA LOTE UNO PENCAHUE	"Region":	MAULE	,"Comuna":	PENCAHUE	,"Latitude":	-35,396849	,"Longitude":	-71,799171	,"Stock":	"SI"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	BARROS ARANA N° 541	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82693	,"Longitude":	-73,05201	,"Stock":	"SI"}
{"Nombre":	MI FARMA	"Direccion":	AVENIDA SAN JUAN 767, MACHALÍ	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,17395	,"Longitude":	-70,68895	,"Stock":	"SI"}
{"Nombre":	FARMACARE	"Direccion":	AVENIDA IRARRáZAVAL 2150, LOCAL 2A	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45343	,"Longitude":	-70,60846	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMATERRA	"Direccion":	AV. CANCHA RAYADA N° 419, L. 1-2, STRIPCENTER LA CHIMBA	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,351455	,"Longitude":	-70,351977	,"Stock":	"SI"}
{"Nombre":	FARMAETIKA	"Direccion":	AVENIDA APOQUINDO 7016, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40666	,"Longitude":	-70,55662	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN PABLO	"Direccion":	COVADONGA N° 316	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,80163	,"Longitude":	-73,39856	,"Stock":	"NO"}
{"Nombre":	FARMACIA VICHUQUÉN	"Direccion":	CALLE COMERCIO Nº389 VICHUQUÉN	"Region":	MAULE	,"Comuna":	VICHUQUEN	,"Latitude":	-34,884832	,"Longitude":	-71,99408	,"Stock":	"SI"}
{"Nombre":	FARMACIA MERCADOFARMA	"Direccion":	AVENIDA CIRCUNVALACIÓN ORIENTE Nº1330, LOCAL 1 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,431136	,"Longitude":	-71,62717	,"Stock":	"SI"}
{"Nombre":	UNIDAS	"Direccion":	AVENIDA 5 DE ABRIL 171, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51024	,"Longitude":	-70,75953	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	QUILLOTA 0141	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0249152	,"Longitude":	-71,5488207	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	MERINO JARPA N° 552	"Region":	ATACAMA	,"Comuna":	CHAÑARAL	,"Latitude":	-26,3464687	,"Longitude":	-70,6216112	,"Stock":	"SI"}
{"Nombre":	REINOSO	"Direccion":	SAN JOSé DE LA ESTRELLA N°392-A	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,55368	,"Longitude":	-70,59121	,"Stock":	"NO"}
{"Nombre":	EMPORIO FARMA AUSTRAL	"Direccion":	RUTA 7 KM 7, LOTE A LOCAL 9 CENTRO COMERCIAL CHAMIZA	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,48336819	,"Longitude":	-72,8468896	,"Stock":	"NO"}
{"Nombre":	FARMACIA LINARES CENTRO	"Direccion":	MAIPU Nº615, LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84615	,"Longitude":	-71,594324	,"Stock":	"SI"}
{"Nombre":	FARMACIA COPEL	"Direccion":	BUENOS AIRES Nº454	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,13123	,"Longitude":	-71,818659	,"Stock":	"SI"}
{"Nombre":	BLANCA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 7473	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,52367	,"Longitude":	-70,66082	,"Stock":	"SI"}
{"Nombre":	HERRERA	"Direccion":	AVENIDA EL ROSAL 6361, LOCAL 01	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,47943	,"Longitude":	-70,7572	,"Stock":	"NO"}
{"Nombre":	REAL	"Direccion":	AVENIDA INDEPENDENCIA 1447, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41355	,"Longitude":	-70,65781	,"Stock":	"SI"}
{"Nombre":	PUNTOSALUD	"Direccion":	CORTEZ N° 78-B	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,75281	,"Longitude":	-70,90294	,"Stock":	"NO"}
{"Nombre":	HERRERA	"Direccion":	AVENIDA CONCHA Y TORO N° 1477, LOCALES 8 Y 9	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59699	,"Longitude":	-70,57672	,"Stock":	"NO"}
{"Nombre":	PHARMACENTER	"Direccion":	AVENIDA INDEPENDENCIA 802, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,42187	,"Longitude":	-70,65575	,"Stock":	"SI"}
{"Nombre":	FARMACIA ANDALUÉ	"Direccion":	AV. EL VENADO N° 620 L 3A-3	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,84768457	,"Longitude":	-73,09289228	,"Stock":	"SI"}
{"Nombre":	FARMACIA TUNQUÉN	"Direccion":	AVENIDA ISIDORO DUBOURNAIS Nº 92, LOCAL 5	"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,39525624	,"Longitude":	-71,6944292	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMANOVA	"Direccion":	CENTENARIO Nº 176	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,58009	,"Longitude":	-71,6107	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	BANDERA 605, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-3343615	,"Longitude":	-7065262	,"Stock":	"SI"}
{"Nombre":	MOLYFARMA	"Direccion":	PRIMERO DE MAYO 610	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-3367894	,"Longitude":	-7099123	,"Stock":	"NO"}
{"Nombre":	FARMACIA ORIENTE	"Direccion":	CIENFUEGOS 496	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	1	,"Longitude":	1	,"Stock":	"NO"}
{"Nombre":	SOLUFAR	"Direccion":	HUELEN 15	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43104768	,"Longitude":	-70,62341297	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDNORTE	"Direccion":	ELEUTERIO RAMIREZ N° 1340	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2208793	,"Longitude":	-70,1494826	,"Stock":	"SI"}
{"Nombre":	OLGUITA	"Direccion":	DIEGO SILVA HENRIQUEZ N° 1456	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,38367	,"Longitude":	-70,67033	,"Stock":	"SI"}
{"Nombre":	FARMALISTO	"Direccion":	AVENIDA LA DEHESA N° 1844, LOCAL 109	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35509	,"Longitude":	-33,5186	,"Stock":	"NO"}
{"Nombre":	CHARME	"Direccion":	AV. LO BARNECHEA 1445, L-1	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35574	,"Longitude":	-70,50673	,"Stock":	"SI"}
{"Nombre":	TU AHORRO	"Direccion":	AMUNATEGUI 75, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44291	,"Longitude":	-70,65587	,"Stock":	"NO"}
{"Nombre":	PHARMA ISA	"Direccion":	COLO COLO 961	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36833	,"Longitude":	-70,76053	,"Stock":	"NO"}
{"Nombre":	FARMACIA HIGUERAS	"Direccion":	ALTO HORNO N° 714	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,74036	,"Longitude":	-73,10812	,"Stock":	"SI"}
{"Nombre":	FARMAHOGAR	"Direccion":	ARGOMEDO 439	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45012	,"Longitude":	-70,63952	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PROFESOR ZAÑARTU 1121, LOCAL 1E	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41755	,"Longitude":	-70,6548	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	14 NORTE 976 L-34 JUMBO	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0097828	,"Longitude":	-71,5457297	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DOCTOR SIMI	"Direccion":	CRISTINO WINKLER N°410	"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,12581	,"Longitude":	-73,05809	,"Stock":	"SI"}
{"Nombre":	FARMACIA SOLE	"Direccion":	CALLE NUEVA PONIENTE 885	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57797695	,"Longitude":	-73,17222392	,"Stock":	"NO"}
{"Nombre":	FARMAPUEBLO	"Direccion":	ARLEGUI 501 L-1 PISO 1 EDIFICIO LIMARí	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0233987	,"Longitude":	-71,5551947	,"Stock":	"NO"}
{"Nombre":	FARMACIA CONAC CONCEPCIÓN	"Direccion":	CAUPOLICAN N° 518 OFICINA 301	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82646	,"Longitude":	-73,05121	,"Stock":	"SI"}
{"Nombre":	DOCTOR DEL DR. SIMI	"Direccion":	CALLE ARIZTÍA  205	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60054601	,"Longitude":	-71,19802844	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	PEDRO FELIX VICUÑA 268, LOCAL 2	"Region":	VALPARAISO	,"Comuna":	NOGALES	,"Latitude":	-32,7351239	,"Longitude":	-71,2013612	,"Stock":	"SI"}
{"Nombre":	SOFIA 3	"Direccion":	Benjamin Vicuña Mackenna 908	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,479663	,"Longitude":	-70,3103	,"Stock":	"NO"}
{"Nombre":	BOTICA CENTRO ASISTENCIAL DE ÑUñOA	"Direccion":	AVENIDA GRECIA 3980	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4648	,"Longitude":	-70,59004	,"Stock":	"SI"}
{"Nombre":	FARMACIA DOCTOR SIMI	"Direccion":	ALBERTO SOLARI N°1400 LOCAL 232 236 Y 240	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9121409	,"Longitude":	-71,2571362	,"Stock":	"NO"}
{"Nombre":	HERMES	"Direccion":	AVENIDA LIBERTADOR BERNARDO O´HIGGINS N° 3333, ESTACIóN CENTRAL	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45071	,"Longitude":	-70,67989	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL CACHAPOAL	"Direccion":	RUTA TRAVESIA EX RUTA 5 SUR N° 480	"Region":	OHIGGINS	,"Comuna":	OLIVAR	,"Latitude":	-34,2027033	,"Longitude":	-70,7617481	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLINICA ELQUI	"Direccion":	AV EL SANTO 1475	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. EMILIO SCHAFFHAUSER ACUÑA	"Direccion":	COLON 227	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA COSTA NORTE	"Direccion":	AV. ARGENTINA N°2370	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6543302	,"Longitude":	-70,3946978	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALI SPA	"Direccion":	ESTER PIZARRO PEREZ 1253	"Region":	ANTOFAGASTA	,"Comuna":	MEJILLONES	,"Latitude":	-23,105562	,"Longitude":	-70,443409	,"Stock":	"SI"}
{"Nombre":	SANTOS	"Direccion":	ARTURO PRAT # 694	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61156189	,"Longitude":	-72,10286669	,"Stock":	"NO"}
{"Nombre":	PEHUEN	"Direccion":	PORTALES 205, L- 6 Y 7	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51612	,"Longitude":	-70,7594	,"Stock":	"NO"}
{"Nombre":	RORAIMA	"Direccion":	SANTA ROSA 222	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44652	,"Longitude":	-70,64512	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. VITACURA 6195, L-82	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,39046	,"Longitude":	-70,57121	,"Stock":	"SI"}
{"Nombre":	ECUAFARMA	"Direccion":	CALLE ORTúZAR N°801, MELIPILLA	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,68937	,"Longitude":	-71,21548	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N°3750, ESTACIóN CENTRAL	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45338	,"Longitude":	-70,68664	,"Stock":	"NO"}
{"Nombre":	PILBOX	"Direccion":	AV. QUILIN 3700	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	SALUDFARMA	"Direccion":	MIGUEL áNGEL 1310, PUENTE ALTO	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,58349	,"Longitude":	-70,59677	,"Stock":	"NO"}
{"Nombre":	FARMAHELP	"Direccion":	PASAJE LOS ARTILLEROS N° 715	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,52146	,"Longitude":	-70,76923	,"Stock":	"NO"}
{"Nombre":	FARMACIA BELMONTE	"Direccion":	MANUEL MONTT Nº568-B	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,982748	,"Longitude":	-71,242597	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMA MAYRA	"Direccion":	LAZCANO Nº 270	"Region":	ARAUCANIA	,"Comuna":	CHOL CHOL	,"Latitude":	-38,6008949	,"Longitude":	-72,84489329	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA	"Direccion":	12 DE FEBRERO 362, HUEPIL	"Region":	BIOBIO	,"Comuna":	TUCAPEL	,"Latitude":	-37,239078	,"Longitude":	-71,941716	,"Stock":	"SI"}
{"Nombre":	FARMACIA EPUFARMA	"Direccion":	LOS QUIMICOS Nº55, LOCAL 3 Y 4	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,71805092	,"Longitude":	-72,65029144	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIA	"Direccion":	PEDRO MONTT 1868	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04684014	,"Longitude":	-71,61789603	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. BRASIL 1303 L-1A	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0437201	,"Longitude":	-71,6223719	,"Stock":	"NO"}
{"Nombre":	APOTECARIA	"Direccion":	CAMINO NOS A LOS MORROS N° 565, LOCAL 11	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,63964	,"Longitude":	-70,70315	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR CURACAUTÍN	"Direccion":	SERRANO Nº 295	"Region":	ARAUCANIA	,"Comuna":	CURACAUTIN	,"Latitude":	-38,43848519	,"Longitude":	-71,89055542	,"Stock":	"SI"}
{"Nombre":	FARMACIA TU DOSIS	"Direccion":	AVENIDA SAN MARTÍN Nº 3	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16500201	,"Longitude":	-70,74555894	,"Stock":	"SI"}
{"Nombre":	FARMASMART	"Direccion":	AVDA. ECUADOR 4583	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45283	,"Longitude":	-70,6976	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTICA DE REQUíNOA	"Direccion":	COMERCIO 162	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":	-34,2862522	,"Longitude":	-70,81584498	,"Stock":	"NO"}
{"Nombre":	FARMACIA OLIFARMA	"Direccion":	AV. JOSé HIPóLITO SALAS N°112	"Region":	OHIGGINS	,"Comuna":	OLIVAR	,"Latitude":	-34,2098064	,"Longitude":	-70,8220757	,"Stock":	"SI"}
{"Nombre":	MELIPILLA	"Direccion":	SERRANO 323	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,68415	,"Longitude":	-71,2136	,"Stock":	"NO"}
{"Nombre":	FARMACIA PURAPHARMA	"Direccion":	AVDA COLIN	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,440765	,"Longitude":	-71,683124	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA	"Direccion":	MANUEL MONTT Nº455 LOCAL 123	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,982103	,"Longitude":	-71,241932	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	O´HIGGINS N° 1107	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82493	,"Longitude":	-73,04423	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MANUEL BULNES Nº 270	"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,3660115	,"Longitude":	-72,6355132	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIG FARMA	"Direccion":	MAIPÚ N° 808	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,823766	,"Longitude":	-73,049785	,"Stock":	"NO"}
{"Nombre":	DAMYFAR	"Direccion":	SAN ANTONIO 264	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43961	,"Longitude":	-70,64819	,"Stock":	"SI"}
{"Nombre":	GO FARMA	"Direccion":	CAMINO INTERIOR LOS GUINDOS N° 980, LOTE 54, LOCALES 1 Y 2	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,68445	,"Longitude":	-70,9155	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA VIRGINIA SUBERCASEAUX N° 447, LOCAL 2, EL LLANO	"Region":	METROPOLITANA	,"Comuna":	PIRQUE	,"Latitude":	-33,63685	,"Longitude":	-70,57647	,"Stock":	"NO"}
{"Nombre":	FARMACIA M Y N	"Direccion":	AVENIDA CARLOS FRESNO Nº 564	"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,2899698	,"Longitude":	-71,3095766	,"Stock":	"SI"}
{"Nombre":	ANDRADE	"Direccion":	GAMERO 1798	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,42193	,"Longitude":	-70,66431	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AV. CENTRAL RAúL SILVA HENRíQUEZ 8115, L-4	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,52041	,"Longitude":	-70,69613	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. 5 DE ABRIL 19	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51007	,"Longitude":	-70,75805	,"Stock":	"NO"}
{"Nombre":	GLOBAL	"Direccion":	Avenida Francisco Bilbao 1412, locales I y J	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6107617	,"Longitude":	-70,88077	,"Stock":	"SI"}
{"Nombre":	FARMALLANO	"Direccion":	TUCAPEL JIMéNEZ 56, SANTIAGO	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44369	,"Longitude":	-70,65906	,"Stock":	"NO"}
{"Nombre":	GEMINIS	"Direccion":	SANTA RAQUEL 10390, L- A6	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,55316	,"Longitude":	-70,60189	,"Stock":	"NO"}
{"Nombre":	CALIDAD TOTAL	"Direccion":	Tucapel 2324	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4770831	,"Longitude":	-70,2920683	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. VALPARAISO 411 L-1	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0242192	,"Longitude":	-71,5567264	,"Stock":	"SI"}
{"Nombre":	OCHOA	"Direccion":	AVENIDA PEDRO DE VALDIVIA 3598	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45554	,"Longitude":	-70,605	,"Stock":	"SI"}
{"Nombre":	SOLUFAR	"Direccion":	AVENIDA FERNÁNDEZ ALBANO 2663	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,50907	,"Longitude":	-70,70682	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAP	"Direccion":	PJE. MONTALBAN N° 1251, VILLA O'HIGGINS	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,37256584	,"Longitude":	-70,32630085	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	GOBERNADOR CARLOS BORIES 950 - 958	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,16140981	,"Longitude":	-70,90795057	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AVENIDA EDUARDO FREI MONTALVA 01110, LOCAL 2	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,14386433	,"Longitude":	-70,92396956	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	MANUEL BULNES 599	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,72733038	,"Longitude":	-72,50326364	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA EDUARDO FREI MONTALVA 01110	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1438203	,"Longitude":	-70,9240023	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	AVENIDA ESPAÑA 01377 A	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,13872279	,"Longitude":	-70,89258884	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA ESPAÑA 01358	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,138061	,"Longitude":	-70,8916885	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Pedro Aguirre Cerda 1010 local 3 - 4	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4832629	,"Longitude":	-70,3053096	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L- 769	"Direccion":	CAMILO HENRÍQUEZ Nº515 L-1	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2820171	,"Longitude":	-72,2275654	,"Stock":	"NO"}
{"Nombre":	FARMACIAS SANTA MARÍA L-1	"Direccion":	GENERAL ALDUNATE Nº490	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73855173	,"Longitude":	-72,58781641	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL CANELO	"Direccion":	CALLE BENAVENTE 820	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4719458	,"Longitude":	-72,9477291	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL DR. PATRICIO BLANCO	"Direccion":	BUIN Nº300	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,141498	,"Longitude":	-71,819984	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL CHAITéN	"Direccion":	DIEGO PORTALES 141	"Region":	LOS LAGOS	,"Comuna":	CHAITEN	,"Latitude":	-42,9190524	,"Longitude":	-72,7114079	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AV. VALPARAISO 1070 L-2112	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0259251	,"Longitude":	-71,5474757	,"Stock":	"NO"}
{"Nombre":	LA PÓCIMA	"Direccion":	ROMÁN DIAZ N° 63	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43089	,"Longitude":	-70,6224	,"Stock":	"SI"}
{"Nombre":	DONKEY DOC	"Direccion":	BATALLÓN CHACABUCO N° 03262, LOCALES 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,59022	,"Longitude":	-70,61493	,"Stock":	"NO"}
{"Nombre":	FARMACIA VECINA RIO NEGRO	"Direccion":	CALLE ARTURO PRAT N 768, RIO NEGRO	"Region":	LOS LAGOS	,"Comuna":	RIO NEGRO	,"Latitude":	-40,80417427	,"Longitude":	-73,2159106	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	GOBERNADOR CARLOS BORIES 781	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1597183	,"Longitude":	-70,9058569	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA BULNES 02235	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,13184261	,"Longitude":	-70,87918679	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	GOBERNADOR CARLOS BORIES 990 - 998	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1616125	,"Longitude":	-70,908493	,"Stock":	"SI"}
{"Nombre":	VALGAL	"Direccion":	CALLE MIGUEL áNGEL N°1908	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,58432	,"Longitude":	-70,60381	,"Stock":	"NO"}
{"Nombre":	M Y D	"Direccion":	AVENIDA AMéRICO VESPUCIO 276	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,48592	,"Longitude":	-70,75199	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA APOQUINDO 3910, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41498	,"Longitude":	-70,58959	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	LATORRE Nº 13	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0440952	,"Longitude":	-71,3739364	,"Stock":	"NO"}
{"Nombre":	TODOFARMA	"Direccion":	AVENIDA MANQUEHUE SUR 031, LOCAL 100	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40956	,"Longitude":	-70,56687	,"Stock":	"SI"}
{"Nombre":	ECOPHARMA	"Direccion":	PEDRO DE OñA 031	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45304	,"Longitude":	-70,62945	,"Stock":	"SI"}
{"Nombre":	DRUGSTORE	"Direccion":	Avenida Vicuña Mackenna 1545, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6102296	,"Longitude":	-70,8745778	,"Stock":	"SI"}
{"Nombre":	MAXIPHARMA SPA	"Direccion":	LORD COCHRANE 166	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44811	,"Longitude":	-70,65493	,"Stock":	"NO"}
{"Nombre":	DR SIMI SAN PEDRO DE LA PAZ	"Direccion":	LAGUNA GRANDE 115 LOCAL 4 Y 5	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,838813	,"Longitude":	-73,119064	,"Stock":	"SI"}
{"Nombre":	DYLAN	"Direccion":	AVENIDA LA ESTRELLA N° 1099	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,43809	,"Longitude":	-70,75249	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL NATALES	"Direccion":	ESMERALDA 650	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":	-51,72810014	,"Longitude":	-72,50180599	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL NATALES	"Direccion":	AVENIDA ESPAÑA 1650	"Region":	MAGALLANES	,"Comuna":	PUERTO NATALES	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA CLÍNICA REDSALUD MAGALLANES	"Direccion":	AVENIDA BULNES 01448	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA SALUD MENTAL	"Direccion":	LAS HERAS 825, PUNTA ARENAS	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL COMUNITARIO PORVENIR "DR. MARCOS CHAMORRO IGLESIAS"	"Direccion":	CARLOS WOOD 480	"Region":	MAGALLANES	,"Comuna":	PORVENIR	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL SUR	"Direccion":	ZENTENO 2850	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1741269	,"Longitude":	-70,9362821	,"Stock":	"SI"}
{"Nombre":	FARMACIAS NACIONAL	"Direccion":	AVENIDA LAGUNA SUR 8333	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,46047	,"Longitude":	-70,74909	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL CLÍNICO DE MAGALLANES	"Direccion":	AVENIDA LOS FLAMENCOS 01364	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL NORTE	"Direccion":	SUIZA 01441	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1429874	,"Longitude":	-70,880779	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	AVENIDA TRES PONIENTE 2600, LOCAL 11	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50429	,"Longitude":	-70,78022	,"Stock":	"SI"}
{"Nombre":	GLORIA	"Direccion":	AVENIDA PEDRO FONTOVA 5650	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,37475	,"Longitude":	-70,67152	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	Serrano 127	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45148882	,"Longitude":	-70,64827493	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	HUéRFANOS 1360	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44021	,"Longitude":	-70,65607	,"Stock":	"SI"}
{"Nombre":	OPENFARMA	"Direccion":	LAS BELLOTAS 292	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42269	,"Longitude":	-70,60718	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O’HIGGINS 3156, LOCAL 010 Y 012	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45082	,"Longitude":	-70,67828	,"Stock":	"NO"}
{"Nombre":	DAMYFAR	"Direccion":	TRINIDAD 30	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,54723184	,"Longitude":	-70,58826078	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	IRARRAZAVAL N°3443, LOCAL N°5	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45573	,"Longitude":	-70,59515	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AGUSTINAS N° 2082	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44216	,"Longitude":	-70,6648	,"Stock":	"SI"}
{"Nombre":	FARMACIA CORDILLERA	"Direccion":	AVENIDA SAN JUAN 804, LOCALES 3 Y 4	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,173069	,"Longitude":	-70,6883405	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	RAUL LABBE 13723, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,36223	,"Longitude":	-70,5061	,"Stock":	"SI"}
{"Nombre":	FALMAFULL	"Direccion":	NUEVA HANNOVER N°5686, LOCAL N°110	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,45158	,"Longitude":	-70,57036	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA ECONOMICA	"Direccion":	URRIOLA Nº 128- A	"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4090319	,"Longitude":	-70,859418	,"Stock":	"NO"}
{"Nombre":	GEOFARMA	"Direccion":	AV. LIBERTAD 39 L-1,2,17 Y 18	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02207594	,"Longitude":	-71,5515922	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	GENERAL BUSTAMANTE 1001	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45383	,"Longitude":	-70,62887	,"Stock":	"SI"}
{"Nombre":	FARMACIA METFARMA	"Direccion":	AVENIDA BALMACEDA 4271	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93834101	,"Longitude":	-71,26201363	,"Stock":	"SI"}
{"Nombre":	FARMACIA ECONOMIK	"Direccion":	SANTIAGO 673, BELLOTO NORTE	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,038325	,"Longitude":	-71,40635	,"Stock":	"NO"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	AVENIDA PROVIDENCIA N° 2411, LOCAL 17	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,41977	,"Longitude":	-70,60557	,"Stock":	"SI"}
{"Nombre":	PURAVIDA	"Direccion":	ESPERANZA N° 1399	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,42917	,"Longitude":	-70,6766	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	AVENIDA MACUL N° 4850	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,49741	,"Longitude":	-70,59711	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL MONTE AGUILA	"Direccion":	CAUPOLICAN 280	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,086261	,"Longitude":	-72,435882	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	O´HIGGINS 620	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,100421	,"Longitude":	-72,561211	,"Stock":	"SI"}
{"Nombre":	CRONOFARMA	"Direccion":	José Victorino Lastarria 1219	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4803254	,"Longitude":	-70,3074188	,"Stock":	"SI"}
{"Nombre":	SAN BENITO DE PALERMO	"Direccion":	Rafael Sotomayor 1524	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4989167	,"Longitude":	-70,3106689	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PUENTE N°689, LOCAL 132	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43523	,"Longitude":	-70,65139	,"Stock":	"SI"}
{"Nombre":	MEDIFARMA	"Direccion":	LA DEHESA N° 1450, LOCAL N° 4	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35873	,"Longitude":	-70,51775	,"Stock":	"NO"}
{"Nombre":	ER	"Direccion":	CALLE LEONORA LATORRE N° 2858	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50699	,"Longitude":	-70,79334	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DOCTOR SIMI	"Direccion":	AV. TENIENTE LUIS CRUZ MARTINEZ N° 54, LOCAL 4	"Region":	VALPARAISO	,"Comuna":	SANTO DOMINGO	,"Latitude":	-33,6605945	,"Longitude":	-71,6235707	,"Stock":	"SI"}
{"Nombre":	FARMACIA Y PERFUMERÍA MI VICTORIA	"Direccion":	AV. LOS CARRERA N° 1160, L. 1	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,370065	,"Longitude":	-70,326431	,"Stock":	"SI"}
{"Nombre":	FARMACIA VENFARMA	"Direccion":	MAIPU N° 580, L. 1	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,364275	,"Longitude":	-70,33242	,"Stock":	"SI"}
{"Nombre":	FARMABIENESTAR SPA	"Direccion":	HOLANDA 286, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42091	,"Longitude":	-70,60296	,"Stock":	"NO"}
{"Nombre":	RIESCO	"Direccion":	AVENIDA PRESIDENTE RIESCO N° 3154-B	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4121936	,"Longitude":	-70,59751439	,"Stock":	"SI"}
{"Nombre":	UNIDAS	"Direccion":	CALLE EYZAGUIRRE N° 699	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59576449	,"Longitude":	-70,70648363	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CALLE LOS CORRALES N° 1512, LOCAL2	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,2215283	,"Longitude":	-70,68693184	,"Stock":	"NO"}
{"Nombre":	FARMACIA LAS ENCINAS	"Direccion":	LAS ENCINAS N°61	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,810305	,"Longitude":	-73,252236	,"Stock":	"SI"}
{"Nombre":	ALPHALAB	"Direccion":	AVENIDA DEL CONDOR 844, OFICINA 401, CIUDAD EMPRESARIAL	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,38943	,"Longitude":	-70,61503	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 5101	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50048	,"Longitude":	-70,65327	,"Stock":	"SI"}
{"Nombre":	LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	AV. AMÉRICO VESPUCIO SUR 33, L-9 Y 10	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,53806	,"Longitude":	-70,66293	,"Stock":	"NO"}
{"Nombre":	NOVASALUD.COM	"Direccion":	BALMACEDA 371, L-101 Y 102	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60807	,"Longitude":	-70,57495	,"Stock":	"SI"}
{"Nombre":	J M	"Direccion":	AV. CARRASCAL 4646	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,42169	,"Longitude":	-70,69788	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DR. SIMI	"Direccion":	SERRANO 266 LOCAL 9-10-11	"Region":	BIOBIO	,"Comuna":	CAÑETE	,"Latitude":	-37,8025675	,"Longitude":	-73,3996717	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL ALTO HOSPICIO	"Direccion":	LOS ALAMOS 3056	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,266169	,"Longitude":	-70,102754	,"Stock":	"SI"}
{"Nombre":	RED FARMA	"Direccion":	ASTORGA 100, LOCAL B	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1666837	,"Longitude":	-70,74273468	,"Stock":	"SI"}
{"Nombre":	FARMA VIÑA	"Direccion":	5 NORTE 430 L-12 Y 13	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0180495	,"Longitude":	-71,5541755	,"Stock":	"SI"}
{"Nombre":	RODIN	"Direccion":	AVENIDA LIBERTAD N° 1348 PISO 6 OFICINA 1	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00852345	,"Longitude":	-71,54821637	,"Stock":	"NO"}
{"Nombre":	FARMACIAS ARAUCANÍA	"Direccion":	ALCAZAR Nº 920 ESQUINA AMUNATEGUI LOCAL 3 PRIMER PISO	"Region":	ARAUCANIA	,"Comuna":	COLLIPULLI	,"Latitude":	-37,9572801	,"Longitude":	-72,4378878	,"Stock":	"SI"}
{"Nombre":	REINA VICTORIA	"Direccion":	ALCALDE MANUEL DE LA LASTRA 2037	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,43578	,"Longitude":	-70,55539	,"Stock":	"NO"}
{"Nombre":	OCHOA	"Direccion":	HERMANOS AMUNÁTEGUI 269	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44033	,"Longitude":	-70,65638	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL ÁVILA	"Direccion":	RUTA 5, N 3686 NERCON CENTRO COMERCIAL MIRADOR LOCAL 2A	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4991456	,"Longitude":	-73,7797086	,"Stock":	"SI"}
{"Nombre":	FARMACIA BÜHLER	"Direccion":	AV. GUILLERMO BüHLER  N 2005 LOCAL 3 Y 4 OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5917535	,"Longitude":	-73,1255912	,"Stock":	"SI"}
{"Nombre":	CAMPS	"Direccion":	AV ERCILLA 195 LOCAL 3	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37.471364°	,"Longitude":	-72.355515°	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AV. JOSE MIGUEL CARRERA 4251 L-3	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33.49248183816263,	,"Longitude":	-70,65207837	,"Stock":	"NO"}
{"Nombre":	FARMACIA FREIRE	"Direccion":	FREIRE N° 1032	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82345	,"Longitude":	-73,04628	,"Stock":	"SI"}
{"Nombre":	FARMACIA TAMANACO	"Direccion":	JOSÉ JOAQUÍN PÉREZ 305	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7870489	,"Longitude":	-71,1896711	,"Stock":	"NO"}
{"Nombre":	POPULAR FARMA	"Direccion":	BALMACEDA N° 710, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,66135	,"Longitude":	-70,92554	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AVENIDA  APOQUINDO N° 3357, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41653	,"Longitude":	-70,59509	,"Stock":	"SI"}
{"Nombre":	EKIS	"Direccion":	PLAZUELA ECUADOR N°608	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0456285	,"Longitude":	-71,624105	,"Stock":	"SI"}
{"Nombre":	DOCTOR SIMI	"Direccion":	AV. ARGENTINA N°252 LOCAL 1	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04561038	,"Longitude":	-71,60499527	,"Stock":	"SI"}
{"Nombre":	FARMACIA CENTRO DE SALUD MENTAL COYHAIQUE	"Direccion":	RAMON FREIRE 1435, COYHAIQUE	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	45°34'41.93'' SUR	,"Longitude":	72°03'19.60'' OESTE	,"Stock":	"NO"}
{"Nombre":	RP FARMA	"Direccion":	AMÉRICO VESPUCIO 0410, LOCAL J	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,37422	,"Longitude":	-70,74632	,"Stock":	"SI"}
{"Nombre":	FARMABIEN	"Direccion":	DIEZ DE JULIO 1319, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45427	,"Longitude":	-70,65293	,"Stock":	"NO"}
{"Nombre":	DRA. MILY	"Direccion":	PADRE ORELLANA 1599	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,46518	,"Longitude":	-70,63031	,"Stock":	"NO"}
{"Nombre":	PHARMASUR	"Direccion":	CAUPOLICAN N°508	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,814432	,"Longitude":	-73,243912	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMA RANCO	"Direccion":	JOAQUIN PRIETO N°530, LOCAL 7	"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,333448	,"Longitude":	-72,951135	,"Stock":	"SI"}
{"Nombre":	FARMACIA LIBERTADOR	"Direccion":	RIO CALLE CALLE N°4045	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,835818	,"Longitude":	-73,208634	,"Stock":	"SI"}
{"Nombre":	FARMACIA MEGAFARMA	"Direccion":	LAS AMERICAS N°4141	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,286389	,"Longitude":	-70,102924	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AVENIDA GRAN BRETAÑA N° 4041 LOCAL 1	"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79518	,"Longitude":	-73,10725	,"Stock":	"SI"}
{"Nombre":	FARMACIA LOS ARRAYANES	"Direccion":	RICARDO NEUMANN 1032	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3081938	,"Longitude":	-72,9947635	,"Stock":	"NO"}
{"Nombre":	FARMEX CHILE	"Direccion":	LOS PAJARITOS 2356, LOCAL 103	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50575	,"Longitude":	70,75755	,"Stock":	"NO"}
{"Nombre":	PHARMA EXPRESS	"Direccion":	HERMANOS AMUNATEGUI 273, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44017	,"Longitude":	-70,65643	,"Stock":	"SI"}
{"Nombre":	AHORROFARMA	"Direccion":	AVENIDA LIBERTADOR N° 453, LOCAL 1, INTERIOR SUPERMERCADO SúPER BODEGA ACUENTA EL MONTE	"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,68129	,"Longitude":	-70,98193	,"Stock":	"SI"}
{"Nombre":	CIELO ANDINO	"Direccion":	AVENIDA NONATO COO 1062-1066	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59936	,"Longitude":	-70,56582	,"Stock":	"SI"}
{"Nombre":	LA ECONOMIA	"Direccion":	SAN FRANCISCO 526-530	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45095	,"Longitude":	-70,64667	,"Stock":	"NO"}
{"Nombre":	ALQUIMIA	"Direccion":	MERCED 376	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43759	,"Longitude":	-70,64272	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. PRESIDENTE JORGE ALESSANDRI RODRíGUEZ 20040	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,63163	,"Longitude":	-70,71038	,"Stock":	"NO"}
{"Nombre":	CATHERINNE	"Direccion":	LAS TORRES 949	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,47737	,"Longitude":	-70,73166	,"Stock":	"NO"}
{"Nombre":	FARMAOFERTAS	"Direccion":	AVENIDA IRARRáZAVAL 200	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45223	,"Longitude":	-70,62873	,"Stock":	"SI"}
{"Nombre":	BRALE	"Direccion":	AVENIDA EL DESCANSO 555	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,46977	,"Longitude":	-70,74755	,"Stock":	"SI"}
{"Nombre":	LAWENCHE	"Direccion":	DOMINICA 311	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42641	,"Longitude":	-70,64177	,"Stock":	"SI"}
{"Nombre":	LA FAMILIA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 6416	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,51542	,"Longitude":	-70,65801	,"Stock":	"NO"}
{"Nombre":	FARMAVID	"Direccion":	AVENIDA DEL MAR 2200	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9162156	,"Longitude":	-71,27518418	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAFAST	"Direccion":	CHILLAN 1020	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58268653	,"Longitude":	-70,98390526	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN FERNANDO	"Direccion":	MANUEL RODRIGUEZ 657	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5872585	,"Longitude":	-70,9886251	,"Stock":	"NO"}
{"Nombre":	O FARMACIA	"Direccion":	AVDA 7 DE ABRIL Nº2130	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,055686	,"Longitude":	-71,271472	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI  F-0319	"Direccion":	AVENIDA LOS POETAS Nº 233, LOCAL Nº DOS-C	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,75230412	,"Longitude":	-72,60412436	,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	O'HIGGINS 111	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8784351	,"Longitude":	-71,2465358	,"Stock":	"SI"}
{"Nombre":	FARMAICA KNOP	"Direccion":	BARROS ARANA N° 756 LOCAL 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82582	,"Longitude":	-73,0492	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL RANCAGUA	"Direccion":	AV. BDO O'HIGGINS 580, PZA RODEO	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16501852	,"Longitude":	-70,74211329	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	BARROS ARANA 451 LOCAL 2	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82736	,"Longitude":	-73,05311	,"Stock":	"NO"}
{"Nombre":	FARMACIA KNOP	"Direccion":	COLON 200 LOCAL 1	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71266	,"Longitude":	-73,11441	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAPUCHE MAKELAWEN CONCEPCION	"Direccion":	BARROS ARANA N° 251	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82838	,"Longitude":	-73,05559	,"Stock":	"SI"}
{"Nombre":	FARMACIA ESFARMA	"Direccion":	AVENIDA REPÚBLICA Nº 770, LOCAL Nº 1B Y LOCAL Nº12	"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,74949253	,"Longitude":	-72,94619781	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOMEOPATICA KNOP	"Direccion":	AV RAMON PICARTE N°489	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8146592	,"Longitude":	-73,2427235	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	MATUCANA 2	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45038187	,"Longitude":	-70,67915431	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	PROVIDENCIA 2031	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33.42125380361528,	,"Longitude":	-70,60902994	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 1665	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44566635	,"Longitude":	-70,65965006	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	SANTO DOMINGO 960	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4361534	,"Longitude":	-70,65088229	,"Stock":	"NO"}
{"Nombre":	FARMACIA KNOP	"Direccion":	SAN MARTíN 407	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4816605	,"Longitude":	-73,7633728	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	MONUMENTO 1909	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51017824	,"Longitude":	-70,75869959	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	MONEDA 1045	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44191963	,"Longitude":	-70,65133431	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	LIBERTADOR BERNARDO O'HIGGINS 985	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44334928	,"Longitude":	-70,65011968	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	IRRARAZAVAL 2546	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45396777	,"Longitude":	-70,60455908	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	LA DEHESA 1201	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,36104101	,"Longitude":	-70,51552384	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	PROVIDENCIA 1333	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4283833	,"Longitude":	-70,61958844	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	HUERFANOS 885	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43937127	,"Longitude":	-70,64933771	,"Stock":	"SI"}
{"Nombre":	FARMABARRIO	"Direccion":	PUENTE 620	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43590072	,"Longitude":	-70,65179676	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	IRRARAZAVAL 2810	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45436948	,"Longitude":	-70,60181052	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	JOSE MANUEL BALMACEDA 200	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,73296418	,"Longitude":	-70,73856583	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AV. NUEVA PROVIDENCIA 2176	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42272451	,"Longitude":	-70,60975666	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	Eleuterio Ramírez 1101	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5735501	,"Longitude":	-73,1307884	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	LOS MAÑIOS 7287 LOCAL 8	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,88724	,"Longitude":	-73,14032	,"Stock":	"NO"}
{"Nombre":	FARMACIA INTEGRAL OSORNO	"Direccion":	ELEUTERIO RAMIREZ 951	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57328096	,"Longitude":	-73,13420319	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	MAR DE LOS SARGAZOS 5881	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4100798	,"Longitude":	-70,56853614	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	PROVIDENCIA 2242	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4212075	,"Longitude":	-70,60904098	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	PAJARITOS 1968 LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50929075	,"Longitude":	-70,75738684	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	SERAFIN ZAMORA 76	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52060275	,"Longitude":	-70,60009746	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	JOSE LUIS COO 48 LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60918489	,"Longitude":	-70,57560439	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	IRRARAZAVAL 5674 LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45330978	,"Longitude":	-70,57177731	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	SAN ANTONIO 476 LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43748792	,"Longitude":	-70,64860278	,"Stock":	"SI"}
{"Nombre":	ECOFARMACIA	"Direccion":	ESMERALDA 301	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,833399	,"Longitude":	-70,597292	,"Stock":	"SI"}
{"Nombre":	COMUNAL DR. ALEXIS KALERGIS	"Direccion":	AMANDA LABARCA 4835	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,47502	,"Longitude":	-70,57985	,"Stock":	"SI"}
{"Nombre":	VITALFARMA	"Direccion":	SEMINARIO 768, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45124	,"Longitude":	-70,62713	,"Stock":	"NO"}
{"Nombre":	ECO FARMACIAS	"Direccion":	SERAFIN ZAMORA 29, LOCAL 19, CENTRO COMERCIAL LA ROTONDA	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52092	,"Longitude":	-70,60076	,"Stock":	"SI"}
{"Nombre":	HOMEOPATICA KNOP	"Direccion":	COLON N° 348	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37.469528°	,"Longitude":	-72.350849°	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA 6759, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,4523886	,"Longitude":	-70,55976404	,"Stock":	"NO"}
{"Nombre":	POPULAR ACHIFARP	"Direccion":	LOS LEONES 2713	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44374337	,"Longitude":	-70,59965058	,"Stock":	"SI"}
{"Nombre":	FARMACIA SIETE LAGOS	"Direccion":	PEDRO DE VALDIVIA N°115	"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,642779	,"Longitude":	-72,333261	,"Stock":	"SI"}
{"Nombre":	GUNDIAN	"Direccion":	LAS PERDICES 2990, PENALOLEN,	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33.49090127063128,	,"Longitude":	-70,54020064	,"Stock":	"SI"}
{"Nombre":	ZAMARIN	"Direccion":	AVENIDA NUEVA PROVIDENCIA N° 2186, LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33.42207125695409,	,"Longitude":	-70,60982208	,"Stock":	"NO"}
{"Nombre":	CARMENCITA	"Direccion":	MIGUEL ÁNGEL  N°960	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33.58258984586145,	,"Longitude":	-70,59208676	,"Stock":	"SI"}
{"Nombre":	UNIDAS	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA N° 4835	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,49792	,"Longitude":	-70,65355	,"Stock":	"NO"}
{"Nombre":	FRACCION	"Direccion":	Américo Vespucio 1400	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-32,4271058	,"Longitude":	-71,0635513	,"Stock":	"NO"}
{"Nombre":	ZUPHARMA	"Direccion":	AVENIDA PEDRO FONTOVA N° 6251, L. 2	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,36646	,"Longitude":	-70,67039	,"Stock":	"SI"}
{"Nombre":	LA ECONOMICA II	"Direccion":	SUCRE 428 -430	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64673	,"Longitude":	-70,3969514	,"Stock":	"SI"}
{"Nombre":	FARMACIA ACEVEDO	"Direccion":	14 DE FEBRERO N°2001	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6555941	,"Longitude":	-70,3991111	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AVENIDA CHICUREO S/N, LOTE 2, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,28598	,"Longitude":	-70,67552	,"Stock":	"NO"}
{"Nombre":	FARMACIA ECO FARMA, CAMINO PUERTAS NEGRAS	"Direccion":	CALLE 4 SUR, LOTEO POETA MAX JARA Nº4219	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,440969	,"Longitude":	-71,614345	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	AV. E. FREI M. 3544 L-1	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0213084	,"Longitude":	-71,515191	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM BICENTENARIO	"Direccion":	RAMADILLAS DE LIRCAY 21 NORTE	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,419981	,"Longitude":	-71,610342	,"Stock":	"NO"}
{"Nombre":	FARMACRECER	"Direccion":	Calle CAEN, 1015, EDIFICIO HACIENDA EL BOLDO 2, PISO 1, LOCAL 101	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,96267847	,"Longitude":	-71,21981882	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMACONTIGO	"Direccion":	1 ORIENTE B Nº2108	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,4640084	,"Longitude":	-71,67762847	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL MAULE	"Direccion":	1 NORTE Nº385 B	"Region":	MAULE	,"Comuna":	LONGAVI	,"Latitude":	-35,966371	,"Longitude":	-71,682844	,"Stock":	"SI"}
{"Nombre":	QUINTANA	"Direccion":	CALLE FRAY CAMILO N° 290, LOCAL 7	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44542178	,"Longitude":	-70,63498859	,"Stock":	"NO"}
{"Nombre":	FARMACIA HERBARIO MAULLIN	"Direccion":	O'HIGGINS INTERIOR SIN MAULLIN	"Region":	LOS LAGOS	,"Comuna":	MAULLIN	,"Latitude":	-41,6208506	,"Longitude":	-73,5940675	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	CALLE EBRO N° 2736, LOCAL 1A	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41568532	,"Longitude":	-70,60305265	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO 24/7	"Direccion":	FREIRE Nº 193 LOCAL 2	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8794079	,"Longitude":	-71,2452488	,"Stock":	"NO"}
{"Nombre":	LA SERVICIAL	"Direccion":	AVENIDA SANTA ROSA N° 2510 D , LOCAL N°4, BLOQUE C2	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33.47763220008253,	,"Longitude":	-70,6414717	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL MAULE	"Direccion":	FREIRE Nº 766	"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,333421	,"Longitude":	-72,410041	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMALILAS	"Direccion":	AVDA. SAN RAFAEL Nº376 LOCAL D	"Region":	MAULE	,"Comuna":	SAN RAFAEL	,"Latitude":	-35,307262	,"Longitude":	-71,517721	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MIGUEL N°5	"Direccion":	1 SUR Nº1669	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427945	,"Longitude":	-71,652749	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA MODESTA	"Direccion":	AVDA PRESIDENTE IBAÑEZ Nº0609	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,836967	,"Longitude":	-71,608603	,"Stock":	"SI"}
{"Nombre":	FARMACIA COLONIAL	"Direccion":	AVDA CENTENARIO CON JM CARRERA Nº31 BLOCK 4	"Region":	MAULE	,"Comuna":	YERBAS BUENAS	,"Latitude":	-35,746097	,"Longitude":	-71,581483	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	AVENIDA PROVIDENCIA 2221, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42142	,"Longitude":	-70,60939	,"Stock":	"NO"}
{"Nombre":	FARMACIA OMEGA	"Direccion":	CARMEN 695 DPTO A	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,983834	,"Longitude":	-71,238967	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIVE MÁS	"Direccion":	CALLE 22 NORTE Nº3481, SECTOR BICENTENARIO	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,413383	,"Longitude":	-71,616416	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAVITALID	"Direccion":	AVDA 1 ORIENTE Nº1936	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,462145	,"Longitude":	-71,675341	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	QUECHEREGUAS Nº1931	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,114675	,"Longitude":	-71,281087	,"Stock":	"NO"}
{"Nombre":	FARMACIA LAS CUMBRES	"Direccion":	ALEJANDRO CRUZ Nº125	"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,53778	,"Longitude":	-71,4869	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA LIRCAY Nº2455 LOCAL 6	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,411289	,"Longitude":	-71,650842	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN CARLOS	"Direccion":	AV. SAN SEBASTIAN N° 916 LOCAL 3	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,7806	,"Longitude":	-73,04657	,"Stock":	"NO"}
{"Nombre":	FARMACIA EXPRES JH	"Direccion":	Avenida Anibal Pinto 276	"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,1398171	,"Longitude":	-71,8290134	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAHORRO	"Direccion":	CHACABUCO Nº640 LOCALES C Y D	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,845092	,"Longitude":	-71,595272	,"Stock":	"SI"}
{"Nombre":	FARMACIA LOS NICHES	"Direccion":	OCEANO PACIFICO Nº5033	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-35,0704809	,"Longitude":	-71,1545123	,"Stock":	"SI"}
{"Nombre":	FARMACIA BARATITA	"Direccion":	MERCED Nº239 LOCAL 103	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,984652	,"Longitude":	-71,238003	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIVE MÁS	"Direccion":	ARTURO PRAT Nº601 LOCAL 3	"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,97312	,"Longitude":	-71,808568	,"Stock":	"SI"}
{"Nombre":	DOCTOR SIMI	"Direccion":	CHACABUCO Nº172, PATIO CHACABUCO LOCAL 102-C	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,32039879	,"Longitude":	-71,40705697	,"Stock":	"NO"}
{"Nombre":	PUNTOFARMACIA	"Direccion":	JOSE MANUEL BALMACEDA N° 546, LOCAL 6	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,42562	,"Longitude":	-71,95681	,"Stock":	"NO"}
{"Nombre":	URIEL	"Direccion":	CARRERA N° 126	"Region":	ÑUBLE	,"Comuna":	SAN FABIAN	,"Latitude":	-36,55726	,"Longitude":	-71,55345	,"Stock":	"SI"}
{"Nombre":	LINLIN	"Direccion":	MIRAFLORES 332	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43868	,"Longitude":	-70,64567	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITAL SANTA ROSA	"Direccion":	AV. VALPARAÍSO N° 4382	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,27841	,"Longitude":	-70,084253	,"Stock":	"SI"}
{"Nombre":	FARMACIA DOCTOR SIMI	"Direccion":	BENAVENTE N° 41	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60146911	,"Longitude":	-71,19660358	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	AV. TOCORNAL Nº 2331 LOCAL 3 INTERIOR SUPERMERCADO LIDER EXPRESS	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,75375199	,"Longitude":	-70,70836036	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA N° 6140, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,51130432	,"Longitude":	-70,65693997	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	CALLE TRES N° 010, PARADERO 32	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0409812	,"Longitude":	-71,4724795	,"Stock":	"NO"}
{"Nombre":	UNIFARMACIA	"Direccion":	SAN DIEGO N° 377 LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45030708	,"Longitude":	-70,65074258	,"Stock":	"SI"}
{"Nombre":	ECO FARMACIAS	"Direccion":	MONUMENTO N° 1961, CENTRO COMERCIAL PUMAY	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50932	,"Longitude":	-70,75869	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	LO MARCOLETA N°0381 LOCAL 5 Y 6	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3603227	,"Longitude":	-70,74658861	,"Stock":	"SI"}
{"Nombre":	FAR-Q-FAR	"Direccion":	AVENIDA BENITO REBOLLEDO 2505	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33.50174341098971,	,"Longitude":	-70,6061743	,"Stock":	"NO"}
{"Nombre":	FARMAYUDA	"Direccion":	SAN ANTONIO N°344 LOCAL 107	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4391072	,"Longitude":	-70,648345	,"Stock":	"SI"}
{"Nombre":	MANRIQUEZ	"Direccion":	AGUSTINAS 603	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4402274	,"Longitude":	-70,64534822	,"Stock":	"NO"}
{"Nombre":	SALUDFONTOVA	"Direccion":	AVENIDA PEDRO FONTOVA N° 4965	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,38082	,"Longitude":	-70,67257	,"Stock":	"NO"}
{"Nombre":	AGUIRRE	"Direccion":	AVENIDA IRARRAZAVAL N° 1546	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45282	,"Longitude":	-70,61457	,"Stock":	"SI"}
{"Nombre":	FARMACIA MIRAFLORES	"Direccion":	AVENIDA PINTO Nº 2, LOCAL 2	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,734625	,"Longitude":	-72,5799051	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ENRIQUE ABELLO 8	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1391522	,"Longitude":	-70,8926166	,"Stock":	"SI"}
{"Nombre":	FARMACIA GONZAMED	"Direccion":	AVDA. RENDIC 4793 LOCAL 1	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6272441	,"Longitude":	-70,3896505	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA ECONOMICA IV	"Direccion":	AVDA BONILLA 8724	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5874174	,"Longitude":	-70,3786252	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMALIFE	"Direccion":	BENITO OCAMPO 11640 LOCAL 15	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5536405	,"Longitude":	-70,3977419	,"Stock":	"NO"}
{"Nombre":	FARMACIA ESPACIO PIEL	"Direccion":	COQUIMBO 349, SEGUNDO PISO, INTERIOR CTINICA DERMATOLóGICA VALLE NORTE	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60306678	,"Longitude":	-71,19918231	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMASKIN	"Direccion":	AVENIDA VIDELA 348, LOCAL 6 EDIFICIO STRIP CENTER ARENAS DE COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9636069	,"Longitude":	-71,3359114	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	GRAN AVENIDA JOSë MIGUEL CARRERA N° 6001 L-C	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50982585	,"Longitude":	-70,65700481	,"Stock":	"SI"}
{"Nombre":	DOCTOR SIMI	"Direccion":	AVENIDA VIDELA 348, LOCAL 8 EDIFICIO STRIP CENTER ARENAS DE COQUIMBO	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9636069	,"Longitude":	-71,3359114	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN MIGUEL	"Direccion":	1 SUR Nº1218	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,427686	,"Longitude":	-71,659643	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALMA	"Direccion":	Avenida las Américas 4060	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2846021	,"Longitude":	-70,1020758	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	OFICINA SALITRERA VICTORIA S/N, LOCAL N° 7126, PRIMER NIVEL, ETAPA VII, MALL ZOFRI	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,20571	,"Longitude":	-70,13905	,"Stock":	"NO"}
{"Nombre":	FARMA ELQUI	"Direccion":	RUTA D-43, N° 1011, LOCAL 7	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96658968	,"Longitude":	-71,26584448	,"Stock":	"NO"}
{"Nombre":	FARMACIA DOCTOR SIMI	"Direccion":	AVENIDA MARQUEZ DE MONTEPIO 343, LOCAL 1	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":	-31,7806194	,"Longitude":	-70,964056	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMACENTRAL	"Direccion":	ALAMEDA 386, LOC 2	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1582573	,"Longitude":	-70,7643263	,"Stock":	"SI"}
{"Nombre":	PHARMA TORRES	"Direccion":	CAMINO A MELIPILLA N°16850 LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,54348684	,"Longitude":	-70,78008525	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DE URGENCIA ASISTENCIA PUBLICA	"Direccion":	CURICO 345	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44442	,"Longitude":	-70,63808	,"Stock":	"NO"}
{"Nombre":	DAMYFAR	"Direccion":	AVENIDA IRARRAZAVAL 3636	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45495	,"Longitude":	-70,59261	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA PADRE HURTADO SUR N°875, LOCAL B-2020-A1 MALL PLAZA LOS DOMINICOS	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41548718	,"Longitude":	-70,54025084	,"Stock":	"NO"}
{"Nombre":	SAN ENRIQUE	"Direccion":	AVENIDA SAN PEDRO N° 39 Y 41	"Region":	METROPOLITANA	,"Comuna":	SAN PEDRO	,"Latitude":	-33,89677	,"Longitude":	-71,45395	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA ANGAMOS 745	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6674908	,"Longitude":	-70,404847	,"Stock":	"SI"}
{"Nombre":	FARMACIAS KNOP	"Direccion":	AVENIDA ALEMANIA Nº 0849 LOCAL 3	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7334672	,"Longitude":	-72,6148836	,"Stock":	"SI"}
{"Nombre":	FARMANINA	"Direccion":	LOS COPIHUES N°426 LOCAL N°7	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,55714028	,"Longitude":	-70,58019844	,"Stock":	"SI"}
{"Nombre":	PRINCIPAL	"Direccion":	AVENIDA LOS PAJARITOS N°3042 LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,49952771	,"Longitude":	-70,75774532	,"Stock":	"NO"}
{"Nombre":	SANTA RAQUEL II	"Direccion":	EL TRANQUE N° 1252	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,43501	,"Longitude":	-70,77106	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMANOR	"Direccion":	CARLOS VAN BUREN N° 507	"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,378415	,"Longitude":	-70,31365	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOCUBA	"Direccion":	GENERAL ALDUNATE Nº 719 LOCAL 103	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,74086081	,"Longitude":	-72,58822132	,"Stock":	"NO"}
{"Nombre":	FARMACIAS REDFARMA L-20	"Direccion":	MANUEL BULNES Nº 314, LOCAL 1	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73667934	,"Longitude":	-72,58875407	,"Stock":	"SI"}
{"Nombre":	BIKU FARMA	"Direccion":	BALMORAL 309 LOCAL 201 NIVEL -2	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40572961	,"Longitude":	-70,56987222	,"Stock":	"SI"}
{"Nombre":	FARMACIA EPUFARMA	"Direccion":	JAVIERA CARRERA Nº 1555 LOCAL 1	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7422967	,"Longitude":	-72,6306499	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	COMPAÑÍA N° 1579, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43884	,"Longitude":	-70,65935	,"Stock":	"NO"}
{"Nombre":	FARMACIA CENTRO FARMA	"Direccion":	O'HIGGINS 643	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58726552	,"Longitude":	-70,98524556	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALOIS	"Direccion":	MURIALDO 56	"Region":	OHIGGINS	,"Comuna":	REQUINOA	,"Latitude":	-34,28765273	,"Longitude":	-70,81741522	,"Stock":	"NO"}
{"Nombre":	SU FARMACIA	"Direccion":	O'HIGGINS N°491-A	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,34933917	,"Longitude":	-70,72906324	,"Stock":	"NO"}
{"Nombre":	OD	"Direccion":	DIEGO DE ROSALES 1527 L-A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45047173	,"Longitude":	-70,65681002	,"Stock":	"SI"}
{"Nombre":	FARMA VITALITY	"Direccion":	SANTA BEATRIZ N°113	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42655779	,"Longitude":	-70,61802746	,"Stock":	"SI"}
{"Nombre":	NOVASALUD.COM	"Direccion":	MONUMENTO 2096	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50798	,"Longitude":	-70,75906	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DR. SIMI F-0333	"Direccion":	AVENIDA LAS PERDICES Nº 0547 LOCALES 3 Y 4, LABRANZA	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	LOS CONDORES N°3854, LOCAL 11 Y 12	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,27467	,"Longitude":	-70,095871	,"Stock":	"SI"}
{"Nombre":	GEOFARMA	"Direccion":	AV. BLANCA ESTELA 2095 L-3, 4, 11 Y 12	"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9422301	,"Longitude":	-71,5214956	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA APOQUINDO N° 6422, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40755	,"Longitude":	-70,56426	,"Stock":	"NO"}
{"Nombre":	EFE FARMA	"Direccion":	ARTURO PRAT 498 LOCAL 104 SANTA BARBARA	"Region":	BIOBIO	,"Comuna":	SANTA BARBARA	,"Latitude":	-37,67010093	,"Longitude":	-72,02197012	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	OSSA CERDA N° 330	"Region":	ATACAMA	,"Comuna":	CALDERA	,"Latitude":	-27,06767494	,"Longitude":	-70,82286764	,"Stock":	"SI"}
{"Nombre":	FARMAYSEN	"Direccion":	YUSEFF LAIBE 180, PUERTO AYSEN	"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	-45,407571	,"Longitude":	-72,68589294	,"Stock":	"SI"}
{"Nombre":	TODOFARMA	"Direccion":	AVENIDA  ALONSO DE CORDOVA 4125, LOCAL 106	"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,40241	,"Longitude":	-70,59063	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA VICUñA MACKENNA 7110 L-FBF-140-144	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51753892	,"Longitude":	-70,59865362	,"Stock":	"SI"}
{"Nombre":	FARMACIA VECINAL RAHUE	"Direccion":	AVENIDA REPUBLICA 296, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,574074	,"Longitude":	-73,14949	,"Stock":	"NO"}
{"Nombre":	CUMBRES	"Direccion":	ACONCAGUA 2281, PARCELA 4, LOCAL 2 (INTERIOR SUPERMERCADO)	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,18384	,"Longitude":	-70,67666	,"Stock":	"NO"}
{"Nombre":	COMUNAL ITINERANTE MóVIL COLINA	"Direccion":	ITINERANTE	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	Itinerante	,"Longitude":	Itinerante	,"Stock":	"SI"}
{"Nombre":	FARMABIEN	"Direccion":	AVENIDA IRARRáZAVAL 5350	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4532366	,"Longitude":	-70,5743846	,"Stock":	"SI"}
{"Nombre":	SU SALUD	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N° 4499, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45498	,"Longitude":	-70,6971	,"Stock":	"SI"}
{"Nombre":	GARCÍA & GARCÍA	"Direccion":	PLAZA DE ARMAS 582, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,68615	,"Longitude":	-71,21421	,"Stock":	"NO"}
{"Nombre":	BELEY	"Direccion":	AVENIDA EL CANAL 19811	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,449549	,"Longitude":	-70,84671	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR EL COBRE	"Direccion":	PASAJE JULIO AGUILERA 740	"Region":	COQUIMBO	,"Comuna":	CANELA	,"Latitude":	-31,3993653	,"Longitude":	-71,4579823	,"Stock":	"NO"}
{"Nombre":	COPIHUE	"Direccion":	MANZANO 162	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,43155	,"Longitude":	-70,64622	,"Stock":	"NO"}
{"Nombre":	PR FARMA	"Direccion":	COLÓN NORTE 550	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,58962	,"Longitude":	-70,70349	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	MONUMENTO 1991	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50926	,"Longitude":	-70,75866	,"Stock":	"SI"}
{"Nombre":	BOTICA SAN PABLO	"Direccion":	PAGLIETA 659, LOCAL 7 , SAN PABLO	"Region":	LOS LAGOS	,"Comuna":	SAN PABLO	,"Latitude":	-40,41484	,"Longitude":	-73,011465	,"Stock":	"SI"}
{"Nombre":	MAS SALUD	"Direccion":	CALERA DE TANGO, PARCELA 11, LOCAL 4, PARADERO 9	"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,62746	,"Longitude":	-70,76932	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA PASEO PIE ANDINO N° 5855, LOCALES 4 Y 8	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,32335	,"Longitude":	-70,53893	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAYENEL	"Direccion":	CALLE CUARTA TERRAZA 4969, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,461643	,"Longitude":	-72,912271	,"Stock":	"NO"}
{"Nombre":	SANA SANA	"Direccion":	BARÓN DE JURAS REALES 3298	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3998	,"Longitude":	-70,67738	,"Stock":	"NO"}
{"Nombre":	PLUS FARMA	"Direccion":	BARÓN DE JURAS REALES 4410-A	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,39002	,"Longitude":	-70,68417	,"Stock":	"SI"}
{"Nombre":	FARMATENCIÓN	"Direccion":	AVENIDA SANTA ROSA 8834	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,54149	,"Longitude":	-70,63446	,"Stock":	"SI"}
{"Nombre":	HERNÁNDEZ	"Direccion":	AVENIDA CENTRAL CARDENAL RAÚL SILVA HENRÍQUEZ 7293 B	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,51255	,"Longitude":	-70,69232	,"Stock":	"SI"}
{"Nombre":	LA FARMACIA	"Direccion":	BAQUEDANO 530, LOCAL 2	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0415817	,"Longitude":	-71,3542087	,"Stock":	"NO"}
{"Nombre":	RENACER	"Direccion":	BEAUCHEFF 2821, LC. 6	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,48024	,"Longitude":	-70,66348	,"Stock":	"SI"}
{"Nombre":	BUENAVENTURA	"Direccion":	MANUEL RODRÍGUEZ 1496, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,40221	,"Longitude":	-70,72105	,"Stock":	"NO"}
{"Nombre":	ULTRASALUD	"Direccion":	SEPULVEDA BUSTOS N° 435	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60536	,"Longitude":	-72,11953	,"Stock":	"NO"}
{"Nombre":	BENMAR	"Direccion":	AVENIDA EL MONTIJO 1831	"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,39538	,"Longitude":	-70,75341	,"Stock":	"SI"}
{"Nombre":	FARMACIA DCS MUNICIPALIDAD LAJA	"Direccion":	FRITZ 101, LAJA	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37.279119°	,"Longitude":	-72.714000°	,"Stock":	"SI"}
{"Nombre":	CELIA	"Direccion":	AVENIDA JOSÉ JOAQUÍN PÉREZ 4291-4293, LOCALES 27 Y 28	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,43167	,"Longitude":	-70,69335	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL SANTA BARBARA	"Direccion":	SALAMANCA SN	"Region":	BIOBIO	,"Comuna":	SANTA BARBARA	,"Latitude":	-37.668107°	,"Longitude":	-72.016064°	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL MULCHEN	"Direccion":	VILLAGRA 455	"Region":	BIOBIO	,"Comuna":	MULCHEN	,"Latitude":	-37.719926°	,"Longitude":	-72.241233°	,"Stock":	"SI"}
{"Nombre":	FARMACIA RED FARMA	"Direccion":	JOSE MANUEL BALMACEDA Nº5	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,5223098	,"Longitude":	-71,6854198	,"Stock":	"NO"}
{"Nombre":	PRONTO FARMA	"Direccion":	LORETO 32, RECOLETA	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33.43294527265079,	,"Longitude":	-70,64249376	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. PEDRO FONTOVA N°6651	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33.361375857962635,	,"Longitude":	-70,6704705	,"Stock":	"SI"}
{"Nombre":	PUNTO BLANCO	"Direccion":	LOS PIMIENTOS 377	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9835631	,"Longitude":	-71,3370449	,"Stock":	"SI"}
{"Nombre":	LO BLANCO	"Direccion":	AVENIDA PADRE HURTADO N°13310	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33.582937467971476,	,"Longitude":	-70,67597492	,"Stock":	"SI"}
{"Nombre":	LUVIFARM	"Direccion":	AV. GABRIELA ORIENTE N° 01168	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33.57605385720649,	,"Longitude":	-70,56885796	,"Stock":	"NO"}
{"Nombre":	SEMILLA	"Direccion":	Sebastopol 330 A	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,5163095	,"Longitude":	-70,6283251	,"Stock":	"SI"}
{"Nombre":	HUMAN PHARMA	"Direccion":	ECHEñIQUE 5839, L-2	"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,4451283	,"Longitude":	-70,5706958	,"Stock":	"NO"}
{"Nombre":	PUNTOFARMA	"Direccion":	BERTA CORREA 1654	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. NUEVA PROVIDENCIA 2655, L 125-126	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	DEL CARMEN	"Direccion":	SAN ANTONIO N° 54	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44212	,"Longitude":	-70,64791	,"Stock":	"SI"}
{"Nombre":	Bio-Gen	"Direccion":	FRAY CAMILO HENRÍQUEZ N° 708, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,18905	,"Longitude":	-70,67441	,"Stock":	"SI"}
{"Nombre":	CONSTITUCION	"Direccion":	AV. NUEVA PROVIDENCIA 2600-2610	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4178257	,"Longitude":	-70,60296552	,"Stock":	"NO"}
{"Nombre":	LA SERENA	"Direccion":	AVENIDA CARDENAL RAÚL SILVA HENRÍQUEZ N° 10509	"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,55511	,"Longitude":	-70,61705	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SAN MARTÍN N° 1386	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82468	,"Longitude":	-73,03983	,"Stock":	"NO"}
{"Nombre":	LA SOLUCIÓN	"Direccion":	AVENIDA GRECIA 5893	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,46986	,"Longitude":	-70,57371	,"Stock":	"NO"}
{"Nombre":	FARMACIA EMA	"Direccion":	RENGO 1014	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82192	,"Longitude":	-73,05572	,"Stock":	"SI"}
{"Nombre":	ALOSAL	"Direccion":	AVENIDA CARDENAL CARO 3890, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,386932	,"Longitude":	-70,664221	,"Stock":	"SI"}
{"Nombre":	FARMACIA AMATIST	"Direccion":	CHORRILLOS Nº1351 SAN JAVIER	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,595162	,"Longitude":	-71,729311	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAGISTRAL	"Direccion":	5 ORIENTE Nº1058 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,428175	,"Longitude":	-71,659879	,"Stock":	"NO"}
{"Nombre":	ISLA TEJA	"Direccion":	LOS LAURELES 365-D	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81528755	,"Longitude":	-73,25521395	,"Stock":	"SI"}
{"Nombre":	ATOM FARMACIA	"Direccion":	AV. VALPARAÍSO 2550	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0459063	,"Longitude":	-71,3954335	,"Stock":	"NO"}
{"Nombre":	FARMACIA MI FARMACIA	"Direccion":	ARTURO PRAT Nº615 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,983967	,"Longitude":	-71,242902	,"Stock":	"NO"}
{"Nombre":	GROBFARMA	"Direccion":	CALLE SANTA ELENA, 104-B	"Region":	OHIGGINS	,"Comuna":	GRANEROS	,"Latitude":	-34,06543	,"Longitude":	-70,72592	,"Stock":	"SI"}
{"Nombre":	POPULAR SAN JOAQUÍN SUR	"Direccion":	PASAJE HUARA N°5371	"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA REBAJA	"Direccion":	AVENIDA CIRCUNVALACIÓN 30 ORIENTE Nº1420, LOCAL 2 TALCA-35.430352	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,430352	,"Longitude":	-71,627051	,"Stock":	"SI"}
{"Nombre":	FARMACIA HUALAÑÉ MÁS SALUD Y BELLEZA	"Direccion":	ARTURO PRAT Nº423, LOCAL- A	"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,97560302	,"Longitude":	-71,80389713	,"Stock":	"NO"}
{"Nombre":	FARMACIAS EL CARMEN	"Direccion":	INDEPENDENCIA Nº599 LOCAL Nº2 LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846836	,"Longitude":	-71,594467	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOVUSPHARMA	"Direccion":	CALLE SAN JORGE HJS LTD-2 DPTO. 2 Y 3 PENCAHUE	"Region":	MAULE	,"Comuna":	PENCAHUE	,"Latitude":	-35,416733	,"Longitude":	-71,742308	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAPLUS	"Direccion":	ARTURO PRAT Nº2389	"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,596552	,"Longitude":	-71,730988	,"Stock":	"NO"}
{"Nombre":	FARMACIA HCB	"Direccion":	4 PONIENTE A C/AVENIDA DUAO Nº1730 MAULE	"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,454536	,"Longitude":	-71,67963395	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOVASALUD	"Direccion":	ALMIRANTE LATORRE 675	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2163217	,"Longitude":	-70,1489078	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PROVIDENCIA N° 2080 - 2084, LOCALES 7 Y 8	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42278	,"Longitude":	-70,6118	,"Stock":	"SI"}
{"Nombre":	GOFARM!	"Direccion":	CRECENTE ERRÁZURIZ N° 1785	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45814	,"Longitude":	-70,61301	,"Stock":	"NO"}
{"Nombre":	Amapolas	"Direccion":	AVENIDA FRANCISCO BILBAO N° 2948, LOCALES 3 Y 4	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43468	,"Longitude":	-70,58849	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL HOSPITAL DEL PROFESOR	"Direccion":	AVENIDA LIBERTADOR BERNARDO O´HIGGINS 4860	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45675	,"Longitude":	-70,70328	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIG FARMA	"Direccion":	COLON 351	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71315	,"Longitude":	-73,11318	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	ANIBAL PINTO N° 598	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82516	,"Longitude":	-73,05047	,"Stock":	"SI"}
{"Nombre":	DR. FARMA	"Direccion":	HUERFANOS 1533 L-3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44027981	,"Longitude":	-70,65849798	,"Stock":	"SI"}
{"Nombre":	ECO FARMACIAS	"Direccion":	PROVIDENCIA 2076	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42292232	,"Longitude":	-70,61175899	,"Stock":	"SI"}
{"Nombre":	FARMACIA SUR MAGISTRAL	"Direccion":	LOS DIGITALES N° 1930, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58788	,"Longitude":	-73,1217	,"Stock":	"NO"}
{"Nombre":	INTEGRAL	"Direccion":	AVENIDA IRARRáZAVAL 660, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45274	,"Longitude":	-70,62368	,"Stock":	"SI"}
{"Nombre":	CENTERFARMA	"Direccion":	ACONCAGUA 48, LOCALES 6 Y 7	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,20343	,"Longitude":	-70,68017	,"Stock":	"NO"}
{"Nombre":	FARMACIAS E´SENCIAL	"Direccion":	MANUEL BULNES N° 927, LOCAL 109 EDIFICIO VANGUARDIA CENTER	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,74281032	,"Longitude":	-72,5901956	,"Stock":	"NO"}
{"Nombre":	FARMACIA KNOP	"Direccion":	AVENIDA SAN JUAN 133	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1771543	,"Longitude":	-70,6984606	,"Stock":	"SI"}
{"Nombre":	ECONOMICAS	"Direccion":	VICUñA MACKENNA 8188	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,53013129	,"Longitude":	-70,59482647	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	EYZAGUIRRE 665, LOCAL B	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59536	,"Longitude":	-70,70594	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	GOBERNADOR CARLOS BORIES N°689	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1588125	,"Longitude":	-70,9048455	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	CORONEL ROBLES 1140 L-2	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,43769669	,"Longitude":	-70,69247714	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	ANIBAL PINTO 1401	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4269866	,"Longitude":	-70,6559841	,"Stock":	"NO"}
{"Nombre":	GEMINIS	"Direccion":	VICUÑA MACKENNA 7332	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52129609	,"Longitude":	-70,60014948	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	VICUÑA MACKENNA 901 L-2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45337178	,"Longitude":	-70,6328617	,"Stock":	"SI"}
{"Nombre":	EL PRIMERO	"Direccion":	PADRE ORELLANA 1805	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,46776513	,"Longitude":	-70,62968354	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Camino Chicureo Lote A-2 s/n, local 1	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,2864618	,"Longitude":	-70,6521256	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	BERNARDO O´HIGGINS 581 L-3Y4	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3683239	,"Longitude":	-70,73001735	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SAN ANTONIO 457, L 31A - 32A	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43748404	,"Longitude":	-70,64817075	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	LIBERTADOR BERNARDO O’HIGGINS 776	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44330157	,"Longitude":	-70,64696264	,"Stock":	"NO"}
{"Nombre":	ROMI	"Direccion":	ARTURO PRAT 636,  L-1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45300452	,"Longitude":	-70,64843632	,"Stock":	"NO"}
{"Nombre":	CENTRO DE SALUD FAMILIAR APOQUINDO	"Direccion":	CERRO ALTAR N° 6611	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40044541	,"Longitude":	-70,56465186	,"Stock":	"SI"}
{"Nombre":	LF	"Direccion":	APOQUINDO 4951	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41180752	,"Longitude":	-70,57675084	,"Stock":	"SI"}
{"Nombre":	TERRAFARMA	"Direccion":	RUIZ-TAGLE 132 L-2	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,20547573	,"Longitude":	-70,67783134	,"Stock":	"SI"}
{"Nombre":	DA VINCI	"Direccion":	SAN ANTONIO 1301 L-3B	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0099244	,"Longitude":	-71,5426642	,"Stock":	"NO"}
{"Nombre":	OLIVEROS	"Direccion":	FRANCISCO BILBAO 1941 LOCAL 3	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43864736	,"Longitude":	-70,60870264	,"Stock":	"SI"}
{"Nombre":	CENTRO DE SALUD FAMILIAR MAIPO	"Direccion":	CLEMENTE DíAZ RODRíGUEZ 3198	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,73297117	,"Longitude":	-70,78062178	,"Stock":	"NO"}
{"Nombre":	CENTRAL	"Direccion":	SALVADOR 364	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43690505	,"Longitude":	-70,62383319	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOPHARMA	"Direccion":	ZEGERS N° 910, LOCAL 2 (ACCESO POR AMUNáTEGUI)	"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,217508	,"Longitude":	-70,14653	,"Stock":	"SI"}
{"Nombre":	UNIVERSAL	"Direccion":	SAN PABLO N° 5238, POBLACIÓN LAUTARO	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,44156	,"Longitude":	-70,70789	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	LIBERTAD N°1190	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,608511	,"Longitude":	-72,093655	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	LOS CREADORES Nº 0191, LOCAL Nº 1756, FUNDO EL CARMEN	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7177284	,"Longitude":	-72,6509883	,"Stock":	"NO"}
{"Nombre":	FARMAXPRESS	"Direccion":	ESTRELLA DE CHILE 95	"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,7854316	,"Longitude":	-71,526902	,"Stock":	"SI"}
{"Nombre":	JUKU EXPRESS	"Direccion":	Cristóbal Colón 461	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,477915	,"Longitude":	-70,318489	,"Stock":	"NO"}
{"Nombre":	BOTICA LAWEN	"Direccion":	AVENIDA RECOLETA 2117	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,40767	,"Longitude":	-70,64312	,"Stock":	"NO"}
{"Nombre":	FARMA-ULLOA	"Direccion":	NUEVA PROVIDENCIA 2160 L-46	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42251382	,"Longitude":	-70,61018074	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	PROVIDENCIA 1403 L-12	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42869105	,"Longitude":	-70,61877308	,"Stock":	"SI"}
{"Nombre":	MAS AHORRO	"Direccion":	MANUEL MONTT 1077 L-4	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43775235	,"Longitude":	-70,61596245	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	PROVIDENCIA 1266  L-6	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42881246	,"Longitude":	-70,62056773	,"Stock":	"NO"}
{"Nombre":	OLIMPICA	"Direccion":	MORANDE 815 L-102	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43416311	,"Longitude":	-70,65438304	,"Stock":	"SI"}
{"Nombre":	ARAUCO	"Direccion":	LAS BELLOTAS 225 L-147	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42251096	,"Longitude":	-70,60807135	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	SANTA ROSA 12832, L-1	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,58342157	,"Longitude":	-70,62838934	,"Stock":	"NO"}
{"Nombre":	FAMILY	"Direccion":	MACUL 4251	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,49288959	,"Longitude":	-70,59995028	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM SANTA FE	"Direccion":	O´HIGGINS SN, SECTOR SANTA FE, LOS ANGELES	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37.465778°	,"Longitude":	-72.582054°	,"Stock":	"SI"}
{"Nombre":	FARMA EXPERTOS	"Direccion":	HOLANDA 0117 L-9	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42026496	,"Longitude":	-70,60383729	,"Stock":	"SI"}
{"Nombre":	FARMA ATENTO	"Direccion":	PAJARITOS 2395	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50570117	,"Longitude":	-70,75705264	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Gran Avenida José Miguel Carrera 10375, LOCAL 1150	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5535969	,"Longitude":	-70,6770414	,"Stock":	"SI"}
{"Nombre":	GUARDIAN	"Direccion":	EYZAGUIRRE N° 669	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59570394	,"Longitude":	-70,7058332	,"Stock":	"NO"}
{"Nombre":	LA FARMA	"Direccion":	Avenida Providencia 1753, local I	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4262255	,"Longitude":	-70,6147586	,"Stock":	"NO"}
{"Nombre":	Mendel	"Direccion":	Península 1808	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,4700229	,"Longitude":	-70,5744754	,"Stock":	"SI"}
{"Nombre":	EL ALBA	"Direccion":	BARON DE JUDAS REALES 3387	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,39879951	,"Longitude":	-70,67755057	,"Stock":	"SI"}
{"Nombre":	FARMAFULL	"Direccion":	PEDRO FONTOVA 6651 L-3	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,36207312	,"Longitude":	-70,67026583	,"Stock":	"SI"}
{"Nombre":	EL SALVADOR	"Direccion":	MONTERREY N°2810	"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,40056312	,"Longitude":	-70,68004484	,"Stock":	"NO"}
{"Nombre":	FARMACIA URBANA	"Direccion":	AVENIDA LA MARINA N°80	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,98448262	,"Longitude":	-71,35881208	,"Stock":	"SI"}
{"Nombre":	FARMACIA VALLENAR	"Direccion":	SANTIAGO 620	"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,575938	,"Longitude":	-70,760253	,"Stock":	"NO"}
{"Nombre":	FARMA DELIVERY	"Direccion":	CALLE EGAñA 1151 PUERTO MONT CENTRO COMERCIAL	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,46985302	,"Longitude":	-72,91700024	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	ZENTENO 21, LOCAL 1016	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6371044	,"Longitude":	-70,3965125	,"Stock":	"SI"}
{"Nombre":	CLINICA PUERTO VARAS	"Direccion":	OTTO BADER N°810	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,31938545	,"Longitude":	-72,99135042	,"Stock":	"SI"}
{"Nombre":	CLINICA PUERTO MONTT	"Direccion":	PANAMERICANA N°400, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4585888	,"Longitude":	-72,9559756	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	GABRIELA 2541 L-10	"Region":	METROPOLITANA	,"Comuna":	LA PINTANA	,"Latitude":	-33,58633971	,"Longitude":	-70,62627571	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. DIEGO PORTALES 81, STRIP CENTER, LOCAL 7	"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43741131	,"Longitude":	-71,07322707	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	GRAN AVENIDA JOSE MIGUEL CARRERA 9501 -9503	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,54546	,"Longitude":	-70,66842	,"Stock":	"NO"}
{"Nombre":	FARMACIA ABIERTA HOSPITAL PU MÜLEN QUILACAHUÍN	"Direccion":	QUILACAHUÍN	"Region":	LOS LAGOS	,"Comuna":	SAN PABLO	,"Latitude":	-40,367462	,"Longitude":	-73,26077747	,"Stock":	"NO"}
{"Nombre":	FARMACIA ABIERTA HOSPITAL FüTA SRüKA LAWENCHE KüNKO MAPU MO	"Direccion":	LAFQUELMAPU S/N	"Region":	LOS LAGOS	,"Comuna":	SAN JUAN DE LA COSTA	,"Latitude":	-40,49082727	,"Longitude":	-73,4033536	,"Stock":	"SI"}
{"Nombre":	FARMACIA AQUAFARMA	"Direccion":	Vicuña Mackenna N° 337	"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4491104	,"Longitude":	-71,2354358	,"Stock":	"SI"}
{"Nombre":	FARMACIA ASISTENCIAL DEL HOSPITAL SAN FRANCISCO DE PUCON	"Direccion":	URUGUAY Nº 325	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	MARGA MARGA	"Direccion":	AV. VALPARAISO 440 - 450	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02453383	,"Longitude":	-71,55638343	,"Stock":	"NO"}
{"Nombre":	MUNDO FARMA	"Direccion":	EYZAGUIRRE N° 650 L-9B	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59510672	,"Longitude":	-70,70751122	,"Stock":	"SI"}
{"Nombre":	FARMACIA ABIERTA HOSPITAL EDUARDO SCHUTZ SCHROEDER	"Direccion":	LOS AROMOS 65	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,44697699	,"Longitude":	-72,95697665	,"Stock":	"NO"}
{"Nombre":	FARMACIA CERRADA HOSPITAL EDUARDO SCHUTZ SCHROEDER	"Direccion":	LOS AROMOS 65	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,44688049	,"Longitude":	-72,95693373	,"Stock":	"NO"}
{"Nombre":	FARMACIA ABIERTA Y CERRADA HOSPITAL SAN JOSÉ DE OSORNO	"Direccion":	DR. GUILLERMO BUHLER 1765	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58673494	,"Longitude":	-73,12823407	,"Stock":	"SI"}
{"Nombre":	FARMACIA ABIERTA  COSAM ORIENTE	"Direccion":	JUAN DE DIOS ÁNGULO 399,OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,57043073	,"Longitude":	-73,12397542	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	AV. LIBERTADOR BERNARDO O"HIGGINS N° 740 LOCAL	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7549333	,"Longitude":	-70,7280596	,"Stock":	"SI"}
{"Nombre":	CEM	"Direccion":	VICUñA MACKENNA 210	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44410591	,"Longitude":	-70,6330208	,"Stock":	"NO"}
{"Nombre":	APROFAR	"Direccion":	Román Díaz 445	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4343025	,"Longitude":	-70,6208923	,"Stock":	"SI"}
{"Nombre":	SALUD FARMA	"Direccion":	CENTRAL 60	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,61852059	,"Longitude":	-70,697346	,"Stock":	"NO"}
{"Nombre":	MARLIOT NEWEN	"Direccion":	LOS LOROS 01744	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,61207762	,"Longitude":	-70,55488834	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	CAMPOS 385	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16985504	,"Longitude":	-70,74225438	,"Stock":	"SI"}
{"Nombre":	FARMACIA DELTASALUD	"Direccion":	LINCOYAN N° 461	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82837	,"Longitude":	-73,05349	,"Stock":	"SI"}
{"Nombre":	FARMACIA LUPITA	"Direccion":	ARTURO PRAT Nº 710	"Region":	ARAUCANIA	,"Comuna":	CURACAUTIN	,"Latitude":	-38,438995	,"Longitude":	-71,8889301	,"Stock":	"SI"}
{"Nombre":	FARMACIA ISOLINA	"Direccion":	AV. CISTERNAS 2037, LOCAL 2	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9207057	,"Longitude":	-71,2461453	,"Stock":	"NO"}
{"Nombre":	NUEVA VIDA	"Direccion":	CHACABUCO 773	"Region":	ÑUBLE	,"Comuna":	COBQUECURA	,"Latitude":	-36,134324	,"Longitude":	-72,795646	,"Stock":	"SI"}
{"Nombre":	FARMASALUD	"Direccion":	SAN FRANCISCO 602	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45199	,"Longitude":	-70,64658	,"Stock":	"NO"}
{"Nombre":	FARMACIA ATENCIóN ABIERTA HOSPITAL DE CASTRO	"Direccion":	Ramón Freire 852	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,476287	,"Longitude":	-73,7683534	,"Stock":	"NO"}
{"Nombre":	FARMACIA ATENCIÓN CERRADA HOSPITAL DE CASTRO	"Direccion":	RAMÓN FREIRE 852	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,47633277	,"Longitude":	-73,76901277	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL PUERTO OCTAY	"Direccion":	PEDRO MONTT Nº 601	"Region":	LOS LAGOS	,"Comuna":	PUERTO OCTAY	,"Latitude":	-40,97173365	,"Longitude":	-72,88288874	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLINICA ALEMANA OSORNO	"Direccion":	ZENTENO 1530	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58322237	,"Longitude":	-73,12148854	,"Stock":	"SI"}
{"Nombre":	PHARMA NORTE	"Direccion":	Cancha Rayada 4290	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4341492	,"Longitude":	-70,2917077	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA RECOLETA 2293	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,40589	,"Longitude":	-70,64297	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA CONCHA Y TORO 464	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60779	,"Longitude":	-70,57653	,"Stock":	"NO"}
{"Nombre":	LESTRANGE	"Direccion":	O’HIGGINS 918 L-A	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59051	,"Longitude":	-70,70928	,"Stock":	"NO"}
{"Nombre":	SESSAREGO	"Direccion":	MAPOCHO 3245	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43273	,"Longitude":	-70,67995	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLINICA LOS ANDES	"Direccion":	GENARO REYES 581, SUBTERRANEO	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467924	,"Longitude":	-72,337299	,"Stock":	"SI"}
{"Nombre":	FARMAAHORRO	"Direccion":	AVENIDA RANCAGUA N° 0112	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44118	,"Longitude":	-70,63095	,"Stock":	"SI"}
{"Nombre":	SANTA ANA	"Direccion":	AVENIDA SUR N° 1654	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,52172	,"Longitude":	-70,78138	,"Stock":	"NO"}
{"Nombre":	FARMA IN	"Direccion":	TUCAPEL 2334	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,47678512	,"Longitude":	-70,29205892	,"Stock":	"SI"}
{"Nombre":	CHILE	"Direccion":	ZAÑARTU N° 1100, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,47281	,"Longitude":	-70,62094	,"Stock":	"NO"}
{"Nombre":	XANIPHARMA	"Direccion":	SANTA ROSA Nº 603	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8362008	,"Longitude":	-70,5999837	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DOCTOR SIMI	"Direccion":	CLAUDINA URRUTIA Nº41 LOCALES 2 Y 3 CAUQUENES	"Region":	MAULE	,"Comuna":	CAUQUENES	,"Latitude":	-35,972121	,"Longitude":	-72,315659	,"Stock":	"SI"}
{"Nombre":	FARMACIA  MI BARRIO	"Direccion":	AVENIDA BALMACEDA 4958	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94427476	,"Longitude":	-71,26524433	,"Stock":	"SI"}
{"Nombre":	TU FARMACIA DIGITAL DEL BARRIO	"Direccion":	RIO DE JANEIRO N° 5530	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50679	,"Longitude":	-70,64149	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMALAB	"Direccion":	BLANCO 1199 LOCAL 2	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33.04233800985742,	,"Longitude":	-71,62365815	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DE PUERTO AYSEN	"Direccion":	YUSEFF LAIBE 180, PUERTO AYSEN	"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	45,4077476	,"Longitude":	-72,6860008	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL REGIONAL COYHAIQUE	"Direccion":	JORGE IBAR 068	"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	45,5684046	,"Longitude":	72,0733646	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN ESTEBAN	"Direccion":	AV. ALESSANDRI N° 1609 LOCAL 4, SAN ESTEBAN	"Region":	VALPARAISO	,"Comuna":	SAN ESTEBAN	,"Latitude":	-32,8082602	,"Longitude":	-70,5844951	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 2772, 2798, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45039	,"Longitude":	-70,67528	,"Stock":	"SI"}
{"Nombre":	PATRONATO	"Direccion":	PATRONATO 437	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42814	,"Longitude":	-70,64374	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA COLIN, 0635 LOCAL 2	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,444452	,"Longitude":	-71,686431	,"Stock":	"SI"}
{"Nombre":	SALUD EN TU BARRIO	"Direccion":	INGENIERO BUDGE N° 705	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,49655	,"Longitude":	-70,64348	,"Stock":	"NO"}
{"Nombre":	MARIA ELENA	"Direccion":	MARIA ELENA 735	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,56146	,"Longitude":	-70,59518	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL LAGO SEGUNDA FAJA	"Direccion":	AVENIDA SEGUNDA FAJA AL VOLCAN Nº 1640, LOCAL 1	"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,3062947	,"Longitude":	-72,2149595	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	SAN MARTÍN N° 715 LOCAL 3	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82794	,"Longitude":	-73,04843	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BARATITA Nº2	"Direccion":	MANUEL RODRÍGUEZ Nº687, LOCAL 4 CURICÓ	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,984188	,"Longitude":	-71,242782	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAVENZ	"Direccion":	JANUARIO ESPINOZA Nº1610 LINARES	"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,834492	,"Longitude":	-71-583653	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVENIDA COLIN Nº0635 LOCAL 2 TALCA	"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,444452	,"Longitude":	-71686431	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 3322, LOCALES G0160 - G0174	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45174	,"Longitude":	-70,67998	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAS	"Direccion":	AVENIDA CENTENARIO N° 22, LOCAL 30	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5811526	,"Longitude":	-71,6131416	,"Stock":	"SI"}
{"Nombre":	TU RINCÓN SALUD	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA N° 13575, LOCAL 1A	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,57825	,"Longitude":	-70,69375	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	GOMEZ CARREÑO, 3425, LOCAL INTERIOR DEL SUPERMERCADO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,74518	,"Longitude":	-73,09536	,"Stock":	"NO"}
{"Nombre":	FARMACIA CLINICA ADVENTISTA	"Direccion":	MANUEL RODRIGUEZ 256	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,474989	,"Longitude":	-72,354499	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" L-712	"Direccion":	PABLO NERUDA Nº 02189, LOCALES 101-102-103	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,73721066	,"Longitude":	-72,63352637	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMPLEJO ASISTENCIAL DR VICTOR RIOS RUIZ	"Direccion":	RICARDO VICUÑA 147	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,473371	,"Longitude":	-72,346968	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM NUEVO HORIZONTE	"Direccion":	AGUAS CALIENTES 2350	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,467661	,"Longitude":	-72,383512	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM 2 DE SEPTIEMBRE	"Direccion":	CONDELL 1150	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,477321	,"Longitude":	-72,365264	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM NOR-ORIENTE	"Direccion":	PASAJE MORSE 1585	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,4573	,"Longitude":	-72,34285	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM SUR	"Direccion":	JUAN GUZMAN 437	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,485704	,"Longitude":	-72,339095	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM NORTE	"Direccion":	AVENIDA LOS ANGELES 810	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,463611	,"Longitude":	-72,361897	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM ENTRE RIOS	"Direccion":	AVENIDA ORIENTE 2201	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,491635	,"Longitude":	-72,327297	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM SAN ROSENDO	"Direccion":	BAQUEDANO 95	"Region":	BIOBIO	,"Comuna":	SAN ROSENDO	,"Latitude":	-37,262738	,"Longitude":	-72,726697	,"Stock":	"SI"}
{"Nombre":	CAFANY	"Direccion":	AVENIDA PEDRO DE VALDIVIA N° 94	"Region":	LOS RIOS	,"Comuna":	MAFIL	,"Latitude":	-39,65737574	,"Longitude":	-72,94719167	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM YANEQUEN	"Direccion":	IGNACION CARRERA PINTO 80	"Region":	BIOBIO	,"Comuna":	NEGRETE	,"Latitude":	-37,585518	,"Longitude":	-72,533368	,"Stock":	"SI"}
{"Nombre":	COLLICO	"Direccion":	RÍO PUELO N° 6785	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,79329971	,"Longitude":	-73,20169475	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM MONTE AGUILA	"Direccion":	LOS OLMOS 90, MONTE AGUILA	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,084151	,"Longitude":	-72,435902	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM CABRERO	"Direccion":	LAS VIOLETAS 805	"Region":	BIOBIO	,"Comuna":	CABRERO	,"Latitude":	-37,038209	,"Longitude":	-72,397351	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM ANTUCO	"Direccion":	OHIGGINS 560	"Region":	BIOBIO	,"Comuna":	ANTUCO	,"Latitude":	-37,330015	,"Longitude":	-71,673228	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM YUMBEL ESTACION	"Direccion":	LA CONCEPCION 275	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,144709	,"Longitude":	-72,538873	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM QUILACO	"Direccion":	OHIGGINS 1335	"Region":	BIOBIO	,"Comuna":	QUILACO	,"Latitude":	-37,683579	,"Longitude":	-72,003299	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM RALCO	"Direccion":	PASEO EPU TRANKITUN KIMUN 95, VILLA RALCO	"Region":	BIOBIO	,"Comuna":	ALTO BIO BIO	,"Latitude":	-37,88057	,"Longitude":	-71,638279	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM QUILLECO	"Direccion":	ARTURO PRAT 310	"Region":	BIOBIO	,"Comuna":	QUILLECO	,"Latitude":	-37,468283	,"Longitude":	-71,9824	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM CANTERAS	"Direccion":	DIEGO PORTALES SN, CANTERAS	"Region":	BIOBIO	,"Comuna":	QUILLECO	,"Latitude":	-37,402213	,"Longitude":	-72,01004	,"Stock":	"NO"}
{"Nombre":	FARMACIA HOSPITAL DE LAJA	"Direccion":	AV LOS RIOS 800	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,26469	,"Longitude":	-72,709033	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL DE YUMBEL	"Direccion":	CASTELLON 251	"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,096816	,"Longitude":	-72,557391	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL DE NACIMIENTO	"Direccion":	JULIO HEMMELMANN 711	"Region":	BIOBIO	,"Comuna":	NACIMIENTO	,"Latitude":	-37,50812	,"Longitude":	-72,676839	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL DE HUEPIL	"Direccion":	12 DE FEBRERO 233, HUEPIL	"Region":	BIOBIO	,"Comuna":	TUCAPEL	,"Latitude":	-37,239958	,"Longitude":	-71,942035	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM TUCAPEL	"Direccion":	COMERCIO 430	"Region":	BIOBIO	,"Comuna":	TUCAPEL	,"Latitude":	-37,293516	,"Longitude":	-71,948627	,"Stock":	"SI"}
{"Nombre":	FARMEDICAL	"Direccion":	Barros Arana 2114	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,471333	,"Longitude":	-70,299986	,"Stock":	"NO"}
{"Nombre":	ANTU FARMACIA	"Direccion":	RENé SORIANO 2381, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,58174	,"Longitude":	-73,11144	,"Stock":	"NO"}
{"Nombre":	FARMAQUINTA	"Direccion":	AV. VALPARAÍSO 1621	"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0449081	,"Longitude":	-71,3857078	,"Stock":	"SI"}
{"Nombre":	POPULAR DE PUDAHUEL SUR	"Direccion":	PUERTO ARTURO N° 8261	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,46184	,"Longitude":	-70,74566	,"Stock":	"SI"}
{"Nombre":	BIOCUBA	"Direccion":	MATIAS COUSIÑO N° 86	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44182	,"Longitude":	-70,64978	,"Stock":	"SI"}
{"Nombre":	DOMINGUEZ	"Direccion":	AVENIDA EL DESCANSO N° 1400, LOCALES 10 Y 11	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,46994	,"Longitude":	-70,75712	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL DE TALCAHUANO	"Direccion":	SARGENTO ALDEA N° 250	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71496	,"Longitude":	-73,11448	,"Stock":	"SI"}
{"Nombre":	ATIKA	"Direccion":	Doctor Juan Noe 701 - 711, oficina 1	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,477683	,"Longitude":	-70,312489	,"Stock":	"NO"}
{"Nombre":	FARMISALUD	"Direccion":	ARGENTINA N° 586, LOCAL 3073	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,49869	,"Longitude":	-70,76392	,"Stock":	"NO"}
{"Nombre":	MASPHARMA	"Direccion":	ARGENTINA N° 179	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6045836	,"Longitude":	-72,09130752	,"Stock":	"SI"}
{"Nombre":	TU FARMACIA MOVIL	"Direccion":	GUANAQUEROS S/N RETEN CARABINEROS	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	FARMACIA DAFARMA	"Direccion":	AVENIDA BARROS LUCO Nº 1401, LOCAL 1	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5917953	,"Longitude":	-71,6131389	,"Stock":	"SI"}
{"Nombre":	FARMACIA PHARMAPUERTO	"Direccion":	RUTA 66 # 311, LOCAL 11	"Region":	VALPARAISO	,"Comuna":	SANTO DOMINGO	,"Latitude":	-33,6456332	,"Longitude":	-71,6097433	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	ARTURO PRAT 619	"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7880354	,"Longitude":	-71,1900715	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA FRANCIA N° 2651	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,83734491	,"Longitude":	-73,23101846	,"Stock":	"NO"}
{"Nombre":	MOUR	"Direccion":	CATEDRAL N° 4589	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,44109	,"Longitude":	-70,69768	,"Stock":	"NO"}
{"Nombre":	KRISHNA	"Direccion":	AVENIDA JOSÉ JOAQUÍN PÉREZ N° 6825, LOCAL C	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,42872	,"Longitude":	-70,72974	,"Stock":	"SI"}
{"Nombre":	LA TRINIDAD	"Direccion":	CONSTITUCIÓN N° 691 LOCAL 1	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60769075	,"Longitude":	-72,10151412	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	LOS CARRERA 721 LOCAL 9	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0480655	,"Longitude":	-71,4428495	,"Stock":	"SI"}
{"Nombre":	DOMINGUEZ	"Direccion":	AVENIDA LA ESTRELLA N° 1007	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,44025	,"Longitude":	-70,75315	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA VICUÑA MACKENNA PONIENTE N° 7257, LOCAL E	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52085	,"Longitude":	-70,60156	,"Stock":	"SI"}
{"Nombre":	ARAGÓN	"Direccion":	AVENIDA CRISTOBAL COLÓN N° 6027 1A	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41676	,"Longitude":	-70,56524	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNAL DE SAN PEDRO	"Direccion":	LUIS ALBERTO Nº 40	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,933345	,"Longitude":	-71,272245	,"Stock":	"NO"}
{"Nombre":	FARMAINTEGRAL	"Direccion":	COIMAS 1162	"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74988983	,"Longitude":	-70,72398551	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAGALLANES	"Direccion":	21 DE MAYO 3190, LOCALES 1 Y 2	"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1828603	,"Longitude":	-70,9271866	,"Stock":	"SI"}
{"Nombre":	FARMACIA REGIONAL	"Direccion":	Avenida Guillermo Ulriksen 2728	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93375184	,"Longitude":	-71,23806952	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA ALESSANDRI 531	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96746758	,"Longitude":	-71,33980421	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	AVENIDA SAN JUAN 6 LOCAL 1	"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1692328	,"Longitude":	-70,6772026	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA COMARCA	"Direccion":	Avenida Manso de Velasco 224	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5752885	,"Longitude":	-70,9909707	,"Stock":	"NO"}
{"Nombre":	FIRSTFARMA	"Direccion":	AVENIDA PERÚ N° 10041, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,54848	,"Longitude":	-70,58321	,"Stock":	"NO"}
{"Nombre":	LATINFARMA	"Direccion":	AVENIDA MARÍA ROZAS VELÁQUEZ N° 45, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45449	,"Longitude":	-70,70558	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLINICA LA PORTADA	"Direccion":	AVDA BALMACEDA N° 2648	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6509279	,"Longitude":	-70,3975022	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	AV. BALMACEDA N° 3242 LOCAL A-112	"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4543923	,"Longitude":	-68,9293819	,"Stock":	"SI"}
{"Nombre":	GENERICA	"Direccion":	RAMON ROSALES 1087	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,37031	,"Longitude":	-70,72072	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA PROVIDENCIA 1936	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42392	,"Longitude":	-70,61352	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR.SIMI	"Direccion":	AV.ERRAZURIZ N° 380-A	"Region":	OHIGGINS	,"Comuna":	PERALILLO	,"Latitude":	-34,47979336	,"Longitude":	-71,47924911	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA PRINCIPAL	"Direccion":	RANCAGUA N°722	"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58708558	,"Longitude":	-70,98316644	,"Stock":	"NO"}
{"Nombre":	FARMACIA PROVINCIAL	"Direccion":	INDEPENDENCIA N° 1702	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04684465	,"Longitude":	-71,61932927	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA LAS CONDES 9160, LOCAL 5	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,39162	,"Longitude":	-70,5432	,"Stock":	"SI"}
{"Nombre":	LA UNION	"Direccion":	CURICÓ N° 82, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44369	,"Longitude":	-70,63485	,"Stock":	"SI"}
{"Nombre":	COFARMA	"Direccion":	SALVADOR GUTIÉRREZ N° 7953 B	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,41657	,"Longitude":	-70,7493	,"Stock":	"NO"}
{"Nombre":	FARMACIA MARTIN GALENO	"Direccion":	QUECHEREGUAS Nº1985	"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,115059	,"Longitude":	-71,281494	,"Stock":	"SI"}
{"Nombre":	NOVASALUD	"Direccion":	ASTORGA 105, LOC 2 Y 3	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16670962	,"Longitude":	-70,74294201	,"Stock":	"NO"}
{"Nombre":	EL QUIMICO	"Direccion":	CARLOS WILSON 1461	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4423669	,"Longitude":	-70,61312877	,"Stock":	"NO"}
{"Nombre":	TODOFARMA	"Direccion":	FRAY CAMILO HENRIQUEZ 658	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45040865	,"Longitude":	-70,63364097	,"Stock":	"SI"}
{"Nombre":	FARMA TOUT	"Direccion":	LO CRUZAT N° 69, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36502	,"Longitude":	-70,72139	,"Stock":	"SI"}
{"Nombre":	IPHARMA	"Direccion":	ARLEGUI 1018, LOCAL 3, VIÑA DEL MAR	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,015904	,"Longitude":	-71,554154	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIENESTAR	"Direccion":	JAPON N°4281	"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,292652	,"Longitude":	-70,097262	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	SANTIAGO TORRES 171, LOCALES 6 Y 7	"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,726366	,"Longitude":	-71,4137631	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUERTO VARAS	"Direccion":	PIO NONO 420, PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,31832	,"Longitude":	-72,98577	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIENESTAR	"Direccion":	ANTONIO VARAS 203, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47183	,"Longitude":	-72,93675	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA REBAJA	"Direccion":	ANIBAL PINTO 312, ANCUD	"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,86827	,"Longitude":	-73,82574	,"Stock":	"SI"}
{"Nombre":	FARMACIA MIRADOR	"Direccion":	VOLCÁN SIERRA NEVADA, MZ 10 LOTE 12, MIRADOR DE PUERTO VARAS	"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,344452	,"Longitude":	-72,945917	,"Stock":	"SI"}
{"Nombre":	FARMACIA AHORRO	"Direccion":	TOMAS ARGOMEDO 1667	"Region":	OHIGGINS	,"Comuna":	QUINTA DE TILCOCO	,"Latitude":	-34,35388762	,"Longitude":	-70,96269304	,"Stock":	"SI"}
{"Nombre":	OBELISCO	"Direccion":	MANUEL MONTT 686 L-2	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43436753	,"Longitude":	-70,61659636	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA MANUEL ANTONIO MATTA N° 60, LOCAL 12	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45502	,"Longitude":	-70,6286	,"Stock":	"SI"}
{"Nombre":	VECINA METRO LO CRUZAT	"Direccion":	AVENIDA MANUEL ANTONIO MATTA N° 928, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,366286	,"Longitude":	-70,722455	,"Stock":	"NO"}
{"Nombre":	ECO FARMACIAS	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS N° 991	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44336	,"Longitude":	-70,65026	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMINO A MELIPILLA 7003, LOCAL A-1	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,501488	,"Longitude":	-70,710672	,"Stock":	"SI"}
{"Nombre":	FARMALIANZA	"Direccion":	AVENIDA EJÉRCITO LIBERTADOR N° 1963	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5941	,"Longitude":	-70,59503	,"Stock":	"SI"}
{"Nombre":	LINDEROS	"Direccion":	FRANCISCO JAVIER KURGGER N° 2218, LOCAL A	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,74408	,"Longitude":	-70,73555	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA PADRE ALFREDO ARTEAGA BARROS N° 1771, LOCAL C	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35359	,"Longitude":	-70,51077	,"Stock":	"NO"}
{"Nombre":	DALEM	"Direccion":	AVENIDA CONCHA Y TORO N° 2097	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59324	,"Longitude":	-70,57884	,"Stock":	"SI"}
{"Nombre":	FARMABARRIO	"Direccion":	AVENIDA CONCHA Y TORO N° 199	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,60997	,"Longitude":	-70,57569	,"Stock":	"NO"}
{"Nombre":	ECO FARMACIAS	"Direccion":	AVENIDA RECOLETA N° 313	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42946	,"Longitude":	-70,6468	,"Stock":	"NO"}
{"Nombre":	CENTINELA	"Direccion":	AVENIDA RECOLETA N° 2401 - 2415	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,40488	,"Longitude":	-70,64296	,"Stock":	"SI"}
{"Nombre":	FARMACIA INKAÜN	"Direccion":	AVENIDA BERNARDO O´HIGGINS N° 964 LOCAL 3, PUCON	"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,276453	,"Longitude":	-71,966254	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAVITAL	"Direccion":	MAUEL MATTA N° 400 - A	"Region":	ARAUCANIA	,"Comuna":	GORBEA	,"Latitude":	-39,100235	,"Longitude":	-72,677061	,"Stock":	"SI"}
{"Nombre":	FARMACIAS FARMATOTAL(L-05)	"Direccion":	GENERAL LAGOS N° 570	"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,2345773	,"Longitude":	-72,3327888	,"Stock":	"NO"}
{"Nombre":	GO FARMA	"Direccion":	AVENIDA JAIME GUZMAN N° 2289	"Region":	METROPOLITANA	,"Comuna":	ISLA DE MAIPO	,"Latitude":	-33,73553	,"Longitude":	-70,91283	,"Stock":	"SI"}
{"Nombre":	BEAUPHARMA	"Direccion":	BARROS LUCO N° 1980	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,2867	,"Longitude":	-70,86998	,"Stock":	"NO"}
{"Nombre":	SANTA RITA	"Direccion":	BUENAVENTURA N° 3795	"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,50637	,"Longitude":	-70,69167	,"Stock":	"NO"}
{"Nombre":	FARMACIA KARAL	"Direccion":	AV. JUAN MARTÍNEZ N°714	"Region":	ATACAMA	,"Comuna":	DIEGO DE ALMAGRO	,"Latitude":	-26,39056995	,"Longitude":	-70,04224748	,"Stock":	"SI"}
{"Nombre":	MAS AHORRO	"Direccion":	SAN FELIPE NERI N° 2593	"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,562448	,"Longitude":	-70,825862	,"Stock":	"SI"}
{"Nombre":	FARMATOP	"Direccion":	AVENIDA MIRAFLORES 1185, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6007	,"Longitude":	-70,863459	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	21 DE MAYO 4400, LOCALES C Y D	"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,60843	,"Longitude":	-70,89978	,"Stock":	"NO"}
{"Nombre":	MEDDICA	"Direccion":	AVENIDA CARRASCAL 4436, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,42323	,"Longitude":	-70,69419	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA SANTA ROSA N° 6, LOCAL 13	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44312	,"Longitude":	-70,64577	,"Stock":	"NO"}
{"Nombre":	NUEVA FARMACIA	"Direccion":	MANUEL MONTT N°267	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43089611	,"Longitude":	-70,61898466	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	LIBERTADOR BERNARDO O`HIGGINS N°3780	"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33.452498099902485,	,"Longitude":	-70,68720713	,"Stock":	"SI"}
{"Nombre":	LA TORRE	"Direccion":	ALMTE. LATORRE N°762	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33.45582949744781,	,"Longitude":	-70,66416714	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AV. LA FLORIDA N°8220	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,52750621	,"Longitude":	-70,57627039	,"Stock":	"SI"}
{"Nombre":	SAN LUIS	"Direccion":	SAN LUIS DE MACUL N°4961	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33.50517858937262,	,"Longitude":	-70,58258424	,"Stock":	"NO"}
{"Nombre":	ITALPHARMA	"Direccion":	AVENIDA TOBALABA 13949, LOCAL 112	"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,50301	,"Longitude":	-70,56147	,"Stock":	"SI"}
{"Nombre":	PHARMED	"Direccion":	PEDRO DE VALDIVIA 2272, LOCAL 102	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44326	,"Longitude":	-70,60623	,"Stock":	"NO"}
{"Nombre":	MUNICIPAL DE PUDAHUEL	"Direccion":	LOS EDILES N° 775	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,44565	,"Longitude":	-70,74456	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA JOSÉ MANUEL BALMACEDA 208	"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,73335	,"Longitude":	-70,73621	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	AVENIDA APOQUINDO 4400, LOCALES 144, 146 Y 148. SUBCENTRO LAS CONDES	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41366	,"Longitude":	-70,58399	,"Stock":	"SI"}
{"Nombre":	FARMALIFE	"Direccion":	ARTURO PRAT N° 796	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,650323	,"Longitude":	-70,3950736	,"Stock":	"SI"}
{"Nombre":	FARMACIA LIBERTAD	"Direccion":	CONSTITUCIÓN N° 110 LOCAL 7	"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,31976504	,"Longitude":	-71,41001415	,"Stock":	"NO"}
{"Nombre":	OLIMPICA	"Direccion":	CONCHA Y TORO 1184	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59984831	,"Longitude":	-70,57875082	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	CAMILO HENRIQUEZ 1042	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59049467	,"Longitude":	-70,54133612	,"Stock":	"NO"}
{"Nombre":	FARMACIA ARBER	"Direccion":	AVENIDA ARGENTINA N° 603 LOCAL 3	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04860459	,"Longitude":	-71,60312231	,"Stock":	"NO"}
{"Nombre":	LA CAPSULA	"Direccion":	MIRAFLORES 212	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44019705	,"Longitude":	-70,64537505	,"Stock":	"SI"}
{"Nombre":	FARMACIA DERMAEXPRES	"Direccion":	AV. PEDRO AGUIRRE CERDA N° 8251, LOCAL 17	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,592892	,"Longitude":	-70,390212	,"Stock":	"SI"}
{"Nombre":	FARMATENCION	"Direccion":	AVENIDA IRARRáZAVAL 2220, L-3	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45351	,"Longitude":	-70,60798	,"Stock":	"SI"}
{"Nombre":	FARMACIA MARGA MARGA	"Direccion":	MAIPU N°205	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8323497	,"Longitude":	-70,5971637	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR LLAY-LLAY	"Direccion":	AGUSTIN EDWARDS 122	"Region":	VALPARAISO	,"Comuna":	LLAY LLAY	,"Latitude":	-32,8423288	,"Longitude":	-70,9519413	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAHORRA	"Direccion":	MAIPU Nº 191	"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8321343	,"Longitude":	-70,5970829	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	AVEMIDA VALPARAISO 473-477 LOCAL 1 Y 2	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0243656	,"Longitude":	-71,5580906	,"Stock":	"NO"}
{"Nombre":	FARMACIA KNOP	"Direccion":	AVENIDA EDMUNDO ELUCHANS Nº1850 LOCAL 5, REÑACA	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9582617	,"Longitude":	-71,5484784	,"Stock":	"SI"}
{"Nombre":	FARMACIA REÑACA	"Direccion":	Avenida Borgoño 14490, local 5	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,97196655	,"Longitude":	-71,54373153	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DOCTOR SIMI	"Direccion":	BAQUEDANO 1277	"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,45490359	,"Longitude":	-71,66813869	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALTO MIRADOR	"Direccion":	AVENIDA MANUEL MONTT TORRES 993-A	"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,59163637	,"Longitude":	-71,5980683	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	ESTADO 390	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43873	,"Longitude":	-70,6498	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	SAN MARTIN 637, CASTRO	"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,47865	,"Longitude":	-73,76358	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MARGA MARGA	"Direccion":	DIEGO PORTALES 2998, LOCAL 100	"Region":	VALPARAISO	,"Comuna":	OLMUE	,"Latitude":	-32,9877778	,"Longitude":	-71,1850558	,"Stock":	"NO"}
{"Nombre":	INSTAFARM	"Direccion":	AVENIDA MACUL 3941	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,47117	,"Longitude":	-70,59869	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA CRISTOBAL COLÓN 4359	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,42378	,"Longitude":	-70,58018	,"Stock":	"SI"}
{"Nombre":	BAC	"Direccion":	SAN JUAN VALDÉS N° 1402, LOCAL 2, TORRE F	"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,4262	,"Longitude":	-70,76697	,"Stock":	"SI"}
{"Nombre":	FARMACIA SERVISALUD	"Direccion":	PEÑA Nº230	"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,989166	,"Longitude":	-71,240895	,"Stock":	"NO"}
{"Nombre":	FARMACIA LAJA SALUD	"Direccion":	ARTURO PRAT 479 LOCAL 2	"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,2779226	,"Longitude":	-72,7166167	,"Stock":	"SI"}
{"Nombre":	FARMACIA INNOVAFARMA	"Direccion":	SAN MARTÍN 815 DPTO 104	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82761	,"Longitude":	-73,04717	,"Stock":	"NO"}
{"Nombre":	MIROPHAR	"Direccion":	AVENIDA PADRE HURTADO N° 15.787	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,60458	,"Longitude":	-70,68288	,"Stock":	"NO"}
{"Nombre":	DYLAN	"Direccion":	TILAMA N° 3210	"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,49377	,"Longitude":	-70,6774	,"Stock":	"SI"}
{"Nombre":	FARMACIA DIAGUITA	"Direccion":	CALLE EL LITRE 2103	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9251037	,"Longitude":	-71,2029225	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAAAC	"Direccion":	ALTO HORNO 777, TALCAHUANO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	INSTITUCIONAL	"Direccion":	MORANDÉ 107, PISO 11	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44201	,"Longitude":	-70,65317	,"Stock":	"NO"}
{"Nombre":	FARMACIA SATéLITE	"Direccion":	ALTO HORNO 777, TALCAHUANO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA URGENCIA	"Direccion":	ALTO HORNO 777, TALCAHUANO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA CAAAC	"Direccion":	ALTO HORNO 777, TALCAHUANO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	YOU PHARMA	"Direccion":	EUSEBIO LILLO 440-446, LOCAL 28	"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42879	,"Longitude":	-70,6446	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA CONCHA Y TORO 114	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,61088	,"Longitude":	-70,57596	,"Stock":	"SI"}
{"Nombre":	CENTRAL	"Direccion":	AVENIDA PORTUGAL 170, LOCAL 2	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44438	,"Longitude":	-70,63674	,"Stock":	"SI"}
{"Nombre":	MANQUEL	"Direccion":	AVENIDA EL PERAL 02124, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,57188	,"Longitude":	-70,55944	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	MONUMENTO 1868	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51014	,"Longitude":	-70,75895	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA MANUEL ANTONIO MATTA 536	"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36573	,"Longitude":	-70,72907	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA LOS PAJARITOS 1948	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50971	,"Longitude":	-70,75758	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA 5 DE ABRIL 177-A	"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,51042	,"Longitude":	- 70.75946	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	AVENIDA BERNARDO O'HIGGINS 1074	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,66384	,"Longitude":	-70,92827	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITALIZADO	"Direccion":	ALTO HORNO 777, TALCAHUANO	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATUYA	"Direccion":	LOS CLAVELES, 455, LOCAL 2, HUERTOS FAMILIARES	"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,832	,"Longitude":	-73,11497	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	MANUEL MONTT N° 480	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,01895	,"Longitude":	-73,15507	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	MANUEL MONTT N°2117, LOCAL 4	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-36,99881	,"Longitude":	-73,16227	,"Stock":	"NO"}
{"Nombre":	FARMACIA 21 DE MAYO	"Direccion":	O'HIGGINS PONIENTE N°77, LOCAL 5	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,83167	,"Longitude":	-73,05948	,"Stock":	"NO"}
{"Nombre":	FARMACIA LOTA SALUD	"Direccion":	PEDRO AGUIRRE CERDA N°735	"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,09128	,"Longitude":	-73,15781	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	FREIRE N°550-560	"Region":	BIOBIO	,"Comuna":	PENCO	,"Latitude":	-36,73726	,"Longitude":	-72,99425	,"Stock":	"SI"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	AV. COLON N°352	"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7135	,"Longitude":	-73,11331	,"Stock":	"SI"}
{"Nombre":	PATAGONIA	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 2481	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44821	,"Longitude":	-70,67012	,"Stock":	"NO"}
{"Nombre":	TU SALUD	"Direccion":	Guillermo Thomas 18	"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4949391	,"Longitude":	-70,3046212	,"Stock":	"SI"}
{"Nombre":	COOPERCARAB ANTOFAGASTA	"Direccion":	AVDA PEDRO AGUIRRE CERDA 8251 LOCAL 01, TERCER PISO	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,592892	,"Longitude":	-70,390212	,"Stock":	"NO"}
{"Nombre":	FARMACIA URIBE	"Direccion":	URIBE 815	"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6525342	,"Longitude":	-70,3973066	,"Stock":	"NO"}
{"Nombre":	AGUSTIN	"Direccion":	SALOMON SACK 620	"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,41769879	,"Longitude":	-70,67424942	,"Stock":	"SI"}
{"Nombre":	FARMACHILE	"Direccion":	UNO PONIENTE Nº811, LOCAL 101	"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0135495	,"Longitude":	-71,5535342	,"Stock":	"SI"}
{"Nombre":	FARMACIA VITAL SALUD	"Direccion":	AV. PROVINCIAL N° 2898, VILLA FLORENCIA 4	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1816418	,"Longitude":	-70,7691621	,"Stock":	"SI"}
{"Nombre":	S&S	"Direccion":	AVENIDA MACUL 3857	"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,48878	,"Longitude":	-70,59985	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	FREIRE N° 681-699	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82523	,"Longitude":	-73,05066	,"Stock":	"SI"}
{"Nombre":	FARMACIA DOCTOR MONTECINOS	"Direccion":	VALDIVIA 394, LOS ANGELES	"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,469232	,"Longitude":	-72,352368	,"Stock":	"NO"}
{"Nombre":	FARMACIA TUCAPEL	"Direccion":	JUAN DE DIOS RIVERA 1083	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8098	,"Longitude":	-73,05436	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA LAS CONDES 14141, LOCALES 16 Y 17	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,36879	,"Longitude":	-70,50203	,"Stock":	"SI"}
{"Nombre":	MARKETFARMA	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA N° 2584	"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,47843	,"Longitude":	-70,64803	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	AVENIDA PLAYA ANCHA N° 194, VALPARAÍSO	"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,03016147	,"Longitude":	-71,63587414	,"Stock":	"SI"}
{"Nombre":	VERO - PHARMA	"Direccion":	LOS CANELOS N° 28	"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,56301	,"Longitude":	-70,58544	,"Stock":	"NO"}
{"Nombre":	LA ECONÓMICA	"Direccion":	AVENIDA SAN PABLO N° 5416, LOCAL 1	"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,44219	,"Longitude":	-70,71023	,"Stock":	"SI"}
{"Nombre":	FARMACIA YOBILO	"Direccion":	MANUEL MONTT N° 0902	"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,01171	,"Longitude":	-73,15646	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	PANAMERICANA NORTE 16870, LOCALES 02, 03, 04 Y 05	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,311297	,"Longitude":	-70,725504	,"Stock":	"NO"}
{"Nombre":	CHILENA	"Direccion":	AVENIDA BERNARDO O'HIGGINS N° 2337, LOCAL 6	"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,66974	,"Longitude":	-70,94002	,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN PABLO COQUIMBO	"Direccion":	AV. VIDELA S/N	"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96785737	,"Longitude":	-71,33672069	,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN JUAN DE DIOS DE LA SERENA	"Direccion":	AV. BALMACEDA 916	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	HOSPITAL HUMBERTO ELORZA CORTES	"Direccion":	INDEPENDENCIA 0512	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	HOSPITAL SALAMANCA	"Direccion":	AV. JOSE MANUEL INFANTE 891	"Region":	COQUIMBO	,"Comuna":	SALAMANCA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN JUAN DE DIOS VICUÑA	"Direccion":	ARTURO PRAT 591	"Region":	COQUIMBO	,"Comuna":	VICUÑA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	HOSPTAL DR. JOSE LUIS ARRAÑO DE ANDACOLLO	"Direccion":	URMENETA 2	"Region":	COQUIMBO	,"Comuna":	ANDACOLLO	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	HOSPITAL SAN JUAN DE DIOS COMBARBALA	"Direccion":	COMERCIO 650	"Region":	COQUIMBO	,"Comuna":	COMBARBALA	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN PEDRO LOS VILOS	"Direccion":	ARAUCO 400	"Region":	COQUIMBO	,"Comuna":	LOS VILOS	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	HOSPITAL OVALLE	"Direccion":	AVENIDA MANUEL PEñAFIEL OLIVARES 1550	"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":		,"Longitude":		,"Stock":	"SI"}
{"Nombre":	FARMACIA MONACO	"Direccion":	BENAVENTE 327, PUERTO MONTT	"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4707	,"Longitude":	-72,93902	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	AVENIDA EL PERAL N° 191	"Region":	VALPARAISO	,"Comuna":	CARTAGENA	,"Latitude":	-33,52661231	,"Longitude":	-71,59762153	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDSAL	"Direccion":	HEROES DE LA CONCEPCIÓN 546, OSORNO	"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,56462	,"Longitude":	-73,15158	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	LAGO PUYEHUE N° 01745	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737074	,"Longitude":	-72,627321	,"Stock":	"NO"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	RUDECINDO ORTEGA N° 01738 LOCAL 150 Y 151	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,712975	,"Longitude":	-72,562186	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN LUIS	"Direccion":	ANTONIO VARAS N° 657	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7400109	,"Longitude":	-72,5929833	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	EL ROBLE N° 623, COMUNA DE CHILLáN	"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60848	,"Longitude":	-72,10284	,"Stock":	"SI"}
{"Nombre":	VIDAFARMA	"Direccion":	Gran Avenida José Miguel Carrera 11908	"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5642308	,"Longitude":	-70,6825532	,"Stock":	"NO"}
{"Nombre":	JM	"Direccion":	COQUIMBO 2458	"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,58963743	,"Longitude":	-70,58594584	,"Stock":	"SI"}
{"Nombre":	CONDE DE MANZO	"Direccion":	CONDE DE MANSO 567	"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,69156142	,"Longitude":	-71,21529156	,"Stock":	"NO"}
{"Nombre":	ALTA VIDA	"Direccion":	MAIPú N° 702, COMUNA DE SAN CARLOS	"Region":	ÑUBLE	,"Comuna":	SAN CARLOS	,"Latitude":	-36,42381476	,"Longitude":	-71,95871327	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL VALLE	"Direccion":	AVENIDA VALLE NOBLE 184, SECTOR VALLE NOBLE	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,81644	,"Longitude":	-73,00387	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	FRANCISCO PLEITEADO N° 712 LOCAL 108	"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,755371	,"Longitude":	-72,589992	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F 0321	"Direccion":	AVDA. LAS ENCINAS N° 02470 LOCAL 9	"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,744014	,"Longitude":	-72,63446	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN RAFAEL	"Direccion":	MILLAHUE 392	"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,6396534	,"Longitude":	-71,1905772	,"Stock":	"NO"}
{"Nombre":	FARMACIA GENERICA	"Direccion":	MINISTRO DIEGO PORTALES 374	"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16881495	,"Longitude":	-70,74826553	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	ARTURO PRAT 495, RECINTO ESTACIÓN SAN BERNARDO	"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59472	,"Longitude":	-70,698	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARRIO SALUD	"Direccion":	BARROS ARANA 741 LOCAL 1	"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82603	,"Longitude":	-73,04937	,"Stock":	"NO"}
{"Nombre":	FARMACIA QFARMA	"Direccion":	BLANCO ENCALADA 411, LOCAL 6	"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8820796	,"Longitude":	-71,244006	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	FREIRE 2414, LOCAL 1095	"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0450954	,"Longitude":	-71,4226542	,"Stock":	"SI"}
{"Nombre":	MÁFIL	"Direccion":	O'HIGGINS N° 27	"Region":	LOS RIOS	,"Comuna":	MAFIL	,"Latitude":	-39,66622187	,"Longitude":	-72,95029865	,"Stock":	"SI"}
{"Nombre":	AINIL	"Direccion":	AVENIDA SIMPSON N° 1110	"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,83105652	,"Longitude":	-73,23741667	,"Stock":	"NO"}
{"Nombre":	DEL BARRIO	"Direccion":	AVENIDA RICARDO CUMMING N° 476, LOCAL 2 Y 3	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43911	,"Longitude":	-70,66877	,"Stock":	"SI"}
{"Nombre":	FARMACIA DE ESPECIALIDADES MEDICAS CDT	"Direccion":	ANFION MUÑOZ 751	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA ATENCION AMBULATORIA CDT	"Direccion":	ANFION MUÑOZ 751	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":		,"Longitude":		,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMAVID	"Direccion":	AV FRANCISCO DE AGUIRRE 02 LOCAL 01 Y 02	"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9054554	,"Longitude":	-71,2536445	,"Stock":	"SI"}
{"Nombre":	KNOP	"Direccion":	AVENIDA APOQUINDO N° 6029, LOCAL 20	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40944	,"Longitude":	-70,56815	,"Stock":	"SI"}
{"Nombre":	CIUDAD AHORRO	"Direccion":	ERASMO ESCALA N° 3193	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44621	,"Longitude":	-70,67803	,"Stock":	"SI"}
{"Nombre":	FARMACIA DE MARÍA ELENA - FRACCIÓN	"Direccion":	DIEGO DE ALMAGRO SIN NUMERO	"Region":	ANTOFAGASTA	,"Comuna":	MARIA ELENA	,"Latitude":	-22,3413695	,"Longitude":	-69,6636915	,"Stock":	"NO"}
{"Nombre":	VIDASALUS	"Direccion":	LIRA 192, LOCAL G	"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33.44544848936906,	,"Longitude":	-70,64010997	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	EL SALTO N°4875	"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33.38592844606896,	,"Longitude":	-70,6217723	,"Stock":	"NO"}
{"Nombre":	ECUAFARMA	"Direccion":	BELLAVISTA N°018	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33.43441269277311,	,"Longitude":	-70,6353928	,"Stock":	"NO"}
{"Nombre":	BIOEQUILIBRIO	"Direccion":	CAMINO LOS TRAPENSES 3200	"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33.346553070110716,	,"Longitude":	-70,54343902	,"Stock":	"SI"}
{"Nombre":	FARMACIN	"Direccion":	ESTADOS UNIDOS 1183	"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33.433708437439236,	,"Longitude":	-70,73728577	,"Stock":	"SI"}
{"Nombre":	PROFARMA	"Direccion":	LOS HALCONES 1759	"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33.29505978424049,	,"Longitude":	-70,8709938	,"Stock":	"SI"}
{"Nombre":	GLOVER	"Direccion":	AVENIDA DEL VALLE 10714	"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33.302220105811244,	,"Longitude":	-70,69097516	,"Stock":	"NO"}
{"Nombre":	LATINOAMERICANA	"Direccion":	AVENIDA IRARRAZAVAL 3064	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33.45434824889157,	,"Longitude":	-70,59903864	,"Stock":	"SI"}
{"Nombre":	CAPAX	"Direccion":	IRARRAZAVAL 1642, LOCAL 4	"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33.45262914762435,	,"Longitude":	-70,61366905	,"Stock":	"NO"}
{"Nombre":	CEGON	"Direccion":	AVENIDA PADRE HURTADO NORTE 1531, LOCAL 2A	"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,38473	,"Longitude":	-70,55033	,"Stock":	"NO"}
{"Nombre":	BIOALBA	"Direccion":	AVENIDA PROVIDENCIA 2633, LOCAL 42	"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,41868	,"Longitude":	-70,60191	,"Stock":	"SI"}
{"Nombre":	FARMACIA CLÍNICA CERRILLOS	"Direccion":	AVENIDA BUZETA N° 4442	"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,482	,"Longitude":	-70,69243	,"Stock":	"SI"}
{"Nombre":	NOVASALUD.COM	"Direccion":	EYZAGUIRRE 646	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,59494	,"Longitude":	-70,70651	,"Stock":	"SI"}
{"Nombre":	ECO FARMA	"Direccion":	AVENIDA RECOLETA 6052	,"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,36565	,"Longitude":	-70,6336	,"Stock":	"NO"}
{"Nombre":	MAGNOLIA	"Direccion":	AVENIDA LAGUNA SUR 6225, LOCAL 5	,"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45753	,"Longitude":	-70,71981	,"Stock":	"SI"}
{"Nombre":	BOTICA GRISELDA HINOJOSA	"Direccion":	MANUEL DE SALAS 65	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45475	,"Longitude":	-70,59298	,"Stock":	"NO"}
{"Nombre":	OK	"Direccion":	Avenida Santa Rosa 9234, local 18	,"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,5449863	,"Longitude":	-70,6333884	,"Stock":	"NO"}
{"Nombre":	RED FARMA	"Direccion":	MANUEL RODRIGUEZ 954/934/938	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5881514	,"Longitude":	-70,98480982	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALEMANA	"Direccion":	PEDRO AGUIRRE CERDA 940, COYA	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,20639105	,"Longitude":	-70,53115476	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL MACHALI	"Direccion":	AVENIDA SAN JUAN 1200	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-33,436489	,"Longitude":	-70,6471183	,"Stock":	"SI"}
{"Nombre":	FARMACIA HUMANA	"Direccion":	JUAN GODOY 880, VILLA LOS CASTAÑOS	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-33,436489	,"Longitude":	-70,6471183	,"Stock":	"NO"}
{"Nombre":	WILAMASI	"Direccion":	Los Aymaras 56	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,5194035	,"Longitude":	-70,177923	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	COLON N° 260 LOCAL 7	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71299	,"Longitude":	-73,114	,"Stock":	"NO"}
{"Nombre":	PORTEZUELO	"Direccion":	CARRERA N° 501	,"Region":	ÑUBLE	,"Comuna":	PORTEZUELO	,"Latitude":	-36,528971	,"Longitude":	-72,427186	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN PEDRO DE ATACAMA - FRACCION	"Direccion":	VILAMA N° 425-E	,"Region":	ANTOFAGASTA	,"Comuna":	SAN PEDRO DE ATACAMA	,"Latitude":	-22,9112985	,"Longitude":	-68,2002356	,"Stock":	"SI"}
{"Nombre":	FARMACIA NORTHFARMA	"Direccion":	SIMON BOLIVAR N°937, LOCAL 1	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,64974203	,"Longitude":	-70,39214149	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	FELIPE BARTHOU N° 141	,"Region":	LOS RIOS	,"Comuna":	LANCO	,"Latitude":	-39,45689158	,"Longitude":	-72,76689368	,"Stock":	"SI"}
{"Nombre":	FARMALINE	"Direccion":	AVENIDA LIBERTADOR BERNARDO O'HIGGINS 3481	,"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,45121	,"Longitude":	-70,68317	,"Stock":	"NO"}
{"Nombre":	HIGIA	"Direccion":	Lo Marcoleta 1052, local 1 y 2	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3567348	,"Longitude":	-70,7174173	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAMUS Y SUAREZ	"Direccion":	CABELLO 391	,"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,63303988	,"Longitude":	-71,36763278	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACLEVER	"Direccion":	AV. LIBERTADOR BERNARDO O´HIGGINS 634, LOCAL 1	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16527066	,"Longitude":	-70,74297597	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	SAN ISIDRO 23, LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44301	,"Longitude":	-70,64473	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	INDEPENDENCIA, 598, LOCAL 1, RANCAGUA	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-33,45694	,"Longitude":	-70,64827	,"Stock":	"SI"}
{"Nombre":	COMUNAL ESMERALDA	"Direccion":	CARRETERA GENERAL SAN MARTÍN ANTIGUA 3487	,"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,184002	,"Longitude":	-70,65347	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	INDEPENDENCIA Nº 460	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84626	,"Longitude":	-71,596821	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA EL GUANACO N° 3100, LOCAL 12	,"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,39476	,"Longitude":	-70,65797	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAPUEBLO	"Direccion":	ARLEGUI Nº 867	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0242563	,"Longitude":	-71,5515903	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	CAMINO REAL Nº1901	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0334464	,"Longitude":	-71,5802346	,"Stock":	"NO"}
{"Nombre":	PHARMACOSTO	"Direccion":	AVENIDA PORTUGAL N° 263	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4458	,"Longitude":	-70,63635	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	FRANCISCO BILBAO 398, COYHAIQUE	,"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,572441	,"Longitude":	-72,069489	,"Stock":	"SI"}
{"Nombre":	FARMACIA NETFARMA	"Direccion":	AV. ANDALIEN N° 950 LOCALES 2 Y 3	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,79309	,"Longitude":	-73,03565	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	BARROS ARANA 472	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,79309	,"Longitude":	-73,03565	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN CRISTOBAL	"Direccion":	AV. JOSE JOAQUIN PEREZ 3505 LOCAL 7 Y 8	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,96283162	,"Longitude":	-71,3038704	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAGALLANES	"Direccion":	AVENIDA BULNES 3.5 NORTE, LOCAL 39-A, ZONA FRANCA AUSTRAL	,"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1343267	,"Longitude":	-70,87570221	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIGFARMA	"Direccion":	FREIRE 532	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82621	,"Longitude":	-73,05258	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMA AL DIA	"Direccion":	PAICAVI 1376 LOCAL 1	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,81399	,"Longitude":	-73,04778	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANTA INES	"Direccion":	CALLE CUATRO N° 2480 LOCAL 1 Y 2	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,00405364	,"Longitude":	-71,53723984	,"Stock":	"SI"}
{"Nombre":	GEMINIS	"Direccion":	SAN JOSÉ DE LA ESTRELLA 1370, LOCALES 1, 2 Y 3 (MAYORISTA 10)	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,55426	,"Longitude":	-70,60264	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	BARROS ARANA 699	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8263	,"Longitude":	-73,05003	,"Stock":	"NO"}
{"Nombre":	NUEVO COMIENZO	"Direccion":	BERNARDO O’HIGGINS N° 309, COMUNA DE NINHUE	,"Region":	ÑUBLE	,"Comuna":	NINHUE	,"Latitude":	-36,39267731	,"Longitude":	-72,39828787	,"Stock":	"SI"}
{"Nombre":	TORRES	"Direccion":	VICUÑA MACKENNA 831	,"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,68005	,"Longitude":	-71,21782	,"Stock":	"NO"}
{"Nombre":	LA BOTICA	"Direccion":	Cristóbal Colón 779	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4760752	,"Longitude":	-70,3159959	,"Stock":	"NO"}
{"Nombre":	FARMACIA PABELLON CLINICA ANDES SALUD CONCEPCION	"Direccion":	JORGE ALESSANDRI 2047	,"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,80013	,"Longitude":	-73,07117	,"Stock":	"SI"}
{"Nombre":	FARMACIA FAMILIAR	"Direccion":	AVENIDA ARGENTINA N° 383	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,04650186	,"Longitude":	-71,60399253	,"Stock":	"SI"}
{"Nombre":	REAL	"Direccion":	SEVILLA N° 1301 Y 1305	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4147	,"Longitude":	-70,65785	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	CUEVAS N°483, LOCAL 101	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1683621	,"Longitude":	-70,74161455	,"Stock":	"NO"}
{"Nombre":	FARMACIA UNIVERSAL	"Direccion":	MERCED ORIENTE N° 60 LOCAL B	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02975879	,"Longitude":	-71,56192401	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	MANUEL RODRíGUEZ 734	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58753739	,"Longitude":	-70,98757825	,"Stock":	"NO"}
{"Nombre":	FARMAINTEGRA	"Direccion":	AVENIDA PERÚ 747, LOCAL 9	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42454	,"Longitude":	-70,63978	,"Stock":	"NO"}
{"Nombre":	FARMACIA SOCIALFARMA	"Direccion":	COVADONGA N° 391 LOCAL 2 Y 3	,"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2479636	,"Longitude":	-73,3161102	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIVO MÁS	"Direccion":	CASTELLÓN N° 687	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8233863	,"Longitude":	-73,0488453	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATOTAL L 06	"Direccion":	AVDA. BERNARDO O´HIGGINS N° 311 lOCAL 04, PUCON	,"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,276613	,"Longitude":	-71,975795	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO L-457	"Direccion":	MANUEL BULNES N° 537 LOCAL1	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,738671	,"Longitude":	-72,589041	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMATOTAL L-07	"Direccion":	AVDA. JOSE MANUEL BALMACEDA N° 421	,"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,366134	,"Longitude":	-72,628583	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA L-69	"Direccion":	AVDA. CONFERACION SUIZA N° 1166 VICTORIA	,"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,233871	,"Longitude":	-72,332227	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AVDA O´HIGGINS N° 892 LAUTARO	,"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,532622	,"Longitude":	-72,435036	,"Stock":	"NO"}
{"Nombre":	FARMACIA SEGAL	"Direccion":	ARTURO PRAT 244	,"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,9853316	,"Longitude":	-71,2775882	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	JOSÉ IGNACIO ZENTENO Nº 2719	,"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,59429	,"Longitude":	-73,11017	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA PAZ	"Direccion":	Avenida la Paz 1143	,"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,58403753	,"Longitude":	-71,19297368	,"Stock":	"SI"}
{"Nombre":	FARMACIA CALAFATE	"Direccion":	AVENIDA ATLANTICO 500 LOCAL 7 Y 8	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,84515543	,"Longitude":	-71,27283402	,"Stock":	"NO"}
{"Nombre":	FARMACIA LUGASA	"Direccion":	PARCELA EL TEPUAL LOTE 3, KM. 12.1/2	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,42050782	,"Longitude":	-73,11500327	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	Juan Soler Manfredini N° 131 local Z5	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,4734715	,"Longitude":	-72,9343027	,"Stock":	"NO"}
{"Nombre":	FARMACIAS ECONÓMICAS	"Direccion":	VIOLETA PARRA Nº 5191, ALERCE	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,39782	,"Longitude":	-72,90445	,"Stock":	"NO"}
{"Nombre":	FARMACIA LAS ENCINAS	"Direccion":	PEDRO MONTT 240-B	,"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,125291	,"Longitude":	-73,057779	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA BOTICA DE FLORA	"Direccion":	SAN BERNARDO 300	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3166303	,"Longitude":	-72,985605	,"Stock":	"SI"}
{"Nombre":	REDFARMA	"Direccion":	ISABEL RIQUELME N° 699	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,60938069	,"Longitude":	-72,09999906	,"Stock":	"SI"}
{"Nombre":	GÉMINIS	"Direccion":	CATEDRAL N° 1476, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43785	,"Longitude":	-70,65795	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	PASEO INDEPENDENCIA N°782, LOCAL 2	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,169503	,"Longitude":	-70,74606268	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAHORRO 24/7	"Direccion":	BLANCO ENCALADA Nº 456, LOCAL 5	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8823789	,"Longitude":	-71,2442348	,"Stock":	"NO"}
{"Nombre":	FARMACIA ESENCIAL	"Direccion":	O'HIGGINS Nº 333	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8809822	,"Longitude":	-71,2466884	,"Stock":	"NO"}
{"Nombre":	MASPHARMA	"Direccion":	CAMINO A LAS MARIPOSAS N° 4003, LOCAL 6, CHILLáN	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,62561422	,"Longitude":	-72,08065448	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIGFARMA	"Direccion":	BARROS ARANA 741 LOCAL 8	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8259305	,"Longitude":	-73,04951711	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATODO	"Direccion":	LOS LEONES N° 790 (ACCESO POR RIQUELME 751)	,"Region":	BIOBIO	,"Comuna":	CURANILAHUE	,"Latitude":	-37,47594084	,"Longitude":	-73,34508546	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DOCTOR SALUD	"Direccion":	ARTURO PRAT N° 707 - A LOCAL 2  LOCALIDAD CAJON	,"Region":	ARAUCANIA	,"Comuna":	VILCUN	,"Latitude":	-38,686248	,"Longitude":	-72,501588	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVDA ESPAÑA Nº717 LOCAL 8-9	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,985167	,"Longitude":	-71,225822	,"Stock":	"SI"}
{"Nombre":	Farmacia Comunal Rinconada	"Direccion":	San Martin 988	,"Region":	VALPARAISO	,"Comuna":	RINCONADA	,"Latitude":	-32,8352416	,"Longitude":	-70,7010367	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	CAMINO LOS TRAPENSES 2140, LOCALES 104 A, B Y C (NúCLEO LOS TRAPENSES)	,"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,35528	,"Longitude":	-70,53945	,"Stock":	"NO"}
{"Nombre":	GEOVITAL	"Direccion":	SIERRA BELLA 2087	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,47174	,"Longitude":	-70,63329	,"Stock":	"SI"}
{"Nombre":	SOFIA	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 8496	,"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,53299	,"Longitude":	-70,66298	,"Stock":	"SI"}
{"Nombre":	SOFIA	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA 6602	,"Region":	METROPOLITANA	,"Comuna":	LA CISTERNA	,"Latitude":	-33,51762	,"Longitude":	-70,65879	,"Stock":	"SI"}
{"Nombre":	AB FARMA	"Direccion":	ANGEL PARRA N° 395, CHILLÁN VIEJO	,"Region":	ÑUBLE	,"Comuna":	CHILLAN VIEJO	,"Latitude":	-36,62242326	,"Longitude":	-72,13089988	,"Stock":	"NO"}
{"Nombre":	Farmacia Farma Sur	"Direccion":	Constitución 380	,"Region":	VALPARAISO	,"Comuna":	CASABLANCA	,"Latitude":	-33,3190376	,"Longitude":	-71,4076318	,"Stock":	"SI"}
{"Nombre":	BOTICA SAN FELIPE	"Direccion":	ARTURO PRAT 1082 - C	,"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,7503111	,"Longitude":	-70,7245247	,"Stock":	"NO"}
{"Nombre":	TATY PHARMACY	"Direccion":	LA CANTERA 1902, LOCAL 2A	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,97120998	,"Longitude":	-71,30240001	,"Stock":	"NO"}
{"Nombre":	LA PROVIDENCIA	"Direccion":	LOS ARRAYANES 905, LOCAL 3, CENTRO COMERCIAL TOWN CENTER	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,94027917	,"Longitude":	-71,25628466	,"Stock":	"SI"}
{"Nombre":	FARMCIAS "AHUMADA"	"Direccion":	Domeyko 55	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,967066	,"Longitude":	-71,3324269	,"Stock":	"SI"}
{"Nombre":	FARMACIA ISIDAN	"Direccion":	Almagro 313, local A1	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47026904	,"Longitude":	-72,34941014	,"Stock":	"SI"}
{"Nombre":	ANDRADE	"Direccion":	AVENIDA BOULEVARD AEROPUERTO NORTE 9623, LOCAL 4	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,42983	,"Longitude":	-70,77304	,"Stock":	"NO"}
{"Nombre":	DEL SOL	"Direccion":	AVENIDA SAN CARLOS N° 307, CIUDAD DEL SOL	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,59848	,"Longitude":	-70,58163	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	JEAN MERMOZ 2150, LOCAL BO009 PROCESADOR T2M-AEROPUERTO AMB	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,40005	,"Longitude":	-70,79322	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	EL TEPUAL 1369, CENTRO COMERCIAL EL TEPUAL	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,45912	,"Longitude":	-72,99261	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA SANTA ISABEL 936, LOCAL 2A	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44469	,"Longitude":	-70,61906	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO(287)	"Direccion":	LAUTARO N° 36 ANGOL	,"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,797427	,"Longitude":	-72,706042	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA VITACURA N° 8207	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,38492	,"Longitude":	-70,55415	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	AVENIDA APOQUINDO N° 7240, LOCAL 9	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40792	,"Longitude":	-70,55386	,"Stock":	"NO"}
{"Nombre":	LA FARMA	"Direccion":	AVENIDA LOS LEONES N° 2605, LOCAL 105	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44256	,"Longitude":	-70,59972	,"Stock":	"SI"}
{"Nombre":	VIDAFARM	"Direccion":	AGUSTINAS N° 1555	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44122	,"Longitude":	-70,65851	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	AVENIDA RAMÓN PICARTE N° 310	,"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81404129	,"Longitude":	-73,24508514	,"Stock":	"NO"}
{"Nombre":	FARMACIA RECIPE	"Direccion":	AVENIDA BALMACEDA 4521, LOCAL 5 Y 6	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9403924	,"Longitude":	-71,2634078	,"Stock":	"SI"}
{"Nombre":	FARMACIA MARGA MARGA	"Direccion":	AVENIDA NORMANDIE N°1889	,"Region":	VALPARAISO	,"Comuna":	QUINTERO	,"Latitude":	-32,7851062	,"Longitude":	-71.5315875,17	,"Stock":	"SI"}
{"Nombre":	FARMACIA SERMECOOP	"Direccion":	Avenida Chacabuco 153	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,832979	,"Longitude":	-73,0543232	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DOCTOR SIMI	"Direccion":	BAQUEDANO 613, LLANQUIHUE	,"Region":	LOS LAGOS	,"Comuna":	LLANQUIHUE	,"Latitude":	-41,25623	,"Longitude":	-73,00541	,"Stock":	"NO"}
{"Nombre":	MAXIPHARMA	"Direccion":	IRARRAZAVAL 2087	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45385072	,"Longitude":	-70,60935012	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUERTA SUR	"Direccion":	RICARDO KREBS N° 6422, PUERTA SUR	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47048	,"Longitude":	-73,00415	,"Stock":	"NO"}
{"Nombre":	SAVITAR	"Direccion":	AGUSTINAS 1890	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44196	,"Longitude":	-70,66318	,"Stock":	"NO"}
{"Nombre":	MEDDICA	"Direccion":	MANUEL CRUZ MONTT N° 3219, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	MACUL	,"Latitude":	-33,48457	,"Longitude":	-70,58557	,"Stock":	"SI"}
{"Nombre":	LA ABUELA	"Direccion":	SAN DIEGO 1835	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,47008	,"Longitude":	-70,6486	,"Stock":	"SI"}
{"Nombre":	FARMACOR	"Direccion":	AVENIDA VITACURA 4380, LOCAL 2 A	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,3985	,"Longitude":	-70,58852	,"Stock":	"SI"}
{"Nombre":	VECINAL ASFAR	"Direccion":	LAS CIMAS 335	,"Region":	METROPOLITANA	,"Comuna":	TIL-TIL	,"Latitude":	-33,16464	,"Longitude":	-70,79094	,"Stock":	"NO"}
{"Nombre":	FARMACIA VERSAL	"Direccion":	LATORRE 2716	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6509279	,"Longitude":	-70,3975022	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA ECONOMICA III	"Direccion":	CONDELL 2268	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6509279	,"Longitude":	-70,3975022	,"Stock":	"NO"}
{"Nombre":	MG FARMACIAS DEL NORTE	"Direccion":	URIBE 323	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6486501	,"Longitude":	-70,4011486	,"Stock":	"NO"}
{"Nombre":	FARMACIA BICENTENARIO III	"Direccion":	AVDA RICAVENTURA 11710	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5535095	,"Longitude":	-70,3951714	,"Stock":	"SI"}
{"Nombre":	LIRCAY	"Direccion":	9 ORIENTE 1276 LOCAL 5	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,425766	,"Longitude":	-71,654194	,"Stock":	"SI"}
{"Nombre":	FARMACIA IRIS	"Direccion":	RIQUELME N° 767	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,221632	,"Longitude":	-70,148337	,"Stock":	"SI"}
{"Nombre":	MAULE HELP	"Direccion":	9 ORIENTE Nº 157 LOCAL 3	,"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,5183364	,"Longitude":	-71,6884912	,"Stock":	"NO"}
{"Nombre":	KNOP	"Direccion":	INDEPENDENCIA Nº460	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,846344	,"Longitude":	-71,596825	,"Stock":	"SI"}
{"Nombre":	BIOFARMA	"Direccion":	30 ORIENTE Nº1562 LOCAL B	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,428677	,"Longitude":	-71,626152	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	COMALLE Nº 206 LOCAL A	,"Region":	MAULE	,"Comuna":	TENO	,"Latitude":	-34,869948	,"Longitude":	-71,162793	,"Stock":	"NO"}
{"Nombre":	FARMAEXPRESS	"Direccion":	VILLOTA Nº278 LOCAL 1	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,988055	,"Longitude":	-71,238055	,"Stock":	"SI"}
{"Nombre":	FARMAVENZ	"Direccion":	SAN MARTIN Nº696	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84303449	,"Longitude":	-71,60094053	,"Stock":	"SI"}
{"Nombre":	PARADA	"Direccion":	CIRCUNVALACIÓN Nº418 LOCAL 1	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,843093	,"Longitude":	-71,617235	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMÁS	"Direccion":	Avenida San Juan Bosco 2119	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8163875	,"Longitude":	-73,0326643	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	AVDA SAN MIGUEL Nº3050 LOCAL 10-A	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4347897	,"Longitude":	-71,630176	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDA MAS	"Direccion":	ERRAZURIZ Nº110 LOCAL B	,"Region":	MAULE	,"Comuna":	HUALAÑE	,"Latitude":	-34,976245	,"Longitude":	-71,803589	,"Stock":	"NO"}
{"Nombre":	FARMACIA FAMILIAR	"Direccion":	ESMERALDA 537	,"Region":	VALPARAISO	,"Comuna":	LOS ANDES	,"Latitude":	-32,8337995	,"Longitude":	-70,5972179	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA(L-68)	"Direccion":	LAUTARO N° 20 LOCAL 101 ANGOL	,"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,797808	,"Longitude":	-72,705572	,"Stock":	"SI"}
{"Nombre":	AMAUTA	"Direccion":	21 de Mayo 780	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4819221	,"Longitude":	-70,3155204	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANA SANA	"Direccion":	AVDA IGNACIO CARRERA PINTO N°0218 LOCAL A	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,440263	,"Longitude":	-71,683314	,"Stock":	"SI"}
{"Nombre":	CONSTITUCIóN	"Direccion":	VIAL Nº224 LOCAL 3	,"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,322228	,"Longitude":	-72,408324	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	1 SUR Nº1598	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,428154	,"Longitude":	-71,654297	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	ARTURO PRAT 298. COYHAIQUE	,"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,571952	,"Longitude":	-72,070607	,"Stock":	"NO"}
{"Nombre":	LA BOTICA POPULAR	"Direccion":	FEDÉRICO ERRÁZURIZ 1098	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,43686	,"Longitude":	-70,76362	,"Stock":	"NO"}
{"Nombre":	ETIFARMA	"Direccion":	PEDRO FONTOVA 6277, L-24	,"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3646731	,"Longitude":	-70,67024432	,"Stock":	"SI"}
{"Nombre":	CENTRAL	"Direccion":	MERCED 839, local 46	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43746671	,"Longitude":	-70,64307489	,"Stock":	"SI"}
{"Nombre":	VITERI	"Direccion":	LOS DURAZNOS 002	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,36414	,"Longitude":	-70,73424	,"Stock":	"SI"}
{"Nombre":	FARMAXAL	"Direccion":	AVDA. MARCOLETA 221	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,35806	,"Longitude":	-70,73286	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	AVDA. RECOLETA 202	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,43097	,"Longitude":	-70,648	,"Stock":	"SI"}
{"Nombre":	FARMACIA MANQUEHUE	"Direccion":	BALMACEDA Nº63	,"Region":	MAULE	,"Comuna":	RAUCO	,"Latitude":	-34,926168	,"Longitude":	-71,318443	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	PASEO PUENTE 602	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43588	,"Longitude":	-70,65165	,"Stock":	"NO"}
{"Nombre":	COMUNITARIA	"Direccion":	AVENIDA PADRE HURTADO 13431	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,58367	,"Longitude":	-70,67722	,"Stock":	"SI"}
{"Nombre":	Drugstore	"Direccion":	REPÚBLICA 891, LOCALES 2 Y 3	,"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6659	,"Longitude":	-70,93111	,"Stock":	"SI"}
{"Nombre":	FARMACIA EL RETIRO	"Direccion":	San Enrique N° 1324 local 1	,"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0392413	,"Longitude":	-71,4409721	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	RAFAEL CASANOVA N°239	,"Region":	OHIGGINS	,"Comuna":	SANTA CRUZ	,"Latitude":	-34,64078429	,"Longitude":	-71,36785373	,"Stock":	"NO"}
{"Nombre":	FARMACIA AURA	"Direccion":	MANUEL RODRíGUEZ N°807, LOCAL 821-A Y 821-B	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34.58722266653241,	,"Longitude":	-70,98629146	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	PASEO INDEPENDENCIA N°683	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34.16945288341958,	,"Longitude":	-70,74425785	,"Stock":	"NO"}
{"Nombre":	PORTALES BICENTENARIO	"Direccion":	AVDA. PEDRO AGUIRRE CERDA 6800, LOCAL 4	,"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,50117	,"Longitude":	-70,70913	,"Stock":	"NO"}
{"Nombre":	EL ALERCE	"Direccion":	Esmeralda 485	,"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,297264	,"Longitude":	-73,0819506	,"Stock":	"SI"}
{"Nombre":	SUPERFARMA	"Direccion":	AVDA. LOS LIBERTADORES 1614, L. A	,"Region":	METROPOLITANA	,"Comuna":	EL MONTE	,"Latitude":	-33,6681	,"Longitude":	-71,03734	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	GRAN AVENIDA JOSé MIGUEL CARRERA N° 5234 L-2	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50147997	,"Longitude":	-70,65420006	,"Stock":	"SI"}
{"Nombre":	FARMACIAS AGUIRRE	"Direccion":	FRANCISCO BILBAO 3088 LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43166126	,"Longitude":	-70,58526859	,"Stock":	"NO"}
{"Nombre":	ECOFARMACIA	"Direccion":	PROVIDENCIA 1312	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42853188	,"Longitude":	-70,62007494	,"Stock":	"SI"}
{"Nombre":	MEDDICA	"Direccion":	AVENIDA CARDENAL RAÚL SILVA HENRÍQUEZ 10297, LOCALES 12, 20 Y 21	,"Region":	METROPOLITANA	,"Comuna":	LA GRANJA	,"Latitude":	-33,55082	,"Longitude":	-70,61814	,"Stock":	"NO"}
{"Nombre":	DE LO ALTO	"Direccion":	GRECIA 1670	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,461427	,"Longitude":	-70,61484087	,"Stock":	"NO"}
{"Nombre":	FARMACIA VECINAL	"Direccion":	VICUÑA MACKENNA 6690, L-12, TORRE B	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,51665559	,"Longitude":	-70,60539006	,"Stock":	"SI"}
{"Nombre":	FAMYPHARMA	"Direccion":	FERMíN VIVACETA 2388, L-7	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,40419951	,"Longitude":	-70,66938094	,"Stock":	"SI"}
{"Nombre":	GO FARM!	"Direccion":	SANTA ISABEL 1292	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,44669317	,"Longitude":	-70,61419945	,"Stock":	"SI"}
{"Nombre":	CONSTITUCIóN	"Direccion":	NUEVA SAN MARTIN 1490	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44364107	,"Longitude":	-70,65723882	,"Stock":	"NO"}
{"Nombre":	CENTRAL	"Direccion":	MIRAFLORES 399, L-1A	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43802394	,"Longitude":	-70,64521949	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	MANUEL ANTONIO MATTA 739	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45821982	,"Longitude":	-70,64411278	,"Stock":	"NO"}
{"Nombre":	FARMAETIKA	"Direccion":	TABANCURA 1336	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,382224	,"Longitude":	-70,53599002	,"Stock":	"NO"}
{"Nombre":	PHARMA VITA	"Direccion":	JOSé JOAQUíN PéREZ 9052 A , L-2	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,42782189	,"Longitude":	-70,76132864	,"Stock":	"SI"}
{"Nombre":	POPULAR RIVERO	"Direccion":	LARRAIN 3212	,"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,59742984	,"Longitude":	-70,88587749	,"Stock":	"SI"}
{"Nombre":	RENATA	"Direccion":	SEGUNDA TRANSVERSAL 1375	,"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,57160702	,"Longitude":	-70,79848696	,"Stock":	"SI"}
{"Nombre":	FARMAPLUS	"Direccion":	SANTA ROSA 991, L-2	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45676742	,"Longitude":	-70,64391084	,"Stock":	"NO"}
{"Nombre":	BRADFORD HILL	"Direccion":	MANZANO 377, L-501	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,42908581	,"Longitude":	-70,64526836	,"Stock":	"SI"}
{"Nombre":	APOTECA	"Direccion":	EL DESCANSO 1400, L-1	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,46999273	,"Longitude":	-70,75707549	,"Stock":	"NO"}
{"Nombre":	EL CARMEN	"Direccion":	REY DARíO 2198	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50903282	,"Longitude":	-70,77174542	,"Stock":	"NO"}
{"Nombre":	LAGUNA	"Direccion":	AVENIDA MIGUEL LETELIER PARCELA N° 21-B	,"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,87333	,"Longitude":	-70,87815	,"Stock":	"SI"}
{"Nombre":	FARMACIA ESPACIO BILBAO IQUIQUE	"Direccion":	FRANCISCO BILBAO N°3634, LOCAL 3	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,260033	,"Longitude":	-70,129664	,"Stock":	"SI"}
{"Nombre":	CERCANA	"Direccion":	AVENIDA JOSÉ ARRIETA N° 6976	,"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,46216	,"Longitude":	-70,55677	,"Stock":	"SI"}
{"Nombre":	FARMACIA LOMAS SALUD	"Direccion":	VICTORIA 7B	,"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8389855	,"Longitude":	-73,0953906	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	CALLE DOMINGO SANTA MARíA 387-B	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16798211	,"Longitude":	-70,7502473	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	AVENIDA ARMANDO JARAMILLO N°217	,"Region":	OHIGGINS	,"Comuna":	NANCAGUA	,"Latitude":	-34,65108039	,"Longitude":	-71,20401733	,"Stock":	"NO"}
{"Nombre":	DR SIMI	"Direccion":	AVENIDA IRARRáZAVAL 1717	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,45339	,"Longitude":	-70,61322	,"Stock":	"NO"}
{"Nombre":	MEDICAR	"Direccion":	AVENIDA ELIODORO YáñEZ 1103	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43382	,"Longitude":	-70,61941	,"Stock":	"SI"}
{"Nombre":	FLOR DE LOTO	"Direccion":	RAFAEL RIESCO BERNALES 424 A	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4961	,"Longitude":	-70,75195	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	ANTONIO VARAS N° 834	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,47384	,"Longitude":	-72,94674	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	ELEUTERIO RAMIREZ N° 1920	,"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4619407	,"Longitude":	-68,924769	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO LOCAL 073	"Direccion":	MANUEL ANTONIO MATTA N° 2465	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6503642	,"Longitude":	-70,3969703	,"Stock":	"SI"}
{"Nombre":	LORELEY 100	"Direccion":	LORELEY 99,103 Y 107	,"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,45115	,"Longitude":	-70,55842	,"Stock":	"NO"}
{"Nombre":	SAN FELIPE	"Direccion":	EL FILODENDRO 18810	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,56692	,"Longitude":	-70,78337	,"Stock":	"NO"}
{"Nombre":	FLEMING	"Direccion":	SANTA ZITA 9320	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,42332	,"Longitude":	-70,5315	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNITARIA JAIME CRUZ CALERA DE TANGO	"Direccion":	AVENIDA CALERA DE TANGO 345	,"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,63034	,"Longitude":	-70,76156	,"Stock":	"SI"}
{"Nombre":	QF	"Direccion":	AVENIDA SANTA ROSA 1157	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,45945	,"Longitude":	-70,64324	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	HUéRFANOS 1157	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43975	,"Longitude":	-70,65309	,"Stock":	"NO"}
{"Nombre":	EL ROBLE	"Direccion":	LAUTARO 16851	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5503	,"Longitude":	-70,76659	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	ANTONIO VARAS 841, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,43514	,"Longitude":	-70,61527	,"Stock":	"NO"}
{"Nombre":	HUMAN PHARMA	"Direccion":	MARIANO SANCHEZ FONTECILLA 1998, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,47435	,"Longitude":	-70,55443	,"Stock":	"NO"}
{"Nombre":	ALKOSTO	"Direccion":	MAPOCHO 1498	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43211	,"Longitude":	-70,65761	,"Stock":	"SI"}
{"Nombre":	DC FARMA	"Direccion":	AVENIDA MANUEL RODRIGUEZ NORTE 368, LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,43979	,"Longitude":	-70,66027	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	O'Higgins 700	,"Region":	BIOBIO	,"Comuna":	YUMBEL	,"Latitude":	-37,09958391	,"Longitude":	-72,5614504	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO L 419	"Direccion":	AVDA BERNARDO O´HIGGINS N° 372 PUCON	,"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,27609	,"Longitude":	-71,97556	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL DEL CESFAM DE LUMACO	"Direccion":	MANUEL MONTT N° 473 LUMACO	,"Region":	ARAUCANIA	,"Comuna":	LUMACO	,"Latitude":	-38,16704	,"Longitude":	-72,90227	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE" L-9098	"Direccion":	AVDA. LOS PABLOS N° 2050 LOCAL 1	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7451425	,"Longitude":	-72,6415879	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA PERALILLO	"Direccion":	AVENIDA BERNARDO O´HIGGINS N°237	,"Region":	OHIGGINS	,"Comuna":	PERALILLO	,"Latitude":	-34,47835274	,"Longitude":	-71,47863977	,"Stock":	"NO"}
{"Nombre":	FARMACIA LAS GUAITECAS	"Direccion":	COQUIMBO S/N  ESQ. TOCOPILLA	,"Region":	AYSEN	,"Comuna":	GUAITECAS	,"Latitude":	-43,89703063	,"Longitude":	-73,74635342	,"Stock":	"SI"}
{"Nombre":	EL LLANO	"Direccion":	SAN IGNACIO 2865	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,47976	,"Longitude":	-70,65391	,"Stock":	"SI"}
{"Nombre":	SAN MANUEL	"Direccion":	RUTA G-668 890, SECTOR SAN MANUEL	,"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,77392	,"Longitude":	-71,25582	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	PROGRESO N° 2000, LOCAL 21	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,22755105	,"Longitude":	-70,13190861	,"Stock":	"NO"}
{"Nombre":	FARMACIA OPTIMUS	"Direccion":	VIVAR N° 1320	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2207217	,"Longitude":	-70,1489375	,"Stock":	"SI"}
{"Nombre":	CENTRAL	"Direccion":	PROVIDENCIA 2372, LOCAL 6	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,41970397	,"Longitude":	-70,60657652	,"Stock":	"NO"}
{"Nombre":	MAS AHORRO	"Direccion":	GRAN AVENIDA JOSÉ MIGUEL CARRERA 5653	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,50582	,"Longitude":	-70,65585	,"Stock":	"NO"}
{"Nombre":	MUNDO NATURAL	"Direccion":	SAN FRANCISCO 10	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44341	,"Longitude":	-70,64704	,"Stock":	"SI"}
{"Nombre":	EBEN EZER	"Direccion":	AVENIDA DE LA VICTORIA 2279	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50634	,"Longitude":	-70,76857	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM MACHALI	"Direccion":	MIRANDA N°420	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1798831	,"Longitude":	-70,65131312	,"Stock":	"SI"}
{"Nombre":	BIOSPHARE	"Direccion":	BALAKIREFF 4346	,"Region":	METROPOLITANA	,"Comuna":	PEDRO AGUIRRE CERDA	,"Latitude":	-33,48854	,"Longitude":	-70,6681	,"Stock":	"NO"}
{"Nombre":	FARMACIA LO CASTILLO	"Direccion":	AVDA SANTA MARÍA 354-A	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16827469	,"Longitude":	-70,75007729	,"Stock":	"SI"}
{"Nombre":	CLÍNICA MAITENES	"Direccion":	CALETERA NORTE AUTOPISTA DEL SOL 2882	,"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,66766	,"Longitude":	-71,23906	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PRESIDENTE KENNEDY 5413, L-202	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,40199812	,"Longitude":	-70,57871759	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	PRESIDENTE KENNEDY 9001, L-1013	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,39065211	,"Longitude":	-70,54603927	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	LIRA 191, LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,44568383	,"Longitude":	-70,64032333	,"Stock":	"SI"}
{"Nombre":	SANTA FE	"Direccion":	AVENIDA APOQUINDO 4351, LOCALES 7 Y 8	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,41526	,"Longitude":	-70,58514	,"Stock":	"SI"}
{"Nombre":	UNIDAD CORONARIA MÓVIL	"Direccion":	AVENIDA NUEVA COSTANERA 3300, PISO -3, BODEGA 8	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,40497	,"Longitude":	-70,5991	,"Stock":	"NO"}
{"Nombre":	FARMACIA POPULAR ALCALDE CARLOS IRIBARREN "AHUMADA"	"Direccion":	OJANCOS 24	,"Region":	ATACAMA	,"Comuna":	TIERRA AMARILLA	,"Latitude":	-27,486941	,"Longitude":	-70,269858	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Claudio Vicuña N° 932-936	,"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0470618	,"Longitude":	-71,44188815	,"Stock":	"NO"}
{"Nombre":	FARMACIA QUINTA	"Direccion":	Arlegui 633	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0237569	,"Longitude":	-71,5530494	,"Stock":	"NO"}
{"Nombre":	FARMAHORRO SYM	"Direccion":	Santa Rosa 282	,"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0469699	,"Longitude":	-71,3544871	,"Stock":	"SI"}
{"Nombre":	SATELITE	"Direccion":	Parque Central Poniente 531	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5575766	,"Longitude":	-70,7913807	,"Stock":	"SI"}
{"Nombre":	SALUD Y MAX	"Direccion":	San Francisco 1198	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,460712	,"Longitude":	-70,644843	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAS BIENESTAR	"Direccion":	Avenida Antonio Rendic 5834	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6179455	,"Longitude":	-70,3837655	,"Stock":	"NO"}
{"Nombre":	Farmacia Dr Simi	"Direccion":	Avenida San Juan 133	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1771543	,"Longitude":	-70,6984606	,"Stock":	"SI"}
{"Nombre":	Farmacia Dr Simi	"Direccion":	AV. B. O'HIGGINS Nº 024.	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1666874	,"Longitude":	-70,7340521	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMATOTAL L-08	"Direccion":	MANUEL BULNES N° 396	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"NO"}
{"Nombre":	Farmacia Dr Simi	"Direccion":	Walker Martínez 407	,"Region":	OHIGGINS	,"Comuna":	PEUMO	,"Latitude":	-34,3940741	,"Longitude":	-71,1693237	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Avenida Valparaíso 612	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,024933	,"Longitude":	-71,5537599	,"Stock":	"SI"}
{"Nombre":	QULLANI II	"Direccion":	Cancha Rayada 3608	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4477345	,"Longitude":	-70,2894526	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAUNIÓN	"Direccion":	Victoria 2830	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0489955	,"Longitude":	-71,6059574	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DR. SIMI	"Direccion":	Manuel Antonio Matta 2460 LOCAL 2B	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0497849	,"Longitude":	-71,5758412	,"Stock":	"SI"}
{"Nombre":	Farmacia Bienestar	"Direccion":	Freire 115, local 3	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47349644	,"Longitude":	-72,34958078	,"Stock":	"NO"}
{"Nombre":	San Patricio	"Direccion":	Bahía Catalina 10904, LOCAL C	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5610427	,"Longitude":	-70,6105018	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Alcalde José Luis Infante Larraín 1280, LOCAL 8	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5593244	,"Longitude":	-70,7833171	,"Stock":	"SI"}
{"Nombre":	DEL DR SIMI	"Direccion":	Avenida Francisco Bilbao 1350, local 102	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4391301	,"Longitude":	-70,6149928	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Tarapacá 521	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21407274	,"Longitude":	-70,15000851	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALCACEUTICAL	"Direccion":	manuel antonio matta 2858 iquique	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23582478	,"Longitude":	-70,15046024	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida 3 Poniente 900, LOCAL 2	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5284692	,"Longitude":	-70,7778965	,"Stock":	"SI"}
{"Nombre":	EASYFARMA OVALLE	"Direccion":	AVENIDA MANUEL PEÑAFIEL OLIVARES 1480	,"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,57714648	,"Longitude":	-71,18860394	,"Stock":	"NO"}
{"Nombre":	FUSALP	"Direccion":	Avenida Perú 1476	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4145485	,"Longitude":	-70,638846	,"Stock":	"NO"}
{"Nombre":	NOVASALUD.COM	"Direccion":	Profesor Zañartu 1121	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4175186	,"Longitude":	-70,6552317	,"Stock":	"SI"}
{"Nombre":	EMERSON	"Direccion":	Tambo Quemado 3711	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,499862	,"Longitude":	-70,2831631	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Paseo Pie Andino 4850, S-112	,"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,3261647	,"Longitude":	-70,5187076	,"Stock":	"SI"}
{"Nombre":	FARMACIA MOLCO	"Direccion":	SECTOR MOLCO BAJO, KM 10,3 S/N, CAMINO VILLARRICA-PUCÓN	,"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,29815072	,"Longitude":	-72,10308391	,"Stock":	"NO"}
{"Nombre":	FARMACIA BLÜMEL	"Direccion":	Carrera 1195	,"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7877086	,"Longitude":	-71,1977426	,"Stock":	"SI"}
{"Nombre":	PATAGONIA	"Direccion":	Avenida Alcalde José Luis Infante Larraín 1817	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5621787	,"Longitude":	-70,7770507	,"Stock":	"NO"}
{"Nombre":	Farmacia Mas Salud	"Direccion":	Javiera Carrera N° 330, local 8	,"Region":	OHIGGINS	,"Comuna":	CHIMBARONGO	,"Latitude":	-34,710737	,"Longitude":	-71,042495	,"Stock":	"NO"}
{"Nombre":	Farmacia O'Higgins	"Direccion":	Calle Pintor Gustavo Cabello OlguinN° 804, local 2 torre B	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1398422	,"Longitude":	-70,7393657	,"Stock":	"SI"}
{"Nombre":	Farmacia Hospitalizado	"Direccion":	Mariano Egaña 1640	,"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,6131811	,"Longitude":	-72,9552558	,"Stock":	"SI"}
{"Nombre":	Ecopharm	"Direccion":	Maria Elena 881	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5618337	,"Longitude":	-70,5976754	,"Stock":	"SI"}
{"Nombre":	DEL DR SIMI	"Direccion":	Avenida Padre Hurtado Sur 875, LOCAL BC 717-721	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4155275	,"Longitude":	-70,5402562	,"Stock":	"NO"}
{"Nombre":	FARMACIA TEMPOFARMA	"Direccion":	AVENIDA CUATRO ESQUINAS 117	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,93454626	,"Longitude":	-71,25641669	,"Stock":	"SI"}
{"Nombre":	FARMACIA POPULAR MONTE PATRIA	"Direccion":	balmaceda	,"Region":	COQUIMBO	,"Comuna":	MONTE PATRIA	,"Latitude":	-30,69563415	,"Longitude":	-70,95777427	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Agustinas 1173	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4409117	,"Longitude":	-70,6532004	,"Stock":	"NO"}
{"Nombre":	BUIN MAIPO	"Direccion":	Camino Buin Maipo 2876, LOCAL 7	,"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,73184454	,"Longitude":	-70,77223652	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM HUALPENCILLO	"Direccion":	Bulgaria 2845	,"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,7827482	,"Longitude":	-73,1038747	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO (95)	"Direccion":	Gerónimo de Alderete 635	,"Region":	ARAUCANIA	,"Comuna":	VILLARRICA	,"Latitude":	-39,2830271	,"Longitude":	-72,2291154	,"Stock":	"SI"}
{"Nombre":	DEL PACÍFICO	"Direccion":	Avenida las Rejas 854	,"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,46400088	,"Longitude":	-70,70489893	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" 9104	"Direccion":	AVENIDA LA FERIA 48 LOCAL 2	,"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,5977031	,"Longitude":	-71,1981561	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	IGNACIO CARRERA PINTO 583. LOCAL 2	,"Region":	BIOBIO	,"Comuna":	LOS ALAMOS	,"Latitude":	-37,62749628	,"Longitude":	-73,46003228	,"Stock":	"NO"}
{"Nombre":	CENTRAL	"Direccion":	Santo Domingo 1516, local 2	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4371648	,"Longitude":	-70,6587526	,"Stock":	"NO"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	MAIPU N° 110, MALL PLAZA COPIAPO	,"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3692353	,"Longitude":	-70,339603	,"Stock":	"SI"}
{"Nombre":	FARMACIA SANTA MARÍA	"Direccion":	AVDA. BERNARDO O´HIGGINS Nº 904, LOCAL 1	,"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,508975	,"Longitude":	-72,453507	,"Stock":	"SI"}
{"Nombre":	Rosario	"Direccion":	Avenida Recoleta 2401	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,40481	,"Longitude":	-70,64285	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida Libertador Bernardo O'Higgins 739	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4467056	,"Longitude":	-70,6637376	,"Stock":	"NO"}
{"Nombre":	ALOSAL	"Direccion":	Avenida Cardenal José María Caro 1771	,"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,3731374	,"Longitude":	-70,682323	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	San Isidro 49	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4433999	,"Longitude":	-70,6449	,"Stock":	"NO"}
{"Nombre":	La Rebaja	"Direccion":	Moneda 1046	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442061	,"Longitude":	-70,6513299	,"Stock":	"NO"}
{"Nombre":	Quilicura	"Direccion":	Avenida Manuel Antonio Matta 1403	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3667621	,"Longitude":	-70,7134932	,"Stock":	"SI"}
{"Nombre":	La Rebaja	"Direccion":	Simón Bolívar 2137	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4510611	,"Longitude":	-70,6091199	,"Stock":	"SI"}
{"Nombre":	Clinica MEDS	"Direccion":	Avenida José Alcalde Délano 10581	,"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,3556236	,"Longitude":	-70,5351389	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Padre Sergio Correa 15700	,"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,2711848	,"Longitude":	-70,6235129	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMATOTAL  L-09	"Direccion":	Avenida Pablo Neruda N°02491,TEMUCO	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7392147	,"Longitude":	-72,6261544	,"Stock":	"SI"}
{"Nombre":	LA GENERICA	"Direccion":	Blanco Encalada 1425	,"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,4033363	,"Longitude":	-70,7046569	,"Stock":	"NO"}
{"Nombre":	FARMACIA PARQUE LANTAÑO	"Direccion":	CAMINO PARQUE LANTAÑO N° 498-A	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,59383051	,"Longitude":	-72,11837586	,"Stock":	"NO"}
{"Nombre":	UNIDAS	"Direccion":	Avenida 18 de Septiembre 311, local 2	,"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,8081695	,"Longitude":	-70,7378087	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUTUAL SE SEGURIDAD CCHC	"Direccion":	Autopista Concepción - Talcahuano 8720	,"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79389	,"Longitude":	-73,069711	,"Stock":	"SI"}
{"Nombre":	avila	"Direccion":	avenida del Valle 2700	,"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,204807	,"Longitude":	-70,675752	,"Stock":	"SI"}
{"Nombre":	Essalud	"Direccion":	avenida Vicuña Mackenna Oriente 6553	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,537088	,"Longitude":	-70,586124	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACÉUTICA CHILOÉ	"Direccion":	RAMÒN FREIRE 620	,"Region":	LOS LAGOS	,"Comuna":	DALCAHUE	,"Latitude":	-42,378003	,"Longitude":	-73,651798	,"Stock":	"SI"}
{"Nombre":	FARMACIA LA CHILLANEJA	"Direccion":	Agustín Gómez García Nº320	,"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,0992531	,"Longitude":	-73,633042	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAL LOS ÁLAMOS	"Direccion":	pedro eyheramendy 835	,"Region":	BIOBIO	,"Comuna":	LOS ALAMOS	,"Latitude":	-37,6261237	,"Longitude":	-73,4622664	,"Stock":	"NO"}
{"Nombre":	FARMACIA COLÓN	"Direccion":	AVENIDA COLÓN A1 ESQUINA LOS CLAVELES	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,33155	,"Longitude":	-72,9699494	,"Stock":	"SI"}
{"Nombre":	Lifepharmacy	"Direccion":	Avenida Padre Hurtado 10670	,"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5592493	,"Longitude":	-70,6699765	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO 79	"Direccion":	DIEGO PORTALES Nº 986	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7378276	,"Longitude":	-72,5878807	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAHORRO DISTRIBUIDORA IVONNE	"Direccion":	Blanco Encalada 43	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8774104	,"Longitude":	-71,2436737	,"Stock":	"NO"}
{"Nombre":	MULTIFARMA	"Direccion":	Almagro 399	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,46934519	,"Longitude":	-72,34953067	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Irarrázaval 2461	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4543189	,"Longitude":	-70,6054273	,"Stock":	"NO"}
{"Nombre":	ARUMI	"Direccion":	21 de Mayo 200	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,477658	,"Longitude":	-70,319751	,"Stock":	"NO"}
{"Nombre":	Spaciofarma	"Direccion":	Avenida Carrascal 4897	,"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4207059	,"Longitude":	-70,7003868	,"Stock":	"SI"}
{"Nombre":	Falmez	"Direccion":	Papa Juan XXIII 386	,"Region":	METROPOLITANA	,"Comuna":	PADRE HURTADO	,"Latitude":	-33,5752449	,"Longitude":	-70,8340494	,"Stock":	"SI"}
{"Nombre":	FARMACIAS ELIAS	"Direccion":	BARROS ARANA 345 LOS SAUCES	,"Region":	ARAUCANIA	,"Comuna":	LOS SAUCES	,"Latitude":	-37,979546	,"Longitude":	-72,83431	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOLY	"Direccion":	CALLE CHACABUCO N°590	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,58770858	,"Longitude":	-70,98822999	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR. SIMI F0366	"Direccion":	Plaza Benjamín Muñoz Gamero 1011	,"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1627625	,"Longitude":	-70,9069138	,"Stock":	"SI"}
{"Nombre":	La Rebaja	"Direccion":	Avenida Vicuña Mackenna 660	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4500977	,"Longitude":	-70,6308075	,"Stock":	"NO"}
{"Nombre":	Eco Farmacias	"Direccion":	Eyzaguirre 517	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5930563	,"Longitude":	-70,705347	,"Stock":	"NO"}
{"Nombre":	MAGNAE FARMACIAS	"Direccion":	Avenida El Santo 1646	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91477088	,"Longitude":	-71,25642427	,"Stock":	"SI"}
{"Nombre":	Farmacia Farmagratis	"Direccion":	Arlegui 631	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0236188	,"Longitude":	-71,5532581	,"Stock":	"SI"}
{"Nombre":	FARMACIA NEVADOS	"Direccion":	AVENIDA LUIS DURAND 02187, LOCAL 107	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"SI"}
{"Nombre":	UNIDAS	"Direccion":	Avenida 18 de Septiembre 311, local 2	,"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,8081695	,"Longitude":	-70,7378087	,"Stock":	"NO"}
{"Nombre":	FARMACIA MANZANAL	"Direccion":	Avenida Einstein 857	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1822	,"Longitude":	-70,7252199	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN ANDRES	"Direccion":	AVENIDA LAS SALINAS N 595, CAHUIL, PICHILEMU	,"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,47413584	,"Longitude":	-72,02242075	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Avenida Valparaíso  N° 624	,"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0442686	,"Longitude":	-71,3731232	,"Stock":	"NO"}
{"Nombre":	HIGEA SPA	"Direccion":	Avenida Edmundo Eluchans 1737	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9590791	,"Longitude":	-71,5446777	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIDAFARMA	"Direccion":	Colón 372	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7136513	,"Longitude":	-73,113088	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Pedro Aguirre Cerda 646	,"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,0919578	,"Longitude":	-73,1573702	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Esmeralda 312	,"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2463003	,"Longitude":	-73,3156586	,"Stock":	"NO"}
{"Nombre":	FARMA FAMILIA	"Direccion":	Avenida El Parque 645, local 5	,"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,3033255	,"Longitude":	-70,7390718	,"Stock":	"SI"}
{"Nombre":	FARMACIA FENIX	"Direccion":	Avenida Varela 1450	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95749113	,"Longitude":	-71,3377449	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALA	"Direccion":	Avenida Guillermo Ulriksen 1637	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,91959832	,"Longitude":	-71,23529801	,"Stock":	"NO"}
{"Nombre":	Tu Rincon Salud	"Direccion":	avenida Padre Hurtado 13449	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,585796	,"Longitude":	-70,699551	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM PEDRO DE VALDIVIA	"Direccion":	Las Canchas 56	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8422017	,"Longitude":	-73,0560924	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Camino el Alba 11969	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,406233	,"Longitude":	-70,54353	,"Stock":	"SI"}
{"Nombre":	LA SOLUCIÓN	"Direccion":	Lo Bascuñan 200	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,35909	,"Longitude":	-70,728871	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Américo Vespucio 1077, piso 2, interior ´Clinica Indisa Maipu	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4781475	,"Longitude":	-70,7549502	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Avenida Americo Vespucio 1501, locales BDK 2046b/BDK 2048 /BDK 2050	,"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,500749	,"Longitude":	-70,709519	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Avenida Padre Hurtado 875, local BC 717-721	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409332	,"Longitude":	-70,567308	,"Stock":	"NO"}
{"Nombre":	FARMACIA TADEO HAENKE	"Direccion":	Avenida Tadeo Haenke 2099-A	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,24009865	,"Longitude":	-70,13888574	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	21 DE MAYO N° 1709	,"Region":	ANTOFAGASTA	,"Comuna":	TOCOPILLA	,"Latitude":	-22,0857976	,"Longitude":	-70,1930064	,"Stock":	"SI"}
{"Nombre":	FARMACIA HIGEA II	"Direccion":	Antonio José de Sucre 711	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6489462	,"Longitude":	-70,3946449	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	Pedro Polanco N° 279	,"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4499018	,"Longitude":	-71,2325958	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	Ortiz de Rozas N°402	,"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4499018	,"Longitude":	-71,2325958	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Ortiz de Rozas N° 406	,"Region":	VALPARAISO	,"Comuna":	LA LIGUA	,"Latitude":	-32,4499018	,"Longitude":	-71,2325958	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	PRAT N° 172	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8803027	,"Longitude":	-71,2497156	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALFA	"Direccion":	Colo Colo 197	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,46932427	,"Longitude":	-72,34818775	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Monseñor Ramon Munita 1600	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,45439676	,"Longitude":	-72,9345037	,"Stock":	"SI"}
{"Nombre":	FARMACIA UNO	"Direccion":	Pedro Aguirre Cerda 601	,"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,0923152	,"Longitude":	-73,157095	,"Stock":	"SI"}
{"Nombre":	FARMACIA BRICEÑO	"Direccion":	José A. Ortuzar N° 568	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5922807	,"Longitude":	-71,6055123	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	Caletera Oriente Autopista Los Libertadores 21160	,"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-32,8835821	,"Longitude":	-70,6589143	,"Stock":	"SI"}
{"Nombre":	LA BOTIKA	"Direccion":	Avenida Presidente José Batlle Y Ordóñez 3933 local 2	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4502607	,"Longitude":	-70,5882336	,"Stock":	"NO"}
{"Nombre":	FARMACIA EMILUC	"Direccion":	Rancagua 2740	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23587738	,"Longitude":	-70,13209918	,"Stock":	"NO"}
{"Nombre":	24 HORAS	"Direccion":	18 de Septiembre 1061	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,482542	,"Longitude":	-70,3123996	,"Stock":	"SI"}
{"Nombre":	Tu Salud	"Direccion":	PEDRO DE VALDIVIA 4170	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,459518	,"Longitude":	-70,597858	,"Stock":	"SI"}
{"Nombre":	HAHNNEMAN	"Direccion":	Avenida Apoquindo 6210	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4082291	,"Longitude":	-70,5663678	,"Stock":	"SI"}
{"Nombre":	farmacia Maicao	"Direccion":	Calle 1 Sur 1150	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4276788	,"Longitude":	-71,66051219	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Alcalde Eduardo Castillo Velasco 5500, local 1	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4619793	,"Longitude":	-70,574414	,"Stock":	"SI"}
{"Nombre":	Marsil	"Direccion":	Avenida Recoleta 401	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4284823	,"Longitude":	-70,6464592	,"Stock":	"NO"}
{"Nombre":	Rosario	"Direccion":	Pedro Aguirre Cerda 1185	,"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,285037	,"Longitude":	-70,87738	,"Stock":	"NO"}
{"Nombre":	Dr Simi	"Direccion":	avenida Camilo Henríquez 3692	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,620226	,"Longitude":	-70,591315	,"Stock":	"SI"}
{"Nombre":	Diez	"Direccion":	avenida Padre Hurtado Sur 810	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409332	,"Longitude":	-70,567308	,"Stock":	"SI"}
{"Nombre":	Amancay	"Direccion":	avenida Manquehue Norte 2032	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,386826	,"Longitude":	-70,56354	,"Stock":	"SI"}
{"Nombre":	ROME	"Direccion":	Buin 2692	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5854745	,"Longitude":	-70,5543573	,"Stock":	"NO"}
{"Nombre":	SIBONEY	"Direccion":	Avenida Manuel Antonio Matta 1538	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4605998	,"Longitude":	-70,6557377	,"Stock":	"SI"}
{"Nombre":	FARMACIA ENTRE PUEBLOS	"Direccion":	AVENIDA DOCTOR MOORE N 62-A	,"Region":	OHIGGINS	,"Comuna":	PAREDONES	,"Latitude":	-34,6465031	,"Longitude":	-71,8994386	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOPHARMA	"Direccion":	Membrillar 50	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1713479	,"Longitude":	-70,7340369	,"Stock":	"NO"}
{"Nombre":	FARMACIA ENDESALUD	"Direccion":	ALONSO DE ERCILLA N° 279, LOCAL C	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6062618	,"Longitude":	-72,1023351	,"Stock":	"SI"}
{"Nombre":	SIGFARMA	"Direccion":	José Manso de Velasco 292	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47055748	,"Longitude":	-72,3473461	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	5 DE ABRIL N° 736-740	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6095147	,"Longitude":	-72,1019879	,"Stock":	"SI"}
{"Nombre":	FARMACIA SABINA	"Direccion":	LOS PUELCHES N° 283	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,61816976	,"Longitude":	-72,08528546	,"Stock":	"NO"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	José Joaquín Pérez N° 236	,"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7877958	,"Longitude":	-71,2039963	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	Domingo Fernández Concha N° 609	,"Region":	VALPARAISO	,"Comuna":	PAPUDO	,"Latitude":	-32,5072087	,"Longitude":	-71,4485013	,"Stock":	"NO"}
{"Nombre":	Lawenche	"Direccion":	Avenida el Sauce 1832	,"Region":	METROPOLITANA	,"Comuna":	HUECHURABA	,"Latitude":	-33,3598897	,"Longitude":	-70,6808795	,"Stock":	"NO"}
{"Nombre":	Deltapharma	"Direccion":	Bombero Luís Moroni 2740, local 3	,"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,5009171	,"Longitude":	-70,7007469	,"Stock":	"SI"}
{"Nombre":	Farmacia Dr Simi	"Direccion":	Urriola 215	,"Region":	OHIGGINS	,"Comuna":	RENGO	,"Latitude":	-34,4098435	,"Longitude":	-70,8587955	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND" JUMBO MAITENCILLO	"Direccion":	MARBELLA LOTE A LOCALES 9 Y 10	,"Region":	VALPARAISO	,"Comuna":	PUCHUNCAVI	,"Latitude":	-32,722005	,"Longitude":	-71,4117004	,"Stock":	"SI"}
{"Nombre":	Farmacia Coinco	"Direccion":	Francisco Díaz Muñoz 194	,"Region":	OHIGGINS	,"Comuna":	COINCO	,"Latitude":	-34,26949169	,"Longitude":	-70,95440644	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM CHIGUAYANTE	"Direccion":	Chiguay	,"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,926192	,"Longitude":	-73,02905314	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM ERNESTO GARCIA V.	"Direccion":	Lautaro 49	,"Region":	ARAUCANIA	,"Comuna":	FREIRE	,"Latitude":	-38,9534116	,"Longitude":	-72,6280225	,"Stock":	"NO"}
{"Nombre":	Solufar	"Direccion":	Camino A Rinconada 1201, nivel -1, locales 8 y 9	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,50876039	,"Longitude":	-70,77478785	,"Stock":	"NO"}
{"Nombre":	farmacia Maicao	"Direccion":	Arturo Prat 2378	,"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,59545338	,"Longitude":	-71,73088133	,"Stock":	"SI"}
{"Nombre":	AURORA	"Direccion":	Avenida Fontt 730, local A	,"Region":	METROPOLITANA	,"Comuna":	COLINA	,"Latitude":	-33,1969471	,"Longitude":	-70,6751978	,"Stock":	"SI"}
{"Nombre":	PUNTO FARMA	"Direccion":	Román Díaz 2217, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4514411	,"Longitude":	-70,6167511	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	Matucana 1202, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,4324049	,"Longitude":	-70,6809754	,"Stock":	"NO"}
{"Nombre":	HERRERA	"Direccion":	Avenida Aeropuerto 7485	,"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,5106614	,"Longitude":	-70,7066019	,"Stock":	"SI"}
{"Nombre":	Farmacontigo	"Direccion":	Calle 1 Sur 999	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4272875	,"Longitude":	-71,66275241	,"Stock":	"NO"}
{"Nombre":	ELISS	"Direccion":	Avenida Los Pajaritos 5097 local A	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4757996	,"Longitude":	-70,7396834	,"Stock":	"NO"}
{"Nombre":	FARMACIA NATURA AUSTRAL	"Direccion":	IGNACIO SERRANO 435 LOCAL 3	,"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4814048	,"Longitude":	-73,7618055	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO L 205	"Direccion":	DEL SALVADOR 240	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,31783	,"Longitude":	-72,98358	,"Stock":	"SI"}
{"Nombre":	FARMACIA ECONOMIK	"Direccion":	Valle del Paraíso 2746	,"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,07032753	,"Longitude":	-71,41910431	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Avenida Valparaíso 716	,"Region":	VALPARAISO	,"Comuna":	VILLA ALEMANA	,"Latitude":	-33,0443092	,"Longitude":	-71,3740442	,"Stock":	"NO"}
{"Nombre":	Amaya	"Direccion":	Primero de Mayo 3582	,"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,496346	,"Longitude":	-70,626743	,"Stock":	"SI"}
{"Nombre":	FARMACIA HOSPITAL COINCO	"Direccion":	FRANCISCO DIAZ MUÑOZ	,"Region":	OHIGGINS	,"Comuna":	COINCO	,"Latitude":	-34,26844546	,"Longitude":	-70,9538083	,"Stock":	"NO"}
{"Nombre":	FARMACIA DOCTOR FARMA L4	"Direccion":	OHIGGINS 712 CASTRO	,"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,47794062	,"Longitude":	-73,7653462	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	German Riesco 510	,"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,441416	,"Longitude":	-71,074075	,"Stock":	"SI"}
{"Nombre":	FARMACIA PULMAHUE	"Direccion":	N° 980	,"Region":	OHIGGINS	,"Comuna":	LAS CABRAS	,"Latitude":	-34,1771423	,"Longitude":	-71,4054911	,"Stock":	"SI"}
{"Nombre":	FARMACIA CASTRO L1	"Direccion":	IGNACIO SERRANO 420 CASTRO	,"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4815241	,"Longitude":	-73,7620581	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi Local N° F-104	"Direccion":	San Diego N° 346	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449288	,"Longitude":	-70,669287	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Calle 1 Sur 1371	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42749	,"Longitude":	-71,65746	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	CHACABUCO 232	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8803027	,"Longitude":	-71,2497156	,"Stock":	"NO"}
{"Nombre":	FARMACIA SANTA ANA	"Direccion":	ESMERALDA 161 B	,"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,63068559	,"Longitude":	-71,16301059	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAIRA	"Direccion":	Eduardo Frei 3862	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,02324793	,"Longitude":	-71,51091226	,"Stock":	"SI"}
{"Nombre":	BIO CUBA	"Direccion":	Freire 686 y 688	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5960604	,"Longitude":	-70,7053038	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND" S.A.	"Direccion":	1 Norte N° 2901 local 4044	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0354283	,"Longitude":	-71,5235401	,"Stock":	"SI"}
{"Nombre":	KARDIOFARMA	"Direccion":	Salvador Vergara 448	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,03085625	,"Longitude":	-71,54429699	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Avenida Pacifico 5127	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,998924	,"Longitude":	-71,5190652	,"Stock":	"SI"}
{"Nombre":	Isabella	"Direccion":	Claudio Arrau 7152	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,4421948	,"Longitude":	-70,7667027	,"Stock":	"NO"}
{"Nombre":	TU FARMACIA	"Direccion":	José Santiago Aldunate 1535	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,95753084	,"Longitude":	-71,33940248	,"Stock":	"NO"}
{"Nombre":	FARMACIA FUSAT	"Direccion":	Carretera del Cobre 1002	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1878968	,"Longitude":	-70,720912	,"Stock":	"SI"}
{"Nombre":	Farmaplus	"Direccion":	Avenida Santa Rosa 991	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4568272	,"Longitude":	-70,6438743	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DE CONTULMO	"Direccion":	Las Araucarias 1075	,"Region":	BIOBIO	,"Comuna":	CONTULMO	,"Latitude":	-38,0198426	,"Longitude":	-73,2319238	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAUPOLICÁN	"Direccion":	Caupolicán 270	,"Region":	BIOBIO	,"Comuna":	LOTA	,"Latitude":	-37,0913705	,"Longitude":	-73,1567579	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	Avenida Manuel Montt 291	,"Region":	BIOBIO	,"Comuna":	CORONEL	,"Latitude":	-37,0257665	,"Longitude":	-73,1481136	,"Stock":	"SI"}
{"Nombre":	Del Doctor Simi	"Direccion":	Avenida Jorge Alessandri N° 944, local 5	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,521463	,"Longitude":	-70,762566	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA BOTICA DE FLORA L2	"Direccion":	SAN FRANCISCO 1176	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3237265	,"Longitude":	-72,9855703	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	Balmaceda	,"Region":	BIOBIO	,"Comuna":	LAJA	,"Latitude":	-37,28068793	,"Longitude":	-72,71477683	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F 0320	"Direccion":	AVDA. PABLO NERUDA N° 02050  LOCAL 122	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"SI"}
{"Nombre":	FARMACIA NAROA	"Direccion":	MANUEL BULNES N° 214	,"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,368186	,"Longitude":	-72,631525	,"Stock":	"SI"}
{"Nombre":	FARMACIA VECINAL	"Direccion":	AVDA. JAVIERA CARRERA N° 209 LOCAL 101	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	Esmeralda 707	,"Region":	LOS RIOS	,"Comuna":	LA UNION	,"Latitude":	-40,2947	,"Longitude":	-73,0809	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	Martínez de Rozas 592	,"Region":	LOS RIOS	,"Comuna":	PANGUIPULLI	,"Latitude":	-39,6430193	,"Longitude":	-72,3305594	,"Stock":	"NO"}
{"Nombre":	FARMACIA CURACAUTIN	"Direccion":	SERRANO Nº 195	,"Region":	ARAUCANIA	,"Comuna":	CURACAUTIN	,"Latitude":	-38,4428474	,"Longitude":	-71,8909405	,"Stock":	"NO"}
{"Nombre":	Río	"Direccion":	Río de Janeiro 341	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4297212	,"Longitude":	-70,6428733	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi	"Direccion":	Carlos Peña Otaegui 11900, local 10	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4120699	,"Longitude":	-70,5115492	,"Stock":	"SI"}
{"Nombre":	Los Robles	"Direccion":	Eyzaguirre 0484	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,585796	,"Longitude":	-70,699551	,"Stock":	"SI"}
{"Nombre":	Lorenza	"Direccion":	Avenida Segunda Transversal 3165	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5013266	,"Longitude":	-70,7452239	,"Stock":	"NO"}
{"Nombre":	Bluefarma	"Direccion":	avenida Bernardo O'Higgins N° 041 A	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,35909	,"Longitude":	-70,728871	,"Stock":	"SI"}
{"Nombre":	Nueva Era	"Direccion":	Moneda 1382, local 11	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442569	,"Longitude":	-70,6558942	,"Stock":	"NO"}
{"Nombre":	Red Vital	"Direccion":	El Mirador 1202, local C	,"Region":	METROPOLITANA	,"Comuna":	CERRILLOS	,"Latitude":	-33,5033304	,"Longitude":	-70,7262585	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	San Martín 595	,"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4794514	,"Longitude":	-73,7634853	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE" L-9097	"Direccion":	ARTURO PRAT  2390	,"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,59537759	,"Longitude":	-71,73113149	,"Stock":	"SI"}
{"Nombre":	Santa Catalina	"Direccion":	Raúl Sánchez Cerda 57	,"Region":	METROPOLITANA	,"Comuna":	PAINE	,"Latitude":	-33,8123184	,"Longitude":	-70,7419832	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi	"Direccion":	Gran Avenida José Miguel Carrera 4622, local 1	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,4962988	,"Longitude":	-70,652688	,"Stock":	"NO"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida Providencia 2218, local 2	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4214405	,"Longitude":	-70,6095967	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	Carlos Palacios 254	,"Region":	ÑUBLE	,"Comuna":	BULNES	,"Latitude":	-36,7439763	,"Longitude":	-72,2960527	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DR.SIMI CL0199	"Direccion":	ARTURO PRAT 1472, LOCAL 9 Y 10	,"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23379	,"Longitude":	-72,349697	,"Stock":	"NO"}
{"Nombre":	COLÓN	"Direccion":	Chacabuco 340	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4762391	,"Longitude":	-70,3155536	,"Stock":	"SI"}
{"Nombre":	FARMACIA ELIXIR	"Direccion":	Isabel Riquelme 665	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6091343	,"Longitude":	-72,0998772	,"Stock":	"SI"}
{"Nombre":	Unidad de Farmacia HRR	"Direccion":	Avenida Libertador Bernardo O'Higgins 3095	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1553772	,"Longitude":	-70,7665437	,"Stock":	"SI"}
{"Nombre":	Botica O´Higgins	"Direccion":	Estado 90	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,16666	,"Longitude":	-70,7397699	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	indepencia Nº615	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84678965	,"Longitude":	-71,59416077	,"Stock":	"SI"}
{"Nombre":	DEL DESIERTO LOCAL 2	"Direccion":	Avenida Arturo Prat 711	,"Region":	ANTOFAGASTA	,"Comuna":	TALTAL	,"Latitude":	-25,4062916	,"Longitude":	-70,4844526	,"Stock":	"NO"}
{"Nombre":	PURA SALUD	"Direccion":	Avenida Angamos 492	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6778707	,"Longitude":	-70,4088576	,"Stock":	"NO"}
{"Nombre":	FARMACIA PELQUÉN	"Direccion":	Avenida Santa Rosa 414	,"Region":	OHIGGINS	,"Comuna":	MALLOA	,"Latitude":	-34,464627	,"Longitude":	-70,8947887	,"Stock":	"SI"}
{"Nombre":	La Genérica	"Direccion":	Avenida Las Torres 32	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3662384	,"Longitude":	-70,7192232	,"Stock":	"SI"}
{"Nombre":	BOTIFARM	"Direccion":	Victoria 1050	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4637401	,"Longitude":	-70,6479667	,"Stock":	"SI"}
{"Nombre":	CLICFARMA	"Direccion":	Gerónimo de Alderete 1070, local 1	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,39388	,"Longitude":	-70,5621593	,"Stock":	"NO"}
{"Nombre":	GO FARMA	"Direccion":	Avenida Tala Canta Ilabe 1077, LOCAL 2	,"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6686925	,"Longitude":	-70,9247024	,"Stock":	"SI"}
{"Nombre":	ARCA	"Direccion":	Avenida Vicuña Mackenna 551	,"Region":	METROPOLITANA	,"Comuna":	MELIPILLA	,"Latitude":	-33,6804697	,"Longitude":	-71,2143561	,"Stock":	"NO"}
{"Nombre":	FARMACIA MIRADOR DE FRESIA L2	"Direccion":	SAN CARLOS 545	,"Region":	LOS LAGOS	,"Comuna":	FRESIA	,"Latitude":	-41,15251356	,"Longitude":	-73,42246437	,"Stock":	"NO"}
{"Nombre":	FARMACIA GALENO G-002	"Direccion":	Manuel Antonio Matta 2554	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6498639	,"Longitude":	-70,3961349	,"Stock":	"SI"}
{"Nombre":	FARMACIA JUAN PABLO II	"Direccion":	Avenida Huamachuco 9926	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5723251	,"Longitude":	-70,3820404	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	Avenida Camilo Henríquez 3889	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5614069	,"Longitude":	-70,5559388	,"Stock":	"SI"}
{"Nombre":	LA REBAJA	"Direccion":	AVENIDA IRARRAZAVAL 3200	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,459518	,"Longitude":	-70,597858	,"Stock":	"NO"}
{"Nombre":	LA REBAJA	"Direccion":	Avenida Apoquindo 4400, locales 125,127	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409332	,"Longitude":	-70,567308	,"Stock":	"SI"}
{"Nombre":	ULDA	"Direccion":	General Urrutia 601	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,585796	,"Longitude":	-70,699551	,"Stock":	"NO"}
{"Nombre":	PRAT	"Direccion":	Eucaliptus 81-85, local 1	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,6088959	,"Longitude":	-70,7026791	,"Stock":	"NO"}
{"Nombre":	LA ALEMANA	"Direccion":	Almirante Simpson 1809	,"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5832178	,"Longitude":	-72,0503142	,"Stock":	"SI"}
{"Nombre":	Damyfar	"Direccion":	Avenida Irarrázaval 4560	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4545182	,"Longitude":	-70,5825078	,"Stock":	"SI"}
{"Nombre":	TU RINCÓN SALUD	"Direccion":	Gran Avenida José Miguel Carrera 13102	,"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,574831	,"Longitude":	-70,6905973	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM LEOCAN PORTUS GOVINDEN	"Direccion":	Manuel Barros Borgoño 2645	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7403556	,"Longitude":	-73,092359	,"Stock":	"NO"}
{"Nombre":	GENÉRICA	"Direccion":	Avenida Ecuador 4379	,"Region":	METROPOLITANA	,"Comuna":	ESTACION CENTRAL	,"Latitude":	-33,4520585	,"Longitude":	-70,6950306	,"Stock":	"SI"}
{"Nombre":	Manquehue	"Direccion":	Avenida Las Condes N°6819, Local 3	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,409332	,"Longitude":	-70,567308	,"Stock":	"NO"}
{"Nombre":	FARMACIAS DEL DR. SIMI	"Direccion":	Luis Hermosilla 1599	,"Region":	ÑUBLE	,"Comuna":	COIHUECO	,"Latitude":	-36,6303378	,"Longitude":	-71,8311419	,"Stock":	"NO"}
{"Nombre":	BOTICA URBANA	"Direccion":	Avenida San Pablo 6296	,"Region":	METROPOLITANA	,"Comuna":	LO PRADO	,"Latitude":	-33,4445991	,"Longitude":	-70,7256728	,"Stock":	"SI"}
{"Nombre":	FARMACIA FRACCIÓN	"Direccion":	AVENIDA CATEDRAL, COCHAMÓ	,"Region":	LOS LAGOS	,"Comuna":	COCHAMO	,"Latitude":	-41,49409749	,"Longitude":	-72,30857422	,"Stock":	"SI"}
{"Nombre":	Farmacias "AHUMADA"	"Direccion":	Avenida Independencia 565, local TM-101	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4246863	,"Longitude":	-70,654728	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	Avenida Diego Portales 2291	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4831765	,"Longitude":	-70,2929298	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Calle Freire 664-C	,"Region":	MAULE	,"Comuna":	CONSTITUCION	,"Latitude":	-35,33252101	,"Longitude":	-72,41059529	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM LOS CERROS	"Direccion":	Playa El Galgo esquina Caleta Coliumo	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,71447391	,"Longitude":	-73,13485054	,"Stock":	"NO"}
{"Nombre":	Farmacia  El Boldo	"Direccion":	JUAN LUIS DIEZ, 2130	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,96922453	,"Longitude":	-71,23027939	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Arturo Prat 520	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98391393	,"Longitude":	-71,24213389	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Peña 884	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9816376	,"Longitude":	-71,2417453	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM SAN VICENTE	"Direccion":	Brasil 360	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,723566	,"Longitude":	-73,122864	,"Stock":	"SI"}
{"Nombre":	FARMACIA BARATITA	"Direccion":	Peña 668	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,9842829	,"Longitude":	-71,2414326	,"Stock":	"NO"}
{"Nombre":	FARMACIA BARATITA	"Direccion":	Arturo Prat 630	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,984088	,"Longitude":	-71,2434399	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM PAULINA AVENDAÑO PEREDA	"Direccion":	Carlos Dittborn 4100	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7508722	,"Longitude":	-73,1019548	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIDA Y SALUD	"Direccion":	Catorce Sur 195	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4363385	,"Longitude":	-71,6780973	,"Stock":	"NO"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida La Dehesa 541, locales 6, 7 y 8	,"Region":	METROPOLITANA	,"Comuna":	LO BARNECHEA	,"Latitude":	-33,3619314	,"Longitude":	-70,5149875	,"Stock":	"SI"}
{"Nombre":	Farmacia Popular Doñihue	"Direccion":	Doctor Sanhueza sin número	,"Region":	OHIGGINS	,"Comuna":	DOÑIHUE	,"Latitude":	-34,22304544	,"Longitude":	-70,96133259	,"Stock":	"SI"}
{"Nombre":	Farmacia Clínica Redsalud, Rancagua	"Direccion":	Cáceres 645	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,1662552	,"Longitude":	-70,7432841	,"Stock":	"SI"}
{"Nombre":	FARMACIA HCB	"Direccion":	Avenida Isidoro del Solar 90	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4249141	,"Longitude":	-71,667376	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM LEBU NORTE	"Direccion":	Ignacio Carrera Pinto 1441	,"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,60415335	,"Longitude":	-73,64698679	,"Stock":	"SI"}
{"Nombre":	Farmacia TEAYUDO FARMA	"Direccion":	Avenida Libertador Bernardo O Higgins 140	,"Region":	OHIGGINS	,"Comuna":	RANCAGUA	,"Latitude":	-34,166575	,"Longitude":	-70,736261	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM LOMA COLORADA	"Direccion":	Los Sauces 56	,"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8856956	,"Longitude":	-73,1391095	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	Alcalde Luís Araya Cereceda 1047, local 2	,"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6064252	,"Longitude":	-70,9002497	,"Stock":	"SI"}
{"Nombre":	FARMA SUR	"Direccion":	Avenida Gabriela Oriente 01448	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5761185	,"Longitude":	-70,5663057	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAVITA	"Direccion":	Los Aromos 2558	,"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2558516	,"Longitude":	-70,1063159	,"Stock":	"SI"}
{"Nombre":	FARMACIA VILLA FREI	"Direccion":	Avenida Teniente Hernán Merino Correa 2679	,"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,258563	,"Longitude":	-70,1047433	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM TALCAHUANO SUR	"Direccion":	Postdam 632	,"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,79877	,"Longitude":	-73,097071	,"Stock":	"SI"}
{"Nombre":	FARMACIA COSAM HUALPÉN	"Direccion":	Fernando Santiván 8840	,"Region":	BIOBIO	,"Comuna":	HUALPEN	,"Latitude":	-36,7989845	,"Longitude":	-73,0904694	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM VILLA NONGUÉN	"Direccion":	Río Loa 1397	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8310129	,"Longitude":	-73,0065358	,"Stock":	"NO"}
{"Nombre":	BLANCA	"Direccion":	San Carlos Sur 1939	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,5959499	,"Longitude":	-70,5516162	,"Stock":	"SI"}
{"Nombre":	FARMACIA COMUNAL DE ALGARROBO	"Direccion":	CARABINEROS DE CHILE (Ex calle Retamo) N° 2241	,"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,36831	,"Longitude":	-71,6703	,"Stock":	"SI"}
{"Nombre":	GENÉRICA	"Direccion":	José Manuel Balmaceda 4387	,"Region":	METROPOLITANA	,"Comuna":	RENCA	,"Latitude":	-33,4029202	,"Longitude":	-70,7095869	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	Las Pelargonias N° 840 local 6	,"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9299468	,"Longitude":	-71,5186065	,"Stock":	"NO"}
{"Nombre":	FARMACIAS "SALCOBRAND" JUMBO CONCÓN	"Direccion":	Concón Reñaca N° 3850 local 1001	,"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9299468	,"Longitude":	-71,5186065	,"Stock":	"SI"}
{"Nombre":	PALUMBO	"Direccion":	Avenida Salvador Allende 422	,"Region":	METROPOLITANA	,"Comuna":	SAN JOAQUIN	,"Latitude":	-33,4957362	,"Longitude":	-70,6354626	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Camino Internacional N° 2440 local LE 10	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0153481	,"Longitude":	-71,5500276	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	ESTERO MAITENLAHUE N° 925 local 2	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0153481	,"Longitude":	-71,5500276	,"Stock":	"SI"}
{"Nombre":	DR. SIMI	"Direccion":	ARLEGUI 1156 local 2	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0153481	,"Longitude":	-71,5500276	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Centenario N° 148	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5922807	,"Longitude":	-71,6055123	,"Stock":	"SI"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Ricardo Lyon 111, locales 6 y 203, Interior Centro Comercial Vivo Panorámico	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,42308872	,"Longitude":	-70,6096079	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMYMAS	"Direccion":	Llayllay N° 1752	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0153481	,"Longitude":	-71,5500276	,"Stock":	"SI"}
{"Nombre":	FARMACIAS FARMAECO	"Direccion":	VON SCHROEDERS N° 229 local 3	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0153481	,"Longitude":	-71,5500276	,"Stock":	"NO"}
{"Nombre":	GrupFarma	"Direccion":	Irarrázaval 4395	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,459518	,"Longitude":	-70,597858	,"Stock":	"NO"}
{"Nombre":	Del Doctor Simi	"Direccion":	avenida Ingeniero Eduardo Domínguez 666	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,521463	,"Longitude":	-70,762566	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP L 39	"Direccion":	SAN FRANCISCO 328	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3168522	,"Longitude":	-72,9847671	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Manuel Montt 1062	,"Region":	BIOBIO	,"Comuna":	TOME	,"Latitude":	-36,6189925	,"Longitude":	-72,9570228	,"Stock":	"SI"}
{"Nombre":	OXFAR	"Direccion":	Antonio Bellet 147, local 103	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4259493	,"Longitude":	-70,6175332	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Avenida Presidente Jorge Alessandri Rodríguez 20040, locales BS 134 -138 Mall plaza Sur	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,6316638	,"Longitude":	-70,7103613	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR.SIMI PATIO RUDECINDO ORTEGA CL0191	"Direccion":	Rudecindo Ortega 01505	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7175227	,"Longitude":	-72,5651688	,"Stock":	"NO"}
{"Nombre":	FARMACIA ESFARMA 2	"Direccion":	Manuel Balmaceda 425	,"Region":	ARAUCANIA	,"Comuna":	TEODORO SCHMIDT	,"Latitude":	-38,9967821	,"Longitude":	-73,0899392	,"Stock":	"NO"}
{"Nombre":	FARMACIA VITASUR 7	"Direccion":	MIGUEL ANSORENA Nº 425	,"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,2765599	,"Longitude":	-71,9742635	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATOTAL L-10	"Direccion":	SENADOR ESTEBANEZ N°555	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,735724	,"Longitude":	-72,6101269	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA" L688	"Direccion":	SAN MARTÍN 547	,"Region":	LOS LAGOS	,"Comuna":	CASTRO	,"Latitude":	-42,4800139	,"Longitude":	-73,7634537	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	AV. LOS CARRERA 2242	,"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3783589	,"Longitude":	-70,3144313	,"Stock":	"NO"}
{"Nombre":	Farmacia Dr Simi	"Direccion":	Avenida España 605	,"Region":	OHIGGINS	,"Comuna":	SAN VICENTE	,"Latitude":	-34,43814	,"Longitude":	-71,07435	,"Stock":	"SI"}
{"Nombre":	FARMACIA FUNDADORES	"Direccion":	Avenida Fundadores N° 1090 local 1	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,11963445	,"Longitude":	-71,57084067	,"Stock":	"NO"}
{"Nombre":	FARMACIA ALBORNOZ	"Direccion":	AV. PRESIDENTE IBAÑEZ Nº0371	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,83772506	,"Longitude":	-71,60540995	,"Stock":	"NO"}
{"Nombre":	Todofarma	"Direccion":	Estado 201	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,440478	,"Longitude":	-70,649246	,"Stock":	"SI"}
{"Nombre":	FARMACIA ESPACIO 26	"Direccion":	Carrera N° 1977 local 20	,"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7877958	,"Longitude":	-71,2039963	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM PINARES	"Direccion":	La Marina 1295	,"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9336569	,"Longitude":	-73,027722	,"Stock":	"SI"}
{"Nombre":	FARMACIA CESFAM VALLE LA PIEDRA	"Direccion":	San Martín 3973	,"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9245025	,"Longitude":	-73,0215489	,"Stock":	"NO"}
{"Nombre":	FARMACIA CESFAM LA LEONERA	"Direccion":	S/N	,"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9542538	,"Longitude":	-73,0131221	,"Stock":	"SI"}
{"Nombre":	Municipal de Maipú	"Direccion":	Campanario 2679	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5202236	,"Longitude":	-70,7933873	,"Stock":	"NO"}
{"Nombre":	LARUN	"Direccion":	Tobalaba 11835	,"Region":	METROPOLITANA	,"Comuna":	PEÑALOLEN	,"Latitude":	-33,48121993	,"Longitude":	-70,55852014	,"Stock":	"NO"}
{"Nombre":	Farmamarket	"Direccion":	Avenida Parque Central Oriente 1232	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5616115	,"Longitude":	-70,7848419	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Gregorio Cordovez 516	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,90316696	,"Longitude":	-71,24959953	,"Stock":	"SI"}
{"Nombre":	FARMACIA DENAVIFARMA	"Direccion":	Río Mapocho 149	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,761325	,"Longitude":	-73,0916806	,"Stock":	"SI"}
{"Nombre":	FARMACIA "AHUMADA"	"Direccion":	Errázuriz 1040	,"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,8179068	,"Longitude":	-73,2346021	,"Stock":	"NO"}
{"Nombre":	Redfarma	"Direccion":	Avenida Baquedano 872, locales 1 y 2, Lampa	,"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,285037	,"Longitude":	-70,87738	,"Stock":	"SI"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	Avenida Vicente Méndez 1545	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,58865465	,"Longitude":	-72,07756905	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE" VIVO CHILLAN	"Direccion":	Avenida Vicente Méndez 1545	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,58910153	,"Longitude":	-72,07633791	,"Stock":	"NO"}
{"Nombre":	Dr. Alivio	"Direccion":	San Pablo 1295, local A	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4340068	,"Longitude":	-70,6556672	,"Stock":	"SI"}
{"Nombre":	Farmacia Hospital Clinico IST	"Direccion":	Colón 3430	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7452776	,"Longitude":	-73,097501	,"Stock":	"SI"}
{"Nombre":	FARMACIA TODOFARMA	"Direccion":	Anibal Pinto 590	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8253724	,"Longitude":	-73,0502547	,"Stock":	"SI"}
{"Nombre":	FARMACIA ATENFARMA	"Direccion":	Los Naranjos 4	,"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8382544	,"Longitude":	-73,1167308	,"Stock":	"NO"}
{"Nombre":	FARMACIA BIOBIO 2.0	"Direccion":	Calle 8 Oriente 1508	,"Region":	BIOBIO	,"Comuna":	CHIGUAYANTE	,"Latitude":	-36,9063163	,"Longitude":	-73,0316496	,"Stock":	"SI"}
{"Nombre":	FARMACIA LIGA CHILENA CONTRA LA EPILEPSIA	"Direccion":	Cristóbal Colón 352	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,8996241	,"Longitude":	-71,2515688	,"Stock":	"NO"}
{"Nombre":	FARMACIA EXITO	"Direccion":	Arauco 247	,"Region":	COQUIMBO	,"Comuna":	OVALLE	,"Latitude":	-30,60238589	,"Longitude":	-71,20111433	,"Stock":	"NO"}
{"Nombre":	FARMATOTAL LOCAL 11	"Direccion":	Francisco Bilbao 638	,"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,987326	,"Longitude":	-72,636636	,"Stock":	"SI"}
{"Nombre":	Lifepharmacy	"Direccion":	Gran Avenida José Miguel Carrera 5993	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,5097557	,"Longitude":	-70,6569346	,"Stock":	"SI"}
{"Nombre":	LIFEPHARMACY	"Direccion":	Avenida Providencia 2676, LOCAL 108	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,418419	,"Longitude":	-70,602052	,"Stock":	"SI"}
{"Nombre":	Farmacia Municipal Valdivia	"Direccion":	Avenida Ramón Picarte 2582	,"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,833117	,"Longitude":	-73,2154027	,"Stock":	"NO"}
{"Nombre":	Popular Móvil de Pudahuel	"Direccion":	Itinerante	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,4421948	,"Longitude":	-70,7667027	,"Stock":	"SI"}
{"Nombre":	Novasalud.com	"Direccion":	Las Urbinas 59	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4222772	,"Longitude":	-70,6117837	,"Stock":	"NO"}
{"Nombre":	FARMACIA INDOMITA	"Direccion":	CALLE IMPERIAL 1040, LOCAL A Y B, PUREN	,"Region":	ARAUCANIA	,"Comuna":	PUREN	,"Latitude":	-38,032863	,"Longitude":	-73,072006	,"Stock":	"NO"}
{"Nombre":	FARMACIA PABELLON CLINICA BIOBIO	"Direccion":	Avenida Presidente Jorge Alessandri Rodriguez 3515	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7893813	,"Longitude":	-73,0631183	,"Stock":	"SI"}
{"Nombre":	FARMACIA ATENCION CERRADA CLINICA BIOBÍO	"Direccion":	Avenida Presidente Jorge Alessandri Rodriguez 3515	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7893813	,"Longitude":	-73,0631183	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	O'HIGGINS 539	,"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,36610228	,"Longitude":	-70,33377875	,"Stock":	"SI"}
{"Nombre":	FARMACIA ASITENCIAL CESFAM PITRUFQUEN	"Direccion":	León Gallo Sur 585,  Pitrufquén, Chile	,"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,9799535	,"Longitude":	-72,6503328	,"Stock":	"NO"}
{"Nombre":	Farma-Amiga	"Direccion":	Avenida O'Higgins 580	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5915488	,"Longitude":	-70,7045755	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Paul Harris 1077	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4005489	,"Longitude":	-70,5399818	,"Stock":	"NO"}
{"Nombre":	FARMACIA LA ISLA L1	"Direccion":	FREIRE 296	,"Region":	LOS LAGOS	,"Comuna":	QUELLON	,"Latitude":	-43,11861767	,"Longitude":	-73,61700892	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Avenida Ricardo Vicuña 230	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47328629	,"Longitude":	-72,34849846	,"Stock":	"SI"}
{"Nombre":	Las Dalias	"Direccion":	avenida Independencia N° 5780	,"Region":	METROPOLITANA	,"Comuna":	CONCHALI	,"Latitude":	-33,383446	,"Longitude":	-70,677602	,"Stock":	"SI"}
{"Nombre":	FARMACIA VIESAN	"Direccion":	QUETROLEUFU  KM 11, Pucon	,"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,2804107	,"Longitude":	-71,9679351	,"Stock":	"SI"}
{"Nombre":	FARMACIA BLESSFARMA	"Direccion":	Eleuterio Ramírez 1054-1064	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21785734	,"Longitude":	-70,14935919	,"Stock":	"NO"}
{"Nombre":	Pharma Vita	"Direccion":	Avenida Carrascal 6305	,"Region":	METROPOLITANA	,"Comuna":	QUINTA NORMAL	,"Latitude":	-33,41486	,"Longitude":	-70,71595	,"Stock":	"SI"}
{"Nombre":	FARMACIA KNOP	"Direccion":	COLIPI N° 484	,"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3670887	,"Longitude":	-70,331482	,"Stock":	"NO"}
{"Nombre":	FARMACIA DEL CENTRO DE ATENCION AMBULATORIA ACHS TEMUCO	"Direccion":	Francia 324	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7336833	,"Longitude":	-72,6094972	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIAL HOSPITAL SAN FERNANDO	"Direccion":	Negrete 1401	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,575861	,"Longitude":	-70,992683	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Príncipe de Gales 7271	,"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,4400766	,"Longitude":	-70,5559594	,"Stock":	"SI"}
{"Nombre":	TODOFARMA	"Direccion":	Avenida Padre Hurtado Norte 77, local 2	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3935778	,"Longitude":	-70,5455565	,"Stock":	"SI"}
{"Nombre":	HOSPITAL SAN VICENTE DE ARAUCO	"Direccion":	s/n	,"Region":	BIOBIO	,"Comuna":	ARAUCO	,"Latitude":	-37,2507286	,"Longitude":	-73,3175357	,"Stock":	"NO"}
{"Nombre":	FARMACIA ECOFARMA	"Direccion":	ARTURO PRAT Nº 620	,"Region":	ARAUCANIA	,"Comuna":	GORBEA	,"Latitude":	-37,7994404	,"Longitude":	-72,7122285	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Gobernador Carlos Bories 735	,"Region":	MAGALLANES	,"Comuna":	PUNTA ARENAS	,"Latitude":	-53,1594	,"Longitude":	-70,90533	,"Stock":	"NO"}
{"Nombre":	FARMACIA TODOFARMA	"Direccion":	CLARO SOLAR Nº 835	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7393898	,"Longitude":	-72,5900662	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Rioseco 305	,"Region":	BIOBIO	,"Comuna":	LEBU	,"Latitude":	-37,60866	,"Longitude":	-73,65299	,"Stock":	"SI"}
{"Nombre":	TOMY	"Direccion":	Avenida Las Condes 7118, local 2	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4045174	,"Longitude":	-70,5574577	,"Stock":	"SI"}
{"Nombre":	Pharmacenter	"Direccion":	Avenida Independencia 1054	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4182303	,"Longitude":	-70,656515	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Vivar 840	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,21604439	,"Longitude":	-70,14857084	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	Avenida Tadeo Haenke 1706	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,23828718	,"Longitude":	-70,144373	,"Stock":	"SI"}
{"Nombre":	FARMACIA PUERTA DEL SUR L3	"Direccion":	CENTRO COMERCIAL LÍNEA NUEVA DE PUERTO VARAS L1	,"Region":	LOS LAGOS	,"Comuna":	PUERTO VARAS	,"Latitude":	-41,3116123	,"Longitude":	-73,01254753	,"Stock":	"NO"}
{"Nombre":	FARMACIA NETFARMA	"Direccion":	ARTURO ALESSANDRI 197	,"Region":	LOS LAGOS	,"Comuna":	FRUTILLAR	,"Latitude":	-41,122995	,"Longitude":	-73,060097	,"Stock":	"NO"}
{"Nombre":	FARMACIA UNOFARMA	"Direccion":	AVENIDA AUSTRAL 1608	,"Region":	LOS LAGOS	,"Comuna":	PUERTO MONTT	,"Latitude":	-41,447106	,"Longitude":	-72,9258705	,"Stock":	"SI"}
{"Nombre":	FARMAWELL	"Direccion":	Avenida Las Condes 12751, LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,3717114	,"Longitude":	-70,5135247	,"Stock":	"SI"}
{"Nombre":	ECO FARMACIAS	"Direccion":	Avenida Providencia 2518, LOCAL 5	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4189638	,"Longitude":	-70,6040291	,"Stock":	"SI"}
{"Nombre":	PHARMACENTER	"Direccion":	Gamero 1363, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4208631	,"Longitude":	-70,6587472	,"Stock":	"NO"}
{"Nombre":	VIDAPHARMA	"Direccion":	Avenida Santa Isabel 0217, local B	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4468512	,"Longitude":	-70,628336	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DR. MAURICIO HEYERMANN TORRES	"Direccion":	Avenida General Bonilla Nº 695	,"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,797287	,"Longitude":	-72,709133	,"Stock":	"NO"}
{"Nombre":	REDFARMA	"Direccion":	Huérfanos 679, local 3	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4390436	,"Longitude":	-70,6465975	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DR. EDUARDO GONZÁLEZ GALENO DE CUNCO	"Direccion":	Avenida Santa María Nº 031	,"Region":	ARAUCANIA	,"Comuna":	CUNCO	,"Latitude":	-38,931747	,"Longitude":	-72,0286	,"Stock":	"SI"}
{"Nombre":	HOSPITAL COMPLEJO ASISTENCIAL PADRE LAS CASAS	"Direccion":	RUTA 194, CAMINO MAKEWE KM 0,7	,"Region":	ARAUCANIA	,"Comuna":	PADRE LAS CASAS	,"Latitude":	-38,76785017	,"Longitude":	-72,61560913	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DE LONCOCHE	"Direccion":	CARRERA Nº 330	,"Region":	ARAUCANIA	,"Comuna":	LONCOCHE	,"Latitude":	-39,368186	,"Longitude":	-72,631525	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DR. ABRAHAM GODOY PEÑA	"Direccion":	BARROS ARANA Nº 820	,"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,508975	,"Longitude":	-72,453507	,"Stock":	"NO"}
{"Nombre":	RECETARIO MAGISTRAL PREPARACIONES ONCOLÓGICAS	"Direccion":	Manuel Montt 115	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7367189	,"Longitude":	-72,5996465	,"Stock":	"SI"}
{"Nombre":	HOSPITAL DE NUEVA IMPERIAL	"Direccion":	AVDA. CASTELLÓN Nº 0115	,"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,7434351	,"Longitude":	-72,9635725	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DE PITRUFQUEN	"Direccion":	AVDA PEDRO LEON GALLO Nº 355	,"Region":	ARAUCANIA	,"Comuna":	PITRUFQUEN	,"Latitude":	-38,9799535	,"Longitude":	-72,6503328	,"Stock":	"NO"}
{"Nombre":	FARMACIA DE ATENCION ABIERTA HOSPITAL	"Direccion":	18 de Septiembre 1000	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4824409	,"Longitude":	-70,3130229	,"Stock":	"SI"}
{"Nombre":	FARMACIA DE ATENCION CERRADA HOSPITAL	"Direccion":	18 de Septiembre 1000	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4824409	,"Longitude":	-70,3130229	,"Stock":	"SI"}
{"Nombre":	BUSTAMANTE	"Direccion":	Primera Transversal 3025, local A	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,49946	,"Longitude":	-70,75166	,"Stock":	"SI"}
{"Nombre":	FARMACIA Y PERFUMERÍA LUZ DEL ALBA	"Direccion":	VALPARAÍSO 590	,"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,5762431	,"Longitude":	-73,1544384	,"Stock":	"NO"}
{"Nombre":	HOSPITAL DE VICTORIA	"Direccion":	AVDA. DARTNELL S/N	,"Region":	ARAUCANIA	,"Comuna":	VICTORIA	,"Latitude":	-38,23379	,"Longitude":	-72,349697	,"Stock":	"SI"}
{"Nombre":	CESFAM PIEDRA DEL ÁGUILA	"Direccion":	Cautín 537	,"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,796156	,"Longitude":	-72,7047643	,"Stock":	"NO"}
{"Nombre":	La Economía	"Direccion":	San Francisco 526-530	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4512122	,"Longitude":	-70,6466826	,"Stock":	"NO"}
{"Nombre":	CESFAM NUEVA IMPERIAL	"Direccion":	GOROSTIAGA Nº 258	,"Region":	ARAUCANIA	,"Comuna":	NUEVA IMPERIAL	,"Latitude":	-38,7434351	,"Longitude":	-72,9635725	,"Stock":	"SI"}
{"Nombre":	CESFAM PUCÓN	"Direccion":	Adolfo Kachele 200	,"Region":	ARAUCANIA	,"Comuna":	PUCON	,"Latitude":	-39,2801618	,"Longitude":	-71,9601709	,"Stock":	"SI"}
{"Nombre":	BERLÍN	"Direccion":	Avenida Berlín S/N, PARCELA 42, LOTE 11, COLONIA ALEMANA	,"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,62944513	,"Longitude":	-70,90999018	,"Stock":	"SI"}
{"Nombre":	FARMACIA TAMANACO	"Direccion":	Avenida 21 de mayo N° 5551 local 1	,"Region":	VALPARAISO	,"Comuna":	LA CRUZ	,"Latitude":	-32,8258069	,"Longitude":	-71,2273055	,"Stock":	"NO"}
{"Nombre":	MEGAPHARM	"Direccion":	Linderos Poniente 4711	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4278433	,"Longitude":	-70,2907476	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Avenida San Juan 1157	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,1694809	,"Longitude":	-70,6770954	,"Stock":	"NO"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida La Florida 9073	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5344635	,"Longitude":	-70,5744849	,"Stock":	"NO"}
{"Nombre":	K FARMA	"Direccion":	Río de Janeiro 283, local 1	,"Region":	METROPOLITANA	,"Comuna":	RECOLETA	,"Latitude":	-33,4305495	,"Longitude":	-70,6431587	,"Stock":	"SI"}
{"Nombre":	Dr. Farma	"Direccion":	Huérfanos 703	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4390803	,"Longitude":	-70,6469938	,"Stock":	"SI"}
{"Nombre":	FARMACIA LOS LAGOS	"Direccion":	STRIPCENTER RAHUE ALTO L5 VARIANTE CHORRILLOS 1631	,"Region":	LOS LAGOS	,"Comuna":	OSORNO	,"Latitude":	-40,56947435	,"Longitude":	-73,16679726	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMATIEMPO	"Direccion":	Valparaíso 1040	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,8865995	,"Longitude":	-71,2593707	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMA AZUL	"Direccion":	José Miguel Carrera Verdugo 999	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6092385	,"Longitude":	-71,603369	,"Stock":	"SI"}
{"Nombre":	FARMACIA BOSQUES	"Direccion":	Avenida Libertad 685	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,01563	,"Longitude":	-71,55038	,"Stock":	"NO"}
{"Nombre":	FARMACIA ELEMENTAL 4U	"Direccion":	Avenida la Tirana 5470-B	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,28901466	,"Longitude":	-70,12742035	,"Stock":	"NO"}
{"Nombre":	Lifepharmacy	"Direccion":	Gran Avenida José Miguel Carrera 5993	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,5097557	,"Longitude":	-70,6569346	,"Stock":	"SI"}
{"Nombre":	Patronato	"Direccion":	Gran Avenida José Miguel Carrera 5382	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,5027842	,"Longitude":	-70,6545341	,"Stock":	"SI"}
{"Nombre":	FARMACIAS DEL DR SALUD	"Direccion":	HOCHSTETTER Nº 805	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7369076	,"Longitude":	-72,6158206	,"Stock":	"SI"}
{"Nombre":	MAICAO	"Direccion":	Independencia 1105	,"Region":	LOS RIOS	,"Comuna":	RIO BUENO	,"Latitude":	-40,334162	,"Longitude":	-72,956016	,"Stock":	"NO"}
{"Nombre":	Farmacia Dr. Simi	"Direccion":	Avenida Ramón Picarte 422	,"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,814353	,"Longitude":	-73,2434913	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	EDUARDO RAGGIO N°20	,"Region":	VALPARAISO	,"Comuna":	CATEMU	,"Latitude":	-32,77773416	,"Longitude":	-70,96148466	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Arturo Prat 295	,"Region":	AYSEN	,"Comuna":	COYHAIQUE	,"Latitude":	-45,5720328	,"Longitude":	-72,0709736	,"Stock":	"NO"}
{"Nombre":	FARMACIA COMUNITARIA BEATRIZ SEPULVEDA JIMENEZ	"Direccion":	AVENIDA CENTRAL RAUL SILVA HENRIQUEZ 8321	,"Region":	METROPOLITANA	,"Comuna":	LO ESPEJO	,"Latitude":	-33,519326	,"Longitude":	-70,69101	,"Stock":	"SI"}
{"Nombre":	CENTRAL	"Direccion":	Avenida Independencia 895	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4209	,"Longitude":	-70,6555	,"Stock":	"SI"}
{"Nombre":	El Doctorcito	"Direccion":	avenida José Joaquín Pérez 6915	,"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,434858	,"Longitude":	-70,730044	,"Stock":	"SI"}
{"Nombre":	FARMACIA FUNDADORES	"Direccion":	14 de julio N°504 local 4, Freire	,"Region":	ARAUCANIA	,"Comuna":	FREIRE	,"Latitude":	-38,958144	,"Longitude":	-72,627374	,"Stock":	"NO"}
{"Nombre":	farmaideal	"Direccion":	San Isidro 255	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4468939	,"Longitude":	-70,6440238	,"Stock":	"SI"}
{"Nombre":	FARMACIA SAN LUIS	"Direccion":	MANUEL RODRIGUEZ Nº 1123, LOCAL 2	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"NO"}
{"Nombre":	FARMACIA ATALANTA	"Direccion":	Arturo Prat 289	,"Region":	VALPARAISO	,"Comuna":	LIMACHE	,"Latitude":	-32,985661	,"Longitude":	-71,2775258	,"Stock":	"NO"}
{"Nombre":	FARMATODO	"Direccion":	Manuel Antonio Matta 1839	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,650793	,"Longitude":	-70,3974859	,"Stock":	"SI"}
{"Nombre":	LAUTARO	"Direccion":	Avenida Cardenal Carlos Oviedo Cavada 5328	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6237635	,"Longitude":	-70,3846727	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Pedro Montt 1842 local A106 - A107	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0470123	,"Longitude":	-71,6179359	,"Stock":	"SI"}
{"Nombre":	FARMACIAS MAICAO	"Direccion":	Pedro Montt 2629	,"Region":	VALPARAISO	,"Comuna":	VALPARAISO	,"Latitude":	-33,0471864	,"Longitude":	-71,6087072	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	Avenida Irarrázaval 2771	,"Region":	METROPOLITANA	,"Comuna":	ÑUÑOA	,"Latitude":	-33,4545378	,"Longitude":	-70,6023964	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Avenida los Carrera Poniente 301	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8299828	,"Longitude":	-73,0637845	,"Stock":	"NO"}
{"Nombre":	FARMACIAS VITALI	"Direccion":	MANUEL MONTT Nº 502 LOCAL 1	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7379117	,"Longitude":	-72,5941472	,"Stock":	"NO"}
{"Nombre":	FARMACIA PORTALFARMA	"Direccion":	CLARO SOLAR Nº 636	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7391116	,"Longitude":	-72,5929876	,"Stock":	"SI"}
{"Nombre":	FARMAPLUS	"Direccion":	Linderos Poniente 4703	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4278234	,"Longitude":	-70,2907705	,"Stock":	"SI"}
{"Nombre":	Del Doctor Simi	"Direccion":	Avenida Lo Espejo 943	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5221003	,"Longitude":	-70,7329653	,"Stock":	"SI"}
{"Nombre":	"AHUMADA"	"Direccion":	Avenida Ramón Picarte 422	,"Region":	LOS RIOS	,"Comuna":	VALDIVIA	,"Latitude":	-39,81436948	,"Longitude":	-73,24378098	,"Stock":	"NO"}
{"Nombre":	FARMACIA LOS ANDES	"Direccion":	MANUEL MONTT Nº 462 LOCAL 02	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Edmundo Eluchans 1850	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-32,9582841	,"Longitude":	-71,5439941	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Agua Santa 41	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0252267	,"Longitude":	-71,5629206	,"Stock":	"NO"}
{"Nombre":	FARMACIA OCCA HOSPITAL	"Direccion":	Álvarez 1136 LOCAL 2	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0278688	,"Longitude":	-71,5465661	,"Stock":	"SI"}
{"Nombre":	PROFARMA	"Direccion":	CALLE MERCED N° 552	,"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,750224	,"Longitude":	-70,7293455	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Pudeto 254 LOCAL C	,"Region":	LOS LAGOS	,"Comuna":	ANCUD	,"Latitude":	-41,86858717	,"Longitude":	-73,82712101	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Bernardo O'Higgins 605	,"Region":	AYSEN	,"Comuna":	AYSEN	,"Latitude":	-45,4052907	,"Longitude":	-72,6977939	,"Stock":	"NO"}
{"Nombre":	FARMAS	"Direccion":	Calle la Balada 144, local 02-A	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,5532801	,"Longitude":	-70,7975749	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	BALMACEDA 486	,"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,7328171	,"Longitude":	-70,7391743	,"Stock":	"NO"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	BARROS ARANA Nº 176, LOCAL 3	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"NO"}
{"Nombre":	MB	"Direccion":	avenida Lo Martínez 1389	,"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,564028	,"Longitude":	-70,675615	,"Stock":	"SI"}
{"Nombre":	Delgado	"Direccion":	avenida GABRIELA ORIENTE 01987	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,620226	,"Longitude":	-70,591315	,"Stock":	"SI"}
{"Nombre":	Maicao	"Direccion":	Ambrosio O’Higgins 1998	,"Region":	METROPOLITANA	,"Comuna":	CURACAVI	,"Latitude":	-33,398397	,"Longitude":	-71,127384	,"Stock":	"SI"}
{"Nombre":	Municipal de Pudahuel	"Direccion":	San Pablo 8444	,"Region":	METROPOLITANA	,"Comuna":	PUDAHUEL	,"Latitude":	-33,4456719	,"Longitude":	-70,7439737	,"Stock":	"NO"}
{"Nombre":	Farmacia móvil itinerante	"Direccion":	Buin 300	,"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,1413141	,"Longitude":	-71,8199852	,"Stock":	"SI"}
{"Nombre":	FARMACIA REDFARMA	"Direccion":	Avenida Chacabuco 70	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8341937	,"Longitude":	-73,0548242	,"Stock":	"NO"}
{"Nombre":	DB FARMA	"Direccion":	Mapocho Sur 7432, local 2	,"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,423719	,"Longitude":	-70,7418348	,"Stock":	"NO"}
{"Nombre":	FARMACENTER	"Direccion":	Avenida Vicuña Mackenna 6650, local 2, Edificio A	,"Region":	METROPOLITANA	,"Comuna":	LA FLORIDA	,"Latitude":	-33,5162676	,"Longitude":	-70,6057656	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMAMARKET	"Direccion":	Inmaculada Concepción 490	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,6148253	,"Longitude":	-71,6084492	,"Stock":	"SI"}
{"Nombre":	FARMACIA FARMANOVA	"Direccion":	Barros Luco 2058	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5985896	,"Longitude":	-71,6131583	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR. SIMI	"Direccion":	Barros Luco 1802	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,595994	,"Longitude":	-71,6129613	,"Stock":	"NO"}
{"Nombre":	FARMACIA "SALCOBRAND"	"Direccion":	Barros Arana 494	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,82753	,"Longitude":	-73,0525509	,"Stock":	"SI"}
{"Nombre":	FARMACIA ACONCAGUA	"Direccion":	CALLE A. PRAT N°591	,"Region":	VALPARAISO	,"Comuna":	SAN FELIPE	,"Latitude":	-32,74924203	,"Longitude":	-70,72819294	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Camino San José de Maipo 06195	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,6258802	,"Longitude":	-70,3509973	,"Stock":	"NO"}
{"Nombre":	M & C	"Direccion":	Avenida Domingo Santa María 1846	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4156911	,"Longitude":	-70,6652111	,"Stock":	"SI"}
{"Nombre":	San Lazaro	"Direccion":	Sargento Menadier 848	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,6178054	,"Longitude":	-70,5838721	,"Stock":	"SI"}
{"Nombre":	Mundo Farmacia	"Direccion":	Independencia 219	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,6006676	,"Longitude":	-70,5802933	,"Stock":	"SI"}
{"Nombre":	Farmacia Móvil "CRUZ VERDE"	"Direccion":	Tarapaca	,"Region":	TARAPACA	,"Comuna":	IQUIQUE	,"Latitude":	-20,2307033	,"Longitude":	-70,1356692	,"Stock":	"NO"}
{"Nombre":	FARMACIA RIVERA	"Direccion":	Baquedano 210	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8116249	,"Longitude":	-73,032982	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Lautaro 253	,"Region":	BIOBIO	,"Comuna":	SANTA JUANA	,"Latitude":	-37,17475387	,"Longitude":	-72,93929837	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	Avenida Andrés Bello 2447	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4178145	,"Longitude":	-70,6077984	,"Stock":	"NO"}
{"Nombre":	FARMACIA INDEPENDENCIA	"Direccion":	CALLE 12 SUR, ESQUINA 3 & MEDIA PTE. POBLACION INDEPENDENCIA 550	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43469235	,"Longitude":	-71,67144011	,"Stock":	"SI"}
{"Nombre":	FARMACIA REAL	"Direccion":	LOTE 1, CALLE PADRE ALFONSO , SECTOR VILLA PRAT	,"Region":	MAULE	,"Comuna":	SAGRADA FAMILIA	,"Latitude":	-35,09522137	,"Longitude":	-71,61458218	,"Stock":	"SI"}
{"Nombre":	farmacia omega	"Direccion":	CAMILO HENRIQUEZ, 627, LOCAL 1154	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98136094	,"Longitude":	-71,24313852	,"Stock":	"SI"}
{"Nombre":	NUTRIVIDA	"Direccion":	Ursicinio Opazo 39, Cumpeo	,"Region":	MAULE	,"Comuna":	RIO CLARO	,"Latitude":	-35,28348249	,"Longitude":	-71,28351733	,"Stock":	"NO"}
{"Nombre":	FARMACIA CUMPEO	"Direccion":	URCISINIO OPAZO, 24, RIO CLARO	,"Region":	MAULE	,"Comuna":	RIO CLARO	,"Latitude":	-35,28288651	,"Longitude":	-71,25995942	,"Stock":	"SI"}
{"Nombre":	FARMACIA ARRAYAN	"Direccion":	15 y media norte con avenida del agua 3898 valles del country	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,42135592	,"Longitude":	-71,61419104	,"Stock":	"NO"}
{"Nombre":	ZENFARMA	"Direccion":	Dieciocho de Septiembre 246 B	,"Region":	ÑUBLE	,"Comuna":	CHILLAN	,"Latitude":	-36,6028243	,"Longitude":	-72,1028527	,"Stock":	"NO"}
{"Nombre":	SUPERFARMA	"Direccion":	CENTENARIO, 48-S, YERBAS BUENAS	,"Region":	MAULE	,"Comuna":	YERBAS BUENAS	,"Latitude":	-35,75301781	,"Longitude":	-71,58797069	,"Stock":	"SI"}
{"Nombre":	FARMACIA BUENOS AIRES Nº2	"Direccion":	Anibal Pinto, 815-A	,"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,14092566	,"Longitude":	-71,8209584	,"Stock":	"SI"}
{"Nombre":	DR SIMI	"Direccion":	Avenida Leon Bustos  1319	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84042346	,"Longitude":	-71,62330297	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI F0387	"Direccion":	LEON BUSTOS, 1319 LOCAL 2	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,84020167	,"Longitude":	-71,62332979	,"Stock":	"NO"}
{"Nombre":	FARMACIA EL CARMEN	"Direccion":	ERRAZURIZ, 933-B	,"Region":	MAULE	,"Comuna":	RETIRO	,"Latitude":	-36,04961072	,"Longitude":	-71,7591763	,"Stock":	"SI"}
{"Nombre":	FARMACIA AMER Nª1	"Direccion":	M. RODRIGUEZ, 916, PASADO CAMILO HENRIQUEZ	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98136094	,"Longitude":	-71,24305269	,"Stock":	"NO"}
{"Nombre":	FARMACIA ASISTENCIA PROGRAMA HHHA	"Direccion":	Manuel Montt 115	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7357233	,"Longitude":	-72,5989056	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Barros Arana 890	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8255519	,"Longitude":	-73,0474801	,"Stock":	"SI"}
{"Nombre":	BATUCO	"Direccion":	Avenida España 1530	,"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,240791	,"Longitude":	-70,8166639	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Claudio Vicuña 868	,"Region":	VALPARAISO	,"Comuna":	QUILPUE	,"Latitude":	-33,0468722	,"Longitude":	-71,4421992	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALADAPHARMA	"Direccion":	Avenida Las Salinas 280 LOCAL 1 Y 2	,"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,4929449	,"Longitude":	-71,6229804	,"Stock":	"NO"}
{"Nombre":	FARMACIA FARMACHILE	"Direccion":	Avenida Libertad 101Local 4	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,021242	,"Longitude":	-71,551551	,"Stock":	"SI"}
{"Nombre":	FARMACIA CAE Hospital Claudio Vicuña de San Antonio	"Direccion":	Carmen Guerrero 945	,"Region":	VALPARAISO	,"Comuna":	SAN ANTONIO	,"Latitude":	-33,5889567	,"Longitude":	-71,6086499	,"Stock":	"NO"}
{"Nombre":	FARMACIA SOLIDARIA	"Direccion":	EUGENIO MARZAL N° 121 LOCAL 7	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9828362	,"Longitude":	-71,33272646	,"Stock":	"NO"}
{"Nombre":	FARMACIAS NIBITHA	"Direccion":	Avenida Isidoro Dubournais 4104	,"Region":	VALPARAISO	,"Comuna":	EL QUISCO	,"Latitude":	-33,4385922	,"Longitude":	-71,6840791	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Arturo Prat 335	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8317568	,"Longitude":	-73,0578337	,"Stock":	"SI"}
{"Nombre":	Hospital Clínico Red de Salud UC Christus	"Direccion":	Marcoleta 367	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,442306	,"Longitude":	-70,6405271	,"Stock":	"SI"}
{"Nombre":	Renacer	"Direccion":	Avenida Portugal 116, local4	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4433832	,"Longitude":	-70,6374829	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Av. Ercilla 190, local 1017, Los Angeles	,"Region":	BIOBIO	,"Comuna":	LOS ANGELES	,"Latitude":	-37,47214666	,"Longitude":	-72,35556027	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Quechereguas 2025	,"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,1156465	,"Longitude":	-71,2817175	,"Stock":	"NO"}
{"Nombre":	FARMACIA DR SIMI	"Direccion":	Calle 1 Norte 1401	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4265933	,"Longitude":	-71,6570716	,"Stock":	"NO"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Arturo Prat 1035	,"Region":	ATACAMA	,"Comuna":	VALLENAR	,"Latitude":	-28,5763994	,"Longitude":	-70,7588368	,"Stock":	"SI"}
{"Nombre":	FARMACIA VENFARMA	"Direccion":	Los Loros 1498	,"Region":	ATACAMA	,"Comuna":	COPIAPO	,"Latitude":	-27,3648999	,"Longitude":	-70,314702	,"Stock":	"SI"}
{"Nombre":	farmacia SYG LOCAL 2	"Direccion":	Avenida Grecia 2510	,"Region":	ANTOFAGASTA	,"Comuna":	CALAMA	,"Latitude":	-22,4559496	,"Longitude":	-68,9338633	,"Stock":	"SI"}
{"Nombre":	Farmacia Sufarma	"Direccion":	DOMINGO ORTIZ DE ROZAS Nº 754	,"Region":	VALPARAISO	,"Comuna":	CABILDO	,"Latitude":	-32,4258064	,"Longitude":	-71,0661621	,"Stock":	"NO"}
{"Nombre":	RED FARMA	"Direccion":	Avenida Dos Sur, 1496	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4293821	,"Longitude":	-71,6557588	,"Stock":	"SI"}
{"Nombre":	Farmacia Manzano	"Direccion":	Villa El Pilar	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,968931	,"Longitude":	-71,2306455	,"Stock":	"NO"}
{"Nombre":	FARMACENTRO	"Direccion":	Avenida Quilvo 207	,"Region":	MAULE	,"Comuna":	ROMERAL	,"Latitude":	-34,9592382	,"Longitude":	-71,1259985	,"Stock":	"NO"}
{"Nombre":	FARMACIA VIVO SALUD	"Direccion":	José Manuel Balmaceda 240	,"Region":	MAULE	,"Comuna":	MAULE	,"Latitude":	-35,5238282	,"Longitude":	-71,6900348	,"Stock":	"SI"}
{"Nombre":	Todofarma	"Direccion":	San Francisco 602, local 2	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,449288	,"Longitude":	-70,669287	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAULE	"Direccion":	Balmaceda 450	,"Region":	MAULE	,"Comuna":	SAN JAVIER	,"Latitude":	-35,6015873	,"Longitude":	-71,7072641	,"Stock":	"SI"}
{"Nombre":	ECO FARMACIAS	"Direccion":	Avenida Ricardo Lyon 33, local 2	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4221624	,"Longitude":	-70,6099258	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Nueva Providencia 1885, local 102	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4257487	,"Longitude":	-70,6138105	,"Stock":	"SI"}
{"Nombre":	FARMACIA FRACCION	"Direccion":	Alcerreca 385	,"Region":	MAULE	,"Comuna":	EMPEDRADO	,"Latitude":	-35,589487	,"Longitude":	-72,2789046	,"Stock":	"NO"}
{"Nombre":	Farmacia Don Fernando N° 2	"Direccion":	1 Oriente 406	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,44952839	,"Longitude":	-71,67083358	,"Stock":	"NO"}
{"Nombre":	Farmacia Contigo Nº 4	"Direccion":	Calle 1 Sur 1741	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4281632	,"Longitude":	-71,6514138	,"Stock":	"SI"}
{"Nombre":	Farmacia Farmasol	"Direccion":	Avenida Huamachuco 801	,"Region":	MAULE	,"Comuna":	SAN CLEMENTE	,"Latitude":	-35,53842984	,"Longitude":	-71,48768983	,"Stock":	"SI"}
{"Nombre":	Farmacia la Esperanza	"Direccion":	Diecinueve Sur 162	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,43831601	,"Longitude":	-71,68460303	,"Stock":	"SI"}
{"Nombre":	Farmacia Socorro	"Direccion":	Camino Las Rastras 1515	,"Region":	MAULE	,"Comuna":	TALCA	,"Latitude":	-35,4341483	,"Longitude":	-71,6094612	,"Stock":	"NO"}
{"Nombre":	Farmacia 2 Sur	"Direccion":	Avenida Dos Sur 390	,"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,1477624	,"Longitude":	-71,82994276	,"Stock":	"SI"}
{"Nombre":	Farmacia Baratita	"Direccion":	Huaiquillo 300	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,99515242	,"Longitude":	-71,24244946	,"Stock":	"NO"}
{"Nombre":	Farmacia Dr. SIMI CL0267	"Direccion":	Esperanza, 376, LOCAL 1 Y 2	,"Region":	MAULE	,"Comuna":	SAGRADA FAMILIA	,"Latitude":	-35,00039342	,"Longitude":	-71,38268737	,"Stock":	"NO"}
{"Nombre":	SUPERFARMA	"Direccion":	Avenida Centenario	,"Region":	MAULE	,"Comuna":	YERBAS BUENAS	,"Latitude":	-35,75006218	,"Longitude":	-71,58382929	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALBORNOZ	"Direccion":	Aveneda Presidente Ibáñez	,"Region":	MAULE	,"Comuna":	LINARES	,"Latitude":	-35,83778165	,"Longitude":	-71,60530418	,"Stock":	"SI"}
{"Nombre":	DR. SIMI F-0229	"Direccion":	MERCED, 255, LOCAL 101	,"Region":	MAULE	,"Comuna":	CURICO	,"Latitude":	-34,98473067	,"Longitude":	-71,23818376	,"Stock":	"SI"}
{"Nombre":	FARMACIA BUENOS AIRES Nº2	"Direccion":	Avenida Anibal Pinto	,"Region":	MAULE	,"Comuna":	PARRAL	,"Latitude":	-36,14085474	,"Longitude":	-71,82073989	,"Stock":	"NO"}
{"Nombre":	FARMACIA, EL CARMEN	"Direccion":	Errázuriz	,"Region":	MAULE	,"Comuna":	RETIRO	,"Latitude":	-36,04958458	,"Longitude":	-71,75906618	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi	"Direccion":	Luis Thayer Ojeda 098, local 103	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,431494	,"Longitude":	-70,611057	,"Stock":	"NO"}
{"Nombre":	Carmencita	"Direccion":	Avenida Parque del Este 4400, local 108, Ciudad del Este	,"Region":	METROPOLITANA	,"Comuna":	PUENTE ALTO	,"Latitude":	-33,620226	,"Longitude":	-70,591315	,"Stock":	"NO"}
{"Nombre":	FARMACIA DRA. ROCA	"Direccion":	Poniente 1952 molina	,"Region":	MAULE	,"Comuna":	MOLINA	,"Latitude":	-35,11401724	,"Longitude":	-71,28363841	,"Stock":	"SI"}
{"Nombre":	FARMACIA VALENZO	"Direccion":	LAS ENCINAS Nº 2690, LOCAL 3 Y 4	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"SI"}
{"Nombre":	MOLY FARMA	"Direccion":	Avenida Esmeralda 2032	,"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,6699124	,"Longitude":	-70,9371331	,"Stock":	"SI"}
{"Nombre":	La Roca	"Direccion":	Avenida Portugal 740	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4521138	,"Longitude":	-70,6342254	,"Stock":	"NO"}
{"Nombre":	Knop	"Direccion":	Evaristo Lillo 29	,"Region":	METROPOLITANA	,"Comuna":	LAS CONDES	,"Latitude":	-33,4135882	,"Longitude":	-70,5818707	,"Stock":	"SI"}
{"Nombre":	Benito	"Direccion":	Avenida José Joaquín Pérez 8013	,"Region":	METROPOLITANA	,"Comuna":	CERRO NAVIA	,"Latitude":	-33,4296656	,"Longitude":	-70,7432917	,"Stock":	"NO"}
{"Nombre":	Generica	"Direccion":	Avenida Bernardo O'Higgins 483	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3498366	,"Longitude":	-70,7292752	,"Stock":	"NO"}
{"Nombre":	HERRERA	"Direccion":	Avenida Manuel Antonio Matta 673	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,4579726	,"Longitude":	-70,6426907	,"Stock":	"SI"}
{"Nombre":	FARMACIA LAS SALINAS	"Direccion":	Almirante Neff 527	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,7454229	,"Longitude":	-73,0887047	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Los Mañíos 4455	,"Region":	BIOBIO	,"Comuna":	SAN PEDRO DE LA PAZ	,"Latitude":	-36,8582042	,"Longitude":	-73,1331396	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Pérez Gacitúa 279	,"Region":	BIOBIO	,"Comuna":	TALCAHUANO	,"Latitude":	-36,72766	,"Longitude":	-73,10826	,"Stock":	"NO"}
{"Nombre":	Farmacia Litoral	"Direccion":	Avenida Carlos Alessandri 2091 Local 1	,"Region":	VALPARAISO	,"Comuna":	ALGARROBO	,"Latitude":	-33,361333	,"Longitude":	-71,6686504	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	Avenida Carlos Ibáñez Del Campo 340	,"Region":	VALPARAISO	,"Comuna":	VIÑA DEL MAR	,"Latitude":	-33,0006083	,"Longitude":	-71,5094622	,"Stock":	"NO"}
{"Nombre":	FARMACIA CCP CONCEPCIÓN	"Direccion":	Camino a Penco 450	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8049816	,"Longitude":	-73,0239347	,"Stock":	"NO"}
{"Nombre":	FARMACIA METAFARMA	"Direccion":	AVDA MATTA Nº 1202, LOCAL 2	,"Region":	ARAUCANIA	,"Comuna":	LAUTARO	,"Latitude":	-38,508975	,"Longitude":	-72,453507	,"Stock":	"SI"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Calle Jose Manuel Balmaceda 486	,"Region":	METROPOLITANA	,"Comuna":	BUIN	,"Latitude":	-33,7327773	,"Longitude":	-70,742412	,"Stock":	"SI"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	MIRAFLORES Nº 1502, LOCAL 5	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,737271	,"Longitude":	-72,590016	,"Stock":	"SI"}
{"Nombre":	FARMACIAS "CRUZ VERDE"	"Direccion":	Lautaro	,"Region":	ARAUCANIA	,"Comuna":	ANGOL	,"Latitude":	-37,7984592	,"Longitude":	-72,7102356	,"Stock":	"NO"}
{"Nombre":	Móvil Itinerante Jaime Cruz Calera de Tango	"Direccion":	Avenida Calera de Tango S/N paradero 7	,"Region":	METROPOLITANA	,"Comuna":	CALERA DE TANGO	,"Latitude":	-33,6256744	,"Longitude":	-70,7804638	,"Stock":	"SI"}
{"Nombre":	FARMACIA DEL DR SALUD	"Direccion":	Avenida Javiera Carrera	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7364247	,"Longitude":	-72,6287699	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Larraín 5862	,"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,4524377	,"Longitude":	-70,5694704	,"Stock":	"NO"}
{"Nombre":	Teran	"Direccion":	Avenida Los Pajaritos 4262	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,4834657	,"Longitude":	-70,7468571	,"Stock":	"SI"}
{"Nombre":	FARMACIA UNIVERSAL	"Direccion":	Avenida Pedro Aguirre Cerda 9662	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,5757291	,"Longitude":	-70,3907259	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	ALMIRANTE JUAN JOSE LATORRE 812	,"Region":	ANTOFAGASTA	,"Comuna":	MEJILLONES	,"Latitude":	-23,0985013	,"Longitude":	-70,4455041	,"Stock":	"SI"}
{"Nombre":	Farmacia Farmas	"Direccion":	Avenida Blanca Estela 1236 Local 1	,"Region":	VALPARAISO	,"Comuna":	CONCON	,"Latitude":	-32,9424887	,"Longitude":	-71,5340886	,"Stock":	"NO"}
{"Nombre":	LA DOCTORA	"Direccion":	Malloquito 1969	,"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6041526	,"Longitude":	-70,8748203	,"Stock":	"SI"}
{"Nombre":	FARMACIA ALVAREDIA	"Direccion":	Eduardo Orchard 1471	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,661996	,"Longitude":	-70,3992336	,"Stock":	"NO"}
{"Nombre":	"SALCOBRAND"	"Direccion":	21 de Mayo 4540, locales A, B, C y D	,"Region":	METROPOLITANA	,"Comuna":	PEÑAFLOR	,"Latitude":	-33,6092808	,"Longitude":	-70,9005981	,"Stock":	"NO"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida las Torres 450, LOCAL 11. Lo compino	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3828935	,"Longitude":	-70,7301354	,"Stock":	"SI"}
{"Nombre":	HOSPITAL METROPOLITANO DE SANTIAGO	"Direccion":	Holanda 060	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,41875733	,"Longitude":	-70,60462268	,"Stock":	"SI"}
{"Nombre":	FARMACIA PICHILEMU	"Direccion":	Avenida Comercio 2045	,"Region":	OHIGGINS	,"Comuna":	PICHILEMU	,"Latitude":	-34,4042046	,"Longitude":	-72,0253001	,"Stock":	"SI"}
{"Nombre":	MI FARMACIA	"Direccion":	Tucapel 2119	,"Region":	ARICA	,"Comuna":	ARICA	,"Latitude":	-18,4787269	,"Longitude":	-70,2941609	,"Stock":	"NO"}
{"Nombre":	DR. SIMI	"Direccion":	Avenida Presidente Salvador Allende	,"Region":	COQUIMBO	,"Comuna":	ILLAPEL	,"Latitude":	-31,64239382	,"Longitude":	-71,17945484	,"Stock":	"SI"}
{"Nombre":	SAN GABRIEL	"Direccion":	Arturo Prat 298, LOCAL 3	,"Region":	METROPOLITANA	,"Comuna":	SAN BERNARDO	,"Latitude":	-33,5935	,"Longitude":	-70,7009999	,"Stock":	"NO"}
{"Nombre":	ECO FARMACIAS	"Direccion":	Avenida Bernardo O'Higgins 1116	,"Region":	METROPOLITANA	,"Comuna":	TALAGANTE	,"Latitude":	-33,66415818	,"Longitude":	-70,92934539	,"Stock":	"NO"}
{"Nombre":	Sanafarm	"Direccion":	La Cañada 321	,"Region":	METROPOLITANA	,"Comuna":	LAMPA	,"Latitude":	-33,3265621	,"Longitude":	-70,7668549	,"Stock":	"SI"}
{"Nombre":	FARMACIA DR. SIMI	"Direccion":	J. J. Pérez 395	,"Region":	VALPARAISO	,"Comuna":	LA CALERA	,"Latitude":	-32,7862093	,"Longitude":	-71,1898015	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL LAS CRUCES	"Direccion":	Avenida Las Cruces Norte 401	,"Region":	VALPARAISO	,"Comuna":	EL TABO	,"Latitude":	-33,4812083	,"Longitude":	-71,6069243	,"Stock":	"SI"}
{"Nombre":	FARMACIA CENTRAL Servicio de atención médica de urgencia (SAMU)	"Direccion":	O'Higgins 2200	,"Region":	VALPARAISO	,"Comuna":	QUILLOTA	,"Latitude":	-32,901334	,"Longitude":	-71,2518096	,"Stock":	"NO"}
{"Nombre":	Nueva Era	"Direccion":	Gran Avenida José Miguel Carrera 5801	,"Region":	METROPOLITANA	,"Comuna":	SAN MIGUEL	,"Latitude":	-33,5073432	,"Longitude":	-70,6562774	,"Stock":	"SI"}
{"Nombre":	Del Carmen	"Direccion":	Camino A Rinconada 2301	,"Region":	METROPOLITANA	,"Comuna":	MAIPU	,"Latitude":	-33,505365	,"Longitude":	-70,7869526	,"Stock":	"NO"}
{"Nombre":	FARMACIA CCP BIOBÍO	"Direccion":	Camino a Penco 450	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8049816	,"Longitude":	-73,0239347	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Avenida Independencia 801, LOCAL 4	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4218963	,"Longitude":	-70,6552783	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	MANUEL ANTONIO MATTA 2405	,"Region":	ANTOFAGASTA	,"Comuna":	ANTOFAGASTA	,"Latitude":	-23,6509279	,"Longitude":	-70,3975022	,"Stock":	"SI"}
{"Nombre":	POSTO VERDE	"Direccion":	Avenida Manuel Rodríguez 780	,"Region":	OHIGGINS	,"Comuna":	SAN FERNANDO	,"Latitude":	-34,5876592	,"Longitude":	-70,9870448	,"Stock":	"SI"}
{"Nombre":	FARMACIA NOGAL	"Direccion":	CARRETERA EL COBRE KM 4 N°2521	,"Region":	OHIGGINS	,"Comuna":	MACHALI	,"Latitude":	-34,179452	,"Longitude":	-70,6565151	,"Stock":	"NO"}
{"Nombre":	FARMACIA SAN FRANCISCO	"Direccion":	HERMANOS CARRERA N°714	,"Region":	OHIGGINS	,"Comuna":	LITUECHE	,"Latitude":	-34,117272	,"Longitude":	-71,725176	,"Stock":	"SI"}
{"Nombre":	Del Dr. Simi	"Direccion":	Avenida Pedro de Valdivia 2451	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4452245	,"Longitude":	-70,6064489	,"Stock":	"NO"}
{"Nombre":	Tantauco	"Direccion":	General Manuel Tovarias 56	,"Region":	METROPOLITANA	,"Comuna":	EL BOSQUE	,"Latitude":	-33,5554679	,"Longitude":	-70,6753296	,"Stock":	"NO"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Calle Mariquina 1200	,"Region":	LOS RIOS	,"Comuna":	MARIQUINA	,"Latitude":	-39,5388364	,"Longitude":	-72,9618647	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Avenida Manquehue 1280	,"Region":	METROPOLITANA	,"Comuna":	VITACURA	,"Latitude":	-33,3956327	,"Longitude":	-70,5720102	,"Stock":	"SI"}
{"Nombre":	FARMACIA MUNICIPAL	"Direccion":	S-264	,"Region":	ARAUCANIA	,"Comuna":	TEMUCO	,"Latitude":	-38,7570362	,"Longitude":	-72,7518447	,"Stock":	"SI"}
{"Nombre":	Del Dr Simi	"Direccion":	Avenida Príncipe de Gales 6750	,"Region":	METROPOLITANA	,"Comuna":	LA REINA	,"Latitude":	-33,4385153	,"Longitude":	-70,5620735	,"Stock":	"NO"}
{"Nombre":	Del Dr Simi	"Direccion":	Avenida Santa Isabel	,"Region":	METROPOLITANA	,"Comuna":	PROVIDENCIA	,"Latitude":	-33,4462578	,"Longitude":	-70,6252768	,"Stock":	"SI"}
{"Nombre":	CITY FARMA	"Direccion":	avda. alessandri 147 local 2	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9590009	,"Longitude":	-71,3389183	,"Stock":	"NO"}
{"Nombre":	MAICAO	"Direccion":	José Santiago Aldunate 1237	,"Region":	COQUIMBO	,"Comuna":	COQUIMBO	,"Latitude":	-29,9550702	,"Longitude":	-71,3388495	,"Stock":	"NO"}
{"Nombre":	Dr Simi	"Direccion":	Avenida Independencia 801	,"Region":	METROPOLITANA	,"Comuna":	INDEPENDENCIA	,"Latitude":	-33,4218963	,"Longitude":	-70,6552783	,"Stock":	"SI"}
{"Nombre":	Dr Simi	"Direccion":	Avenida las Torres 450	,"Region":	METROPOLITANA	,"Comuna":	QUILICURA	,"Latitude":	-33,3828935	,"Longitude":	-70,7301354	,"Stock":	"SI"}
{"Nombre":	"CRUZ VERDE"	"Direccion":	Alberto Solari 1400 local BN1016-BN1020-BN1024-BN1028-BN1040-BN1036	,"Region":	COQUIMBO	,"Comuna":	LA SERENA	,"Latitude":	-29,9121409	,"Longitude":	-71,2571362	,"Stock":	"SI"}
{"Nombre":	FARMACIA MAICAO	"Direccion":	Barros Arana 541	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8270242	,"Longitude":	-73,0520047	,"Stock":	"NO"}
{"Nombre":	FARMACIA CHBS	"Direccion":	San Martín 661	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,8285097	,"Longitude":	-73,0492271	,"Stock":	"SI"}
{"Nombre":	FARMACIA BIOVIDA	"Direccion":	Lincoyán 370	,"Region":	BIOBIO	,"Comuna":	CONCEPCION	,"Latitude":	-36,829155	,"Longitude":	-73,0526337	,"Stock":	"NO"}
{"Nombre":	DEL DR. SIMI	"Direccion":	Avenida San Pablo 2303, LOCAL 1	,"Region":	METROPOLITANA	,"Comuna":	SANTIAGO	,"Latitude":	-33,434814	,"Longitude":	-70,6691144	,"Stock":	"NO"}
{"Nombre":	FARMACIA "CRUZ VERDE"	"Direccion":	Ruta A 16 3550	,"Region":	TARAPACA	,"Comuna":	ALTO HOSPICIO	,"Latitude":	-20,2585161	,"Longitude":	-70,0726418	,"Stock":	"SI"								
											
        }*/
        
