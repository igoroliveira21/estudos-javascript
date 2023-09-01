const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados)

const clienteEmString = JSON.stringify(dados); //Transformando em uma string
console.log(clienteEmString);
console.log(typeof clienteEmString);

// console.log(clienteEmString.nome) // undefined

const objetoCliente = JSON.parse(clienteEmString) //Passa de string para objeto
console.log(objetoCliente)
