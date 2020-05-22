var rs= require('readline-sync');
var qtamaca = rs.question ("Digite o numero de macas compradas: ");



if (qtamaca < 12){
    var compra1 = (qtamaca * 0.30);
    console.log ("Voce ira pagar:" + compra1.toFixed(2));
}else{
    var compra2 = (qtamaca * 0.25);
    console.log ("Voce ira pagar:" + compra2.toFixed(2));
}
console.log("Acabou a compra! E volte sempre")