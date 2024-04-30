import fs from "fs"

let floor = 0;

const input = fs.readFileSync("./data.txt", "utf8").split('')

for ( let index = 0; index < input.length; index++ ) {

    if ( floor === -1 )  { console.log(index); break;} 

    if ( input[index] === '(' ) floor++; 
    if ( input[index] === ')' ) floor--;   
}
