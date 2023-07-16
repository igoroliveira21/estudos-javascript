const caixa = document.querySelector("#caixa")

let cores = ["azul","verde","vermelho",["claro","escuro","médio"]]
let cursos=["HTML","CSS","JavaScript", cores]

//cursos[0] = 2023

// cursos.push("C++")
// cursos.unshift("Python")//adiciona no início do array
// cursos.shift()//remove do início

console.log(cursos[3][3][2])

cursos.map((e) => {
    let p =document.createElement("p")
    p.innerHTML = e
    caixa.appendChild(p)
})
console.log(cursos)