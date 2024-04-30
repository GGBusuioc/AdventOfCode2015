import fs from "fs"

let floor = 0;

fs.readFileSync("./data.txt", "utf8")
    .split('')
    .forEach((char) => {
    
    if ( char === '(' ) floor++;
    if ( char === ')' ) floor--;    
})

console.log(floor)