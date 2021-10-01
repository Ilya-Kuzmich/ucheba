function Integer(number, num) {
    const a = []
    let sum = 0
    for (let i = 0; i < num; i++) {
        if (i === num - 1) {
            a.push(number - sum);
            break;
        }
        let ff = Math.round(Math.random() * (number - sum));
        a.push(ff);
        sum += ff;
    }
    return a;
}
console.log(Integer(15, 4));



function real(number, num) {
    const b = []
    let sum = 0
    for (let i = 0; i < num; i++) {
        if (i == num - 1) {
           b.push(+(number - sum).toFixed(2));
            break;
        }
        let ff = +(Math.random() * (number - sum)).toFixed(2);
        b.push(ff);
        sum+= ff;
    }
    return b
}
console.log(real(15, 4));