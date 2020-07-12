var Car = require('./js-pak/car.js');
var rs = require('readline-sync');

function createCar() {

var cars = new Car();

    cars.model = rs.question( 'Who is car brand: ' );
    cars.name = rs.question( "Chance your car model: " );
    cars.color = rs.question( "Chance a car color: " );

    return cars 

};

var olderCar = new Car ( "Fiat", "Uno" , "Branco" );
var newCar = createCar();

if (
    
    olderCar.name == newCar.name &&
    olderCar.model == newCar.model &&
    olderCar.color == newCar.color 
    
   ) {  console.log ( " Is a same cars " ) } else { console.log ( " Is a different cars " ) }

console.log ( olderCar );
console.log( newCar );

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

            