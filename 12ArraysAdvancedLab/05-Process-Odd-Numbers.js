function proccessOddNumbers(arr){

    let oddPos = arr.filter((el,i)=>i%2!=0)
                    .map((el)=>el*2)
                    .reverse();
    console.log(oddPos.join(' '));

}

proccessOddNumbers([3, 0, 10, 4, 7, 3])