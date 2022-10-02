function solve(number) {
    let numText = number.toString();
    let sum = 0;
    for (let i = 0; i < numText.length; i++) {
        sum += Number(numText[i]);
    }
    console.log(sum);
}

solve(543)