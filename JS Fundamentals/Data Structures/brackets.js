class Stack {
    constructor() {
        this.arr = [];
    }

    push(el) {
        return this.arr.push(el);
    }
    pop(el) {
        return this.arr.pop();
    }
}

const expression = '1 + (2 – (2+3) * 4 / (3+1)) * 5';
let arrExp = expression.split('');
arrExp = arrExp.filter(function(word) {
    if (word !== ' ') {
        return word;
    }
});

const indexHolder = new Stack();
let result = '';

for (let i = 0; i < arrExp.length; i += 1) {
    if (arrExp[i] === '(') {
        indexHolder.push(i);
    } else if (arrExp[i] === ')') {
        result += arrExp.slice(indexHolder.pop(), i + 1).join(' ');
        result += ' | ';
    }
}

console.log(result);
