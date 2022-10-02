function solve(startingYield) {
    let currYield = startingYield;
    let dayCount = 0;
    let spiceExtracted = 0;
    while (currYield >= 100) {
        dayCount++;
        spiceExtracted += currYield;
        currYield -= 10
        if (spiceExtracted > 26) {
            spiceExtracted -= 26;
        }

    }

    if (spiceExtracted > 26) {
        spiceExtracted -= 26;
    }

    console.log(dayCount);
    console.log(spiceExtracted);

}

solve(450)