& 'C:\Program Files\MongoDB\Server\4.2\bin\mongoimport.exe' -d arbyte -c restaurants --jsonArray .\Downloads\restaurants.json
& 'C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe'

use arbyte

show collections

/*

1- Write a MongoDb query to display all documents from
 the collection`s restaurants.

*/

db.restauramts.find( { } ) 

/*

2- Write a MOngoDB query to display the fields restaurant_id, name, 
neighborhood and cuisine of all documents in the restaurant 
of collection.

*/

db.restaurant.find( { } , { "restaurant_id": 1 , "name" :1 , "borough":1 , "cuissine": 1 } )

/*

3- Write a MOngoDB query to display the fiels restaurant_id name,
neighborhood and cusine, but delete the _id fiels for all 
documents in the collection.

*/

db.restaurants.find( { } ,  { "restaurant_id" : 1 , "name": 1 , "borough": 1 "cuisine" : 1 , "_id": 0 } )

/*

4- Write a MongoDB query to display all the restaurant located in
the Bronx neighborhood.

*/

db.restaurants.find( { "bourogh": "Bronx" } )

/*

%_ Write a MongoDB query to displat the % Bronx's first restaurants.

*/

db.restaurants.find( { "borough" : "Bronx" } ) . limit(5)

/*

6 - Write a MongoDB query to display the next 5 restaurants after
skipping the top 5 in the Bronx.



*/

db . restaurant . find ( {"borough":"Bronx"} ) . skip( 5 ) . limit ( 5 )

/*

7 - Write a MongoDB query to find the restaurants that scored over 90.

*/

db . restaurants . find ( { grades : {$elemMatch: { "score" : { $gt : 90 } } } } )

/*

8- Write a MongoDB query to find the restaurants that scored more than 80
but less than 100.

*/

db . restaurants . find ( { grades : { $elemMatch: { "score":{ $gt: 80 , &lt : 100 } } } } ) 

/*

9 - Write a MongoDB query to find the resrant ID, the name, neighborhood and 
cusine of restaurants containing " Will " as the three firs letters of the
name.

*/

db . restaurants . find ( { name: /^Wil/ } , { "restaurant_id" : 1 , "name" : 1 , "borough" : 1 , "cuisine " : 1} )

/*

10 - Write a mongoDB query to find the restaurants that belong to the Bronx neighborhood 
and have prepared American or Chinese dishes

*/

db . restaurants . find ( { "borough" : "Bronx" , $or : [ { " cuisine " : " American "}  , { "cuisine " : "Chinese" }] } )

/*

11 - Write a query on MongoDB to be find the restaurant ID, the name, neighborhood
and cuisine of restaurants belonging to the Stanten neighborhood 
Island or Queens or Bronx or Brooklyn.

*/

db . restaurants . find ( { "borough" : {$in : [ " Staten Island " , " Queens " , " Bronx " , " Brooklyn " ] } )