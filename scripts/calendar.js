// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Ross Minor Workshop",
    "Description": "RSVP <a target = _blank href=\"https://forms.gle/Y28HKDiyuCSk9sEW7\">here</a>!",
    "Location": "Ross R1240",
    "Date": "January 24",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-01-24T18:00",
    "EndTime": "2024-01-24T19:30"
  },
  {
    "Title": "Speaker Series - Auto Owners",
    "Description": "Auto Owners is a leading Home and Auto insurance company headquartered in Lansing, MI. Auto Owners will be giving a CAS-focused presentation, and this is a great opportunity for you to learn more about working in home and auto insurance. RSVP <a target = _blank href=\"https://forms.gle/3hgeNJpempntqV9f7\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "January 25",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-01-25T18:00",
    "EndTime": "2024-01-25T19:00"
  },
  {
    "Title": "Mentorship Game Night",
    "Description": "Mentors and mentees, come together to play games, snack, and have fun with your SAM peers! This event is open to all underclassmen SAM members too, come to have fun and make new friends. If you have a game that you really want to play, please bring that along too! RSVP <a target = _blank href=\"https://forms.gle/7YasNgRt6bvBiHDe9\">here</a>!",
    "Location": "Mason Hall 1437",
    "Date": "January 25",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-01-25T19:00",
    "EndTime": "2024-01-25T20:30"
  },
  {
    "Title": "Speaker Series - Syed Raza",
    "Description": "Syed Raza is an FSA and MAAA with 15+ years of experience in the actuarial field. She will be sharing her unique perspectives about practical aspects of our profession, the challenges we face, and the strategies for success in this dynamic field. RSVP <a target = _blank href=\"https://forms.gle/vdxn8HBqWbE9zeo98\">here</a>! Join the presentation <a target = _blank href = \"https://umich.zoom.us/j/9756976472?omn=94722686430\">here</a>!",
    "Location": "Virtual - See Description for Link!",
    "Date": "January 29",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-01-29T18:00",
    "EndTime": "2024-01-29T19:00"
  },
  {
    "Title": "Speaker Series Presentation - Milliman",
    "Description": "Milliman is an actuarial consulting firm. A couple actuaries on the recruiting team from the Chicago office will be coming to present about the differences between consulting and industry. This is a decision that many students struggle with, and this presentation will help provide some knowledge to inform that difficult decision. Pizza will also be provided! RSVP <a target = _blank href=\"https://forms.gle/KNKRq74CpwjnhMEG6\">here</a>!",
    "Location": "East Hall 2866",
    "Date": "January 31",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-01-31T18:30",
    "EndTime": "2024-01-31T20:00"
  },
  {
    "Title": "Speaker Series Presentation - Northwestern Mutual",
    "Description": "Northwestern Mutual is a mutual life insurance company based in Milwaukee, Wisconsin. Some actuaries from the recruiting team will be in Ann Arbor to present on Annuities. Annuities are a very interesting insurance product, and there are so many intricacies to learn. This presentation is a great way to expand your knowledge on annuities. Pizza will also be provided! RSVP <a target = _blank href=\"https://forms.gle/J4DaCLSyfgdWNNmQA\">here</a>!",
    "Location": "East Hall 2866",
    "Date": "February 1",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-01T18:30",
    "EndTime": "2024-02-01T20:00"
  },
  {
    "Title": "Speaker Series Presentation - Molly Li",
    "Description": "Molly Li is an FSA working a Cigna. She began her career working as an actuary in traditional actuarial roles, but has recently shifted to focus her career on data science and is even going back to school to pursue a Master’s degree in Data Science. This is an amazing opportunity to learn from an industry professional on the importance of data science in the actuarial profession.RSVP <a target = _blank href=\"https://forms.gle/ejE9Vy76aANyhN5S7\">here</a>!",
    "Location": "",
    "Date": "February 6",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-02-06T18:00",
    "EndTime": "2024-02-06T19:30"
  },
  {
    "Title": "Excel Basics Workshop",
    "Description": "",
    "Location": "",
    "Date": "February 8",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-08T18:30",
    "EndTime": "2024-02-08T20:00"
  },
  {
    "Title": "SAS/SQL Workshop",
    "Description": "",
    "Location": "",
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
    "Title": "Mentorship Movie Night & Popcorn Bar!",
    "Description": "Take a break from classes and studying to hang out and watch a movie with the rest of SAM mentorship! There will be a popcorn bar to snack on, and some games will be played in the back too. RSVP <a target = _blank href=\"https://forms.gle/a3BjaGLwBZKHVu2H9\">here</a>!",
    "Location": "",
    "Date": "March 7",
    "StartTimeStr": "8:00",
    "EndTimeStr": "10:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-07T20:00",
    "EndTime": "2024-03-07T22:00"
  },
  {
    "Title": "VBA Workshop",
    "Description": "",
    "Location": "",
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
    "Location": "",
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
    "Location": "",
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