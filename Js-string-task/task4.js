let word = 'unix and Xtrem'
for (i = 0; i < word.length; i++) {
    if (word.includes('x' || 'X')) {
        word = word.replace('x', 'y');
        word = word.replace('X', 'Y');

    }

}
console.log(word);