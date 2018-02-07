// +++++++++ Start Here! All problems are below. +++++++++//

// /////////////////Problem 1//////////////////
// What is context? Uncomment the best answer.

// var context = "The file which is the execution context of the running code, represented by 'context' keyword."
// var context = "The object which is the execution context of the running code, represented by 'this' keyword.";
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
// var contextRubberDucks = 'window';
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
// var contextBreakMetro = 'dcMetro';
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


// Now, invoke areWeThereYet and save the result to
// a variable named moreToGo.

// CODE HERE


// Now, uncomment the best answers:

// What will the value of moreToGo be?
// var valMoreToGo = 1500
// var valMoreToGo = NaN;
// var valMoreToGo = undefined
// var valMoreToGo = -1500

// What was the context of areWeThereYet when you ran it?
// var contextAreWeThereYet = "ascent"
// var contextAreWeThereYet = 'window';
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


// Now, invoke almostThere and save the result to
// a variable named finalDescent.

// CODE HERE


// Now, uncomment the best answers:

// What will the value of finalDescent be?
// var valFinalDescent = 21500
// var valFinalDescent = NaN
// var valFinalDescent = undefined
// var valFinalDescent = -21500;

// What was the context of almostThere when you ran it?
// var contextAlmostThere = 'descent';
// var contextAlmostThere = "window"
// var contextAlmostThere = "Object"
// var contextAlmostThere = "context.js"

