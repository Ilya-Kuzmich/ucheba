const Transport = require('./Transport');

class Train extends Transport {
    constructor(name, transferCost, type) {
        super(name, transferCost);
        this.type = type;

    }
    gettype() {
        return this.type;
    }

    settype(type) {
        this.type = type;
    }

}

module.exports = Train;