function repeatStr(str, n) {
    let repeat = '';
    for (let i = 1; i <= n; i++) {
        repeat += str;
    }

    return repeat;
}

let repeat = repeatStr("String", 2);
console.log(repeat);
