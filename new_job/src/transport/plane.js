const Transport = require('./Transport');

class plane extends Transport {
    constructor(name,transferCost,stopCount) {
		super(name, transferCost);
		this.stopCount = stopCount;
	
    }
    getstopCount() {
        return this.stopCount;
    }

    setstopCount(stopCount) {
        this.stopCount = stopCount;
    }

}

module.exports = plane;