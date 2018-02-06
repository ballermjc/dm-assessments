///////////////////Problem 1///////////////////

//Given the object below, uncomment the line with the correct usage:

var duck = {
  name: "Stefan",
  pond: "Hyde Park Serpentine",
  bites: true,
  fluffiness: 100
}

//1. Using dot notation to access the duck's "name" property.
// var accessByDotNotation = duck."name"
// var accessByDotNotation = Object[duck].name
// var accessByDotNotation = duck.name

//2. Using bracket notation to access duck's "bites" property.
// var accessByBracketNotation = duck{"bites"}
// var accessByBracketNotation = Object[duck][bites]
// var accessByBracketNotation = duck[bites]
// var accessByBracketNotation = duck["bites"]
// var accessByBracketNotation = duck(bites)


///////////////////Problem 2///////////////////

//Add a method called moveCities to the object below.
//moveCities should take in a new city, and change the city
//property on the object to the new city passed in.

var person = {
  name: "Ella",
  city: "Edinburgh",
  job: "Leader of Ghost Tours"
}

//CODE HERE


///////////////////Problem 3///////////////////

//Create a function called keyAccessor. keyAccessor should take
//in two parameters: an array of people, and an object.
//Each person's name is also a property on an object.
//keyAccessor should loop through the array of names, and 
//access corresponding values for each name in the object, 
//pushing the values into an empty array. 
//keyAccessor should return the new array.

//Example set of names that could be passed in
var names = ["Dan", "Todd", "Andrew", "Doug"]

//Example object that could be passed in
var people = {
  Dan: { city: "Las Vegas", age: 24 },
  Todd: { city: "France", age: 28 },
  Andrew: { city: "Portland", age: 12 },
  Doug: { city: "New New York", age: 56 },
}

//Example new array that would be returned
var sampleOutput = [
  { city: "Las Vegas", age: 24 },
  { city: "France", age: 28 },
  { city: "Portland", age: 12 },
  { city: "New New York", age: 56 }
]

//CODE HERE



///////////////////Problem 4///////////////////

//Create a function called getVals that should take in an
//object. getVals should create an empty array; loop through
//the object; and push each value into the empty array.
//getVals should return the new array.

//CODE HERE


///////////////////Problem 5///////////////////

//Use the built-in keys method to get the keys from the 
//object below; store them in a variable called "doorKeys"

var doors = {
  red: "cedar", 
  blue: "stone", 
  green: "pine", 
  brown: "mahogany", 
}

//Code here
