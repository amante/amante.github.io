const select = document.getElementById('select');

select.addEventListener('change', function handleChange(event) {
  document.getElementById("SelectedVaccine").innerHTML = `<label> has seleccionado la vacuna = ${event.target.value}</label>`;
});