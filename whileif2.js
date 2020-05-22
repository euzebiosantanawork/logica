/*2.(OBRIGATÓRIO)​ Escreva um programa que passe por todos os números de 1 a 50 epara cada um deles imprima na tela se o número é par ou 
ímpar. Caso o númerotambém seja primo, o programa deve dizer que ele é primo. (um número primo é umnúmero que só é divisível por ele mesmo 
    e por 1). Dica: Neste exercício você podeprecisar de ajuda do operador MÓDULO (%). Você também pode precisar criar mais deum loop.EX.: */

    var n1 = 1;
    var n2 = 50;
    
    while (n1 <= n2){
        var ehPrimo = true;
        var divisor = 2;
        while (divisor < n1 ){
            if (n1 % divisor == 0){
             ehPrimo = false;
            }
            divisor ++;

        }
        if(n1 % 2 == 0){
            if(ehPrimo){
                console.log(n1+ " e primoe par");
            }else{
            console.log(n1+ " e par");
            }
        }else{
            if(ehPrimo){
                console.log(n1+ " e primo e impar");
            }
            else{
                    console.log(n1+ " e imar");
            }

        }
        n1++;
    }
    
