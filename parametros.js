// parâmetros de função 

            //2       //2
function soma(num1, num2){
    return num1 + num2;
}

// console.log(soma(2, 2))
// console.log(soma(7474, 200))
// console.log(soma(-500, 500))

// parâmetros x argumentos 

// ordem dos parâmetros 

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("jona", 40))

function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}
                            //soma     //soma  o resultado das somas é multiplicado 9 * 5 = 54
// console.log(multiplica(soma(4, 5),soma(3,3)))

console.log(multiplica(soma(4,5)))








