// Automatically updates the SAM Cycle GIF on the home page depending on the month (and the quarter)

var currentDate = new Date()

// Determine the current quarter
const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-based
let quarter;

if (currentMonth >= 5 && currentMonth <= 10) {
  quarter = 1;
} else if (currentMonth >= 11 && currentMonth <= 12) {
  quarter = 2;
} else if (currentMonth >= 1 && currentMonth <= 2) {
  quarter = 3;
} else {
  quarter = 4;
}

// Set the image source based on the quarter
const image = document.getElementById('dynCycle');

switch (quarter) {
  case 1:
    image.src = 'images/SAMQ1.gif';
    break;
  case 2:
    image.src = 'images/SAMQ2.gif';
    break;
  case 3:
    image.src = 'images/SAMQ3.gif';
    break;
  case 4:
    image.src = 'images/SAMQ4.gif';
    break;
}