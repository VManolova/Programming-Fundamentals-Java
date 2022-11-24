function pointValidation(arr) {
    function d(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }

    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let val1 = 'invalid';
    if (Number.isInteger(d(x1, y1, 0, 0))) {
        val1 = 'valid';
    }

    let val2 = 'invalid';
    if (Number.isInteger(d(x2, y2, 0, 0))) {
        val2 = 'valid';
    }
    let val3 = 'invalid';
    if (Number.isInteger(d(x1, y1, x2, y2))) {
        val3 = 'valid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${val1}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${val2}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${val3}`);
}

pointValidation([2, 1, 1, 1]);


