const Trip = require('./Trip');
const Transport = require('../transport/Transport');

class TripBuilder {
    constructor() {
        this.Trip = new Trip();
       
    }

  addTransportPool(transport) {
    return this;
 }

    addFoodPool(foods) {
        return this;

    }


    build() {
        return this.Trip;
    }
}

module.exports = TripBuilder;