// Creates a search bar for the Companies page that will only show relevant companies when keywords are typed in
// Terms that appear in that company's box will be highlighted (Ex. name, business, type of work), while hidden terms (keywords) will make that company appear, but will NOT highlight anything.

let companies = [
  {
    "name": "AAA Life",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Kevin Claxton",
    "contactEmail": "kclaxton@aaalife.com",
    "keywords": ["Livonia", "MI", "Michigan"]
  },
  {
    "name": "Actuarial Research Corporation",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Tim Bulat",
    "contactEmail": "tbulat@aresearch.com",
    "keywords": ["Virginia", "Maryland", "VA", "MD"]
  },
  {
    "name": "Allianz",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Chrissy Hagen",
    "contactEmail": "chrissy.hagen@allianzlife.com",
    "keywords": ["Minneapolis", "MN", "Minnesota"]
  },
  {
    "name": "Ally",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Nathan Koo",
    "contactEmail": "nathan.koo@ally.com",
    "keywords": ["Detroit", "MI", "Michigan"]
  },
  {
    "name": "Aon",
    "business": "Life and Health",
    "typeOfWork": "Consulting",
    "contactName": "Mia Coates",
    "contactEmail": "mia.coates@aon.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Auto-Owners",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Erin McLaughlin",
    "contactEmail": "mclaughlin.erin@aoins.com",
    "keywords": ["Lansing", "MI", "Michigan"]
  },
  {
    "name": "Blue Cross Blue Shield of Illinois & Texas",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Caitlin Hutchison",
    "contactEmail": "caitlin_hutchison@bcbsil.com",
    "keywords": ["Illinois", "Texas", "IL", "TX"]
  },
  {
    "name": "Blue Cross Blue Shield of Michigan",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Tom Whiting",
    "contactEmail": "twhiting@bcbsm.com",
    "keywords": ["Detroit", "MI", "Michigan"]
  },
  {
    "name": "Centene",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Qingzi Kong",
    "contactEmail": "qingzi.kong@centene.com",
    "keywords": ["St. Louis", "Missouri", "MO"]
  },
  {
    "name": "Cigna",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Jacob Hall",
    "contactEmail": "jacob.hall@cigna.com",
    "keywords": ["CT", "Connecticut", "Bloomfield"]
  },
  {
    "name": "CNA",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Bryce Peterson",
    "contactEmail": "bryce.peterson@cna.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Core Specialty",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Rebecca Cox",
    "contactEmail": "rebecca.cox@corespecialty.com",
    "keywords": ["Cincinnati", "OH", "Ohio"]
  },
  {
    "name": "CVS",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Brad Pineless",
    "contactEmail": "PinelessB@aetna.com",
    "keywords": ["Chicago", "IL", "Illinois", "Aetna"]
  },
  {
    "name": "D.E. Shaw",
    "business": "Investment and Technology",
    "typeOfWork": "",
    "contactName": "Erin Bergano",
    "contactEmail": "ebergano@recruitedshaw.com",
    "keywords": ["New York", "NY", "NYC"]
  },
  {
    "name": "Deloitte",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Kate Woodruff",
    "contactEmail": "kwoodruff@deloitte.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "DW Simpson",
    "business": "",
    "typeOfWork": "",
    "contactName": "Charlotte Chandler",
    "contactEmail": "charlotte.chandler@dwsimpson.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Ernst & Young",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Joe Santulli",
    "contactEmail": "joe.santulli@ey.com",
    "keywords": ["Chicago", "IL", "Illinois", "EY"]
  },
  {
    "name": "Fidelity",
    "business": "Investment",
    "typeOfWork": "",
    "contactName": "Vincent Lee",
    "contactEmail": "vincent.lee@fmr.com",
    "keywords": ["Boston", "MA", "Massachusetts"]
  },
  {
    "name": "HAP",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "",
    "contactEmail": "ecooks1@hap.org",
    "keywords": ["Michigan", "Detroit", "MI", "Troy"]
  },
  {
    "name": "Hub",
    "business": "",
    "typeOfWork": "Insurance",
    "contactName": "Katherine Strong",
    "contactEmail": "katherine.strong@hubinternational.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Humana",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Edward Doxen",
    "contactEmail": "edoxen@humana.com",
    "keywords": ["Louisville", "KY", "Kentucky"]
  },
  {
    "name": "Jackson",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Devan Dodge",
    "contactEmail": "devan.dodge@jackson.com",
    "keywords": ["Lansing", "MI", "Michigan"]
  },
  {
    "name": "KPMG",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Yessica Hernandez",
    "contactEmail": "yessicaharnandez@kpmg.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Liberty Mutual",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Mark Cappaert",
    "contactEmail": "mark.cappaert@libertymutual.com",
    "keywords": ["Boston", "MA", "Massachusetts"]
  },
  {
    "name": "Mercer",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Kimberly Sukhnanda",
    "contactEmail": "kimberly.sukhnanda@mmc.com",
    "keywords": ["Chicago", "IL", "Illinois"]
  },
  {
    "name": "Milliman CMH Health",
    "business": "Health",
    "typeOfWork": "Consulting",
    "contactName": "Allen Chen",
    "contactEmail": "allen.chen@milliman.com",
    "keywords": ["Chicago", "IL", "Illinois", "Milwaukee", "Wisconsin", "WI", "Hartford", "CT", "Connecticut"]
  },
  {
    "name": "Milliman Life & FRM",
    "business": "Life/Financial Risk Management",
    "typeOfWork": "Consulting",
    "contactName": "",
    "contactEmail": "",
    "keywords": ["Chicago", "IL", "Illinois", "LTS"]
  },
  {
    "name": "Mutual of Omaha",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Kailyn Melsha",
    "contactEmail": "kailyn.melsha@mutualofomaha.com",
    "keywords": ["Omaha", "Nebraska", "NE"]
  },
  {
    "name": "Nationwide",
    "business": "",
    "typeOfWork": "Insurance",
    "contactName": "Tyler Blinn",
    "contactEmail": "blinnt2@nationwide.com",
    "keywords": ["Columbus", "Ohio", "OH"]
  },
  {
    "name": "New York Life",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Daniel Lei",
    "contactEmail": "daniel_lei@newyorklife.com",
    "keywords": ["New York", "NY", "NYC"]
  },
  {
    "name": "Northwestern Mutual",
    "business": "Life",
    "typeOfWork": "Insurance",
    "contactName": "Chris Helm",
    "contactEmail": "chrishelm@northwesternmutual.com",
    "keywords": ["Milwaukee", "Wisconsin", "WI"]
  },
  {
    "name": "PwC",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Allison Muer",
    "contactEmail": "allison.a.muer@pwc.com",
    "keywords": ["New York", "NY", "Chicago", "IL", "Illinois"]
  },
  {
    "name": "State Farm",
    "business": "Property and Casualty",
    "typeOfWork": "Insurance",
    "contactName": "Lynn Barnes",
    "contactEmail": "lynn.barnes.cn27@statefarm.com",
    "keywords": ["Bloomington", "IL", "Illinois"]
  },
  {
    "name": "Swiss Re",
    "business": "Life/Health",
    "typeOfWork": "Reinsurance",
    "contactName": "LiMing Chin",
    "contactEmail": "LiMing_Chin@swissre.com",
    "keywords": ["Fort Wayne", "IN", "Indiana"]
  },
  {
    "name": "United Healthcare",
    "business": "Health",
    "typeOfWork": "Insurance",
    "contactName": "Eric Prospect",
    "contactEmail": "eric_prospect1@uhc.com",
    "keywords": ["Minneapolis", "MN", "Minnesota"]
  },
  {
    "name": "WTW",
    "business": "",
    "typeOfWork": "Consulting",
    "contactName": "Jacob Schaeffer",
    "contactEmail": "jacob.schaeffer@wtwco.com",
    "keywords": ["Chicago", "IL", "Illinois", "Willis Towers Watson"]
  }
]

function populateCompanies(){
  var resultDiv = document.getElementById("results");

  companies.forEach(c => {
    resultDiv.innerHTML += `
    <div class="company" data-name="${c.name}">
      <img src="/images/Company Logos/${c.name}.png"></img>
      <p class="highlight company-title" style="background-color: transparent">${c.name}</p>
      <p class="highlight" style="background-color: transparent">${c.business}</p>
      <p class="highlight" style="background-color: transparent; margin-bottom: 10px;">${c.typeOfWork}</p>
      <p class="highlight" style="background-color: transparent">${c.contactName}</p>
      <a class="highlight" style="background-color: transparent" href = "mailto:${c.contactEmail}">${c.contactEmail}</a>
    </div>
    `
  });
}

function updateShow(evt){
  var search = document.getElementById("search").value.toLowerCase();
  var companyDivs = Array.from(document.getElementsByClassName("company"));

  if(search == ""){
    companyDivs.forEach(c => {
      c.style.display = "";
      var highlights = Array.from(c.getElementsByClassName("highlight"));

      highlights.forEach(h => h.style.backgroundColor = "transparent");
      
    });
    return;
  }

  companyDivs.forEach(c => c.style.display = "none");

  companies.forEach(c => {
    var cElem = document.querySelector(`.company[data-name="${c.name}"]`);
    var highlights = Array.from(cElem.getElementsByClassName("highlight"));

    highlights.forEach(h => h.style.backgroundColor = "transparent");
    
    
    if(c.name.toLowerCase().includes(search)){
      cElem.style.display = "";
      highlights[0].style.backgroundColor = "";
    }
    if(c.business.toLowerCase().includes(search)){
      cElem.style.display = "";
      highlights[1].style.backgroundColor = "";
    }
    if(c.typeOfWork.toLowerCase().includes(search)){
      cElem.style.display = "";
      highlights[2].style.backgroundColor = "";
    }
    if(c.contactName.toLowerCase().includes(search)){
        cElem.style.display = "";
        highlights[3].style.backgroundColor = "";
      }
    if(c.contactEmail.toLowerCase().includes(search)){
        cElem.style.display = "";
        highlights[4].style.backgroundColor = "";
      }


    if(c.keywords.find(k => k.toLowerCase().includes(search)) != undefined){
      cElem.style.display = "";
      return;
    }
  });
  
}

document.getElementById("search").addEventListener("keyup", updateShow);

populateCompanies();