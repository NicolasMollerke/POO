import { Cliente } from "./Cliente";
import { Item } from "./Item";
import { Pedido } from "./Pedido";
import { Util } from "./Util";

const item1 = new Item();
item1.categoria = "SALGADO";
item1.codigo = "1";
item1.nome = "Pastel morte lenta";
item1.preco = 5;

const item2 = new Item();
item2.categoria = "SALGADO";
item2.codigo = "2";
item2.nome = "Pão de queijo";
item2.preco = 6;

const item3 = new Item();
item3.categoria = "SALGADO";
item3.codigo = "3";
item3.nome = "Cocrete";
item3.preco = 7;

// console.log(item1);
// console.log(item2);
// console.log(item3);

// item1.aplicarDesconto(10);
// console.log(item1.obterPrecoFinal());
// console.log(item1.emPromocao()? "SIM":"NÃO");

const cliente: Cliente = new Cliente();
cliente.nome = Util.gerarNome();
cliente.telefone = "53981560341"

item1.aplicarDesconto(20);

const pedido: Pedido = new Pedido(cliente)
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);



console.log(pedido);




