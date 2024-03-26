// Automatically displays upcoming events  when they are within a week of occuring and makes them disappear after they are over.
// Uses output from "Calendar Events Information for Website", which can be updated by selecting "Import Calendar" >> "Import"
// Then the spreadsheet needs to be exported as a csv file, then converted from csv to JSON

let SAMevents = [
  {
    "Title": "Board Elections Workshop",
    "Description": "This workshop will focus on understanding the board elections process and the responsibilities of each board position. Highly encouraged for anyone considering running for board. RSVP <a target = _blank href=\"https://forms.gle/kh5KuJgRKXA2trdJA\">here</a>!",
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
    "Title": "Prof N Advising Session",
    "Description": "Come to the mass advising session to learn about course planning and ask Prof Natarajan any questions!",
    "Location": "East Hall 1068",
    "Date": "April 1",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Monday",
    "StartTime": "2024-04-01T18:00",
    "EndTime": "2024-04-01T19:00"
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
    "Title": "CAS Ice Cream Social",
    "Description": "Come stop by for a casual ice cream social at Michigan Creamery to hang out and talk about CAS! Your SAM CAS ambassadors will be there to answer any questions about CAS, the P&amp;C field in general, internships, recruiting, and running for SAM CAS Ambassador. They will also use this time to better get to know anyone needing a letter of rec for the CAS Student Central Summer Program (applications due April 10)! We’ll even pay for your ice cream🍦! RSVP <a target = _blank href=\"https://forms.gle/dHcCBCd4mBUqTujf7\">here</a>!",
    "Location": "Michigan Creamery, 302 S State St, Ann Arbor, MI 48104, USA",
    "Date": "April 3",
    "StartTimeStr": "5:00",
    "EndTimeStr": "6:30",
    "AmPm": "PM",
    "DayofWeek": "Wednesday",
    "StartTime": "2024-04-03T17:00",
    "EndTime": "2024-04-03T18:30"
  },
  {
    "Title": "Jackson National Networking Workshop",
    "Description": "Jackson National is a life insurance company headquartered in Lansing, Michigan; they specialize in annuities but sell a variety of products. A team of actuaries will be coming to give a workshop on networking! As you prepare for your upcoming internship/full-time job, knowing how to network effectively is a valuable skill. Come learn from industry professionals the skill of networking! Jackson will also be bringing ice cream, so be sure to attend!! RSVP <a target = _blank href=\"https://forms.gle/ijf29dDZR518vrR38\">here</a>!",
    "Location": "East Hall 1068",
    "Date": "April 4",
    "StartTimeStr": "6:00",
    "EndTimeStr": "7:00",
    "AmPm": "PM",
    "DayofWeek": "Thursday",
    "StartTime": "2024-04-04T18:00",
    "EndTime": "2024-04-04T19:00"
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
    "Description": "RSVP <a target = _blank href=\"https://forms.gle/E8VgmWpgHXRNn7mL9\">here</a>!",
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