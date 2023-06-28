const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove da primeira posição
console.log(pilotos)

pilotos.unshift('Hamilton') // Adciona na primeira posição do array
console.log(pilotos) 

//splice pode adicionar e remover elementos

//splice adicionar
pilotos.splice(1, 0, 'Botas', 'Massa')
console.log(pilotos)

//splice remover
pilotos.splice(3, 2) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array, gera um novo array a partir do índice gerado 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(0, 2) // vai o último elemento passado não entra
console.log(algunsPilotos2)