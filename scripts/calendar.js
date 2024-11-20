// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Mentorship Game Night",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/bNj9MXxV4uLmY6xj6\">here</a>!",
    "Location": "East Hall 1060",
    "Date": "November 20",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-11-20T19:00",
    "EndTime": "2024-11-20T20:30"
  },
  {
    "Title": "Mentorship Cookie Decorating",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/ryWrsKjoyFF7Zgy8A\">here</a>!",
    "Location": "Mason Hall 1437",
    "Date": "December 3",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-12-03T19:00",
    "EndTime": "2024-12-03T20:00"
  },
  {
    "Title": "Milliman Speaker Series",
    "Description": "",
    "Location": "",
    "Date": "January 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-01-23T18:00",
    "EndTime": "2025-01-23T19:00"
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