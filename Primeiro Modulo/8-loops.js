console.log('\nTrabalhando com listas');

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro',
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagem = false;
const destino = "Sao Paulo";


console.log("\nDestinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;
let contador = 0;
let destinoExiste = false;

while(contador < 3){
    
    if (listaDeDestinos[contador] == destino){
        console.log("Destino Existente");
        destinoExiste = true;
        break;
    }
    contador ++;
}

console.log("Destino Existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem")
}else{
    console.log("Desculpe tivemos um erro");
}


for(cont=0;cont<3;cont++){    
    if (listaDeDestinos[contador] == destino){
        console.log("Destino Existente");
        destinoExiste = true;
        break;
    }
}