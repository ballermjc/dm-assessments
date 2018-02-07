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
describe('scope-closures', function () {

	describe('Problem 1 - fairytale ', function () {
		it('should exist', function () {
			expect(fairytale).toBeDefined()
		})
		it('should be a function', function () {
			expect(typeof fairytale).toBe('function')
		})
		it('should return a function', function () {
			var toLondon = fairytale("London", "plane")
			expect(typeof toLondon).toBe('function')
		})
		it('should return a function, which itself returns "A long time ago, Princess Leia defeated the evil wizard with X-wing fighters", when passed "Princess Leia", "X-wing fighters"', function () {
			var princessLeia = fairytale("Princess Leia", "X-wing fighters")
			expect(princessLeia()).toEqual('A long time ago, Princess Leia defeated the evil wizard with X-wing fighters')
		})
		it('should work as required', function () {
			var eowyn = fairytale("Eowyn", "a sword")
			var win = eowyn()
			var correct = win === 'A long time ago, Eowyn defeated the evil wizard with a sword' && typeof eowyn === 'function'
			expect(correct).toBe(true)
		})
	})

	describe('Problem 2 - ', function () {
		it('adventureReturns should be correct', function () {
			var correct = adventureReturns === "function"
			expect(correct).toBe(true)
		})
		it('originIsPublic should be correct', function () {
			var correct = originIsPublic === false
			expect(correct).toBe(true)
		})
		it('functionIsPublic should be correct', function () {
			var correct = functionIsPublic === true
			expect(correct).toBe(true)
		})
		it('functionCanStillAccess should be correct', function () {
			var correct = functionCanStillAccess === true
			expect(correct).toBe(true)
		})
	})

	describe('Problem 3 - ', function () {
		it('annePromotion should be a function', function () {
			expect(typeof annePromotion).toEqual('function')
		})
		it('anneResumeEntry1 should be correct', function () {
			var correct = anneResumeEntry1 === "Anne now works as a Queen in London"
			expect(correct).toBe(true)
		})
		it('anneResumeEntry2 should be correct', function () {
			var correct = anneResumeEntry2 === "Anne now works as a Lady-In-Waiting in Tower of London dungeons"
			expect(correct).toBe(true)
		})
		it('annesJobInDungeon should be correct', function () {
			var correct = annesJobInDungeon === "Lady-In-Waiting"
			expect(correct).toBe(true)
		})

		it('claraPromotion should be a function', function () {
			expect(typeof claraPromotion).toEqual('function')
		})
		it('claraResumeEntry should be a function', function () {
			var correct = claraResumeEntry === "Clara now works as a programmer in Seattle"
			expect(correct).toBe(true)
		})
	})

	
})