// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "DEI Event",
    "Description": "SAM will be hosting our first diversity, equity, and inclusion (DEI) event on imposter syndrome! Imposter syndrome is the persistent inability to believe that one's success is deserved or has been legitimately achieved as a result of one's own efforts or skills. We will be talking about methods to overcome imposter syndrome and doing some self reflection! This will be a great destress and reset event before finals, and we highly encourage all SAM members to join! RSVP <a target=_blank href=\"https://forms.gle/C3mSzNctK1YVyRGq7\">here</a>!",
    "Location": "East Hall 1084",
    "Date": "November 28",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-11-28T19:00",
    "EndTime": "2023-11-28T20:00"
  },
  {
    "Title": "Underclassman Hangout",
    "Description": "SAM Board is organizing an event for underclassmen to hang out and get to know each other. We will be a hosting murder mystery game night with yummy catered snacks!  RSVP <a target=_blank href=\"https://forms.gle/5v6QHi3HjAaqL7k3A\">here</a>!",
    "Location": "East Hall 4096",
    "Date": "November 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-11-29T19:00",
    "EndTime": "2023-11-29T20:00"
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