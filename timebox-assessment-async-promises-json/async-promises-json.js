//+++++++++ Start Here! All problems are below. +++++++++//

///////////////////Problem 1//////////////////

//Uncomment the example with correct JSON formatting
// var correctJSON = { "sky": "blue", "earth": "red", "trees": "green", "snow": "white", }
// var correctJSON = { sky: "blue", earth: "red", trees: "green", snow: "white" }
var correctJSON = { "sky": "blue", "earth": "red", "trees": "green", "snow": "white" }
// var correctJSON = { sky: "blue", earth: "red", trees: "green", snow: "white", }
// var correctJSON = { sky: "blue"; earth: "red"; trees: "green"; snow: "white" }


///////////////////Problem 2//////////////////
//Based on the following JSON object:
// 1    {
// 2        "name": "Fluffles",
// 3        species: "Hedgehog",
// 4        "occupation": "Cuddles",
// 5        favoriteFood: "Chocolate Chip Cookies",
// 6        [ "Spiky", "Adorable", "Not fluffy"],
// 7        "favoriteColor": "pine green",
// 8    }

//Which lines contain invalid JSON format? Remove the valid line numbers from the array, 
//leaving only the line numbers with invalid JSON in the array invalidJSONLineNumbers
// var invalidJSONLineNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
var invalidJSONLineNumbers = [3, 5, 6, 7]


// PROBLEM
//What are some common JSON format errors? Remove the ones that are NOT 
//JSON format errors, leaving only descriptions of JSON format errors 
//in the array badJSON.
// var badJSON = ["using curly brackets", "using single quotes", "quotations on everything", "no quotes on keys", "trailing commas", "always use colons", "missing commas"]
var badJSON = ["using single quotes", "no quotes on keys", "trailing commas", "missing commas"]



///////////////////Problem 3//////////////////
//Create a promise and save it to a variable called 
//whereAreMyKeys. The promise should resolve after 1
//second (Hint: use setTimeout), with the value of "On the table!"

var whereAreMyKeys = new Promise((resolve, reject) => setTimeout(() => resolve("On the table!", 1000)))


///////////////////Problem 4//////////////////
//Within the function lostCityFinder, create a promise and save 
//it to a variable called findAtlantis. findAtlantis should check 
//the param lostCity (it will be an object). If the key 
//'location' has the value of 'under the sea', the 
//promise should resolve with the value of the key 'name'.
//If the value of 'location' is not 'under the sea', the promise should reject with the 
//reason "Can't find Atlantis!"

function lostCityFinder(lostCity){

    //CODE HERE
    var findAtlantis = new Promise((resolve, reject) => {
      if(lostCity.location === 'under the sea'){
        resolve(lostCity.name)
      } else {
        reject("Can't find Atlantis!")
      }
    })

    //DO NOT TOUCH THIS LINE
    return findAtlantis
}

///////////////////Problem 5//////////////////
//There is a promise called goodNight. Chain a .then 
//to the promise goodNight. The .then should assign the 
//resolved value to the variable night.

var night = ""

//CODE HERE

goodNight.then(r => night = r)


///////////////////Problem 6//////////////////
//There is a promise called goodDay. Chain a .then and a .catch
//to the promise goodDay. The .then should assign the resolved 
//value to the variable day; the .catch should assign the
//reason the Promise was rejected to the variable err.

var day = ""
var err = ""

//CODE HERE

goodDay.then(r => day = r).catch(r => err = r)



