function solve(num1, op, num2) {
    let res = 0;
    switch (op) {
        case "+": res = num1 + num2; break;
        case "-": res = num1 - num2; break;
        case "*": res = num1 * num2; break;
        case "/": res = num1 / num2; break;
    }

    console.log(res.toFixed(2));
}

solve(5,'+', 3)