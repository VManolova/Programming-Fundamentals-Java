function reverseStr(str) {
    let revStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }
    console.log(revStr);
}

reverseStr("Hello")