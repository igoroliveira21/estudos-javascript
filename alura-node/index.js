import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro)
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretório'));
}

//async / await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(chalk.green(texto));
    } catch (erro) {
        trataErro(erro)
    }
    
    
}




//promises com then

// function pegaArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises //Funções encadiadas
//         .readFile(caminhoDoArquivo, encoding)
//         .then((texto) => console.log(chalk.green(texto)))//caso aconteça algum erro no then o erro vai para a função catch
//         .catch((erro) => trataErro(erro))
// }


pegaArquivo('./arquivos/');
