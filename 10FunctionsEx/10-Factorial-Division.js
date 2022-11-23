function factDivision(num1, num2) {
    function factOf(n) {
        let res = 1;
        for (let i = n; i >= 2; i--) {
            res *= i;
        }
        return res;
    }

    let fact1 = factOf(num1);
    let fact2 = factOf(num2);

    let res = fact1 / fact2;
    console.log(res.toFixed(2));
}

factDivision(5, 2);