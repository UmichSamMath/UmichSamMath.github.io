// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "ADI Speaker Series",
    "Description": "ADI will virtually present on the topic of banks and finance within the context of actuarial math. There will also be a case study!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=9334cf9f3f&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 4096",
    "Date": "February 16",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-02-16T18:00",
    "EndTime": "2026-02-16T19:00"
  },
  {
    "Title": "Mentorship Trivia Night",
    "Description": "Come play trivia with mentorship! Bring your mentor/mentee, eat some snacks, and have fun!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=03a8582d2e&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 4096",
    "Date": "February 18",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-02-18T19:00",
    "EndTime": "2026-02-18T20:30"
  },
  {
    "Title": "Cigna Speaker Series",
    "Description": "Cigna will be visiting to present on the topic of Setting Yourself Up for Success with discussions about recruiting, internships, and post-grad. They will also be hosting coffee chats on 2/18 and 2/19!<br>See the link below for additional details and sign up.<br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=0b4c57bafa&amp;e=63c96118a3\" target=\"_blank\"><u>Coffee Chat Sign Up</u></a><br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=d7ea4f973c&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 4096",
    "Date": "February 19",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-02-19T18:00",
    "EndTime": "2026-02-19T19:00"
  },
  {
    "Title": "Women’s Day Event",
    "Description": "",
    "Location": "",
    "Date": "March 9",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-03-09T18:00",
    "EndTime": "2026-03-09T19:00"
  },
  {
    "Title": "AAA Life Speaker Series",
    "Description": "",
    "Location": "",
    "Date": "March 11",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-03-11T18:00",
    "EndTime": "2026-03-11T19:00"
  },
  {
    "Title": "Alumni Day",
    "Description": "",
    "Location": "",
    "Date": "March 21",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2026-03-21T18:00",
    "EndTime": "2026-03-21T20:00"
  },
  {
    "Title": "CAS Summer Program Workshop",
    "Description": "",
    "Location": "",
    "Date": "March 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-03-23T18:00",
    "EndTime": "2026-03-23T19:00"
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
