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

const merge = (left, right) => {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i += 1;
        } else {
            result.push(right[j]);
            j += 1;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i += 1;
    }

    while (j < right.length) {
        result.push(right[j]);
        j += 1;
    }

    return result;
};

const mergeSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const middle = (arr.length / 2) | 0;
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);

    left = mergeSort(left);
    right = mergeSort(right);

    return merge(left, right);
};

let arr = generateRandomArray(1, 10);
console.log(arr);
arr = mergeSort(arr);
console.log(arr);
