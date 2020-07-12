
const rs = require ( " readline-sync " ) ;
const axios = require ( " axios " ) ;
const fs = require ( "fs" );
const { throws } = require("assert");

// let urName = ' https://pokeapi.co/api/v2/pokemon/ '
// let urlType = ' https://pokeapi.co/api/v2/type '
// let urlSkill = 'https://pokeapi.co/api/v2/skills/ '

let pkm = rs . question ( ` Type a pokemon name or pokemon id : ` ) ;

//async function takeNamePKM() {
axios . get ( ` https://pokeapi.co/api/v2/pokemon/${ pkm } ` );

    .then(

        (answer) => { 

            var pokemon = answer.data ;
            var pokeName = pokemon.name ;
            var skills = [] ;
            pokemon .ability .forEach(

                ( skills ) =>{

                    skills .push (

                        skills.ability.name

                    );

                }

            );

            class fullPokemon {

                constructor ( name , skill , type ) {

                    this .name = name ;
                    this .skill = skill ;
                    this .type = type

                };

            };

            let PKM = new fullPokemon ( pokeName , skills , types ) ;
            
            async fucntion takeTypePKM() { // this fucntion gets the pokemon type names

                for( let i = 0 ; i < PKM .type .length ; i++ ) {

                    axios.get( `https://pokeapi.co/api/v2/type/${ PKM .type [ i ] } ` ) ;

                    .then(
                        (answer) => {

                            let type = answer . data
                            let typeOne = type . name
                            console . log ( typeOne )

                        }

                    ) ;

                }

            } ;

            async function takeSkillPKM ( x ) { //the function takes the names of the skill and their effects.

                for ( let i = 0 ; i < PKM.skills.legth ; i ++ ) {

                    axios.  get ( ` https://pokeapi.co/api/v2/ability/ ${PKM . skill[i] } ` ) ;

                     .then ( (answer) => {
                     
                        let effect = answer . data ;
                        let efxOne = effect . name ;
                        let efxDesc = effect.effect_entries [ 1 ] . effect_entries
                        
                        setTimeout (

                            (x) => {

                                console . log ( efxOne = ` \n ` + ` \n ` + efexDesc + ` \n ` ) ;

                            } , 1000 

                        ) ;
                    
                    } 

            }

            async fucntion takeDamagePKM ( x ) { // this function will show weaknesses and stregths of pkm types

                for ( let i = 0 ; i < PKM . type . length ; i ++ ){

                    axios . get ( ` https://pokeapi.co/api/v2/type ${ PKM . type [ i ] } ` ) ;

                    .then( ( answer ) => {

                        let typeDamage = answer . data ;
                        let damage = typeDamage.dage_ralations ;
                        let doubleOf = [] ;
                        let dobleIn = [] ;
                        let halfOf = [] ;
                        let halfIn = [] ;
                        let zeroOf = [] ;
                        let zeroIn = [] ;

                        seTimeoout( 
                            
                            ( x ) => {

                                for ( let i = 0 ; i < damage . double_damage_from.length ; i ++ ) {

                                     doubleOf . push ( double_damage > from[ i ] . name ) ;
                                     
                                } ;

                                for ( let i = 0 ; i <damage . doble_damage_to . length ; i++ ) {

                                    doubleIn . push ( damage . double_damage_to[ i ] . name )

                                } ;

                                for ( let i = 0 ; i < damage . half_damage_from . length ; i++ ) {

                                    halfOf . push ( damage . half_damage>to[ i ] . name )

                                } 

                                for ( let i = 0 ; damage . half_damage_to . length ; i ++ )  {

                                    halfIn . push ( damage . half_damage_to[ i ] . name ) ;

                                } ;

                                for ( let i = 0 ; i < damage . no_damage_from . length ; i ++ ){

                                    zeroOf . push( damage . no_damage_from[ i ] .name )

                                } ;

                                for ( let i = 0 ; i < damage . no_damage_to.length ; i ++ ){

                                    zeroIn . push ( damage . no_damage_to[ i ] . name ) ;

                                };
                            
                            }, 3000 ) ;
                        
                        } 

                    ) ;



                    } ;



                    

                }

            }

            takeTypePKM( PKM ) ;
                takeSkillsPKM( PKM ) ;
                takeDamagePKM( PKM ) ;

                async function SaveDex( fs , Poke ) {

                    var pkmJSON = JSON . stringify ( Poke ) ;
                    var filePath = " car . json " ;
                    fs.writeFileSync( filePath ,pkmJSON ) ;

                } ;

                saveDex ( PKM ) ;

        }

    );
// }

/*

Other repositories with the same exercise: 
1. https://github.com/gabrielasdl/Desafio_api_pokemon/blob/master/pokeapi.js
2. https://github.com/marcosalles/pokeapi-arbyte/blob/master/js/pokemon.js
3. https://github.com/bgdj17/logica/blob/master/desafio3_pokemon.js
4. https://github.com/FelipeTeodoro1991/POKEAPI/blob/master/script.js
5. https://github.com/Phelipee25/PokeAPI/blob/master/PokeApi_noConsole.js
6. 

*/