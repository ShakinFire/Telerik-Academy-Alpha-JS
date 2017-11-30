const sortArr = (arr) => {
    const sortGenerate = (source, resultArr) => {
        if (source.length === 1) {
            resultArr.push(source[0]);
            return resultArr;
        }

        let min = source[0];
        let index = 0;

        for (let i = 1; i < source.length; i += 1) {
            if (min > source[i]) {
                min = source[i];
                index = i;
            }
        }
        resultArr.push(source.splice(index, 1)[0]);
        sortGenerate(source, resultArr);
        return resultArr;
    };
    const resultArr = [];

    sortGenerate(arr, resultArr);
    return resultArr;
};

console.log(sortArr([5, 7, 12, 53, 75, 233, 1, 6, 23, 0]));
