const select = document.getElementById('select');

select.addEventListener('change', handleChange(Event));

function handleChange(event) {
  console.log("event.target.name"); // 👉️ get selected VALUE

  // 👇️ get selected VALUE even outside event handler
  console.log(select.options[select.selectedIndex].value);

  // 👇️ get selected TEXT in or outside event handler
  console.log(select.options[select.selectedIndex].text)};