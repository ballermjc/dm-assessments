
//////////////////PROBLEM 1////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

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




//////////////////PROBLEM 2////////////////////

// Get the following constructor function to pass the tests.

//BROKEN ON PURPOSE 

function TestScores() {
  this.name;
  this.percent;

  return this.name + this.percent
}


// Now create a new TestScore with the about constructor function called 'suzy'. Suzy got 98 on the test. 





//////////////////PROBLEM 3////////////////////

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









//////////////////PROBLEM 4////////////////////



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


//////////////////PROBLEM 5////////////////////

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


//////////////////PROBLEM 6////////////////////

//Create a prototype on for a String call reverse, that return the string, but like reversed.

String.prototype.reverse = function(){
  return this.split('').reverse().join('')
}


//////////////////PROBLEM 7////////////////////

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

