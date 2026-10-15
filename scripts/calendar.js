// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Mentorship Pumpkin Painting",
    "Description": "",
    "Location": "EH 1372",
    "Date": "October 15",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-10-15T18:00",
    "EndTime": "2026-10-15T19:00"
  },
  {
    "Title": "Mentorship Preference Forms Due",
    "Description": "<strong><a href=\"https://us.list-manage.com/J87LPgHrfdP?e=63c96118a3&amp;c2id=f36db868bb9ec1f3997f0fa5e3d17169\" target=\"_blank\"><u>Form for Mentors to Fill Out</u></a></strong><br><strong><a href=\"https://us.list-manage.com/14gP4Qa0Gyx?e=63c96118a3&amp;c2id=f36db868bb9ec1f3997f0fa5e3d17169\" target=\"_blank\"><u>Form for Mentees to Fill Out</u></a></strong>",
    "Location": "",
    "Date": "October 16",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-16T00:00",
    "EndTime": "2026-10-17T00:00"
  },
  {
    "Title": "Coaching Actuaries Workshop",
    "Description": "",
    "Location": "EH 4096",
    "Date": "October 21",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-10-21T18:00",
    "EndTime": "2026-10-21T19:00"
  },
  {
    "Title": "Goldman Sachs Speaker Event",
    "Description": "Meet Jared Dickow, CIO (Chief Investment Officer) at Goldman Sachs and a UMich Actuarial Math Alum. He will be speaking about his non-traditional path as an actuary and potential internship opportunities with Goldman Sachs. Food will be provided!<br><br>RSVP <a href=\"https://docs.google.com/forms/d/e/1FAIpQLSd65G8Qr1umI8WwVXrk30IN1otyeA2w8OTB7Ir61YPuKwucvA/viewform\" target=\"_blank\">here</a>!",
    "Location": "",
    "Date": "October 22",
    "StartTimeStr": "5:45",
    "EndTimeStr": "6:45",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-10-22T17:45",
    "EndTime": "2026-10-22T18:45"
  },
  {
    "Title": "Mentorship Pairings Released",
    "Description": "",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-23T00:00",
    "EndTime": "2026-10-24T00:00"
  },
  {
    "Title": "Mentorship Halloween Mixer",
    "Description": "",
    "Location": "",
    "Date": "October 30",
    "StartTimeStr": "7:00",
    "EndTimeStr": "10:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-30T19:00",
    "EndTime": "2026-10-30T22:00"
  },
  {
    "Title": "Mentorship Game Night",
    "Description": "",
    "Location": "",
    "Date": "November 9",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-11-09T18:00",
    "EndTime": "2026-11-09T20:00"
  }
];

// Sanitize description strings
function sanitizeDescription(desc) {
  if (!desc) return "More information coming soon!";
  desc = desc.replace(/target=_blank/gi, 'target="_blank"');
  desc = desc.replace(/javascript:/gi, '');
  return desc;
}

// Create event cards
function populateEvents() {
  const resultDiv = document.getElementById("calendar");
  const currDate = new Date();

  SAMevents.forEach(c => {
    const startShowDate = new Date(c.StartTime);
    startShowDate.setDate(startShowDate.getDate() - 7);
    const endShowDate = new Date(c.EndTime);

    if (!c.Location || c.Location.trim() === "") {
      c.Location = "Location To Be Determined";
    }
    c.Description = sanitizeDescription(c.Description);    if (startShowDate <= currDate && currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <article class="sam-event">
          <div class="sam-event-head">
            <span class="sam-event-dow">${c.DayofWeek}</span>
            <span>${c.Date}</span>
          </div>
          <div class="sam-event-body">
            <h3 class="sam-event-title">${c.Title}</h3>
            <p class="sam-event-meta">${c.StartTimeStr} – ${c.EndTimeStr} ${c.AmPm}</p>
            <p class="sam-event-meta">${c.Location}</p>
            <div class="sam-event-desc">
              <p>${c.Description}</p>
              ${
                c.RSVP
                  ? `<a href="${c.RSVP}" target="_blank" class="sam-btn sam-btn-maize mt-3">
                       RSVP <span class="underline">Here</span>
                     </a>
                     ` : ""
              }
            </div>
          </div>
        </article>
      `;
    }
  });
}

populateEvents();
