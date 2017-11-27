//  |     |
//  v ->  v
// [1  6  7]
// [2  5  8]
// [3  4  9]
//  -> ^
//     |
let matrix = [];
let n = 5;

for(let i = 0; i < n; i += 1){
    let holder = Array.from({length: n}).fill(undefined);
    matrix.push(holder);
}

let col = 0;
let row = 0;
let dir = 0;

let rowDir = [+1, 0, -1, 0];
let colDir = [0, +1, 0, +1];

for(let i = 1; i <= n * n; i += 1){
    matrix[row][col] = i;

    let nextRow = row + rowDir[dir];
    let nextCol = col + colDir[dir];

    if(nextRow < 0 || nextRow >= n ||
       nextCol < 0 || nextCol >= n ||
       dir === 1 || dir === 3){
        dir += 1;
        dir %= 4;
    }

    col += colDir[dir];
    row += rowDir[dir];
}

for(let cell of matrix){
    console.log(cell);
}
