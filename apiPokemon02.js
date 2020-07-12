/*
Seu programa deve:
2.1.1 - Pedir ao usuário que defina um pokémon que ele gostaria de saber mais informações
sobre. Essa escolha pode ser feita através do input do ID do Pokémon ou pelo nome.
2.1.2 - Fazer o display do nome do Pokémon, seu tipo e também sua lista de habilidades (na
tela do terminal)
2.1.3 - Se o usuário quiser salvar esse pokémon em sua pokedex local para consultar mais
tarde, ele pode fazê-lo. Aqui, os dados devem ficar armazenados na máquina, em um arquivo
.json. Você escolherá a estrutura mais adequada.
*/
var rs = require("readline-sync")
var axios = require("axios")

var pokemon = rs.question("Qual o pokemon?")
var pokeAPI = axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
console.log(pokeAPI.data.name)
