/*

3 - Make an algorithm that receives an episode number from 
Breaking Bad. After that the algorithm should print the cast of characters and 
also from wich season is this episode. If the episode is invalid, tell the user
that this episode does not exist.

Use the api: https://www.breakingbadapi.com/api/episodes/ { EPISODE NUMBER }

*/

let rs  = require ( ' readline-sync ' ) ;
let axios = require ( ' axios ' ) ;

let episodeNumber  = rs . questionInt ( ' Enter the episode number: ' ) ;

axios . get ( ` https://www.breakingbadapi.com/api/episodes/${ episodeNumber } ` )

. then ( 

   printCast = ( response  ) => {

    if ( episodeNumber > response . length ) {
        console . log ( "Invalid episode number " )
    } else {  console . log  ( response . data [ 0 ] . characters ) }

   }

)