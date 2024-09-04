let square = 0;
let i = 1;
while (i <= 100) {
    if (Math.sqrt(i) % 2 === 0) {
        console.log(i);
        break
    }
    i++;
}