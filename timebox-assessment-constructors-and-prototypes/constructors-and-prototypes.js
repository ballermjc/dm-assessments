//////////////////////MEGAN///////////////////////


//////////////////PROBLEM .5////////////////////

// Get the following constructor function to pass the tests.

//Broken on purpose 

function EgyptianGoddesses(name, oversees, strength, weakness) {
  name = name;
  oversees = oversees;
  strength = strength;
  weakness = weakness;

  return function() {
    name,
    oversees,
    strength,
    weakness
  }
  
}

// The variable maat below news to create a new Egyptian Goddess.

var maat = ['Maat', 'Truth and Justice', 'Balancing and Just', 'Exacting in her standards']




//////////////////PROBLEM 1////////////////////

// Get the following constructor function to pass the tests.

//Broken on purpose 

function TestScores() {
  this.name;
  this.percent;

  return this.name + this.percent
}


// Now create a new TestScore with the about constructor function called 'suzy'. Suzy got 98 on the test. 





//////////////////PROBLEM 2////////////////////

// Write a constructor function Caveman that takes in a name, age, and weapon as its three parameters.

// Each caveman should have a property called health that is equal to 100 and a property called energy that is equal to 100.


function Caveman(name, age, weapon) {
  this.name = name;
  this.age = age;
  this.weapon = weapon;
  this.health = 100;
  this.energy = 100;
}

// Now create a new Caveman with the constructor function you made called 'larry'. Larry is 25 and has a 'rock' for a weapon.

var larry = new Caveman('Larry', 25, 'rock')









/////////////////////JAMES///////////////////////

//////////////////PROBLEM 3////////////////////

//Based on the following set of functions, alter
//the following arrays to contain only the strings
//that contain the names of the variables that are 
//in scope for the following code.

const hela = "Hela"

function norsePantheon(){

  var odin = "Odin"
  for(let asgardians = 0; asgardians < 12; asgardians++) {
    let frigga = "Frigga"

    console.log(odin + "'s Queen is " + frigga)
  }


}

function valhalla(isRagnarok){
  var watcher = "Heimdall"
  let response = hela + " is here."

  if(isRagnarok){
    let valkyrie = "Valkyrie"
    
    response = valkyrie + response.slice(5)
  } 
  console.log(valkyrie)
  return response
  
}

//REMOVE THE NAMES OF THE VARIABLES THAT DO NOT BELONG

//This array should only contain variables accessible in global scope
// var norseGlobalScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]
var norseGlobalScope = ["hela"]

//This array should only contain variables accessible in scope of the 
//function norsePantheon
// var norsePantheonScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]
var norsePantheonScope = ["hela", "odin"]

//This array should only contain variables accessible in scope of the 
//for-loop within the function norsePantheon
// var norsePantheonLoopScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]
var norsePantheonLoopScope = ["hela", "odin", "asgardians", "frigga"]

//This array should only contain variables accessible in scope of the 
//the function valhalla
// var valhallaScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]
var valhallaScope = ["hela", "watcher", "response"]

//This array should only contain variables accessible in scope of the 
//if statement of the function valhalla
// var valhallaIfStatementScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]
var valhallaIfStatementScope = ["hela", "watcher", "response", "valkyrie"]


//////////////////PROBLEM 4////////////////////

//Based on the following set of functions, uncomment
//the correct answers.

var color = "grey"
let weather = "foggy"

function forecast(skyColor = color, cityWeather = weather){
  return "The sky is " + skyColor + " and it is " + cityWeather + "."
}

function seattle(){
    var color = "purple"
    let weather = "stormy"
    return forecast(color, weather)
}

function vancouver(){
    let color = "iron grey"
    let weather = "rainy"
    return forecast()
}

function denver(color, weather){
    return forecast(color, weather)
}

//What will seattle() return? Uncomment the correct answer.

var seattleWeather = "The sky is purple and it is stormy."
//var seattleWeather = "The sky is grey and it is foggy."
//var seattleWeather = "The sky is undefined and it is undefined."
console.log("seattle", seattle())


//What will vancouver() return? Uncomment the correct answer.

//var vancouverWeather = "The sky is purple and it is stormy."
//var vancouverWeather = "The sky is iron grey and it is rainy."
var vancouverWeather = "The sky is grey and it is foggy."
//var vancouverWeather = "The sky is undefined and it is undefined."
console.log("vancouver", vancouver())


//What will denver() return? Uncomment the correct answer.

//var denverWeather = "The sky is purple and it is stormy."
//var denverWeather = "The sky is iron grey and it is rainy."
var denverWeather = "The sky is grey and it is foggy."
//var denverWeather = "The sky is undefined and it is undefined."
console.log("denver", denver())


//What will denver("blue", "sunny") return? Uncomment the correct answer.

//var denverWeather2 = "The sky is purple and it is stormy."
//var denverWeather2 = "The sky is iron grey and it is rainy."
var denverWeather2 = "The sky is blue and it is sunny."
//var denverWeather2 = "The sky is grey and it is foggy."
//var denverWeather2 = "The sky is undefined and it is undefined."
console.log("denver2", denver("blue", "sunny"))


/////////////////////DAN///////////////////////

//////////////////PROBLEM 5////////////////////

//Create a function called travel. It should take in 2 parameters,
//destination and travelMode (both will be strings). Inside, 
//declare a variable called "origin" and assign it the value "Salt Lake City".
//Travel should return a function, which itself returns a string: 
//origin + " to " + destination + ", " + travelMode

function travel(destination, travelMode) {
  var origin = "Salt Lake City"
  return function() {
    return origin + " to " + destination + ", " + travelMode
  }
}


//////////////////PROBLEM 6////////////////////

//Based on the function below, answer the following
//by uncommenting the correct answers

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


//////////////////PROBLEM 7////////////////////

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