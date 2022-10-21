function ladyBugs(info) {
    const sizeField = info[0]; // 3
    let allIndexes = info[1].split(' '); // ['0','1']

    let i = 2;
    while (i < info.length) {
        let command = info[i].split(' ');

        let ladyBugInd = Number(command[0]); // 0
        let direction = command[1]; // right
        let flyLength = Number(command[2]); // 1
        
        let commandEnded = false;

        for (let j = 0; j < allIndexes.length; j++) {
            let currInd = Number(allIndexes[j]); // 
            if (ladyBugInd === currInd) {
                commandEnded = true;
                currInd += flyLength; // 1
                allIndexes.shift();
                currInd = currInd.toString();
                while (allIndexes.includes(currInd)) {
                    currInd = Number(currInd);
                    currInd += flyLength;
                    //currInd = currInd.toString();
                }
                // currInd = Number(currInd);
                if (currInd > sizeField - 1) {
                    
                    break;
                }

                currInd = currInd.toString();
                allIndexes.push(currInd);
            }else{
                continue;
            }

            if(commandEnded) break;
        }
        i++;
    }



}

ladyBugs([3, '0 1', '0 right 1', '2 right 1'])