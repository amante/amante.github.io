let divselectedoptiontext;
let selectElement;

document.getElementById("dropdown").innerHTML = `
  <label for="VaxName">Escoge tu Vacuna</label> 
    <select id="selectvaxname" class="dropdown-content"> 
        <option value="HepatitisB">Hepatitis B</option> 
        <option value="Hexavalente1">Hexavalente Dosis 1</option>
        <option value="Hexavalente2">Hexavalente Dosis 2</option>
        <option value="Hexavalente3">Hexavalente Dosis 3</option>
        <option value="Hexavalente4">Hexavalente Dosis 4</option>
        <option value="Neumococica1">Neumocócica Conjugada Dosis 1</option>
        <option value="Neumococica2">Neumocócica Conjugada Dosis 2</option>
        <option value="Neumococica3">Neumocócica Conjugada Dosis 3</option>
        <option value="Rotavirus1">Rotavirus Dosis 1</option>
        <option value="Rotavirus2">Rotavirus Dosis 2</option>
        <option value="Rotavirus3">Rotavirus Dosis 3</option>
        <option value="Meningoco1">Meningocócica conjugada ACWY Dosis 1</option>
        <option value="Meningoco2">Meningocócica conjugada ACWY Dosis 1</option>
        <option value="Meningoco3">Meningocócica conjugada ACWY Dosis 1</option>
        <option value="Meningob1">Meningococo B Dosis 1</option>
        <option value="Meningob2">Meningococo B Dosis 2</option>
        <option value="Meningob3">Meningococo B Dosis 3</option>
        <option value="Virica1">Tres Virica Dosis 1</option>
        <option value="Virica2">Tres Virica Dosis 2</option>
    </select>
`;


selectElement = document.querySelector('#selectvaxname');
divselectedoptiontext = selectElement.value;

document.getElementById("vaxselection").innerHTML = `<label for="valueselected">Hola Mundo</label>`;