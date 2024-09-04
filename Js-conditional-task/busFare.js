const busFare = 800;
const age = 25;
const isStudent = false;

if (age < 10) {
    console.log('free');
} else if (age > 10 && isStudent === true) {
    const discount = busFare * (50 / 100);
    console.log('50% discount: ', discount);
} else if (age >= 60) {
    const discount = busFare * (15 / 100);
    console.log('15% discout: ', discount);
} else {
    console.log('fare 800 tk');
}