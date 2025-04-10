let numero = 3


console.log(numero == 3, numero == 4)//not ok
console.log(numero === "3")//ok
console.log(numero === 3)//not ok
console.log(numero != 3, numero != 4) //not ok
console.log(numero !== 3)//not ok
console.log(numero !== "3")//ok
console.log(numero <= 4)
console.log(numero >= 4)


console.log(6 > numero > 2)//ok

//O prosito aqui era comparar duas variaveis com valor igual , porém, de tipos diferentes. Comparar variaveis com valor e tipo iguais foge do propósito. Incorreto.

//Ex: 
// 10 == "10" //true
// 10 === "10" //false
// 10 != "10" //false
// 10 !== "10" //true

