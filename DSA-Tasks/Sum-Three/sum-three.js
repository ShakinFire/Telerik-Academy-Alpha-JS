/* eslint-disable */
const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '3 3',
    '4',
    'UR 22',
    'DL 2',
    'DR 8',
    'UL 75'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ------------------------------------------------------------------

const [rows, cols] = gets().split(' ').map(Number);
const changeDirectionCount = +gets();
const matrix = Array.from({ length: rows }, () => []);
const cDir = [+1, +1, -1, -1];
const rDir = [-1, +1, +1, -1];
let rowStart = 0;
let numberToPush = 0;
let totalSum = 0;
let currentCol = 0;
let currentRow = rows - 1;

const sumMove = (rowDir, colDir, moves) => {
    let nextRow = null;
    let nextCol = null;

    for (let i = 0; i < moves; i += 1) {
        nextRow = currentRow + rowDir;
        nextCol = currentCol + colDir;

        if (nextRow < 0 || nextRow >= rows ||
            nextCol < 0 || nextCol >= cols) {
            break;
        } else {
            currentRow = nextRow;
            currentCol = nextCol;
            if (matrix[currentRow][currentCol] !== 'X') {
                totalSum += matrix[currentRow][currentCol];
                matrix[currentRow][currentCol] = 'X';
            }
        }
    }
};

for (let i = rows - 1; i >= 0; i -= 1) {
    for (let j = 0; j < cols; j += 1) {
        matrix[i].push(numberToPush);
        numberToPush += 3;
    }

    rowStart += 3;
    numberToPush = rowStart;
}

for (let i = 0; i < changeDirectionCount; i += 1) {
    const [direction, moves] = gets().split(' ');

    if (direction === 'UR' || direction === 'RU') {
        sumMove(rDir[0], cDir[0], moves - 1);
    } else if (direction === 'DR' || direction === 'RD') {
        sumMove(rDir[1], cDir[1], moves - 1);
    } else if (direction === 'DL' || direction === 'LD') {
        sumMove(rDir[2], cDir[2], moves - 1);
    } else if (direction === 'UL' || direction === 'LU') {
        sumMove(rDir[3], cDir[3], moves - 1);
    }
}

print(totalSum);
