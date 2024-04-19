import fs from "fs"

let dict = {}

// santa coordinates
let d1x = 0
let d1y = 0

// robo-santa coordinates
let d2x = 0
let d2y = 0

dict[[d1x, d1y]] = 1

const houses = fs.readFileSync("./data.txt", "utf8").split('')

for( let i = 0; i < houses.length; i++) {
     switch (houses[i]) {
        case '^' : d1y++; break
        case 'v' : d1y--; break
        case '>' : d1x++; break
        case '<' : d1x--; break
    }
    dict[[d1x, d1y]] = 1

    switch (houses[i+1]) {
        case '^' : d2y++; break
        case 'v' : d2y--; break
        case '>' : d2x++; break
        case '<' : d2x--; break
    }
    dict[[d2x, d2y]] = 1

    i += 1
}

const numberOfHousesVisited = Object.keys(dict).length

console.log(numberOfHousesVisited)