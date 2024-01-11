// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Winter Mass Meeting",
    "Description": "RSVP <a href=\"https://forms.gle/7gZMLsF5SCuSeDtz5\">here</a>!",
    "Location": "East Hall 1360",
    "Date": "January 16",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-01-16T18:30",
    "EndTime": "2024-01-16T20:00"
  },
  {
    "Title": "Speaker Series Presentation - Charlie Johnson",
    "Description": "Charlie Johnson is a credentialled actuary who began his career at State Farm and later worked at Northwestern Mutual. He has since left the corporate world and started his own company - the Actuarial Development Institute. For more information on ADI and Charlie, visit <a target = _blank href=\"https://www.actuarialdevelopment.com/\">https://www.actuarialdevelopment.com/</a>.  Charlie will be presenting on applying actuarial skills outside of your typical actuarial role. This is a great way to learn more about how useful your actuarial degree is and get ideas about other potential opportunities for you.",
    "Location": "",
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
    "Description": "RSVP <a href=\"https://forms.gle/Y28HKDiyuCSk9sEW7\">here</a>!",
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
    "Title": "Speaker Series Presentation - Milliman",
    "Description": "Milliman is an actuarial consulting firm. A couple actuaries on the recruiting team from the Chicago office will be coming to present about the differences between consulting and industry. This is a decision that many students struggle with, and this presentation will help provide some knowledge to inform that difficult decision. Pizza will also be provided!",
    "Location": "",
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
    "Description": "Northwestern Mutual is a mutual life insurance company based in Milwaukee, Wisconsin. Some actuaries from the recruiting team will be in Ann Arbor to present on Annuities. Annuities are a very interesting insurance product, and there are so many intricacies to learn. This presentation is a great way to expand your knowledge on annuities. Pizza will also be provided!",
    "Location": "",
    "Date": "February 1",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-01T18:30",
    "EndTime": "2024-02-01T20:00"
  },
  {
    "Title": "Speaker Series Presentation - Prof. Kausch",
    "Description": "Professor Kausch will be giving a presentation on “The Actuarial Profession”. Prof Kausch earned his Ph.D. in Mathematics from the University of Michigan in 1993. He is a Fellow of the Society of Actuaries (FSA) and the Conference of Consulting Actuaries (FCA), a Member of the American Academy of Actuaries (MAAA), and an Enrolled Actuary (EA). He served as the Chief Actuary for Gabriel, Roeder, Smith & Company from 2006 until his retirement in 2022. Gabriel, Roeder Smith & Company is the largest actuarial consulting firm dedicated to the public sector. Dr. Kausch taught here between 2002 and 2011 and has since returned to teaching here. He hopes to share knowledge on the actuarial profession with us students.",
    "Location": "",
    "Date": "February 15",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-02-15T18:30",
    "EndTime": "2024-02-15T20:00"
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