/* Utilizando vetores, crie um programa que organize uma quantidade qualquer de números inteiros
fornecidos pelo usuário da seguinte forma: primeiro os números pares em ordem crescente e
depois os números ímpares em ordem decrescente.*/

let prompt = require('prompt-sync') ()
let vetor1 = [];
let vetorPares = [];
let vetorImpares = [];
let sair = true;


while(sair){
    let numero = parseInt(Number(prompt("Digite um número: ")));
    vetor1.push(numero);
    let confirmar = prompt("Deseja continuar? sim ou não? ").toLowerCase().trim();  /* toLowerCase diminui tudo para caixa baixa e o trim elimina espaços */
    sair = ["sim", "s"].includes(confirmar);    /* aqui o sair atribui o valor de confirmar, caso um dos valores seja o especificado entre [] */
}
for(let filtro of vetor1){     /* o let of trabalha com o valor real do vetor, diferente de quando usamos o [i], que trabalha com o índice */
    if(filtro % 2 == 0){
        vetorPares.push(filtro);
    }
    else{
        vetorImpares.push(filtro);
    }
}
console.log(vetor1);
console.log(vetorPares);
console.log(vetorImpares);