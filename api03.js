const axios = require ( ` axios ` ) ;
const rs = require ( ` readline-sync ` ) ;

var nEpisodio = rs.questionInt ( ` Enter a number of Braking Bad episodes to see information: ` ) ;

axios . get ( ` https://www.breakingbadapi.com/api/e[isodes/${nEpisodio} ` )
.then(

    response => {

        const{

            title,
            season,
            air_date,
            characteres,
            episode

        } = response . data [0]

        console .log ( ` Season: ${ season } ; Episode: ${ episode }; Title: ${ title } ` ) ;
        console . log ( ` Cast: ${ characteres } ` ) ;
        console . log ( ` Release data of: ${ air_date } ` )

    }

)

.catch (
    
    erro =>{

        return console.log ( erro.data ) ;

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