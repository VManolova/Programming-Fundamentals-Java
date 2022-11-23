function loadingBar(num) {
    if (num === 100) {
        console.log(`100% Complete!`);
        return;
    }

    let firstLine = `${num}% [${'%'.repeat(num / 10) + '.'.repeat(10 - num / 10)}]`
    console.log(firstLine);
    console.log(`Still loading...`);
}

loadingBar(100);

