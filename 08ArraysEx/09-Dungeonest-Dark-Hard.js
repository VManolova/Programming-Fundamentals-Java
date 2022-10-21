function dungeon(adventure) {
    let rooms = adventure[0].split('|');

    let health = 100;
    let coins = 0;

    for (let i = 0; i < rooms.length; i++) {
        let infoRoom = rooms[i].split(' ');

        let found = infoRoom[0];
        let num = Number(infoRoom[1]);

        switch (found) {
            case "potion":
                if (health + num >= 100) {
                    num = 100 - health;
                    health = 100;
                } else {
                    health += num;
                }
                console.log(`You healed for ${num} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case "chest":
                coins += num;
                console.log(`You found ${num} coins.`);
                break;
            default:
                let monster = found;
                health -= num;
                if (health > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${i + 1}`);
                    return;
                }
                break;
        }
    }

    console.log(`You've made it! \nCoins: ${coins} \nHealth: ${health}`);
}

//dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
