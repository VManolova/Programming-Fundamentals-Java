function spaceTravel(info) {
    let travelArr = info[0].split('||');
    let fuel = Number(info[1]);
    let ammunition = Number(info[2]);

    while (travelArr[0] != 'Titan') {
        let currDestinationArr = travelArr
            .shift()
            .split(' ');
        let command = currDestinationArr.shift();
        let integer = Number(currDestinationArr.shift());

        switch (command) {
            case 'Travel':
                fuel -= integer;
                if (fuel >= 0) {
                    console.log(`The spaceship travelled ${integer} light-years.`);
                } else {
                    console.log(`Mission failed.`);
                    return;
                }
                break;
            case 'Enemy':
                if (ammunition >= integer) {
                    ammunition -= integer;
                    console.log(`An enemy with ${integer} armour is defeated.`);
                } else {
                    if (fuel - 2 * integer >= 0) {
                        console.log(`An enemy with ${integer} armour is outmaneuvered.`);
                    } else {
                        console.log(`Mission failed.`);
                        return;
                    }
                }
                break;
            case 'Repair':
                fuel += integer;
                ammunition += 2 * integer;
                console.log(`Ammunitions added: ${2 * integer}.`);
                console.log(`Fuel added: ${integer}.`);
                break;
        }
    }

    console.log(`You have reached Titan, all passengers are safe.`);
}

spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100'])
