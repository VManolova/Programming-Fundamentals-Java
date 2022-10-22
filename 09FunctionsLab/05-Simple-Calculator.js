function calculator(one, two, op) {
    switch(op){
        case 'multiply': return one * two;
        case 'divide': return one / two;
        case 'add': return one + two;
        case 'subtract': return one - two;
    }
}

let res = calculator(5,5,'multiply')
console.log(res);
