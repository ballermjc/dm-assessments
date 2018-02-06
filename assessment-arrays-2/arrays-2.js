
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, inserts the 
//string '42 ducks' as the 3rd element of the array. addMoreDucks
//should return the array.

  //Code here
  function addMoreDucks(arr){
    if(arr.length > 4){
      arr.splice(2, 1, '42 ducks')
    }
    return arr
  }


//////////////////PROBLEM 2////////////////////

//Create a function called cutItOut that takes in an array
//and if the array's length is greater than 4, removes 
//the 3rd element of the array. cutItOut should return the array.

  //Code here
  function cutItOut(arr){
    if(arr.length > 4){
      arr.splice(2, 1)
    }
    return arr
  }


//////////////////PROBLEM 3////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkein".
//changeName should return the array.

  //Code here
  function changeName(arr){
    arr[arr.indexOf('Tolkn')] = "Tolkein"
    return arr
  }

//////////////////PROBLEM 4////////////////////

//Create a function called sunset that copies the existing array sunsetColors 
//by reference and then changes the first element to "blue". sunset should 
//return the copy of the array.

  var sunsetColors = ["brown", "purple", "pink", "red", "orange", "yellow"]
  
  //Code here
  function sunset() {
    var newSunset = sunsetColors
    newSunset[0] = "blue"
    return newSunset
  }



//////////////////PROBLEM 5////////////////////

//Create a function called sunrise that copies the value of the existing array
//sunriseColors and then changes the first element to "green". sunrise should 
//return the copy of the array.

  var sunriseColors = ["yellow", "orange", "red", "pink", "purple", "blue"]
  
  //Code here
  function sunrise() {
    var newSunrise = sunriseColors.slice()
    newSunrise[0] = "green"
    return newSunrise
  }

//////////////////PROBLEM 6////////////////////

//What is the difference between pass by reference, and pass by value?
//Uncomment the correct answer!

// var refVsVal = `Passing by value points to the same object in memory; pass 
//                 by reference creates a new object in memory with the same 
//                 values. A change made to a value copy will change both the
//                 copy and the original; a copy made by reference will only 
//                 change the copy's values`

// var refVsVal = `Passing by reference points to the same array in state;
//                 pass by value creates a new array in state with the same 
//                 values. A change made to a reference copy will change both 
//                 the copy and the original; a copy made by value will only 
//                 change the copy's values`

var refVsVal = `Passing by reference points to the same object in memory;
                pass by value creates a new object in memory with the same 
                values. A change made to a reference copy will change both 
                the copy and the original; a copy made by value will only 
                change the copy's values`

// var refVsVal = `Passing by reference creates a new array in memory that 
//                 points to the original array in memory; pass by value creates 
//                 a new array in state with the same memory address. A change 
//                 made to a either a reference copy or a value copy will change 
//                 both the copy and the original`