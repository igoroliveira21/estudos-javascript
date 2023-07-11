const caixa1 = document.querySelector("#caixa1")
const btc_c = [...document.querySelectorAll(".curso")]

console.log(caixa1.hasChildNodes())

console.log(btc_c[0].children.length > 0 ? "tem filhos" : "não tem filhos")

console.log(caixa1.children[1].innerHTML= "Java")