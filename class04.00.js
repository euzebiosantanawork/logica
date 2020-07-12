var calculatesAvarage = require("./json-pack/calcula-media");
var rs = require("readline-sync");
var olderAge = [];

class Student {
    
    constructor( name , age ) {
        
        this.name = name;
        this.age = age;

    };

};

function registerStudent() {

    var firstStudent = new Student (

        this.name = rs.question("Type a student name: ")
        this.age = rs.questionInt("Type a student age: ")
        
    )


        return firstStudent;

};

while ( true ) {

    olderAge.push(registerStudent());
    var request = rs.keyInYN(" Want to register a new student? ") ;
    
    if ( request == false ){

        break;

    }

};

var olderAgeOfAll = 0;

for ( var i = 0 ; i < olderAge.length ; i++ ){

    var currentAge = olderAge[i].age

    if ( correntAge > olderAgeOfAll ){
        
        olderAgeOfAll = currentAge;

    }

};

for ( var i = 0 ; i < olderAge.length ; i++ ) {

    if(olderAgeOfAll == olderAge[i].age ) {

        console.log ( "The older student is: " , olderAge[i] );

    }

};

console.log ( "The avarage age is: " );

console.log( "Thank you for using our program (:\
    \
            This program is being developed by\
          Euzebio Santana,\
          \
          Contacts:\
          WHATSSAP +5511951732589\
          LINKEDIN: https: //www.linkedin.com/in/robertfredericksmith/\
          GITHUB: https: //github.com/euzebiosantanawork\
          SITE: https: //sites.google.com/view/euzebiosantana/home\
          \
            -Check back often!" );