function jungleNum(number) {
    let textNumber = number.toString();
    let sum = 0;

    for (let i = 0; i < textNumber.length; i++) {
        let currDigAsNum = Number(textNumber[i]);
        sum += currDigAsNum;
    }

    sum = sum.toString();
    let isAmazing = sum.includes('9');
    console.log(`${number} Amazing? ${isAmazing ? "True" : "False"}`);
}

jungleNum(1233)