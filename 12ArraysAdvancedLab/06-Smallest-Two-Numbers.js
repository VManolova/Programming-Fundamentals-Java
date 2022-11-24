function printTwoSmallest(arr) {
    let sorted = arr.sort((a, b) => { return a - b; });
    let res = [];
    res.push(sorted.shift());
    res.push(sorted.shift());
    console.log(res.join(' '));
}

printTwoSmallest([30, 15, 50, 5])