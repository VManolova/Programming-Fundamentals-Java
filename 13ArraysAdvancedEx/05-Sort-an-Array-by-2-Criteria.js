function sort2criteria(arr){
    let res = arr.sort((a,b)=>a.length-b.length||a.localeCompare(b));
    res.forEach(el=>console.log(el));
}

sort2criteria(['alpha',
'beta',
'gamma']
)

// Jack
// Isacc
// George
// Theodor
// Harrison