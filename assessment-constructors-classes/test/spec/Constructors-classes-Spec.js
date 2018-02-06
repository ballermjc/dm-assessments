
//Test Suite
describe('constructors-and-prototypes', function () {

	describe('Problem 1 - ', function(){
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
	

	describe('Problem 2 - ', function () {
		
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
	
	
})