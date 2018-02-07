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
describe('context', function () {

	describe('Problem 1 - ', function () {
		it('Q1 - book1CheckOut should be correct', function () {
			let correct = book1CheckOut === '"One Fish, Two Fish, Red Fish, Blue Fish" is available for check-out.'
			expect(correct).toEqual(true)
		})
		it('Q1 - q1Context should be correct', function () {
			let correct = q1Context === "implicit"
			expect(correct).toEqual(true)
		})

		it('Q2 - book2CheckOut should be correct', function () {
			let correct = book2CheckOut === '"Oh, the Places You\'ll Go!" is available for check-out.'
			expect(correct).toEqual(true)
		})
		it('Q2 - q2Context should be correct', function () {
			let correct = q2Context === "explicit"
			expect(correct).toEqual(true)
		})

		it('Q3 - globalCheckOut should be correct', function () {
			let correct = globalCheckOut === '"undefined" is available for check-out.'
			expect(correct).toEqual(true)
		})
		it('Q3 - q3Context should be correct', function () {
			let correct = q3Context === "default"
			expect(correct).toEqual(true)
		})

		it('Q4 - book2CheckOut2 should be correct', function () {
			let correct = book2CheckOut2 === '"Oh, the Places You\'ll Go!" is not available for check-out.'
			expect(correct).toEqual(true)
		})
		it('Q4 - q4Context should be correct', function () {
			let correct = q4Context === "explicit"
			expect(correct).toEqual(true)
		})
	})
	describe('Problem 2 - ', function () {
		it('Q1 - queenAnne should be correct', function () {
			let correct = queenAnne.name === 'Anne Boleyn'
							&& queenAnne.age === 30
								&& queenAnne.title === "Queen of England"
			expect(correct).toEqual(true)
		})
		it('Q2 - queenCatherine should be correct', function () {
			let correct = queenCatherine.name === 'Catherine of Aragon'
							&& queenCatherine.age === 37
								&& queenCatherine.title === "Former Queen"
			expect(correct).toEqual(true)
		})
	})

	describe('Problem 3 - ', function () {
		it('Q1 - q1CastleContext should be correct', function () {
			let correct = q1CastleContext === "new"
			expect(correct).toEqual(true)
		})
		it('Q2 - chambordInfo should be correct', function () {
			let correct = chambordInfo === "Chambord Castle in France, grey stone, has a moat."
			expect(correct).toEqual(true)
		})
		it('Q2 - getCastleContext should be correct', function () {
			let correct = getCastleContext === "chambord"
			expect(correct).toEqual(true)
		})
	})
})