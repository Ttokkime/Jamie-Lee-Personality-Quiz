/*Add your JavaScript here*/

var totoroScore = 0;
var spiritedScore = 0;
var howlScore = 0;
var ponyoScore = 0;

var questionCount = 0;

var results = document.getElementById("results");
var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q1a1.addEventListener("click", ponyo);
q1a2.addEventListener("click", howl);
q1a3.addEventListener("click", totoro);
q1a4.addEventListener("click", spirited);

q2a1.addEventListener("click", howl);
q2a2.addEventListener("click", totoro);
q2a3.addEventListener("click", ponyo);
q2a4.addEventListener("click", spirited);

q3a1.addEventListener("click", spirited);
q3a2.addEventListener("click", howl);
q3a3.addEventListener("click", ponyo);
q3a4.addEventListener("click", totoro);

restart.addEventListener("click", restarts);

function ponyo()
{
  ponyoScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " ponyoScore = " + ponyoScore);

  if (questionCount == 3)
  {
    console.log("The quiz is done!"); 
    updateResults();
  }
}

function totoro()
{
  totoroScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " totoroScore = " + totoroScore);
  if (questionCount == 3)
  {
    console.log("The quiz is done!");
    updateResults();
  }
}

function howl()
{
  howlScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " howlScore = " + howlScore);
  
  if (questionCount == 3)
  {
    console.log("The quiz is done!");
    updateResults();
  }
}

function spirited()
{
  spiritedScore += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " spiritedScore = " + spiritedScore);

  if (questionCount == 3)
  {
    console.log("The quiz is done!");
    updateResults();
  }
}

function updateResults()
{
  if (totoroScore >= 2)
  {
    result.innerHTML = "Your result is My Neighbor Totoro!";
    console.log("You are My Neighbor Totoro!");
  }
  else if (spiritedScore >= 2)
  {
  result.innerHTML = "Your result is Sprited Away!";
  console.log("You are Spirited Away!");
  }
  else if (howlScore >= 2)
  {
  result.innerHTML = "Your result is Howl's Moving Castle!";
  console.log("You are Howl's Moving Castle!");
  }
  else if (ponyoScore >= 2)
  {
  result.innerHTML = "Your result is Ponyo!";
  console.log("You are Ponyo!")
  }
  else if (ponyoScore == spiritedScore == howlScore)
  {
    result.innerHTML = "Your result is Ponyo!";
    console.log("You are Ponyo!")
  }
  else if(ponyoScore == howlScore == totoroScore)
  {
    result.innerHTML = "Your result is Howl's Moving Castle!";
    console.log("You are Howl's Moving Castle!");
  }
  else if(spiritedScore == howlScore == totoroScore)
  {
    result.innerHTML = "Your result is My Neighbor Totoro!";
    console.log("You are My Neighbor Totoro!");  
  }
  else if(ponyoScore == spiritedScore == totoroScore)
  {
    console.log("Your result is Spirited Away!");
    result.innerHTML = "You are Sprited Away!";
  }
}

function restarts()
{
	result.innerHTML = "Your result is...";
	questionCount = 0;
	howlScore = 0;
	totoroScore = 0;
	ponyoScore = 0;
	spiritedScore = 0;
}


