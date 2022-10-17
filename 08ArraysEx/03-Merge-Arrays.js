function mergeArr(firstArr, secondArr) {
    let resArr = [];

    for (let i = 0; i < firstArr.length; i++) {
        if (i % 2 === 0) {
            resArr[i] = Number(firstArr[i]) + Number(secondArr[i]);
        } else {
            resArr[i] = firstArr[i] + secondArr[i];
        }
    }

    console.log(resArr.join(' - '));
}

mergeArr(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])