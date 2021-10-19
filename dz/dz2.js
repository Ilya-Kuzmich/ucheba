let sd = new Date("2000-01-01");
let  nowd = new Date();
function Fridays13() {
    let count = 0;
    for (let day = sd; day <= nowd; day.setDate(day.getDate() + 1)) {

        if (day.getDay() == 5 && day.getDate() == 13) {
            count++;

        }

    }
    return count;
}
console.log(Fridays13())
