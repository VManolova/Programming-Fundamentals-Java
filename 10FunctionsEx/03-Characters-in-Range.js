function symbolsBetween(char1, char2) {

    function swap(a, b) {
        return [b,a];
    }

    let res = "";
    let startAdress = char1.charCodeAt();
    let endAdress = char2.charCodeAt();
    if (startAdress > endAdress) {
        let swapped = swap(startAdress,endAdress);
        startAdress = swapped[0];
        endAdress = swapped[1];
    }

    for (let i = startAdress + 1; i < endAdress; i++) {
        res += String.fromCharCode(i) + " ";
    }

    console.log(res);
}

symbolsBetween('C', '#');

console.log();