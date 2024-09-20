// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
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
      "Description": "Come learn more about Hanover Re’s internship program! Join the call <a target=_blank href=\"https://teams.microsoft.com/l/meetup-join/19%3Ameeting_Njc2YzRkNTUtMDA1NC00NDM5LTlhM2QtZjc5ZDlkYTkxODVi%40thread.v2/0?context={&quot;Tid&quot;%3A&quot;815f40e5-50f9-45a8-ae03-40ad9b986f88&quot;%2C&quot;Oid&quot;%3A&quot;7c7d4c67-accb-47b8-a250-ebe41addc444&quot;}\">here</a>. RSVP <a target=_blank href=\"https://forms.gle/eLdqqkmzsH58YBvs9\" target=\"_blank\">here</a>!",
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
    },
    {
      "Title": "Game Night",
      "Description": "",
      "Location": "",
      "Date": "October 30",
      "StartTimeStr": "6:00",
      "EndTimeStr": "8:00",
      "AmPm": "PM",
      "DayofWeek": "Wednesday",
      "StartTime": "2024-10-30T18:00",
      "EndTime": "2024-10-30T20:00"
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