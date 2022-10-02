function specialNum(number) {
    for (let i = 1; i <= number; i++) {
        let digSum = 0;
        let currNumText = i.toString();
        for (let j = 0; j < currNumText.length; j++) {
            digSum += Number(currNumText[j]);
        }
        let isSpecial = digSum === 5 || digSum === 7 || digSum === 11;
        console.log(`${i} -> ${isSpecial ? "True" : "False"}`);
    }
}

specialNum(15)