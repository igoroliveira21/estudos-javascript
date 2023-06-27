let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Julio') // Adiciona um elemento no final do array
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)// Tamanho do array / quantidade del elementos
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // Ordena o array
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento 2') // 1, apartir do indice, 0: excluir ou adicionar elementos apartir do indice passado no primeiro parametro
console.log(aprovados)
