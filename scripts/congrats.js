// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  {
    "name": "Elena Post",
    "congratsEvent": "passing Exam FM",
    "dateAdded": new Date(2023, 7, 14)
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
    <p style="font-size: 20px;">${c.name} on ${c.congratsEvent}!</p>
    `;
      numMessagesShown += 1;
    } 
  });

  if(numMessagesShown == 0) {
    document.getElementById("congrats-title").className += 'hidden-text';
  }
}

populateCongrats();