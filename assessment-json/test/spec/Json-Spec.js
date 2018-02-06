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
		it('The correct version of the variable correctJSON should be uncommented', function () {
			let correct = JSON.stringify(correctJSON).includes('"snow"') && 
							!JSON.stringify(correctJSON).includes('"white",')
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 2 - valid JSON', function () {
		it('The array invalidJSONLineNumbers should contain the correct line numbers', function () {
			let correct = arrayIncludes(invalidJSONLineNumbers, [3, 5, 6, 7]) && !arrayDoesNotInclude(invalidJSONLineNumbers, [1, 2, 4, 8])
			expect(correct).toBe(true)
		})

		
	})

	describe('Problem 3 - ', function () {
		it('The array badJSON should contain common JSON formatting errors', function () {
			let correct = arrayIncludes(badJSON, ["using single quotes", "no quotes on keys", "trailing commas", "missing commas"]) && badJSON.length === 4
			expect(correct).toBe(true)
		})
	})
	
})