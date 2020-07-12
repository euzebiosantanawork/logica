/*

Create an algorithm that enrolls 3 students and say wich one is 
older, if more than an older person presents the name of everyone 
who is older. to do this, create a Student class that receives two
variables in the name and age constructor and initialize those 
variables in the ovject`s preperties. After that ask
the user to register the first student and ask for name and age. 
Create the student object and add it to an array.
 Repeat this step for the other students. At the end the algarithm 
 must iterate through the student array and find out wich
 students are older and print their names.


*/

var rs = require("readline-sync");
var sort = require("sort");
var students = {};

students.student=[];

class Students{
    constructor(name, age){
        this.name = name;
        this.age = age;

    }
}

for(var i = 0 ; i < 3 ; i++){
    students.student[i] = new Students (rs.question("Enter student name: "), rs.question('Enter student age: '));

}

var ageArr = [];

for (var j = 0 ; j < 3 ; j++){
    ageArr.push(students.student[j].age)

}

ageArr.sort()

for (var k = 0 ; k < ageArr.length; k++ ){

    for(var l = 0 ; l < students.student.length ; l++ ){
        
        if(ageArr[k]==students.student[l].age){
            
            console.log(students.student[l])

        }

    }

}

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
