function triangle(num) {
    let n = num;
    for (let i = 1; i <= n; i++) {
        let buff = "";
        let times = 0;
        while (times !== i) {
            buff += i + " ";
            times++;
        }
        console.log(buff);
    }
}

triangle(3);