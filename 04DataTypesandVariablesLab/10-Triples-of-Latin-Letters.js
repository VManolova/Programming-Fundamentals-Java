function solve(num) {
    
    for (let i = 0; i < num; i++) {
        let buff = "";
        let letter1 = String.fromCharCode(97 + i)
        buff += letter1;
        for (let j = 0; j < num; j++) {
            let letter2 = String.fromCharCode(97 + j)
            buff += letter2;
            for (let k = 0; k < num; k++) {
                let letter3 = String.fromCharCode(97 + k)
                buff += letter3;
                console.log(buff);
                buff=letter1+letter2;
                
            }
            buff=letter1;
        }
              
    }

  
}

solve(2)