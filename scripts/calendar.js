// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Winter Mass Meeting",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/3NuReXBC4Htrz8RG6\">here</a>!",
    "Location": "East Hall 1360",
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
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/WAb1q2L5C54gYLQB6\">here</a>!",
    "Location": "USB 1250",
    "Date": "January 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-01-23T18:00",
    "EndTime": "2025-01-23T19:00"
  },
  {
    "Title": "Underclassmen Event",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/c3fvD6MZvYFig1Lv8\">here</a>!",
    "Location": "",
    "Date": "January 28",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-01-28T19:00",
    "EndTime": "2025-01-28T20:00"
  },
  {
    "Title": "Mentorship Euchre Tournament",
    "Description": "",
    "Location": "",
    "Date": "January 30",
    "StartTimeStr": "7:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-01-30T19:00",
    "EndTime": "2025-01-30T21:00"
  },
  {
    "Title": "Speaker Series - Prof. David Kausch",
    "Description": "Mortality improvement in the US. RSVP <a target=_blank href=\"https://forms.gle/eMZAnMZG8oUQ4hEW8\">here</a>!",
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
    "Title": "Mentorship Trivia Night",
    "Description": "",
    "Location": "",
    "Date": "February 13",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-02-13T19:00",
    "EndTime": "2025-02-13T20:30"
  },
  {
    "Title": "Speaker Series - Actuarial Development Program",
    "Description": "Asset side of actuarial business. RSVP <a target=_blank href=\"https://forms.gle/CgD8C1BLknbp94bV8\">here</a><span>!</span>",
    "Location": "",
    "Date": "February 20",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-02-20T18:00",
    "EndTime": "2025-02-20T19:00"
  },
  {
    "Title": "Mentorship Movie Night",
    "Description": "",
    "Location": "",
    "Date": "March 12",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-03-12T19:30",
    "EndTime": "2025-03-12T21:30"
  },
  {
    "Title": "ial Development Institute Workshop",
    "Description": "Coaching Actuaries partners with ADI for exclusive workshops. This presentation dives into various asset classes, their cash flow structures, and their impact on the financial landscape. From Risk-Free bonds to Venture Capital, you'll explore diverse investment options.",
    "Location": "",
    "Date": "March 31",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-03-31T19:00",
    "EndTime": "2025-03-31T20:00"
  },
  {
    "Title": "Mentorship Field Day",
    "Description": "",
    "Location": "",
    "Date": "April 5",
    "StartTimeStr": "12:00",
    "EndTimeStr": "2:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-04-05T12:00",
    "EndTime": "2025-04-05T14:00"
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