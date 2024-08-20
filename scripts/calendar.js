// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Resume Workshop 1",
    "Description": "RSVP <a href=\"https://forms.gle/GWAfwBjkgDMWXr3o7\">here</a>!",
    "Location": "",
    "Date": "August 27",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-08-27T18:00",
    "EndTime": "2024-08-27T19:00"
  },
  {
    "Title": "Festifall!",
    "Description": "Our table is located in Ingalls Mall on the side of the Michigan League. We can't wait to see you!!",
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
    "Description": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "Sign-up coming soon!",
    "Location": "Math Atrium, or coordinate with your reviewer!",
    "Date": "September 4",
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-04T00:00",
    "EndTime": "2024-09-11T00:00"
  },
  {
    "Title": "Drop-in Headshots",
    "Description": "",
    "Location": "",
    "Date": "September 4",
    "StartTimeStr": "4:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-09-04T16:00",
    "EndTime": "2024-09-04T18:00"
  },
  {
    "Title": "Resume Workshop 2",
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "StartTimeStr": "12:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-09-12T00:00",
    "EndTime": "2024-09-19T00:00"
  },
  {
    "Title": "CareSource Info Session",
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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
    "Description": "",
    "Location": "",
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