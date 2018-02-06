//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Write a function called stringItOut that takes in 
//an array, sorts it from greatest to least, and returns 
//the array converted into a string using the native 
//array toString method.

  //Code here


//////////////////PROBLEM 2////////////////////

//Given the functions below: invoke the function math
//passing in complex, 2, 3 as parameters, and save the result
//to a variable called mathResult.

  function math(cb, num1, num2){
    return cb(num1, num2)
  }

  function complex(num1, num2){
    return Math.sin((Math.log(num1) + Math.tan(num2) * 100))
  }

  //Code here


//////////////////PROBLEM 3////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks 
//should return the SECOND callback param invoked.

  //Code here


//////////////////PROBLEM 4////////////////////

//Within the function timedGreeting below, create a
//setTimeout (a native javascript method) 
//that assigns the result 
//of invoking the callback parameter 
//to the variable greeting, after 1 second.

  var greeting;

  function timedGreeting(callback){

    //Code here

    
  }

