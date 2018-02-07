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

	describe('Problem 1 - keyword', function () {
		it('should be a function', function () {
			expect(typeof keyword).toEqual("function");
		})
		it('should contain a function expression saved to the variable key', function () {
			var correct =  keyword().prototype &&
							(keyword.toString().includes("function ()") || keyword.toString().includes("function()")) &&
								keyword.toString().includes("var key")
			expect(correct).toEqual(true);
		})
		it('should the function saved to var key should return "word"', function () {
			expect(keyword()()).toEqual("word");
		})
	})

	describe('Problem 2 - ', function () {
		it('z should be correct', function () {
			let correct = z === "variable"
			expect(correct).toEqual(true);
		})
		it('a should be correct', function () {
			let correct = a === "parameter"
			expect(correct).toEqual(true);
		})
		it('c should be correct', function () {
			let correct = c === "parameter"
			expect(correct).toEqual(true);
		})
		it('three should be correct', function () {
			let correct = three === "argument"
			expect(correct).toEqual(true);
		})
		it('seven should be correct', function () {
			let correct = seven === "argument"
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 3 - ', function () {
		it('answer1 should be correct', function () {
			let correct = answer1 === "Finished the loop."
			expect(correct).toEqual(true);
		})
		it('answer2 should be correct', function () {
			let correct = answer2 === "Leaving early...at index 1"
			expect(correct).toEqual(true);
		})
		it('answer3 should be correct', function () {
			let correct = answer3 === "Leaving early...at index 0"
			expect(correct).toEqual(true);
		})
		it('answer4 should be correct', function () {
			let correct = answer4 === "No, by that line of code i is array.length."
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 4 - ', function () {
		it('answer5 should be correct', function () {
			let correct = answer5[0] === "funcA" && answer5.length === 1
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 5 - ', function () {
		it('janus should be a function', function () {
			expect(typeof janus).toEqual('function');
		})
		it('left should be a function', function () {
			expect(typeof janus(false)).toEqual('function');
		})
		it('left should be a function', function () {
			let correct = janus.toString().includes("left")
			expect(correct).toEqual(true);
		})
		it('right should be a function', function () {
			expect(typeof janus(true)).toEqual('function');
		})
		it('right should be a function', function () {
			let correct = janus.toString().includes("right")
			expect(correct).toEqual(true);
		})
		it('janus(false) should return the function left, and left returns "Looking backwards"', function () {
			expect(janus(false)()).toEqual('Looking backwards');
		})
		it('janus(true) should return the function right, and right returns "Looking forwards"', function () {
			expect(janus(true)()).toEqual('Looking forwards');
		})
	})
	
	
})