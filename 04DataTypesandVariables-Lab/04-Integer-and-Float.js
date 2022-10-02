function floatOrInteger(a, b, c) {
    let sum = a + b + c;

    let isInt = Number.isInteger(sum);
    let output = isInt ? "Integer" : "Float";
    console.log(`${sum} - ${output}`);
}

floatOrInteger(99, 10.1, 8)

