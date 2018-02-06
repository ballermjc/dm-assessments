
//+++++++++ Start Here! All problems are below. +++++++++//


//////////////////PROBLEM 1////////////////////

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


//////////////////PROBLEM 2////////////////////

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
