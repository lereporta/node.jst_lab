// tipo de dados
//booleanos

// conversao implicita 
const numero = 456;
const numeroString = Number("456");

console.log(numero == numeroString)
console.log(numero + numeroString)

// conversao explicita

//Number() converte para numero antes de calcular e nao concatena (se tivr uma sring ele retorna NaN)
//String() passa para string antes
//console.log(numero + Number(numeroString))
