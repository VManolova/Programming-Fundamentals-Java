function carWash(arr) {
    let command = arr[0];
    let perc = 0;

    for (let i = 0; i < arr.length; i++) {
        command = arr[i];
        switch (command) {
            case 'soap': perc +=10; break;
            case 'water': perc += 0.20 * perc; break;
            case 'vacuum cleaner': perc += 0.25 * perc; break;
            case 'mud': perc -= 0.10 * perc; break;
        }
    }

    console.log(`The car is ${perc.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
