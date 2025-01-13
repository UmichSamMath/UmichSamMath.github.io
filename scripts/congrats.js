// Automatically updates and removes congrats messages from the homepage after a certain amount of time (1 month)
// Keep in mind that when entering dates, months start at index 0 (Jan = 0, Feb = 1, etc.), so subtract 1

var monthsFeatured = 1;

let congratsMessages = [
  {
    "name": "Gabe Weber",
    "congratsEvent": "accepting a full-time job with Milliman LifeRTC in Chicago",
    "dateAdded": new Date(2024, 8, 20)
  },
  {
    "name": "Jay Vogel",
    "congratsEvent": "accepting a full-time job with New York Life",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Jordan Hoffner",
    "congratsEvent": "accepting an internship with Auto Owners",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Emily Lin",
    "congratsEvent": "accepting an internship with Cigna",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Rachel Leonard",
    "congratsEvent": "accepting an internship with Allianz Life",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Jonathan Holland",
    "congratsEvent": "accepting an internship with Deloitte",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Sean Kim",
    "congratsEvent": "accepting an internship with Aon in NYC",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Nikhil Kori",
    "congratsEvent": "passing exam SRM",
    "dateAdded": new Date(2025, 0, 8)
  },
  {
    "name": "Rachel Leonard",
    "congratsEvent": "passing exam SRM",
    "dateAdded": new Date(2025, 0, 9)
  },
  {
    "name": "Alex Drossman",
    "congratsEvent": "passing exam P",
    "dateAdded": new Date(2025, 0, 13)
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