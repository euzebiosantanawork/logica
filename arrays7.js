/*
 7. Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essa
 palavra tem.
 EX : saúde
2 consoantes
 3 vogais

*/

var rs = require("readline-sync");
var word = rs.question("Type a word: ").toUpperCase();
var vowels = "";

for (i = 0; i < word.length; i++) {
    if (word[i] == "A"|| word[i] == "E" || word[i] == "I" || word[i] == "O" || word[i]=="U"){
        var vowels = vowels + word[i]
    } 
}

var vowelsnubers = vowels.length;
var numbersconsonant = word.length - vowelsnubers;

console.log("The number of vowels is: "+vowelsnubers);
console.log("The number of consonant is: "+numbersconsonant);
