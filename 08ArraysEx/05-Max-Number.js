function topIntegers(arr) {
    let l = arr.length;
    let topInt = "";

    for (let i = 0; i < l; i++) {
        let isBigger = true;

        for (let j = i + 1; j < l; j++) {
            if (arr[i] <= arr[j]) {
                isBigger=false;
                break;
            }
        }

        if(isBigger){
            topInt += arr[i] + " ";
        }
    }
   
    console.log(topInt);
}

topIntegers([41, 41, 34, 20])