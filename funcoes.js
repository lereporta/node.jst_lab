// let x = "";
// console.log(x)
// x = "oi";

// 1) declara a função 
                    //string (ao usar uma função dentro de outra o valor de string passa a ser 2 -> passa a valor de soma)
function imprimetexto(texto) {
    console.log(texto)
}

// 2) executa a função (1 ou + veze)

imprimetexto(soma());
// imprimetexto("como vai");

// três formas de escrever funcções 

function soma(){
  // outros codigos
  // vários consoles.log()
  return 2 + 2;
}
// console.log(soma())
