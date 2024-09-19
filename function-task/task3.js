function make_avg(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];

    }
    const arrSize = arr.length;
    const total = sum / arrSize;;

    return total;
}
console.log(make_avg([2, 4, 8, 6]));