const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursosSelecionado = document.querySelector("#btnCursoSelecionado")
const btnRemoverCurso = document.querySelector("#btnRemoverCurso")

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", `c${chave}`)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_radio")

    comandos.appendChild("rb")

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado=()=>{
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((el) => {
        return el.checked
    })
    return radioSelecionado[0]
}


btnCursosSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if(rs != undefined) {
        const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert("Curso Selecionado: " + cursoSelecionado)
    } else {
        alert("Selecione um curso!")
    }
    
    // console.log(todosRadios)
    // console.log(radioSelecionado)
    // console.log(btnCursoSelecionado)
})

btnRemoverCurso.addEventListener("click", (evt)=>{
    const rs = radioSelecionado()
    if(rs != undefined) {
        const cursoSelecionado = radioSelecionado.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert("Selecione um curso!")
    }

})