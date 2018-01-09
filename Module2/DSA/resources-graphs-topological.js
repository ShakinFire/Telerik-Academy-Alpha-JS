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
    '8',
    'index.html needs main.css',
    'main.css needs sub1.css',
    'index.html needs main.js',
    'main.css needs sub2.css',
    'index.html needs logo.png',
    'main.js needs player.png',
    'main.js needs partial.html',
    'partial.html needs partial.js'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ===============================================
class Graph {
    constructor() {
        this.matrix = {};
        this.count = {};
        this.result = [];
    }

    addEdge(key, value) {
        if (!this.matrix[key]) {
            this.matrix[key] = [value];
        } else {
            this.matrix[key].push(value);
        }

        if (!this.count.hasOwnProperty(key)) {
            this.count[key] = 0;
            if (this.count.hasOwnProperty(value)) {
                this.count[value] += 1;
            } else {
                this.count[value] = 1;
            }
        } else {
            if (this.count.hasOwnProperty(value)) {
                this.count[value] += 1;
            } else {
                this.count[value] = 1;
            }
        }
    }

    findLexGreater(lexArr) {
        for (const key in this.count) {
            if (this.count[key] === 0) {
                lexArr.push(key);
                delete this.count[key];
            }
        }

        if (lexArr.length === 0) {
            return;
        }

        lexArr.sort();
        lexArr.reverse();
        const holdMax = lexArr.pop();

        if (this.matrix[holdMax]) {
            for (let i = 0; i < this.matrix[holdMax].length; i += 1) {
                this.count[this.matrix[holdMax][i]] -= 1;
            }
        }
        this.findLexGreater(lexArr);
        this.result.push(holdMax);
    }

    finalResult() {
        this.result.reverse();
        console.log(this.result.join(' '));
    }
}

const size = +gets();
const graph = new Graph();
const f = [];

for (let i = 0; i < size; i += 1) {
    const arr = gets().split(' needs ');
    graph.addEdge(arr[0], arr[1]);
}

graph.findLexGreater(f);
graph.finalResult();
