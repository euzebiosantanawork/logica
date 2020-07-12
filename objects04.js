/*

Make aprogram that asks the user if they want to add or just 
display, if the user chooces to add, change the inirial car registration
program to tht does not save 1 car objects but a collection of cars 
(using arrays, instead of serialize/deserialize the object will be
    the array that has the cars).
    After registering the cat, the program must again ask the user if
    he wants to display all resgistered cars must be displayed.


*/

var rs = require ("readline-sync");
var list = [];

var question = 0;

while(question <= 1){
    question = rs.questionInt("Type 1 for add, 2 for show in display,\
    and type any key to exit: ");

    if(question == 1){
        var cars = [
            model = rs.question("Type a model: ")
            color = rs.question("Type a color: ")
            brand = rs.question("Type a brand: ")
        ];
        list.push(cars)

    }else if(question == 2){
        console.log(list);
        break;
    }
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