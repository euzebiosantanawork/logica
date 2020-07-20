var rs = require ( ` readline-sync ` ) ;
var ax = require ( ` axios ` ) ;
var fs = require ( ` fs ` ) ;
const { Console } = require("console");
var pokemons = [] ;

//objects

class ObjPokemon {

    constructor ( pokeID , pokeName , PokeTypes , pokeSkills ) {

        this.pokeID = pokeID ;
        this.pokeName = pokeName ;
        this.pokeTypes = pokeTypes ;
        this.pokeSkill = pokeSkill ;

    }

}

// api query

function pokemonQuery() {

    //entry, input
    var searchPokemon = rs . question ( ` Type a name Pokemon or ID Pokemon: ` ) . toLowerCase() ;
    var pokemonURL = ` https://pokeapi.co/api/v2/pokemon/${searchPokemon} ` ;

    //request

    ax . get ( pokemonURL )

        .then(

            function ( response ) {

                //types and skills map

                var types = response.data.types.map ( kind => kind . type . name ) ;
                var skill = response . data . abilities . map ( skill => skill . ability . name ) ;
 
                //trasforming the pokemon into an object

                var objPokemon = newObjPokemon ( response . data . id , response . data . name , types . join ( ` / ` ) , skills . join ( ` , ` ) ) ;

                //answer

                console . log ( ` Data collected , here are the information of the desired pokemon ` ) ;
                console . log ( ` ${ objPokemon.pokeID } - ${ objPokemon.pokeName }  ` ) ;
                console . log ( ` Type: ${objPokemon.pokeType } ` ) ;
                console . log ( `Skill: ${objPokemon.pokeSkills } ` ) ;

                //call pokedex

                salvePokemon ( objPokemon ) ;
                console . log ( ` What do you want to do now? ` ) ;
                menu () ;

            }

        ) 

        .catch(

            function( erro ) {

                console . log ( ` Pokemon not found ` ) ;
                console . log ( ` What do you want to do now? ` ) ;
                menu () ;

            }

        ) ;

        fucntion savePokemon ( objPokemon ) {

            var newPokemon = rs . keyInYNStrict ( ` Do you want to save ${ objPokemon . pokeName } in your Pokedex ? ` ) ;

            if(  newPOkemon ) {

                pokemons . push ( objPokemon )
                var serializedObj = JSON . stringify ( pokemons ) ;
                var filePath = ` pokedex . json ` ;
                fs . writeFileSync ( filePath , serializedObj ) ;
                console . log (  ` The Pokemon ${objPokemon . pokeName } was save in your pokeex ` ) ;
                
            } else { }

        }

}

function start () {

    console.log ( ` POKEAPI ` ) ;
    var jsonSerialized = fs . readFileSync ( ` pokedex . json ` ) ;
    var emptyPokedex = fs . readFileSync ( ` emptyPokedex . json ` ) ;

    if ( jsonSerialized . length == emptyPokedex . length ) {

        console . log ( ` Your pokedex is still empty! ` ) ;

    } else {

    var pokedexAtualizada = JSON . parse ( jsonSerialized ) ;
        pokemons = updatedPokedex ;

    }

}

menu () ;

function pokedexQuery ( pokemons ) {

    console . log ( ` YOUR POKEDEX ` )
    var pokemonsInPokedex = pokemons.map(

        function ( pokemonInPokedex ) {

            console . log ( ` ${ pokemonInPokedex . pokeId } - ${ pokemonInPokedex . PokeName } ` ) ;

        }

    )

    console . log ( ` What do you want to do now ? ` ) ;
    menu () ;

}

function menu () {

    var contentMenu = rs . questionInt ( ` Choose one of the options below: \n[1]consult pokemon \n[2]consult in Pokedex \n[3]back to menu \n [0]exit \n ` ) ;
    if( contentMenu === 1 ) {

        consultPokemon () ;

    } else if ( contentMenu === 2 ) {

        consultPokedex( pokemons ) ;

    } else if ( contentMenu === 3 ) {

        menu()

    } else if ( contentMenu === 0 ) {

        console . log ( `thank you !` )

    } else {

        console . log ( ` type a valid number ` )
        menu ()

    }

}

start () ;

/*
Other repositories with the same exercise: 
1. https://github.com/gabrielasdl/Desafio_api_pokemon/blob/master/pokeapi.js
2. https://github.com/marcosalles/pokeapi-arbyte/blob/master/js/pokemon.js
3. https://github.com/bgdj17/logica/blob/master/desafio3_pokemon.js
4. https://github.com/FelipeTeodoro1991/POKEAPI/blob/master/script.js
5. https://github.com/Phelipee25/PokeAPI/blob/master/PokeApi_noConsole.js
6. https://github.com/Caio-ED/PokeDex/blob/master/index.js
7. https://github.com/pcguimaraes/PokeAPI/blob/master/index.js
8. https://github.com/LuizF1408/pokemon/blob/master/pokemon.js
9. https://github.com/jeff77araujo/pokeAPI/blob/master/pokemon/js/scriptPoke.js
*/

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