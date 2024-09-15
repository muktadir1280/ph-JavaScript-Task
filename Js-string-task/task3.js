const word = 'A unique idea evolves over time.';
const letters = word.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let allVowelPresent = true;

for (let i = 0; i < vowels.length; i++) {
    if (!word.includes(vowels[i])) {
        allVowelPresent = !allVowelPresent;
    }
}
console.log(allVowelPresent);