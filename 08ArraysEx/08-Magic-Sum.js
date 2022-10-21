function magicSum(numbers, mSum) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === mSum && numbers[i] != numbers[j]) {
                console.log(numbers[i] + ' ' + numbers[j]);
            }
        }
    }
}

magicSum([1, 2, 3, 4, 5, 6], 6);