//ES6	
//let	-- done
//const	-- done
//template literals	-- done
//spread -- done
//rest -- done 
//destructuring	-- done
//arrow functions -- done
var color = "blue"
var getter = {
  color: "",
  get: function getter(param) { this.color = param }
}



//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Finish the function addDucks by writing a for loop that loops
//through the parameter arr, adding the string "Duck" to each element 
//(i.e. - arr[0] = "yellow"; should become "yellowDuck". Use the
//keyword let to declare your for-loop's iterator, and call it "i"

  function addDucks(arr, i){

    //WRITE YOUR FOR-LOOP HERE
    //For your iterator, declare it with the let keyword, and name it "i"
    for(let i = 0; i < arr.length; i++){
      arr[i] += "Duck"
    }

    //DO NOT TOUCH THIS
    return [arr, i]
  }


//////////////////PROBLEM 2////////////////////
//Within the if statement below, declare a variable 
//called "color" with the keyword "let". Assign it
//the string "red". Do not touch the function 
//invocation within the if statement.

if(true){
  //CODE HERE
  let color = "red"

  //DO NOT TOUCH THIS LINE
  getter.get(color)
}

//////////////////PROBLEM 3////////////////////
//Declare a variable with the keyword "const",
//and call it "greetingsEarthlings"
//Assign it the value of "Hello".

const greetingsEarthlings = "Hello"


//////////////////PROBLEM 4////////////////////
//Create a function called madLib that takes in a
//parameters, a strings. madLib should return 
//the template string `____, my dear Watson`.
//The template string should replace the blank
//with the string parameter. 

//You MUST use a template string! If you need to
//look it up, check out the documentation.

function madLib(a){
  return `${a}, my dear Watson.`
}


//////////////////PROBLEM 5////////////////////
//Based on the following code, answer the question below:

var arr = ["hey", "hi", "ciao"]
var obj = { a: "a", b: "b", c: "c"}
// Example A: [1, 2, 3, ...obj]
// Example B: [1, 2, 3, ...arr]
// Example C: {one: 1, two: 2, ...obj}
// Example D: {one: 1, two: 2, ...arr}

//Remove the examples which incorrectly use the 
//spread operator from the array "answers" - keep
//all valid uses.
// var answers = ["Example A", "Example B", "Example C", "Example D"]
var answers = ["Example B", "Example C", "Example D"]


//////////////////PROBLEM 6////////////////////
//Create an arrow function called "cleanUp". It should
//take in a string, and remove all spaces & return the 
//string without spaces.

var cleanUp = (s) => s.split(' ').join('')

//////////////////PROBLEM 7////////////////////
//Finish the function below. Assume that the 
//parameter obj has a property called "ocean".
//Destructure the property ocean from obj.
//Return ocean.

function whatOcean(obj){

  //Code here
  let {ocean} = obj
  return ocean
}

//////////////////PROBLEM 8////////////////////
//Create a function called leftovers that takes 
//in 2 parameters: a string, and a rest parameter 
//(if you don't know what this is,
//check out the documentation for it). 
//leftovers should return the string, plus " & ", 
//plus the last element of the rest parameter.

function leftovers(dinner, ...left){

  return `${dinner} & ${left[left.length -1]}`
}
