const fact = (number) => {
    if (number === 0 || number === 1) {
        return 1;
    }

    const facN = number * fact(number - 1);
    return facN;
};

console.log(fact(5));
