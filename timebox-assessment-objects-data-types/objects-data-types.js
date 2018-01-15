//Objects	
//dot notation -- DONE
//square bracket -- DONE
//methods	-- DONE
//objects are copy by reference	-- DONE
//when to use variables & square bracket -- DONE	
//for in loops -- DONE
//.keys -- DONE														



///////////////////Problem 1///////////////////
//Given the object below, uncomment the correct usage
//of dot notation to access the duck's "name" property,
//and of bracket notation to access duck's "bites" property.

var duck = {
  name: "Stefan",
  pond: "Hyde Park Serpentine",
  bites: true,
  fluffiness: 100
}

// var accessByDotNotation = duck."name"
// var accessByDotNotation = Object[duck].name
var accessByDotNotation = duck.name

// var accessByBracketNotation = duck{"bites"}
// var accessByBracketNotation = Object[duck][bites]
// var accessByBracketNotation = duck[bites]
var accessByBracketNotation = duck["bites"]
// var accessByBracketNotation = duck(bites)


///////////////////Problem 2///////////////////
//Given the object below, add a method called moveCities
//that takes in a new city, and changes the object's
//city property the new city.

var person = {
  name: "Ella",
  city: "Edinburgh",
  job: "Leader of Ghost Tours"
}

//CODE HERE
person.moveCities = function(newCity){
  this.city = newCity
}


///////////////////Problem 3///////////////////
//Create a function called "keyAccessor" that takes
//in 2 parameters, an array of names, and an object.
//keyAccessor should loop through the array of names, 
//accessing the values of the given keys in the object, 
//and pushing the values into an empty array. 
//keyAccessor should return the new array.

var names = ["anne", "brandon", "charles", "diana"]

var people = {
  anne: { city: "New York", age: 23 },
  brandon: { city: "London", age: 28 },
  charles: { city: "Seattle", age: 33 },
  diana: { city: "Los Angeles", age: 20 },
}

//CODE HERE
function keyAccessor(arr, obj){
  var newArr = []
  arr.map(e => {
    newArr.push(obj[e])
  })
  return newArr
}


///////////////////Problem 4///////////////////
//Create a function called getVals that should take in an
//object. getVals should create an empty array; loop through
//the object; and push each value into the empty array.
//getVals should return the new array.

//CODE HERE
function getVals(obj){
  var newArr = []
  for(let key in obj){
    newArr.push(obj[key])
  }
  return newArr
}

///////////////////Problem 5///////////////////
//Use the built-in keys method to get the keys from the 
//object below; store them in a variable called "doorKeys"

var doors = {
  red: "cedar", 
  blue: "stone", 
  green: "pine", 
  brown: "mahogany", 
}

var doorKeys = Object.keys(doors)


//Data types	
//bool -- done
//string --	done
//int	-- done
//function --	done
//object -- done	
//array	-- done

//typeof	
//null	

//undefined	
//NaN	
//isNaN	
//isArray

//parsing	
//coercion	

//var	
//copy by reference	
//copy by value	



///////////////////Problem 6//////////////////
//Uncomment the array that contains valid JavaScript datatypes

// var jsDataTypes = ["bool", "string", "object", "integer", "function", "undefined"]
// var jsDataTypes = ["boolean", "string", "object", "int", "function"]
// var jsDataTypes = ["bool", "string", "object", "integer", "function"]
var jsDataTypes = ["boolean", "string", "object", "number", "function", "undefined"]


///////////////////Problem 7//////////////////
//Change the value of the variable iLikeChocolate from
//null to a boolean - based on whether or not you like 
//chocolate!

var iLikeChocolate = true


///////////////////Problem 8//////////////////
//Create a string, and assign it to a variable
//called myString

var myString = "hey"


///////////////////Problem 9//////////////////
//Create an integer, and assign it to a variable
//called myInt

var myInt = 5


///////////////////Problem 10//////////////////
//Create a function called myFunction that returns
//the string "I am a function!"

function myFunction() { return "I am a function!" }


///////////////////Problem 11//////////////////
//Create an object called myObject that has a 
//name property (a string), a team property (a string),
//and a method called whatTeam that returns the team
//property.

var myObject = {
  name: "Troy",
  team: "Wildcats",
  whatTeam: function() { return this.team }
}

///////////////////Problem 12//////////////////
//Create an array called myArray that contains:
//1, "two", { three: 3 }, and as the 4th element 
//an array literal that contains 4, 5

var myArray = [1, "two", { three: 3 }, [4, 5]]


///////////////////Problem 13//////////////////
//Make a function called whatAmI that takes in one 
//parameter, a mystery parameter. whatAmI should
//return the data type of the mystery parameter.

function whatAmI(mystery){
  return typeof mystery
}


///////////////////Problem 14//////////////////
//Create a variable called theVoid. Make it null.

var theVoid = null


///////////////////Problem 15//////////////////
//Create a function called undefiner that takes in 
//an array, and sets the 2nd element of that array
//to undefined. undefiner should return the array.

function undefiner(arr){
  arr[1] = undefined
  return arr
}

///////////////////Problem 16//////////////////
//Create a function called nananan that takes in 
//a parameter. If the parameter divided by 2 is NaN, 
//return "BATMAN!". Otherwise, return the result of
//the parameter divided by 2.

function nananan(a){
  if(isNaN(a / 2)){
    return 'BATMAN!'
  } else {
    return a / 2
  }
}

//Now, call nananan with the value NaN, and store the 
//result of the function call in a variable called "na".

var na = nananan(NaN)


///////////////////Problem 17//////////////////
//Create a function called arrayChecker that takes 
//in a parameter. arrayChecker should return true
//if the parameter is an array, and false otherwise.

function arrayChecker(p){
  return Array.isArray(p)
}


///////////////////Problem 18//////////////////
//Create a function called numFromString that takes 
//in a string. numFromString should use the parseInt
//function to convert the string into a base 10 number.
//Return that base 10 number.

function numFromString(b){
  return parseInt(b, 10)
}

///////////////////Problem 19//////////////////
//Create a function called makeItAString that takes 
//in a parameter. makeItAString should use the toString
//function to convert the parameter into a string.
//Return that string.

function makeItAString(b){
  return b.toString()
  // return parseInt(b, 10)
}


///////////////////Problem 20//////////////////
//Uncomment the correct answers below

//What will 100 || 0 result in?
var answer1 = 100
// var answer1 = 0

//What will "Hello" && "Goodbye" result in?
// var answer2 = "Hello"
var answer2 = "Goodbye"

//What will 14 + "" result in?
var answer3 = "14"
// var answer3 = 14

//What will "14" - 10 result in?
// var answer4 = "14"
// var answer4 = "1410"
var answer4 = 4
// var answer4 = 1410

//What will ["anne", "bob"] + ["charlie"] result in?
// var answer5 = ["anne", "bob", "charlie"]
// var answer5 = "annebobcharlie"
var answer5 = "anne,bobcharlie"
// var answer5 = "anne,bob,charlie"



///////////////////Problem 21//////////////////
//Uncomment the correct answers below, based the 
//following code:

var myArr = [1, 2, 3, 4]
var myStr = "Hello, world!"

var myCopiedArr = myArr
var myCopiedStr = myStr

myCopiedArr[1] = 25
myCopiedStr += " What a beautiful day!"

//What is the value of myArr?
//var valMyArr = [1, 2, 3, 4]
var valMyArr = [1, 25, 3, 4]

//What is the value of myStr?
var valMyStr = "Hello, world!"
//var valMyStr = "Hello, world! What a beautiful day!"

//What is the value of myCopiedArr?
//var valMyCopiedArr = [1, 2, 3, 4]
var valMyCopiedArr = [1, 25, 3, 4]

//What is the value of myCopiedStr?
//var valMyCopiedStr = "Hello, world!"
var valMyCopiedStr = "Hello, world! What a beautiful day!"

//Are arrays copied by reference, or by value?
var arraysCopiedBy = "reference"
//var arraysCopiedBy = "value"

//Are string copied by reference, or by value?
//var stringsCopiedBy = "reference"
var stringsCopiedBy = "value"

