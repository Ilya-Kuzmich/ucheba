let PassengersCar = require('./vehicle/passengersCar')
let truck = require('./vehicle/Truck')
let TaxiStation = require('./TaxiStation/TaxiStation')

let TaxiStation= new TaxiStation(true)
let cars =[
    new Car('vw', 3000, 4),
    new Car('Aidi', 120000, 3),
    new Car('vw', 3000, 5),
    new Car('BMW', 3000, 4),
    new Car('Renault', 3000, 4),
]

let trukcs=[
    new trukcs('Man', 3000, 17),
    new trukcs('Man', 15000, 10),
    new trukcs('Renault', 10000, 13),
]

TaxiStation.addCarsPool(cars)
TaxiStation.addTrucksPool(trukcs)

(async() =>{
const passengere= parseInt (await prompt('Enter number of passengere'))
const trip= parseInt( await prompt(''))
const car= TaxiStation.passengereFilter(passengere);
car.addTrip(trip);
console.log(car.toString());
})();