class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(val) {
        this.head = new Node(val);
        this.length = 0;
    }

    append(...el) {
        if (typeof this.head.value === 'undefined') {
            let newNode = new Node(el[0]);
            this.head = newNode;
            for (let i = 1; i < el.length; i += 1) {
                newNode.next = new Node(el[i]);
                newNode = newNode.next;
            }
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            for (let i = 0; i < el.length; i += 1) {
                current.next = new Node(el[i]);
                current = current.next;
            }
        }
        this.length += el.length;
    }

    // prepend(el) {
    //     this.length += 1;
    //     if (typeof this.head.value === 'undefined') {
    //         this.head = new Node(el);
    //     } else {}
    // }
}

const list = new LinkedList();
list.append(10);
console.log(list);
