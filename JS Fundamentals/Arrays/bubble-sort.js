Math.randomInt = (min, max) => Math.trunc(Math.random() * (max - min)) + min;
const generateRandomArray = (min, max) => {
    const result = [];
    for (let i = min; i < max; i += 1) {
        result.push(i);
    }

    for (let i = 0; i < result.length - 1; i += 1) {
        const randomIndex = Math.randomInt(i + 1, result.length);
        [result[randomIndex], result[i]] = [result[i], result[randomIndex]];
    }

    return result;
};

const bubbleSort = (arr) => {
    let isSwap = false;
    while (!isSwap) {
        isSwap = true;
        for (let i = 0; i < arr.length - 1; i += 1) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                isSwap = false;
            }
        }
    }
};

const arr = generateRandomArray(1, 21);
console.log(arr);
bubbleSort(arr);
console.log(arr);
