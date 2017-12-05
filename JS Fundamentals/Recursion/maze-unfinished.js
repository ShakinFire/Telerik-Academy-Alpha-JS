const matrix = [
    ['X', 'X', 'X', '', 'X'],
    ['X', '', 'X', 'X', ''],
    ['', '', 'X', '', 'X'],
    ['X', '', 'S', '', 'X'],
    ['X', '', 'X', 'X', 'X'],
];

const maze = (arr, startRow, startCol) => {
    const escapeMaze = (matrixSource, currentRow, currentCol, holdResult, path, dir) => {
        // Going forward
        if (currentRow <= 0 || currentRow >= matrix.length - 1 ||
            currentCol <= 0 || currentCol >= matrix[0].length - 1) {
                path.push([...holdResult]);
                return;
            }
        const dirHolder = dir;
        while (true) {
            const nextRow = currentRow + rDir[dir];
            const nextCol = currentCol + cDir[dir];

            if (matrix[nextRow][nextCol] === '') {
                currentRow += rDir[dir];
                currentCol += cDir[dir];
                holdResult.push(currentRow + ', ' + currentCol);
                matrix[currentRow][currentCol] = 'V';
                break;
            } else {
                dir += 1;
                dir %= 4;
                if (dir === dirHolder) {
                    return;
                }
            }
        }
        escapeMaze(matrixSource, currentRow, currentCol, holdResult, path, dir);
        // Going backwards
        const holdDir = dir;
        let isStart = false;
        while (true) {
            const nextRow = currentRow + rDir[dir];
            const nextCol = currentCol + cDir[dir];
            if (nextRow < 0 || nextRow >= matrix.length ||
               nextCol < 0 || nextCol >= matrix[0].length ||
               matrix[nextRow][nextCol] !== '') {
                dir += 1;
                dir %= 4;
                if (dir === holdDir) {
                    matrix[currentRow][currentCol] = 'X';
                    holdResult.pop();
                    break;
                }
            } else {
                matrix[currentRow][currentCol] = 'X';
                currentRow += rDir[dir];
                currentCol += cDir[dir];
                if (currentRow === startRow && currentCol === startCol) {
                    holdResult = [];
                } else {
                    holdResult.push(currentRow + ', ' + currentCol);
                }
                escapeMaze(matrixSource, currentRow, currentCol, holdResult, path, dir);
            }
        }
    };
    const rDir = [-1, 0, +1, 0];
    const cDir = [0, +1, 0, -1];
    let direction = 0;
    const result = [];
    escapeMaze(arr, startRow, startCol, [], result, direction);
    return result;
};

console.log(maze(matrix, 3, 2));
