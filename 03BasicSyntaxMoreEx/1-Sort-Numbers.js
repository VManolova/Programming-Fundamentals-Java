function sort(n1, n2, n3) {
    let max = Math.max(n1, n2, n3);
    console.log(max);

    if (max == n1) {
        max = Math.max(n2, n3);
    } else if (max == n2) {
        max = Math.max(n1, n3);
    } else {
        max = Math.max(n1, n2);
    }

    console.log(max);

    console.log(Math.min(n1,n2,n3))

}

sort(-2, 1, 3)
