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
    '4',
    '10,20,30,40,50',
    '2 forward 1',
    '2 backwards 1',
    '3 forward 2',
    '3 backwards 2',
    'exit'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ----------------------------------------------------------------

let currentPosition = +gets();
const field = gets().split(',').map(Number);
const len = field.length;
let forwardSum = 0;
let backwardsSum = 0;
let hold;

while ((hold = gets()) !== 'exit') {
    hold = hold.split(' ');
    const move = +hold[0];
    const direction = hold[1];
    const size = +hold[2];

    for (let i = 0; i < move; i += 1) {
        if (direction === 'forward') {
            currentPosition = (currentPosition + size) % len;
            forwardSum += field[currentPosition];
        } else {
            currentPosition = len - currentPosition - 1;
            currentPosition = (currentPosition + size) % len;
            currentPosition = len - currentPosition - 1;
            backwardsSum += field[currentPosition];
        }
    }
}

console.log('Forward: ' + backwardsSum);
console.log('Backwards: ' + forwardSum);
