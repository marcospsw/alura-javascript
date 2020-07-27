console.log('Trabalhando com listas');

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagem = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade");
//     listaDeDestinos.splice(1, 1); // removendo item
// } else if (estaAcompanhada == true) {
//     //A pesso é menor de idade
//     console.log("Comprador esta acompanhado");
//     listaDeDestinos.splice(1, 1); // removendo item
// } else {
//     console.log("Não é maior de idade, não posso vender")
// }

// console.log(listaDeDestinos);
// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador < 18);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa Viagem!!");
    listaDeDestinos.splice(2, 1); // removendo item
} else {
    console.log("Não é maior de idade, não posso vender")
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagem){
    console.log("Boa Viagem!!");
}else{
    console.log("Não é maior de idade, não posso vender");
}


console.log(listaDeDestinos);