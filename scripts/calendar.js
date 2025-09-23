// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "ACAE Actuarial Event",
    "Description": "This event is MANDATORY for all prospective Actuarial students and members of SAM, especially undeclared students. Professor Natarajan will be summarizing why we are a Center of Actuarial Intelligence. You will learn important information about our predecessors and program. Please make every effort to attend and celebrate with us. Dinner will be provided!<br><br>RSVP <a href=\"https://forms.gle/eNGx9PM4esuLE1YS7\">Here</a>!",
    "Location": "EH 1360",
    "Date": "September 24",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-24T18:00",
    "EndTime": "2025-09-24T19:30"
  },
  {
    "Title": "Hanover Insurance Group \"Former Intern and Early Career Panel",
    "Description": "Hanover Insurance Group is hosting a Summer 2026 Internship Overview and Former Intern Panel. This is a great way to learn about their recruitment process and hear from former students regarding their experience!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=56685f5766&amp;e=63c96118a3\" target=\"_blank\"><u>Register Here</u></a>!",
    "Location": "Microsoft Teams",
    "Date": "September 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-24T19:00",
    "EndTime": "2025-09-24T20:00"
  },
  {
    "Title": "SAM Recess",
    "Description": "",
    "Location": "Law Quad",
    "Date": "September 28",
    "StartTimeStr": "11:00",
    "EndTimeStr": "2:00",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2025-09-28T11:00",
    "EndTime": "2025-09-28T14:00"
  },
  {
    "Title": "SAM Game Night",
    "Description": "",
    "Location": "USB 1250",
    "Date": "October 1",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-10-01T18:00",
    "EndTime": "2025-10-01T20:00"
  },
  {
    "Title": "Mentorship Interest Form Due",
    "Description": "",
    "Location": "",
    "Date": "October 16",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-10-16T00:00",
    "EndTime": "2025-10-17T00:00"
  },
  {
    "Title": "Mentorship Pumpkin Painting",
    "Description": "",
    "Location": "",
    "Date": "October 16",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-10-16T18:00",
    "EndTime": "2025-10-16T19:00"
  },
  {
    "Title": "Mentorship Mingling/Kickoff!",
    "Description": "",
    "Location": "",
    "Date": "October 21",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-10-21T18:00",
    "EndTime": "2025-10-21T20:00"
  },
  {
    "Title": "Mentorship Mixer",
    "Description": "",
    "Location": "1211 White St, Ann Arbor, MI 48104, USA",
    "Date": "October 24",
    "StartTimeStr": "8:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2025-10-24T20:00",
    "EndTime": "2025-10-25T00:00"
  },
  {
    "Title": "Everything Actuarial Workshop",
    "Description": "",
    "Location": "",
    "Date": "October 27",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-10-27T18:00",
    "EndTime": "2025-10-27T19:30"
  },
  {
    "Title": "Mentorship Preference Forms Due",
    "Description": "",
    "Location": "",
    "Date": "October 28",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-10-28T00:00",
    "EndTime": "2025-10-29T00:00"
  },
  {
    "Title": "International Student Careers Workshop - Preparation for Internship/Work",
    "Description": "(tentative)",
    "Location": "",
    "Date": "November 6",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-11-06T19:00",
    "EndTime": "2025-11-06T20:00"
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
