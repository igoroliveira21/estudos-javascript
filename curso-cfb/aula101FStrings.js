let nome = new String("Igor Pinho Oliveir")
let nome2 = new String("Igor Pinho Oliveira")
let canal = new String("CFB Cursos")

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))//
console.log(nome.charAt(1))
console.log(nome.charAt(2))
console.log(nome.charAt(3))

console.log(nome.charCodeAt(0))// Retorna o código do Elemento I

console.log(nome.concat(canal))

console.log(nome.concat(canal))
console.log(nome)

console.log(nome.indexOf("Ig"))

console.log(nome.lastIndexOf("i"))


console.log(nome.localeCompare(nome2))

console.log(nome.replace("Pinho", "Nobrega"))

console.log(nome.search("Pinho"))


let sobrenome = nome.slice(5, 11)
console.log(sobrenome)


let arr = nome.split(" ")
console.log(arr)
