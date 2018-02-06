
function helper(){
    return "HELLLLOOOO"
}

var sunlight = false
var goodNight = new Promise((resolve, reject) => {
    if(!sunlight){
        resolve("Goodnight.")
    } else {
        reject("The sun is still up!")
    }
})

var moonlight = false
var goodDay = new Promise((resolve, reject) => {
    if(moonlight){
        resolve("Goodnight.")
    } else {
        reject("The sun is still up!")
    }
})

let user = { name: "Thor", img: "http://media.comicbook.com/2017/10/thor-ragnarok-smiling-1039609.jpg", city: "Asgard", job: "God of Thunder", valid: false}
var getUser = new Promise((res, rej) => {
    if(user.valid) res(user)
    
    rej("User invalid")
})