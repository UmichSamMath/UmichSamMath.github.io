// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Mentorship Kickoff Workshop",
    "Description": "MANDATORY for all mentors! Please RSVP via the Speed Dating RSVP.",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:00",
    "EndTime": "2023-10-23T18:30"
  },
  {
    "Title": "Mentorship Speed Dating",
    "Description": "MANDATORY for everyone in mentorship! RSVP <a target=_blank href=\"https://forms.gle/U6iXmtiwit79fsr19\">here</a>!",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:30",
    "EndTime": "2023-10-23T20:00"
  },
  {
    "Title": "Post Career Fair Recruiting Workshop",
    "Description": "",
    "Location": "East Hall 3088",
    "Date": "October 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-24T19:00",
    "EndTime": "2023-10-24T20:30"
  },
  {
    "Title": "Mentorship RAGER",
    "Description": "HIGHLY encouraged for everyone in mentorship. Come hang out with all of the mentors and mentees to meet new people and learn who you may want to be partnered with this year! Please RSVP <a target=_blank href=\"https://forms.gle/7dtdJjnSNbdfCtPM6\">here</a>!",
    "Location": "",
    "Date": "October 27",
    "StartTimeStr": "9:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-10-27T21:00",
    "EndTime": "2023-10-28T00:00"
  }
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