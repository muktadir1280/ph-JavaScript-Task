// sum odd numbers using for loop
let sum = 0;
for (let i = 91; i <= 129; i++) {
    if (i % 2 === 1) {
        sum = sum + i;
    }
}
console.log(sum);

// sum even numbers using for loop
let sum1 = 0;
for (let n = 51; n <= 85; n++) {
    if (n % 2 === 0) {
        sum1 = sum1 + n;

    }
}
console.log(sum1);

// sum odd numbers using while loop
let sum2 = 0;
let i = 91;
while (i <= 129) {
    if (i % 2 === 1) {
        sum2 = sum2 + i;
    }
    i++;
}
console.log(sum);

// sum even numbers using while loop
let sum4 = 0;
let n = 51;
while (n <= 85) {
    if (n % 2 === 0) {
        sum4 = sum4 + n;

    }
    n++;
}
console.log(sum4);