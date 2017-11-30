const range = (numberA, numberB) => {
    if (numberB - numberA === 2) {
        return [numberB - 1];
    }
    const arr = range(numberA, numberB - 1);
    arr.push(numberB - 1);
    return arr;
};

console.log(range(2, 9));
