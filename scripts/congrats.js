// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  {
    "name": "Elena Post",
    "congratsEvent": "passing Exam FM",
    "dateAdded": new Date(2023, 7, 14)
  },
  {
    "name": "Taylor Siemer",
    "congratsEvent": "passing Exam P and Exam FM over the summer",
    "dateAdded": new Date(2023, 7, 27)
  },
  {
    "name": "Sawyer Gustafson",
    "congratsEvent": "passing Exam SRM",
    "dateAdded": new Date(2023, 7, 31)
  },
  {
    "name": "Gabe Weber",
    "congratsEvent": "passing Exam SRM",
    "dateAdded": new Date(2023, 7, 31)
  },
  {
    "name": "Nicky Li",
    "congratsEvent": "passing Exam P and Exam FM over the summer",
    "dateAdded": new Date(2023, 8, 8)
  }
]

function populateCongrats(){
  var resultDiv = document.getElementById("congrats");
  var currDate = new Date(); // gets the current date
  var numMessagesShown = 0;
  
  congratsMessages.forEach(c => {
    var endShowDate = new Date(c.dateAdded.setMonth(c.dateAdded.getMonth() + monthsFeatured));

    if(currDate <= endShowDate) {
      resultDiv.innerHTML += `
    <p style="font-size: 20px; margin-top: 5px;">${c.name} on ${c.congratsEvent}!</p>
    `;
      numMessagesShown += 1;
    } 
  });

  if(numMessagesShown == 0) {
    document.getElementById("congrats-title").className += 'hidden-text';
  }
}

populateCongrats();