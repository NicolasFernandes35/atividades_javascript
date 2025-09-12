let prompt = require('prompt-sync')()
let vetor = []; 

for (let i = 1; i<= 10; i++){
    let num = parseInt(prompt('Digite um número:'));
    if(!isNaN(num)){
        vetor[i] = num;
        console.log(i + "/10");
    }else{
        console.log("Digite um número novamente!!!");
        vetor[i] = num;
    }
    
   
}
console.log('Vetor na ordem direta: ');
for(let i = 1; i <= 10; i++){
    console.log(vetor[i]);
}
console.log('Vetor na ordem inversa: ');
for (var i = 10; i >= 1; i--){
    console.log(vetor[i]);
}
