// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Festifall!",
    "Description": "Our table is located in Ingalls Mall on the side of the Michigan League. Come stop by to learn more about SAM and get some swag!",
    "Location": "Central Campus Table F30",
    "Date": "August 28",
    "StartTimeStr": "2:30",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-08-28T14:30",
    "EndTime": "2024-08-28T17:00"
  },
  {
    "Title": "Learn S'more about SAM",
    "Description": "Come to our bonfire to learn all about the SAM events and enjoy some smores! RSVP <a target =_blank href=\"https://forms.gle/gpomba8dYGWt6zBd9\">here</a>!",
    "Location": "319 Catherine St",
    "Date": "September 2",
    "StartTimeStr": "8:00",
    "EndTimeStr": "9:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-09-02T20:00",
    "EndTime": "2024-09-02T21:30"
  },
  {
    "Title": "Mass Meeting",
    "Description": "Learn all about SAM and our fall semester events and opportunities! RSVP <a target =_blank href=\"https://forms.gle/gsZqEUSZVrtKGjHZ7\">here</a>!",
    "Location": "East Hall 4448",
    "Date": "September 3",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-09-03T19:00",
    "EndTime": "2024-09-03T20:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "Introduction to the actuarial profession and information about SAM. Overview of the actuarial curriculum, actuarial scholarships, and advice for underclassmen/new actuaries. RSVP <a target =_blank href=\"https://forms.gle/7qBRQLHaejfiWSveA\">here</a>!",
    "Location": "East Hall 4448",
    "Date": "September 3",
    "StartTimeStr": "8:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-09-03T20:00",
    "EndTime": "2024-09-03T20:30"
  },
  {
    "Title": "Resume Office Hours",
    "Description": "Sign up <a target =_blank href=\"https://docs.google.com/spreadsheets/d/1g2e2xZZrTRzsLXuPAFz__1m2iJgAxD-5OyMN5utgvno/edit?gid=1953096505#gid=1953096505\">here</a> to have your resume reviewed one-on-one with a board member.",
    "Location": "Math Atrium, or coordinate with your reviewer!",
    "Date": "September 4",
    "StartTimeStr": "9:00",
    "EndTimeStr": "Tuesday, September 10, 6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-04T00:00",
    "EndTime": "2024-09-11T00:00"
  },
  {
    "Title": "Drop-in Headshots",
    "Description": "Get your professional headshot taken; free for dues paying members and $5 for anyone else.",
    "Location": "Blau",
    "Date": "September 4",
    "StartTimeStr": "4:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-04T16:00",
    "EndTime": "2024-09-04T18:00"
  },
  {
    "Title": "BCBSM Actuarial and Underwriting Open House",
    "Description": "Join <a target =_blank href=\"https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3Ameeting_Zjk1ZTg4MjUtZTZkMS00MzhiLThlYzQtMDg4Zjc4MWYwZTIz%40thread.v2%2F0%3Fcontext%3D%257b%2522Tid%2522%253a%25226f56d3fa-5682-4261-b169-bc0d615da17c%2522%252c%2522Oid%2522%253a%2522f1539ded-76bd-432e-b04f-381c6673bb20%2522%257d%26anon%3Dtrue&amp;type=meetup-join&amp;deeplinkId=393fc11f-cd1c-48ff-a3dc-1bc56a528585&amp;directDl=true&amp;msLaunch=true&amp;enableMobilePage=true&amp;suppressPrompt=true\">here</a>!<br>Meeting ID: 210 555 944 113 <br>Passcode: SZrScY",
    "Location": "Virtual",
    "Date": "September 5",
    "StartTimeStr": "2:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-05T14:00",
    "EndTime": "2024-09-05T15:00"
  },
  {
    "Title": "Resume Workshop 2",
    "Description": "The resume workshop will go over each section of the resume in detail with insight from board members to help prepare to submit resumes for the career fair. RSVP <a target =_blank href=\"https://forms.gle/CeoFeGEuL8NxDvbJ7\">here</a>!",
    "Location": "East Hall 4096",
    "Date": "September 5",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-05T18:00",
    "EndTime": "2024-09-05T19:00"
  },
  {
    "Title": "Interview Workshop",
    "Description": "Come to learn about what makes a successful performance in a professional interview! Presenters will go over how to prepare for the interview beforehand, the types of questions to expect, how to structure one's answers, and post-interview etiquette. RSVP <a target =_blank href=\"https://forms.gle/Ts411tTHSrV3NCiB6\">here</a>!",
    "Location": "East Hall 4096",
    "Date": "September 5",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-05T19:00",
    "EndTime": "2024-09-05T20:00"
  },
  {
    "Title": "MassMutual Ascend Info Session",
    "Description": "Come learn more about MassMutual Ascend! We will have having a watch party in a classroom to watch the virtual session. RSVP <a target =_blank href=\"https://forms.gle/fDzDPtXNS6MCREfF9\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 9",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-09-09T17:00",
    "EndTime": "2024-09-09T18:00"
  },
  {
    "Title": "Aon Info Session",
    "Description": "Come learn more about Aon, and get some free food! RSVP <a target =_blank href=\"https://forms.gle/EtPXYqyMZG4J8WbN9\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 10",
    "StartTimeStr": "5:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-09-10T17:00",
    "EndTime": "2024-09-10T19:00"
  },
  {
    "Title": "International Students Career Workshop",
    "Description": "",
    "Location": "East Hall 3096",
    "Date": "September 10",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-09-10T19:00",
    "EndTime": "2024-09-10T20:00"
  },
  {
    "Title": "Auto Owners Info Session",
    "Description": "Come learn more about Auto Owners, and get some free food! RSVP <a target =_blank href=\"https://forms.gle/NF8WRuAMjLfwweyPA\" target=\"_blank\">here</a>!",
    "Location": "East Hall 2866",
    "Date": "September 11",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-11T17:30",
    "EndTime": "2024-09-11T18:30"
  },
  {
    "Title": "Mock Interviews",
    "Description": "Math atrium, or schedule with your interviewer!",
    "Location": "",
    "Date": "September 12",
    "StartTimeStr": "9:00",
    "EndTimeStr": "Wednesday, September 18, 6:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-12T00:00",
    "EndTime": "2024-09-19T00:00"
  },
  {
    "Title": "UnitedHealth Group Info Session",
    "Description": "Come learn more about UnitedHealth Group! Includes both Optum (consulting) and UnitedHealth (insurance). RSVP <a target =_blank href=\"https://forms.gle/Kq4Pz2r5zuDPE7m86\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 12",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-12T17:00",
    "EndTime": "2024-09-12T18:00"
  },
  {
    "Title": "Cigna Info Session",
    "Description": "Come learn more about Cigna, and get some free food! We will be hosting a watch party with food in a classroom to watch the virtual session. RSVP <a target =_blank href=\"https://forms.gle/FYpUsGKV65uv6nFw5\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 12",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-12T18:00",
    "EndTime": "2024-09-12T19:00"
  },
  {
    "Title": "CareSource Info Session",
    "Description": "Come learn more about CareSource, and get some free food! RSVP <a target =_blank href=\"https://forms.gle/RbtmtuR7XbZXBBLH9\" target=\"_blank\">here</a>!",
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
    "Description": "Come learn more about Milliman! RSVP <a target =_blank href=\"https://forms.gle/9FG2W7U5CiLkN9NC6\" target=\"_blank\">here</a>!",
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
    "Description": "Come learn more about Mercer, and get some free food! RSVP <a target =_blank href=\"https://forms.gle/MYtqv5jteHGBfrpm8\" target=\"_blank\">here</a>!",
    "Location": "East Hall 3096",
    "Date": "September 18",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-18T18:00",
    "EndTime": "2024-09-18T19:00"
  },
  {
    "Title": "Actuarial Career Expo",
    "Description": "",
    "Location": "",
    "Date": "September 19",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-19T12:00",
    "EndTime": "2024-09-19T15:00"
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