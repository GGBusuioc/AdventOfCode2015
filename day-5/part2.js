import fs from "fs"

// It contains a pair of any two letters that appears at least twice in the string without overlapping, like xyxy (xy) or aabcdefgaa (aa), 
// but not like aaa (aa, but it overlaps).

// It contains at least one letter which repeats with exactly one letter between them, like xyx, abcdefeghi (efe), or even aaa.

const regex1 = /(..).*\1/
const regex2 = /(.).\1/

let countNiceStrings = 0

fs.readFileSync("./data.txt", "utf8")
    .split(/\r?\n/)
    .forEach((string) => {
    if (regex1.test(string) && regex2.test(string) ) {
        countNiceStrings++
    }
})
console.log(countNiceStrings)

