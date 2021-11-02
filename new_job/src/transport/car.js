const Transport = require('./Transport');

class Car extends Transport {
    constructor(name,transferCost,placeCount) {
		super(name, transferCost);
		this.placeCount = placeCount;
	}
 
    getplaceCount() {
             return this.placeCount;
    }
    setplaceCount(placeCount) {
        this.placeCount = placeCount;
    }

}
module.exports = Car;