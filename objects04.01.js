var rs = require('readline-sync');
var fs = require("fs");

var json = fs.readFileSync("car.json");

var car = JSON.parse(json);

var option = rs.question("\
Type A to add, S to show, and E to exit: ");

while(option != 'E'){
   
    if(option == 'A'){
        var i = car.model.length
        car.model[i] = rs.question("Type a model: ");
        car.brand[i] = rs.question("Type a brand: ");
        car.color[i] = rs.question("Type a color: ");
    console.log(car);

    var carSerialized = JSON.stringify(car);
    var way = "car.json"
    fs.writeFileSync(way, carSerialized);
    }else if(option == "S") {
        console.log(car);
        var carSerialized = JSON.stringify(car);
        var way = 'car.json'
        fs.writeFileSync(way , carSerialized);
    }else{
        console.log("Please enter a valid option!")
    }

    option = rs.question ("\
    Type A to add, S to show, and E to exit: ");
    
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