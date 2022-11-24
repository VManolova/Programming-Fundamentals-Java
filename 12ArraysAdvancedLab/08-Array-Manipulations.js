function arrManipulation(arr) {
    let originalArr = arr[0].split(' ')
        .map(x => Number(x));
    arr.shift();

    for (let i = 0; i < arr.length; i++) {
        let [command, num, index] = arr[i].split(' ');
        num = Number(num);
        index = Number(index);

        switch (command) {
            case 'Add': originalArr.push(num); break;
            case 'Remove': originalArr = originalArr.filter(el => el !== num); break;
            case 'RemoveAt': originalArr.splice(num, 1); break;
            case 'Insert': originalArr.splice(index, 0, num); break;
        }
    }

    console.log(originalArr.join(' '));
}


arrManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])

//4 53 6 8 43 3
