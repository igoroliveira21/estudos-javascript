const valores = []

for (var i = 0; i <= 10; i++) {
    valores.push(function(){
        console.log(i)
    })
}

valores[2]()
valores[8]()