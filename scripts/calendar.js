// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Everything Actuarial Workshop",
    "Description": "The Everything Actuarial <u></u>Workshop will cover exam preparation resources and everything you need to know about a career in the actuarial field! Come if you want to learn more about this path and how to succeed!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=9055bca3e2&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 3866",
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
    "Description": "Be sure to fill out your preference for mentor/mentee by Tuesday!<br><br>FOR MENTORS: <a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=a70151a571&amp;e=63c96118a3\" target=\"_blank\"><u>Mentee Preference Form</u></a><br>FOR MENTEES: <a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=f76e9eff9a&amp;e=63c96118a3\" target=\"_blank\"><u>Mentor Preference Form</u></a>",
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
    "Title": "Course Planning Workshop",
    "Description": "The course planning workshop is highly encouraged for underclassmen! It will help you plan out your 4 years at college as well as get tips on when to take actuarial exams! Great resources will be provided!<br><br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=24025f9cba&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP HERE</u></a>",
    "Location": "EH 2866",
    "Date": "October 28",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-10-28T19:00",
    "EndTime": "2025-10-28T20:00"
  },
  {
    "Title": "TIA Workshop",
    "Description": "",
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
    "Description": "",
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
