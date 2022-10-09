function evenMinusOddSums(numbers){

    // Even or Odd
    let isEven = function(n){
        if(n%2===0) return true;
        return false;
    }

    let evenSum = 0;
    let oddSum = 0;

    for(let num of numbers){
        if(isEven(num)){
            evenSum+=num;
        }else{
            oddSum+=num;
        }
    }

    console.log(evenSum-oddSum);
}

evenMinusOddSums([1,2,3,4,5,6])