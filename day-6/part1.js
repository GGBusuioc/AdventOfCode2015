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


const fillArray = (dx_from, dx_to, dy_from, dy_to, newVal) => {
    for ( let i = dx_from; i <= dx_to; i++ ) {
        for ( let j = dy_from; j <= dy_to; j++ ) {
            my2DArray[i][j] = newVal(my2DArray[i][j])
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
            [dx_from, dy_from] = values[1].split(',').map(Number);
            [dx_to, dy_to] = values[3].split(',').map(Number);
        }

        if ( values.length === 5 ) {
            command = values[0] + values[1];
            [dx_from, dy_from] = values[2].split(',').map(Number);
            [dx_to, dy_to] = values[4].split(',').map(Number);
        }

        if ( values[0] === 'turnon' ) {
            fillArray(dx_from, dx_to, dy_from, dy_to, (x) => 1);
        }

        if ( values[0] === 'turnoff' ) {
            fillArray(dx_from, dx_to, dy_from, dy_to, (x) => 0);
        }

        if ( values[0] === 'toggle' ) {
            fillArray(dx_from, dx_to, dy_from, dy_to, (x) => 1-x);
        }

        //console.log(`${command} ${dx_from} ${dx_to} ${dy_from} ${dy_to}`)
})

const lightsOnCount = my2DArray.reduce((accumulater, currentValue) => currentValue.filter(c => c === 1).length + accumulater, 0)

//console.log(typeof(dx_from))
console.log(lightsOnCount)
