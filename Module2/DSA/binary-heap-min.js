const pushToBinaryHeap = (arr, element) => {
    arr.push(element);
    let indexToSwap = Math.floor((arr.length - 1) / 2);
    let currentIndex = arr.length - 1;

    while (arr[currentIndex] < arr[indexToSwap]) {
        [arr[currentIndex], arr[indexToSwap]] = [arr[indexToSwap], arr[currentIndex]];
        currentIndex = indexToSwap;
        indexToSwap = Math.floor((currentIndex) / 2);
    }
};

const binaryHeap = [null];
pushToBinaryHeap(binaryHeap, 12);
pushToBinaryHeap(binaryHeap, 4);
pushToBinaryHeap(binaryHeap, 3);
pushToBinaryHeap(binaryHeap, 2);
pushToBinaryHeap(binaryHeap, 1);
pushToBinaryHeap(binaryHeap, 5);
pushToBinaryHeap(binaryHeap, 2);

console.log(binaryHeap);
