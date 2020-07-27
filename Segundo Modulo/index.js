import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Marcos", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const contaCorrenteMarcos = new ContaCorrente(cliente1, 1001);
contaCorrenteMarcos.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteMarcos.transferir(valor, conta2);


console.log(contaCorrenteMarcos);
console.log(ContaCorrente.numeroDeContas);