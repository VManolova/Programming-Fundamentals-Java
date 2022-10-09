function reverseArr(strings) {
    let halfLength = strings.length / 2;

    for (let i = 0; i < halfLength; i++) {
        swap(strings, i, strings.length - 1 - i);
    }

    printArrWithSpace(strings);

    //swap 2 elements
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    //print in single line with space
    function printArrWithSpace(arr) {
        console.log(arr.join(' '));
    }
}

reverseArr(['33', '123', '0', 'dd']);