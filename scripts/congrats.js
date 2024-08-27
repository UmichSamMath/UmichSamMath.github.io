// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  {
    "name": "Thomas Bednarz",
    "congratsEvent": "passing exam P",
    "dateAdded": new Date(2024, 7, 26)
  },
  {
    "name": "Katherine Bednarz",
    "congratsEvent": "passing exam MAS-I and DISC DA",
    "dateAdded": new Date(2024, 7, 26)
  },
  {
    "name": "Grace Russo",
    "congratsEvent": "passing Exam P and accepting a full time offer with Deloitte as an Actuarial Analyst",
    "dateAdded": new Date(2024, 7, 27)
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
    <li style="font-size: 20px; margin-top: 20px;">${c.name} on ${c.congratsEvent}!</li>
    `;
      numMessagesShown += 1;
    } 
  });

  if(numMessagesShown == 0) {
    document.getElementById("congrats-title").className += 'hidden-text';
  }
}

populateCongrats();