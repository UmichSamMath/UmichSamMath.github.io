// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Excel Basics Workshop",
    "Description": "Learn the basics of excel in preparation for an actuarial internship or full-time job! There will be computer workstations at each desk, but you can also work on your personal laptop or MacBook!  RSVP <a target = _blank href=\"https://forms.gle/9DWX1JeJyxfeq1sp6\">here</a>!",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "February 8",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-08T18:30",
    "EndTime": "2024-02-08T20:00"
  },
  {
    "Title": "Advanced Excel Workshop",
    "Description": "A hands-on approach to learning some more difficult Excel concepts. This workshop will include a quick overview of helpful Excel skills and then a “case study” in which you will apply them! RSVP <a target = _blank href=\"https://forms.gle/cFGDvdeW5XKjE3FK8\">here</a>!",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "February 12",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-02-12T18:30",
    "EndTime": "2024-02-12T20:00"
  },
  {
    "Title": "SQL Workshop",
    "Description": "Come learn the basics of SQL, a coding language that you will use as an actuary. We will go through a presentation and then have time to practice coding in this language. This is a great way to prepare for your internship or full time job!  RSVP <a target = _blank href=\"https://forms.gle/9p7CNu2xCr4vTmr57\">here</a>!",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "February 13",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-02-13T18:30",
    "EndTime": "2024-02-13T20:00"
  },
  {
    "Title": "Speaker Series Presentation - Prof. Kausch",
    "Description": "Professor Kausch will be giving a presentation on “The Actuarial Profession”. Prof Kausch earned his Ph.D. in Mathematics from the University of Michigan in 1993. He is a Fellow of the Society of Actuaries (FSA) and the Conference of Consulting Actuaries (FCA), a Member of the American Academy of Actuaries (MAAA), and an Enrolled Actuary (EA). He served as the Chief Actuary for Gabriel, Roeder, Smith &amp; Company from 2006 until his retirement in 2022. Gabriel, Roeder Smith &amp; Company is the largest actuarial consulting firm dedicated to the public sector. Dr. Kausch taught here between 2002 and 2011 and has since returned to teaching here. He hopes to share knowledge on the actuarial profession with us students. RSVP <a target = _blank href=\"https://forms.gle/kihos34fPVUJTwS96\">here</a>!",
    "Location": "East Hall 2866",
    "Date": "February 15",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-15T18:30",
    "EndTime": "2024-02-15T20:00"
  },
  {
    "Title": "Communications Workshop",
    "Description": "This workshop will allow allow you to practice communicating in a public setting. It will be low-stress, fun, and helpful for anyone wanting to practice their speaking skills! RSVP <a target = _blank href=\"https://forms.gle/wCtP9Fz7qjWjvzL28\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "February 19",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-02-19T18:30",
    "EndTime": "2024-02-19T20:00"
  },
  {
    "Title": "R Workshop",
    "Description": "R is an important coding language used by many actuaries. Come to this event to learn the basics of R and practice some coding! RSVP <a target = _blank href=\"https://forms.gle/HpHWZbU2ZnwkdeyV7\">here</a>!",
    "Location": "East Hall B737",
    "Date": "February 21",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-02-21T18:30",
    "EndTime": "2024-02-21T20:00"
  },
  {
    "Title": "Python Workshop",
    "Description": "",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "March 5",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-03-05T18:30",
    "EndTime": "2024-03-05T20:00"
  },
  {
    "Title": "Second Semester DEI Event",
    "Description": "",
    "Location": "East Hall 1360",
    "Date": "March 6",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-03-06T18:30",
    "EndTime": "2024-03-06T20:00"
  },
  {
    "Title": "Mentorship Movie Night & Popcorn Bar!",
    "Description": "Take a break from classes and studying to hang out and watch a movie with the rest of SAM mentorship! There will be a popcorn bar to snack on, and some games will be played in the back too. RSVP <a target = _blank href=\"https://forms.gle/a3BjaGLwBZKHVu2H9\">here</a>!",
    "Location": "East Hall 1360",
    "Date": "March 7",
    "StartTimeStr": "8:00",
    "EndTimeStr": "10:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-07T20:00",
    "EndTime": "2024-03-07T22:00"
  },
  {
    "Title": "Cigna Presentation",
    "Description": "",
    "Location": "",
    "Date": "March 12",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-03-12T18:00",
    "EndTime": "2024-03-12T19:00"
  },
  {
    "Title": "VBA Workshop",
    "Description": "",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "March 14",
    "StartTimeStr": "5:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-14T18:30",
    "EndTime": "2024-03-14T20:00"
  },
  {
    "Title": "Board Elections Workshop",
    "Description": "",
    "Location": "",
    "Date": "March 26",
    "StartTimeStr": "5:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-03-26T18:30",
    "EndTime": "2024-03-26T20:00"
  },
  {
    "Title": "Annual Euchre Tournament!",
    "Description": "You know what time it is, join us to for a night of euchre and fun!! Mentors and mentees are heavily encouraged to be a team, but anyone else can join and make their own teams! If you don’t have a teammate, still sign up and we’ll pair you up day of. Prizes will be given out to the winners, and pizza will be provided! RSVP <a target = _blank href=\"https://forms.gle/J54WT1WFLYq3ZSzu5\">here</a>!",
    "Location": "USB 1250",
    "Date": "March 28",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-28T19:00",
    "EndTime": "2024-03-28T20:30"
  },
  {
    "Title": "Internship Panel",
    "Description": "",
    "Location": "",
    "Date": "April 2",
    "StartTimeStr": "5:30",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-04-02T18:30",
    "EndTime": "2024-04-02T20:00"
  },
  {
    "Title": "Alumni Day",
    "Description": "",
    "Location": "East Hall 3rd Floor Terrace (Psych Atrium)",
    "Date": "April 6",
    "StartTimeStr": "12:00",
    "EndTimeStr": "4:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2024-04-06T13:00",
    "EndTime": "2024-04-06T17:00"
  },
  {
    "Title": "Board Elections",
    "Description": "",
    "Location": "",
    "Date": "April 10",
    "StartTimeStr": "5:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-04-10T18:00",
    "EndTime": "2024-04-10T20:00"
  },
  {
    "Title": "Senior Bar Crawl",
    "Description": "",
    "Location": "",
    "Date": "April 13",
    "StartTimeStr": "7:00",
    "EndTimeStr": "10:59",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2024-04-13T20:00",
    "EndTime": "2024-04-13T23:59"
  },
  {
    "Title": "Senior Send Off :')",
    "Description": "",
    "Location": "",
    "Date": "April 20",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2024-04-20T13:00",
    "EndTime": "2024-04-20T16:00"
  }
]

function populateEvents() {
  var resultDiv = document.getElementById("calendar");
  var currDate = new Date(); // gets the current date

  SAMevents.forEach(c => {
    var startShowDate = new Date(c.StartTime);
    startShowDate.setDate(startShowDate.getDate() - 7);

    var endShowDate = new Date(c.EndTime);
    if (c.Location === "") {
      c.Location = "Location To Be Determined";
    }

    if (c.Description === "") {
      c.Description = "More information coming soon!";
    }

    if (startShowDate <= currDate && currDate <= endShowDate) {
      resultDiv.innerHTML += `
        <div class="item">
          <p class="event-title">${c.Title}</p>
          <p>${c.DayofWeek}, ${c.Date}, ${c.StartTimeStr} - ${c.EndTimeStr}${c.AmPm}</p>
          <p>${c.Location}</p>
          <button type="button" class="collapsible">See More!</button>
          <div class="hidden-text">
            <p>${c.Description}</p>
          </div>
        </div>
    `;
    }
  });
}

populateEvents();