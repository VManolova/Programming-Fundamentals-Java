function matched(str1, ch, str2) {
    let res = str1.replace('_', ch);
    let ress = res === str2 ? "Matched" : "Not Matched";
    console.log(ress);
}

matched('Str_ng', 'I', 
'Strong' )