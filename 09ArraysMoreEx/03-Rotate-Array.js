function rotate(arr) {
    let rotations = Number(arr.pop());
    for (let i = 1; i <= rotations; i++) {
        let last = arr.pop();
        arr.unshift(last);
    }
    console.log(arr.join(' '));
}

rotate(['Banana', 'Orange', 'Coconut','Apple', '15'])
