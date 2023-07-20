const Pessoa = {
    nome,
    idade,
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
    setNome:function(nome) {
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade=idade
    }
}

let pessoa=[]

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector("#res")

const addPessoa=()=>{
    pessoas.map((p)=>{
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome ${p.getNome()}<br/> Idade:${p.getIdade()}`
    })

}


btn_add.addEventListener("click", (evt) => {
    const nome = document.querySelector("#f_nome") 
    const idade = documen.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    addPessoa()
})