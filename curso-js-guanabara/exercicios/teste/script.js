var num = document.querySelector('input#fnum')
var lista = document.querySelector('select#flista')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `o numero ${num.value} foi adicionado. `
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        alert('ERRO!')
    }
    num.value = ''
    num.focus()
}

function verificar() {
   if(valores.length == 0) {
    alert('ERRO! Verifique os valores ou adicione um valor.')
   } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0
      
    for(let pos in valores) {
        soma += valores[pos]
        if(valores[pos] > maior) 
            maior = valores[pos]
        if(valores[pos] < menor) 
            menor = valores[pos]        
    }   
    res.innerHTML = ''
    media = soma / tot
    res.innerHTML = `você adicionou ${tot} valores`
    res.innerHTML += `<p>O menor valor foi ${menor}</p>`
    res.innerHTML += `<p>O maior valor foi ${maior}</p>` 
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é ${media}</p>` 
   }
    
}