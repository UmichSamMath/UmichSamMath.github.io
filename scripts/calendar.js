// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
    {
      "Title": "Speaker Series - Actuarial Development Program",
      "Description": "Asset side of actuarial business. RSVP <a target=_blank href=\"https://forms.gle/CgD8C1BLknbp94bV8\" target=\"_blank\">here</a>! Join the Zoom call <a target=_blank href=\"https://umich.zoom.us/j/7991518779\">here</a>.",
      "Location": "Virtual",
      "Date": "February 20",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2025-02-20T18:00",
      "EndTime": "2025-02-20T19:00"
    },
    {
      "Title": "R Workshop",
      "Description": "",
      "Location": "Mason Hall Fishbowl G444A",
      "Date": "February 25",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2025-02-25T18:00",
      "EndTime": "2025-02-25T19:00"
    },
    {
      "Title": "Speaker Series - Jackson",
      "Description": "Topic: Interviewing 101\nPizza will be provided!",
      "Location": "East Hall 4088",
      "Date": "February 27",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2025-02-27T18:00",
      "EndTime": "2025-02-27T19:00"
    },
    {
      "Title": "Northwestern Mutual Info Session",
      "Description": "",
      "Location": "East Hall 4088",
      "Date": "March 11",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2025-03-11T18:00",
      "EndTime": "2025-03-11T19:00"
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
      "Title": "Cigna Speaker Series",
      "Description": "",
      "Location": "",
      "Date": "March 13",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2025-03-13T18:00",
      "EndTime": "2025-03-13T19:00"
    },
    {
      "Title": "Python Workshop",
      "Description": "",
      "Location": "Mason Hall Fishbowl G444A",
      "Date": "March 20",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2025-03-20T18:00",
      "EndTime": "2025-03-20T19:00"
    },
    {
      "Title": "SQL Workshop",
      "Description": "",
      "Location": "Mason Hall Fishbowl G444A",
      "Date": "March 25",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2025-03-25T18:00",
      "EndTime": "2025-03-25T19:00"
    },
    {
      "Title": "Milliman Networking Event",
      "Description": "",
      "Location": "",
      "Date": "March 27",
      "StartTimeStr": "7:00",
      "EndTimeStr": "8:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2025-03-27T19:00",
      "EndTime": "2025-03-27T20:00"
    },
    {
      "Title": "ial Development Institute Workshop",
      "Description": "Coaching Actuaries partners with ADI for exclusive workshops. This presentation dives into various asset classes, their cash flow structures, and their impact on the financial landscape. From Risk-Free bonds to Venture Capital, you'll explore diverse investment options.",
      "Location": "Virtual",
      "Date": "March 31",
      "StartTimeStr": "7:00",
      "EndTimeStr": "8:00",
      "AmPm": "PM",
      "DayofWeek": "Monday",
      "StartTime": "2025-03-31T19:00",
      "EndTime": "2025-03-31T20:00"
    },
    {
      "Title": "Communications Workshop",
      "Description": "",
      "Location": "",
      "Date": "April 1",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2025-04-01T18:00",
      "EndTime": "2025-04-01T19:00"
    },
    {
      "Title": "Mentorship Field Day",
      "Description": "",
      "Location": "",
      "Date": "April 6",
      "StartTimeStr": "12:00",
      "EndTimeStr": "2:00",
      "AmPm": "PM",
      "DayofWeek": "Sunday",
      "StartTime": "2025-04-06T12:00",
      "EndTime": "2025-04-06T14:00"
    },
    {
      "Title": "CA Workshop: Actuarial Intelligence That is Not Artificial",
      "Description": "Attend a workshop from the Coaching Actuaries team featuring Coach K and Coach Tong. They will present relevant industry information, share professional growth insights, discuss study tips and answer questions.",
      "Location": "Virtual",
      "Date": "April 6",
      "StartTimeStr": "4:00",
      "EndTimeStr": "5:00",
      "AmPm": "PM",
      "DayofWeek": "Sunday",
      "StartTime": "2025-04-06T16:00",
      "EndTime": "2025-04-06T17:00"
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