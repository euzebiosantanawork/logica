var rs = require('readline-sync');
var data = rs.question('Digite com data 00/00/0000: ')
    // var dia  = data.match(/(\d\d)/)
    // console.log(dia[0])
    // data = data.substring(dia['index']+3)
    // var mes  = data.match(/(\d\d)/)
    // console.log(mes[0])
    // data = data.substring(mes['index']+3)
    //  var ano = data.match(/(\d\d\d\d)/)
    // console.log(ano[0])
console.log(data.match(/(\d\d)\/(\d\d)\/(\d{4})/g)[0].split('/').join('\n'))