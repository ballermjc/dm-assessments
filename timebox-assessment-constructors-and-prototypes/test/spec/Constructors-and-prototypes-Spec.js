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

	describe('Problem 3 - ', function () {
		var norseGlobalScopeCorrect = ["hela"]
		var norsePantheonScopeCorrect = ["hela", "odin"]
		var norsePantheonLoopScopeCorrect = ["hela", "odin", "asgardians", "frigga"]
		var valhallaScopeCorrect = ["hela", "watcher", "response"]
		var valhallaIfStatementScopeCorrect = ["hela", "watcher", "response", "valkyrie"]
		it('norseGlobalScope should contain the correct variables', function () {
			var correct = arrayIncludes(norseGlobalScope, norseGlobalScopeCorrect)
			var incorrect = arrayDoesNotInclude(norseGlobalScope, ["odin", "asgardians", "frigga", "watcher", "response", "valkyrie"])
			expect(correct && !incorrect).toBe(true)
		})
		it('norsePantheonScope should contain the correct variables', function () {
			var correct = arrayIncludes(norsePantheonScope, norsePantheonScopeCorrect)
			var incorrect = arrayDoesNotInclude(norsePantheonScope, ["asgardians", "frigga", "watcher", "response", "valkyrie"])
			expect(correct && !incorrect).toBe(true)
		})
		it('norsePantheonLoopScope should contain the correct variables', function () {
			var correct = arrayIncludes(norsePantheonLoopScope, norsePantheonLoopScopeCorrect)
			var incorrect = arrayDoesNotInclude(norsePantheonLoopScope, ["watcher", "response", "valkyrie"])
			expect(correct && !incorrect).toBe(true)
		})
		it('valhallaScope should contain the correct variables', function () {
			var correct = arrayIncludes(valhallaScope, valhallaScopeCorrect)
			var incorrect = arrayDoesNotInclude(valhallaScope, ["odin", "asgardians", "frigga", "valkyrie"])
			expect(correct && !incorrect).toBe(true)
		})
		it('valhallaIfStatementScope should contain the correct variables', function () {
			var correct = arrayIncludes(valhallaIfStatementScope, valhallaIfStatementScopeCorrect)
			var incorrect = arrayDoesNotInclude(valhallaIfStatementScope, ["odin", "asgardians", "frigga"])
			expect(correct && !incorrect).toBe(true)
		})
	})

	describe('Problem 4 - ', function () {
		it('seattleWeather should be correct', function () {
			var correct = seattleWeather === "The sky is purple and it is stormy."
			expect(correct).toBe(true)
		})
		it('vancouverWeather should be correct', function () {
			var correct = vancouverWeather === "The sky is grey and it is foggy."
			expect(correct).toBe(true)
		})
		it('denverWeather should be correct', function () {
			var correct = denverWeather === "The sky is grey and it is foggy."
			expect(correct).toBe(true)
		})
		it('denverWeather2 should be correct', function () {
			var correct = denverWeather2 === "The sky is blue and it is sunny."
			expect(correct).toBe(true)
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