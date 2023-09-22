const select = document.getElementById('select');

select.addEventListener('change', handleChange(Event));

function handleChange(e) {
  console.log(e.target.value);
};

