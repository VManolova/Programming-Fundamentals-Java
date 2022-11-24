function printDNA(l) {

    let letters = 'A T C G T T A G G G';
    let arrLetters = letters.split(' ');

    function rotation(arr) {
        let firstEl = arr.splice(0, 1);
        arr.splice(arr.length, 0, firstEl);
        return arr;
    }


    let counter = [];
    for (let j = 1; j <= l; j += 4) {
        counter.push(j);
    }

    let i = 1;

    while (i <= l) {
        let currRow = '';

        if (i === 1 || i % 2 !== 0 && counter.includes(i)) {
            currRow += `**${arrLetters[0]}`;
            arrLetters = rotation(arrLetters);
            currRow += `${arrLetters[0]}**`
            arrLetters = rotation(arrLetters);
        } else if (i % 2 === 0) {
            currRow = `*${arrLetters[0]}--`;
            arrLetters = rotation(arrLetters);
            currRow += `${arrLetters[0]}*`
            arrLetters = rotation(arrLetters);
        } else if (i % 2 !== 0) {
            currRow = `${arrLetters[0]}----`;
            arrLetters = rotation(arrLetters);
            currRow += `${arrLetters[0]}`
            arrLetters = rotation(arrLetters);
        }

        console.log(currRow);
        i++;
    }


}


printDNA(4);

// ATCGTTAGGG

// **AT**
// *C--G*
// T----T
// *A--G*
// **GG**
// *A--T*
// C----G
// *T--T*
// **AG**
// *G--G*