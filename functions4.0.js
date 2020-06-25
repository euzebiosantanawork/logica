var rs = require("readline-sync");

functions table(n){
    for(var i = 1; i <= number; i++){
        var calculatesTable = i * number
        console.log(`${number} x ${i} = ${calculatesTable}`)
    }
}

var number = 5;
table(number)

number = rs.questionInt("Type a number for calculates: ");

table(number)