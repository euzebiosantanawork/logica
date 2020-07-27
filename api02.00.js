/*

2. Make an algorithm that prints a radom phrase from 
Breaking Band also its author use the API: https://breaking-bad-quotes.herokuapp.com/v1/quotes

*/

let axios = require ( ` axios ` ) ;

axios . get ( ` https://breaking-bad-quotes.herokuapp.com/v1/quotes ` ) 

.then (

        printPhrase = ( response ) => {

            console . log ( ` The phrase ${ response . data[0] . quote } ` ) ;
            console . log ( ` Was written by ${ respoonse . data [0] . author } ` ) ;
            

        }

)