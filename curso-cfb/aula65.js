const pessoa = {
    nome:"Igor",
    canal:"CFB Cursos",
    curso:"JavaScrip",
    aulas:{
        aula01:"Introdução",
        aula02:"variáveis",
        aula03:"Condicional"
    }
}

const string_pessoa='{"nome":"Igor","canal":"CFB Cursos","curso":"JavaScrip","aulas":{"aula01":"Introdução","aula02":"variáveis","aula03":"Condicional"}}'

const s_json_pessoa=JSON.stringify(pessoa)
const o_json_pessoa=JSON.parse(s_json_pessoa)//parse = converte de string para objeto

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)