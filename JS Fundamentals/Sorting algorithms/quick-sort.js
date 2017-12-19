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

const getPivotIndex = (arr) => (arr.length / 2) | 0;

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }

    const pivotIndex = getPivotIndex(arr);
    const pivot = arr[pivotIndex];
    let left = [];
    let right = [];

    for (let i = 0; i < pivotIndex; i += 1) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = pivotIndex + 1; i < arr.length; i += 1) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return [...left, pivot, ...right];
};

const arr = generateRandomArray(1, 10);
console.log(arr);
const result = quickSort(arr);
console.log(result);
