const trees = require('./tress');

class list extends trees{
    constructor (nametrees, quantity, thickness){
    super(nametrees, quantity);
    this.thickness=thickness

}

getthickness() {
    return this.thickness; 
}
}

module.exports = list