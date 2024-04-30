import fs from "fs"

fs.readFileSync("./data.txt", "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
    
        console.log(line)
})