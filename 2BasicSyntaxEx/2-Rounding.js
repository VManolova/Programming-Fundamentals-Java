function rounding(num, precision) {
    if (precision > 15) precision = 15;
    let res = num.toFixed(precision);
    console.log(parseFloat(res));
}

rounding(10.5, 3)