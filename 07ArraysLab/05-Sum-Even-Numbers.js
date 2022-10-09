function sumEven(strings) {
    // Turn char into number
    for (let i = 0; i<strings.length;i++) {
        strings[i] = Number(strings[i])
    }
    // Sum the even
    let sumEven = 0;
    for (let num of strings) {
        if (num % 2 === 0) {
            sumEven += num;
        }
    }

    console.log(sumEven);
}

sumEven(['2','4','6','8','10'])