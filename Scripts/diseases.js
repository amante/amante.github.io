const select = document.getElementById('select');
console.log(select.selectedIndex);

select.addEventListener('change', function handleChange(event) {
  console.log(select.selectedIndex);
});