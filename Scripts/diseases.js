const select = document.getElementById('select');

function showRightMessage(indice){
  switch(indice){
  case 0:
    document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 1 mes mas</p>`;
     break;
   case 1:
     document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 6 meses mas</p>`;
     break;
   }
  };

select.addEventListener('change', function handleChange(event) {
  document.getElementById("SelectedVaccine").innerHTML = `<label> has seleccionado la vacuna = ${event.target.value}</label>`;
  ShowRightMessage(select.selectedIndex);
});