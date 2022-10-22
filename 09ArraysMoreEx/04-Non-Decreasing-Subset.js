function nonDecreasingSubset(numbers) {
    let max = numbers[0];
    let res = numbers.filter(num => {
        if (max <= num) {
            max = num;
        }
        return num >= max;
    });
    console.log(res.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);