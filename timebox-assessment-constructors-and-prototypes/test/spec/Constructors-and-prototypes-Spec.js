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

	describe('Problem 5 - String Prototype Reverse ', function () {
	
		var string1 = 'Hello my name is what?'
		var reversed1 = '?tahw si eman ym olleH'

		var string2 = 'My name is who?'
		var reversed2 = '?ohw si eman yM'
		
		var string3 = 'My name is Slim Shady?'
		var reversed3 = '?ydahS milS si eman yM'

		it('should exist', function () {
			expect(string1.reverse).toBeDefined()
		})
		it('should be a function', function () {
			expect(typeof string1.reverse).toBe('function')
		})
		it('should return a string', function () {
			expect(typeof string1.reverse()).toBe('string')
		})
		
		it('should work on sample text', function () {
			expect(string1.reverse()).toBe(reversed1)
			expect(string2.reverse()).toBe(reversed2)
			expect(string3.reverse()).toBe(reversed3)
		})
		it('should work on random text', function () {
			var text, reversedText, randomLength;
			for(let t = 0; t < 5; t++){
				text = ''
				reversedText = ''
				randomLength = Math.floor(Math.random() * 20) + 10;
				var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789?!., '";

  				for (var i = 0, char; i < randomLength; i++){
					char = possible.charAt(Math.floor(Math.random() * possible.length));
					text += char;
					reversedText = char += reversedText;
				}
	
				expect(text.reverse()).toBe(reversedText)
			}
			
		})
	})

	describe('Problem 6 - ', function () {
		var james = new Person('James', 30);

		it('drinkCoffe should be a function', function () {
			expect(typeof james.drinkCoffee).toEqual('function')
		})
		it('readDocumentation should be a function', function () {
			expect(typeof james.readDocumentation).toEqual('function')
		})
		it(' drinkCoffe should return a object', function () {
			expect(typeof james.drinkCoffee()).toBe('object')
		})
		it('readDocumentation should return a object', function () {
			expect(typeof james.readDocumentation()).toBe('object')
		})
		it('readDocumentaion should behave correctly', function () {
			james.readDocumentation();
			expect(james.age).toBe(30)
			expect(james.name).toBe('James')
			expect(james.energy).toBe(20)
			expect(james.linesOfCode).toBe(-10)
			expect(james.qualityOfCode).toBe(10)
		})
		it('drinkCoffee should behave correctly', function () {
			james.drinkCoffee();
			expect(james.age).toBe(30)
			expect(james.name).toBe('James')
			expect(james.energy).toBe(30)
			expect(james.linesOfCode).toBe(40)
			expect(james.qualityOfCode).toBe(9)
		})
	})

	
})