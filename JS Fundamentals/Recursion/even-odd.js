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
