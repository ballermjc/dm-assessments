//Helper Function
function arrayIncludes(arr, values){
	let allGood = true;
	for(let i = 0; i < values.length; i++){
		if(!arr.includes(values[i])){
			allGood = false
			break
		}
	}
	return allGood
}

function arrayDoesNotInclude(arr, values){
	let notGood = false;
	for(let i = 0; i < values.length; i++){
		if(arr.includes(values[i])){
			notGood = true
			break
		}
	}
	return notGood
}


//Test Suite
describe('async-promises-json', function () {

	describe('Problem 1 - JSON', function () {
		it('correctJSON should be correct', function () {
			let correct = JSON.stringify(correctJSON).includes('"snow"') && 
							!JSON.stringify(correctJSON).includes('"white",')
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 2 - valid JSON', function () {
		it('invalidJSONLineNumbers should be correct', function () {
			let correct = arrayIncludes(invalidJSONLineNumbers, [3, 5, 6, 7]) && !arrayDoesNotInclude(invalidJSONLineNumbers, [1, 2, 4, 8])
			expect(correct).toBe(true)
		})

		it('badJSON should be correct', function () {
			let correct = arrayIncludes(badJSON, ["no quotes on keys", "trailing commas"]) && badJSON.length === 2
			expect(correct).toBe(true)
		})
	})

	describe('Problem 3 - whereAreMyKeys', function () {
		it('should be a promise', function () {
			let correct = whereAreMyKeys.constructor.toString().includes("Promise")
			expect(correct).toEqual(true)
		})
		it('should resolve to give value "On the table!"', function (done) {
			whereAreMyKeys.then(res => {
				console.log(res)
				expect(res).toEqual('On the table!');
				done()
			})
		})
	})

	describe('Problem 4 - findAtlantis', function () {
		//This is an example set of cities that w
		var lostCities = {
			camelot: "Cornwall or Wales",
			troy: "western shores of Turkey",
			shangrila: "Himalayas",
			elDorado: "southwestern USA"
		}
		it('should be a promise', function () {
			let findAtlantis = lostCityFinder(lostCities)
			let correct = findAtlantis.constructor.toString().includes("Promise")
			expect(correct).toEqual(true)
		})
		it('should resolve to give value "Can\'t find Atlantis!" if lostCities.atlantis is falsy', function (done) {
			let findAtlantis = lostCityFinder(lostCities)			
			findAtlantis.catch(reason => {
				expect(reason).toEqual('Can\'t find Atlantis!');
				done()
			})
		})
		it('should resolve to give value of atlantis if lostCities.atlantis is truthy', function (done) {
			let lostCities = {atlantis: "Under the sea"}
			let findAtlantis = lostCityFinder(lostCities)
			findAtlantis.then(res => {
				expect(res).toEqual('Under the sea');
				done()
			})
		})
		
	})

	describe('Problem 5 - goodnight', function () {
		it('should set night to it\'s response if resolved', function () {
			let correct = night === "Goodnight."
			expect(correct).toEqual(true)
		})
		
	})

	describe('Problem 6 - goodDay', function () {
		it('should set stillNight to it\'s reason for rejection, if rejected', function () {
			let correct = stillNight === "The sun is still up!"
			expect(correct).toEqual(true)
		})
		
	})

	describe('Problem 7 - isValid', function () {
		it('should be correct', function () {
			let correct = isValid
			if(correct){
				alert("Yep! You can chain promises with .then and .catch, each of which return a promise themselves.")
			}
			expect(correct).toEqual(true)
		})
		
	})

	
})