class BinaryHeap {
    constructor() {
        this.heap = [];
    }
    pushToMaxBinaryHeap(element) {
        this.heap.push(element);
        let indexToSwap = Math.ceil((this.heap.length - 1) / 2) - 1;
        let currentIndex = this.heap.length - 1;

        while (this.heap[currentIndex] > this.heap[indexToSwap]) {
            [this.heap[currentIndex], this.heap[indexToSwap]] = [this.heap[indexToSwap], this.heap[currentIndex]];
            currentIndex = indexToSwap;
            indexToSwap = Math.ceil((currentIndex) / 2) - 1;
        }
    }

    pushToMinBinaryHeap(element) {
        this.heap.push(element);
        let indexToSwap = Math.ceil((this.heap.length - 1) / 2) - 1;
        let currentIndex = this.heap.length - 1;

        while (this.heap[currentIndex] < this.heap[indexToSwap]) {
            [this.heap[currentIndex], this.heap[indexToSwap]] = [this.heap[indexToSwap], this.heap[currentIndex]];
            currentIndex = indexToSwap;
            indexToSwap = Math.ceil((currentIndex) / 2) - 1;
        }
    }

    toString() {
        return console.log(this.heap);
    }

    removeMin() {
        const minElement = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentHeapIndex = 0;
        let i = 1;
        let j = 2;
        while (this.heap[currentHeapIndex] > this.heap[i] || this.heap[currentHeapIndex] > this.heap[j]) {
            if (this.heap[i] < this.heap[j] || typeof(this.heap[j]) === 'undefined') { // i
                [this.heap[currentHeapIndex], this.heap[i]] = [this.heap[i], this.heap[currentHeapIndex]];
                currentHeapIndex = i;
                j = (i * 2) + 2;
                i = (i * 2) + 1;
            } else { // j
                [this.heap[currentHeapIndex], this.heap[j]] = [this.heap[j], this.heap[currentHeapIndex]];
                currentHeapIndex = j;
                i = (j * 2) + 1;
                j = (j * 2) + 2;
            }
        }
        return minElement;
    }

    removeMax() {
        const maxElement = this.heap[0];
        this.heap[0] = this.heap.pop();
        let currentHeapIndex = 0;
        let i = 1;
        let j = 2;
        while (this.heap[currentHeapIndex] < this.heap[i] || this.heap[currentHeapIndex] < this.heap[j]) {
            if (this.heap[i] > this.heap[j] || typeof(this.heap[j]) === 'undefined') { // i
                [this.heap[currentHeapIndex], this.heap[i]] = [this.heap[i], this.heap[currentHeapIndex]];
                currentHeapIndex = i;
                j = (i * 2) + 2;
                i = (i * 2) + 1;
            } else { // j
                [this.heap[currentHeapIndex], this.heap[j]] = [this.heap[j], this.heap[currentHeapIndex]];
                currentHeapIndex = j;
                i = (j * 2) + 1;
                j = (j * 2) + 2;
            }
        }
        return maxElement;
    }
}

const maxHeap = new BinaryHeap();

maxHeap.pushToMaxBinaryHeap(10);
maxHeap.pushToMaxBinaryHeap(3);
maxHeap.pushToMaxBinaryHeap(5);
maxHeap.pushToMaxBinaryHeap(2);
maxHeap.pushToMaxBinaryHeap(1);
maxHeap.pushToMaxBinaryHeap(7);
maxHeap.pushToMaxBinaryHeap(4);

const maxEl = maxHeap.removeMax();
maxHeap.toString();
console.log(maxEl);
