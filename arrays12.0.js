var rs = require("readline-sync")
var askForWord = rs.question("Type a word: ");
var word = askForWord
var letterA = word.indexOf("a")
var letterE = word.indexOf("e")
var letterI = word.indexOf("i")
var letterO = word.indexOf("o")
var letterU = word.indexOf("u")

if(letterA == -1 &&
   letterE == -1 &&
   letterI == -1 &&
   letterO == -1 &&
   letterU == -1
   ){
       console.log("This word does not cotain vowels ")
   }else{
       console.log("This word contains vowels")
   }