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
describe('arrays', function () {
	
	describe('Problem 1 - addMoreDucks', function () {
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

	describe('Problem 2 - cutItOut', function () {
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

	describe('Problem 3 - changeName', function () {
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



	describe('Problem 4 - sunset', function () {
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

	describe('Problem 5 - sunrise', function () {
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


	describe('Problem 6 - refsVsVal', function () {
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