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
    }
        
        multiply = function(){
            var result = 1;
            for(var j = 0; j < arguments.length; j++){
                result *= parseFloat(arguments[j]);
            }
            this.num = result;
            return result;
        };

        last = function(){
            return this.num;
        }

        set_slot = function(){
            this.slotArr.push(this.last());
            return this.slotArr[arguments[0]-1];
        }

        get_slot = function(){
            return this.slotArr[arguments[0]-1];
        }
    }