function signCheck(numOne, numTwo, numThree) {
    let check = (numOne, numTwo) => Math.sign(numOne) != Math.sign(numTwo) ? -1 : 1;

    let res = check(check(numOne, numTwo), numThree);

    let signProduct = 'Positive';

    if (res < 0) {
        signProduct = 'Negative';
    }

    console.log(signProduct);
}

signCheck(5, 12, -15)