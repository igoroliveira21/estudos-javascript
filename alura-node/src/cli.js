import chalk from "chalk";
import fs from 'fs';
import pegaArquivo from "./index.js";
import { resourceUsage } from "process";

const caminho = process.argv;

function imprimeLista(resultado, identificador = '') {

    if (valida) {
        console.log(
            chalk.yellow('lista validada'),
            chalk.black.bgGreen(identificador),
            listaValidada(resultado));
    }      
    console.log(
        chalk.yellow('lista validada'),
        chalk.black.bgGreen(identificador),
        resultado);  
}
 

async function processaTexto(argumentos) {
    const caminho = argumentos[2];

    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log('Arquivo ou diretório não existe.')
            return
        }
    }

    if (fs.lstatSync(caminho).isFile()) {
        const resultado = await pegaArquivo(argumentos[2]);
        imprimeLista(resultado);
    } else if (fs.lstatSync(caminho).isDirectory()) {
        const arquivos = await fs.promises.readdir(caminho);
         arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista, nomeDeArquivo);
        })
    }

}

processaTexto(caminho);