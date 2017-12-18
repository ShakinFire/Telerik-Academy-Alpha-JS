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
    '-2',
    '-7',
    '-3',
    '2',
    '-6',
    '7',
    '-6',
    '6',
    '-6',
    '5'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ---------------------------------------------------------------

const ships = {
    'A': [+gets(), +gets()],
    'C': [+gets(), +gets()],
};

const H = +gets();

const catapults = {
    '1': [+gets(), +gets()],
    '2': [+gets(), +gets()],
    '3': [+gets(), +gets()],
};

ships.B = [ships.C[0], ships.A[1]];
ships.D = [ships.A[0], ships.C[1]];

const maxX = Math.max(ships.A[0], ships.B[0]);
const minX = Math.min(ships.A[0], ships.B[0]);
const maxY = Math.max(ships.B[1], ships.C[1]);
const minY = Math.min(ships.B[1], ships.C[1]);
let sum = 0;

for (let i = 1; i <= 3; i += 1) {
    const cx = catapults[i][0];
    const cy = H - (catapults[i][1] - H);
    
    if (cx < maxX && cx > minX && cy < maxY && cy > minY) {
        sum += 100;
    } else if ((cx === maxX && cy < maxY && cy > minY) || (cx === minX && cy < maxY && cy > minY) ||
                (cy === maxY && cx < maxX && cx > minX)|| (cy === minY && cx < maxX && cx > minX)) {
        sum += 50;
    } else if ((cx === maxX && cy === maxY) || (cx === maxX && cy === minY) ||
              (cx === minX && cy === maxY) || (cx === minX && cy === minY)) {
        sum += 25;
    }
}

console.log(sum);
