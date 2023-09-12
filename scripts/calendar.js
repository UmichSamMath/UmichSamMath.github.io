// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Cigna Info Session",
    "Description": "Come learn more about Cigna! Please RSVP <a target=_blank href=\"https://forms.gle/ZcXxaBkyWz6PDbGY6\">here</a>! You can join the meeting <a target=_blank href=\"https://cigna.webex.com/wbxmjs/joinservice/sites/cigna/meeting/download/a7fc4726de0e4e568c5a73a85f1938d2?siteurl=cigna&amp;MTID=me13f9ba34f44679f6673016444c69e0b\">here</a>.",
    "Location": "Virtual",
    "Date": "September 12",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-12T17:00",
    "EndTime": "2023-09-12T18:00"
  },
  {
    "Title": "LinkedIn Workshop",
    "Description": "Come to the LinkedIn Workshop to learn all about LinkedIn before the career fair! LinkedIn is a valuable tool where you can showcase your work-related experience, network, find jobs, and see interesting business-related content. There will be time at the end to work on your own LinkedIn profiles too! RSVP <a target=_blank href=\"https://forms.gle/aYKQAh4qyatnuSEM7\">here</a>!",
    "Location": "East Hall 1068",
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
    "Description": "Come learn more about Mutual of Omaha! RSVP <a target=_blank href=\"https://forms.gle/fMBNV35Be9Dy1LRT6\">here</a>!",
    "Location": "East Hall 2866",
    "Date": "September 13",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-13T17:30",
    "EndTime": "2023-09-13T18:30"
  },
  {
    "Title": "Mock Interviews",
    "Description": "<a target=_blank href=\"https://docs.google.com/spreadsheets/d/1qStGvNDgf_NBB7nwcrfjIqCFuDkRuvNv4Gq6AK6zpoA/edit#gid=0\">Sign up</a> to practice interviewing with a board member. Please sign up at least 24 hours in advance.",
    "Location": "Board member will email zoom link/location",
    "Date": "September 14",
    "StartTimeStr": "9:00AM",
    "EndTimeStr": "Wednesday, September 20, 6:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-14T00:00",
    "EndTime": "2023-09-21T00:00"
  },
  {
    "Title": "Allianz Life Info Session",
    "Description": "Come to learn more about Allianz life and what a career at this company would look like. There will be pizza provided as well! RSVP <a target=_blank href=\"https://forms.gle/GWdoBcoeH6e3r7tz8\">here</a>!",
    "Location": "East Hall 1866",
    "Date": "September 14",
    "StartTimeStr": "5:30",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-14T17:30",
    "EndTime": "2023-09-14T18:30"
  },
  {
    "Title": "Case Study Workshop",
    "Description": "Many companies have started involving case studies in their interview process. This part of the interview process can often seem intimidating. Come to the Case Study Workshop to learn about what case studies are, how to best prepare for them, and tips and tricks for answering case-study-related questions. RSVP <a target=_blank href=\"https://forms.gle/qfJGEERSgNon4bEE6\">here</a>!",
    "Location": "East Hall 4096",
    "Date": "September 14",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-14T18:30",
    "EndTime": "2023-09-14T20:00"
  },
  {
    "Title": "BCBSM Open House",
    "Description": "Come learn more about Blue Cross Blue Shield of Michigan! Join the call <a target=_blank href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWUyNjgyNmMtNTRmMi00ZjAxLTk1ODItNzU2YzkwMWU5NTZk%40thread.v2/0?context=%7b%22Tid%22%3a%226f56d3fa-5682-4261-b169-bc0d615da17c%22%2c%22Oid%22%3a%22f1539ded-76bd-432e-b04f-381c6673bb20%22%7d\">here</a>!",
    "Location": "Microsoft Teams",
    "Date": "September 15",
    "StartTimeStr": "10:00",
    "EndTimeStr": "11:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-09-15T10:00",
    "EndTime": "2023-09-15T11:00"
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
    "Description": "Come learn more about State Farm! Join the call <a target=_blank href=\"https://umich.zoom.us/j/91718654997\">here</a>. RSVP <a target=_blank href=\"https://forms.gle/A4rTHetHT3XQPQKf9\">here</a>!",
    "Location": "Virtual",
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
    "Description": "Come learn more about Milliman! RSVP <a target=_blank href=\"https://forms.gle/7MGMfmiDAMFCmEqZ6\">here</a>!",
    "Location": "East Hall 3096",
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
    "Description": "There will be 24 companies in attendance, and this is a great opportunity for networking! Many companies will be conducting interviews in person the next day as well. See the Career Fair Roadmap to get ready.",
    "Location": "The Union, Rogel Ballroom (2nd floor)",
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
    "Location": "1203 White St",
    "Date": "September 22",
    "StartTimeStr": "9:00",
    "EndTimeStr": "12:00",
    "AmPm": "AM",
    "DayofWeek": "Friday",
    "StartTime": "2023-09-22T21:00",
    "EndTime": "2023-09-23T00:00"
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
    "Location": "East Hall 1866",
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
    "Title": "BCBSM Info Session",
    "Description": "Come learn more about Blue Cross Blue Shield of Michigan! Please RSVP here!",
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
    "Title": "Milliman Super Session",
    "Description": "View the <a target = _blank href = \"/Resources/MillimanFlyerF23.pdf\">Super Session Flyer</a>.",
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
    "Description": "",
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