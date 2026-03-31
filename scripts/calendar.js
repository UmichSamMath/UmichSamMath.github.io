// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Board Applications Due",
    "Description": "Board elections are coming up! If you're running for a position, be sure to submit the application by <strong>midnight</strong> on Monday.<br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=2025932c0d&amp;e=63c96118a3\" target=\"_blank\"><u>Apply Here</u></a>",
    "Location": "",
    "Date": "March 30",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Monday",
    "StartTime": "2026-03-30T00:00",
    "EndTime": "2026-03-31T00:00"
  },
  {
    "Title": "Intro to the CAS Workshop / Internship Panel",
    "Description": "Are you interested in the CAS or unsure about which path you want to go down? Come to this workshop to learn more about property & casualty insurance from a panel of students with internship experience!",
    "Location": "EH 3096",
    "Date": "March 31",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-03-31T19:00",
    "EndTime": "2026-03-31T20:00"
  },
  {
    "Title": "Board Elections Interviews",
    "Description": "If you're running for board, each candidate must meet with the current board member in the position they are applying for to discuss the role and expectations.",
    "Location": "Math Atrium",
    "Date": "April 1",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-04-01T00:00",
    "EndTime": "2026-04-04T00:00"
  },
  {
    "Title": "Everything Exams Workshop + CA Event",
    "Description": "This workshop will cover the different exam paths and everything you need to know about the actuarial exams! Come if you want to learn more about the resources that will help you succeed!",
    "Location": "EH 4096",
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
    "Location": "EH 1324",
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
