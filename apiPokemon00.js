import Axios from "axios";

var pokemons
var poke_imagens = {};

//search
document.addEventListener ( 'DOMcontentLoaded' , function () {

    startModal()/*Calling function to initialize
    the modal of the "about" section */
    axios.get ( `https://pokeapi.co/api/v2/pokemon?limit=251` )

        .then(

            response => {

                pokemons = response.data.results;
                var firstPokemon = pokemons[Math.floor(Math.random()*pokemons.length)];
                pokemons.foreach(

                    poke =>{
                        
                        var split = poke.url.split('/'); 
                        var number = split[ split.length-2 ];
                        var url = 'https://raw.githubsercontent.com/PokeAPI/sprites/master?sprites/pokemon' + numbers + '.png';
                        poke_imagens[poke.name] = url;

                    }

                );

                selectPokemon(firstPokemon.name);

            }

        );

        var elems = document.querySelectorAll ( '.autocomplete' );
        var instances = M.Autocomplete.init( elems, { data: poke_imagens } );

    }

);

function pressButton(){

    var input = document.querySelector( "autocomplete-input" );
    selectPokemon( inpute.value );

}

function selectPokemon( name ) {

    axios.get( 'http://pokeapi.co/api/v2/pokemon/${name}/' );
        .then(

            response => {

                var pokemon = response.data.name;
                document.querySelector ( "#namePokemon" ).innerHTML = pokemon.toUpperCase();
                var list = document.querySelector( '#skillList' );
                var habilits = response.data.abilities.map ( ab => `<p> ${ ab.ability.name } ` )
                list.innerHTML = habilits.join ( "" );
                var image = poke_images [ pokemon ];
                document.querySelector ( '#pokeImage' ) .src = image
                var types = response.data.types.map ( t => t.type.name );
                document.quertSelector( '#typeList' ).innerHTML = types.join( ',' );
                axios.get( ` https://pokeapi.co?api/v2/type${types[0]} `);

                    .then( 
                        
                        response =>{

                            var display_carousel.map(
                                
                                elm =>{
                                    textLink = <a class = "carousel-item" href "#" onclick ="selectPokemon( `${elm.pokemon.name}`)"><img src = " ${ poke_images [ elm.pokemon.name ]}">
                                        <img src = "${poke_imahens[elm.pokemon.name]}">
                                    </a>;

                                    return textLink

                                }

                            );

                            document.querySelector(' #carouseSimilares ').innerHtml = links.join( '' );
                            startCarousel();
                        }
                        
                        )

            }
        )


}

//Carousel
function startCarousel() {
    var elems = document.querySelectorAll( ' .carousel ');
    var instances = M.Carousel.init( elems,{'fullWidth': true,numVisble: 4});
    
};

//Start us model

function startModel(){
    var elems = document.querySelectorAll( '.modal' );
    var isntaces = M.Modal.init(elems,{});

}

/*

autocomplete
get todos pokemons https: //pokeapi.co/api/v2/pokemon?limit=100<

*/