var rs = require ( "readline-sync" );
var name  = rs.question ( "Type your name: " );
var color  = rs.question ( "Type a color: " );

while ( true ) {

    if ( option == ` a `) {

        speedUp();
        console.log (" The velocity is: ");

    };
    if ( option == ` b `) {

        stop();
        console.log ( " The current speed is: " );
            
    };
    if ( option == ` c ` ) {

        var off = Off();
        if ( off == false ) {

            console.log ( "It is not possible to turn off a moving car " );
        
        } else { break; };

    };
    var option = rs.question (" Change yout option: (A)speedUp, (B)stop, (C)off : ")

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

        