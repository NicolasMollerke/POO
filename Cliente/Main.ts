import { Cliente } from "./Cliente";

const cli: Cliente = new Cliente();
cli.nome = "João"
cli.telefone = "123456789"

const cli2: Cliente = {...cli}
cli2.nome = "Gladmir"
cli2.telefone = "987654321"

const cli3: Cliente = {...cli}
cli3.nome = "Bruna"

console.table(cli)
console.table(cli2)
console.table(cli3)
