const combinations = (arr) => {
    const getResult = (currentArr, result) => {
        if (currentArr.length < 2) {
            result[+currentArr[0]] += 1;
            return;
        }
        for (let i = 0; i < currentArr.length - 1; i += 1) {
            const a = arr[i];
            const b = arr[i + 1];

            arr[i + 1] = calc(a, b);
            arr.splice(i, 1);
            getResult(currentArr, result);
            arr.splice(i, 0, a);
            arr[i + 1] = b;
        }
    };

    const finalResult = Array.from({ length: 10 }).fill(0);
    getResult(arr, finalResult);
    return finalResult.join(' ');
};

const calc = (a, b) => {
    return (a + b) * (a ^ b) % 10;
};

const numbers = gets().split('').map(Number);
console.log(combinations(numbers));
