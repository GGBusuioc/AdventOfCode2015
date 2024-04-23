import fs from "fs"

fs.readFileSync("./data.txt", "utf8").split('').forEach((string) => {
    console.log(string)
})