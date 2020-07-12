var fasamImc = require(`fasam-imc-calc`);
var rs = require(`readline-sync`);

var weight = rs.questionInt("Type your weight: ");
var height = rs.questionInt("Type your height: ");

var imc = new fasamImc(weight. height);

console.log(imc.calc());

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