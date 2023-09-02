const livros = require('./listaLivros')

function menorValor(arrProdutos, posInicial) {
    let maisBarato = posInicial;
    // let maisCaro = 0;

    for(let atual = posInicial; atual < arrProdutos.length; atual++) { //percorre por posições do array pelos indices
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }         
    }
    return maisBarato;
}


// console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o título é ${livros[maisBarato].titulo}`)
module.exports = menorValor;