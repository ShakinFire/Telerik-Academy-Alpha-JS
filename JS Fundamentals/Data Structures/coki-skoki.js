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
    '6',
    '1 4 2 6 3 4'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// -------------------------------------------------------------------------

const size = +gets();
const arr = gets().split(' ').map(Number);
let maxJumps = 0;

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
        this.result = 0;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = size;
    }

    append(...el) {
        el.forEach((value) => {
            const newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;

                let current = this.tail;
                const holder = current.value;
                while (current.prev && current.prev.value < holder) {
                    current.prev.result += 1;
                    current = current.prev;
                    if (current.result > maxJumps) {
                        maxJumps = current.result;
                    }
                }
                this.tail = newNode;
            }
        });
    }
}

const list = new LinkedList();
list.append(...arr);

let line = '';
for (let i = 0; i < size; i += 1) {
    line += list.head.result + ' ';
    list.head = list.head.next;
}

line = line.trim();
console.log(maxJumps);
console.log(line);
