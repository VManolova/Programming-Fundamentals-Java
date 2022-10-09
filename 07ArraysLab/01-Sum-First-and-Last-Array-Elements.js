function sum1stLast(numbers) {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];

    let sum = first + last;

    console.log(sum);
}

sum1stLast([20, 30, 40])