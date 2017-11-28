const text = "Hello, hello, i am good or hello i am ok yeah hello hello hello!";

let words = text.split(/[ !,]/g).filter(function(word){
    return !!word;
});

let wordOccuarances = {};

for(let word of words){
    let wordToLower = word.toLowerCase();

    if(wordOccuarances[wordToLower] === undefined){
        wordOccuarances[wordToLower] = 1;
    } else {
        wordOccuarances[wordToLower] += 1;
    }
}

let max = 0;
let maxWord = "";

for(const word in wordOccuarances){
    if(wordOccuarances[word] > max){
        max = wordOccuarances[word];
        maxWord = word;
    }
}

console.log(maxWord + ": " + max);
