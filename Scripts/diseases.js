const select = document.getElementById('select');

function ShowRightMessage(indice){
  switch(indice){
  case 1:
    document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 1 mes mas</p>`;
     break;
   case 2:
     document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 6 meses mas</p>`;
     break;
   }
   document.getElementById("Recordarme").innerHTML = `<div><button type="button">Recordarme</button></div>`;
  };

select.addEventListener('change', function handleChange(event) {
  if (event.selectedIndex != 0){
    document.getElementById("SelectedVaccine").innerHTML = `<label> has seleccionado la vacuna = ${event.target.value}</label>`;
    ShowRightMessage(select.selectedIndex);
  }
});