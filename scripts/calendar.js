// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Second Round Interview Workshop",
    "Description": "Come to prepare for second round interviews after the career fair! Learn about questions you might be asked and some tips for answering them. RSVP <a target=_blank href=\"https://forms.gle/zBry3FwTkWw8HY8u8\">here</a>!",
    "Location": "East Hall 1084",
    "Date": "September 27",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-27T19:00",
    "EndTime": "2023-09-27T20:30"
  },
  {
    "Title": "BCBSM Info Session",
    "Description": "Come learn more about Blue Cross Blue Shield of Michigan! Please RSVP <a target=_blank href=\"https://forms.gle/pRopP5uW9YUoiugeA\">here</a>!",
    "Location": "East Hall 1866",
    "Date": "September 28",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-28T18:00",
    "EndTime": "2023-09-28T19:00"
  },
  {
    "Title": "DW Simpson Info Session",
    "Description": "Come learn more about DW Simpson! RSVP <a target=_blank href=\"https://forms.gle/BYocUKsK2DrM41Zy6\">here</a>.",
    "Location": "Virtual",
    "Date": "October 3",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-03T17:00",
    "EndTime": "2023-10-03T18:00"
  },
  {
    "Title": "Milliman Super Session",
    "Description": "Learn more in <a target =_blank href = \"/Resources/MillimanFlyerF23.pdf\">this flyer</a>!",
    "Location": "Virtual",
    "Date": "October 4",
    "StartTimeStr": "4:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-10-04T16:00",
    "EndTime": "2023-10-04T17:00"
  },
  {
    "Title": "Nationwide Info Session",
    "Description": "Come learn more about Nationwide! Join the call <a target=_blank href=\"https://umich.zoom.us/j/99000537052\">here</a>. RSVP <a target=_blank href=\"https://forms.gle/SR4GwCK7mHVQ9nQg8\">here</a>!",
    "Location": "Virtual",
    "Date": "October 4",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-10-04T17:00",
    "EndTime": "2023-10-04T18:00"
  },
  {
    "Title": "CAS Intro Workshop",
    "Description": "Did you know there's another society for actuaries besides the SOA? Unsure about which path you want to go down? Come to the Intro to the CAS Presentation and learn about anything you could ever want to know about property &amp; casualty insurance and the Casualty Actuarial Society (CAS) as a whole. Bryce Peterson, FCAS, and Zach Johnson, FCAS, will be presenting, and there will be a fun, interactive portion at the end too! RSVP <a target=_blank href=\"https://forms.gle/ZsqXeJRiSk1SYt1L9\">here</a>.",
    "Location": "East Hall 4096",
    "Date": "October 5",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-10-05T18:30",
    "EndTime": "2023-10-05T20:00"
  },
  {
    "Title": "Mentorship Kickoff Workshop",
    "Description": "MANDATORY for all mentors! Please RSVP via the Speed Dating RSVP.",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:00",
    "EndTime": "2023-10-23T18:30"
  },
  {
    "Title": "Mentorship Speed Dating",
    "Description": "MANDATORY for everyone in mentorship! RSVP <a target=_blank href=\"https://forms.gle/U6iXmtiwit79fsr19\">here</a>!",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:30",
    "EndTime": "2023-10-23T20:00"
  },
  {
    "Title": "Post Career Fair Recruiting Workshop",
    "Description": "",
    "Location": "East Hall 3088",
    "Date": "October 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-24T19:00",
    "EndTime": "2023-10-24T20:30"
  },
  {
    "Title": "Mentorship RAGER",
    "Description": "HIGHLY encouraged for everyone in mentorship. Come hang out with all of the mentors and mentees to meet new people and learn who you may want to be partnered with this year! Please RSVP <a target=_blank href=\"https://forms.gle/7dtdJjnSNbdfCtPM6\">here</a>!",
    "Location": "",
    "Date": "October 27",
    "StartTimeStr": "9:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-10-27T21:00",
    "EndTime": "2023-10-28T00:00"
  },
  {
    "Title": "Mentorship Kickoff Workshop",
    "Description": "MANDATORY for all mentors! Please RSVP via the Speed Dating RSVP.",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:00",
    "EndTime": "2023-10-23T18:30"
  },
  {
    "Title": "Mentorship Speed Dating",
    "Description": "MANDATORY for everyone in mentorship! RSVP <a target=_blank target=_blank href=\"https://forms.gle/U6iXmtiwit79fsr19\">here</a>!",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:30",
    "EndTime": "2023-10-23T20:00"
  },
  {
    "Title": "Post Career Fair Recruiting Workshop",
    "Description": "",
    "Location": "East Hall 3088",
    "Date": "October 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-24T19:00",
    "EndTime": "2023-10-24T20:30"
  },
  {
    "Title": "Mentorship RAGER",
    "Description": "HIGHLY encouraged for everyone in mentorship. Come hang out with all of the mentors and mentees to meet new people and learn who you may want to be partnered with this year! Please RSVP <a target=_blank target=_blank href=\"https://forms.gle/7dtdJjnSNbdfCtPM6\">here</a>!",
    "Location": "",
    "Date": "October 27",
    "StartTimeStr": "9:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-10-27T21:00",
    "EndTime": "2023-10-28T00:00"
  },
  {
    "Title": "Mentorship Kickoff Workshop",
    "Description": "MANDATORY for all mentors! Please RSVP via the Speed Dating RSVP.",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:00",
    "EndTime": "2023-10-23T18:30"
  },
  {
    "Title": "Mentorship Speed Dating",
    "Description": "MANDATORY for everyone in mentorship! RSVP <a target = _blank target=_blank target=_blank href=\"https://forms.gle/U6iXmtiwit79fsr19\">here</a>!",
    "Location": "",
    "Date": "October 23",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-10-23T18:30",
    "EndTime": "2023-10-23T20:00"
  },
  {
    "Title": "Post Career Fair Recruiting Workshop",
    "Description": "",
    "Location": "East Hall 3088",
    "Date": "October 24",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-10-24T19:00",
    "EndTime": "2023-10-24T20:30"
  },
  {
    "Title": "Mentorship RAGER",
    "Description": "HIGHLY encouraged for everyone in mentorship. Come hang out with all of the mentors and mentees to meet new people and learn who you may want to be partnered with this year! Please RSVP <a target = _blank target=_blank target=_blank href=\"https://forms.gle/7dtdJjnSNbdfCtPM6\">here</a>!",
    "Location": "",
    "Date": "October 27",
    "StartTimeStr": "9:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-10-27T21:00",
    "EndTime": "2023-10-28T00:00"
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