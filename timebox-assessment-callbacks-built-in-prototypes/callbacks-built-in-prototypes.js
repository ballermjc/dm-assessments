// map	-- Done
// filter	-- Done
// forEach -- Done
// reduce	-- DONE

// indexOf -- Done	
// charAt	-- DONE

// find	

// join	-- DONE
// split -- DONE
// reverse -- DONE

// sort	-- DONE
// toString	-- DONE

// Can pass a function into a function as a parameter	-- DONE
// can invoke parameter inside -- DONE

//MOVE TO SOMETHING ELSE!!!!
// can use callbacks for asyncrohnous process	 -ex Set timeout
// Student can use callbacks for synchronus higher order processes-- DONE	

//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Write a function called dragonMapper that takes in an 
//array and maps over each element, adding the string 
//'...here be dragons' to the end of each element. 
//dragonMapper should return the result.
  
  //Code here
  function dragonMapper(arr){
    return arr.map(e => e + '...here be dragons')
  }



//////////////////PROBLEM 2////////////////////

//Write a function called cookieLoversOnly that takes 
//in an array and filters out every object that
//does not have the key favoriteCookie.
//cookieLoversOnly should return the result.
  
  //Code here
  function cookieLoversOnly(arr) {
    return arr.filter(e => e.favoriteCookie)
  }

//////////////////PROBLEM 3////////////////////

//Write a function called changeValue that takes 
//in an array, and a callback function that it calls 
//on each element.
//changeValue should return the result!!

  //Code here
  function changeValue(arr, callback){
    return arr.forEach(e => callback(e))
  }


//////////////////PROBLEM 4////////////////////

//Write a function called findProduct that takes in 
//an array, and uses .reduce to find the product of 
//the elements. Return the product.
  
  //Code here
  function findProduct(arr){
    return arr.reduce((accum, val) => accum * val, 1)
  }


//////////////////PROBLEM 5////////////////////

//Write a function called cipherize that takes in 
//an array, a string, and an index. It should use the 
//array method .indexOf to find the index of the string
//in the array.
//Then, concatenate the first element of the array with 
//the passed-in string, and use the string method .charAt 
//to find the letter at the passed-in index of the new string. 
//Return the sum of the string's index in the array, and the 
//letter.

//EX: cipherize(["hello", "world", "wide", "web"], "wide", 7)
// index of string in the array: 2
// new string of first element and "wide": "hellowide"
// character at index 7 of the new string "hellowide": "d"
// cipherize will return: "2d"

  //Code here
  function cipherize(arr, str, ind){
      let index = arr.indexOf(str)
      let newStr = arr[0] + str
      return index + newStr.charAt(ind)
  }


//////////////////PROBLEM 6////////////////////

//Write a function called reverseMe that takes in 
//a string, reverses it, and returns the reversed string.

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
//that assigns the value 
//of calling the cb parameter 
//to the variable greeting, after 1 second.

  var greeting;

  function timedGreeting(cb){

    //Code here
    setTimeout(() => greeting = cb(), 1000)
    
  }

