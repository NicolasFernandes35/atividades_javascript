let prompt = require('prompt-sync')()

let vetor1 = [];
let vetor2 = [];
let vetor3soma = [];
let vetor4diferença = [];
let vetor5multi = [];

console.log("Vamos montar o primeiro vetor!")
for(i = 0; i < 20; i++){
    let num = parseInt(prompt(`Digite o ${i + 1}° número: `));
    vetor1[i] = num;
    
}
console.log("Vamos montar o segundo vetor!")
for(i = 0; i < 20; i++){
    let num2 = parseInt(prompt(`Digite o ${i + 1}° número: `));
    vetor2[i] = num2;
   
}
for(i = 1; i < vetor1.length; i++){
    vetor3soma.push(vetor1[i] + vetor2[i]);
}
for(i = 1; i < vetor1.length; i++){
    vetor4diferença.push(vetor1[i] - vetor2[i]);
}
for(i = 1; i < vetor1.length; i++){
    vetor5multi.push(vetor1[i] * vetor2[i]);
}

console.log(vetor1);
console.log(vetor2);
console.log(vetor3soma);
console.log(vetor4diferença);
console.log(vetor5multi);

