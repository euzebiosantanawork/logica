/*

1- MAke an algorithm that receives a zi code and tells
you the adrres full ( City , street, state ) of this
zip code.

Use the API:

https://api.postmon.com.br/v1/cep/ { CEP }

*/

let rs = require ( " readline-sync " ) ;
let axios = require ( ` axios ` ) ;

let askCEP = rs . question ( `Enter the zip code you want to consult the adress ( numbers only ) : ` ) ;

axios . get ( ` https://api.postmon.com.br/v1/cep/${ askCep } ` ) ;

. then (

    printsAdress = ( response ) => {

        let street = response . data . logradouto
        let city = response . data . cidade
        let state = response . data . estado

        console . log ( `Street: ${ street } , City: ${ city } , State : ${ state } ` )

    }

  )