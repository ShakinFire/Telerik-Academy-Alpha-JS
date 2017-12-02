const stringReverse = (str) => {
    if (str.length === 1) {
        return str;
    }
    const reversed = stringReverse(str.substr(1)) + str[0];
    return reversed;
};

console.log(stringReverse('Hello how are you doing?'));
