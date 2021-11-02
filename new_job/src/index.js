const prompt = require('prompt-sync')();

const Trip = require('./trip/Trip');
const food = require('./food/food');
const Transport = require('./transport/Transport');
const train = require('./transport/train');
const car = require('./transport/car');
const TripBuilder = require('./trip/TripBuilder');
const plane = require('./transport/plane');


let foods=[
    new food(true, 1, true, 100),
    new food(false, 3, false, 362),
    new food(true, 2, false, 211),
];

let trains = [
    new train("Intescity train", 93, 'paltskard'),
    new train("BJD train", 15, "cope"),
    new train("Eurostar train", 45, "awangart"),
];


let cars = [
    new car("Ecolines bus", 30, 48, 5),
	new car("Eurolines bus", 25, 50, 7),
	new car("Ikarus bus", 15, 60, 3),
];


let planes = [
    new plane("Boeing plane", 135, 0),
    new plane("Airbus plane", 150, 1),
    new plane("Tu plane", 130, 2),
];
(async () => {
    parseInt(await prompt(' kolivhestwo dney: '));
    let isMenu = true;
    while (isMenu) {
        const menu = await prompt('select trips: 1 - отдых 2- экскурсии 3 - шопинг  4 - круиз 0 - exit ');
        switch (menu) {
            case '1':
                const transports = await prompt('select transports: 1 - cars 2- plane 3 - train   0 - exit ');
                switch  (transports){
                case '1':
                    console.table(cars);
                    break;
                case '2':
                    console.table(planes);
                    break;
                case '3':
                    console.table(trains);
                    
                break;
                case '0':
                    {
                        transports = false;
                        break;
                    }
    
                default:
                    console.log('error');
                    break;
                }
                await prompt(' select food: ENTER ')
                console.table(foods);
                break;
           ////////////////////////////////////////////// 
            case '2':
                const transports2 = await prompt('select transports: 1 - cars 2- plane 3 - train   0 - exit');
                switch  (transports2){
                case '1':
                    console.table(cars);
                    break;
                case '2':
                    console.table(planes);
                    break;
                case '3':
                    console.table(trains);
                    
                break;
                case '0':
                    {
                        transports2 = false;
                        break;
                    }
    
                default:
                    console.log('error');
                    break;
                }
                await prompt(' select food: ENTER ')
                console.table(foods);
                break;
///////////////////////////////
            case '3':
                const transports1 = await prompt('select transports: 1 - cars 2- plane 3 - train   0 - exit');
                switch  (transports1){
                case '1':
                    console.table(cars);
                    break;
                case '2':
                    console.table(planes);
                    break;
                case '3':
                    console.table(trains);
                    
                break;
                case '0':
                    {
                        transports2 = false;
                        break;
                    }
    
                default:
                    console.log('error');
                    break;
                }
                await prompt(' select food: ENTER ')
                console.table(foods);
                break;
               

            case '4':
                const transports3 = await prompt('select transports: 1 - train   0 - exit');
                switch  (transports3){
               
                case '1':
                    console.table(trains);
                    
                break;
                case '0':
                    {
                        transports3 = false;
                        break;
                    }
    
                default:
                    console.log('error');
                    break;
                }
                await prompt(' select food: ENTER ')
                console.table(foods);
                break;

            case '0':
                    isMenu = false;
                    break;

            default:
                console.log('ERroor');
                break;
        }
    }
})();
