function Team(mentorIn, menteeIn, scoreIn) {
  this.mentor = mentorIn;
  this.mentee = menteeIn;
  this.score = scoreIn;
}

let teams = [
  new Team("Sajni", "Vasudha", 15),
  new Team("Sajni", "Aiden", 15),
  new Team("Sawyer / Anika", "Nikki", 20),
  new Team("Sawyer / Anika", "Ella", 20),
  new Team("Max", "Rishabh", 15),
  new Team("Max", "Grace", 15),
  new Team("Gabe", "Andrew", 15),
  new Team("Gabe", "Owen", 15),
  new Team("Abby", "Carlos", 0),
  new Team("Abby", "Jake", 0),
  new Team("Hannah", "Alyssa", 15),
  new Team("Hannah", "Jordan", 15),
  new Team("Justin", "Gus", 50),
  new Team("Madison", "Johnathan", 15),
  new Team("Madison", "Valerie", 20),
  new Team("Michael", "Bryce", 15),
  new Team("Ross", "Tyler", 0),
  new Team("Kapil", "Yueqi", 15),
  new Team("Trent", "Benjamin", 15),
  new Team("Joaquin", "David", 15),
  new Team("Joaquin", "Rachel", 15),
  new Team("Emily", "Yuya", 0),
  new Team("Leah", "Losian", 15),
  new Team("Katherine", "Abby", 15),
  new Team("Katherine", "Naomi", 15),
  new Team("Rachel", "Raegan", 15),
  new Team("Rachel", "Olivia", 15),
  new Team("Scott", "Thomas", 15),
  new Team("Hunter", "Jadon", 20)
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