const rs = require ( "readline-sync" ) ;
const axios = require ( 'axios' ) ;
const fs = require ( 'fs' ) ;
const pokeJson = require ( './pokemon.json' ) ;

var searchPokemon = rs.question("type a name pokemon or number pokemon: ") ;
var pokemon = {}

axios.get ( `https://pokeapi.co/api/v2/pokemon/${searchPokemon}` ) 
    
    . then ( 
        
        ( awser ) => {

            pokemon.name = answer.data.name
            pokemon.id = answer.data.id

            var pokeSkills = answer.data.abilites
            var skills = [] ;
            var skillsUrl = [] ;
            var pokeDescSkill = " "  

            for ( let i = 0 ; i < pokeSkills.length ; i++ ) {

                skills.push ( pokeSkills[i].ability,name ) ;
                pokeSkills.skills = skills ;
                skillsUrl.push( pokeSkill[i].ability.url ) ;

                axios.get( skillsUrl[i] )
                    
                .then(

                    (answer) =>{

                        pokeDescSkill = answer.data.effect_entries

                            if ( pokeDescSkill[1].language.name == "en" ) {

                                pokemon.skillDescripcion = pokeDescSkill[0].effect

                            } else { pokemon.skillDescripcion = pokeDescSkill[1].effect } ;

                    }

                    ) ;

            } ;

            setTimeout ( 
                () => {

                    console.log ( ' DESCRIPTION : ${pokemon.descripitionSkills}') ;

                } 
                
                ) ;

            }
    
        )   


        var pokeType = answer.data.types
        var type = [] ;
        var = typeURL = [] ;
        var doubleDamageFromName = [] ;
        var doubleDamangeToResult = [ ] ;
        var halfDemangeFromResult = [ ] ;
        var noDamageFromResult = [] ;
        var noDamangeToResult = [] ;

        for ( var i =0 ; i < pokeType.length ; i++ ) {

        type.push ( pokeType[i].type.name ) ;
        pokemon.type =type ;
        typeURL.push ( pokeType[ i ].type.url ) ;
    
    axios.get ( typeURl[i] ) ;

    .then ( 
        
        ( answer ) => {

                var doubleDamageFrom = answer.data.damage_relations.double_damage_from ;
            
                doubleDamgeFrom.forEach ( element => doubleDamageFromName.push ( element.name ) ) ;
                pokemon.doubleDamageFrom = doubleDamageFromName ;
                console.log( ` DOUBLE DAMGE FROM: ${ doubleDamageFromName } ` ) ;
         
                var doubleDamageTo = answer.data.damage_ralations.double_damge_to ;
            
                doubleDamageTo.forEach ( element => doubleDamangeToResult.push ( element.name ) ) ;
                pokemon.doubleDamageTo = doubleDamangeToResult ;
                console.log(`DOUBLE DAMAGE TO: ${ doubleDamageToResult }`) ;

            var halfDamageFrom = resposta.data.damage_relations.half_damage_from
            
                halfDamageFrom.forEach ( element => halfDamageFromResult.push ( element.name ) ) ;
                pokemon.doubleDamageTo = doubleDamageToResult ;
                console.log ( ` HALF DAMAGE FROM: ${ doubleDamageToResult } ` ) ;

            var halfDamageTo = answer.data.damage_relations.no_damage_to ;
                
                halfDamageTo.forEach ( element => halfDamageToResult.push ( element.name) ) ;
                pokemon.halfDamageTo = halfDamageToResult ;
                console.log (`HALF DAMAGE TO:  ${ halfDamageToResult } ` ) ;

            var noDamageFrom =answer.data.damage_relations.no_damage_from ;
             
                noDamageFrom.forEach ( element => noDamageFromResult.push( element.name ) ) ;
                pokemon.noDamageFrom = noDamageFrom ;
                console.log ( `NO DAMGE FROM: ${ noDamageFromm } ` ) ;

            var noDamageTo = answer.data>damage_relations.no_damage_to
            
                noDamageTo.forEach ( element => noDamangeToResult.push ( element.name ) ) ;
                pokemon.noDamageTo = noDamageToReuslt ;
                console.log ( `NO DAMAGE TO: ${ noDamageToResult }`  ) ;


            } 

        )

    }

    console.log ( `NAME: ${ pokemon.name } , TYPE: ${ pokemon.type } , SKILLS: ${ pokemon.skills } ` ) ;

}):

var option ;

setTimeout(

 option = rs.keyInYN ( ` Would you like to save this pokemons information ? ` ) ;

    if ( option ) {

        saveJson ( pokemon )

    }

} , 1000 ) ;

function saveJSON( obj ) {

    varobjSerialized = JSON.stringify ( obj ) ;
    var  filePath = ` Natanaels-MacBook-Air/desktop/exercicios_arbyte/pokemon.json ` ;
    fs.writeFileSync ( filePath , objSerialized ) ;


 ;}

    