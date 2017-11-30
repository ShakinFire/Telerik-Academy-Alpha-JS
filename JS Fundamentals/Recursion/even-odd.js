// Write a JavaScript program to check whether a number in an array is even or not.
// Return an array with boolean elements true for even and false for odd.

let counter = 0;
const isEven = (arr) => {
    counter += 1;
    if (counter === arr.length) {
        return [arr.pop() % 2 === 0];
    }

    const resultArr = isEven(arr);
    resultArr.push(arr.pop() % 2 === 0);
    return resultArr;
};

console.log(isEven([1, 2, 3, 4, 5]));
