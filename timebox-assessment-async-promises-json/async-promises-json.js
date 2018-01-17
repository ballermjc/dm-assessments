//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////
//Answer the following questions.

//Uncomment the example with correct JSON formatting
// var correctJSON = { "sky": "blue", "earth": "red", "trees": "green", "snow": "white", }
var correctJSON = { sky: "blue", earth: "red", trees: "green", snow: "white" }
// var correctJSON = { "sky": "blue", "earth": "red", "trees": "green", "snow": "white" }
// var correctJSON = { sky: "blue", earth: "red", trees: "green", snow: "white", }
// var correctJSON = { sky: "blue"; earth: "red"; trees: "green"; snow: "white" }


///////////////////Problem 2//////////////////
//Based on the following code:
// 1    {
// 2        "name": "Fluffles",
// 3        species: "Hedgehog",
// 4        "occupation": "Cuddles",
// 5        favoriteFood: "Chocolate Chip Cookies",
// 6        [ "Spiky", "Adorable", "Not fluffy"],
// 7        "favoriteColor": "pine green",
// 8    }

//Which lines contain invalid JSON format? Remove the numbers of valid 
//lines from the array, leaving only the lines with invalid JSON
//in the array invalidJSONLineNumbers
// var invalidJSONLineNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
var invalidJSONLineNumbers = [3, 5, 6, 7]

//What are some common JSON format errors? Remove the ones that are NOT 
//JSON format errors, leaving only descriptions of JSON format errors 
//in the array badJSON.
// var badJSON = ["curly brackets", "quotations on everything", "no quotes on keys", "trailing commas", "always use colons"]
var badJSON = ["no quotes on keys", "trailing commas"]


///////////////////Problem 3//////////////////
//Create a promise and save it to a variable called 
//whereAreMyKeys. The promise should resolve after 1
//second, with the value of "On the table!"

var whereAreMyKeys = new Promise((resolve, reject) => setTimeout(() => resolve("On the table!", 1000)))


///////////////////Problem 4//////////////////
//Within the function lostCityFinder, create a promise and save 
//it to a variable called findAtlantis. findAtlantis should check 
//the param lostCities (it will be an object). If the key 
//'atlantis' points to a truthy value on the object lostCities, the 
//promise should resolve with the value of atlantis.
//If it is not found, or falsy, the promise should reject with the 
//reason "Can't find Atlantis!"

function lostCityFinder(lostCities){

    //CODE HERE
    var findAtlantis = new Promise((resolve, reject) => {
      if(lostCities.atlantis){
        resolve(lostCities.atlantis)
      } else {
        reject("Can't find Atlantis!")
      }
    })

    //DO NOT TOUCH THIS LINE
    return findAtlantis
}

///////////////////Problem 5//////////////////
//There is a promise called goodnight. Chain a .then 
//to the promise goodnight. The .then should assign the 
//resolved value to the variable night.

var night = ""

//CODE HERE

goodnight.then(r => night = r)



///////////////////Problem 6//////////////////
//There is a promise called goodDay. Chain a .then and a .catch
//to the promise goodDay. The .then should assign the resolved 
//value to the variable stillNight; the .catch should assign the
//reason the Promise was rejected to the variable stillNight.

var stillNight = ""

//CODE HERE

goodDay.then(r => stillNight = r).catch(r => stillNight = r)



///////////////////Problem 7//////////////////
//Does the following code demonstrate a valid Promise? 
//Uncomment the right answer below the code.

var myInfo = {
  name: "",
  profilePicURL: "",
  city: "",
  job: ""
}
var displayUser = true

getUser.then(res => {
  let {name, img, city, job} = res
  myInfo = Object.assign(myInfo, {name, city, job, profilePicURL: img})
  return myInfo
}).then(res => console.log(res))
.catch(rej => {
  displayUser = false
})


//Uncomment the correct answer
var isValid = true
// var isValid = false


