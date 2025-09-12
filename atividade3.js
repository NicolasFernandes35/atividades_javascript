let prompt = require('prompt-sync')();
let N1 = parseInt(Number(prompt("Digite um número: ")));
let N2 = parseInt(Number(prompt("Digite um número: ")));
let N3 = parseInt(Number(prompt("Digite um número: ")));
let N4 = parseInt(Number(prompt("Digite um número: ")));
let N5 = parseInt(Number(prompt("Digite um número: ")));

let numeros = ["", N1, N2, N3, N4, N5];
let numeros2 = [];

for (i = 1; i < 6; i++){
    if(i % 2 ==0){
        numeros2.push(numeros[i] / 2);  
    } else{
        numeros2.push(numeros[i] * 3);
    } 
}
console.log(numeros);
console.log(numeros2);
