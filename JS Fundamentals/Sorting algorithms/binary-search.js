const binarySearch = (arr, key, start, end) => {
    if (start > end) {
        return -1;
    }

    const middleIndex = ((start + end) / 2) | 0;

    if (arr[middleIndex] > key) {
        return binarySearch(arr, key, start, middleIndex - 1);
    } else if (arr[middleIndex] < key) {
        return binarySearch(arr, key, middleIndex + 1, end);
    }

    return middleIndex;
};

const arr = [1, 2, 5, 10, 20, 30];
console.log(binarySearch(arr, 2, 0, arr.length - 1));
