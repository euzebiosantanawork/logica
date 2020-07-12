/*

create a function that receives a collection of students and 
calculates the avarage age. Add a new function in the file 

calculates-midlle.js

called

calculates MiddleAgeStudents(students)


calculatesMediaAgeStudent9students). The function must receive
an array of the same class as the students created in activity 2.
 After that the funcion must iterate through the students and 
calculate the avarage age and return it/
  Add this function to be exported by the module. Add at the end
of the avtivitu 2 program after informing the name of the students 
with older age also print the avarage age of students using the 
method 

calculates MiddleAgeStudents(students)

*/

var rs = require("readline-sync");
var calculate = require('./calcula-media/index');
var students = {};

students.student = [];

class Students{
    
    cosntructor(name,age){
            this.name = name;
            this.age = age;
    };

};

for( var i = 0; i < 3 ; i++){
    
    students.student[i] = new Students(rs.question("Type a name: "), rs.questionInt("Type a age; "));

};

var ageArr = [];

for ( var j = 0 ; j < 3; j++ ){

    ageArr.push(students.student[i].age);

};

for ( var k = 0; k < ageArr.length; k++ ){

    for(var l = 0; l < students.student.length; l++ ){

        if( ageArr[k]== students.student[l].age ){
            
            console.log(students.student[l]);

        };

    };

};

console.log(calculate(ageArr));

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