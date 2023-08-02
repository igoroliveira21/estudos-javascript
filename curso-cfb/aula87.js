const url = document.querySelector("#url")
const btn_url = document.querySelector("#btn_url")

btn_url.addEventListener("click", (evt)=>{
    // window.location="https://www.google.com"
    // window.location.replace("https://www.google.com")//Deleta a url corrente do histórico
    // window.location.assign("https://www.google.com")// Não deleta a URL corrente do histórico
    // window.location.reload() //Atualiza a página
    // window.history.forward()
    //window.history.back()
    // window.history.go(1)
    // console.log(window.history.length)  
    window.location=url.value
})