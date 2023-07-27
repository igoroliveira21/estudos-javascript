const numero=document.querySelector("#numero")
const btn=document.querySelector("#btn")

btn.addEventListener("click", (evt)=>{
    numero.innerHTML="Processando..."
    promessa()
        .then((retorno)=>{//Si deu certo true
            numero.innerHTML=retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        .catch((retorno)=>{//Si deu errado false
            numero.innerHTML=retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
})

const promessa=()=>{
    let promise = new Promise((resolve, reject)=>{
        let resultado = true
        let tempo = 3000
        setTimeout(()=>{
            if(resultado){
                resolve("Deu tudo certo!")
            }else{
                reject("Deu tudo errado!")
            }
        },tempo)
    })   
    return promise
}

numero.innerHTML="Esperando..."




