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
describe('objects-data-types', function () {


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

	describe('Problem 6 - jsDataTypes', function () {
		it('should be correct', function () {
			var correct = arrayIncludes(jsDataTypes, ["boolean", "string", "object", "number", "function", "undefined"])
			var incorrect = arrayDoesNotInclude(jsDataTypes, ["bool", "int", "integer"])
			expect(correct && !incorrect).toBe(true);
		})
	})

	describe('Problem 7 - iLikeChocolate', function () {
		it('should be a boolean', function () {
			let correct = iLikeChocolate === true || iLikeChocolate === false
			expect(correct).toBe(true);
		})
	})

	describe('Problem 8 - myString', function () {
		it('should be a string', function () {
			let correct = typeof myString === 'string'
			expect(correct).toBe(true);
		})
	})

	describe('Problem 9 - myInt', function () {
		it('should be an integer', function () {
			let correct = typeof myInt === 'number'
			expect(correct).toBe(true);
		})
	})

	describe('Problem 10 - myFunction', function () {
		it('should be a function', function () {
			let correct = typeof myFunction === 'function'
			expect(correct).toBe(true);
		})
		it('should return "I am a function!"', function () {
			expect(myFunction()).toEqual("I am a function!");
		})
	})

	describe('Problem 11 - myObject', function () {
		it('should be an object', function () {
			let correct = typeof myObject === 'object'
			expect(correct).toBe(true);
		})
		it('should have a name property', function () {
			expect(myObject.name).toBeDefined();
		})
		it('should have a team property', function () {
			expect(myObject.team).toBeDefined();
		})
		it('should have a whatTeam method', function () {
			expect(myObject.whatTeam).toBeDefined();
		})
		it('.whatTeam() should return the team property', function () {
			expect(myObject.team === myObject.whatTeam()).toBe(true);
		})
	})

	describe('Problem 12 - myArray', function () {
		it('should be an array', function () {
			let correct = Array.isArray(myArray)
			expect(correct).toBe(true);
		})
		it('element at index 0 should be 1', function () {
			expect(myArray[0]).toEqual(1);
		})
		it('element at index 1 should be "two"', function () {
			expect(myArray[1]).toEqual("two");
		})
		it('element at index 2 should be { three: 3}', function () {
			expect(myArray[2].three).toEqual(3);
		})
		it('element at index 3 should be [4, 5]', function () {
			var correct = Array.isArray(myArray) && myArray[3][0] === 4 && myArray[3][1] === 5
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 13 - whatAmI', function () {
		it('should return the correct type when passed "Hello"', function () {
			let correct = 'string' === whatAmI('Hello')
			expect(correct).toBe(true);
		})
		it('should return the correct type when passed { a: "b" }', function () {
			let correct = 'object' === whatAmI({ a: "b" })
			expect(correct).toBe(true);
		})
		it('should return the correct type for the parameter', function () {
			let correct = 'number' === whatAmI(15)
			expect(correct).toBe(true);
		})
		it('should return the correct type for the parameter', function () {
			let correct = 'object' === whatAmI([1, 2, 3])
			expect(correct).toBe(true);
		})
	})

	describe('Problem 14 - theVoid', function () {
		it('should be null', function () {
			expect(theVoid).toEqual(null);
		})
	})

	describe('Problem 15 - undefiner', function () {
		it('should return the passed-in array, with the second element undefined', function () {
			var newArr = undefiner([1, 2, 3])
			var correct = newArr[0] === 1 && newArr[1] === undefined && newArr[2] === 3
			expect(correct).toEqual(true);
		})
		it('should return ["hello", undefined, "!"] when passed ["hello", "world", "!"]', function () {
			var newArr = undefiner(["hello", "world", "!"])
			var correct = newArr[0] === "hello" && newArr[1] === undefined && newArr[2] === "!"
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 16 - nananan', function () {
		it('should check if 6 / 2 is not a number', function () {
			expect(nananan(6)).toEqual(3);
		})
		it('should check if "hello world" / 2 is not a number', function () {
			expect(nananan("hello world")).toEqual("BATMAN!");
		})
		it('var na should equal the result of calling nananan with NaN', function () {
			expect(nananan(NaN)).toEqual("BATMAN!");
		})
	})

	describe('Problem 17 - arrayChecker', function () {
		it('should return true if passed [1, 2, 3]', function () {
			expect(arrayChecker([1, 2, 3])).toBe(true);
		})
		it('should return false if passed "hey!"', function () {
			expect(arrayChecker("hey!")).toBe(false);
		})
	})

	describe('Problem 18 - numFromString', function () {
		it('should return 10 if passed "10"', function () {
			expect(numFromString("10")).toEqual(10);
		})
		it('should return base 10 number if passed a string number such as "1989"', function () {
			var x = numFromString("hey", 10)
			var y = numFromString("1989", 10)
			var correct = isNaN(x) && y === 1989
			expect(correct).toBe(true);
		})
	})

	describe('Problem 19 - makeItAString', function () {
		it('should "2018" if passed 2018', function () {
			expect(makeItAString(2018)).toEqual("2018");
		})
		it('should return a string', function () {
			var x = makeItAString(["hey", 10])
			var y = makeItAString(true)
			var z = makeItAString(309)
			var correct = x === "hey,10" && y === "true" && z === "309"
			expect(correct).toBe(true);
		})
	})

	describe('Problem 20 - answer', function () {
		it('1 - should be correct', function () {
			let correct = answer1 === 100
			expect(correct).toBe(true);
		})
		it('2 - should be correct', function () {
			let correct = answer2 === "Goodbye"
			expect(correct).toBe(true);
		})
		it('3 - should be correct', function () {
			let correct = answer3 === "14"
			expect(correct).toBe(true);
		})
		it('4 - should be correct', function () {
			let correct = answer4 === 4
			expect(correct).toBe(true);
		})
		it('5 - should be correct', function () {
			let correct = answer5 === "anne,bobcharlie"
			expect(correct).toBe(true);
		})
		
	})

	describe('Problem 21 - ', function () {
		it('valMyArr - should be correct', function () {
			let correct = valMyArr[1] === 25
			expect(correct).toBe(true);
		})
		it('valMyStr - should be correct', function () {
			let correct = valMyStr === "Hello, world!"
			expect(correct).toBe(true);
		})
		it('valMyCopiedArr - should be correct', function () {
			let correct = valMyCopiedArr[1] === 25
			expect(correct).toBe(true);
		})
		it('valMyCopiedStr - should be correct', function () {
			let correct = valMyCopiedStr === "Hello, world! What a beautiful day!"
			expect(correct).toBe(true);
		})
		it('arraysCopiedBy - should be correct', function () {
			let correct = arraysCopiedBy === "reference"
			expect(correct).toBe(true);
		})
		it('stringsCopiedBy - should be correct', function () {
			let correct = stringsCopiedBy === "value"
			expect(correct).toBe(true);
		})
		
		
		
	})
	
})