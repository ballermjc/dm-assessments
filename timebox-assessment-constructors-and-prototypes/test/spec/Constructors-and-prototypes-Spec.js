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
describe('constructors-and-prototypes', function () {

	describe('Problem 1 - ', function() {
	    it('should be a constructor function', function(){
			expect(new TestScores).toEqual(jasmine.any(Object));
		})
		it('should have the correct name property and value', function() {
			var Larry = new TestScores('Larry', '80%')
			expect(Larry.name).toBe('Larry')
		})
		it('should have the correct name property and value', function() {
			var Peggy = new TestScores('Peggy', '90%')
			expect(Peggy.percent).toBe('90%')
		})
		it('Suzy should exist', function() {
			expect(suzy).toBeDefined()
		})
		it('Suzy should have received 98% on the test', function() {
			expect(suzy.percent).toBe('98%')
		})
	})


	describe('Problem 1.5 - ', function () {
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