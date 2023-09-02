const livros = require('./listaLivros');

function insertionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual; // qual item está sendo analisado por vez
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            let itemAnalise = lista[analise]; //acessando a lista na posição atual e guardando na variável
            let itemAnterior = lista[analise - 1];

            livros[analise] = itemAnterior
            livros[analise - 1] = itemAnalise

            analise--
        }
    }
    console.log(lista);
    
}

insertionSort(livros)
