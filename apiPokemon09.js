var rs = require ( ' readile-sync ' ) ;
var search = rs . question ( ' Enter the name or number of the desired pokemon:  ' ) ;
var axios = require ( ` axios ` ) ;
var pokemon ;
var skill = [] ;
var pokemonTypes = [] ;

axios.get ( ` https://pokeapi.co/api/v2/pokemon/${ search } ` ) ;

. then (

    (answer) => {   

        pokemon = answer . data ;

        //console .log ( pokemon )

        var name = pokemon . name
        console . log ( ` Pokemon name: ${ name } ` ) ;
        var skills = pokemon . abilities
        skill . forEach(

            skills => {

                skill . push ( skills . ability . name )

            }

        )

        console.log ( ` Pokemon Skill \n ${ skill . join } \n ` ) ;

        var  kind = pokemon . pokemon . types
        kind . forEach(

            kind=> {

                pokemonTypes . push ( kind.type.name )

            }

        )

        console.log ( ` Pokemon types \n ${pokemonTypes . join } \n ` ) ;
    }

)

.catch(

    ( erro ) => {

        console.log ( erro );

    }

)

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