function evenOddEl(arr) {
    let origSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++) {
        origSum += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        newSum += arr[i];
    }

    console.log(arr);
    console.log(origSum);
    console.log(newSum);
}

evenOddEl([5, 15, 23, 56, 35]);
