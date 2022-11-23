function addAndSubtract(a, b, c) {
    function sum(x, y) {
        return x + y;
    }

    let sumFirstTwo = sum(a, b);

    function subtract(x, y) {
        return x - y;
    }

    let res = subtract(sumFirstTwo, c);
    console.log(res);
}

addAndSubtract(23, 6, 10);