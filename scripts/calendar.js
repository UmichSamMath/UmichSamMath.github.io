// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
    {
      "Title": "Winter Mass Meeting",
      "Description": "RSVP <a target = _blank href=\"https://forms.gle/7gZMLsF5SCuSeDtz5\">here</a>!",
      "Location": "East Hall 1360",
      "Date": "January 16",
      "StartTimeStr": "6:30",
      "EndTimeStr": "8:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2024-01-16T18:30",
      "EndTime": "2024-01-16T20:00"
    },
    {
      "Title": "Ross Minor Workshop",
      "Description": "RSVP <a target = _blank href=\"https://forms.gle/Y28HKDiyuCSk9sEW7\">here</a>!",
      "Location": "Ross R1240",
      "Date": "January 24",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:30",
      "AmPm": "PM",
      "DayofWeek": "Wednesday",
      "StartTime": "2024-01-24T18:00",
      "EndTime": "2024-01-24T19:30"
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