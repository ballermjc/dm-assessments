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
describe('context', function () {

	describe('Problem 1 - context', function () {
		it('should be correct', function () {
			let correct = context === "The object which is the execution context of the running code, represented by 'this' keyword."
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 2 - contextRubberDucks', function () {
		it('should be correct', function () {
			let correct = contextRubberDucks === "window"
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 3 - contextBreakMetro', function () {
		it('should be correct', function () {
			let correct = contextBreakMetro === "dcMetro"
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 4 - ', function () {
		it('areWeThereYet should be a function', function () {
			expect(typeof areWeThereYet).toEqual('function')
		})
		it('moreToGo should be correct', function () {
			let correct = isNaN(moreToGo)
			expect(correct).toEqual(true)
		})
		it('valMoreToGo should be correct', function () {
			let correct = isNaN(valMoreToGo)
			expect(correct).toEqual(true)
		})
		it('contextAreWeThereYet should be correct', function () {
			let correct = contextAreWeThereYet === "window"
			expect(correct).toEqual(true)
		})
		
	})

	describe('Problem 5 - ', function () {
		it('almostThere should be a function', function () {
			expect(typeof almostThere).toEqual('function')
		})
		it('finalDescent should be correct', function () {
			let correct = finalDescent === -21500
			expect(correct).toEqual(true)
		})
		it('valFinalDescent should be correct', function () {
			let correct = valFinalDescent === -21500
			expect(correct).toEqual(true)
		})
		it('contextAlmostThere should be correct', function () {
			let correct = contextAlmostThere === "descent"
			expect(correct).toEqual(true)
		})
		
	})

})