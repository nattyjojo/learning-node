const colorChar = '0123456789ABCDEF'
let generatedColor = '#'
for(let i = 0; i < 6; i++){
    let randomcolor = Math.floor(Math.random()*colorChar.length)
    generatedColor += colorChar[randomcolor]

}
console.log(generatedColor)