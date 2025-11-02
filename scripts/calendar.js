// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "TIA Workshop",
    "Description": "A representative from TIA will virtually present about valuable exam resources and online course access. Come to learn more about TIA and their discounts! There will also be food and merch! <br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=aa7aa708f1&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "",
    "Date": "November 3",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-11-03T19:00",
    "EndTime": "2025-11-03T20:00"
  },
  {
    "Title": "Intro to the CAS Workshop",
    "Description": "Are you interested in the CAS or unsure about which path you want to go down? Come to the Intro to the CAS Presentation to learn more about property &amp; casualty insurance and the Casualty Actuarial Society (CAS).<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=c06150399f&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "",
    "Date": "November 6",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-11-06T18:00",
    "EndTime": "2025-11-06T19:00"
  },
  {
    "Title": "Workshop on Imposter Syndrome",
    "Description": "",
    "Location": "",
    "Date": "November 11",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-11-11T18:00",
    "EndTime": "2025-11-11T19:00"
  },
  {
    "Title": "Advanced Actuarial Industry Workshop",
    "Description": "Come to this workshop for an in-depth look at the actuarial industry, job market, and career pathways. We’ll cover everything from work deliverables and compensation design to emerging trends like AI and how you can stay ahead as a young professional!",
    "Location": "",
    "Date": "November 12",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-11-12T18:00",
    "EndTime": "2025-11-12T19:00"
  },
  {
    "Title": "Course Planning Workshop",
    "Description": "Tentative date",
    "Location": "",
    "Date": "November 19",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-11-19T18:00",
    "EndTime": "2025-11-19T19:30"
  },
  {
    "Title": "FM Workshop",
    "Description": "",
    "Location": "",
    "Date": "December 2",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-12-02T18:00",
    "EndTime": "2025-12-02T20:00"
  },
  {
    "Title": "Mentorship Cookie Decorating",
    "Description": "",
    "Location": "",
    "Date": "December 3",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-12-03T18:00",
    "EndTime": "2025-12-03T19:00"
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
