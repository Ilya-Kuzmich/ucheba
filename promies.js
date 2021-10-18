const { TIMEOUT } = require("dns");

let condition=true;
// let p= new Promise((resolve, reject) =>{
// setTimeout(() =>{
//     if (condition){
//     resolve('da')
// } else {
//     reject('net')
// }

// }, 500)
// })

function getResult(result){
 return   new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if (condition){
                console.log(result)
            resolve(result)
        } else {
            reject('net')
        }
        
       }, TIMEOUT)
        })
}
getResult(17, 500)
.then(() =>{
   return getResult(20, 1000)
})

// p   
// .then((result)=>console.log(result))   
// .catch((reject) => console.log(reject))

// console.log(p);
// setTimeout(() =>{
// console.log(p)
// },500)
