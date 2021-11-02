class Trip {
    constructor( date,tripDuration, food, transport, serviceCost) {
		this.tripDuration = tripDuration;
		this.transport = transport;
		this.food = food;
		this.serviceCost = serviceCost;
		this.date = date;
    }

   getTransport() {
		return transport;
	}

	setTransport(transport) {
		this.transport = transport;
	}

    getFood() {
		return food;
	}

	setFood(food) {
		this.food = food;
	}

	getTripDuration() {
		return tripDuration;
	}

	setTripDuration(tripDuration) {
		this.tripDuration = tripDuration;
	}

	getServiceCost() {
		return serviceCost;
	}

	setServiceCost(serviceCost) {
		this.serviceCost = serviceCost;
	}

	getDate() {
		return date;
	}

	setdate(date) {
		this.date = date;
	}
	
	// costCalc() {
	// 	finalCost = 0;
	// 	for (i = 0; i < transport.length; i++) {
	// 		finalCost += transport[i].getCost();
	// 	}
	// 	for (j = 0; j < food.length; j++) {
	// 		finalCost += food[j].getFoodCost();
	// 	}
	// 	finalCost += serviceCost;
	// 	return finalCost;
	// }

	// getAllTransportDisplay() {
	//     allTransport = "";
	// 	for (i = 0; i < transport.length; i++){
	// 		allTransport = allTransport + transport[i].getName() + " ";
	// 	}
	// 	return allTransport;
	// }

	// getFoodTime() {
	// 	allFood = "";
	// 	for (i = 0; i < food.length; i++) {
	// 		allFood = allFood + food[i].getTimesToEat() + " ";
	// 	}
	// 	return allFood;
	// }

	//  rintTrip();

}
module.exports = Trip;
