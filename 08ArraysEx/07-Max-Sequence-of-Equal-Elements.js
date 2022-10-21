function maxstartSeqEqualNum(arr) {
    let maxSeq = '';
    for (let i = 0; i < arr.length; i++) {
        let currSeq = '';
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currSeq+=arr[i]+ ' ';
            } else {
                break;
            }
        }
        if (maxSeq.length < currSeq.length) {
            maxSeq = currSeq;
        }
    }

    console.log(maxSeq);
}

maxstartSeqEqualNum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);