var rs = require("readline-sync");
var question = rs.question("Type 1 to encrypt and 2 to descrypt: ")
var text = rs.question("type a word:"). split("")
var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","u","p","q","r","s","t","u","v","w","x","y","z"]
var encryptAlpha = ["D", "E", "F", "G", "H", "I", "J", "K", "l", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C","d","e","f","g","h","i","j","k","l","m","n","o","u","p","q","r","s","t","u","v","w","x","y","z","a","b","c"]
var textEncrypt = ""
var textDescrypt = ""

if(question == 1 ){
  for(var n = 0; n < text.length ; n++){
      for (var i = 0; i <alpha.length; i++){
           if(text[n] == alpha[i]){
               textEncrypt = textEncrypt+encryptAlpha[i];
           };
      };
  };
}else if (question == 2){
    for(var n = 0; n < text.length; n++){
        for(var i = 0; i < alpha.length; i++){
            if(text[n] == encryptAlpha[i]){
                textDescrypt = textDescrypt +alpha[i]
            };
        };
    };
};

console.log(textEncrypt);
console.log(textDescrypt);



