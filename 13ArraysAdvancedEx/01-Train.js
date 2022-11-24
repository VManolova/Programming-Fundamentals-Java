function fillingTrain(arr) {
    let wagons = arr[0]
        .split(' ')
        .map(Number);

    const maxCapacity = Number(arr[1]);
    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');
        let numPass = Number(command.splice(-1));
        if (command.length) {
            wagons.push(numPass);
        } else {
            numPass = Number(arr[i]);
            for (let j = 0; j < wagons.length; j++) {
                if (numPass + wagons[j] <= maxCapacity) {
                    wagons.splice(j, 1, numPass + wagons[j]);
                    break;
                }
            }
        }

    }

    console.log(wagons.join(' '));
}

fillingTrain(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])

//72 54 21 12 4 75 23 10 0