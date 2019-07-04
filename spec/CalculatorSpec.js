describe("Calculator", function(){
    let calculator_instance  = new Calculator();
    describe("add", function () {
    
        it("should be able to add two numbers", function() {
            result = calculator_instance.add(1,3);
            expect(result).toBe(4);

            result = calculator_instance.add(5.5,1,2);
            expect(result).toBe(8.5);
        });
    
        it("should be able to add multiple numbers together", function() {
            result = calculator_instance.add(1,2,4,5);
            expect(result).toBe(12);
    
            result = calculator_instance.add(5.5,0,0,5);
            expect(result).toEqual(10.5);
        });
    });
    
    describe("multiply", function() {
        
        it("should be able to multiply two numbers", function() {
            
            result = calculator_instance.multiply(1,2);
            expect(result).toEqual(2);

            result = calculator_instance.multiply(4.5,2);
            expect(result).toEqual(9);
        });
    
        it("should be able to multiply multiple numbers", function(){
            
            result = calculator_instance.multiply(1,2,3,4);
            expect(result).toEqual(24);

            result = calculator_instance.multiply(6.2,2,1);
            expect(result).toEqual(12.4);

        });
    });
    
    it("should remember last result", function(){
        expect(calculator_instance.add(1,2)).toEqual(3);
        expect(calculator_instance.last()).toEqual(3);
    });

    it("should use the last value as an argument", function(){
       expect(calculator_instance.add(1,2)).toEqual(3);
       expect(calculator_instance.multiply(calculator_instance.last(),5)).toEqual(15); 
    });

    it("should allow calculator to remember more stuff", function(){
        expect(calculator_instance.add(1,2)).toEqual(3);
        expect(calculator_instance.set_slot(1)).toEqual(3);
        expect(calculator_instance.get_slot(1)).toEqual(3);
        expect(calculator_instance.add(10,20)).toEqual(30);
    });

    it("should use memory slots as arguments", function(){
        let calculator_instance = new Calculator();
        expect(calculator_instance.add(1,2)).toEqual(3);
        expect(calculator_instance.set_slot(1)).toEqual(3);
        expect(calculator_instance.add(10,20)).toEqual(30);
        expect(calculator_instance.set_slot(2)).toEqual(30);

        expect(calculator_instance.add(100,200)).toEqual(300) 
        expect(calculator_instance.get_slot(1)).toEqual(3) 
        expect(calculator_instance.get_slot(2)).toEqual(30)
        expect(calculator_instance.last()).toEqual(300)
        
        let LAST = calculator_instance.last();
        let SLOT_1 = calculator_instance.slotArr[0];
        let SLOT_2 = calculator_instance.slotArr[1];

        expect(calculator_instance.add(LAST, 10)).toEqual(310)
        expect(calculator_instance.add(SLOT_1, 5)).toEqual(8)
        expect(calculator_instance.multiply(SLOT_2, 2)).toEqual(60)

    });
});
