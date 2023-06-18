// RECURSO DO ES2015
// TIRAR DE DENTRO DE UMA ESTRUTURA DADOS
const pessoa = {
    nome : 'Igor',
    idade: 18,
    endereco : {
        logradouro: 'Rua ABVC',
        numero: 1000
    }
} 

//Tire de dentro do objeto 
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome = 'Oliveira', bemHumorada = 'Gente Boa'} = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: {logradouro, numero, cep ='25040640'}} = pessoa
console.log(logradouro, numero, cep)

/*const {conta: {ag, num}} = pessoa
console.log(ag, num)*/
