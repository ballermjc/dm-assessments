//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called travel. It should take in 2 parameters,
//destination and travelMode (both will be strings). Inside the 
//travel function, declare a variable called "origin" and assign 
//it the value "Salt Lake City".
//Travel should return a function, which returns a string: 
//origin + " to " + destination + ", " + travelMode

function travel(destination, travelMode) {
  var origin = "Salt Lake City"
  return function() {
    return origin + " to " + destination + ", " + travelMode
  }
}


//////////////////PROBLEM 2////////////////////

//Based on the function below, answer the following
//by uncommenting the correct answer for each question.

function adventure(mode) {
  var origin = "Salt Lake City"
  return function(destination) {
    return "I'm going on an adventure from " + origin + 
          " to " + destination + " by " + mode
  }
}

//What data type is the value returned by calling adventure("plane")?

var adventureReturns = "function"
// var adventureReturns = "string"
// var adventureReturns = "undefined"
// var adventureReturns = "object"


//True or false: "origin" is a public variable contained within "adventure".

// var originIsPublic = true
var originIsPublic = false


//True or false: the function returned from "adventure" is public.

var functionIsPublic = true
// var functionIsPublic = false

//True or false: the function returned from "adventure" can access
//the parameter "mode", and the variable "origin", even after 
//the function "adventure" has exited.

var functionCanStillAccess = true
// var functionCanStillAccess = false


//////////////////PROBLEM 3////////////////////

//Given the function below:

function careerUpdater(name, city, job) {
  var info = {
    name,
    city,
    job
  }
  function moveCities(newCity, newJob = job){
    info.city = newCity
    info.job = newJob
    return name + " now works as a " + info.job + " in " + info.city
  }
  return moveCities
}

//Create an instance of careerUpdater, with the name "Anne",
//city "Windsor", and job "Lady-In-Waiting". Store the resulting
//function in a variable called "annePromotion"

var annePromotion = careerUpdater("Anne", "Windsor", "Lady-In-Waiting")


//Call annePromotion with the arguments "London", "Queen". Store the 
//result in a variable called "anneResumeEntry1"

var anneResumeEntry1 = annePromotion("London", "Queen")


//Then, call annePromotion again with just the argument 
//"Tower of London dungeons" and save it to a variable called
//"anneResumeEntry2"

var anneResumeEntry2 = annePromotion("Tower of London dungeons")

//Based on the instance of annePromotion, and the lack of a newJob
//argument, what should Anne's job be after creating anneResumeEntry2? 
//Uncomment the answer.

var annesJobInDungeon = "Lady-In-Waiting"
// var annesJobInDungeon = "Queen"
// var annesJobInDungeon = "undefined"


//Create another instance of careerUpdater, with the arguments
//"Clara", "Salt Lake City", "student". Store it in a var
//called "claraPromotion".

var claraPromotion = careerUpdater("Clara", "Salt Lake City", "student")


//Then, call claraPromotion with the arguments "Seattle", "programmer"
//and store it in a variable called "claraResumeEntry"
var claraResumeEntry =claraPromotion("Seattle", "programmer")