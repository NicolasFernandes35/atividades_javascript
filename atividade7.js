let vetor1 = ["1","2","3","4","5"];
let vetor2 = ["1","6","7","8","9"];

if(vetor1.some(N => vetor2.includes(N))){
    console.log("Há semelhança!");
}else{
    console.log("Não há semelhança.")
}