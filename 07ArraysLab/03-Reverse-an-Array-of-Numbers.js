function reverse1stNEl(firstNel, arr) {
    let n = firstNel;

    let newArr = getArrFrom1stNel(n, arr);
    let revNewArr = getReverseArr(newArr);
    printArrWithSpace(revNewArr);


    // create new array
    function getArrFrom1stNel(n, arr) {
        let newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(arr[i]);
        }

        return newArr;
    }

    // reverse array
    function getReverseArr(arr) {
        let revArr = [];
        let l = arr.length - 1;
        for (let i = l; i >= 0; i--) {
            revArr.push(arr[i]);
        }
        return revArr;
    }

    //print in single line with space
    function printArrWithSpace(arr) {
        console.log(arr.join(' '));
    }
}

reverse1stNEl(4, [-1, 20, 99, 5])