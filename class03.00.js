var calculatesTheAvarage = require ('./js-pack/calcula-media');
var rs = require("readline-sync");
var arr = [];

while(true){

    var number  = rs.questionInt("Enter the nunmbers to have an average: ");
    var novelty = rs.keyInYN("Want to add another number?\
    Yes(Y) or Not(N)? ");

    arr.push(num);

    if( novelty == false ) {
        break; 
    }

}

console.log("The media is: "+calculatesTheAvarage(arr));

console.log( "Thank you for using our program (:\
    \
            This program is being developed by\
          Euzebio Santana,\
          \
          Contacts:\
          WHATSSAP +5511951732589\
          LINKEDIN: https: //www.linkedin.com/in/robertfredericksmith/\
          GITHUB: https: //github.com/euzebiosantanawork\
          SITE: https: //sites.google.com/view/euzebiosantana/home\
          \
            -Check back often!" );