// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.


let SAMevents = [
  {
    "Title": "Learn S’more About SAM",
    "Description": "Kick off the semester with a fun bonfire intended to create a space for more in-depth questions about SAM. Anyone is welcome, and underclassmen are highly encouraged to attend. There will be s’mores!<br><br>RSVP <a href=\"https://forms.gle/UNNfgxX6hrRSsKoG9\" target=\"_blank\">here</a>!",
    "Location": "1211 White St, Ann Arbor, MI 48104, USA",
    "Date": "August 28",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-08-28T19:30",
    "EndTime": "2025-08-28T21:30"
  },
  {
    "Title": "Mass Meeting",
    "Description": "RSVP <a href=\"https://forms.gle/7hAwbpigLrhougxC7\" target=\"_blank\">here</a>!",
    "Location": "East Hall-1360-MathAud",
    "Date": "September 2",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-02T19:00",
    "EndTime": "2025-09-02T20:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "RSVP <a href=\"https://forms.gle/gsXGkvX4kK9v9zR76\" target=\"_blank\">here</a>!",
    "Location": "East Hall-1360-MathAud",
    "Date": "September 2",
    "StartTimeStr": "8:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-02T20:00",
    "EndTime": "2025-09-02T20:30"
  },
  {
    "Title": "Resume Workshop #1",
    "Description": "RSVP <a href=\"https://forms.gle/rvCiX2wRUrFHwrRd9\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 3",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-03T18:00",
    "EndTime": "2025-09-03T18:30"
  },
  {
    "Title": "International Student Careers Workshop",
    "Description": "RSVP <a href=\"https://forms.gle/sqMYNvQx3kvvafMJA\" target=\"_blank\">here</a>!",
    "Location": "EH 3096",
    "Date": "September 3",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-03T18:30",
    "EndTime": "2025-09-03T19:30"
  },
  {
    "Title": "Resume Workshop #2",
    "Description": "RSVP <a href=\"https://forms.gle/DdQspAHAJti3nsK19\" target=\"_blank\">here</a>!",
    "Location": "EH 3096",
    "Date": "September 4",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-09-04T18:00",
    "EndTime": "2025-09-04T18:30"
  },
  {
    "Title": "Career Fair Interviews Workshop",
    "Description": "RSVP <a href=\"https://forms.gle/9dtjBsNKYfMvd4zw5\" target=\"_blank\">here</a>!",
    "Location": "EH 3096",
    "Date": "September 4",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-09-04T18:30",
    "EndTime": "2025-09-04T19:00"
  },
  {
    "Title": "Resume Office Hours",
    "Description": "",
    "Location": "",
    "Date": "September 5",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2025-09-05T00:00",
    "EndTime": "2025-09-11T00:00"
  },
  {
    "Title": "CareSource Info Session",
    "Description": "CareSource will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 8",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-09-08T17:00",
    "EndTime": "2025-09-08T18:00"
  },
  {
    "Title": "MassMutual Ascend Info Session",
    "Description": "MassMutual Ascend will be coming to present a company overview as well as their employment opportunities.",
    "Location": "",
    "Date": "September 8",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-09-08T18:00",
    "EndTime": "2025-09-08T19:00"
  },
  {
    "Title": "Auto-Owners Info Session",
    "Description": "Auto-Owners will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 9",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-09T17:30",
    "EndTime": "2025-09-09T18:30"
  },
  {
    "Title": "Allianz Life Info Session",
    "Description": "Allianz Life will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 9",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-09T18:30",
    "EndTime": "2025-09-09T19:30"
  },
  {
    "Title": "Resume Book Due",
    "Description": "By the end of day 11:59pm",
    "Location": "",
    "Date": "September 10",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-10T00:00",
    "EndTime": "2025-09-11T00:00"
  },
  {
    "Title": "CNA Info Session",
    "Description": "CNA will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 10",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-10T17:30",
    "EndTime": "2025-09-10T18:30"
  },
  {
    "Title": "Nationwide Info Session",
    "Description": "Nationwide will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 10",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-10T18:30",
    "EndTime": "2025-09-10T19:30"
  },
  {
    "Title": "Aon Info Session",
    "Description": "Aon will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 11",
    "StartTimeStr": "5:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-09-11T17:30",
    "EndTime": "2025-09-11T19:00"
  },
  {
    "Title": "Mock Interviews",
    "Description": "",
    "Location": "",
    "Date": "September 12",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2025-09-12T00:00",
    "EndTime": "2025-09-17T00:00"
  },
  {
    "Title": "Underclassmen Bonding/Intro to SAM Event",
    "Description": "",
    "Location": "",
    "Date": "September 12",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2025-09-12T18:30",
    "EndTime": "2025-09-12T20:00"
  },
  {
    "Title": "Cigna Info Session",
    "Description": "Cigna will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 15",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-09-15T17:00",
    "EndTime": "2025-09-15T18:00"
  },
  {
    "Title": "Hanover Insurance Group Info Session",
    "Description": "Hanover will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 15",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-09-15T18:00",
    "EndTime": "2025-09-15T19:00"
  },
  {
    "Title": "Milliman Info Session",
    "Description": "Milliman will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 16",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-16T18:00",
    "EndTime": "2025-09-16T19:30"
  },
  {
    "Title": "EY Info Session",
    "Description": "EY will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 17",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2025-09-17T17:00",
    "EndTime": "2025-09-17T18:00"
  },
  {
    "Title": "Pre-Career Fair Chat",
    "Description": "",
    "Location": "",
    "Date": "September 18",
    "StartTimeStr": "9:00",
    "EndTimeStr": "11:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-09-18T09:00",
    "EndTime": "2025-09-18T11:00"
  },
  {
    "Title": "Actuarial Career Expo",
    "Description": "The 10th Annual Career Expo will be held on Thursday, September 18th from 12 to 3 pm in the Michigan League. There will be [TBD] employers there looking to hire interns and full time actuaries. Come prepared with printed resumes and professional dress. This is a great opportunity to network with some of the best actuarial employers and make new connections. Interviews will be held at the University Career Center on Friday, September 19th.",
    "Location": "Michigan League - Hussey and Vandenburg Rooms",
    "Date": "September 18",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2025-09-18T12:00",
    "EndTime": "2025-09-18T15:00"
  },
  {
    "Title": "Post Career Fair Mixer",
    "Description": "",
    "Location": "1211 White St, Ann Arbor, MI 48104, USA",
    "Date": "September 19",
    "StartTimeStr": "8:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2025-09-19T20:00",
    "EndTime": "2025-09-20T00:00"
  },
  {
    "Title": "Case Study Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2025-09-23T18:00",
    "EndTime": "2025-09-23T19:00"
  },
  {
    "Title": "SAM Game Night",
    "Description": "",
    "Location": "",
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
    "Date": "October 20",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2025-10-20T18:00",
    "EndTime": "2025-10-20T20:00"
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
  // Optionally style any "here" in descriptions
  desc = desc.replace(/here/g, '<span class="text-um-blue font-bold underline">here</span>');
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
                     RSVP <span class="text-um-blue font-bold underline">here</span>
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
