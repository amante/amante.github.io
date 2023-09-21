const select = document.getElementById('select');

select.addEventListener('change', handleChange(Event));

function handleChange(event) {
  console.log(event.target.name);
};