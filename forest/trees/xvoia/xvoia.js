const trees = require('./tress');

class xvoia extends trees{
    constructor (nametrees, quantity, height){
    super(nametrees, quantity);
    this.height=height

}

getheight(){
    return this.height;
}
}

module.exports=xvoia;
// toString(){
//     return 'The car ',${this.carBrand}
// }}
