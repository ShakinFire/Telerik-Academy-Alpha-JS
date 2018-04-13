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
    '5',
    '5',
    'Q---Q',
    '-----',
    '-B---',
    '--R--',
    'Q---Q',
    '10',
    'a1 a1',
    'a1 d4',
    'e1 b4',
    'a5 d2',
    'e5 b2',
    'b3 d5',
    'b3 a2',
    'b3 d1',
    'b3 a4',
    'c2 c5'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ------------------------------------------------------------------

const moveStraight = (row, col, endRow, endCol, dir) => {
    while (row >= 0 && row < rows &&
        col >= 0 && col < cols) {
            if (matrix[row][col] !== '-') {
                return false;
            }
            if (row === endRow && col === endCol) {
                return true;
            }
            row += rDirStraight[dir];
            col += cDirStraight[dir];
        }

    return false;
};

const moveDiagonaly = (row, col, endRow, endCol, dir) => {
    while (row >= 0 && row < rows &&
        col >= 0 && col < cols) {
            if (matrix[row][col] !== '-') {
                return false;
            }
            if (row === endRow && col === endCol) {
                return true;
            }
            row += rDirDiagonal[dir];
            col += cDirDiagonal[dir];
        }

    return false;
};

const rows = +gets();
const cols = +gets();
const rDirStraight = [-1, 0, +1, 0];
const cDirStraight = [0, +1, 0, -1];
const rDirDiagonal = [-1, +1, +1, -1];
const cDirDiagonal = [+1, +1, -1, -1];
const matrix = Array.from({ length: rows });

for (let i = 0; i < rows; i += 1) {
    matrix[i] = gets().split('');
}

const totalMoves = +gets();

for (let i = 0; i < totalMoves; i += 1) {
    const [startPosition, endPosition] = gets().split(' ');
    const finishRow = rows - endPosition[1];
    const finishCol = endPosition.charCodeAt(0) - 97;
    const currentRow = rows - startPosition[1];
    const currentCol = startPosition.charCodeAt(0) - 97;
    let direction = null;
    let result = null;

    if (matrix[finishRow][finishCol] !== '-') {
        result = false;
    } else if (matrix[currentRow][currentCol] === '-') {
        result = false;
    } else if (currentRow === finishRow || currentCol === finishCol) {
        if (matrix[currentRow][currentCol] === 'B') {
            result = false;
        } else {
            if (currentCol === finishCol) {
                direction = currentRow - finishRow < 0 ? 2 : 0;
            } else {
                direction = currentCol - finishCol < 0 ? 1 : 3;
            }
            result = moveStraight(
                currentRow + rDirStraight[direction],
                currentCol + cDirStraight[direction],
                finishRow, finishCol, direction
            );
        }
    } else {
        if (matrix[currentRow][currentCol] === 'R') {
            result = false;
        } else {
            if ((currentCol - finishCol) < 0) {
                direction = currentRow - finishRow < 0 ? 1 : 0;
            } else {
                direction = currentRow - finishRow < 0 ? 2 : 3;
            }
            result = moveDiagonaly(
                currentRow + rDirDiagonal[direction],
                currentCol + cDirDiagonal[direction],
                finishRow, finishCol, direction
            );
        }
    }

    if (result) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
