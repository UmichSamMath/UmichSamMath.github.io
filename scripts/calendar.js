// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Winterfest",
    "Description": "Come learn more about Student Actuaries at Michigan (SAM) and get some SAM swag!",
    "Location": "Michigan Union Courtyard",
    "Date": "January 13",
    "StartTimeStr": "4:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-01-13T16:00",
    "EndTime": "2025-01-13T19:00"
  },
  {
    "Title": "Winter Mass Meeting",
    "Description": "",
    "Location": "",
    "Date": "January 21",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-01-21T19:00",
    "EndTime": "2025-01-21T20:00"
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
  },
  {
    "Title": "Speaker Series - Prof. David Kausch",
    "Description": "Mortality improvement in the US",
    "Location": "",
    "Date": "February 6",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-02-06T18:00",
    "EndTime": "2025-02-06T19:00"
  },
  {
    "Title": "Speaker Series - Actuarial Development Program",
    "Description": "Asset side of actuarial business",
    "Location": "",
    "Date": "February 20",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-02-20T18:00",
    "EndTime": "2025-02-20T19:00"
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