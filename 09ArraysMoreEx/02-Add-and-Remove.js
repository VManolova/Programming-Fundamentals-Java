function addRemove(commands) {
    let res = [];
    let i = 0;
    for (el of commands) {
        if (el === 'add') {
            res.push(i + 1);
        } else {
            res.pop();
        }
        i++;
    }

    if (res.length) {
        console.log(res.join(' '));
    } else {
        console.log(`Empty`);
    }
}

addRemove(['add', 'add', 'remove', 'add', 'add']);