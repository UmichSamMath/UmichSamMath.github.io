// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Scholarship Info Session w/ Prof N",
    "Description": "Professor Natarajan will discuss the various Actuarial Scholarships due Monday, March 11th. This is highly recommended to students who need more information about the application process.",
    "Location": "East Hall 2866",
    "Date": "March 7",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-07T18:00",
    "EndTime": "2024-03-07T19:30"
  },
  {
    "Title": "Mentorship Movie Night & Popcorn Bar!",
    "Description": "Take a break from classes and studying to hang out and watch a movie with the rest of SAM mentorship! There will be a popcorn bar to snack on, and some games will be played in the back too. RSVP <a target = _blank href=\"https://forms.gle/a3BjaGLwBZKHVu2H9\">here</a>!",
    "Location": "East Hall 1360",
    "Date": "March 7",
    "StartTimeStr": "8:00",
    "EndTimeStr": "10:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-07T20:00",
    "EndTime": "2024-03-07T22:00"
  },
  {
    "Title": "Ally Presentation",
    "Description": "RSVP <a target = _blank href=\"https://forms.gle/EdsMCyxDtAAGRTcE9\">here</a>!",
    "Location": "East Hall 3088",
    "Date": "March 11",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:30",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-03-11T18:00",
    "EndTime": "2024-03-11T19:30"
  },
  {
    "Title": "Second Semester DEI Event",
    "Description": "Join us as we celebrate International Women's Day at our collaborative event hosted by SAM and Women in Mathematics! Be part of the push for fairness in the actuarial and mathematics fields with a panel of current Michigan students and a presentation delving into the history of International Women's Day, spotlighting influential women in both actuarial and mathematical realms. Dive into this enriching event with meaningful discussions, delicious food, and a shared dedication to promoting inclusivity and equality. RSVP <a target = _blank href=\"https://forms.gle/B4EVHedAb3faH6RA6\">here</a>!",
    "Location": "East Hall 1324",
    "Date": "March 11",
    "StartTimeStr": "7:30",
    "EndTimeStr": "9:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-03-11T19:30",
    "EndTime": "2024-03-11T21:00"
  },
  {
    "Title": "Cigna Presentation",
    "Description": "Come hear from Cigna professionals on how to succeed in your recruiting endeavors and also learn more about the variety of roles that actuaries can fill! They are planning on providing food, as well! RSVP <a target = _blank href=\"https://forms.gle/KMmYwG4Rq3aeCp3N6\">here</a>!",
    "Location": "East Hall 3088",
    "Date": "March 12",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-03-12T18:00",
    "EndTime": "2024-03-12T19:00"
  },
  {
    "Title": "VBA Workshop",
    "Description": "Visual Basic for Applications is a computer programming language often used in Excel. With VBA you can create macros to automate repetitive functions, and generate custom forms, graphs, and reports. RSVP <a target = _blank href=\"https://forms.gle/QF9E9yYjuy4mAT1J7\">here</a>!",
    "Location": "Mason Hall Fishbowl Computer Lab A",
    "Date": "March 14",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-14T18:30",
    "EndTime": "2024-03-14T20:00"
  },
  {
    "Title": "Board Elections Workshop",
    "Description": "RSVP <a target = _blank href=\"https://forms.gle/kh5KuJgRKXA2trdJA\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "March 26",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-03-26T18:30",
    "EndTime": "2024-03-26T20:00"
  },
  {
    "Title": "Annual Euchre Tournament!",
    "Description": "You know what time it is, join us to for a night of euchre and fun!! Mentors and mentees are heavily encouraged to be a team, but anyone else can join and make their own teams! If you don’t have a teammate, still sign up and we’ll pair you up day of. Prizes will be given out to the winners, and pizza will be provided! RSVP <a target = _blank href=\"https://forms.gle/J54WT1WFLYq3ZSzu5\">here</a>!",
    "Location": "USB 1250",
    "Date": "March 28",
    "StartTimeStr": "7:00",
    "EndTimeStr": "8:30",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-03-28T19:00",
    "EndTime": "2024-03-28T20:30"
  },
  {
    "Title": "Internship Panel",
    "Description": "",
    "Location": "East Hall 1360",
    "Date": "April 2",
    "StartTimeStr": "6:30",
    "EndTimeStr": "8:00",
    "AmPm": "PM",
    "DayofWeek": "Tuesday",
    "StartTime": "2024-04-02T18:30",
    "EndTime": "2024-04-02T20:00"
  },
  {
    "Title": "Alumni Day",
    "Description": "SAM Alumni will return to Ann Arbor to discuss their various jobs and career tracks in a panel discussion, breakout session, and networking event. This will be a great event for members of all years! Make connections with actuaries from across the country and learn about all different actuarial career tracks! Mentorship is expected to attend. Attire is smart casual (think dinner with your parents!). Free food will also be provided in a networking luncheon with the alumni. The SAM Instagram (@Umich_SAM) will be featuring panelists, so be sure to check them out! RSVP <a target = _blank href=\"https://forms.gle/hmqHfiJjWXLAia4B7\">here</a>!",
    "Location": "East Hall 3rd Floor Terrace (Psych Atrium)",
    "Date": "April 6",
    "StartTimeStr": "1:00",
    "EndTimeStr": "5:00",
    "AmPm": "PM",
    "DayofWeek": "Saturday",
    "StartTime": "2024-04-06T13:00",
    "EndTime": "2024-04-06T17:00"
  },
  {
    "Title": "Board Elections",
    "Description": "",
    "Location": "East Hall 1360",
    "Date": "April 10",
    "StartTimeStr": "6:00",
    "EndTimeStr": "8:00",
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
    "StartTimeStr": "8:00",
    "EndTimeStr": "11:59",
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
    "StartTimeStr": "1:00",
    "EndTimeStr": "4:00",
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