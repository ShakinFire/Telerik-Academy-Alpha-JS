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
    '11',
    '2 7 2',
    '1 7 6',
    '5 1 8',
    '2 8 6',
    '8 6 9',
    '10 5 5',
    '9 1 9',
    '0 10 15',
    '3 1 21',
    '6 4 3'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ===============================================

class Graph {
    constructor(verteces) {
        this.matrix = [];

        for (let i = 0; i < verteces; i += 1) {
            this.matrix[i] = [];
        }
    }

    addEdge(a, b, weight) {
        this.matrix[a].push({ value: b, distance: weight });
        this.matrix[b].push({ value: a, distance: weight });
    }

    getResult() {
        let maxWeight = Number.MIN_SAFE_INTEGER;
        let currentWeight = 0;
        let nextNode;
        const used = new Set();

        const dfs = (vertex) => {
            used.add(vertex);
            this.matrix[vertex].forEach((node) => {
                if (used.has(node.value)) {
                    return;
                }
                currentWeight += node.distance;
                if (currentWeight > maxWeight) {
                    maxWeight = currentWeight;
                    nextNode = node.value;
                }
                dfs(node.value);
                currentWeight -= node.distance;
            });
        };

        dfs(0);
        currentWeight = 0;
        used.clear();
        dfs(nextNode);

        return maxWeight;
    }
}

const size = +gets();
const graph = new Graph(size);

for (let i = 0; i < size - 1; i += 1) {
    const arr = gets().split(' ').map(Number);
    graph.addEdge(arr[0], arr[1], arr[2]);
}

console.log(graph.getResult());
