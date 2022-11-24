function trackGuests(arr) {
    let guests = [];
    for (let i = 0; i < arr.length; i++) {
        let [name, , notOrgoing] = arr[i].split(' ');
        if (notOrgoing === 'going!') {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
                continue;
            }
            guests.push(name);
        } else if (notOrgoing === 'not') {
            if (guests.includes(name)) {
                guests = guests.filter(x => x !== name);
                continue;
            }
            console.log(`${name} is not in the list!`);
        }
    }

    console.log(guests.join('\n'));
}

trackGuests(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])