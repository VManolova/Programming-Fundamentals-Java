function solve(binary) {
    let i = 0;
    let decimal = Number(binary[i])
    i++;
    while (i < binary.length) {
        decimal = decimal * 2 + Number(binary[i]);
        i++;
    }

    console.log(decimal);
}

solve('11110000')