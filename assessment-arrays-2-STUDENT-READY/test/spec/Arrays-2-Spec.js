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
	
})