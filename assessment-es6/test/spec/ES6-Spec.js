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
describe('es6', function () {


	describe('Problem 1 - addDucks', function () {
		it('should return an array', function () {
			expect(Array.isArray(addDucks([1, 2, 3], 3))).toEqual(true);
		})
		it('the first element of the returned array should be the passed-in array with "Duck" added to every element', function () {
			let newArr = addDucks([4, 5, 6], 3)
			let correct = newArr[0][0] === "4Duck" &&
							newArr[0][1] === "5Duck" &&
								newArr[0][2] === "6Duck"
			expect(correct).toEqual(true);
		})
		it('the second element of the returned array should be 3 when passed [1, 2, 3], 3', function () {
			expect(addDucks([1, 2, 3], 3)[1]).toEqual(3);
		})
		
	})

	describe('Problem 2 - color, declared with "let"', function () {
		it('should be correct', function () {
			let correct = color === "blue" 
			expect(correct).toEqual(true);
		})
		it('should be "red"', function () {
			let correct = getter.color === "red"
			expect(correct).toEqual(true);
		})	
		
	})

	describe('Problem 3 - greetingsEarthlings, declared with "const"', function () {
		it('should be correct', function () {
			expect(function() { greetingsEarthlings += "Hey" }).toThrow(new TypeError("Assignment to constant variable."));
		})
		it('should be "red"', function () {
			let correct = getter.color === "red"
			expect(correct).toEqual(true);
		})	
	})

	describe('Problem 4 - madLib', function () {
		it('should be a function', function () {
			expect(typeof madLib).toEqual('function');
		})
		it('should return "Pancakes, my dear Watson." when passed "Pancakes"', function () {
			expect(madLib("Pancakes")).toEqual("Pancakes, my dear Watson.");
		})	
	})

	describe('Problem 5 - spread operator:', function () {
		it('answers should be correct', function () {
			let correct = answers.includes("Example B") &&
						answers.includes("Example C") &&
							answers.includes("Example D") &&
								!answers.includes("Example A")
			expect(correct).toEqual(true);
		})
	})


	describe('Problem 6 - cleanUp:', function () {
		it('should be an arrow function', function () {
			let correct = !cleanUp.prototype
			expect(correct).toEqual(true);
		})
		it('should return "hellobeautifulworld" if passed "hello beautiful world"', function () {
			expect(cleanUp("hello beautiful world")).toEqual("hellobeautifulworld");
		})
		it('should return correct answer', function () {
			let correct = cleanUp(" a bc") === "abc"
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 7 - whatOcean:', function () {
		it('should return "blue" when passed { ocean: "blue" }', function () {
			expect(whatOcean({ ocean: "blue" })).toEqual("blue");
		})
		it('should use destructuring', function () {
			let x = whatOcean.toString()
			x = x.slice(x.indexOf('{') + 1)
			let correct = x.includes('{')
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 8 - leftovers:', function () {
		it('should be a function', function () {
			expect(typeof leftovers).toEqual("function");
		})
		it('should return "pizza & garlic bread" when passed "pizza", "garlic bread"', function () {
			expect(leftovers("pizza", "garlic bread")).toEqual("pizza & garlic bread");
		})
		it('should return "pizza tiramisu" when passed "pizza", "garlic bread", "mozzarella sticks", "tiramisu"', function () {
			expect(leftovers("pizza", "tiramisu")).toEqual("pizza & tiramisu");
		})
		it('should return correct answer', function () {
			let correct = leftovers(1, 2, 3, 4, 5, 6, 7) === "1 & 7"
			expect(correct).toEqual(true);
		})
	})


	
	
})