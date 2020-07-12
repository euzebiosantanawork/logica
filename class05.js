/* Take the car object from activity 1 and export
it with a modular object. To do this, create a
file called carro.js and add the classse created in
activity 1 in this file. Adapt activity 1 to use
reference by car class module. */

var rs = require("readline-sync");
var car = require(`./carro`);

var car1, car2 = {};

     car1 = new car(

         rs.question("Type a name: "), 
         rs.question("Type a model: "),
         rs.question("Type a color: ")
         
         );
   
    car2 = new car(

        rs.question("Type a name: "),
        rs.question("Type o model: "),
        rs.question("Type a color: ")


    )

if ( car1.name == car2.name && car1.model == car2.model){

    sc = "Same Cars" 
    console.log( " ABOUT YOUR DATA: "+ sc );
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
   
}else{

    dc = "Diferent Cars"
    console.log( "ABOUT YOUR DATA: "+ dc );
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
                -Check back often!"  );

}