function aleatorio(numero1,numero2) {
    let diferencia=numero2-numero1
    let alea=Math.round(Math.random()*diferencia)+numero1
    return alea
}