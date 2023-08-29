function soma(a, b) {
    return a + b
}


function multiplica(num1 = 1, num2 = 1) {
    return num1 * num2 
}

console.log(multiplica(soma(4, 5), soma(5, 5)))