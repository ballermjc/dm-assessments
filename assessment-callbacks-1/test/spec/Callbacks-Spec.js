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
describe('callbacks-built-in-prototypes', function () {

	describe('Problem 1 - stringItOut', function () {
		
		it('should exist', function () {
			expect(stringItOut).toBeDefined();
		})
		it('should return "world,hello,beautiful" when passed ["hello", "beautiful", "world"]', function() {
			expect(stringItOut(["hello", "beautiful", "world"])).toEqual("world,hello,beautiful")
		})
		it('should return string version of passed-in array, sorted greatest to least', function() {
			expect(stringItOut([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10])).toEqual("10,9,8,7,6,5,4,3,2,1")
		})
		it('should use built-in methods for sorting and making strings', function() {
			let correct = stringItOut.toString()
			correct = correct.includes(".sort") && correct.includes(".toString()")
			expect(correct).toEqual(true)
		})

	})

	describe('Problem 2 - mathResult', function () {
		var correct = Math.sin((Math.log(2) + Math.tan(3) * 100))
		it('should exist', function () {
			expect(mathResult).toBeDefined();
		})
		it('should equal the correct answer when passed complex, 2, 3', function() {
			expect(math(complex, 2, 3) === correct).toBe(true)
		})
		
	})

	
})