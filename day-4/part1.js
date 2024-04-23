import CryptoJS from "crypto-js"
const secretKey = "iwrupvqb"

let number = 1;
let hash = CryptoJS.MD5(`${secretKey}${number}`).toString()

// loop until hash start with 00000
while(!hash.startsWith('00000')) {
    number += 1
    hash = CryptoJS.MD5(`${secretKey}${number}`).toString()
}

console.log(hash)
console.log(number)