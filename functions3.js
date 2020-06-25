var rs = require("readline-sync");

function age(rs){


var day =rs.questionInt("Type a day: ")
var month = rs.questionInt("Type a month: ")
var year = rs.questionInt ("Type a year: ")

var dayPerMonth = month*30
var dayPerYear = (30*12)*year
var total = day + dayPerMonth + dayPerYear

return total

}
console.log(age(rs))