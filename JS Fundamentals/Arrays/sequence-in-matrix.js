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
    '6 6',
    '11 11 11 11 11 3',
    '26 92 11 72 3 14',
    '26 63 92 3 85 95',
    '34 12 3 92 11 95',
    '26 3 78 71 12 11',
    '3 34 16 63 39 92'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ---------------------------------------------------

const rowCol = gets().split(' ').map(Number);
const rows = rowCol[0];
const cols = rowCol[1];
const matrix = [];
let maxElements = 1;

for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split(' ').map(Number);
}

const moveRight = (source, row, col) => {
    let currentElement = source[row][col];
    let counter = 1;
    for (let j = 1; j < cols; j += 1) {
        if (source[row][j] === currentElement) {
            counter += 1;
            if (counter > maxElements) {
                maxElements = counter;
            }
        } else {
            currentElement = source[row][j];
            counter = 1;
        }
    }
};

const moveDown = (source, row, col) => {
    let currentElement = source[row][col];
    let counter = 1;
    for (let i = 1; i < rows; i += 1) {
        if (source[i][col] === currentElement) {
            counter += 1;
            if (counter > maxElements) {
                maxElements = counter;
            }
        } else {
            currentElement = source[i][col];
            counter = 1;
        }
    }
};

const moveDownDiagonal = (source, row, col) => {
    let currentElement = source[row][col];
    let counter = 0;
    while (row < rows && col < cols) {
        if (source[row][col] === currentElement) {
            counter += 1;
            if (maxElements < counter) {
                maxElements = counter;
            }
        } else {
            currentElement = source[row][col];
            counter = 1;
        }
        row += 1;
        col += 1;
    }
};

const moveUpDiagonal = (source, row, col) => {
    let currentElement = source[row][col];
    let counter = 0;
    while (row >= 0 && col < cols) {
        if (source[row][col] === currentElement) {
            counter += 1;
            if (maxElements < counter) {
                maxElements = counter;
            }
        } else {
            currentElement = source[row][col];
            counter = 1;
        }
        row -= 1;
        col += 1;
    }
};

for (let i = 0; i < rows; i += 1) {
    moveRight(matrix, i, 0);
    moveUpDiagonal(matrix, i, 0);
}

for (let i = 0; i < cols; i += 1) {
    moveUpDiagonal(matrix, rows - 1, i);
}

for (let j = 0; j < cols; j += 1) {
    moveDown(matrix, 0, j);
    moveDownDiagonal(matrix, 0, j);
}

console.log(maxElements);
