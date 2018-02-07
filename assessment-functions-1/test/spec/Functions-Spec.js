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
describe('functions', function () {

	describe('Problem 1 - hey', function () {
		it('should be a function', function () {
			expect(typeof hey).toEqual('function');
		})
		it('should return "Hey Anna" when passed "Anna"', function () {
			expect(hey("Anna")).toEqual("Hey Anna");
		})
		it('should be a function declaration', function () {
			let correct = testing.a
			expect(correct).toBe(true);
		})
	})

	describe('Problem 2 - hi', function () {
		it('should be a function', function () {
			expect(typeof hi).toEqual('function');
		})
		it('should return "Hi Anna" when passed "Anna"', function () {
			expect(hi("Anna")).toEqual("Hi Anna");
		})
		it('should be a function expression', function () {
			let correct = hi.prototype && !testing.b
			expect(correct).toBe(true);
		})
	})

	describe('Problem 3 - hello', function () {
		it('should be a function', function () {
			expect(typeof hello).toEqual('function');
		})
		it('should return "Hello Anna" when passed "Anna"', function () {
			expect(hello("Anna")).toEqual("Hello Anna");
		})
		it('should be an arrow function', function () {
			let correct = !hello.prototype && !testing.b
			expect(correct).toBe(true);
		})
	})

	describe('Problem 4 - fun', function () {
		it('should be a function', function () {
			expect(typeof fun).toEqual('function');
		})
		it('should return "Wheeeee!!!!!" when passed "Wheeeee"', function () {
			expect(fun("Wheeeee")).toEqual("Wheeeee!!!!!");
		})
		it('should return proper value when passed a string', function () {
			let correct = fun('a') === 'a!!!!!'
			expect(correct).toEqual(true);
		})
		it('funTimes should be correct', function () {
			let correct = "Yay!!!!!" === fun("Yay")
			expect(correct).toBe(true);
		})
	})

	describe('Problem 5 - climb', function () {
		it('should be a function that does not have built-in parameters', function () {
			var x = climb.toString()
			let y = x.slice(x.indexOf("climb("), 17)
			var correct = y === "climb(){" || y === "climb( )"
			expect(correct).toEqual(true);
		})
		it('should return "Let\'s set up the belay rope before we climb." if called as climb()', function () {
			expect(climb()).toEqual("Let's set up the belay rope before we climb.");
		})
		it('should return "Climbing!" if called with climb("Benny", true)', function () {
			expect(climb("Benny", true)).toEqual("Climbing!");
		})
		it('should return "Climbing!" if called with climb("any string here", true)', function () {
			expect(climb("any string here", true)).toEqual("Climbing!");
		})
		it('should return "On belay?" if called with climb("Benny", false)', function () {
			expect(climb("Benny", false)).toEqual("On belay?");
		})
		it('should return "On belay?" if called with climb("any string here")', function () {
			expect(climb("any string here")).toEqual("On belay?");
		})

	})
	
	
})