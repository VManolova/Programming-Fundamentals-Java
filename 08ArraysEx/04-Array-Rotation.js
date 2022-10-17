function arrRotations(arr, rotations) {
    for (let rotaion = 1; rotaion <= rotations; rotaion++) {
        let firstEl = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (i === arr.length - 1) {
                arr[i] = firstEl;
                break;
            }
            arr[i] = arr[i + 1]
        }
    }

    console.log(arr.join(" "));
}

arrRotations([32, 21, 61, 1], 4 );