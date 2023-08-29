const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let nota of notas) { //para cada elemento de notas execute o bloco
    somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`)
