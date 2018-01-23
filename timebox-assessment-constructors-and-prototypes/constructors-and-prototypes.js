//////////////////////MEGAN///////////////////////
 
//arrow functions	
//lexical																						
//let vs var	
//block	shadowing	

//Private vs public (only what's returned)	
//snapshot/multi-instance	can invoke returned function later on


//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Based on the following set of functions, what
//is "this" in each of the following functions?
//Uncomment the correct answer.

var functionOne = () => console.log('functionOne', this)
//What is "this" in functionOne?

var answerOne = "window"
//var answerOne = "functionOne"
//var answerOne = "scope-closures.js"


function functionTwo() {
  console.log('functionTwo', this)
}
//What is "this" in functionTwo?

var answerTwo = "window"
//var answerTwo = "functionTwo"
//var answerTwo = "scope-closures.js"
  
var myObj = {
  methods: {
    functionThree: () => console.log('functionThree', this),
    functionFour: function() {
      console.log('functionFour', this)
    }
  }
}

//What is "this" in functionThree?

var answerThree = "window"
//var answerThree = "myObj"
//var answerThree = "myObj.methods"
//var answerThree = "scope-closures.js"

//What is "this" in functionFour?

//var answerFour = "window"
//var answerFour = "myObj"
var answerFour = "myObj.methods"
//var answerFour = "scope-closures.js"



//////////////////PROBLEM 2////////////////////

//Based on the following set of functions, alter
//the following arrays to contain only the strings
//that contain the names of the variables that are 
//in scope for the following code.

var hades = "Hades"

function greekPantheon(){

  var zeus = "Zeus"
  for(var olympians = 0; olympians < 12; olympians++) {
    var hera = "Hera"

    console.log(zeus + "'s Queen is " + hera)
  }

}

function greekUnderworld(season){
  var gatekeeper = "Cerberus"
  var response = hades + " is here."

  if(season === "winter"){
    var persephone = "Persephone"
    
    response = persephone + response.slice(5)
  } 
  console.log(persephone)
  return response
  
}

//REMOVE THE NAMES OF THE VARIABLES THAT DO NOT BELONG

//This array should only contain variables accessible in global scope
// var globalScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]
var greekGlobalScope = ["hades"]

//This array should only contain variables accessible in scope of the 
//function greekPantheon
// var greekPantheonScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]
var greekPantheonScope = ["hades", "zeus", "olympians", "hera"]

//This array should only contain variables accessible in scope of the 
//for-loop within the function greekPantheon
// var greekPantheonLoopScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]
var greekPantheonLoopScope = ["hades", "zeus", "olympians", "hera"]

//This array should only contain variables accessible in scope of the 
//the function greekUnderworld
// var greekUnderworldScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]
var greekUnderworldScope = ["hades", "gatekeeper", "response", "persephone"]

//This array should only contain variables accessible in scope of the 
//if statement of the function greekUnderworld
// var greekUnderworldIfStatementScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]
var greekUnderworldIfStatementScope = ["hades", "gatekeeper", "response", "persephone"]

/////////////////////JAMES///////////////////////




// CLASSES
// Use ES6 syntax to create a new class called Shape.
// The constructor function of the class should store the number of sides passed in a property called sides.
// Each Shape created from this class should have access to a function in the class called report. Report should return the number of sides the shape has. 
// Use the class to create create three new variables, called triangle, square, and pentagon. Give each new variable the correct number of sides when creating it.
//


class Shape {
  constructor(sides) {
    this.sides = sides
  }

  report(){
    return this.sides
  }
}

var triangle = new Shape(3)
var pentagon = new Shape(5)
var square = new Shape(4)


//


// CLASSES
// Create a constructor function called Cohort that can be used to generate DevMountain cohorts. 
// The function should take information about a program, a campus, a number, and an array called students (the students array should contain at least 3 student names).
// The function should also contain two methods:
//  1. sayName - A function that generates an abbreviated name for the cohort. The code should return this string: "This cohort is called " + the language, campus, and number passed in.
//  2. takeAttendance - A function that console.logs the array of students in the cohort.
// After you've made the constructor, use it to create two new cohort objects, named cohort1 and cohort2:
// cohort1 should have a language of "w", a campus of "pr", a number of 27, and an array of strings containing at least 3 student names. 
// cohort2 should have a language of "w", a campus of "pr", a number of 31, and an array of strings containing at least these 4 student names: "Brendan Eich", "Dan Abramov", "Wes Bos", "Kent Dodds", and your name.
// After creating the new cohorts, invoke the sayName method on cohort1, and invoke the takeAttendance method for cohort2.

function Cohort(program, campus, num, students){
    this.program = program,
    this.campus = campus,
    this.num = num,
    this.students = students
    
    this.sayName = function(){
      // console.log("This cohort is called " + this.program + this.campus + this.num)
      return "This cohort is called " + this.program + this.campus + this.num
    }

    this.takeAttendance = function(){
      console.log(this.students)
    }
}
console.log(Cohort)
var cohort1 = new Cohort("w", "pr", 27, ["James","Douglas", "Carlson"])
let cohort2 = new Cohort("w", "px", 31, ["Brendan Eich", "Dan Abramov", "Wes Bos", "Kent Dodds"])
// console.log(cohort1.sayName())
cohort1.sayName();
cohort2.takeAttendance();
// 

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

//Create a prototype on for a String call reverse, that return the string, but like reversed.

String.prototype.reverse = function(){
  return this.split('').reverse().join('')
}


//////////////////PROBLEM 6////////////////////

// Based on the contsructor below for a Person, create a prototype called drinkCoffee, and readDocumentation

// drinkCoffee should increase energy by 10, increase linesOfCode by 50, and decrease quality of code by 1, and returns Person object.
// readDocumentation should decrease energy by 20, decrease linesOfCode by 30, and increase quality of code by 3, and returns Person object.
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.energy = 50;
  this.linesOfCode = 0;
  this.qualityOfCode = 5;
}

Person.prototype.drinkCoffee = function(){
  this.energy += 10;
  this.linesOfCode += 50;
  this.qualityOfCode -= 1;
  return this;
}

Person.prototype.readDocumentation = function(){
  this.energy -= 20;
  this.linesOfCode -= 30;
  this.qualityOfCode += 3;
  return this;
}


//////////////////PROBLEM 7////////////////////

//uncomment the correct anwser:



// Which has better memory performance?

// va