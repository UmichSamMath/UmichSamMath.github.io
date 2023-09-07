// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Mass Meeting",
    "Description": "Learn all about the SAM events and opportunities throughout the upcoming school year. RSVP <a target=_blank href=\"https://forms.gle/FiNDc8ZYKKTSD43y9\">here</a>!",
    "Location": "East Hall 1360",
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
    "Description": "The resume workshop will go over each section of the resume in detail with insight from board members to help prepare to submit resumes for the career fair. RSVP <a target=_blank href=\"https://docs.google.com/forms/d/e/1FAIpQLSdhxJQQHgKpDNdMCtBtkpsMnbsKPkBs3RuMad8TcUD2FONYOA/viewform?usp=sharing\">here</a>!",
    "Location": "East Hall 1084",
    "Date": "September 5",
    "StartTimeStr": "8:00",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2023-09-05T20:00",
    "EndTime": "2023-09-05T21:00"
  },
  {
    "Title": "Resume Office Hours",
    "Description": "<a target=_blank href=\"https://docs.google.com/spreadsheets/d/1zku-cawcopkG86t_JUxWwtuRb06C7hGc3uESJql-gM8/edit#gid=1953096505\">Sign up</a> to have your resume reviewed one-on-one with a board member. Please sign up at least 24 hours in advance.",
    "Location": "Board member will email zoom link/location",
    "Date": "September 6",
    "StartTimeStr": "9:00AM",
    "EndTimeStr": "Tuesday, September 13, 6:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2023-09-06T00:00",
    "EndTime": "2023-09-13T00:00"
  },
  {
    "Title": "New Member Orientation",
    "Description": "Introduction to the actuarial profession and information about SAM. Overview of the actuarial curriculum, actuarial scholarships, and advice for underclassmen/new actuaries. RSVP <a target=_blank href=\"https://docs.google.com/forms/d/e/1FAIpQLSenXnPFOfwpu7xzT8wpwHaKucnncJ4cB-Dq-hrqzTEGe2TaFg/viewform?usp=sf_link\">here</a>!",
    "Location": "East Hall 1084",
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
    "Description": "Come to learn about what makes a successful performance in a professional interview! Presenters will go over how to prepare for the interview beforehand, the types of questions to expect, how to structure one's answers, and post-interview etiquette. RSVP <a target=_blank href=\"https://forms.gle/TyEYGthsDwNJKWWs9\">here</a>!",
    "Location": "East Hall 1084",
    "Date": "September 7",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2023-09-07T19:00",
    "EndTime": "2023-09-07T20:30"
  },
  {
    "Title": "Stout Info Session",
    "Description": "Come learn more about Stout! Please RSVP <a target=_blank href=\"https://forms.gle/5bYjcraFya5NKtNQ8\">here</a>!",
    "Location": "East Hall 1866",
    "Date": "September 11",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-09-11T17:00",
    "EndTime": "2023-09-11T18:00"
  },
  {
    "Title": "International Students Workshop",
    "Description": "The International Students Workshop aims to cover all things career related for International students. It will cover work authorization (CPT/OPT), timelines, shortlisting companies and how to approach recruitment in general. It will also cover some key points of advice vital to presenting your best self during recruitment. Please RSVP <a target=_blank href=\"https://docs.google.com/forms/d/e/1FAIpQLSf_juAUh9fngXYgBpWiXHeoou5x3vEUwaJmmSSwyhr9OpMpBA/viewform?usp=sf_link\">here</a>!",
    "Location": "East Hall 1088",
    "Date": "September 11",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2023-09-11T18:30",
    "EndTime": "2023-09-11T20:00"
  },
  {
    "Title": "Cigna Info Session",
    "Description": "Come learn more about Cigna! Please RSVP <a target=_blank href=\"https://forms.gle/ZcXxaBkyWz6PDbGY6\">here</a>!",
    "Location": "Virtual - Link to be sent soon",
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
    "Description": "",
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
    "Description": "",
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
    "Description": "",
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
    "Description": "Come learn more about Blue Cross Blue Shield of Michigan! Join the call <a href=\"https://teams.microsoft.com/l/meetup-join/19%3ameeting_OWUyNjgyNmMtNTRmMi00ZjAxLTk1ODItNzU2YzkwMWU5NTZk%40thread.v2/0?context=%7b%22Tid%22%3a%226f56d3fa-5682-4261-b169-bc0d615da17c%22%2c%22Oid%22%3a%22f1539ded-76bd-432e-b04f-381c6673bb20%22%7d\" target=_blank>here</a>!",
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
    "Description": "",
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