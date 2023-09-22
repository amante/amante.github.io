const select = document.getElementById('select');

function ShowRightMessage(indice){
  switch(indice){
    case 0:
      document.getElementById("SelectedVaccine").style.display = "none";
      document.getElementById("Messages").style.display = "none";
      document.getElementById("Recordarme").style.display = "none"; 
  case 1:
    document.getElementById("SelectedVaccine").style.display = "block";
    document.getElementById("Messages").style.display = "block";
    document.getElementById("Recordarme").style.display = "block";
    document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, deberás agendarte para 1 mes mas</p>`;
    document.getElementById("Recordarme").innerHTML = `<button type="button">Recordarme</button>`; 
    break;
   case 2:
    document.getElementById("SelectedVaccine").style.display = "block";
    document.getElementById("Messages").style.display = "block";
    document.getElementById("Recordarme").style.display = "block";
     document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, deberás agendarte para 4 meses mas</p>`;
     document.getElementById("Recordarme").innerHTML = `<button type="button">Recordarme</button>`;
     break;
   }
  };

select.addEventListener('change', function handleChange(event) {
  if (event.target.selectedIndex !== 0){
    console.log("Event target index " + event.target.selectedIndex);
    console.log("Select Index " +select.selectedIndex);
    document.getElementById("SelectedVaccine").innerHTML = `<label> has seleccionado la vacuna = ${select.target.innerText}</label>`;
    ShowRightMessage(select.selectedIndex);
  }
});