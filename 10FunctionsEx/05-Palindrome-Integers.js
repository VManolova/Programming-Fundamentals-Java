function palindrome(arr) {
    function isPalindrome(num) {
        let numAsStr = num.toString();
        let revStr = '';
        for (let i = numAsStr.length - 1; i >= 0; i--) {
            revStr += numAsStr[i];
        }

        if (numAsStr === revStr) return true;
        else return false;
    }

    for (num of arr) {
        if (isPalindrome(num)) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

palindrome([123, 323, 421, 121])