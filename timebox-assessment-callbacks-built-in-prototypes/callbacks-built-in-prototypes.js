//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Write a function called dragonMapper that takes in an 
//array and maps over each element, adding the string 
//'...here be dragons' to the end of each element. 
//dragonMapper should return the the new array. You should
//use the built-in array method .map
  
  //Code here
  function dragonMapper(arr){
    return arr.map(e => e + '...here be dragons')
  }



//////////////////PROBLEM 2////////////////////

//Write a function called cookieLoversOnly that takes 
//in an array and filters out every object that
//does NOT have the key favoriteCookie.
//cookieLoversOnly should return the filtered array.
  
  //Code here
  function cookieLoversOnly(arr) {
    return arr.filter(e => e.favoriteCookie)
  }

//////////////////PROBLEM 3////////////////////

//Write a function called changeValue that takes 
//in an array, and a callback function.
//changeValue should invoke the callback function 
//for every element in the array. 
//changeValue should pass the current element into 
//the callback function as an argument every time it is invoked.
//Hint: there is an array method for this.


  //Code here
  function changeValue(arr, callback){
    arr.forEach(e => callback(e))
  }


//////////////////PROBLEM 4////////////////////

//Write a function called findProduct that takes in 
//an array, and uses .reduce to find the product of 
//the elements (here the word product means the result 
//of multiplying all the elements together)
//Return the product.
  
  //Code here
  function findProduct(arr){
    return arr.reduce((accum, val) => accum * val, 1)
  }


//////////////////PROBLEM 5////////////////////

//Write a function called cipherize that takes in 
//an array, and a string. It should use the 
//array method .indexOf to find the index of the passed-in 
//string in the array. Then, it should use the method .charAt
//to find the character at that index, in the string. 
//Return that character.

//EX: cipherize(["hello", "world", "wide", "web"], "wide")
// index of string in the array: 2
// character at index 2 of "wide": "d"
// cipherize will return: "d"

  //Code here
  function cipherize(arr, str){
      let index = arr.indexOf(str)
      return str.charAt(index)
  }


//////////////////PROBLEM 6////////////////////

//Write a function called reverseMe that takes in 
//a string, reverses it, and returns the reversed 
//string. Use built-in methods for taking the string 
//apart, reversing it, and putting it back together again.

  //Code here
  function reverseMe(str){
      return str.split('').reverse().join('')
  }

//////////////////PROBLEM 7////////////////////

//Write a function called stringItOut that takes in 
//an array, sorts it from greatest to least, and returns 
//the array converted into a string using the native 
//array toString method.

  //Code here
  function stringItOut(arr){
      return arr.sort((a, b) => {
        return a > b ? -1 : 1
      }).toString()
  }


//////////////////PROBLEM 8////////////////////

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
  var mathResult = math(complex, 2, 3)


//////////////////PROBLEM 9////////////////////

//Create a function called invokesCallbacks that takes
//three parameters: a number, a callback, and another callback.
//If the number is greater than 10, invokesCallbacks should
//return the FIRST callback param invoked. Else, invokesCallbacks 
//should return the SECOND callback param invoked.

  //Code here
  function invokesCallbacks(num, cb1, cb2){
    if(num > 10) {
      return cb1()
    } else {
      return cb2()
    }
  }

//////////////////PROBLEM 10////////////////////

//Within the function timedGreeting below, create a
//setTimeout (a native javascript method) 
//that assigns the result 
//of invoking the callback parameter 
//to the variable greeting, after 1 second.

  var greeting;

  function timedGreeting(callback){

    //Code here
    setTimeout(() => greeting = callback(), 1000)
    
  }

