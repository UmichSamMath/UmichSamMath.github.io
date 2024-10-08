// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Post-Career Fair Recruiting + LinkedIn Workshoop",
    "Description": "",
    "Location": "",
    "Date": "October 17",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-10-17T17:30",
    "EndTime": "2024-10-17T18:30"
  },
  {
    "Title": "Mentorship Kickoff Workshop & Speed Dating (Mentors Only)",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/LKDzyGs8G9Lumu3F9\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "October 21",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-10-21T18:30",
    "EndTime": "2024-10-21T19:00"
  },
  {
    "Title": "Mentorship Kickoff Workshop & Speed Dating (Mentors AND Mentees))",
    "Description": "RSVP <a target=_blank href=\"https://www.google.com/url?q=https://forms.gle/LKDzyGs8G9Lumu3F9&amp;sa=D&amp;source=calendar&amp;ust=1728835783745506&amp;usg=AOvVaw2WX9GRSclQ3cRfyY0vPM58\" target=\"_blank\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "October 21",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-10-21T19:00",
    "EndTime": "2024-10-21T20:00"
  },
  {
    "Title": "Mentorship Mixer",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/6buBgNGhexAjxdBG9\">here</a>!",
    "Location": "319 Catherine St.",
    "Date": "October 25",
    "StartTimeStr": "8:00",
    "EndTimeStr": "11:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2024-10-25T20:00",
    "EndTime": "2024-10-25T23:00"
  },
  {
    "Title": "Everything Actuarial Workshop",
    "Description": "",
    "Location": "East Hall 1866",
    "Date": "October 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-10-29T19:00",
    "EndTime": "2024-10-29T20:00"
  },
  {
    "Title": "Intro to the CAS Workshop",
    "Description": "",
    "Location": "",
    "Date": "November 12",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-11-12T19:00",
    "EndTime": "2024-11-12T20:00"
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