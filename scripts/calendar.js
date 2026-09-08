// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Mass Meeting",
    "Description": "RSVP: <a href=\"https://forms.gle/uuVKp5MprBQpJ9Sk9\"><u>https://forms.gle/uuVKp5MprBQpJ9Sk9</u></a>",
    "Location": "EH 1360",
    "Date": "September 8",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-08T19:00",
    "EndTime": "2026-09-08T20:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "RSVP: <a href=\"https://forms.gle/cBRwDYNRNAFpQxnq8\"><u>https://forms.gle/cBRwDYNRNAFpQxnq8</u></a>",
    "Location": "EH 1360",
    "Date": "September 8",
    "StartTimeStr": "8:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-08T20:00",
    "EndTime": "2026-09-08T20:30"
  },
  {
    "Title": "Resume Workshop #1",
    "Description": "RSVP: <a href=\"https://forms.gle/fJYQDawFTvZpoUZ68\"><u>https://forms.gle/fJYQDawFTvZpoUZ68</u></a>",
    "Location": "EH 1068",
    "Date": "September 9",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-09T18:00",
    "EndTime": "2026-09-09T18:30"
  },
  {
    "Title": "Career Fair Interviews Workshop",
    "Description": "RSVP: <a href=\"https://forms.gle/tAbBd6PZTKs8cH6n6\"><u>https://forms.gle/tAbBd6PZTKs8cH6n6</u></a>",
    "Location": "EH 1068",
    "Date": "September 9",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-09T18:30",
    "EndTime": "2026-09-09T19:00"
  },
  {
    "Title": "Resume Workshop #2",
    "Description": "RSVP: <a href=\"https://forms.gle/YQWEYdDL8SUQpLm18\"><u>https://forms.gle/YQWEYdDL8SUQpLm18</u></a>",
    "Location": "EH 4096",
    "Date": "September 10",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-10T18:00",
    "EndTime": "2026-09-10T18:30"
  },
  {
    "Title": "International Student Careers Workshop - Pre Career Fair",
    "Description": "RSVP: <a href=\"https://forms.gle/YB36moyLqvi2hiaD8\"><u>https://forms.gle/YB36moyLqvi2hiaD8</u></a>",
    "Location": "EH 4096",
    "Date": "September 10",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-10T18:30",
    "EndTime": "2026-09-10T19:00"
  },
  {
    "Title": "Resume Office Hours",
    "Description": "Sign up sheet <a href=\"https://docs.google.com/spreadsheets/d/14X5jnxlE9Fw0ga-5mrfmH9S3-OrCBI1XB2id6IppZBQ/edit?usp=sharing\">here</a>!",
    "Location": "East Hall Atrium",
    "Date": "September 11",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2026-09-11T00:00",
    "EndTime": "2026-09-17T00:00"
  },
  {
    "Title": "Learn S’More About SAM",
    "Description": "Come to our bonfire tonight to learn more about SAM, meet other members, and enjoy some s'mores!<br>RSVP: <a href=\"https://forms.gle/ve2KhruF9kjFf8ZT7\"><u>https://forms.gle/ve2KhruF9kjFf8ZT7</u></a>",
    "Location": "411 N State St",
    "Date": "September 11",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:30",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-09-11T19:30",
    "EndTime": "2026-09-11T21:30"
  },
  {
    "Title": "Auto-Owners Info Session",
    "Description": "Auto-Owners will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 14",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-09-14T18:00",
    "EndTime": "2026-09-14T19:00"
  },
  {
    "Title": "Nationwide Info Session",
    "Description": "Nationwide will be coming to present a company overview as well as their employment opportunities.",
    "Location": "",
    "Date": "September 14",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2026-09-14T19:00",
    "EndTime": "2026-09-14T20:00"
  },
  {
    "Title": "CareSource Info Session",
    "Description": "Caresource will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
    "Date": "September 15",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-15T18:00",
    "EndTime": "2026-09-15T19:00"
  },
  {
    "Title": "EY Networking Dinner",
    "Description": "EY will be hosting a networking dinner at Sava’s. Please RSVP by Friday, 9/11!",
    "Location": "",
    "Date": "September 15",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-15T19:30",
    "EndTime": "2026-09-15T21:00"
  },
  {
    "Title": "Resume Book Due",
    "Description": "<a href=\"https://forms.gle/D595HFMjom8VGUjS9\"><u>https://forms.gle/D595HFMjom8VGUjS9</u></a>",
    "Location": "",
    "Date": "September 16",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-16T00:00",
    "EndTime": "2026-09-17T00:00"
  },
  {
    "Title": "AON Info Session",
    "Description": "Aon will be coming to present a company overview as well as their employment opportunities.",
    "Location": "",
    "Date": "September 16",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2026-09-16T18:00",
    "EndTime": "2026-09-16T19:30"
  },
  {
    "Title": "MassMutual Ascend Info Session",
    "Description": "MassMutual Ascend will be coming to present a company overview as well as their employment opportunities.",
    "Location": "",
    "Date": "September 17",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-17T18:00",
    "EndTime": "2026-09-17T19:00"
  },
  {
    "Title": "AIG Info Session",
    "Description": "AIG will be coming to present a company overview as well as their employment opportunities.",
    "Location": "",
    "Date": "September 17",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-09-17T19:00",
    "EndTime": "2026-09-17T20:00"
  },
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
    "Location": "",
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
    "Location": "",
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
    "Location": "",
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
    "Location": "",
    "Date": "September 22",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2026-09-22T19:00",
    "EndTime": "2026-09-22T20:00"
  },
  {
    "Title": "Milliman CMH Info Session",
    "Description": "Milliman will be coming to present a company overview as well as their employment opportunities. There will be food!",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
