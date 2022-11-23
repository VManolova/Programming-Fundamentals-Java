function printNxNmatrix(n) {
    let nAsStr = n.toString();
    let matrix = ((nAsStr + ' ').repeat(n) + `\n`).repeat(n);
    console.log(matrix);
}

printNxNmatrix(3)