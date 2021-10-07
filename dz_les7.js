//поменять массив в обратном порядке- [1,2,3,4,5,6] [6,5,4,3,2,1]
function t1() {
let arr = [1,2,3,4,5,6];
let arr1 = [6,5,4,3,2,1];
console.log('поменять массив в обратном порядке- [1,2,3,4,5,6] [6,5,4,3,2,1]')
console.log(arr.reverse(),arr1.reverse())
}
t1();
// найти максимальное значение числа в массиве 
function t2() {
    let arr = [1, 2, 3, 8, 5, 6];
    console.log('найти максимальное значение числа в массиве')
    console.log(arr.reduce((a, b) => a > b ? a : b))
};
t2();
//  записать в массив ряд фибаначи начиная с N члена с длинной массива M
function t3() {
    let n = 5, m = 10, a = 0, b = 1;
    let fArr = [0, 1];
    new Array(m).fill().forEach((el, index) => {
        a = fArr[index]
        b = fArr[index + 1]
        fArr.push(a + b)
    })
    console.log('записать в массив ряд фибаначи начиная с N члена с длинной массива M')
    console.log(fArr.slice(n - 1, m))
};
t3();
// сортировка массива по возрастанию/убыванию
function t5() {
    let arr = [2,3,5,1,4];
    console.log('сортировка массива по возрастанию/убыванию')
    console.log(arr.sort())
    console.log(arr.reverse(arr.sort))
};
t5();
//удалить из массива все повторяющиеся элементы
function t6() {
    let arr = [1,2,3,3,4,2,5];
    console.log('удалить из массива все повторяющиеся элементы')
    console.log(arr.filter(function (item, index) { return arr.indexOf(item) === index; }))
};
t6();