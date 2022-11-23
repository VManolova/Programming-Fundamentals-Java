function passwordValidation(myPassword) {

    function isLetterOrDig(ch) {
        if (ch >= 'A' && ch <= 'Z' || ch >= 'a' && ch <= 'z' || ch >= '0' && ch <= '9') {
            return true;
        } else {
            return false;
        }
    }

    function isDigit(ch) {
        if (ch >= '0' && ch <= '9') {
            return true;
        } else {
            return false;
        }
    }


    let isValid = true;

    if (myPassword.length < 6 || myPassword > 10) {
        console.log(`Password must be between 6 and 10 characters`);
        isValid = false;
    }


    let countDig = 0;
    let foundNonLettOrDig = false;
    for (ch of myPassword) {
        if (isDigit(ch)) {
            countDig++;
        }
        if (!isLetterOrDig(ch)) {
            foundNonLettOrDig = true;
            break;
        }
    }

    if (foundNonLettOrDig) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }

    if (countDig < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }

    if (isValid) {
        console.log(`Password is valid`);
    }

}

passwordValidation('logIn');

// "Password must be between 6 and 10 characters"
// "Password must consist only of letters and digits"
// "Password must have at least 2 digits"