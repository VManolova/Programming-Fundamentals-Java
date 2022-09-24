function divisible(num) {
    let divider = 0;

    if (num % 10 === 0) {
        divider = 10;
    } else if (num % 7 === 0) {
        divider = 7;
    } else if (num % 6 === 0) {
        divider = 6;
    } else if (num % 3 === 0) {
        divider = 3;
    } else if (num % 2 === 0) {
        divider = 2;
    } else {
        console.log("Not divisible");
        return;
    }

    console.log(`The number is divisible by ${divider}`);
}

divisible(30)