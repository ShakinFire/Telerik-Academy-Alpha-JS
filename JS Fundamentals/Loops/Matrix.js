function solve(number){
    let line = "";
    for(let row = 1; row <= number; row += 1){
        for(let col = row; col < number + row; col += 1){
            line += col + " ";
        }
        console.log(line);
        line = "";
    }
}

solve(5);
