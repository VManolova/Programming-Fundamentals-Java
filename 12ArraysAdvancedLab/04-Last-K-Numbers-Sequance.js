function sequence(n, k) {
    let res = [1, 1, 2];
    for (let i = 3; i < n; i++) {
        let kElements = res.slice(-k);
        let sum = 0;
        for (el of kElements) {
            sum += el;
        }
        res.push(sum);

    }

    console.log(res.join(' '));
}

sequence(8, 2);
//1 1 2 4 7 13