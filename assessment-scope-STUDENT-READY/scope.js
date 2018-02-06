//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Based on the following set of functions, what is the value of
//the "this" keyword? Uncomment the correct answer.

var functionOne = () => console.log('functionOne', this)

//What is "this" in functionOne?

// var answerOne = "window"
// var answerOne = "functionOne"
// var answerOne = "scope-closures.js"


function functionTwo() {
  console.log('functionTwo', this)
}

//What is "this" in functionTwo?

// var answerTwo = "window"
// var answerTwo = "functionTwo"
// var answerTwo = "scope-closures.js"
  
var myObj = {
  methods: {
    functionThree: () => console.log('functionThree', this),
    functionFour: function() {
      console.log('functionFour', this)
    }
  }
}

//What is "this" in functionThree?
 
// var answerThree = "window"
// var answerThree = "myObj"
// var answerThree = "myObj.methods"
// var answerThree = "scope-closures.js"

//What is "this" in functionFour?

// var answerFour = "window"
// var answerFour = "myObj"
// var answerFour = "myObj.methods"
// var answerFour = "scope-closures.js"



//////////////////PROBLEM 2////////////////////

//Based on the following set of functions, alter
//the provided arrays to contain only the strings
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
var globalScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]

//This array should only contain variables accessible in scope of the 
//function greekPantheon
var greekPantheonScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]

//This array should only contain variables accessible in scope of the 
//for-loop within the function greekPantheon
var greekPantheonLoopScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]

//This array should only contain variables accessible in scope of the 
//the function greekUnderworld
var greekUnderworldScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]

//This array should only contain variables accessible in scope of the 
//if statement of the function greekUnderworld
var greekUnderworldIfStatementScope = ["hades", "zeus", "olympians", "hera", "gatekeeper", "response", "persephone"]


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
var norseGlobalScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]

//This array should only contain variables accessible in scope of the 
//function norsePantheon
var norsePantheonScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]

//This array should only contain variables accessible in scope of the 
//for-loop within the function norsePantheon
var norsePantheonLoopScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]

//This array should only contain variables accessible in scope of the 
//the function valhalla
var valhallaScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]

//This array should only contain variables accessible in scope of the 
//if statement of the function valhalla
var valhallaIfStatementScope = ["hela", "odin", "asgardians", "frigga", "watcher", "response", "valkyrie"]


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

// var seattleWeather = "The sky is purple and it is stormy."
// var seattleWeather = "The sky is grey and it is foggy."
// var seattleWeather = "The sky is undefined and it is undefined."


//What will vancouver() return? Uncomment the correct answer.

// var vancouverWeather = "The sky is purple and it is stormy."
// var vancouverWeather = "The sky is iron grey and it is rainy."
// var vancouverWeather = "The sky is grey and it is foggy."
// var vancouverWeather = "The sky is undefined and it is undefined."


//What will denver() return? Uncomment the correct answer.

// var denverWeather = "The sky is purple and it is stormy."
// var denverWeather = "The sky is iron grey and it is rainy."
// var denverWeather = "The sky is grey and it is foggy."
// var denverWeather = "The sky is undefined and it is undefined."


//What will denver("blue", "sunny") return? Uncomment the correct answer.

// var denverWeather2 = "The sky is purple and it is stormy."
// var denverWeather2 = "The sky is iron grey and it is rainy."
// var denverWeather2 = "The sky is blue and it is sunny."
// var denverWeather2 = "The sky is grey and it is foggy."
// var denverWeather2 = "The sky is undefined and it is undefined."
