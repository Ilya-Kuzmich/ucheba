// let OBJ= new Object({})
// Object.prototype.name=" my name"
// console.log(OBJ.name)
// OBJ.name="MYNAWENAME"
// console.log(Object.prototype.name)
// console.log(OBJ.__proto__.name)


//////////////////////////////// 
// const arr= [1,7,5,6,4]
// arr.forEach(function(el){
//   console.log(el*2)
// })
// for(let el of arr){
//   console.log("--------------",
//   el*3)
// }


/////////////////
// const arr= [1,7,5,6,4]
// const newarr=arr.map(function(el) {
//   return el>4
// })
// const newarr2=[]
// for (let el of arr)
// if (el>4){
//   newarr2.push(el)  
// }
// console.log(newarr)


// const arr= [1,7,5,6,4]
// const newarr=arr.find(function(el) {
//   return el>4
// })
// console.log(newarr)


// const arr= [1,7,5,6,4]
// const str=arr.join("_-_");
// console.log(str)


// const arr= [1,7,5,6,4]
// arr.sort().reverse()
// console.log(arr)


// const arr= [1,7,5,6,4]
// arr.sort(function (a,b) {
//   console.log(a)
// console.log(b)
// if (a=== 5) return -1// dvizenie v levo
// return a-b  
// })
// console.log(arr)


// const arr= [1,7,5,6,4]
// const last=arr.shift()// .POP соответственно убирает из масива первое(последнее) значение 
// console.log(last)
// console.log(arr)


// const arr= [1,7,5,6,4]
// const last=arr.indexOf(1)//показывает позицию массива 
// console.log(last)
// console.log(arr)



// const arr= [1,7,5,6,4]
// const last=arr.slice(3,7)//вырезаетподмассива из массива  в скобках указаны позиции 
// console.log(last)


// const arr= [1,7,5,6,4]
// const last=arr.splice(2,2,"str")//заменяет значения в массиве первое числ-с какой позиции 
// cnsole.log(last)
// console.log(arr)



// const arr= [1,7,5,6,4]
// const arr2=[5,6,7,8,9]
// const last=arr.concat(arr2)
// console.log(last)
// console.log(arr)
// способ склейки массивов

// const arr= [1,7,5,6,4]
// const arr2=[5,6,7,8,9]
// const arr3=[...arr,...arr2]//СПОСОБ СКЛЕЙКИ
// console.log(arr3)


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes


//особенности js
// const a={c:5}
// const b=a
// console.log(a===b)   true

// const a={c:5}
// const b={c:5}
// console.log(a===b)   false

// const a={c:5}
// const b=a
// b.d=6
// console.log(a)    { c: 5, d: 6 }

// let a={c:5}
// let b=a
// b.d=6
// b= {z:0}
// console.log(a)    { c: 5, d: 6 }

// let a=[1,3,5,7]
// let a1=a
// a1.push('fff')
// console.log(a)     [ 1, 3, 5, 7, 'fff' ] 

// let a={c:5}
// let b={...a}
// console.log(b)     { c: 5 }

// let a={c:5,b:{r:7}}
// let b=JSON.stringify(a)
// console.log(b)     //ДЕЛАЕТ ФОРМАТ СТРОКУ

// let a={c:5,b:{r:7}}
// let b=JSON.parse(JSON.stringify(a))
// b.Z=0
// b.b.r=234
// console.log(b) 
// console.log(a)

// function foo(p,...params) {
//   console.log('p=',p)
//   for (let i in params){
//     console.log(params[i]) 
//   }
//   }
//   foo(1,4,5)

// function foo(p=1,p1=3) {
//     console.log(p,p1) 
//   }
//   foo()

// -поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
// - найти максимальное значение числа в массиве ([3,67,15...])
// - записать в массив ряд фибаначи начиная с N члена с длинной массива M
// - даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению 
// (3487 и 3794 ---> 1 и 2 ) 
// - сортировка массива по возрастанию/убыванию
// - удалить из массива все повторяющиеся элементы