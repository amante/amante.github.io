const select = document.getElementById('select');

select.addEventListener('click', handleChange(Event));

function handleChange(e) {
  document.getElementById("demo").innerHTML = `<label>${select.value}</label>`;
};