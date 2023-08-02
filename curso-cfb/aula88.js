const btn_alert = document.querySelector("#btn_alert")
const btn_confirm = document.querySelector("#btn_confirm")
const btn_prompt = document.querySelector("#btn_prompt")

btn_alert.addEventListener("click", (evt)=>{
    alert('Olá, como vc está?')
})

btn_confirm.addEventListener("click", (evt)=>{
   const ret = confirm('Está aprendendo?')
   if(ret){
    console.log('Botão OK')
   } else{
    console.log('Botão Cancelar press')
   }
})

btn_prompt.addEventListener("click", (evt)=>{
    const nome = prompt("Digite seu nome: ")
    if(nome == null){
        console.log('Botão CANCELAR press')
    } else{
        console.log(`Nome digitado:${nome}`)
    }
})