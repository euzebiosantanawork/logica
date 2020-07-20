const axios  = require ( ` axios ` ) ;
const rs = require ( ` readile-sync ` ) ;

console . log ( ` Operators: * times , (over) divide , + more , - less , ^ high ` ) ;
var equation = rs . question ( ` Make an equation: ` ) ;

axios . get ( ` https://newton.noe.sh/simplify/${equation} ` )
.then(

    response => {

        console . log ( `Result:` , response . dara . result ) ;

    }

)

console.log( "Thank you for using our program (:\
    \
            This program is being developed by\
          Euzebio Santana,\
          \
          Contacts:\
          WHATSSAP +5511951732589\
          LINKEDIN: https://www.linkedin.com/in/euzebio-santana-323631179/\
          GITHUB: https: //github.com/euzebiosantanawork\
          SITE: https: //sites.google.com/view/euzebiosantana/home\
          \
            -Check back often!" );