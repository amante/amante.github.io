const select = document.getElementById('select');
console.log(select.selectedIndex);
console.log(select.data);

select.addEventListener('change', function handleChange(event) {
  console.log(select.selectedIndex);
  console.log(select.data);
});