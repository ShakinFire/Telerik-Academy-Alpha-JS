class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = new Node(null);
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    push(element) {
        if (this.head.value === null) {
            this.head = new Node(element);
        } else {
            const newNode = new Node(element);
            newNode.next = this.head;
            this.head = newNode;
        }
        this._length += 1;
        return this;
    }

    pop() {
        if (this._length > 0) {
            const valueToReturn = this.head.value;
            this.head = this.head.next;
            this._length -= 1;
            return valueToReturn;
        }

        return null;
    }
}

const test = new Stack();

test.push(5).push(2).push(52);
const test1 = test.pop();
console.log(test.length);
console.log(test1);
