function Team(mentorIn, menteeIn, scoreIn) {
  this.mentor = mentorIn;
  this.mentee = menteeIn;
  this.score = scoreIn;
}

let teams = [
  new Team("Sajni", "Vasudha", 0),
  new Team("Sajni", "Aiden", 0),
  new Team("Sawyer / Anika", "Nikki", 0),
  new Team("Sawyer / Anika", "Ella", 0),
  new Team("Max", "Rishabh", 0),
  new Team("Max", "Grace", 0),
  new Team("Gabe", "Andrew", 0),
  new Team("Gabe", "Owen", 0),
  new Team("Abby", "Carlos", 0),
  new Team("Abby", "Jake", 0),
  new Team("Hannah", "Alyssa", 0),
  new Team("Hannah", "Jordan", 0),
  new Team("Justin", "Gus", 0),
  new Team("Justin", "Rachel", 0),
  new Team("Madison", "Johnathan", 0),
  new Team("Madison", "Valerie", 0),
  new Team("Michael", "Bryce", 0),
  new Team("Ross", "Tyler", 0),
  new Team("Kapil", "Yueqi", 0),
  new Team("Trent", "Benjamin", 0),
  new Team("Joaquin", "David", 0),
  new Team("Emily", "Yuya", 0),
  new Team("Leah", "Losian", 0),
  new Team("Katherine", "Abby", 0),
  new Team("Rachel", "Raegan", 0),
  new Team("Scott", "Thomas", 0),
  new Team("Hunter", "Jadon", 0)
];


function displayLeaderboard() {
  let theExport = ""; 
  teams.sort((team1, team2) => team2.score - team1.score);
  
  let top5Teams = teams.slice(0, 5);
  top5Teams.forEach((team) => theExport += '<tr><td>' + team.mentor + '</td><td>' + team.mentee + '</td><td>' + team.score + '</td></tr>');
  document.getElementById("leaderboard").innerHTML = theExport; 
}

function expandLeaderboard() {
  let theExport = "";
  teams.sort((team1, team2) => team2.score - team1.score);
  teams.forEach((team) => theExport += '<tr><td>' + team.mentor + '</td><td>' + team.mentee + '</td><td>' + team.score + '</td></tr>');

  document.getElementById("leaderboard").innerHTML = theExport;
  document.getElementById("expandButton").style.display = "none";
}

displayLeaderboard();