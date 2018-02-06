//Helper Functions
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
describe('objects', function () {

	describe('Problem 1 - ', function () {
		it('accessByDotNotation should be correct', function () {
			var correct = accessByDotNotation === "Stefan"
			expect(correct).toBe(true);
		})
		it('accessByBracketNotation should be correct', function () {
			var correct = accessByBracketNotation === true
			expect(correct).toBe(true);
		})

	})

	describe('Problem 2 - person.moveCities', function () {
		it('should exist', function () {
			expect(person.moveCities).toBeDefined();
		})
		it('should be a function', function () {
			expect(typeof person.moveCities).toEqual('function');
		})
		it('should properly change person object\'s city property', function () {
			person.moveCities("Queenstown, NZ")
			var correct = person.city === "Queenstown, NZ"
			expect(correct).toEqual(true);
		})

	})

	describe('Problem 3 - keyAccessor', function () {
		it('should exist', function () {
			expect(keyAccessor).toBeDefined();
		})
		it('should return an array of objects', function () {
			var names = ["anne", "brandon", "charles", "diana"]

			var people = {
				anne: { city: "New York", age: 23 },
				brandon: { city: "London", age: 28 },
				charles: { city: "Seattle", age: 33 },
				diana: { city: "Los Angeles", age: 20 },
			}
			var returned = keyAccessor(names, people)
			var correct = returned[0].city === "New York" &&
							returned[1].city === "London" &&
							  returned[2].city === "Seattle" &&
								returned[3].city === "Los Angeles"
			expect(correct).toEqual(true);
		})
		it('should return an array of objects', function () {
			var names = ["blah", "akjsdhf"]

			var people = {
				blah: { eh: 'Canada' },
				akjsdhf: { eh: 'Vancouver' },
			}
			var returned = keyAccessor(names, people)
			var correct = returned[0].eh === "Canada" &&
							returned[1].eh === "Vancouver"
			expect(correct).toEqual(true);
		})

	})

	describe('Problem 4 - getVals', function () {
		it('should exist', function () {
			expect(getVals).toBeDefined();
		})
		it('should return an array', function () {
			
			var people = {
				anne: 23,
				brandon: 28,
				charles: 33,
				diana: 20,
			}
			var returned = getVals(people)
			var correct = returned[0] === 23 &&
							returned[1] === 28 &&
							  returned[2] === 33 &&
								returned[3] === 20
			expect(correct).toEqual(true);
		})

	})

	describe('Problem 5 - doorKeys', function () {
		it('should exist', function () {
			expect(doorKeys).toBeDefined();
		})
		it('should be an array', function () {
			expect(Array.isArray(doorKeys)).toEqual(true);
		})
		it('should contain correct values', function () {
			var correct = arrayIncludes(doorKeys, ["red", "blue", "green", "brown"])
			expect(correct).toEqual(true);
		})

	})
	
})