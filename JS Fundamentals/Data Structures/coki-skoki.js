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
    '1 1 1 1 1'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// -------------------------------------------------------------------------
const size = +gets();
const arr = gets().split(' ').map(Number);
const jumps = Array.from({ length: size }).fill(0);

class Node {
    constructor(val, index) {
        this.value = val;
        this.next = null;
        this.index = index || null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = size;
    }

    push(el, index) {
        const newNode = new Node(el, index);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        const valueToReturn = this.head.value;
        this.head = this.head.next;
        return valueToReturn;
    }

    peak() {
        if (this.head === null) {
            return false;
        }
        return this.head.value;
    }

    peakIndex() {
        return this.head.index;
    }
}

const holdValues = new Stack();
let maxJumps = 0;

for (let i = size - 1; i > -1; i -= 1) {
    if (!holdValues.peak()) {
        jumps[i] = 0;
        holdValues.push(arr[i], i);
    } else {
        if (arr[i] < holdValues.peak()) {
            jumps[i] = 1 + jumps[holdValues.peakIndex()];
            holdValues.push(arr[i], i);
        } else {
            while (true) {
                if (!holdValues.peak()) {
                    jumps[i] = 0;
                    holdValues.push(arr[i], i);
                    break;
                } else if (arr[i] >= holdValues.peak()) {
                    holdValues.pop();
                } else {
                    jumps[i] = 1 + jumps[holdValues.peakIndex()];
                    holdValues.push(arr[i], i);
                    break;
                }
            }
        }
    }

    if (jumps[i] > maxJumps) {
        maxJumps = jumps[i];
    }
}

console.log(maxJumps);
console.log(jumps.join(' '));
