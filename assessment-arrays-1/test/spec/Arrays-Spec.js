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
	
})