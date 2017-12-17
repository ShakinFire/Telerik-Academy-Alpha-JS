class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.tail = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    enQueue(element) {
        const newNode = new Node(element);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length += 1;
        return this;
    }

    deQueue() {
        if (this.length > 0) {
            this.head = this.head.next;
        } else {
            return null;
        }
        this.length -= 1;
        return this;
    }
}
