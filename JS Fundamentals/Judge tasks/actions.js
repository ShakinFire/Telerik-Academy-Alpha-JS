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
    '8 3',
    '0 7',
    '0 4',
    '7 4'
]

const gets = this.gets || getGets(test);
const print = this.print || console.log;
/* eslint-enable */
// ===============================================

class Graph {
    constructor(value) {
        this.matrix = [];
        this.count = {};

        for (let i = 0; i < value; i += 1) {
            this.matrix[i] = [];
            this.count[i] = 0;
        }
    }

    addEdge(from, to) {
        this.matrix[from].push(to);
        this.count[to] += 1;
    }

    findResult() {
        const arr = [];
        const resultArr = [];
        const result = (sortedArr) => {
            for (const key in this.count) {
                if (this.count[key] === 0) {
                    sortedArr.push(+key);
                    delete this.count[key];
                }
            }

            if (sortedArr.length === 0) {
                return;
            }

            sortedArr.sort((a, b) => {
                return b - a;
            });

            const minElement = sortedArr.pop();
            if (this.matrix[minElement].length !== 0) {
                for (let i = 0; i < this.matrix[minElement].length; i += 1) {
                    this.count[this.matrix[minElement][i]] -= 1;
                }
            }
            this.matrix[minElement] = [];

            result(sortedArr);
            resultArr.push(minElement);
        };
        result(arr);
        return resultArr.reverse();
    }
}

const nodeEdges = gets().split(' ').map(Number);
const nodes = nodeEdges[0];
const edges = nodeEdges[1];

const graph = new Graph(nodes);

for (let i = 0; i < edges; i += 1) {
    const arr = gets().split(' ').map(Number);
    graph.addEdge(arr[0], arr[1]);
}

graph.findResult().forEach((value) => {
    console.log(value);
});
