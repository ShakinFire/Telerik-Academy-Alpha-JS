class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    get fist() {
        return this.head.value;
    }

    get last() {
        return this.tail.value;
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
            }
        });
        this._length += el.length;
        return this;
    }

    prepend(...el) {
        el.forEach((value) => {
            const newNode = new Node(value);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        });
        this._length += el.length;
        return this;
    }

    insert(index, ...el) {
        if (index < 0 || index > this._length) {
            return 'Invalid index';
        }

        if (index === 0) {
            return this.prepend(el);
        }

        if (index === this._length - 1) {
            return this.append(el);
        }

        let current = this.head;
        for (let i = 0; i < index - 1; i += 1) {
            current = current.next;
        }

        let holdValues = current;
        el.forEach((value) => {
            const newNode = new Node(value);
            holdValues.next.prev = newNode;
            newNode.next = holdValues.next;
            newNode.prev = holdValues;
            holdValues.next = newNode;
            holdValues = holdValues.next;
        });
        this._length += el.length;
        return this;
    }
}
// 0 1 [77 111] 2 3
const list = new DoubleLinkedList();
list.append(1, 2, 3);
list.prepend(0);
list.insert(2, 77, 111);
console.log(list);
