class Calculator {
    constructor () {
        this.result = 0;
    }
   
    div(n) {
        if (typeof n !== "number") throw new Error ("err type");
        if (n === 0) throw new Error ("No 0 parameter");
        this.result /= n;
        return this;
    }
    
    plus(n) {
        if (typeof n !== "number") throw new Error ("err type");
        this.result += n 
        return this;
    
    }
    minus(n) {
        if (typeof n !== "number") throw new Error ("err type");
        this.result -= n;
        return this;
    
    }
    mult(n) {
        if (typeof n !== "number") throw new Error ("err type");
        this.result *= n;
        return this;
    
    }
    getResult() {
        return this.result;
    
    }
    cleanUp() {
        this.result = 0;
    }
}

module.exports = Calculator;