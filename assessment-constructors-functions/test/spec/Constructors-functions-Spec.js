
//Test Suite
describe('constructors-and-prototypes', function () {

	describe('Problem 1 - ', function () {
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
	
	describe('Problem 2 - ', function() {
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

	describe('Problem 3 - ', function () {
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
	
})