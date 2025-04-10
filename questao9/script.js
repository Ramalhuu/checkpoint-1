
function compararNumeros(a, b) {
    if (a > b)
        console.log("A é maior")
    if (b > a)
        console.log("B é maior")
    else
        console.log("Ambos são iguais")
}
//ok
console.log(compararNumeros(5, 10)); // esperado: "B é maior" //ok
console.log(compararNumeros(10, 5)); // esperado: "A é maior" //ok
console.log(compararNumeros(7, 7));  // esperado: "Ambos são iguais" //ok