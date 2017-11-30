const generatePermutation = (arr) => {
    const createPermutation = (index, currentPerm, visited, source, permutation) => {
        if (index === source.length) {
            permutation.push([...currentPerm]);
            return;
        }
        
        for (const value of source) {
            if (visited[value] === true) {
                continue;
            }

            currentPerm[index] = value;
            visited[value] = true;

            createPermutation(index + 1, currentPerm, visited, source, permutation);
            visited[value] = false;
        }
    };

    const permutation = [];

    createPermutation(0, [], {}, arr, permutation);
    return permutation;
};


generatePermutation([1, 2, 3, 4]).forEach(function(permutation) {
    return console.log(permutation);
});
