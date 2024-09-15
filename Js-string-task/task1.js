//Method No. 1
let sentence = 'amar sonar bangla'
let count = 0;
for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] == 'a') {
        count++;
    }

}
console.log(count);

// Method No. 2
const letters = 'amar sonar bangla';
let total = 0;
for (const letter of letters) {
    if (letter === 'a') {
        total++;
    }
}
console.log(total);