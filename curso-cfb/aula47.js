// FIND permite pesquisar os elementos de um array e retorna o elemento
const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar  = document.querySelector("#btnPesquisar")
const resultado = document.querySelector("#resultado")

const elementos_array = ["html", "css", "javascript"]
p_array.innerHTML = `[${elementos_array}]`

btnPesquisar.addEventListener("click", (evt) => {
    resultado.innerHTML = "Valor não encontrado"
    const ret = elementos_array.find((e, i)=> {
        if(e.toUpperCase == txt_pesquisar.value.toUpperCase) {
            resultado.innerHTML = `Valor ${e} encontrado na posição ${i}`
            return e
        }
    })
    console.log(ret)
})