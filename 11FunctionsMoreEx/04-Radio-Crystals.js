function helpMe(arr) {
    const desiredThickness = arr[0];
    const transport = 'Transporting and washing';
    let xrayDetected = false;

    function repeatTransport(currThickness) {
        console.log(transport);
        if (!Number.isInteger(currThickness)) {
            return Math.floor(currThickness);
        } else {
            return currThickness;
        }
    }

    function nesho(op, currThickness) {
        let countOperation = 0;
        switch (op) {
            case 'Cut': {
                while (currThickness / 4 >= desiredThickness) {
                    if (currThickness === desiredThickness) {
                        break;
                    }
                    currThickness /= 4;
                    countOperation++;
                }
                console.log(`${op} x${countOperation}`);
                currThickness = repeatTransport(currThickness);

            } break;
            case 'Lap': {
                while (currThickness - 0.20 * currThickness >= desiredThickness) {
                    currThickness -= 0.20 * currThickness;
                    countOperation++;
                }
                console.log(`${op} x${countOperation}`);
                currThickness = repeatTransport(currThickness);
            }
                break;
            case 'Grind': {
                while (currThickness - 20 >= desiredThickness) {
                    currThickness -= 20;
                    countOperation++;
                }
                console.log(`${op} x${countOperation}`);
                currThickness = repeatTransport(currThickness);
            } break;
            case 'Etch': {
                while (currThickness - 2 >= desiredThickness) {
                    currThickness -= 2;
                    countOperation++;
                    if (currThickness - 1 === desiredThickness) {
                        countOperation++;
                        xrayDetected = true;
                    }
                }
                console.log(`${op} x${countOperation}`);
                currThickness = repeatTransport(currThickness);
            } break;

        }

        return currThickness;
    }



    for (let i = 1; i < arr.length; i++) {
        let currThickness = arr[i];
        console.log(`Processing chunk ${currThickness} microns`);
        let countOperation = 0;
        let op = '';
        while (currThickness >= desiredThickness) {
            currThickness = nesho('Cut', currThickness);
            if (currThickness === desiredThickness) {
                break;
            }
            currThickness = nesho('Lap', currThickness);
            if (currThickness === desiredThickness) {
                break;
            }
            currThickness = nesho('Grind', currThickness);
            if (currThickness === desiredThickness) {
                break;
            }
            currThickness = nesho('Etch', currThickness);
            if (currThickness === desiredThickness) {
                break;
            } else if (xrayDetected) {
                console.log(`X-ray x1`);
                currThickness--;
                break;
            }
        }
        console.log(`Finished crystal ${currThickness} microns`);

    }
}

helpMe([1375, 50000]);
