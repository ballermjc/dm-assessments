//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////
//Create a function called keyword. Inside, 
//save a function expression to a variable
//called key. That function expression should
//return the string "word". Then, return key.

//NOTE: key should not be an arrow function,
//but a function expression saved to the variable key.

//Code here


///////////////////Problem 2//////////////////
//Answer the questions based on the following code:
//NOTE: Un-comment the line that best fits.

function argsVsParams(a, b, c){
  let z = 200
  return (a * b) + c - z
}
var num = 7
argsVsParams(2, 3, num)

//What is z?
// var z = "argument"
// var z = "function"
// var z = "parameter"
// var z = "variable"

//What is a?
// var a = "argument"
// var a = "function"
// var a = "parameter"
// var a = "variable"

//What is c?
// var c = "argument"
// var c = "function"
// var c = "parameter"
// var c = "variable"

//What is 3?
// var three = "argument"
// var three = "parameter"
// var three = "variable"

//What is num, when it is passed into the function?
// var seven = "argument"
// var seven = "parameter"
// var seven = "variable"


///////////////////Problem 3//////////////////
//Answer the questions based on the following code:
//NOTE: Un-comment the line that best fits.

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
// var answer1 = "Finished the loop."
// var answer1 = "Will I ever get used?"

//What will be returned from loopDeLoop([1, "X", 3, 4])?
// var answer2 = "Leaving early...at index 4"
// var answer2 = "Leaving early...at index 1"
// var answer2 = "Finished the loop."
// var answer2 = "Will I ever get used?"

//What will be returned from loopDeLoop(["X", 2, "X", 4])?
// var answer3 = "Leaving early...at index 2"
// var answer3 = "Leaving early...at index 0"
// var answer3 = "Finished the loop."
// var answer3 = "Will I ever get used?"

//Will the else ever catch?
// var answer4 = "Yes, if we finish the loop."
// var answer4 = "Yes, if we don't finish the loop."
// var answer4 = "No, by that line of code i is array.length."
// var answer4 = "No, by that line of code i is 1 less than array.length."

///////////////////Problem 4//////////////////
//Answer the question based on the following code:

function funcA(){
  return 1
}

var funcB = function (){
  return 2
}

var funcC = () => 3

//Which of the following functions will be hoisted?
//Remove the function names that are NOT hoisted.

var answer5 = ["funcA", "funcB", "funcC"]


///////////////////Problem 5//////////////////
//Create a function called janus that takes in a single
//parameter, a boolean. Inside the function janus,
//create a function called left, which returns the string
//"Looking backwards". Also inside the function janus,
//create a function called right, which returns the string,
//"Looking forwards". If the parameter is true, return 
//the function right, otherwise, return left.

//NOTE: Don't invoke the functions that you return

//Code here

