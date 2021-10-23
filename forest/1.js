const prompt = require('prompt-promise');
let list = require('./trees/list/list')
let xvoia = require('./trees/xvoia/xvoia')
let lesnichestvo = require('./lesnichestvo/lesnichestvo')

let lesnichestvo = new lesnichestvo(true)
// let lists=[
//     new list('берёза', 25 , 0,4),
//     new list('дуб', 44 , 1,2),
//     new list('липа', 12 , 0,35),
//     new list('ольха', 15 , 0.21)
// ]
// let xvoias=[
//     new xvoia("ель", 120 , 2,5 ),
//     new xvoia("сосна", 111 , 25 ),

// ]

lesnichestvo.addxvoiaTress(xvoias);
lesnichestvo.addlistTress(lists);

async () => {
    const 
};