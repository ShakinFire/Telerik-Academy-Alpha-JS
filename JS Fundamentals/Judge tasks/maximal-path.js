/* eslint-disable */
/* global Set */
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
    '10',
    '(5 <- 11)',
    '(1 <- 8)',
    '(11 <- 3)',
    '(8 <- 7)',
    '(1 <- 5)',
    '(11 <- 2)',
    '(8 <- 6)',
    '(2 <- 15)',
    '(8 <- 4)'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ============================================

class Graph {
    constructor() {
        this.matrix = [];
        this.leaf = null;
    }

    addEdge(a, b) {
        if (typeof this.matrix[a] === 'undefined') {
            this.matrix[a] = [b];
        } else {
            this.matrix[a].push(b);
        }

        if (typeof this.matrix[b] === 'undefined') {
            this.matrix[b] = [a];
            this.leaf = b;
        } else {
            this.matrix[b].push(a);
        }
    }

    getResult() {
        const used = new Set();
        let nextNode = 0;
        let maxSum = 0;
        let currentSum = this.leaf;

        const dfs = (currentNode) => {
            used.add(currentNode);
            this.matrix[currentNode].forEach((value) => {
                if (used.has(value)) {
                    return;
                }
                currentSum += value;

                if (currentSum > maxSum) {
                    maxSum = currentSum;
                    nextNode = value;
                }

                dfs(value);
                currentSum -= value;
            });
        };

        dfs(this.leaf);
        currentSum = nextNode;
        used.clear();
        dfs(nextNode);
        return maxSum;
    }
}

const size = +gets();
const graph = new Graph();

for (let i = 0; i < size - 1; i += 1) {
    const hold = gets();
    let arr = hold.replace(/[()]/g, '');
    arr = arr.split(' <- ');

    graph.addEdge(+arr[0], +arr[1]);
}

console.log(graph.getResult());
