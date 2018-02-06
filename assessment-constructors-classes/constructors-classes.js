
//////////////////PROBLEM 1////////////////////

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


//////////////////PROBLEM 2////////////////////

// Create a constructor function called Cohort that can be used to generate DevMountain cohorts. 
// The function should take information about a program, a campus, a number, and an array called students (the students array should contain at least 3 student names).
// The function should also contain two methods:
//  1. sayName - A function that generates an abbreviated name for the cohort. The code should return this string: "This cohort is called " + the program, campus, and number passed in.
//  2. takeAttendance - A function that console.logs the array of students in the cohort.
// After you've made the constructor, use it to create two new cohort objects, named cohort1 and cohort2:
// cohort1 should have a program of "w", a campus of "pr", a number of 27, and an array of strings containing at least 3 student names. 
// cohort2 should have a program of "w", a campus of "pr", a number of 31, and an array of strings containing at least these 4 student names: "Brendan Eich", "Dan Abramov", "Wes Bos", "Kent Dodds", and your name.
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


