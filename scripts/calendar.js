// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Board Elections",
    "Description": "All of SAM membership is encouraged to attend to elect SAM's new executive board. Food will be provided!",
    "Location": "West Hall 120",
    "Date": "April 9",
    "StartTimeStr": "7:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-04-09T19:00",
    "EndTime": "2025-04-09T21:00"
  },
  {
    "Title": "Alumni Day",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/4MXAo9K1iv17KqR67\">here</a>!",
    "Location": "East Hall 1360",
    "Date": "April 12",
    "StartTimeStr": "1:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-04-12T13:00",
    "EndTime": "2025-04-12T17:00"
  },
  {
    "Title": "Senior Send Off \"Darty\"",
    "Description": "Join us in sending off our SAM Seniors! All of SAM is welcome and Mentorship is encouraged to attend. We will have games, food, and drinks! RSVP <a target=_blank href=\"https://forms.gle/Cf2BCjYWFre32kR69\">here</a>!",
    "Location": "319 Catherine St",
    "Date": "April 12",
    "StartTimeStr": "8:00",
    "EndTimeStr": "11:59",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-04-12T20:00",
    "EndTime": "2025-04-12T23:59"
  },
  {
    "Title": "Senior Bar Crawl",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/px2n3FpjVJmuF7vA7\">here</a>!",
    "Location": "",
    "Date": "April 19",
    "StartTimeStr": "6:30",
    "EndTimeStr": "11:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-04-19T18:30",
    "EndTime": "2025-04-19T23:00"
  }
]

function populateEvents() {
  var resultDiv = document.getElementById("calendar");
  var currDate = new Date(); // gets the current date

  SAMevents.forEach(c => {
    var startShowDate = new Date(c.StartTime);
    startShowDate.setDate(startShowDate.getDate() - 7);

    var endShowDate = new Date(c.EndTime);
    if (c.Location === "") {
      c.Location = "Location To Be Determined";
    }

    if (c.Description === "") {
      c.Description = "More information coming soon!";
    }

    if (startShowDate <= currDate && currDate <= endShowDate) {
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