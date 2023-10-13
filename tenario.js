const idadeMinima = 18;
const idadeCliente = 19;
const nome = "leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";
//if (idadeCliente >= idadeMinima){
//    console.log("cerveja")
//}else {
//    console.log("suco")
//}

//console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco") // não e uma boa pratica usar em codigos que chamam muitas funções.



const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)