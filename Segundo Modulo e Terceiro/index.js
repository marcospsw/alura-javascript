import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Marcos', 10000, 12345678900);
diretor.cadastrarSenha('123456789');
console.log(diretor);
const gerente = new Gerente('Ricardo', 5000, 12345678911);
gerente.cadastrarSenha('123');
const estaLogadoDiretor = SistemaAutenticacao.login(diretor, '123456789');
const estaLogadoGerente = SistemaAutenticacao.login(gerente, '123');

const cliente = new Cliente('Camile', 4984954651, '123456');
const clienteEstaLogado = SistemaAutenticacao.login(cliente, '123456');
console.log(estaLogadoDiretor, estaLogadoGerente);
console.log(clienteEstaLogado);
