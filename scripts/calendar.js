// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Everything Actuarial Workshop",
    "Description": "",
    "Location": "EH 4096",
    "Date": "October 26",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-10-26T18:00",
    "EndTime": "2026-10-26T19:00"
  },
  {
    "Title": "Mentorship Halloween Mixer",
    "Description": "",
    "Location": "1110 White St",
    "Date": "October 30",
    "StartTimeStr": "7:00",
    "EndTimeStr": "10:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-30T19:00",
    "EndTime": "2026-10-30T22:00"
  },
  {
    "Title": "Intro to the CAS Workshop",
    "Description": "",
    "Location": "",
    "Date": "November 2",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-11-02T18:00",
    "EndTime": "2026-11-02T19:00"
  },
  {
    "Title": "Course Planning Workshop",
    "Description": "",
    "Location": "",
    "Date": "November 4",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-11-04T19:00",
    "EndTime": "2026-11-04T20:00"
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
  if (!desc) return "";
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

    c.Description = sanitizeDescription(c.Description);

    if (startShowDate <= currDate && currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <article class="sam-event">
          <div class="sam-event-head">
            <span class="sam-event-dow">${c.DayofWeek}</span>
            <span>${c.Date}</span>
          </div>
          <div class="sam-event-body">
            <h3 class="sam-event-title">${c.Title}</h3>
            <p class="sam-event-meta">${c.StartTimeStr} – ${c.EndTimeStr} ${c.AmPm}</p>
            ${
              c.Location && c.Location.trim() !== ""
                ? `<p class="sam-event-meta">${c.Location}</p>` : ""
            }
            ${
              c.Description || c.RSVP
                ? `<div class="sam-event-desc">
                     ${c.Description ? `<p>${c.Description}</p>` : ""}
                     ${
                       c.RSVP
                         ? `<a href="${c.RSVP}" target="_blank" class="sam-btn sam-btn-maize mt-3">
                              RSVP <span class="underline">Here</span>
                            </a>` : ""
                     }
                   </div>` : ""
            }
          </div>
        </article>
      `;
    }
  });
}

populateEvents();
