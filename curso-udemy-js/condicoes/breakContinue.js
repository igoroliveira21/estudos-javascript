const nuns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in nuns) {
    if (i == 5)  {
        break
    }
    console.log(`${i} = ${nuns[i]}`)
}

console.log('-----------------')

for (y in nuns) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nuns[y]}`)
}

console.log('------------------')
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

externo: 
for(a in nuns) {
    for(b in nuns) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`) 
    
    }
} 