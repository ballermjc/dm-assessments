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

//Test Suite
describe('for-loops', function () {

	describe('Problem 1 - addNumbers', function () {
		it('should return an array', function () {
			expect(Array.isArray(addNumbers(3))).toBe(true);
		})
		it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
			var newArr = addNumbers(10)
			expect(arrayIncludes(newArr, arr) && newArr.length === 10).toEqual(true);
		})
		it('should fill the returning array with numbers up to (but not including) the value passed in', function () {
			var arr = [0, 1, 2, 3, 4, 5, 6, 7]
			var newArr = addNumbers(8)
			let correct = arrayIncludes(newArr, arr) && newArr.length === 8
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 2 - ', function () {
		it('should call hello 10 times', function () {
			let iCannotHearYou = canYouHearMe("")
			let correct = iCannotHearYou === "hIhIhIhIhIhIhIhIhIhI"
			expect(correct).toEqual(true);
		})
		it('should add result of hello() to param 10 times', function () {
			let hey = canYouHearMe("um ")
			let correct = hey === "um hIhIhIhIhIhIhIhIhIhI"
			expect(correct).toEqual(true);
		})
		it('should return a string', function() {
			expect(canYouHearMe('') && typeof canYouHearMe('') === 'string').toBe(true)
		})
		
	})
	
	
})