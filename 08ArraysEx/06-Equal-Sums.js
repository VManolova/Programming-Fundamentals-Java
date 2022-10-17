function leftRightSum(arr) {
    let isFound = false;
    let foundIndex = 0;

    let l = arr.length;
    if(l==1){
        isFound = true;
    }else{
        for (let i = 0; i < l; i++) {
            let leftSum = 0;
            let rightSum = 0;
    
            if (i == 0) {
                leftSum += 0;
            } else {
                let j = 0;
                while (j < i) {
                    leftSum += arr[j];
                    j++;
                }
            }
    
            if (i == l - 1) {
                leftSum += 0;
            } else {
                let k = i + 1;
                while (k < l) {
                    rightSum += arr[k];
                    if (rightSum > leftSum) {
                        break;
                    }
                    if (rightSum == leftSum) {
                        isFound = true;
                    }
                    k++;
                }
            }
    
            if (isFound) {
                foundIndex = i;
                break;
            }
    
        }
    }
   

    if (isFound) {
        console.log(foundIndex);
    } else {
        console.log('no');
    }

}

leftRightSum([1])