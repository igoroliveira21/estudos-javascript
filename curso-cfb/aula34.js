//const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")]

cursos.map((el) => {
    el.addEventListener("click", (evt) =>{
        const el = evt.target
        el.classList.add("destaque")
        console.log(`${el.id} foi clicado`)
    })
})

// cursos.addEventListener("click", (evt) => { 
//     const el = evt.target
//     el.classList.add("destaque")
   
// }) // recebe o evento, mas o que será executado

