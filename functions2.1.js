var rs = require("readline-sync");
var NumberInt= rs.questionInt("Type a number: ");

function primeNumber(NumberInt){
  var isPrime = true
  for(var i = 2; i < NumberInt; i++){
      if(NumberInt % i == 0){
          isPrime = false 
      }
      return isPrime
  }
}

console.log(primeNumber(NumberInt))