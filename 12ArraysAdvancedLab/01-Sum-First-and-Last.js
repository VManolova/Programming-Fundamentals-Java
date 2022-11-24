function sumFirstLastEl(arr) {
    let sum = Number(arr[0]);
    sum += Number(arr.pop());

    console.log(sum);
}

sumFirstLastEl(['20', '30', '40'])