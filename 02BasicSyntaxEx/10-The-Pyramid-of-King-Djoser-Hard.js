function pyramid(base, increment) {
    let h = increment;
    let stoneTotal = 0;
    let marbleTotal = 0;
    let lapisTotal = 0;

    let countFlors = 0;

    let currBase = 0;

    for (currBase = base; currBase > 1; currBase -= 2) {

        countFlors++;

        if(currBase===2) break;

        let stoneCurr = (currBase - 2) * (currBase - 2) * h;
        stoneTotal += stoneCurr;

        let currBasePerimeter = currBase * 4;

        if (countFlors % 5 === 0) {

            let lapisCurr = (currBasePerimeter - 4) * h;
            lapisTotal += lapisCurr;
            continue;
        }

        let marbleCurr = (currBasePerimeter - 4) * h;
        marbleTotal += marbleCurr;
    }

    let goldTotal = currBase * currBase * h;

    if (currBase === 1) {
        countFlors++;
    }

    let hight = countFlors * h;

    console.log(`Stone required: ${Math.round(stoneTotal)}`);
    console.log(`Marble required: ${Math.round(marbleTotal)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapisTotal)}`);
    console.log(`Gold required: ${Math.round(goldTotal)}`);
    console.log(`Final pyramid height: ${Math.floor(hight)}`);

}

pyramid(23, 0.5);