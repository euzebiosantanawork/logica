var rs = require('readline-sync');
var car1 = {};
var car2 = {};

class Car{
    constructor(name, model, color){
        this.name = name
        this.model = model 
        this.color = color
    }

}

var car1 = new Car (rs.question("Type a name: "), rs.question ("Type a model: "), rs.question("Type a color: "));
var car2 = new Car (rs.question("Type a name: "), rs.question ("Type a model: "), rs.question('Type a color: '));

if(car1.name == car2.name && car1.model == car2.model){
    console.log("Similar cars")
} else {
    console.log("Diferents cars")
}

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