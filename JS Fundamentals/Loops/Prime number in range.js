let n = 2;
let m = 49;
const number = 13;
let isPrime = true;

for(number = n; number <= m; number += 1){
    isPrime = true;
    for(let divider = 2; divider <= Math.sqrt(number); divider += 1){
        if(number % divider === 0){
            isPrime = false;
        }
    }

    if(isPrime){
        console.log(number + " is prime -> " + isPrime);
    }
}
