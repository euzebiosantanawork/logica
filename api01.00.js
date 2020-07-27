let rs = require ( ` readline-sync ` ) ;
let axios = require ( ` axios ` ) ;

let YesOrNo = rs.keyInYN( ` Type Yes or No:  ` ) ;

axios . get ( ' https://yesno.wtf/api ' ) ;

    .then (

        function ( response ) {

            let answerSystem = response . data . answer ;
            let replySystem = false

            if ( answerSystem = "Yes" ){

                replySystem == true ;

            }
            if ( replySystem == YesOrNo ) {

                console . log ( " The user got the answer right " ) ;

            } else if ( replyStstem != YesOrNO ) {

                console . log ( " The user missed the answer " ) ;

            }

        }

    )