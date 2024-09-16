// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Mock Interviews",
    "Description": "Sign up <a target=_blank href = \"https://docs.google.com/spreadsheets/d/1IOtfVy2MyWSNhAnZoFsih25-Q29nY83kqQbPoB_UnEc/edit?gid=1953096505#gid=1953096505\"> here</a> for a one-on-one mock interview with a board member!",
    "Location": "Math Atrium, or coordinate with your interviewer!",
    "Date": "September 12",
    "StartTimeStr": "9:00",
    "EndTimeStr": "Wednesday, September 18, 6:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-12T00:00",
    "EndTime": "2024-09-19T00:00"
  },
  {
    "Title": "CareSource Info Session",
    "Description": "Come learn more about CareSource, and get some free food! RSVP <a target=_blank href=\"https://forms.gle/RbtmtuR7XbZXBBLH9\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 16",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-09-16T17:30",
    "EndTime": "2024-09-16T18:30"
  },
  {
    "Title": "Milliman Info Session",
    "Description": "Come learn more about Milliman! There will be representatives from the CMH Health, Life/FRM, and Indy Health practices. They will provide pizza and drinks as well!RSVP <a target=_blank href=\"https://forms.gle/9FG2W7U5CiLkN9NC6\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 17",
    "StartTimeStr": "6:30",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-09-17T18:30",
    "EndTime": "2024-09-17T19:30"
  },
  {
    "Title": "Mercer Info Session",
    "Description": "Come learn more about Mercer, and get some free food! RSVP <a target=_blank href=\"https://forms.gle/MYtqv5jteHGBfrpm8\" target=\"_blank\">here</a>!",
    "Location": "East Hall 1866",
    "Date": "September 18",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-18T18:00",
    "EndTime": "2024-09-18T19:00"
  },
  {
    "Title": "Pre-Career Fair Chat",
    "Description": "Come get your last minute questions about the career fair answered. We will have a table in the math atrium, and feel free to stop by anytime with questions! No RSVP required.",
    "Location": "Math Atrium",
    "Date": "September 19",
    "StartTimeStr": "9:00",
    "EndTimeStr": "11:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-19T09:00",
    "EndTime": "2024-09-19T11:00"
  },
  {
    "Title": "Actuarial Career Expo",
    "Description": "The 9th Annual Career Expo will be held on Thursday, September 19th from 12 to 3 pm in the Michigan League. There will be 26 employers there looking to hire interns and full time actuaries. Come prepared with printed resumes and professional dress. This is a great opportunity to network with some of the best actuarial employers and make new connections. Interviews will be held at the University Career Center on Friday, September 20th.",
    "Location": "Michigan League - Hussey and Vandenburg Rooms",
    "Date": "September 19",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-19T12:00",
    "EndTime": "2024-09-19T15:00"
  },
  {
    "Title": "Post-Career Fair Mixer",
    "Description": "RSVP <a target=_blank href=\"https://forms.gle/UnrE1d7EorjMRBjs5\">here</a>!",
    "Location": "319 Catherine St.",
    "Date": "September 20",
    "StartTimeStr": "8:00",
    "EndTimeStr": "11:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2024-09-20T20:00",
    "EndTime": "2024-09-20T23:00"
  },
  {
    "Title": "Post-Career Fair Recess",
    "Description": "",
    "Location": "Law Quad",
    "Date": "September 22",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2024-09-22T12:00",
    "EndTime": "2024-09-22T15:00"
  },
  {
    "Title": "Hanover Re Info Session",
    "Description": "Come learn more about Hanover Re’s internship program! RSVP <a target=_blank href=\"https://forms.gle/eLdqqkmzsH58YBvs9\">here</a>!",
    "Location": "Virtual",
    "Date": "September 25",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-25T18:00",
    "EndTime": "2024-09-25T19:00"
  },
  {
    "Title": "Second Round Interview/Case Study Workshop",
    "Description": "Learn more about how to prepare for second round interviews and case studies. We will cover questions you could be asked as well as how the interview process typically works. RSVP <a target=_blank href=\"https://forms.gle/SdoJM5DAAoj6bw7Q6\">here</a>!",
    "Location": "East Hall 1866",
    "Date": "September 26",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-26T18:00",
    "EndTime": "2024-09-26T19:00"
  },
  {
    "Title": "Mentorship Mixer",
    "Description": "",
    "Location": "319 Catherine St.",
    "Date": "October 25",
    "StartTimeStr": "8:00",
    "EndTimeStr": "11:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2024-10-25T20:00",
    "EndTime": "2024-10-25T23:00"
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