class Calculator {
    constructor() {
        this.slotArr = [];
        this.add = function () {
            var result = 0;
            for (var i = 0; i < arguments.length; i++) {
                result += parseFloat(arguments[i]);
            }
            this.num = result;
            return result;
        };
        
        this.multiply = function(){
            var result = 1;
            for(var j = 0; j < arguments.length; j++){
                result *= parseFloat(arguments[j]);
            }
            this.num = result;
            return result;
        };

        this.last = function(){
            return this.num;
        }

        this.set_slot = function(){
            this.slotArr.push(this.last());
            return this.slotArr[arguments[0]-1];
        }

        this.get_slot = function(){
            return this.slotArr[arguments[0]-1];
        }
    }
}
let calculator = new Calculator();