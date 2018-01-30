
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create an array called rubberDucks with the values "yellow",
//"red", "blue", "brown" in the array.

  //Code here
  var rubberDucks = ["yellow", "red", "blue", "brown"]



//////////////////PROBLEM 2////////////////////
  
//Uncomment the correct answers to the following:

//What is the first numbered index of an array?

  // var answer = 1
  var answer = 0

//How do you access the length of an array, such as the array
//you created above called rubberDucks?

// var arrayLength = Array.length(rubberDucks)
var arrayLength = rubberDucks.length
// var arrayLength = rubberDucks.len
// var arrayLength = rubberDucks.length()



//////////////////PROBLEM 3////////////////////

//Create an function called getLast that takes in a single 
//parameter: an array, and returns the last element of the array.
//The passed-in array should NOT be modified.

  //Code here
  function getLast(arr) {
    return arr[arr.length - 1]
  }


//////////////////PROBLEM 4////////////////////



//Create an function called getElement that takes in two 
//parameters: an array, an index, and returns the element 
//at the numbered index of that array.
//The passed-in array should NOT be modified.

  //Code here
  function getElement(arr, index){
    return arr[index]
  }



//////////////////PROBLEM 5////////////////////

//Create an function called changeElement that takes in three 
//parameters: an array, an index, and a value. changeElement
//should change the element at the numbered index of that array
//to the given value. You do not need to return the array.

  //Code here
  function changeElement(arr, index, val){
    arr[index] = val
  }


//////////////////PROBLEM 6////////////////////
//Create a function called trim that takes in an array and removes 
//the last element. trim should return the array.

  //Code here
  function trim(arr){
    arr.pop()
    return arr
  }


//////////////////PROBLEM 7////////////////////

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


//////////////////PROBLEM 8////////////////////

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


//////////////////PROBLEM 9////////////////////

//Create a function called changeName that takes in an array
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.

  //Code here
  function changeName(arr){
    arr[arr.indexOf('Tolkn')] = "Tolkien"
    return arr
  }


//////////////////PROBLEM 10////////////////////

//Finish the function addNumbers so that it pushes numbers starting at 
//0 and up to (but not including) the value passed in, into the array 
//myNumbers. Make sure to return the array myNumbers at the end.
//ex: passed 5 --> return [0, 1, 2, 3, 4]

  function addNumbers(value){
      var myNumbers = []
      //Code here
      for(let i = 0; i < value; i++){
        myNumbers.push(i)
      }
      return myNumbers
      
  }


//////////////////PROBLEM 11////////////////////

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



//////////////////PROBLEM 12////////////////////

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


//////////////////PROBLEM 13////////////////////

//Finish the function canYouHearMe. Assume that there is a function 
//called hello. It takes no parameters. Inside canYouHearMe, make a 
//for loop that concatenates param with the result of invoking the 
//function hello, 10 times.

  function canYouHearMe(param){

    //Code here
    for(let i = 0; i < 10; i++){
      param += hello()
    }

    return param
  }  



//////////////////PROBLEM 14////////////////////

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