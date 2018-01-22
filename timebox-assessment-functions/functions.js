//========= DO NOT TOUCH THIS CODE =========//
var testing = {
    a: hey ? true : false,
    b: hi ? true : false,
    c: hello ? true : false,
}
//============= CONTINUE BELOW =============//
//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////
//Create a function called hey, using a function
//declaration. hey should take in a name, and return
//the string "Hey " plus the name parameter.
function hey(name){
  return "Hey " + name
}

///////////////////Problem 2//////////////////
//Create a function called hi, using a function
//declaration. hi should take in a name, and return
//the string "Hi " plus the name parameter.
var hi = function(name){
  return "Hi " + name
}

///////////////////Problem 3//////////////////
//Create a function called hello, using a function
//declaration. hello should take in a name, and return
//the string "Hello " plus the name parameter.
var hello = (name) => "Hello " + name


///////////////////Problem 4//////////////////
//Create a function named fun, which takes in
//a single string parameter, and returns that string
// with "!!!!!" added to the end of it. Then, call fun 
//with the string "Yay" and save the result to a 
//variable called funTimes.
function fun(what){
  return what + "!!!!!"
}
var funTimes = fun("Yay")


///////////////////Problem 5//////////////////
//Finish the function climb below. Use the built-in local
//variable arguments, within the function climb. 

//Note: DO NOT alter the function climb to take in parameters.
//The purpose of this exercise is to use the local arguments
//variable within the function scope.

//If there is a string at arguments[0], and false
//at arguments[1], return "On belay?". 

//If there is a string at arguments[0], and true at arguments[1],
//return "Climbing!"

//Otherwise, return "Let's set up the belay rope before we climb."

function climb(){
  //What is the arguments variable? Try calling climb
  //and passing in ("Ellie", true) and see what is logged
  //to the console.
  console.log('function climb\'s local arguments var - ', arguments)

  //CODE HERE - DO NOT TOUCH THE CODE ABOVE!
  if(arguments[0] && typeof arguments[0] === 'string'){
    if(arguments[1]){
      return "Climbing!"
    } else {
      return "On belay?"
    }
  } else {
    return "Let's set up the belay rope before we climb."
  }
}

///////////////////Problem 6//////////////////
//Create a function called keyword. Inside, 
//save a function expression to a variable
//called key. That function expression should
//return the string "word". Then, return key.

//note: key should not be an arrow function,
//but a function expression saved to the variable key.

function keyword(){
  var key = function () { return "word" }
  // var key =  () =>  word 
  return key
}

///////////////////Problem 7//////////////////
//Answer the following questions, choosing the best 
//answer for each based on the following code:

function argsVsParams(a, b, c){
  let z = 200
  return (a * b) + c - z
}
var num = 7
argsVsParams(2, 3, num)

//What is z?
// var z = "argument"
// var z = "let"
// var z = "parameter"
var z = "variable"

//What is a?
// var a = "argument"
// var a = "let"
var a = "parameter"
// var a = "variable"

//What is c?
// var c = "argument"
// var c = "let"
var c = "parameter"
// var c = "variable"

//What is 3?
var three = "argument"
// var three = "parameter"
// var three = "variable"

//What is num, when it is passed into the function?
var seven = "argument"
// var seven = "parameter"
// var seven = "variable"


///////////////////Problem 8//////////////////
//Answer the following questions, choosing the best 
//answer for each based on the following code:

function loopDeLoop(array){
  var finishedLoop = false

  for(var i = 0; i < array.length; i++){
    if(array[i] === "X") {
      return "Leaving early...at index " + i
    }
  }
  if(i === array.length){
    return "Finished the loop."    
  } else {
    return "Will I ever get used?"
  }
}

//What will be returned from loopDeLoop([1, 2, 3, 4])?
// var answer1 = "Leaving early...at index 4"
var answer1 = "Finished the loop."
// var answer1 = "Will I ever get used?"

//What will be returned from loopDeLoop([1, "X", 3, 4])?
// var answer2 = "Leaving early...at index 4"
var answer2 = "Leaving early...at index 1"
// var answer2 = "Finished the loop."
// var answer2 = "Will I ever get used?"

//What will be returned from loopDeLoop(["X", 2, "X", 4])?
// var answer3 = "Leaving early...at index 2"
var answer3 = "Leaving early...at index 0"
// var answer3 = "Finished the loop."
// var answer3 = "Will I ever get used?"

//Will the else ever catch?
// var answer4 = "Yes, if we finish the loop."
// var answer4 = "Yes, if we don't finish the loop."
var answer4 = "No, by that line of code i is array.length."
// var answer4 = "No, by that line of code i is 1 less than array.length."

///////////////////Problem 9//////////////////
//Answer the following questions, uncommenting the 
//best answer for each based on the following code:

function funcA(){
  return 1
}

var funcB = function (){
  return 2
}

var funcC = () => 3

//Which of the following functions will be hoisted?
//Remove the function names that are NOT hoisted.
// var answer5 = ["funcA", "funcB", "funcC"]
var answer5 = ["funcA"]


///////////////////Problem 10//////////////////
//Create a function called janus that takes in a single
//parameter, a boolean. Inside the function janus,
//create a function called left, which returns the string
//"Looking backwards". Also inside the function janus,
//create a function called right, which returns the string,
//"Looking forwards".
//If the check if the parameter is true. If true, 
//return the function right; otherwise, return left.

function janus(thisWay){
  function left(){
    return "Looking backwards"
  }
  function right(){
    return "Looking forwards"
  }
  return thisWay ? right : left
}
