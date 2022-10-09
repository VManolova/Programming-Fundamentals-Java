function equalArrays(arr1, arr2) {
    let l1 = arr1.length;
    let l2 = arr2.length;

    let sum = 0;
    let differAtIndex = 0;
    let foundDifference = false;


    let ind1 = 0;
    let ind2 = 0;

    while (ind1 < l1 || ind2 < l2) {
        sum += Number(arr1[ind1]);

        if (arr1[ind1] !== arr2[ind2]) {
            differAtIndex = ind1;
            foundDifference = true;
            break;
        }

        ind1++;
        ind2++;
    }
    
    if (foundDifference) {
        console.log(`Arrays are not identical. Found difference at ${differAtIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10', '20', '30'],
    ['10', '20', '30'])