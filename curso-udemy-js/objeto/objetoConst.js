// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// -------------------
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
