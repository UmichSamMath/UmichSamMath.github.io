// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Resume Workshop 1",
    "Description": "",
    "Location": "",
    "Date": "August 29",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-08-29T19:00",
    "EndTime": "2023-08-29T20:00"
  },
  {
    "Title": "Festifall",
    "Description": "We will be located on central campus between Mason Hall and the School of Kinesiology Building, at table D84.",
    "Location": "The Diag",
    "Date": "August 30",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-08-30T18:00",
    "EndTime": "2023-08-30T20:30"
  },
  {
    "Title": "Mass Meeting",
    "Description": "",
    "Location": "",
    "Date": "September 5",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-05T18:30",
    "EndTime": "2023-09-05T20:00"
  },
  {
    "Title": "Resume Workshop 2",
    "Description": "",
    "Location": "",
    "Date": "September 5",
    "StartTimeStr": "8:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-05T20:00",
    "EndTime": "2023-09-05T21:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "",
    "Location": "",
    "Date": "September 6",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-06T19:00",
    "EndTime": "2023-09-06T20:30"
  },
  {
    "Title": "Interview Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 7",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-07T19:00",
    "EndTime": "2023-09-07T20:30"
  },
  {
    "Title": "International Students Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 11",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-09-11T18:30",
    "EndTime": "2023-09-11T20:00"
  },
  {
    "Title": "LinkedIn Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 12",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-12T18:30",
    "EndTime": "2023-09-12T20:00"
  },
  {
    "Title": "Mutual of Omaha Info Session",
    "Description": "",
    "Location": "",
    "Date": "September 13",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-13T17:30",
    "EndTime": "2023-09-13T18:30"
  },
  {
    "Title": "Case Study Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 14",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-14T18:30",
    "EndTime": "2023-09-14T20:00"
  },
  {
    "Title": "Career Fair Coffee Chat",
    "Description": "",
    "Location": "",
    "Date": "September 17",
    "StartTimeStr": "11:00",
    "EndTimeStr": "1:00",
    "AmPm": "PM",
    "DayofWeek": "Sunday",
    "StartTime": "2023-09-17T11:00",
    "EndTime": "2023-09-17T13:00"
  },
  {
    "Title": "State Farm Info Session",
    "Description": "",
    "Location": "",
    "Date": "September 18",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-09-18T17:30",
    "EndTime": "2023-09-18T18:30"
  },
  {
    "Title": "Milliman Info Session",
    "Description": "",
    "Location": "",
    "Date": "September 19",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-19T18:00",
    "EndTime": "2023-09-19T19:00"
  },
  {
    "Title": "Career Fair",
    "Description": "",
    "Location": "",
    "Date": "September 21",
    "StartTimeStr": "12:00",
    "EndTimeStr": "3:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-21T12:00",
    "EndTime": "2023-09-21T15:00"
  },
  {
    "Title": "Post Career Fair RAGER",
    "Description": "",
    "Location": "",
    "Date": "September 22",
    "StartTimeStr": "9:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Friday",
    "StartTime": "2023-09-22T21:00",
    "EndTime": "2023-09-22T21:00"
  },
  {
    "Title": "SAM Recess",
    "Description": "",
    "Location": "",
    "Date": "September 24",
    "StartTimeStr": "11:00",
    "EndTimeStr": "11:00",
    "AmPm": "AM",
    "DayofWeek": "Sunday",
    "StartTime": "2023-09-24T11:00",
    "EndTime": "2023-09-24T11:00"
  },
  {
    "Title": "Mercer Info Session",
    "Description": "",
    "Location": "",
    "Date": "September 25",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-09-25T18:00",
    "EndTime": "2023-09-25T19:00"
  },
  {
    "Title": "Second Round Interview Workshop",
    "Description": "",
    "Location": "",
    "Date": "September 27",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-27T19:00",
    "EndTime": "2023-09-27T20:30"
  },
  {
    "Title": "CAS Intro Workshop",
    "Description": "",
    "Location": "",
    "Date": "October 5",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-10-05T18:30",
    "EndTime": "2023-10-05T20:00"
  },
  {
    "Title": "Post Career Fair Recruiting Workshop",
    "Description": "",
    "Location": "",
    "Date": "October 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-24T19:00",
    "EndTime": "2023-10-24T20:30"
  }
]

function populateEvents(){
  var resultDiv = document.getElementById("calendar");
  var currDate = new Date(); // gets the current date
  
  SAMevents.forEach(c => {
    var startShowDate = new Date(c.StartTime);
    startShowDate.setDate(startShowDate.getDate() - 7);
    
    var endShowDate = new Date(c.EndTime);
    if(c.Location === "") {
      c.Location = "Location To Be Determined";
    }

    if(c.Description === "") {
      c.Description = "More information coming soon!";
    }
    
    if(startShowDate <= currDate && currDate <= endShowDate) {
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