function printAndSum(start, finish) {
    let buff = "";
    let sum = 0;
    for (let i = start; i <= finish; i++) {
        buff += i + " ";
        sum += i;
    }

    console.log(buff);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)