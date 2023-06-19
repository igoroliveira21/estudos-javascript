function area(largura, altura) {
    const area = largura * altura 
    if(area > 20) {
        console.log(`Valor acima do permitido ${area}m².`)
    } else {
        return console.log(`${area}m²`)
    }
}

console.log(area(2, 2))
console.log(area(6, 5))
console.log(area())
console.log(area(2, 3, 18, 49))
