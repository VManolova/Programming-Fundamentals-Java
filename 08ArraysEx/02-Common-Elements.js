function commonElem(first, second) {
    let length1st = first.length;
    let length2nd = second.length;

    for (let ind1st = 0; ind1st < length1st; ind1st++) {
        for (let ind2nd = 0; ind2nd < length2nd; ind2nd++) {
            if (first[ind1st] === second[ind2nd]) {
                console.log(first[ind1st]);
            }
        }
    }
}

// commonElem(['Hey', 'hello', 2, 4, 'Peter', 'e'],
//     ['Petar', 10, 'hey', 4, 'hello', '2'])

    commonElem(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])
