const select = document.getElementById('select');

function ShowRightMessage(indice){
  switch(indice){
  case 1:
    document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 1 mes mas</p>`;
    document.getElementById("Recordarme").innerHTML = `<form method="POST" action="AgendateVPH.html"><input type="submit"/>Recordarme</form>`; 
    break;
   case 2:
     document.getElementById("Messages").innerHTML = `<p>¿Quieres que te recordemos tu proxima Vacuna?, debes agendarte para 6 meses mas</p>`;
     document.getElementById("Recordarme").innerHTML = `<form method="POST" action="AgendateVPH.html"><input type="submit"/>Recordarme</form>`;
     break;
   }
  };

select.addEventListener('change', function handleChange(event) {
  if (event.target.selectedIndex =! 0){
    console.log(event.target.selectedIndex);
    document.getElementById("SelectedVaccine").innerHTML = `<label> has seleccionado la vacuna = ${event.target.value}</label>`;
    ShowRightMessage(select.selectedIndex);
  }
});