//Object.preventExtesions - Não pode adcionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = {nome: 'Julio', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze