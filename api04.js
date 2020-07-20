const axios = require ( ` axios ` ) ;
const rs = require ( ` readline - sync ` ) ;

var cep = rs.question ( ` Enter your zip code without periods and hyphens: ` ) ;
axios . get ( ` https://api.postmon.com.br/v1/cep/${ cep } ` ) ;

.then(

    response => {

        const [

            bairro,
            cidade,
            lougradouro,
            estado

        ] = response . data

    console . log ( ` State: ${ estado } // City: ${ cidade } // Neighborhood: ${ bairro } //Street: ${ lougradouro } ` ) ;
    
    }

)

. cath( 

    erro => {

        console . log ( ` An error occurred, check that the number you entered is correct ` ) ;

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