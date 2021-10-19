var sum2=0
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
    var p1_1 = getRandomInt(1, 6);
    var p2_1 = getRandomInt(1, 6);
        console.log('значение за первый круг');
        console.log('первый игрок:',p1_1,'второй игрок:',p2_1);
    var p1_2 = getRandomInt(1, 6);
    var p2_2 = getRandomInt(1, 6);
        console.log('значение за второй круг');
        console.log('первый игрок:',p1_2,'второй игрок:',p2_2);
    var p1_3 = getRandomInt(1, 6);
    var p2_3 = getRandomInt(1, 6);
        console.log('значение за третий круг');
        console.log('первый игрок:',p1_3,'второй игрок:',p2_3);

        sum1=(p1_1+p1_2+p1_3)

        sum2=(p2_1+p2_2+p2_3)
if (sum1>sum2){ 
    console.log('Выиграл первый игрок, его сумма составляет:',sum1,'Сумма второго игрока составляет:',sum2);
}
else if (sum1<sum2){
    console.log('выиграл второй игрок, его сумма составляет:',sum2,'Сумма первого игрока составляет:',sum1);
}
else {
    console.log('ничья, сумма двух играков совпала и равна:',sum2);
}


