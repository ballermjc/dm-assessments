
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

//Create a function called addMoreDucks that takes in an array
//and if the array's length is greater than 4, replace the
//3rd element of the array with the string '42 ducks'. 
//addMoreDucks should return the array.

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
//and finds the element "Tolkn", and changes it to "Tolkien".
//changeName should return the array.

  //Code here
  function changeName(arr){
    arr[arr.indexOf('Tolkn')] = "Tolkien"
    return arr
  }
