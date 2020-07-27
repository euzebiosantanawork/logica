
'C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe' // file way MongoDB

db . createCollection ( { " Students " } ) // create table

db . Students . insert ( { name : ' Jeff ', age : 27 , city : ` Sao Paulo ` , class : 1 } ) 
db . Students . insert ( { name : ' Bruna ', age : 32  , city ` Bahia ` , class: 1 } )
db . Students . insert ( { name : ` Julio ` , age : 27 , city ' Sao Paulo ' , class: 1 } )
db . Students . insert (  { name : ` Aline ` , age : 21 , city : ` Rio de Janeiro` , class: 1  } )

db . Students . find ( {  } ) . pretty   // selecting the table - pretty makes the result more beatiful

db . Students . findOne ( { } )  // select a sigle item from the table

db . Students . delete ( {  } ) // Delete the table

db . Students . deleteOne ( {  } ) // delete a sigle item from the table

db . Students . updateOne ( { name : ` Jeff ` } , { $set:{ age : 28 } } ) // update the table

db . Students . findOne ({


})

db . Students . findOnde (
    
        {

        tags : [
            
            ` done dish `
        
        ]

    }

)

db . Students . findOne (

    {

    tags: [

        %all[

            ' done dish '
            ' free buffet '

        ]

    ] 

    }

)

db . Students . find ( { tags : " Sao Paulo " , " Julio " } )
db . Students . find ( { tags : { $in [ " Sao Paulo " , " Julio " ] } } )
