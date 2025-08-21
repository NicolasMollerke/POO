import { Cliente } from "./Cliente";

const cli: Cliente = new Cliente();
cli.nome = "João"
cli.telefone = "123456789"

console.table(cli)
