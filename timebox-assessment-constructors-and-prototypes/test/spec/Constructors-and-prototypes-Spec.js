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

	describe('Problem .5 - ', function () {
		var seshat = new EgyptianGoddesses('Seshat', 'Written Word', 'Clever and Logical', 'Not in touch with her emotions')
		var nephthys = new EgyptianGoddesses('Nephthys', 'Death', 'Protective', 'Misunderstood')
		it('should be a constructor function', function(){
			expect(new EgyptianGoddesses).toEqual(jasmine.any(Object));
		})
		it('should have the correct name, oversees, strength and weakness properties', function() {
			expect(seshat.name).toBeDefined()
			expect(seshat.oversees).toBeDefined()
			expect(seshat.strength).toBeDefined()
			expect(seshat.weakness).toBeDefined()
		})
		it('Maat should exist and have the correct properties and values', function() {
			expect(maat).toBeDefined()
			expect(maat.oversees).toBe('Truth and Justice')
			expect(maat.strength).toBe('Balancing and Just')
			expect(maat.weakness).toBe('Exacting in her standards')
		})
	})
	
	describe('Problem 1 - ', function() {
		var larry = new TestScores('Larry', 80)
		var peggy = new TestScores('Peggy', 90)
	    it('should be a constructor function', function(){
			expect(new TestScores).toEqual(jasmine.any(Object));
		})
		it('should have the correct name and percent property and value', function() {
			expect(larry.name).toBe('Larry')
			expect(peggy.percent).toBe(90)
		})
		it('Suzy should exist', function() {
			expect(suzy).toBeDefined()
		})
	})

	describe('Problem 2 - ', function () {
		var fred = new Caveman('Fred', 45, 'stick')
		var pebbles = new Caveman('Pebbles', 23, 'club')
	    it('should be a constructor function', function(){
			expect(new Caveman).toEqual(jasmine.any(Object));
		})
		it('caveman should have name, age, and weapon properties', function() {
			expect(fred.weapon).toBe('stick')
			expect(fred.name).toBe('Fred')
			expect(fred.age).toBe(45)
		})
		it('health and energy should each exist and equal 100', function() {
			expect(fred.health).toBe(100)
			expect(pebbles.energy).toBe(100)
		})
		it('Larry should exist with the given name, age, and weapon', function() {
			expect(larry).toBeDefined()
			expect(larry.name).toBe('Larry')
			expect(larry.age).toBe(25)
			expect(larry.weapon).toBe('rock')
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