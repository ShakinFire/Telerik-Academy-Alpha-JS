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

const countingSort = (arr, min, max) => {
    const counts = Array.from({ length: max - min + 1 }).fill(0);
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        counts[arr[i] -min] += 1;
    }

    for (let i = 0; i < counts.length; i += 1) {
        let j = counts[i];
        while (j > 0) {
            result.push(i + min);
            j -= 1;
        }
    }
    return result;
};

let arr = generateRandomArray(-10, 10);
console.log(arr);
arr = countingSort(arr, -10, 10);
console.log(arr);
