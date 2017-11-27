
let matrix = [];
let n = 3;

for(let i = 0; i < n; i += 1){
    let holder = Array.from({length: n}).fill(undefined);
    matrix.push(holder);
}

let col = 0;
let row = 0;
let dir = 0;

let rowDir = [0, +1, 0, -1];
let colDir = [+1, 0, -1, 0];

for(let i = 1; i <= n * n; i += 1){
    matrix[row][col] = i;

    let nextRow = row + rowDir[dir];
    let nextCol = col + colDir[dir];

    if(nextRow < 0 || nextRow >= n ||
       nextCol < 0 || nextCol >= n ||
       matrix[nextRow][nextCol] !== undefined){
        dir += 1;
        dir %= 4;
    }

    row += rowDir[dir];
    col += colDir[dir];
}

for(let cell of matrix){
    console.log(cell);
}