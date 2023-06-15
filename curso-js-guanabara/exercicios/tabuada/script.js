function tabuada() {
    var numero = document.getElementById('txtn')
    var tabuada = document.getElementById('seltab')
    if (numero.value.length == 0 ) {
        alert('ERRO! Preencha os dados corretamente!')
    } else {             
        var n = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        for (c = 1; c <= 10; c ++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${tabuada}`
            tabuada.appendChild(item)

        }
        /*while(c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }*/
    }
    
}