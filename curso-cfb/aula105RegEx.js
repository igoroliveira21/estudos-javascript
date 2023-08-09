let nome = new String("Igorrrr de Oliveira Nobregaaaaa 1998")
let email = "igoroliveira19@gmail.com"
let numeros = "1, 10, 100, 1000"

console.log(nome)

//Expressões regulares
console.log(nome.search(/oliveira/i))//retorna a posição inicial

console.log(nome.match(/O/ig))//i = ignora o case/ g = global

console.log(nome.replace(/oliveira/i, "Teste")) 
console.log(nome.replace(/o/ig, "a"))

console.log(nome.match(/[oe]/ig))

console.log(nome.match(/[a-g|h-z|0-9]/ig))

//Metacaracteres
console.log(nome.match(/\d/ig))//retorna apenas digitos numéricos
console.log(nome.match(/\s/ig))// espaços
console.log(nome.match(/\bI/ig))// Caracteres

//Quantificadores
console.log(nome.match(/r+|a+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))//Retorna 0 e 1



