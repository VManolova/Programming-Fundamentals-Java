function adventure(info) {
    const questDays = Number(info[0]);
    const playersCount = Number(info[1]);
    let energy = Number(info[2]);

    const water1day1person = Number(info[3]);
    let waterSupply = questDays * water1day1person * playersCount;

    const food1day1person = Number(info[4]);
    let foodSupply = questDays * food1day1person * playersCount;

    let i = 5;

    let energyLost = false;

    for (let day = 1; day <= questDays; day++) {
        let lostEnergy = Number(info[i]);
        i++;
        energy -= lostEnergy;
        
        if (energy <= 0) {
            energyLost = true;
            break;
        }

        if (day % 2 === 0) {
            energy += 0.05 * energy;
            waterSupply -= 0.30 * waterSupply;
        }

        if (day % 3 === 0) {
            foodSupply -= foodSupply / playersCount;
            energy += 0.10 * energy;
        }

        
    }

    if (energyLost) {
        console.log(`You will run out of energy. You will be left with ${foodSupply.toFixed(2)} food and ${waterSupply.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);
    }
}

adventure(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])


