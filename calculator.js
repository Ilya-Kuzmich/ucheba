function Calculator() {
    this._result=null;
    this.getlastresult= () => this._result
    this.sum =(a, b) => {
        this._result= a + b; 
        console.log(`Sum of ${a} and ${b} equals ${this._result}`);
        return this._result;
        
    }
    this.minus =(a, b) => {
        this._result= a - b; 
        console.log(`Minus of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
    this.division =(a, b) => {
        this._result= a / b; 
        console.log(`Division of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
    this.multiplication =(a, b) => {
        this._result= a * b; 
        console.log(`Multiplication of ${a} and ${b} equals ${this._result}`);
        return this._result;
    }
}


module.exports = Calculator;