const sum = (arr) => {
    if (arr.length === 1) {
        return arr[0];
    }
    const result = arr.pop() + sum(arr);
    return result;
};

console.log(sum([1, 2, 3, 4, 5, 6]));
