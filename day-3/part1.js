import fs from "fs"

// each time santa moves -> create new key in the dict -> 
// key representing the coordonates -> value is the number of times the cordonates were visited 
// [n, s, w, e] starting at [0, 0, 0, 0] = 1 OR [dx, dy] -> [0, 0] = 1 (1 representing a house being visited)
// number of entries in the dict is the number of houses

let dict = {}

let dx = 0
let dy = 0

dict[[dx, dy]] = 1

fs.readFileSync("./data.txt", "utf8").split('').forEach((character) => {
    switch (character) {
        case '^' : dy++; break
        case 'v' : dy--; break
        case '>' : dx++; break
        case '<' : dx--; break
    }
    
    // mark the house as visited
    dict[[dx, dy]] = 1
})

const numberOfHousesVisited = Object.keys(dict).length
console.log(numberOfHousesVisited)