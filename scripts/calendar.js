// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
    {
      "Title": "Speaker Series Presentation - Charlie Johnson",
      "Description": "Charlie Johnson is a credentialled actuary who began his career at State Farm and later worked at Northwestern Mutual. He has since left the corporate world and started his own company - the Actuarial Development Institute. For more information on ADI and Charlie, visit <a target = _blank href=\"https://www.actuarialdevelopment.com/\">https://www.actuarialdevelopment.com/</a>.  Charlie will be presenting on applying actuarial skills outside of your typical actuarial role. This is a great way to learn more about how useful your actuarial degree is and get ideas about other potential opportunities for you. RSVP <a target = _blank href=\"https://forms.gle/z7Rh4Ma6WxPyWjRUA\">here</a>!",
      "Location": "East Hall 2866",
      "Date": "January 23",
      "StartTimeStr": "6:30",
      "EndTimeStr": "8:00",
      "AmPm": "PM",
      "DayofWeek": "Tuesday",
      "StartTime": "2024-01-23T18:30",
      "EndTime": "2024-01-23T20:00"
    },
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
      "Description": "RSVP <a target = _blank href=\"https://forms.gle/ejE9Vy76aANyhN5S7\">here</a>!",
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