'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    
    // grading students - should be fun.
    let g = grades;
    let result = [];
    
    // get number of students
    // lol ok shift then
    let numStudents = g.shift();
    /**
     * if g.length !== numStudents ?
     */
    // why would i need the number of students if the resulting array can be truncated?
     //? pop? no slice
     
     // so we loop through resulting array after shift ? what if it's not number of grades ?
     g.forEach((r) => {
        console.log(r);
        // find next multiple of 5 of r
        // wait if r < 38 we move on
        // but it needs to be in order it came in.
        // it will lol.
        if (r < 38) {
            result.push[r];
        }
        // multiple of 5 means its 5, 10, 15 etc.
        // so if i get 53, i need to either divide by 5 to se if it is already a multiple
        // of 5, then ad 5 lol
        else if (r % 5 === 0) {
            let nextMult = r + 5;
            if (nextMult - r < 3) {
                result.push[nextMult];
            } else {
                result.push[r];
            }
        }
        // maybe do this before . nah i'm good
        // if it isn't divisible by 5
        else if (r % 5 !== 0) {
            // get remainder and minus it to get the previous possible multiple
            let remainder = r % 5;
            // now with the remainder. wait am i using modulud right?
            // ok good
            let previousMult = r - remainder;
            let nextMult = previousMult + 5;
            if (nextMult - r < 3) {
                result.push[nextMult] 
            } else {
                result.push[r]
            }
        }
     });
     
     // 100% sure there's an algorithm for this but man let's run it.
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

