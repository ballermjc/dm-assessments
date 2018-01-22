/////////////////////MEGAN///////////////////////

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


	describe('Problem 1 - ', function () {
		it('answerOne should exist', function () {
			expect(answerOne).toBeDefined();
		})
		it('answerOne should be correct', function () {
			let correct = answerOne === 'window'
			expect(correct).toBe(true);
		})

		it('answerTwo should exist', function () {
			expect(answerTwo).toBeDefined();
		})
		it('answerTwo should be correct', function () {
			let correct = answerTwo === 'window'
			expect(correct).toBe(true);
		})

		it('answerThree should exist', function () {
			expect(answerThree).toBeDefined();
		})
		it('answerThree should be correct', function () {
			let correct = answerThree === 'window'
			expect(correct).toBe(true);
		})

		it('answerFour should exist', function () {
			expect(answerFour).toBeDefined();
		})
		it('answerFour should be correct', function () {
			let correct = answerFour === 'myObj.methods'
			expect(correct).toBe(true);
		})
	})

	describe('Problem 2 - ', function () {
		var greekGlobalScopeCorrect = ["hades"]
		var greekPantheonScopeCorrect = ["hades", "zeus", "olympians", "hera"]
		var greekPantheonLoopScopeCorrect = ["hades", "zeus", "olympians", "hera"]
		var greekUnderworldScopeCorrect = ["hades", "gatekeeper", "persephone"]
		var greekUnderworldIfStatementScopeCorrect = ["hades", "gatekeeper", "persephone"]
		it('greekGlobalScope should contain the correct variables', function () {
			var correct = arrayIncludes(greekGlobalScope, greekGlobalScopeCorrect)
			var incorrect = arrayDoesNotInclude(greekGlobalScope, ["zeus", "olympians", "hera", "gatekeeper", "response", "persephone"])
			expect(correct && !incorrect).toBe(true)
		})
		it('greekPantheonScope should contain the correct variables', function () {
			var correct = arrayIncludes(greekPantheonScope, greekPantheonScopeCorrect)
			var incorrect = arrayDoesNotInclude(greekPantheonScope, ["gatekeeper", "response", "persephone"])
			expect(correct && !incorrect).toBe(true)
		})
		it('greekPantheonLoopScope should contain the correct variables', function () {
			var correct = arrayIncludes(greekPantheonLoopScope, greekPantheonLoopScopeCorrect)
			var incorrect = arrayDoesNotInclude(greekPantheonLoopScope, ["gatekeeper", "response", "persephone"])
			expect(correct && !incorrect).toBe(true)
		})
		it('greekUnderworldScope should contain the correct variables', function () {
			var correct = arrayIncludes(greekUnderworldScope, greekUnderworldScopeCorrect)
			var incorrect = arrayDoesNotInclude(greekUnderworldScope, ["zeus", "olympians", "hera"])
			expect(correct && !incorrect).toBe(true)
		})
		it('greekUnderworldIfStatementScope should contain the correct variables', function () {
			var correct = arrayIncludes(greekUnderworldIfStatementScope, greekUnderworldIfStatementScopeCorrect)
			var incorrect = arrayDoesNotInclude(greekUnderworldIfStatementScope, ["zeus", "olympians", "hera"])
			expect(correct && !incorrect).toBe(true)
		})
	})

	/////////////////////JAMES///////////////////////
	describe('Problem 3 - ', function(){
		it('Shape should exist', function(){
			expect(Shape).toBeDefined()
		})
		it('Shape should be a class', function(){
			expect(typeof Shape).toBe("function")
		})
		it('Shape class should properly set the number of sides passed in', function(){
			let threeSideTest = new Shape(3)
			expect(threeSideTest.sides).toEqual(3)
		})
		it('triangle should exist', function(){
			expect(triangle).toBeDefined()
		})
		it('triangle should have been created from Shape class', function(){
			expect(triangle instanceof Shape).toEqual(true)
		})
		it('square should exist', function(){
			expect(square).toBeDefined()
		})
		it('square should have been created from Shape class', function(){
			expect(square instanceof Shape).toEqual(true)
		})
		it('pentagon should exist', function(){
			expect(pentagon).toBeDefined()
		})
		it('pentagon should have been created from Shape class', function(){
			expect(pentagon instanceof Shape).toEqual(true)
		})
		it('each shape should have correct number of sides', function(){
			expect(triangle.sides).toBe(3)
			expect(square.sides).toBe(4)
			expect(pentagon.sides).toBe(5)
		})

	})
	


	describe('Problem 4 - ', function () {
		
		it('Cohort should exist', function(){
			expect(Cohort).toBeDefined()
		})
		it('Cohort should be a function', function(){
			expect(typeof Cohort).toBe("function")
		})
		it('Variable cohort1 should exist', function(){
			expect(cohort1).toBeDefined()
		})
		it('Variable cohort2 should exist', function(){
			expect(cohort2).toBeDefined()
		})
		it('cohort1 should have at least 3 student names', function(){
			let correct = cohort1.students.length > 2 ? true : false
			expect(correct).toBe(true)
		})
		it('cohort2 should have at least the 4 student names supplied', function(){
			let correct = cohort2.students.includes("Brendan Eich", "Dan Abramov", "Wes Bos", "Kent Dodds") ? true : false
			expect(correct).toBe(true)
		})
		it('cohort1.sayName() should produce the proper result', function(){
			expect(cohort1.sayName()).toEqual("This cohort is called wpr27")
		})
		it('cohort2.takeAttendance() should produce the proper result', function(){
			expect(cohort2.takeAttendance()).toBe(console.log("This cohort is called wpr31"))
		})
	})
	

	/////////////////////DAN///////////////////////

	describe('Problem 5 - travel ', function () {
		it('should exist', function () {
			expect(travel).toBeDefined()
		})
		it('should be a function', function () {
			expect(typeof travel).toBe('function')
		})
		it('should return a function', function () {
			var toLondon = travel("London", "plane")
			expect(typeof toLondon).toBe('function')
		})
		it('should return a function, which itself returns "Salt Lake City to London, plane", when passed "London", "plane"', function () {
			var toLondon = travel("London", "plane")
			expect(toLondon()).toEqual('Salt Lake City to London, plane')
		})
		it('should work as required', function () {
			var toHawaii = travel("Hawaii", "plane")
			var going = toHawaii()
			var correct = going === 'Salt Lake City to Hawaii, plane' && typeof toHawaii === 'function'
			expect(correct).toBe(true)
		})
	})

	describe('Problem 6 - ', function () {
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

	describe('Problem 7 - ', function () {
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