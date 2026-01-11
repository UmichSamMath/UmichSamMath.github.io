// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Winterfest 1",
    "Description": "",
    "Location": "Michigan Union, 530 S State St, Ann Arbor, MI 48109, USA",
    "Date": "January 12",
    "StartTimeStr": "4:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-01-12T16:00",
    "EndTime": "2026-01-12T19:00"
  },
  {
    "Title": "Winterfest 2",
    "Description": "",
    "Location": "Michigan Union, 530 S State St, Ann Arbor, MI 48109, USA",
    "Date": "January 13",
    "StartTimeStr": "4:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-01-13T16:00",
    "EndTime": "2026-01-13T19:00"
  },
  {
    "Title": "SAM Project Team Introduction",
    "Description": "Join us for the introductory meeting of SAM's first ever project team! This is a great opportunity to bolster your resume and strengthen your technical skills in a collaborative learning environment. Work alongside other members on a semester-long project to build real-world experience.",
    "Location": "EH 1866",
    "Date": "January 14",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-01-14T18:00",
    "EndTime": "2026-01-14T19:00"
  },
  {
    "Title": "Winter Mass Meeting",
    "Description": "Attend to learn all about SAM, the actuarial profession, and our upcoming winter semester events!",
    "Location": "EH 1086",
    "Date": "January 20",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-01-20T18:00",
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
    "Description": "Pair up with your mentor/mentee and compete in our annual mentorship Euchre tournament!",
    "Location": "Weiser 110",
    "Date": "January 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-01-29T19:00",
    "EndTime": "2026-01-29T21:00"
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
