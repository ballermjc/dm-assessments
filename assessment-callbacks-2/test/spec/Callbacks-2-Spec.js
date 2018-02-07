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

	describe('Problem 1 - invokesCallbacks', function () {
		function greaterThan10() { return "I am greater than 10"}
		function lessThan10() { return "I am less than or equal to 10"}
		it('should exist', function () {
			expect(invokesCallbacks).toBeDefined();
		})
		it('should return the first callback param invoked if the num param is greater than 10', function() {
			var a = invokesCallbacks(28, greaterThan10, lessThan10)
			var b = invokesCallbacks(15, greaterThan10, lessThan10)
			var c = invokesCallbacks(11, greaterThan10, lessThan10)
			let correct = a === "I am greater than 10" && b === "I am greater than 10" && c === "I am greater than 10"
			expect(correct).toBe(true)
		})
		it('should return the first callback param invoked if the num param is less than or equal to 10', function() {
			var a = invokesCallbacks(5, greaterThan10, lessThan10)
			var b = invokesCallbacks(2, greaterThan10, lessThan10)
			var c = invokesCallbacks(7, greaterThan10, lessThan10)
			let correct = a === "I am less than or equal to 10" && b === "I am less than or equal to 10" && c === "I am less than or equal to 10"
			expect(correct).toBe(true)
		})
		
	})

	describe('Problem 2 - greeting', function () {
		it('should be undefined less than 1 second after timedGreeting is called', function () {
			greeting = undefined
			timedGreeting(() => "Hey!")
			expect(greeting === undefined).toBe(true)
		})
		it('should be defined 1 second after timedGreeting is called', function (done) {
			greeting = undefined
			timedGreeting(() => "Hey!")
			let allGood = false;
			setTimeout(() => {
				if(greeting === "Hey!") allGood = true
				expect(allGood).toBe(true);
				done()
			}, 1000)
		})
	})
	
})