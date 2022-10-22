function printNthEl(arr) {
    const step = Number(arr.pop());

    let res = arr[0] + ' ';

    let i = 0;
    while (i + step < arr.length) {
        i = i + step;
        res += arr[i] + ' ';
    }

    console.log(res);
}

printNthEl(['5', '20', '31', '4', '20', '2'])