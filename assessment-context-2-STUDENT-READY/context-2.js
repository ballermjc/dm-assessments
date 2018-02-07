// +++++++++ Start Here! All problems are below. +++++++++//

// /////////////////Problem 1//////////////////
// Given the following code, answer the following
// questions.

function checkOut() {
  this.available = !this.available;
  return `"${this.title}" is ${this.available ? '' : 'not '}available for check-out.`;
}

var book1 = {
  title: 'One Fish, Two Fish, Red Fish, Blue Fish',
  author: 'Dr. Seuss',
  available: false,
  checkOut: checkOut
};

var book2 = {
  title: "Oh, the Places You'll Go!",
  author: 'Dr. Seuss',
  available: false
};

// Q1:
// Run the method checkOut on book1, and save it to a
// variable named book1CheckOut.

// CODE HERE


// What is the context of naming book1.checkOut()?
// var q1Context = "explicit"
// var q1Context = 'implicit';
// var q1Context = "default"
// var q1Context = "new"


// Q2:
// Run the function checkOut on book2, and save it to a
// variable named book2CheckOut.

// CODE HERE


// What is the context of running the function checkOut on book1?
// var q2Context = 'explicit';
// var q2Context = "implicit"
// var q2Context = "default"
// var q2Context = "new"


// Q3:
// Run the function checkout, and save it to a
// variable named globalCheckOut.

// CODE HERE


// What is the context of running checkOut()?
// var q3Context = "explicit"
// var q3Context = "implicit"
// var q3Context = 'default';
// var q3Context = "new"


// Q4:
// Using the .apply method on the book1's checkOut function, run it using book2
// as the argument. Save the result to a variable named book2CheckOut2.

// CODE HERE


// What is the context of applying the book1 method
// checkOut to book2?
// var q4Context = 'explicit';
// var q4Context = "implicit"
// var q4Context = "default"
// var q4Context = "new"


// /////////////////Problem 2//////////////////
// Given the following code, answer the following
// questions.

var person1 = { name: 'Anne', age: 29, title: 'Lady-In-Waiting' };
var person2 = { name: 'Catherine', age: 36, title: 'Queen of England' };

function updatePerson(name, age, title) {
  this.name = name;
  this.age = age;
  this.title = title;
  return this;
}

// Q1:
// Use the method .call to run updatePerson on person1;
// pass in the values "Anne Boleyn", 30, and "Queen of
// England"; save the result to a variable named queenAnne.

//Code here


// Q2:
// Use the method .apply to run updatePerson on person2;
// pass in the values "Catherine of Aragon", 37, and "Former
// Queen"; save the result to a variable named queenAnne.

//Code here


// /////////////////Problem 3//////////////////
// Given the constructor function below, answer
// the following questions.

function Castle(name, location, color, material, hasMoat) {
  this.name = name;
  this.location = location;
  this.color = color;
  this.material = material;
  this.hasMoat = hasMoat;
  this.getCastle = function () {
    console.log(this);
    return `${this.name} Castle in ${this.location}, ${this.color} ${this.material}, has ${this.hasMoat ? 'a' : 'no'} moat.`;
  };
}

var chambord = new Castle('Chambord', 'France', 'grey', 'stone', true);
var hampton = new Castle('Hampton Court', 'England', 'red', 'bricks', false);

// Q1:
// What is the context of running
// new Castle("Chambord", "France", "Grey", "Stone", true)?

// var q1CastleContext = "explicit"
// var q1CastleContext = "implicit"
// var q1CastleContext = "default"
// var q1CastleContext = 'new';


// Q2:
// Run the getCastle method on chambord, and
// save the result to a variable ran chambordInfo.

// CODE HERE


// What was 'this' when you ran chambord.getCastle()?

// var getCastleContext = "Castle"
// var getCastleContext = 'chambord';
// var getCastleContext = "new"
// var getCastleContext = "window"
