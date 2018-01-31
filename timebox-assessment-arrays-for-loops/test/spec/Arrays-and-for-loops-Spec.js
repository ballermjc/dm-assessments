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
describe('arrays-and-for-loops', function () {


	describe('Problem 1 - rubberDucks', function () {
		it('should exist', function () {
			expect(rubberDucks).toBeDefined();
		})
		it('should contain required values', function () {
			expect(arrayIncludes(rubberDucks, ["yellow", "red", "blue", "brown"])).toBe(true);
		})
	})

	describe('Problem 2 - ', function () {
		it('answer should exist', function () {
			expect(answer).toBeDefined();
		})
		it('answer should be correct', function () {
			expect(answer).toEqual(0);
		})

		it('arrayLength should exist', function () {
			expect(arrayLength).toBeDefined();
		})
		it('arrayLength should be correct', function () {
			expect(arrayLength).toEqual(4);
		})
	})

	describe('Problem 3 - getLast', function () {
		it('should exist', function () {
			expect(getLast).toBeDefined();
		})
		it('should return 3 if passed [1, 2, 3]', function () {
			var arr = [1, 2, 3]
			expect(getLast(arr)).toEqual(3);
		})
		it('should not modify array argument', function () {
			var arr = [1, 2, 3]
			getLast(arr)
			expect(arr.length === 3 && arrayIncludes(arr, [1, 2, 3])).toBe(true);
		})
	})

	describe('Problem 4 - getElement', function () {
		it('should exist', function () {
			expect(getElement).toBeDefined();
		})
		it('should return 2 if passed [1, 2, 3], 1', function () {
			var arr = [1, 2, 3]
			expect(getElement(arr, 1)).toEqual(2);
		})
		it('should return element at given index', function () {
			var arr = ["hey now", "hey NOW", "this is what", "dreams are made of"]
			let correct = getElement(arr, 3) === "dreams are made of"
			expect(correct).toEqual(true);
		})
		it('should not modify array argument', function () {
			var arr = [1, 2, 3]
			getElement(arr, 2)
			expect(arr.length === 3 && arrayIncludes(arr, [1, 2, 3])).toBe(true);
		})
	})

	describe('Problem 5 - changeElement', function () {
		it('should exist', function () {
			expect(changeElement).toBeDefined();
		})
		it('should change array to [1, "HEY", 3] if passed [1, 2, 3], 1, "HEY"', function () {
			var arr = [1, 2, 3]
			changeElement(arr, 1, "HEY")
			expect(arr[1]).toEqual("HEY");
		})
		it('should change element at given index to given value', function () {
			var arr = ["hey now", "hey NOW", "this is what", "blahhhhhhh"]
			changeElement(arr, 3, "dreams are made of")
			let correct = arr[3] === "dreams are made of"
			expect(correct).toEqual(true);
		})
		it('should modify only the one element of array argument', function () {
			var arr = [1, 2, 3, 4, 5]
			changeElement(arr, 3, "book")
			let allGood = false
			if(arr[0] === 1
				&& arr[1] === 2
					&& arr[2] === 3
						&& arr[3] === "book"
							&& arr[4] === 5) allGood = true
			expect(allGood).toBe(true);
		})
	})

	describe('Problem 6 - trim', function () {
		it('should exist', function () {
			expect(trim).toBeDefined();
		})
		it('should return [1, 2] if passed [1, 2, 3]', function () {
			var arr = [1, 2, 3]
			var newArr = trim(arr)
			expect(newArr[0] === 1 && newArr[1] === 2 && newArr.length === 2).toBe(true);
		})
		it('should trim only last element', function () {
			var arr = ["hey", "now", "hey", "NOW"]
			var newArr = trim(arr)
			var test = newArr[0] === "hey" && newArr[1] === "now" && newArr[2] === "hey" && newArr.length === 3
			expect(test).toBe(true);
		})
	})
	
	describe('Problem 7 - addMoreDucks', function () {
		it('should exist', function () {
			expect(addMoreDucks).toBeDefined();
		})
		it('should do nothing if array\'s length is less than or equal to 4', function () {
			var arr = [1, 2, 3]
			var oldArr = [1, 2, 3]
			var newArr = addMoreDucks(arr)
			expect(JSON.stringify(newArr)).toEqual(JSON.stringify(oldArr));
		})
		it('should insert "42 ducks" as the 3rd element, if array\'s length is greater than 4', function () {
			var arr = [1, 2, 3, 4, 5, 6, 7]
			var shouldBe = [1, 2, "42 ducks", 4, 5, 6, 7]
			var newArr = addMoreDucks(arr)
			expect(JSON.stringify(newArr)).toEqual(JSON.stringify(shouldBe));
		})
		it('should insert "42 ducks" as the 3rd element, if array\'s length is greater than 4', function () {
			var arr = [1, 2, 3, 4, 5, 6, 7]
			var newArr = addMoreDucks(arr)
			expect(newArr[2]).toEqual('42 ducks');
		})
	})

	describe('Problem 8 - cutItOut', function () {
		it('should exist', function () {
			expect(cutItOut).toBeDefined();
		})
		it('should do nothing if array\'s length is less than or equal to 4', function () {
			var arr = [1, 2, 3]
			var shouldBe = [1, 2, 3]
			var newArr = cutItOut(arr)
			expect(JSON.stringify(newArr)).toEqual(JSON.stringify(shouldBe));
		})
		it('should remove the 3rd element, if array\'s length is greater than 4', function () {
			var arr = [1, 2, 3, 4, 5, 6, 7]
			var shouldBe = [1, 2, 4, 5, 6, 7]
			var newArr = cutItOut(arr)
			expect(JSON.stringify(newArr)).toEqual(JSON.stringify(shouldBe));
		})
		it('should remove the 3rd element, if array\'s length is greater than 4', function () {
			var arr = [1, 2, 3, 4, 5, 6, 7]
			var shouldBe = [1, 2, 4, 5, 6, 7]
			var newArr = cutItOut(arr)
			let correct = newArr[2] === shouldBe[2]
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 9 - changeName', function () {
		it('should exist', function () {
			expect(changeName).toBeDefined();
		})
		it('should find return ["Rowling", "Sanderson", "Tolkien", "Lewis"] if passed ["Rowling", "Sanderson", "Tolkn", "Lewis"]', function () {
			var arr = ["Rowling", "Sanderson", "Tolkn", "Lewis"]
			var shouldBe = ["Rowling", "Sanderson", "Tolkien", "Lewis"]
			var newArr = changeName(arr)
			let correct = JSON.stringify(newArr) === JSON.stringify(arr)
			expect(correct).toEqual(true);
		})
		it('should find "Tolkn" and change to "Tolkien"', function () {
			var arr = [1, "Tolkn", 3]
			var shouldBe = [1, "Tolkien", 3]
			var newArr = changeName(arr)
			let correct = newArr[1] === shouldBe[1]
			expect(correct).toEqual(true);
		})
		it('should only modify the element "Tolkn"', function () {
			var arr = [1, "Tolkn", 3]
			var shouldBe = [1, "Tolkien", 3]
			var newArr = changeName(arr)
			let correct = newArr[0] === 1 && newArr[2] === 3
			expect(correct).toBe(true);
		})
	})

	describe('Problem 10 - addNumbers', function () {
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

	describe('Problem 11 - sunset', function () {
		it('should exist', function () {
			expect(sunset).toBeDefined();
		})
		
		var newSunset = sunset()
		
		it('should create a copy by reference and change the first element to blue', function () {
			let correct = newSunset[0] === "blue" && sunsetColors[0] === "blue"
			expect(correct).toBe(true);
		})
		it('should not change the rest of the array', function () {
			let correct = false
			if(sunsetColors[1] === "purple"
				&& sunsetColors[2] === "pink"
					&& sunsetColors[3] === "red"
						&& sunsetColors[4] === "orange"
							&& sunsetColors[5] === "yellow"
								&& newSunset[1] === "purple"
									&& newSunset[2] === "pink"
										&& newSunset[3] === "red"
											&& newSunset[4] === "orange"
												&& newSunset[5] === "yellow") correct = true
			expect(correct).toBe(true);
		})
	})

	describe('Problem 12 - sunrise', function () {
		it('should exist', function () {
			expect(sunrise).toBeDefined();
		})
		
		var newSunrise = sunrise()
		
		it('should create a copy by reference and change the first element to green', function () {
			let correct = newSunrise[0] === "green" && sunriseColors[0] === "yellow"
			expect(correct).toBe(true);
		})
		it('should not change the rest of the array', function () {
			let correct = false
			if(sunriseColors[1] === "orange"
				&& sunriseColors[2] === "red"
					&& sunriseColors[3] === "pink"
						&& sunriseColors[4] === "purple"
							&& sunriseColors[5] === "blue"
								&& newSunrise[1] === "orange"
									&& newSunrise[2] === "red"
										&& newSunrise[3] === "pink"
											&& newSunrise[4] === "purple"
												&& newSunrise[5] === "blue") correct = true
			expect(correct).toBe(true);
		})
	})

	describe('Problem 13 - ', function () {
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

	describe('Problem 14 - refsVsVal', function () {
		it('should exist', function () {
			expect(refVsVal).toBeDefined()
		})
		it('should be correct', function () {
			var correct = `Passing by reference points to the same object in memory;
                pass by value creates a new object in memory with the same 
                values. A change made to a reference copy will change both 
                the copy and the original; a copy made by value will only 
                change the copy's values`
			expect(refVsVal).toEqual(correct);
		})
	})

	
	
})