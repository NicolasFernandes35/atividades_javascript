let nomes = ["Nícolas", "Wesley", "Bruno", "Gabriela", "Fernanda", "Giovana", "Isabela", "Francisco", "Odilon", "Thales"];
let prompt = require('prompt-sync')()
let NomeProcurar = prompt("Digite o seu nome: ");

if(nomes.includes(NomeProcurar)){
    console.log("\u2705 Achei! \uD83D\uDE80");
}
else{
    console.log("\u274C não achei... \uD83D\uDE22");
}
