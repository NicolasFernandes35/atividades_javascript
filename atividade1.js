let prompt = require('prompt-sync')()
let N1 = parseInt(prompt("Digite um número: "));
let N2 = parseInt(prompt("Digite um número: "));
let N3 = parseInt(prompt("Digite um número: "));
let N4 = parseInt(prompt("Digite um número: "));
let N5 = parseInt(prompt("Digite um número: "));
let N6 = parseInt(prompt("Digite um número: "));
let N7 = parseInt(prompt("Digite um número: "));
let N8 = parseInt(prompt("Digite um número: "));
let N9 = parseInt(prompt("Digite um número: "));
let N10 = parseInt(prompt("Digite um número: "));

let numeros = ["", N1, N2, N3, N4, N5, N6, N7, N8, N9, N10];

for(i = 0; i < 11; i++){
    console.log(numeros[i]);
}
for(i = 11; i > 0; i--){
    console.log(numeros[i]);
}
