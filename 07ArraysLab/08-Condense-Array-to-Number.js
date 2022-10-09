function condense(numbers) {
    let i = 0;
    let count = numbers.length;

    while (numbers.length !== 1) {
        numbers[i] += numbers[i + 1];
        count--;
        i++;
        if (count === 1) {
            i = 0;
            numbers.pop();
            count = numbers.length;
        }
    }

    console.log(numbers[0]);
}

condense([1])