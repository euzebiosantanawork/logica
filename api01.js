/*

Ask the user to enter yes or no . After that use the API https://yesno.wft/api This api 
brings a radom data yes or no. At the end print whether the user got it right or not.

*/

const rs = require ( " readline-sync " ) ;
const axios = require ( ` axios ` ) ;


axios . get ( ` https://yesno.wtf/api ` ) ;
.then(

    response => {

        var resp = rs.keyInYN ( `Guess you kick yes or no? ` ) ;
        resp = true ? resp = " yes " : resp = " no " ;

        if ( resp == response . data . answer ) {

            console.log ( ` You are right! ` ) ;

        } else { console. log ( ` You missed! ` ) }

    }

)

.catch( erro => console.log ( erro ) ) ;

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