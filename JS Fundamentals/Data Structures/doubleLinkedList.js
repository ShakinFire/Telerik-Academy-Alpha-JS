class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    append(...el) {
        el.forEach((value) => {
            const newNode = new Node(value);
            if (this.head.value === null) {
               this.head = newNode;
               this.tail = newNode;
            } else {
                this.tail.next = newNode;
                newNode.prev = this.tail;
                this.tail = newNode;
            }
        });
        this._length += el.length;
        return this;
    }

    prepend(...el) {
        el = el.reverse();
        el.forEach((value) => {
            const newNode = new Node(value);
            if (this.head.value === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        });
        this._length += el.length;
        return this;
    }

    insert(index, ...el) {
        if (index < 0 || index > this._length) {
            return 'Invalid index to insert at';
        }

        if (index === 0) {
            return this.prepend(el);
        }
        if (index === this._length) {
            return this.append(el);
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i += 1) {
            current = current.next;
        }

        el.forEach((value) => {
            const newNode = new Node(value);
            current.next.prev = newNode;
            newNode.next = current.next;
            newNode.prev = current;
            current.next = newNode;
            current = current.next;
        });

        this._length += el.length;
        return this;
    }

    at(index, changeValue) {
        if (index < 0 || index > this._length) {
            return 'Invalid index to insert at';
        }

        let current = this.head;
        for (let i = 0; i < index; i += 1) {
            current = current.next;
        }

        if (changeValue) {
            current.value = changeValue;
        }

        return current.value;
    }

    removeAt(index) {
        if (index < 0 || index > this._length) {
            return 'Invalid index to insert at';
        }
        this._length -= 1;
        let valueToReturn;
        if (index === 0) {
            valueToReturn = this.head.value;
            this.head = this.head.next;
            this.head.prev = null;
            return valueToReturn;
        }

        if (index === this._length - 1) {
            valueToReturn = this.tail.value;
            this.tail = this.tail.prev;
            this.tail.next = null;
            return valueToReturn;
        }

        let current = this.head;
        for (let i = 0; i < index; i += 1) {
            current = current.next;
        }
        valueToReturn = current.value;
        current.next.prev = current.prev;
        current.prev.next = current.next;
        return valueToReturn;
    }

    toArray() {
        const arrayToReturn = [];
        let current = this.head;
        for (let i = 0; i < this._length - 1; i += 1) {
            arrayToReturn.push(current.value);
            current = current.next;
        }

        return arrayToReturn;
    }

    toString() {
        let line = '';

        let current = this.head;
        for (let i = 0; i < this._length - 1; i += 1) {
            line += current.value + ' -> ';
            current = current.next;
        }
        return line;
    }
}

const list = new DoubleLinkedList();

list.append(1, 2, 3, 4, 5);
list.prepend(99, 89, 79);
list.insert(2, 0, 100, 1000);
list.removeAt(3);

console.log(list.toString());
