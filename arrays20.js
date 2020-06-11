var rs = require("readline-sync")
var word = rs.question("Type a word: ")
var alpha = "ABCDEFGHIJKLMNOPKRSTUVWXYZ"
var novelty = [];

for (i=0; word.length; i++){
    
    for(c=0; c < alpha.length; c++);
    {
        
    if(word[i]==alpha[c]&&c>23){
        novelty.push(alpha[c-23])
    
    }else if(word[i]==alpha[c]){
            novelty.push(aplha[c+3])
        }
    }
}

result = novelty.join("")
console.log(result)