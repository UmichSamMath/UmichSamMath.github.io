// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Case Study and Second Round Interview Workshop",
    "Description": "RSVP: <a href=\"https://forms.gle/qpQ9hmct3nfBqhbE7\"><u>https://forms.gle/qpQ9hmct3nfBqhbE7</u></a>",
    "Location": "EH 4096",
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
    "Location": "EH 3096",
    "Date": "October 2",
    "StartTimeStr": "4:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-02T16:00",
    "EndTime": "2026-10-02T18:00"
  },
  {
    "Title": "Mentorship Mingling & Kickoff",
    "Description": "RSVP: <a href=\"https://forms.gle/Apb6ZU954t4nUqsY7\"><u>https://forms.gle/Apb6ZU954t4nUqsY7</u></a>",
    "Location": "USB 1230",
    "Date": "October 6",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-10-06T19:00",
    "EndTime": "2026-10-06T20:30"
  },
  {
    "Title": "Mentorship Mixer 1",
    "Description": "RSVP: <a href=\"https://forms.gle/MSzQEkdhLyAGokeU9\"><u>https://forms.gle/MSzQEkdhLyAGokeU9</u></a>",
    "Location": "",
    "Date": "October 9",
    "StartTimeStr": "8:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-10-09T20:00",
    "EndTime": "2026-10-10T00:00"
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
  },
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
