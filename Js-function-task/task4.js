function count_zero(a) {
    let total = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '0') {
            total++;
        }
    }
    return total;
}

console.log(count_zero('1010100'));