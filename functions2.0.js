var rs= require("readline-sync")

function prime(rs){
    var n = rs.question("Type a number: ")
    var divider = 2
    while (divider < n){
        if(n % divider == 2){
            return false
        } 
        divider++
    }
    return true
}

var result = prime (rs)
if(result == true ){
    console.log(" Is a prime number. ")
} else {
    console.log("Not is a prime number. ")
}