let num = [5, 8, 4]
num.push(1)
num.sort()
console.log(num.length)//comprimento do array
console.log(`nosso vetor é o ${num}`)
let pos = num.indexOf(6)
if (pos == -1) {
    console.log()
} else {
    console.log(`O valor está na posição ${pos}`)
}
