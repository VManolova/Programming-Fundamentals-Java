function modify(num) {
    function avgOfDig(n) {
        let nToStr = n.toString();

        let sumDig = 0;
        let countDig = nToStr.length;

        for (dig of nToStr) {
            dig = Number(dig);
            sumDig += dig;
        }

        return sumDig / countDig;
    }

    let numToString = num.toString();

    while (avgOfDig(num) < 5) {
        numToString += 9;
        num = Number(numToString);
    }

    console.log(num);
}

modify(5835);