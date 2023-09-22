const select = document.getElementById('select');
console.log(select.selectedIndex);

  select.addEventListener('change', function handleChange(event) {
    console.log(event.target.value); // 👉️ get selected VALUE
  
    // 👇️ get selected VALUE even outside event handler
    console.log(select.options[select.selectedIndex].value);
  
    // 👇️ get selected TEXT in or outside event handler
    console.log(select.options[select.selectedIndex].text);
});