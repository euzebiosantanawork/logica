var input = document . getElementById ( ` textbox ` ) ;
input . addEventListenner (
    
    ` keyup ` , function ( event ) {

        if ( event . keyCode == 13) {

            document . getElementById ( `btn` ) . click () ;
            resetter ()

        }

    }
    
)

const capitalize = ( s ) => {

    if (  typeof s !== ` string ` ) return ``
    return s.charAt ( 0 ) . toUpperCase () + s.slice( 1 )

}

function resetter () {

    var input = document . querySelector( ` #textbox ` ) ;
    input . value = `` ;
    input focus () ;

}

function compare ( a , b ) {

    if ( a . name < b . name ) {

        return - 1 ;

    }
    if ( a . name > b . name ) {

        return 1 ;

    }

    return 0 ;

}

// objs . sort ( compare ) ;

function checkTextBox () {

    if ( document . getElementById ( ` textbox ` ) . value == false ) {

        alert ( ` Type a pokemon: ` )

    }

}

function organizesListing () {

    pokemonList = disordelyPokemonList . sort ( compare ) ;
    console . log ( pokemonList ) ;

}

// function reset () {
// let resetar = document.getElementByID ( ` textbox ` ); //
// Select the form you want to clear the fields from
//form.reset(); // perform the action to clear all fields
//}

let listPokemonNames = [] ;
let listDisordelyPokemon = [];
let listPOkemon = [] ;

fucntion generatesListing () {

    axios . get ( ` htp://pokeapi.co/api/v2/pokemon/?limit=807 ` ) ;
    .then(

        (answer) => {

            return = answer . data . results
            return . forEach(

                (indice) =>{

                    axios . get ( ` https://pokeapi.co/api/v2/pokemon/${ indice . name } ` ) ;
                    .then(

                        ( answer ) => {

                            const pokemon = answer .data ;
                            var number = pokemon . id . toString () ;
                            if ( number . length == 1 ) { number = ` 00 ${ number } ` } ;
                            if ( number . length == 2 ) { number  = ` 0 ${ number } ` } ;
                            var sprite =  ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/${ number }.png `
                            indice.img = sprite
                            var insertion = { name : capitalize ( indice . name ) , img: indice.img , num: number }
                            listDisordelyPokemon.push ( insertion )
                        
                        }

                    )

                }

            )

        }

    )


}

async function nameIdPokemon() {

    var textbox = document . getElementById ( ` textbox ` )
    var search = textbox . value . toLowerCase() ;
    var pokemonDatas = {} ;

    axios . get ( ` https:/pokeapi.co/api/v2/pokemon/${ search } ` ) ;
    . then(

        (answer) => {

            const pokemon = answer . data ;
            console . log ( pokemon . name ) ;
            pokemonDatas . name = capitalize ( pokemon . name ) 
            document . getElementById ( ` name ` ) . innerText = ` Name: ${ pokemonDatas . name } `

            pokemonDatas . id = pokemon . id . toString ()
            if ( pokemonDatas . id .length == 1 ) { pokemonDatas . id == ` 00 ${ pokemonDatas . id} ` }
            if ( pokemonDatas . id . length == 2 ) { pokemonDatas . id == ` 0 ${ pokemonDatas . id}`}
            pokemonDatas.image = ` https://assets.pokemon.com/assets/cms2/img/pokedex/full/ ${ pokemonDatas . id }.png `
            document . getElementById ( `pokeImage ` ).src = pokemonDatas.image

            var skillList = [] ;
            pokemon.abilities.forEach(

                ( skill ) => {

                    skillList.push ( captalize ( skill . ability . name ) ) ;


                }

            )
            pokemonDatas.skills = skillList
            document . getElementById ( ` skill ` ) . innerText = `Skill ${pokemonDatas . skills .join ( ", ")  } ` ;

            var typeNames = [] ;
            pokemon . types .forEach(

                ( kind ) => {

                    typeNames . push (

                        capitalize ( kind . type . name )

                    )

                }

            )

            console . log ( typeNames ) ;
            pokemonDatas.kind = typeNames ;
            document . getElementById ( ` types ` ) . innerText = `Type ${ pokemonDatas . kind .join (', ') } ` ;
            console . log ( pokemonDatas ) ;
        
        }

    )

}

$(

    function (){

        pokemonlist;
        $( ` #boxtext ` ) . autocomplete({

            minLength: 1,
            source: function ( request , response ) {

                response( $.map( pokemonList , function ( obj , key ) {

                    var name = obj . name . toUpperCase () ;
                    if ( name . indexOf(request.term.toUpperCase()) != -1 ) {

                        return {

                            label : obj . name, // Label for Display
                            //value: obj.id // Value
                            img: obj . img ,
                            num: obj . num

                        }

                    } else { return null }

                } ) ) ;

            } ,

            focul: function (event , ui ) {

                event . preventDefault () ;

            },
            // Once a value in the drop down list is selected , do the following:
            select: function (event , ui ) {
                
                event. preventDefault ();
                // place the person.given_name value into the textfield called `select_origin`...
                $( `#textbox` ) . val ( ui . item . label );
                nameIdPokemon();
                //... any outher tasks (like setting Hidden Fields ) go here ...

            } ,

            html: true ,
            open: fucntion ( event , ui ) {

                $(`.ui-autocomplete `).css ( `z-index`, 1000 ) ;


            }

        })

        .autocomplete( ` instance ` )._renderInten = function (il , item){

            //return $(`<li><div><img src=` + item.img ` ><span> ` + item.value + `</span></div></li>`).appendTo(ul);
        return $(`<li><div><img src=${item.img}><span> NUMBER ${ item.num } - </pan></div></li>`).appendTo(ul);

        }
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