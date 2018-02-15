class Graph {
    constructor(money) {
        this.matrix = Array.from({ length: money.length });
        money.forEach((value, i) => {
            this.matrix[i] = { 'to': [], 'cash': value };
        });
    }

    addEdge(a, b) {
        this.matrix[a - 1].to.push(b - 1);
        this.matrix[b - 1].to.push(a - 1);
    }

    getResult() {
        const used = new Set();
        let maxSum = 0;
        let currentSum = this.matrix[0].cash;
        let nextNode;

        const dfs = (currentNode) => {
            used.add(currentNode);
            if (this.matrix[currentNode].to.length === 1 && used.size > 1) {
                if (currentSum > maxSum) {
                    maxSum = currentSum;
                    nextNode = currentNode;
                }

                return;
            }

            this.matrix[currentNode].to.forEach((value) => {
                if (used.has(value)) {
                    return;
                }
                currentSum += this.matrix[value].cash;
                dfs(value);
                currentSum -= this.matrix[value].cash;
            });
        };

        dfs(0);
        used.clear();
        currentSum = this.matrix[nextNode].cash;
        dfs(nextNode);

        return maxSum;
    }
}

const size = +gets();
const money = gets().split(' ').map(Number);
const graph = new Graph(money);

for (let i = 0; i < size - 1; i += 1) {
    const [a, b] = gets().split(' ').map(Number);
    graph.addEdge(a, b);
}

console.log(graph.getResult());
