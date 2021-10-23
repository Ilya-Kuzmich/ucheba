const Vehicle =require('./Vehicle')

class PassengersCar extends Vehicle{
    constructor (carBrand, mileage, Passengers){
    super(carBrand, mileage);
    this.Passengers=Passengers

}

getPassengersCar(){
    return this.Passengers
}
toString(){
    return 'The car ',${this.carBrand}
}

}
