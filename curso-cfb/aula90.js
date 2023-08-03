const objetos = document.querySelector("#objetos")

let computador = {
    cpu:"",
    ram:"",
    hd:"",
    info:function () {
        console.log(`CPU: ${this.cpu}`)
        console.log(`RAM: ${this.ram}`)
        console.log(`HD: ${this.hd}`)

    }
}
computador["Monitor"] = "22pol"
computador.placaVideo = "rtx 580"
delete(computador.hd)

const c1 = Object.assign({}, computador)
console.log(computador)
c1.info()

const c2 = Object.create(computador)//Criando outros Objetos
c2.cpu="i9"
c2.ram="32GB"
c2.hd="1TB"
c2.info()

const o1 = {obj1:'1'}
const o2 = {obj2:'2'}
const o3 = {obj3:'3'}
const o4 = Object.assign(o1, o2, o3)
console.log(o4)

const computadores=[{
    cpu:"AMD Ryzem 5 3600",
    ram:"32gb",
    hd:"2tb",
},
{
    cpu:"i5",
    ram:"16gb",
    hd:"1tb",
},
{
    cpu:"AMD Ryzem 5 5600",
    ram:"16gb",
    hd:"120gb",
}]

computadores.forEach((c)=>{
    console.log(c)
    const div = document.createElement("div")
    div.innerHTML = c.cpu + "<br/>" + c.ram + "<br/>" + c.hd + "<br/>"
    div.setAttribute("class", "computador")
    objetos.appendChild(div)
})

// computador.info()
//console.log(computadores)
//Objetos.innerHTML = JSON.stringify(computadores)