function printFandLkEl(arr) {
    let k = arr.shift();
    let firstKel = arr.slice(0, k);
    let lastKel = arr.slice(-k); // from the end 

    console.log(firstKel.join(' ') + '\n' + lastKel.join(' '));
}

printFandLkEl([3,
    6, 7, 8, 9]);
//  0  1  2  3