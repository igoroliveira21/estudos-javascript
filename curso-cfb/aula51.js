const valores=[10,8,9,2]
const it_valores=valores[Symbol.iterator]()

console.log(valores)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)
console.log(it_valores.next().value)

