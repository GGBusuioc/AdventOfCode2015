import fs from "fs"

// It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.

// It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
// It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

const regex1 = new RegExp('([aeiou].*){3,}');
const regex2 = new RegExp('(.)\\1');
const regex3 = /(ab|cd|pq|xy)/gm

let countNiceStrings = 0

fs.readFileSync("./data.txt", "utf8")
    .split(/\r?\n/)
    .forEach((string) => {
    if (regex1.test(string) && regex2.test(string) && !regex3.test(string)  ) {
        countNiceStrings += 1
        console.log(string)
    }
})
console.log(countNiceStrings)

