console.log('Trabalhando com listas');

// const salvador = 'Salvador';
// const saoPaulo = 'Sao Paulo';
// const rioDeJaneiro = 'Rio de Janeiro';

const listaDeDestinos = new Array(
    'Salvador',
    'Sao Paulo',
    'Rio de Janeiro',
);

listaDeDestinos.push ('Curitiba'); // Adicionando itens a lista

console.log ("Destinos possíveis: ");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log (listaDeDestinos);

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);


console.log(listaDeDestinos[1], listaDeDestinos[0]);
