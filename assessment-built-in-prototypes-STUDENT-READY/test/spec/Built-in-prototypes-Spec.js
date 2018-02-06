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


	describe('Problem 1 - dragonMapper', function () {
		it('should exist', function () {
			expect(dragonMapper).toBeDefined();
		})
		it('should add "...here be dragons" to each element of passed-in array', function () {
			var places = ["England", "Scotland", "Westeros"];
			var shouldBe = ["England...here be dragons", "Scotland...here be dragons", "Westeros...here be dragons"];
			expect(JSON.stringify(dragonMapper(places))).toEqual(JSON.stringify(shouldBe));
		})
		it('should use a .map', function () {
			var places = ["England", "Scotland", "Westeros"];
			
			expect(JSON.stringify(dragonMapper(places))).not.toEqual(JSON.stringify(places));
		})
		it('should use a .map', function () {
			var correct = dragonMapper.toString().includes(".map")	
			expect(correct).toEqual(true);
		})
			
	})

	describe('Problem 2 - cookieLoversOnly', function () {
		
		it('should exist', function () {
			expect(cookieLoversOnly).toBeDefined();
		})
		it('should return an array containing only objects with the key favoriteCookie', function () {
			var guestList = [
					{
						name: 'Zeus',
						favoriteCookie: 'snickerdoodle'
					},
					{
						name: 'Aphrodite',
						favoriteCookie: 'macaron'
					},
					{
						name: 'Hera'
					},
					{
						name: 'Ares'
					},
					{
						name: 'Athena',
						favoriteCookie: 'chocolate chip'
					},
					{
						name: 'Apollo'
					}
				]
			var shouldBe = [
					{
						name: 'Zeus',
						favoriteCookie: 'snickerdoodle'
					},
					{
						name: 'Aphrodite',
						favoriteCookie: 'macaron'
					},
					{
						name: 'Athena',
						favoriteCookie: 'chocolate chip'
					}
			];
			var itIs = cookieLoversOnly(guestList)
			let allGood = true
			shouldBe.forEach((e, i) => {
				if (e.name !== itIs[i].name || e.favoriteCookie !== itIs[i].favoriteCookie) {
					allGood = false
				}
			})
			expect(allGood).toBe(true);
		})

		it('should use the filter array method', function () {
			var correct = cookieLoversOnly.toString().includes(".filter")	
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 3 - changeValue', function () {
		
		it('should exist', function () {
			expect(changeValue).toBeDefined();
		})
		it('should invoke the callback function as many times as there are elements in the array', function() {
			let arr = [1, 2, 3];
			let	count = 0;
			changeValue(arr, (num) => count++)
			expect(count).toBe(3);
		})
		it('should pass the element into the callback function as an argument when it is invoked', function () {
			let old = ["Elizabeth", "Mary", "Victoria"]
			let newArr = []
			changeValue(old, (str) => newArr.push(str.toUpperCase()))
			let shouldBe = ["ELIZABETH", "MARY", "VICTORIA"]
			let correct = true
			shouldBe.forEach((e, i) => {
				if(e !== newArr[i]) correct = false
			})
			expect(correct).toBe(true);
		})
		it('should use a forEach', function () {
			let correct = changeValue.toString().includes('.forEach') 
			expect(correct).toEqual(true);
		})
	})

	describe('Problem 4 - findProduct', function () {
		it('should exist', function () {
			expect(findProduct).toBeDefined();
		})
		it('should find the product of array of numbers', function() {
			expect(findProduct([1, 4, 3, 7, 9])).toEqual(756)
		})
		it('should use a .reduce', function() {
			let correct = findProduct.toString().includes(".reduce")
			expect(correct).toEqual(true)
		})
	})

	describe('Problem 5 - cipherize', function () {
		
		it('should exist', function () {
			expect(cipherize).toBeDefined();
		})
		it('should return "l" when called as cipherize(["books", "computers", "paper", "tablets"], "tablets")', function() {
			expect(cipherize(["books", "computers", "paper", "tablets"], "tablets")).toEqual("l")
		})
		it('should return "" when called as cipherize(["blue", "green", "yellow", "purple", "red"], "red")', function() {
			expect(cipherize(["blue", "green", "yellow", "purple", "red"], "red", 7)).toEqual("")
		})
		it('should use indexOf, charAt', function() {
			let x = cipherize.toString()
			let correct = x.includes(".indexOf") && x.includes(".charAt")
			expect(correct).toEqual(true)
		})
	})

	describe('Problem 6 - reverseMe', function () {
		
		it('should exist', function () {
			expect(reverseMe).toBeDefined();
		})
		it('should return "!dlrow olleh" when passed "hello world!"', function() {
			expect(reverseMe("hello world!")).toEqual("!dlrow olleh")
		})
		it('should return reverse of string argument', function() {
			expect(reverseMe("mxyzptlk")).toEqual("kltpzyxm")
		})
		it('should use the built-in methods for splitting, reversing, and joining', function() {
			let correct = reverseMe.toString().includes(".reverse")
							&& reverseMe.toString().includes(".split")
								&& reverseMe.toString().includes(".join")
			expect(correct).toEqual(true)
		})
	})
	
})