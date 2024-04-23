import CryptoJS from "crypto-js"
const secretKey = "iwrupvqb"

let number = 1;
let hash = CryptoJS.MD5(`${secretKey}${number}`).toString()

while(!hash.startsWith('000000')) {
    number += 1
    hash = CryptoJS.MD5(`${secretKey}${number}`).toString()
}

console.log(hash)
console.log(number)