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

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let bestIndex = i;
        for (let j = i; j < arr.length; j += 1) {
            if (arr[bestIndex] > arr[j]) {
                bestIndex = j;
            }
        }

        if (bestIndex !== i) {
            [arr[bestIndex], arr[i]] = [arr[i], arr[bestIndex]]; // arr[bestIndex] = arr[i] && arr[i] = arr[bestIndex]
        }
    }
};

const arr = generateRandomArray(1, 10);
console.log(arr);
selectionSort(arr);
console.log(arr);
