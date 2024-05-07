import fs from "fs"

let command = ''
let dx_from
let dx_to
let dy_from
let dy_to

// const fillArray = (dx_width, dx_height, dy_width, dy_height, val = null) =>
//     // dx line
//     Array.from({ length: dx_width }).map(() =>
//     // dy line
//     Array.from({ length: dx_height }).fill(val)
//     );


const my2DArray = Array.from(Array(1000), () => new Array(1000).fill(0));


const fillArray = (dx_from, dx_to, dy_from, dy_to, val = null) => {
    for ( let i = dx_from; i <= dx_to; i++ ) {
        for ( let j = dy_from; j <= dy_to; j++ ) {
            my2DArray[i][j] = val
        }
    }
}

// initially lights are turned off 


fs.readFileSync("./data.txt", "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
        const values = line.split(' ')
        if ( values.length === 4 ) {
            command = values[0];
            [dx_from, dx_to] = values[1].split(',');
            [dy_from, dy_to] = values[3].split(',')
        }

        if ( values.length === 5 ) {
            command = values[0] + values[1];
            [dx_from, dx_to] = values[2].split(',');
            [dy_from, dy_to] = values[4].split(',');
        }

        fillArray(dx_from, dx_to, dy_from, dy_to, 1);


        //console.log(`${command} ${dx_from} ${dx_to} ${dy_from} ${dy_to}`)
})

console.log(my2DArray)
