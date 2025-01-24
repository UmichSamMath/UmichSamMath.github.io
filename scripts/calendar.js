// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Winter Welcome ft. Prof. Natarajan",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/c3fvD6MZvYFig1Lv8\">here</a>!",
    "Location": "East Hall 4096",
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
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/BHepfrThxM7xXbVH9\">here</a>!",
    "Location": "Mason Hall 1437",
    "Date": "January 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-01-29T19:00",
    "EndTime": "2025-01-29T21:00"
  },
  {
    "Title": "Ice Skating @ Yost",
    "Description": "",
    "Location": "Yost Ice Arena",
    "Date": "February 2",
    "StartTimeStr": "1:30",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2025-02-02T13:30",
    "EndTime": "2025-02-02T15:00"
  },
  {
    "Title": "Business Minor Info Session",
    "Description": "",
    "Location": "Ross 1240",
    "Date": "February 5",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-02-05T17:00",
    "EndTime": "2025-02-05T18:00"
  },
  {
    "Title": "Speaker Series - Prof. David Kausch",
    "Description": "Mortality improvement in the US. RSVP <a target=_blank href=\"https://forms.gle/eMZAnMZG8oUQ4hEW8\">here</a>!",
    "Location": "East Hall 4088",
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
    "Location": "East Hall 1068",
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
    "Location": "East Hall 4088",
    "Date": "February 20",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-02-20T18:00",
    "EndTime": "2025-02-20T19:00"
  },
  {
    "Title": "Speaker Series - Jackson",
    "Description": "Topic: Interviewing 101\nPizza will be provided!",
    "Location": "",
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
    "Location": "",
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
  },
  {
    "Title": "CA Workshop: Actuarial Intelligence That is Not Artificial",
    "Description": "Attend a workshop from the Coaching Actuaries team featuring Coach K and Coach Tong. They will present relevant industry information, share professional growth insights, discuss study tips and answer questions.",
    "Location": "",
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