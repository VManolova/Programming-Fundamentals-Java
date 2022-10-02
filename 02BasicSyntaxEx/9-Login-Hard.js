function login(input) {
    let username = input[0];
    let password = "";
    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let tr = 1;
    let currTry = input[tr];
    tr++;
    let countTrys = 1;
    while (currTry !== password) {
        countTrys++;
        if (countTrys > 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        currTry = input[tr];
        tr++;
    }
    console.log(`User ${username} logged in.`);


}

//login(['sunny','rainy','cloudy','sunny','not sunny'])
login(['Acer', 'login', 'go', 'let me in', 'recA'])