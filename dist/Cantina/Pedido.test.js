"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Cliente_1 = require("./Cliente");
const Pedido_1 = require("./Pedido");
const Item_1 = require("./Item");
(0, globals_1.describe)("Quando manipular o Pedido", () => {
    (0, globals_1.test)("deve ser criado com o status Pendente por padrão", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const ped = new Pedido_1.Pedido(cli);
        //Validação
        (0, globals_1.expect)(ped.status).toBe("Pendente");
    });
    (0, globals_1.test)("deve alterar o status do pedido ao usar o método alterarStatus", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const ped = new Pedido_1.Pedido(cli);
        //Execução
        ped.alterarStatus("Em Preparo");
        //Validação
        (0, globals_1.expect)(ped.status).toBe("Em Preparo");
    });
});
(0, globals_1.describe)("Remover um item do pedido", () => {
    (0, globals_1.test)("deve remover um item do pedido pelo seu codigo", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        item1.codigo = "1";
        const item2 = new Item_1.Item();
        item2.codigo = "2";
        pedido.adicionarItem(item1);
        pedido.adicionarItem(item2);
        //Validação
        pedido.removerItem("1");
        (0, globals_1.expect)(pedido.itens.length).toBe(1);
    });
    (0, globals_1.test)("deve atualizar o valorPagar após remover um item", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        item1.preco = 10;
        item1.codigo = "1";
        const item2 = new Item_1.Item();
        item2.preco = 5;
        item2.codigo = "2";
        pedido.adicionarItem(item1);
        pedido.adicionarItem(item2);
        pedido.removerItem("1");
        (0, globals_1.expect)(pedido.valorPagar).toBe(5);
    });
    (0, globals_1.test)("não deve fazer nada ao tentar remover um item que não está no pedido", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        item1.codigo = "1";
        item1.preco = 5;
        pedido.adicionarItem(item1);
        pedido.removerItem("99");
        (0, globals_1.expect)(pedido.itens.length).toBe(1);
    });
});
(0, globals_1.describe)("Validações na classe Item", () => {
    (0, globals_1.test)("deve lançar um erro ao tentar aplicar um desconto negativo", () => {
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        (0, globals_1.expect)(() => item1.aplicarDesconto(-10)).toThrow();
    });
    (0, globals_1.test)("deve lançar um erro ao tentar aplicar um desconto maior que 100%", () => {
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        (0, globals_1.expect)(() => item1.aplicarDesconto(101)).toThrow();
    });
});
(0, globals_1.describe)("Proteger um pedido cancelado", () => {
    (0, globals_1.test)("deve lançar um erro ao tentar adicionar um item a um pedido cancelado", () => {
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        pedido.cancelarPedido();
        (0, globals_1.expect)(() => pedido.adicionarItem(item1)).toThrow();
    });
    (0, globals_1.test)("deve lançar um erro ao tentar remover um item de um pedido cancelado", () => {
        const cli = new Cliente_1.Cliente();
        const pedido = new Pedido_1.Pedido(cli);
        const item1 = new Item_1.Item();
        item1.codigo = "1";
        pedido.cancelarPedido();
        (0, globals_1.expect)(() => pedido.removerItem("1")).toThrow();
    });
});
//# sourceMappingURL=Pedido.test.js.map