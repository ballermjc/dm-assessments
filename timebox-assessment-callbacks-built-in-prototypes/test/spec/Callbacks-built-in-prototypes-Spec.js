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
			shouldBe.map((e, i) => {
				if (e.name !== itIs[i].name || e.favoriteCookie !== itIs[i].favoriteCookie) {
					allGood = false
				}
			})
			expect(allGood).toBe(true);
		})
	})

	describe('Problem 3 - changeValue', function () {
		
		it('should exist', function () {
			expect(changeValue).toBeDefined();
		})
		let old = ["Elizabeth", "Mary", "Victoria"]
		let newArr = []
		changeValue(old, (str) => newArr.push(str.toUpperCase()))
		let shouldBe = ["ELIZABETH", "MARY", "VICTORIA"]
		it('should return an array with the given string added to the end of each element', function () {
			let allGood = true
			shouldBe.map((e, i) => {
				if(e !== newArr[i]) allGood = false
			})
			expect(allGood).toBe(true);
		})
		it('should use a forEach and return the result', function () {
			
			expect(changeValue([1, 2, 3], () => 'red')).toEqual(undefined);
		})
	})

	describe('Problem 4 - findProduct', function () {
		
		it('should exist', function () {
			expect(findProduct).toBeDefined();
		})
		it('should find the product of array of numbers', function() {
			expect(findProduct([1, 4, 3, 7, 9])).toEqual(756)
		})
	})

	describe('Problem 5 - cipherize', function () {
		
		it('should exist', function () {
			expect(cipherize).toBeDefined();
		})
		it('should return "3t" when called as cipherize(["books", "computers", "paper", "tablets"], "tablets", 5)', function() {
			expect(cipherize(["books", "computers", "paper", "tablets"], "tablets", 5)).toEqual("3t")
		})
		it('should return cipher pair when called', function() {
			expect(cipherize(["blue", "red", "green"], "blue", 7)).toEqual("0e")
		})
		it('should return cipher pair when called', function() {
			expect(cipherize(["blue", "red", "green"], "purple", 7)).toEqual("-1p")
		})
		it('should return cipher pair when called', function() {
			expect(cipherize(["blue", "red", "green"], "purple", 17)).toEqual("-1")
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
	})

	describe('Problem 7 - stringItOut', function () {
		
		it('should exist', function () {
			expect(stringItOut).toBeDefined();
		})
		it('should return "world,hello,beautiful" when passed ["hello", "beautiful", "world"]', function() {
			expect(stringItOut(["hello", "beautiful", "world"])).toEqual("world,hello,beautiful")
		})
		it('should return string version of passed-in array, sorted greatest to least', function() {
			expect(stringItOut([1, 2, 3, 4, 5, 6, 7, 8 , 9, 10])).toEqual("10,9,8,7,6,5,4,3,2,1")
		})

	})

	describe('Problem 8 - mathResult', function () {
		// var correct = Math.sqrt(Math.log(2) * Math.tan(3))
		var correct = Math.sin((Math.log(2) + Math.tan(3) * 100))
		it('should exist', function () {
			expect(mathResult).toBeDefined();
		})
		it('should equal the correct answer when passed add, 2, 3', function() {
			expect(math(complex, 2, 3) === correct).toBe(true)
		})
		
	})

	describe('Problem 9 - invokesCallbacks', function () {
		function greaterThan10() { return "I am greater than 10"}
		function greaterThan10Too() { return 27}
		function lessThan10() { return "I am less than or equal to 10"}
		function lessThan10Too() { return 3}
		it('should exist', function () {
			expect(invokesCallbacks).toBeDefined();
		})
		it('should return the first callback param invoked if num param > 10', function() {
			var a = invokesCallbacks(28, greaterThan10, lessThan10)
			var b = invokesCallbacks(10, greaterThan10, lessThan10)
			var c = invokesCallbacks(5, greaterThan10, lessThan10)
			let allGood = a === "I am greater than 10" && b === "I am less than or equal to 10" && c === "I am less than or equal to 10"
			expect(allGood).toBe(true)
		})
		it('should return the first callback param invoked if num param > 10', function() {
			var a = invokesCallbacks(28, greaterThan10Too, lessThan10Too)
			var b = invokesCallbacks(10, greaterThan10Too, lessThan10Too)
			var c = invokesCallbacks(5, greaterThan10Too, lessThan10Too)
			let allGood = a === 27 && b === 3 && c === 3
			expect(allGood).toBe(true)
		})
		
	})

	describe('Problem 10 - greeting', function () {
		// setTimeout(() => console.log(greeting), 3001)
		it('should be undefined less than 1 second after timedGreeting is called', function () {
			let allGood = false
			timedGreeting(() => "hello")
			if(!greeting) allGood = true
			expect(allGood).toBe(true);
		})
		it('should be defined 1 second after timedGreeting is called', function (done) {
			greeting = undefined
			timedGreeting(() => "Hey!")
			let allGood = false;
			setTimeout(() => {
				if(greeting === "Hey!") allGood = true
				expect(allGood).toBe(true);
				done()
			}, 1001)
		})
	})
	
})