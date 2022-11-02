$(document).ready( function() {
    let navbarheight = $(".navbar").height();
    let wordheight = $("#title").height();
    $("#title").css("margin-top", (navbarheight-wordheight)/2);
    renderEvents();
    renderCompanies();
    boldHeadings();
});

function renderEvents(){
    $(".event").each(function(){
        console.log($(this))
        let eventItems = $(this).children();
        $(this).prepend("<div class='when'></div>");
        $(this).find("div").append(eventItems[0]);
        $(this).find("div").append(eventItems[1]);
        $(eventItems[0]).css({
            "color": "Red",
        })
        $(eventItems[2]).css({
            "margin-left": "20px",
            "margin-top": ($(this).find("div").height()-$(eventItems[2]).height())/2,
            "color": "#495057",
            "font-size": "large"
        })
        $(eventItems[3]).css({
            "margin-left": "10px",
            "margin-top": ($(this).find("div").height()-$(eventItems[2]).height())/2,
            "color": "Black",
            "font-size": "x-large"
        })
    })
}

function renderCompanies(){
    let c = $("#companies");
    for(var i = 0; i < companies.length; i++) {
        var obj = companies[i];
        c.append("<div class='profile'>" +
        "<p>" + obj.FIELD1 + "</p>" +
        "<p>" + obj.FIELD2 + "</p>" +
        "<p>" + obj.FIELD4 + "</p>" +
        "<p>" + obj.FIELD5 + "</p>" +
        "</div>");
    }
}

function boldHeadings(){
    $(".profile").each(function(){
        let text = $(this).find("p");
        $(text[0]).css("font-weight", "bold");
    });
}

let companies = [
    {
      "FIELD1": "AAA Life Insurance",
      "FIELD2": "Life",
      "FIELD3": "Livonia, MI",
      "FIELD4": "Kevin Claxton",
      "FIELD5": "KClaxton@aaalife.com"
    },
    {
      "FIELD1": "Accident Fund Insurance",
      "FIELD2": "Risk Management",
      "FIELD3": "Lansing, MI",
      "FIELD4": "Tomeka Rushin",
      "FIELD5": "Tomeka.Rushin@accidentfund.com"
    },
    {
      "FIELD1": "Aetna",
      "FIELD2": "Health",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Brad Pineless",
      "FIELD5": "PinelessB@aetna.com"
    },
    {
      "FIELD1": "AIG",
      "FIELD2": "AIG P&C",
      "FIELD3": "New York, NY",
      "FIELD4": "George Hroziencik",
      "FIELD5": "George.Hroziencik@aig.com"
    },
    {
      "FIELD1": "Allianz Life",
      "FIELD2": "Life",
      "FIELD3": "Minneapolis, MN",
      "FIELD4": "Derek Halen",
      "FIELD5": "Derek.Halen@allianzlife.com"
    },
    {
      "FIELD1": "Allstate",
      "FIELD2": "P&C",
      "FIELD3": "Northbrook, IL",
      "FIELD4": "Doree Kreitman",
      "FIELD5": "dkrek@allstate.com"
    },
    {
      "FIELD1": "Ally",
      "FIELD2": "P&C",
      "FIELD3": "Detroit, MI",
      "FIELD4": "Nathan Koo",
      "FIELD5": "Nathan.Koo@ally.com"
    },
    {
      "FIELD1": "American Family Insurance",
      "FIELD2": "Multi-line Insurance",
      "FIELD3": "Madison, WI",
      "FIELD4": "David Binder",
      "FIELD5": "dbinder@amfam.com"
    },
    //{
      //"FIELD1": "Anthem, Inc",
      //"FIELD2": "Health",
      //"FIELD3": "Indianapolis, IN",
      //"FIELD4": "Helen Hong",
      //"FIELD5": "Helen.Hong@anthem.com"
    //},
    {
      "FIELD1": "AON",
      "FIELD2": "Consulting (L/H)",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Kristen Miele",
      "FIELD5": "kristen.miele@aon.com "
    },
    {
      "FIELD1": "Auto-Owners",
      "FIELD2": "P&C",
      "FIELD3": "Lansing, MI",
      "FIELD4": "Erin McLaughlin",
      "FIELD5": "mclaughlin.erin@aoins.com"
    },
    {
      "FIELD1": "BCBS of IL, MT, NM. OK, and TX",
      "FIELD2": "Health",
      "FIELD3": "Richardson, TX",
      "FIELD4": "Caitlin Hutchison",
      "FIELD5": "Caitlin_Hutchison@bcbsil.com"
    },
    {
      "FIELD1": "BCBSM",
      "FIELD2": "Health",
      "FIELD3": "Detroit, MI",
      "FIELD4": "Tom Whiting",
      "FIELD5": "TWhiting@bcbsm.com"
    },
    {
      "FIELD1": "Bright Health Group",
      "FIELD2": "Health",
      "FIELD3": "Minneapolis, MN",
      "FIELD4": "Charles Steffens (Charlie)",
      "FIELD5": "csteffens@brighthealthgroup.com"
    },
    {
      "FIELD1": "Buck Consultants",
      "FIELD2": "Consulting",
      "FIELD3": "Secaucus, NJ",
      "FIELD4": "John O'Brien",
      "FIELD5": "John.O’brien@buckconsultants.com"
    },
    {
      "FIELD1": "Celtic Insurance",
      "FIELD2": "Health",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Erin O'Connor",
      "FIELD5": "eoconnor@celtic-net.com"
    },
    {
      "FIELD1": "Church Mutual Insurance",
      "FIELD2": "P&C",
      "FIELD3": "Merrill, WI",
      "FIELD4": "Jowi Vander Kooy",
      "FIELD5": "jvanderkooy@churchmutual.com"
    },
    {
      "FIELD1": "Cigna",
      "FIELD2": "Health",
      "FIELD3": "Bloomfield, CT",
      "FIELD4": "Jacob Hall",
      "FIELD5": "Jacob.Hall@cigna.com"
    },
    {
      "FIELD1": "CNA ",
      "FIELD2": "P&C",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Paul Chappus",
      "FIELD5": "Paul.Chappus@cna.com"
    },
    //{
      //"FIELD1": "CNO Financial Group",
      //"FIELD2": "Multi-line Insurance",
      //"FIELD3": "Rehoboth Beach, DE",
      //"FIELD4": "Paul Chappus",
      //"FIELD5": "P.Chappus@Banklife.com"
    //},
    {
      "FIELD1": "CUNA Mutual Group",
      "FIELD2": "Multi-line Insurance",
      "FIELD3": "Madison, WI",
      "FIELD4": "Marcus (Yuechen) Li",
      "FIELD5": "Marcus.Li@cunamutual.com"
    },
    {
      "FIELD1": "Dean Health Plan",
      "FIELD2": "Health",
      "FIELD3": "Madison, WI",
      "FIELD4": "Nicolas Lowenberg",
      "FIELD5": "Nicolas.Lowenberg@deancare.com"
    },
    {
      "FIELD1": "Delaware Life",
      "FIELD2": "Life",
      "FIELD3": "Waltham, MA",
      "FIELD4": "Jennifer Feng",
      "FIELD5": "Jennifer.Feng@sunlife.com"
    },
    {
      "FIELD1": "Deloitte",
      "FIELD2": "Consulting",
      "FIELD3": "Detroit, MI",
      "FIELD4": "Laura Hamilton",
      "FIELD5": "lauhamilton@deloitte.com"
    },
    {
      "FIELD1": "DW Simpson",
      "FIELD2": "Actuarial Recruiting Firm",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Charlotte Chandler",
      "FIELD5": "Charlotte.Chandler@dwsimpson.com"
    },
    {
      "FIELD1": "Emergent Holdings",
      "FIELD2": "Health and Life Insurance?",
      "FIELD3": "Lansing, MI",
      "FIELD4": "Jackee Va",
      "FIELD5": "jacquelyn.va@accidentfund.com"
    },
    {
      "FIELD1": "Ernst & Young",
      "FIELD2": "Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Janie Brink",
      "FIELD5": "janie.h.brink@ey.com"
    },
    {
      "FIELD1": "Evolent health",
      "FIELD2": "Health",
      "FIELD3": "Arlington, VA",
      "FIELD4": "Stacy Martz",
      "FIELD5": "smartz@evolenthealth.com"
    },
    {
      "FIELD1": "Farmers Insurance",
      "FIELD2": "P&C",
      "FIELD3": "Woodland Hills, CA",
      "FIELD4": "Neel Patel",
      "FIELD5": "neel.patel@farmersinsurance.com"
    },
    {
      "FIELD1": "Fidelity Investments",
      "FIELD2": "Investment",
      "FIELD3": "Boston, MA",
      "FIELD4": "Vincent Lee",
      "FIELD5": "Vincent.Lee@fmr.com"
    },
    {
      "FIELD1": "Frankenmuth Insurance",
      "FIELD2": "P&C",
      "FIELD3": "Frankenmuth, MI",
      "FIELD4": "Suzanne Schreiner",
      "FIELD5": "Suzanne.schreiner@fmins.com"
    },
    {
      "FIELD1": "Geico",
      "FIELD2": "P&C",
      "FIELD3": "Washington DC",
      "FIELD4": "Allison Hansen",
      "FIELD5": "AlHansen@geico.com"
    },
    {
      "FIELD1": "Global Altantic Financial Group",
      "FIELD2": "Life",
      "FIELD3": "Boston, MA",
      "FIELD4": "Jinyi Lan",
      "FIELD5": "Jinyi.Lan@gafg.com"
    },
    {
      "FIELD1": "Great American Insurance Group",
      "FIELD2": "P&C",
      "FIELD3": "Cincinnati, OH",
      "FIELD4": "Karol Rippberger",
      "FIELD5": "krippberger@gaig.com"
    },
    {
      "FIELD1": "Hagerty Insurance",
      "FIELD2": "P&C",
      "FIELD3": "Traverse City, MI",
      "FIELD4": "Karin Chung",
      "FIELD5": "kchung@hagerty.com"
    },
    {
      "FIELD1": "Humana",
      "FIELD2": "Health",
      "FIELD3": "Louisville, KY",
      "FIELD4": "Ed Doxen",
      "FIELD5": "EDoxen@humana.com"
    },
    {
      "FIELD1": "Jackson National Life Insurance Co",
      "FIELD2": "Life",
      "FIELD3": "Lansing, MI",
      "FIELD4": "Caitlin Cronan",
      "FIELD5": "caitlin.cronan@jackson.com"
    },
    {
      "FIELD1": "KPMG",
      "FIELD2": "Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Yessica Hernandez",
      "FIELD5": "yessicahernandez@kpmg.com"
    },
    {
      "FIELD1": "Liberty Mutual",
      "FIELD2": "P&C",
      "FIELD3": "Boston, MA",
      "FIELD4": "Mark Cappaert",
      "FIELD5": "mark.cappaert@libertymutual.com"
    },
    {
      "FIELD1": "Lockton",
      "FIELD2": "Independent Insurance Brokerage",
      "FIELD3": "Kansas City, MO",
      "FIELD4": "Jon Acker",
      "FIELD5": "jon.acker@lockton.com"
    },
    {
      "FIELD1": "Mass Mutual",
      "FIELD2": "Life Insurance",
      "FIELD3": "Springfield, MA",
      "FIELD4": "Carrie Smith",
      "FIELD5": "CarrieSmith@MassMutual.com"
    },
    {
      "FIELD1": "McKinsey Solutions",
      "FIELD2": "Consulting",
      "FIELD3": "New York, NY",
      "FIELD4": "Mykyung Kang",
      "FIELD5": "mykyung_kang@mckinsey.com"
    },
    {
      "FIELD1": "Mercer",
      "FIELD2": "Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Angela Rossi",
      "FIELD5": "angela.rossi@mercer.com"
    },
    {
      "FIELD1": "Milliman Health",
      "FIELD2": "Health Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Allen Cheng",
      "FIELD5": "allen.chen@milliman.com"
    },
    {
      "FIELD1": "Milliman FRM",
      "FIELD2": "Health Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Mandie Molina",
      "FIELD5": "mandie.molina@milliman.com"
    },
    {
      "FIELD1": "Munich Reinsruance of America",
      "FIELD2": "Reinsurance",
      "FIELD3": "Princeton, NJ",
      "FIELD4": "Jessica Pruiti",
      "FIELD5": "jpruiti@munichreamerica.com"
    },
    {
      "FIELD1": "Mutual of Omaha",
      "FIELD2": "Life",
      "FIELD3": "Omaha, NE",
      "FIELD4": "Kailyn Melsha",
      "FIELD5": "Kailyn.Melsha@mutualofomaha.com"
    },
    {
      "FIELD1": "Nationwide Financial",
      "FIELD2": "P&C",
      "FIELD3": "Colombus, OH",
      "FIELD4": "Tyler Blinn",
      "FIELD5": "blinnt2@nationwide.com"
    },
    {
      "FIELD1": "Northwestern Mutual",
      "FIELD2": "",
      "FIELD3": "Milwaukee, WI",
      "FIELD4": "Daniel Groth",
      "FIELD5": "danielgroth@northwesternmutual.com"
    },
    {
      "FIELD1": "NY Life",
      "FIELD2": "Life",
      "FIELD3": "New York, NY",
      "FIELD4": "Daniel Lei",
      "FIELD5": "Daniel_Lei@newyorklife.com"
    },
    {
      "FIELD1": "Old Republic Risk Management",
      "FIELD2": "P&C",
      "FIELD3": "Brookfield, WI",
      "FIELD4": "Nicole Kowaski",
      "FIELD5": "nkowalski@oorrm.com"
    },
    {
      "FIELD1": "Optiver",
      "FIELD2": "Quant Trading",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Alyssa Hunter",
      "FIELD5": "alyssahunter@optiver.us"
    },
    {
      "FIELD1": "Progressive",
      "FIELD2": "P&C",
      "FIELD3": "Mayfield Village, OH",
      "FIELD4": "Matthew Mayfield",
      "FIELD5": "matthew_c_mayfield@progressive.com"
    },
    {
      "FIELD1": "PwC",
      "FIELD2": "Consulting",
      "FIELD3": "New York, NY",
      "FIELD4": "Allison Muer",
      "FIELD5": "allison.a.muer@pwc.com"
    },
    {
      "FIELD1": "Quicken Loans",
      "FIELD2": "Morgate Loan",
      "FIELD3": "Detroit, MI",
      "FIELD4": "Laneisha Gunn",
      "FIELD5": "LaneishaGunn@quickenloans.com"
    },
    {
      "FIELD1": "RGA",
      "FIELD2": "Reinsurance (L/H)",
      "FIELD3": "Chesterfield, MO",
      "FIELD4": "Alaina Anderson",
      "FIELD5": "aanderson@rgare.com"
    },
    {
      "FIELD1": "Segal Group",
      "FIELD2": "Consulting",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Bill Gitterman",
      "FIELD5": "wgitterman@segalco.com"
    },
    {
      "FIELD1": "State Auto Insurance",
      "FIELD2": "P&C",
      "FIELD3": "Colombus, OH",
      "FIELD4": "Doug Pirtle",
      "FIELD5": "doug.pirtle@stateauto.com"
    },
    {
      "FIELD1": "State Farm",
      "FIELD2": "P&C",
      "FIELD3": "Bloomington, IL",
      "FIELD4": "Lynn Barnes",
      "FIELD5": "lynn.barnes.cn27@statefarm.com"
    },
    {
      "FIELD1": "Stout",
      "FIELD2": "Financial Service",
      "FIELD3": "Chicago, IL",
      "FIELD4": "Colin Copeland",
      "FIELD5": "ccopeland@stout.com"
    },
    {
      "FIELD1": "Sun Life Financial",
      "FIELD2": "Financial Service",
      "FIELD3": "Wellesley, MA",
      "FIELD4": "Kristine Ebert",
      "FIELD5": "Kristine.Ebert@sunlife.com"
    },
    {
      "FIELD1": "Swiss Re",
      "FIELD2": "Reinsurance (L/H)",
      "FIELD3": "Fort Wayne, IN",
      "FIELD4": "Rachel (Li-Ming) Chin",
      "FIELD5": "LiMing_Chin@swissre.com"
    },
    {
      "FIELD1": "The Hanover Insurance Group",
      "FIELD2": "P&C",
      "FIELD3": "Worcester, MA",
      "FIELD4": "Voon Lai",
      "FIELD5": "vlai@hanover.com"
    },
    {
      "FIELD1": "Transamerica",
      "FIELD2": "Life",
      "FIELD3": "Baltimore, MD",
      "FIELD4": "Donald Krouse",
      "FIELD5": "donald.krouse@transamerica.com"
    },
    {
      "FIELD1": "Travelers",
      "FIELD2": "P&C",
      "FIELD3": "Hartford, CT",
      "FIELD4": "Trevor Franda",
      "FIELD5": "Tfranda@travelers.com"
    },
    {
      "FIELD1": "United Shore",
      "FIELD2": "Wholesale Mortgage Lender",
      "FIELD3": "Pontiac, MI",
      "FIELD4": "Kyle Williamson",
      "FIELD5": "kwilliamson@unitedshore.com"
    },
    {
      "FIELD1": "Wakely Consulting Group",
      "FIELD2": "Consulting",
      "FIELD3": "Tampa, FL",
      "FIELD4": "Mark Koransky",
      "FIELD5": "mark.koransky@wakely.com"
    },
    {
      "FIELD1": "Westfield Insurance",
      "FIELD2": "P&C, Multi-line Insurance",
      "FIELD3": "Westfield Center, OH",
      "FIELD4": "Andrew Farver",
      "FIELD5": "andrewfarver@westfieldgrp.com"
    },
    {
      "FIELD1": "Willis Towers Watson",
      "FIELD2": "Consulting",
      "FIELD3": "Detroit, MI",
      "FIELD4": "Tara Wozniak",
      "FIELD5": "tara.wozniak@willistowerswatson.com"
    },
    {
      "FIELD1": "Zurich",
      "FIELD2": "Reinsurance (L/H)",
      "FIELD3": "Schaumburg, IL",
      "FIELD4": "Zack Martin",
      "FIELD5": "zack.martin@zurichna.com"
    }
   ]
