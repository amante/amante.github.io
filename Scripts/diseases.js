const select = document.getElementById('select');

function ShowRightMessage(indice){
  switch(indice){
  case 1:
    document.getElementById("SelectedVaccine").style.display = "block";
    document.getElementById("Messages").style.display = "block";
    document.getElementById("Recordarme").style.display = "block";
    document.getElementById("Messages").innerHTML = `<label class="text">¿Quieres que te recordemos tu proxima Vacuna?, deberás agendarte para 1 mes mas</label>`;
    document.getElementById("Recordarme").innerHTML = `<button type="submit" class="text-center" onclick="replaceFunction()">Recordarme</button>`; 
    break;
   case 2:
    document.getElementById("SelectedVaccine").style.display = "block";
    document.getElementById("Messages").style.display = "block";
    document.getElementById("Recordarme").style.display = "block";
    document.getElementById("Messages").innerHTML = `<label class="text">¿Quieres que te recordemos tu proxima Vacuna?, deberás agendarte para 4 meses mas</label>`;
    document.getElementById("Recordarme").innerHTML = `<button type="submit" class="text-center" onclick="replaceFunction()">Recordarme</button>`;
     break;
   }
  };

select.addEventListener('change', function handleChange(event) {
  if (event.target.selectedIndex !== 0){
    document.getElementById("SelectedVaccine").innerHTML = `<label class="text"> has seleccionado la vacuna = ${event.target[event.target.options.selectedIndex].innerText}</label>`;
    ShowRightMessage(select.selectedIndex);
  }
});

function replaceFunction(){
  windows.location.replace("https://amante.github.io/AgendateVPH.html");
}