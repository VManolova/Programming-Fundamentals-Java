function fancySorting(arr) {
    // first = biggest 
    // second = smallest
    // third = secondBiggest
    // fourth = secondSmallest
    // and so on...

    let sortedFromSmallToBig = arr.sort((a, b) => { return a - b });
    let fancySorted = [];

    while (sortedFromSmallToBig.length) {
        let biggest = sortedFromSmallToBig
            .reverse()
            .shift();
        fancySorted.push(biggest);

        let smallest = sortedFromSmallToBig
            .reverse()
            .shift();
        fancySorted.push(smallest);
        
        // It can be done in two line also...

        // fancySorted.push(sortedFromSmallToBig.pop());
        // fancySorted.push(sortedFromSmallToBig.shift());
    }

    console.log(fancySorted.join(' '));

}

fancySorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])
            //690 2 47 6 45 7 34 19 32 32
