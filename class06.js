/*

     MAke aprogram that creates a car aking for
name and color, after thst the user will be
requested 3 options The. Speed up:

    A) Speed Up

I. The algorithm should call the Accelare function of the
Car module.
II.After that print the current speed.

    B) Brake

I. The algorithm must call the Car modue's Brake function.
II. After thar print the current speed.

    C) Disconnect

I. If the user cooses to turn off the algorith mus tcall the function
Disconnect from the Car module.
II. If the functin answers true, the program.
III.. If the function answer false, the program says that it is not
possible to shut down a moving car.
 If the user chooses a valid option, the program after priting the value 
of the sppeed must again reapeat the choice of the 3 options for the user.
 For this the module Car(car.js that created in activity 5) in the constructor
 add a property on the object called speed and start its value
 with ).

    D) Speed up

I. Every life that this function is performed must.
incrase the value of speed prorpert at 10 .
II. The function canoot aloow a speed to exced 60.
and Stop

    F) Disconnect

I.This function must return a boolean.
II. Off only returns true when the speed is equal to.
III. Off returns false when speed exceeds 0


*/

var rs = require( 'readline-sync' );
var car = {};
var d = false;
var speedNot = " Speed not allowed ";

car.name = rs.question( "Type a nome car: " );
car.color = rs.question( "Type a color car: " );
car.velocity = 0

while ( d == false ) {

    fucntion speedUp(speedNot){
 
        car.velocity = car.velocity + 10;

            if ( car.velocity > 60 ) {

                console.log( speedNot );
    
                    while ( car.velocity > 60 ) {

                        car.velocity--;

                    };
            };

            return console.log ( car) ;
        
    };

    function brake(speedNot){

        car.velocity = car.velocity - 5;
        
            if( car.velocity < 0 ) {

                console.log( speedNot );

                    while ( car.velocity < 0){
                        car.velocity ++; 
                    };

            return console.log ( car );

    };

    function off (d) {

        if ( car.velocity == 0){

            d = true;
            return true;

        } else { 
            
            d = false;
            return false;

        };

    };

    reuquest = rs.question( "Type 1 for speed up, and 2 for brake\
    and 3 for off: ");

    if (request  === " 1 " ) {

        speedUp();

    } else if ( request === " 2 " ) {

        brake();

    } else if (  request === "3" ) {

        off();

    } else { console.log ( "Enter a valid command " ) };
};

console.log ( "Thank you for using our program (:\
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