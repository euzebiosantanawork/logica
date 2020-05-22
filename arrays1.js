var rs = require ("readline-sync")
var product = []
var total = 0

while (true){
    var answer = rs.question("Type K to continue, and E to exit: ")
    if(answer == "K"){
        var price = rs.question ("Enter the product value: ")
        total = total + price
        product.push (price)
    }else{
        console.log ("Thank you!");
        break;
    }
}

for (var i = 0; i < product.length; i++) {
    var cont = i + 1
    console.log (`Product ${cont} = ${product[i]}`)
} 
console.log(`total purchase ${total}`reais)
var payment = rs.questionFloat (`Total de compra ${total} reias`)

