function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let shieldBrokenXtimes = 0;
    let currLostFight = 1;
    while (currLostFight <= lostFightsCount) {
        if (currLostFight % 2 === 0) {
            expenses += helmetPrice
        }
        if (currLostFight % 3 === 0) {
            expenses += swordPrice
        }
        if (currLostFight % 2 === 0 && currLostFight % 3 === 0) {
            expenses += shieldPrice;
            shieldBrokenXtimes++;
            if (shieldBrokenXtimes % 2 === 0) {
                expenses += armorPrice;
            }
        }

        currLostFight++;
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}

solve(23,
    12.50,
    21.50,
    40,
    200
)