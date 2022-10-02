function solve(number) {
    let isPrime = true;
    if (number === 0 || number === 1) isPrime = !isPrime;

    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            isPrime = !isPrime;
            break;
        }
    }

    console.log(isPrime);
}

solve(7)