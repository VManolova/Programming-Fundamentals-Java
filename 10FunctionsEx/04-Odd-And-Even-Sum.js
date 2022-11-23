function sumEvenOddDig(number){
    let numberAsString = number.toString();
    let evenSum = 0;
    let oddSum = 0;

    for(let num of numberAsString){
        num = Number(num)
        if(num%2===0){
            evenSum+=num;
        }else{
            oddSum+=num;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sumEvenOddDig(1000435)