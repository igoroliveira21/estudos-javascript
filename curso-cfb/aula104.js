let nome = new String("Igor de Oliveira Nobrega")

console.log(nome.startsWith("I"))

console.log(nome.endsWith("a"))

console.log(nome.includes("Oli"))//Procura em alguma parte da string a string passada



console.log(nome.repeat("3"))//Repete a stringa tantas vezes
console.log(nome.valueOf())

console.log(nome.charCodeAt(0))//passa o código de cada elemento seguinte da posição tal
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))


console.log(String.fromCodePoint(73, 103, 111, 114))//Pega o código de cada letra/ código ask


let nome_ts="Igor"

console.log(`Nome: ${nome_ts}`)