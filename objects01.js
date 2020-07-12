/*

Create a program that receives 3 user inputs. The color, 
model and brand, create a Car object and assing as user
inputs to this object. At the end, the program
should print as car information. Use object creation to solve
this problem*/

var rs = require("readline-sync");

var car = new Object ();

car.color = rs.question("Type a color: ");
car.model = rs.question("Type a model: ");
car.brand = rs.question("Type a brand: ");

console.log(car);

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