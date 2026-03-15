// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "ACTEX Workshop",
    "Description": "The topic of this workshop is Redefining Actuarial Learning with AI. There will also be a raffle! For every 10 attendees, one winner will receive free three month access to the full ACTEX Digital Study Guide for an exam of their choice!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=2938d1e302&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 2866",
    "Date": "March 16",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:15",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-03-16T18:00",
    "EndTime": "2026-03-16T19:15"
  },
  {
    "Title": "CAS Summer Program Workshop",
    "Description": "The CAS Student Central Summer Program is an online program for students interested in the property and casualty industry. It is a great opportunity for underclassmen who are looking for an actuarial experience this summer. We will walk through the application process during the workshop.",
    "Location": "EH 2866",
    "Date": "March 19",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-03-19T18:00",
    "EndTime": "2026-03-19T19:00"
  },
  {
    "Title": "Alumni Day",
    "Description": "SAM Alumni will return to Ann Arbor to discuss their various jobs and career tracks in a panel discussion, breakout session, and networking event. This will be a great event for members of all years! Make connections with actuaries from across the country and learn about all different actuarial career tracks! <u>Mentorship is expected to attend.</u> Attire is smart casual (think dinner with your parents!). Free food will also be provided in a networking luncheon with the alumni. More info will be sent out in a separate email with the schedule and panelists, so be sure to check it out and put the event in your calendar!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=5a2f8fbe88&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "East Hall",
    "Date": "March 21",
    "StartTimeStr": "1:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2026-03-21T13:00",
    "EndTime": "2026-03-21T17:00"
  },
  {
    "Title": "Board Elections Workshop",
    "Description": "",
    "Location": "",
    "Date": "March 25",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-03-25T18:00",
    "EndTime": "2026-03-25T19:00"
  },
  {
    "Title": "Northwestern Mutual Speaker Series",
    "Description": "",
    "Location": "",
    "Date": "March 26",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-03-26T18:00",
    "EndTime": "2026-03-26T19:00"
  },
  {
    "Title": "Everything Exams Workshop + CA Event",
    "Description": "",
    "Location": "",
    "Date": "April 1",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-04-01T18:00",
    "EndTime": "2026-04-01T19:00"
  },
  {
    "Title": "SAM Board Elections",
    "Description": "",
    "Location": "",
    "Date": "April 8",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-04-08T18:00",
    "EndTime": "2026-04-08T20:00"
  },
  {
    "Title": "Mentorship Field Day",
    "Description": "",
    "Location": "",
    "Date": "April 11",
    "StartTimeStr": "11:00",
    "EndTimeStr": "2:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2026-04-11T11:00",
    "EndTime": "2026-04-11T14:00"
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
    c.Description = sanitizeDescription(c.Description);

    if (startShowDate <= currDate && currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <div class="bg-white rounded-lg shadow border p-6 flex flex-col justify-between space-y-3 text-center mt-8">
          <div>
            <h3 class="text-xl font-bold text-um-blue mb-2">${c.Title}</h3>
            <p class="text-sm text-gray-600">${c.DayofWeek}, ${c.Date}</p>
            <p class="text-sm text-gray-600">${c.StartTimeStr} – ${c.EndTimeStr} ${c.AmPm}</p>
            <p class="text-sm text-gray-700">${c.Location}</p>
          </div>
          <div class="mt-3 text-gray-700">
            <p>${c.Description}</p>
            ${
              c.RSVP
                ? `<a href="${c.RSVP}" target="_blank" class="mt-3 inline-block bg-um-gold text-white font-semibold rounded-md px-4 py-2 hover:bg-yellow-500 transition">
                     RSVP <span class="text-um-blue font-bold underline">Here</span>
                   </a>`
                : ""
            }
          </div>
        </div>
      `;
    }
  });
}

populateEvents();
