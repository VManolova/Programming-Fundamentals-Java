function oddNum(n) {
    let sum = 0;
    let count = 0;
    let i = 1;
    while (count != n) {
        console.log(i);
        sum += i;
        count++;
        i += 2;
    }

    console.log(`Sum: ${sum}`);
}

oddNum(5);