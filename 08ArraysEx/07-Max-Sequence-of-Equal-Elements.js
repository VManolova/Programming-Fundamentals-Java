function maxstartSeqEqualNum(arr) {
    // know when a startSeq is found
    // save lenght of startSeq
    // save startSeq
    // compare the lenght of startSeqs

    let startSeq = arr[0];
    let i = 0;
    let len = 1;
    let l = arr.length;
    let currLen = 0;
    
    for (let i = 1; i < l; i++) {
        
        if (startSeq === arr[i]) {
            len++;
            if(currLen>len){
                myIndex = i;
            }
            startSeq = arr[i];
            
        } else {
            currLen = len;
            len = 1;
            startSeq = arr[i];
        }


    }


}

maxstartSeqEqualNum([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);