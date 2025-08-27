// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Festifall",
    "Description": "Join us at Festifall to meet excited underclassmen, share what SAM is all about, and kick off the year!",
    "Location": "Table C56, near MLB & fountain",
    "Date": "August 27",
    "StartTimeStr": "2:00",
    "EndTimeStr": "3:30",
    "AmPm": "AM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-08-27T14:00",
    "EndTime": "2025-08-27T15:30"
  },
  {
    "Title": "Learn S’more About SAM",
    "Description": "Kick off the semester with a fun bonfire intended to create a space for more in-depth questions about SAM. Anyone is welcome, and underclassmen are highly encouraged to attend. There will be s’mores! RSVP <a target=_blank href=\"https://forms.gle/UNNfgxX6hrRSsKoG9\">here</a>!"
    "Location": "1211 White St",
    "Date": "August 28",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-08-28T19:30",
    "EndTime": "2025-08-28T21:30"
  },
  {
    "Title": "Mass Meeting",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/7hAwbpigLrhougxC7\">here</a>!"
    "Location": "EH 1360",
    "Date": "September 2",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-02T19:00",
    "EndTime": "2025-09-02T20:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/gsXGkvX4kK9v9zR76\">here</a>!"
    "Location": "EH 1360",
    "Date": "September 2",
    "StartTimeStr": "8:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-09-02T20:00",
    "EndTime": "2025-09-02T20:30"
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
