const axios = require( ` axios ` ) ;
const rs = require ( ` readline-sync ` ) ;

rs . question ( ` To print a Breaking Bad phrase hit enter ` ) ;

axios . get ( ` https://breaking-bad-quotes.herokuapp.com/v1/quotes ` ) ;
. then (


    response => {

        phrase = response . data [0] . quote ;
        autor = response . data [0] . author ;
        console.log ( ${ phrase } - ${ autor }  ) ;

    }

)

.catch (

    erro => {

        console.log( erro . data ) ;
        

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