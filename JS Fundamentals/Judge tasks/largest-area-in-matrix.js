const rowCol = gets().split(' ').map(Number);
const rows = rowCol[0];
const cols = rowCol[1];
const matrix = [];

for (let i = 0; i < rows; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}

const largestAreaInMatrix = (arr) => {
    const dfs = (source, direction, row, col, numberToCheck) => {
        if (iAmDumb > 0) {
            const nextRow = row + rDir[direction];
            const nextCol = col + cDir[direction];
            if (nextRow < 0 || nextRow >= rows ||
                nextCol < 0 || nextCol >= cols ||
                source[nextRow][nextCol] === 'V' || source[nextRow][nextCol] !== numberToCheck) {
                return;
            }

            row += rDir[direction];
            col += cDir[direction];
            source[row][col] = 'V';
            sum += 1;
        }
        iAmDumb += 1;
        dfs(source, 0, row, col, numberToCheck);
        dfs(source, 1, row, col, numberToCheck);
        dfs(source, 2, row, col, numberToCheck);
        dfs(source, 3, row, col, numberToCheck);
    };
        
    const cDir = [0, +1, 0, -1];
    const rDir = [-1, 0, +1, 0];
    const dir = 0;
    const end = 0;
    let sum = 1;
    let maxSum = 0;
    let number;
    let iAmDumb = 0;

    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j +=1) {
            if (arr[i][j] === 'V') {
                continue;
            } else {
                number = arr[i][j];
                arr[i][j] = 'V';
                dfs(arr, dir, i, j, number);
                if (sum > maxSum) {
                    maxSum = sum;
                }
                sum = 1;
                iAmDumb = 0;
            }
        }
    }
    return maxSum;
};

console.log(largestAreaInMatrix(matrix));
