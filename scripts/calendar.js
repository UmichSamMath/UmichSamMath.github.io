// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "SQL Workshop",
    "Description": "Come learn some basics about SQL, a language used for database querying and great tool for actuaries! RSVP <a target=_blank href=\"https://forms.gle/QAuXQoLTNNFnmVJ68\">here</a>!",
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
    "Title": "Board Elections Workshop",
    "Description": "Come and learn about the process and requirements to run for SAM Board! This is the first step in joining SAM Board. Joing SAM Board is the best decision I made in college, and it opened the doors to more experiences and opportunities than I ever would have imagined.",
    "Location": "East Hall 4096",
    "Date": "March 26",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-03-26T18:00",
    "EndTime": "2025-03-26T19:00"
  },
  {
    "Title": "Everything Exams Workshop",
    "Description": "",
    "Location": "",
    "Date": "March 26",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-03-26T19:00",
    "EndTime": "2025-03-26T20:00"
  },
  {
    "Title": "Milliman Networking Event",
    "Description": "RSVP <a target=_blank href=\"https://docs.google.com/forms/d/e/1FAIpQLSecw4Of3VoDaj2BTAu49l2ssDtD2bO42UhmRolxSc1xrqzSqQ/viewform?usp=sharing\">here</a>!",
    "Location": "HopCat",
    "Date": "March 27",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-03-27T19:00",
    "EndTime": "2025-03-27T20:00"
  },
  {
    "Title": "Actuarial Development Institute Workshop",
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
  },
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
    "Description": "",
    "Location": "East Hall 1360",
    "Date": "April 12",
    "StartTimeStr": "1:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2025-04-12T13:00",
    "EndTime": "2025-04-12T17:00"
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