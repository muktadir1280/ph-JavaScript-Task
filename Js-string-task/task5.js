let words = 'ami tomake bhalobashi mukta';
words = words.split(' ');
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length > 0) {
        let capital = word[0].toUpperCase() + word.slice(1);
        capitalizedWords.push(capital);
    }
}
let result = capitalizedWords.join(' ');
console.log(result);