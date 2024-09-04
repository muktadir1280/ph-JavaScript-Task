let sum = 0;
let i = 1;
while (sum < 100) {
    sum = sum + i;
    if (sum >= 100) {
        break;
    }
    i++;
}
console.log(sum);

// let num = 0;
// for (i = 1; num < 500; i++) {
//     num = num + i;
//     if (num >= 100) {
//         break;
//     }
// }
// console.log(num);