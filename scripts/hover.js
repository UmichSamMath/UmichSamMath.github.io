const element = document.getElementById('hover');
const dropdown = document.getElementById('dropdown');


element.addEventListener('click', function() {
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
      dropdown.style.zIndex = "1";
    }
});

document.addEventListener('click', function(event) {
  if(event.target !== element && dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
});