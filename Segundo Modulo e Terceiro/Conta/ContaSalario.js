import { Conta } from './Conta.js';

export class ContaSalario extends Conta {
  constructor(cliente) {
    super(0, this.Cliente, 100);
  }

  sacar(valor) {
    const taxa = 1.01;
    return this._sacar(valor, taxa);
  }
}