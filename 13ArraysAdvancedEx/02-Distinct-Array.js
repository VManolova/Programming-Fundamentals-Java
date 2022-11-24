function removeRepeatingEl(arr) {
    let noRepeatArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!noRepeatArr.includes(arr[i])) {
            noRepeatArr.push(arr[i]);
        }
    }

    console.log(noRepeatArr.join(' '))
}

removeRepeatingEl([7, 8, 9, 7, 2, 3, 4, 1, 2])