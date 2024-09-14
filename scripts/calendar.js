// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
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
      "Title": "MassMutual Ascend Info Session",
      "Description": "Come learn more about MassMutual Ascend! We will be having a watch party in a classroom to watch the <a target =_blank href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTA2NjdlNzktYjU4Yi00YTMxLThmOGUtZDY3NDI4MWMwMDU2%40thread.v2/0?context=%7b%22Tid%22%3a%22725befda-1146-42f3-bdcc-910bd7b84340%22%2c%22Oid%22%3a%22a2341c43-5992-4a67-975e-b6a241017fe7%22%7d\">virtual session</a>. RSVP <a target =_blank href=\"https://forms.gle/fDzDPtXNS6MCREfF9\" target=\"_blank\">here</a>!",
      "Location": "East Hall 3096, or join link in description",
      "Date": "September 9",
      "StartTimeStr": "5:00",
      "EndTimeStr": "6:00",
      "AmPm": "PM",
      "DayofWeek": "Monday",
      "StartTime": "2024-09-09T17:00",
      "EndTime": "2024-09-09T18:00"
    },
    {
      "Title": "International Students Career Workshop",
      "Description": "This workshop covers all things related to recruitment, career, professional communication, work authorization, and presenting your best self as an international student!",
      "Location": "East Hall 1866",
      "Date": "September 9",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Monday",
      "StartTime": "2024-09-09T18:00",
      "EndTime": "2024-09-09T19:00"
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
      "Title": "Auto Owners Info Session",
      "Description": "Come learn more about Auto Owners, and get some free food! RSVP <a target =_blank href=\"https://forms.gle/NF8WRuAMjLfwweyPA\" target=\"_blank\">here</a>!",
      "Location": "East Hall 1866",
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
      "Description": "Come learn more about Cigna, and get some free food! We will be hosting a watch party with food in a classroom to watch the <a target =_blank href=\"https://glbmeet.webex.com/glbmeet/j.php?MTID=m097238138e58dee8b8db73ed3d1afe85\">virtual session</a>. RSVP <a target =_blank href=\"https://forms.gle/FYpUsGKV65uv6nFw5\" target=\"_blank\">here</a>!",
      "Location": "East Hall 3096, or join link in description",
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
      "Description": "",
      "Location": "",
      "Date": "September 19",
      "StartTimeStr": "12:00",
      "EndTimeStr": "3:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2024-09-19T12:00",
      "EndTime": "2024-09-19T15:00"
    },
    {
      "Title": "Second Round Interview/Case Study Workshop",
      "Description": "Learn more about how to prepare for second round interviews and case studies. We will cover questions you could be asked as well as how the interview process typically works. RSVP <a target =_blank href=\"https://forms.gle/SdoJM5DAAoj6bw7Q6\">here</a>!",
      "Location": "East Hall 1866",
      "Date": "September 26",
      "StartTimeStr": "6:00",
      "EndTimeStr": "7:00",
      "AmPm": "PM",
      "DayofWeek": "Thursday",
      "StartTime": "2024-09-26T18:00",
      "EndTime": "2024-09-26T19:00"
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