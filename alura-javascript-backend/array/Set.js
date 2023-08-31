const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

// const meuSet = new Set(nomes);
// const nomesAtualizaods = [...meuSet]

const nomesAtualizaods = [...new Set(nomes)]

console.log(nomesAtualizaods)