function bombNum(sequence, bomb) {
    const bombNum = bomb[0];
    const bombPower = bomb[1];

    while (sequence.includes(bombNum)) {
        let bombIndex = sequence.indexOf(bombNum);
        if(bombIndex + bombPower-1===1){
            sequence.splice(bombIndex - bombPower, bombIndex + bombPower+1);
        }else{
            sequence.splice(bombIndex - bombPower, bombIndex + bombPower-1);
        }
    }

    let sum = 0;
    for (el of sequence) {
        sum += el;
    }

    console.log(sum);

}

bombNum([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
bombNum([1, 4, 4, 2, 8, 9, 1],[9, 3])
bombNum([1, 7, 7, 1, 2, 3],[7, 1])
