// Automatically displays upcoming events when they are within a week of occurring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import".
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON.

let SAMevents = [
  {
    "Title": "Senior Bar Crawl",
    "Description": "5:30 PM: Bill's Beer Garden<br>7:00 PM: BABS Underground<br>8:00 PM: Good Time Charley's<br>9:30 PM: Garage Bar<br>11:00 PM: Rick’s American Cafe<br>We will update the <a href=\"https://groupme.com/join_group/114270822/lNhxScQS\"><u>GroupMe</u></a> as we move locations. Please keep in mind that all of these locations are 21+, so remember to bring your ID!<br><br>RSVP <a href=\"https://forms.gle/Hb8PfJN8iw1cumja8\">Here</a>!",
    "Location": "Bill’s Beer Garden",
    "Date": "April 16",
    "StartTimeStr": "5:30",
    "EndTimeStr": "11:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2026-04-16T17:30",
    "EndTime": "2026-04-16T23:00"
  },
  {
    "Title": "Project Team Showcase",
    "Description": "Check out the SAM Project Team showcase table and see the amazing work they've done this year!",
    "Location": "",
    "Date": "April 17",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2026-04-17T18:00",
    "EndTime": "2026-04-17T20:00"
  },
  {
    "Title": "Senior Send Off Darty",
    "Description": "Join us to send off our seniors with our last mixer of the year! Food and drinks will be provided (vegetarian options available)<br><a href=\"https://umich.us20.list-manage.com/track/click?u=60f792596b0f2eaf62728bf12&amp;id=9232bd1512&amp;e=63c96118a3\" target=\"_blank\"><u>RSVP Here</u></a>",
    "Location": "1211 White St",
    "Date": "April 18",
    "StartTimeStr": "12:00",
    "EndTimeStr": "2:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2026-04-18T12:00",
    "EndTime": "2026-04-18T14:00"
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
