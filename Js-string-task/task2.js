// Method NO. 1
let sentence = 'Amar sonar BanglA'
let count = 0;
for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] == 'a' || sentence[i] == 'A') {
        count++;
    }

}
console.log(count);

// Method NO. 2
const letters = 'amar sonar bAnglA';
let total = 0;
for (const letter of letters) {
    if (letter === 'a' || letter === 'A') {
        total++;
    }
}
console.log(total);