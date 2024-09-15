const numbers = [12, 98, 5, 41, 23, 78, 46];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 == 0) {
        evenNumbers.push(number);
    }
}
console.log(evenNumbers);