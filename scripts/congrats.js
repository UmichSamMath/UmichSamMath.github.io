// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  
  {
    "name": "Thomas Bednarz",
    "congratsEvent": "passing Exam FM & SRM",
    "dateAdded": new Date(2025, 9, 8)
  },
  {
    "name": "Jordan Hoffner",
    "congratsEvent": "passing exam FM",
    "dateAdded": new Date(2025, 9, 12)
  }
];

function populateCongrats() {
  var resultDiv = document.getElementById("congrats");
  var currDate = new Date();
  var numMessagesShown = 0;

  congratsMessages.forEach(c => {
    // Copy dateAdded so original isn’t mutated
    var endShowDate = new Date(c.dateAdded);
    endShowDate.setMonth(endShowDate.getMonth() + monthsFeatured);

    if (currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <li style="font-size: 20px; margin-top: 20px;">
          ${c.name} on ${c.congratsEvent}!
        </li>
      `;
      numMessagesShown += 1;
    }
  });

  if (numMessagesShown === 0) {
    document.getElementById("congrats-title").classList.add('hidden-text');
  }
}

populateCongrats();
