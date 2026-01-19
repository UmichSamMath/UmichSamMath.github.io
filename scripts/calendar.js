// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Winter Mass Meeting",
    "Description": "Attend to learn all about SAM, the actuarial profession, and our upcoming winter semester events!<br><br>RSVP <a href=\"https://forms.gle/5NmLR2sLY5myM8MM8\">Here</a>!",
    "Location": "EH 1360",
    "Date": "January 20",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-01-20T19:00",
    "EndTime": "2026-01-20T20:00"
  },
  {
    "Title": "Winter Welcome",
    "Description": "Join us to meet other members and learn more about the resources SAM provides. Underclassmen are highly encouraged to attend!",
    "Location": "NUB 1518",
    "Date": "January 21",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-01-21T18:00",
    "EndTime": "2026-01-21T20:00"
  },
  {
    "Title": "GI Advocacy Research Opportunity",
    "Description": "",
    "Location": "EH 3866",
    "Date": "January 22",
    "StartTimeStr": "7:15",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-01-22T19:15",
    "EndTime": "2026-01-22T20:00"
  },
  {
    "Title": "Yost Ice Skating",
    "Description": "Meet up with SAM members for a fun afternoon of open skate at Yost! The cost is $5 for entry and $5 to rent skates. This is a great event to attend with your mentor/mentee!",
    "Location": "Yost Ice Arena, 1116 S State St, Ann Arbor, MI 48109, USA",
    "Date": "January 25",
    "StartTimeStr": "1:30",
    "EndTimeStr": "3:30",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2026-01-25T13:30",
    "EndTime": "2026-01-25T15:30"
  },
  {
    "Title": "Milliman Speaker Series",
    "Description": "Milliman will be coming to present about Medicare Advantage. Attend to learn more about this healthcare product and its relevance in the industry.<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=3bdbe58a35&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "AH G168",
    "Date": "January 28",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-01-28T18:00",
    "EndTime": "2026-01-28T19:00"
  },
  {
    "Title": "Mentorship Euchre Night",
    "Description": "Pair up with your mentor/mentee and compete in our annual mentorship Euchre tournament!<br><br>RSVP <a href=\"https://forms.gle/4WjkjeNpSWyMKeaW9\">Here</a>!",
    "Location": "Weiser 110",
    "Date": "January 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-01-29T19:00",
    "EndTime": "2026-01-29T21:00"
  },
  {
    "Title": "Business Minor Session",
    "Description": "RSVP <a href=\"https://events.blackthorn.io/36uWEr6/5a5nVu8VMFl\">Here</a>!",
    "Location": "Corner Commons Room in Blau",
    "Date": "February 4",
    "StartTimeStr": "4:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-02-04T16:00",
    "EndTime": "2026-02-04T17:00"
  },
  {
    "Title": "Professor Kausch Speaker Series",
    "Description": "",
    "Location": "",
    "Date": "February 4",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-02-04T18:00",
    "EndTime": "2026-02-04T19:00"
  },
  {
    "Title": "Excel Workshops",
    "Description": "",
    "Location": "",
    "Date": "February 10",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-02-10T18:00",
    "EndTime": "2026-02-10T20:00"
  },
  {
    "Title": "Ally Speaker Series",
    "Description": "",
    "Location": "",
    "Date": "February 12",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-02-12T18:00",
    "EndTime": "2026-02-12T19:00"
  },
  {
    "Title": "DEI Event",
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
