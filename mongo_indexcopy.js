const mongoose = require ( ' mongoose ' ) ;

mongoose . connect ( 'mongodb://127.0.0.1:27017/restaurantes' . {
    useNewUrlParser : true , useUnifiedTopology : true
} ) ;

const db = mongoose . connection ;
db . on ( ' error ' , ( error ) => console . log ( error ) ) ;

const restaurantsSchema = new mongoose.Schema( 

{ name : String , }

) ;

const restaurant = mogoose . model ( 'Restaurants' , restaurantsSchema ) ;

async function main () {

    const restaurant = new restaurant ( { name : " Sementina " } ) ;
    const bankRestaurant = await restaurant. save() . catch ( ( erro ) => console . log (erro) ) ;
    console . log ( " Bank restaurant : " , bankRestaurant ) ;
    const restaurants = await restaurant . find () ;
    console . log ( restaurants ) ;
    console . log ( " End of file Log " , restaurant )

}

main () ;