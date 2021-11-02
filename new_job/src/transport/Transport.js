class Transport{
    constructor(name, transferCost){
        this.name = name;
        this.transferCost = transferCost;
    }
    
    getname() {
        return this.name;
    }

    setname(name) {
        this.name = name;
    }
    gettransferCost() {
        return this._manufacturer;
    }

    settransferCost(transferCost) {
        this.transferCost = transferCost;
    }
    

}

module.exports = Transport;