// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  [
    {
      "Title": "Mass Advising Session",
      "Description": "This session will be led by Professor Natarajan!",
      "Location": "East Hall B844",
      "Date": "November 7",
      "StartTimeStr": "7:30",
      "EndTimeStr": "9:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2023-11-07T18:30",
      "EndTime": "2023-11-07T20:00"
    },
    {
      "Title": "Underclassmen Course Planning Workshop",
      "Description": "Highly encouraged for underclassmen! Plan out your 4 years at college as well as get tips on when to take actuarial exams! Great resources will be provided! Please RSVP <a href=\"https://forms.gle/L3EVHkrwTq72Cdg98\">here</a>.",
      "Location": "East Hall 4088",
      "Date": "November 14",
      "StartTimeStr": "8:00",
      "EndTimeStr": "9:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2023-11-14T19:00",
      "EndTime": "2023-11-14T20:00"
    },
    {
      "Title": "DEI Event",
      "Description": "",
      "Location": "East Hall 1084",
      "Date": "November 28",
      "StartTimeStr": "8:00",
      "EndTimeStr": "9:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2023-11-28T19:00",
      "EndTime": "2023-11-28T20:00"
    }
  ]
]

function populateEvents(){
  var resultDiv = document.getElementById("calendar");
  var currDate = new Date(); // gets the current date
  
  SAMevents.forEach(c => {
    var startShowDate = new Date(c.StartTime);
    startShowDate.setDate(startShowDate.getDate() - 7);
    
    var endShowDate = new Date(c.EndTime);
    if(c.Location === "") {
      c.Location = "Location To Be Determined";
    }

    if(c.Description === "") {
      c.Description = "More information coming soon!";
    }
    
    if(startShowDate <= currDate && currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <div class="item">
          <p class="event-title">${c.Title}</p>
          <p>${c.DayofWeek}, ${c.Date}, ${c.StartTimeStr} - ${c.EndTimeStr}${c.AmPm}</p>
          <p>${c.Location}</p>
          <button type="button" class="collapsible">See More!</button>
          <div class="hidden-text">
            <p>${c.Description}</p>
          </div>
        </div>
    `;
    } 
  });
}

populateEvents();