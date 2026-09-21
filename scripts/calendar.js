// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Mock Interviews",
    "Description": "Sign up sheet <a href=\"https://docs.google.com/spreadsheets/d/1M2B1Tg4vpdtml65MmMz7-_iOW4TnaCIjfXQx2Ls3usY/edit?usp=sharing\">here</a>!",
    "Location": "",
    "Date": "September 18",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-09-18T00:00",
    "EndTime": "2026-09-24T00:00"
  },
  {
    "Title": "Allstate Info Session",
    "Description": "Allstate will be coming to present a company overview as well as their employment opportunities.",
    "Location": "EH 4096",
    "Date": "September 21",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-09-21T18:00",
    "EndTime": "2026-09-21T19:00"
  },
  {
    "Title": "Mercer / Marsh Info Session",
    "Description": "Mercer / Marsh will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "EH 4096",
    "Date": "September 21",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-09-21T19:00",
    "EndTime": "2026-09-21T20:00"
  },
  {
    "Title": "Allianz Info Session",
    "Description": "Allianz will be coming to present a company overview as well as their employment opportunities.",
    "Location": "EH 1360",
    "Date": "September 22",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-22T18:00",
    "EndTime": "2026-09-22T19:00"
  },
  {
    "Title": "Cigna Info Session",
    "Description": "Cigna will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "EH 1360",
    "Date": "September 22",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-22T19:00",
    "EndTime": "2026-09-22T20:00"
  },
  {
    "Title": "Milliman Info Session",
    "Description": "Milliman will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "EH 1372",
    "Date": "September 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-23T18:00",
    "EndTime": "2026-09-23T19:30"
  },
  {
    "Title": "Pre Career Fair Chat",
    "Description": "Come get your last minute questions about the career fair answered. We will have a table in the math atrium, and feel free to stop by anytime with questions!",
    "Location": "Math Atrium",
    "Date": "September 24",
    "StartTimeStr": "9:00",
    "EndTimeStr": "11:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-24T09:00",
    "EndTime": "2026-09-24T11:00"
  },
  {
    "Title": "Actuarial Career Expo",
    "Description": "",
    "Location": "Michigan League, 911 N University Ave, Ann Arbor, MI 48109, USA",
    "Date": "September 24",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-24T12:00",
    "EndTime": "2026-09-24T15:00"
  },
  {
    "Title": "Post Career Fair Mixer",
    "Description": "",
    "Location": "",
    "Date": "September 25",
    "StartTimeStr": "8:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-09-25T20:00",
    "EndTime": "2026-09-26T00:00"
  },
  {
    "Title": "SAM Recess",
    "Description": "Come join us in the Law Quad to unwind and enjoy some fun outdoor activities. It will be a great opportunity to meet other SAM members in a casual setting.",
    "Location": "Law Quadrangle, 625 S State St, Ann Arbor, MI 48109, USA",
    "Date": "September 27",
    "StartTimeStr": "11:00",
    "EndTimeStr": "2:00",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2026-09-27T11:00",
    "EndTime": "2026-09-27T14:00"
  },
  {
    "Title": "Case Study and Second Round Interview Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 30",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-30T18:00",
    "EndTime": "2026-09-30T19:00"
  },
  {
    "Title": "Mentorship Program Interest Form Due",
    "Description": "",
    "Location": "",
    "Date": "October 2",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-02T00:00",
    "EndTime": "2026-10-03T00:00"
  },
  {
    "Title": "SAM Fall Bonding",
    "Description": "",
    "Location": "",
    "Date": "October 2",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-02T18:00",
    "EndTime": "2026-10-02T20:00"
  },
  {
    "Title": "Mentorship Preference Forms Due",
    "Description": "",
    "Location": "",
    "Date": "October 15",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-10-15T00:00",
    "EndTime": "2026-10-16T00:00"
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
        <div class="bg-white rounded-lg shadow border p-6 flex flex-col justify-start space-y-3 text-center mt-8">
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
