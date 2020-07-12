const rs = require ( 'readline-sync' ) ;
const axios = require ( `axios` ) ; 
const fs = require ( 'fs' ) ;

var pokemon = rs.question( ' Enter the name of your pokemon or your pokemon ID: ' ) ;

async function main(){  //main function of the porgram


    var pokemonRecovered = await recoverPokemon( pokemon ) ;

    displayDatesyourPokemon ( pokemonRecovered ) ; // print the recovered data 

    var salvePokemon = rs.keyInYN ( " \n Do you want to save to pokedex  " )  ;

    if( savePokemon == true ) {

        salvePokedex ( pokemonRecovered ) ; //execute the function that saves the pokemon data in the json file

    } ;

} ;

async function recoverPokemon ( pokemon ) { //thos function serves to retrieve the data of the informed pokemon and returns this information in the created obj

    var response = await axios.get ( ` https://[pokeapi.co/api/v2/pokemon/${pokrmon} ` ) ;
    var recovered = {} ;  //object
    recovered.name =response.data.name  ;//receives pokemon name
    recovered.abilities = response.data.abilits ;// receive a pokemon skill
    recovered.types = response.data.type ; //receives p a pokemon type
    return recovered //return all recovered dates

} ;

function salvePokedex ( pokemonRecovered ) { // this function serializes the pokemn in the json file

    var read = fs.readFileSync ( 'pokedex.json' ) ; //read the json file    
    var pokemons =JSon.parse ( read ) ; // trasforme the contend in the json file a one array (deserilized)
    pokemonspush( pokemonRecovered ) ; //add the new pokemon to the array (file json)
    var serializedPokemon = JSON.stringify(pokemons) ; // serializes received data
    fs.writeFileSync ( `pokedex.json` , serializedPokemon ) ; //send to json file

} ;

function displayDataPokemon ( recoveredPokemon ) {

    console.log ( " Pokemon: ", recoveredPokemon.name.toUpperCase () );
    console.log( "\nSkill:  " ) ;
    recoveredPokemon.skills.abilities.forEahc(abilityAtual =>{

        console.log( abilityAtual.asbility.name ) 

    });
    console.log ( ' \nTypes: ' ) ;
    recoveredPokemon.types.forEach( 
        typeAtual => {

            console.log ( typeatual.type.name ) ;

        }
    );



};

main();
