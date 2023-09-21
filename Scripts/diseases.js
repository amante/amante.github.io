let divselectedoptiontext;
let selectElement;

  function changeLanguage(language) {
   var element = document.getElementById("vaxselection");
   element.value = language;
   element.innerHTML = language;
  }

//selectElement = document.querySelector('#selectvaxname');
//divselectedoptiontext = selectElement.value;

//document.getElementById("vaxselection").innerHTML = `<label for="valueselected">"Seleccionaste la vacuna: "${divselectedoptiontext}</label>`;

