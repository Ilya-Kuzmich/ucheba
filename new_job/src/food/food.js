class food {
    constructor(drinks,timesToEat,vegan,foodCost) {
		this.drinks = drinks;
		this.vegan = vegan;
		this.timesToEat = timesToEat;
		this.foodCost = foodCost;
	}

    getFoodCost() {
		return foodCost;
	}

	setFoodCost(foodCost) {
		this.foodCost = foodCost;
	}

    getTimesToEat() {
		return timesToEat;
	}

    setTimesToEat(timesToEat) {
		this.timesToEat = timesToEat;
	}
}

module.exports = food;