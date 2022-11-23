function perfectNumber(num) {
    if (num <= 0) {
        console.log(`It's not so perfect.`);
        return;
    }

    let sumDiv = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sumDiv += i;
        }
    }

    if (num === sumDiv) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
}

perfectNumber(1234568);

