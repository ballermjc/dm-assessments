// +++++++++ Start Here! All problems are below. +++++++++//

// /////////////////Problem 1//////////////////
// What is context? Uncomment the best answer.

// var context = "The file which is the execution context of the running code, represented by 'context' keyword."
var context = "The object which is the execution context of the running code, represented by 'this' keyword.";
// var context = "The function which is the execution context of the running code, represented by 'this' keyword."
// var context = "The browser window, represented by 'context' keyword."
// var context = "The html page where the script is running, represented by 'this' keyword."


// /////////////////Problem 2//////////////////
// Based on the following code, what is 'this' in the function
// rubberDucks when we run it below?
// Uncomment the correct answer below.

function rubberDucks() {
  const myContext = this.toString().split(']')[0].split('object ')[1];
  return `Rubber ducks are in the ${myContext}`;
}

rubberDucks();

// var contextRubberDucks = "index.html"
var contextRubberDucks = 'window';
// var contextRubberDucks = "Object"
// var contextRubberDucks = "rubberDucks"
// var contextRubberDucks = "context.js"


// /////////////////Problem 3//////////////////
// Based on the following code, what is 'this' in the method
// breakMetro when we ran dcMetro.breakMetro()?
// Uncomment the correct answer below.

var dcMetro = {
  name: 'Washington, D.C. Public Transit',
  trains: ['Red Line', 'Blue Line', 'Green Line', 'Yellow Line', 'Orange Line', 'Silver Line'],
  breakMetro(index){
    this.trains[index] += " - OUT OF SERVICE"
    return `${this.trains[index]}: train line delayed FOREVER! JK, it's only 15 minutes.`
  }
};

// var contextBreakMetro = "index.html"
// var contextBreakMetro = "window"
// var contextBreakMetro = "Object"
var contextBreakMetro = 'dcMetro';
// var contextBreakMetro = "context.js"


// /////////////////Problem 4//////////////////
// Given the object ascent, assign the value of
// ascent.remainingElevation to a variable
// named areWeThereYet.

var ascent = {
  height: 2000,
  destination: 3500,
  remainingElevation(){
    return this.destination - this.height
  }
};

// CODE HERE
var areWeThereYet = ascent.remainingElevation;

// Now, invoke areWeThereYet and save the result to
// a variable named moreToGo.

// CODE HERE
var moreToGo = areWeThereYet();

// Now, uncomment the best answers:

// What will the value of moreToGo be?
// var valMoreToGo = 1500
var valMoreToGo = NaN;
// var valMoreToGo = undefined
// var valMoreToGo = -1500

// What was the context of areWeThereYet when you ran it?
// var contextAreWeThereYet = "ascent"
var contextAreWeThereYet = 'window';
// var contextAreWeThereYet = "Object"
// var contextAreWeThereYet = "context.js"


// /////////////////Problem 5//////////////////
// Given the object descent, assign the value of
// descent.remainingElevation to a variable
// named almostThere. You should bind it to the
// context descent.

var descent = {
  height: 25000,
  destination: 3500,
  remainingElevation(){
    return this.destination - this.height
  }
};

// CODE HERE
var almostThere = descent.remainingElevation.bind(descent);

// Now, invoke almostThere and save the result to
// a variable named finalDescent.

// CODE HERE
var finalDescent = almostThere();

// Now, uncomment the best answers:

// What will the value of finalDescent be?
// var valFinalDescent = 21500
// var valFinalDescent = NaN
// var valFinalDescent = undefined
var valFinalDescent = -21500;

// What was the context of almostThere when you ran it?
var contextAlmostThere = 'descent';
// var contextAlmostThere = "window"
// var contextAlmostThere = "Object"
// var contextAlmostThere = "context.js"


// /////////////////Problem 6//////////////////
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
var book1CheckOut = book1.checkOut();

// What is the context of naming book1.checkOut()?
// var q1Context = "explicit"
var q1Context = 'implicit';
// var q1Context = "default"
// var q1Context = "new"


// Q2:
// Run the function checkOut on book2, and save it to a
// variable named book2CheckOut.

// CODE HERE
var book2CheckOut = checkOut.call(book2);

// What is the context of running the function checkOut on book1?
var q2Context = 'explicit';
// var q2Context = "implicit"
// var q2Context = "default"
// var q2Context = "new"


// Q3:
// Run the function checkout, and save it to a
// variable named globalCheckOut.

// CODE HERE
var globalCheckOut = checkOut();

// What is the context of running checkOut()?
// var q3Context = "explicit"
// var q3Context = "implicit"
var q3Context = 'default';
// var q3Context = "new"


// Q4:
// Using the .apply method on the book1's checkOut function, run it using book2
// as the argument. Save the result to a variable named book2CheckOut2.

// CODE HERE
var book2CheckOut2 = book1.checkOut.apply(book2);

// What is the context of applying the book1 method
// checkOut to book2?
var q4Context = 'explicit';
// var q4Context = "implicit"
// var q4Context = "default"
// var q4Context = "new"


// /////////////////Problem 7//////////////////
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
var queenAnne = updatePerson.call(person1, 'Anne Boleyn', 30, 'Queen of England');

// Q2:
// Use the method .apply to run updatePerson on person2;
// pass in the values "Catherine of Aragon", 37, and "Former
// Queen"; save the result to a variable named queenAnne.
var queenCatherine = updatePerson.apply(person2, ['Catherine of Aragon', 37, 'Former Queen']);


// /////////////////Problem 8//////////////////
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
var q1CastleContext = 'new';


// Q2:
// Run the getCastle method on chambord, and
// save the result to a variable ran chambordInfo.

// CODE HERE
var chambordInfo = chambord.getCastle();

// What was 'this' when you ran chambord.getCastle()?

// var getCastleContext = "Castle"
var getCastleContext = 'chambord';
// var getCastleContext = "new"
// var getCastleContext = "window"
