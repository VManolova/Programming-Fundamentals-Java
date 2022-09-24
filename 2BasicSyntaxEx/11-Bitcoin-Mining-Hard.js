function bitcoin(input) {

    const bitcoinPrice = 11949.16;

    let bitcoinBought = 0;
    let weBoughtBitcoin = false;
    let found1stDay = false;
    let day1stBoughtBitcoin = 1;
    let lvTotal = 0;

    for (let i = 0; i < input.length; i++) {
        let goldCurrDay = Number(input[i]);
        if ((i + 1) % 3 === 0) {
            goldCurrDay -= 0.30 * goldCurrDay;
        }

        lvTotal += goldCurrDay * 67.51;

        if (bitcoinPrice <= lvTotal) {
            weBoughtBitcoin = true;
            if (!found1stDay) {
                found1stDay = true;
                day1stBoughtBitcoin = i + 1;
            }
            bitcoinBought++;
            lvTotal = lvTotal - bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if(weBoughtBitcoin){
        console.log(`Day of the first purchased bitcoin: ${day1stBoughtBitcoin}`);
    }
    console.log(`Left money: ${lvTotal.toFixed(2)} lv.`);

}

bitcoin([3124.15,504.212,2511.124]);