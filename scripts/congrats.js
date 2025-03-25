// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  
  {
    "name": "Gabe Weber",
    "congratsEvent": "passing Exam FAM",
    "dateAdded": new Date(2025, 0, 28)
  },
  {
    "name": "William Furge",
    "congratsEvent": "accepting an internship with WTW in Detroit",
    "dateAdded": new Date(2025, 2, 25)
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