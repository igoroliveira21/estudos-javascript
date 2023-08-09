let nome = new String("Igor de Oliveira Nobrega")

console.log(nome)

//Expressões regulares
console.log(nome.search(/oliveira/i))//retorna a posição inicial

console.log(nome.match(/O/ig))//i = ignora o case/ g = global

console.log(nome.replace(/oliveira/i, "Teste")) 
console.log(nome.replace(/o/ig, "a"))