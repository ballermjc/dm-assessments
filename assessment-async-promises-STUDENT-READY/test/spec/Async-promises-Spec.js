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

	describe('Problem 1 - whereAreMyKeys', function () {
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

	describe('Problem 2 - findAtlantis', function () {
		var lostCity = {
			name: 'New York City',
			location: 'New York State'
		}
		it('should be a promise', function () {
			let findAtlantis = lostCityFinder(lostCity)
			let correct = findAtlantis.constructor.toString().includes("Promise")
			expect(correct).toEqual(true)
		})
		it('should reject with the reason "Can\'t find Atlantis!" if lostCity.location is not equal to "under the sea"', function (done) {
			let findAtlantis = lostCityFinder(lostCity)			
			findAtlantis.catch(reason => {
				expect(reason).toEqual('Can\'t find Atlantis!');
				done()
			})
		})
		it('should resolve to give value of "Atlantis" if lostCity.location is equal to "under the sea"', function (done) {
			let lostCity = {
				name: 'Atlantis',
				location: 'under the sea'
			}
			let findAtlantis = lostCityFinder(lostCity)
			findAtlantis.then(res => {
				expect(res).toEqual('Atlantis');
				done()
			})
		})
		
	})

	describe('Problem 3 - goodNight', function () {
		it('should set night to the promise\'s response if resolved', function () {
			let correct = night === "Goodnight."
			expect(correct).toEqual(true)
		})
		
	})

	describe('Problem 4 - goodDay', function () {
		it('should set err to the promise\'s reason for rejection, if rejected', function () {
			let correct = err === "The sun is still up!"
			expect(correct).toEqual(true)
		})
		
	})


	
})