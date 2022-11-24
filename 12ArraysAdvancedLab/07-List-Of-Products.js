function printOrderedArr(arr) {
    let sorted = arr.sort();
    let i = 1;
    for (el of sorted) {
        console.log(`${i}.${el}`);
        i++;
    }
}

printOrderedArr(['Watermelon', 'Banana', 'Apples'])