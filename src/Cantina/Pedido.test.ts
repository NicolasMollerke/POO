import { describe, expect, it, test } from "@jest/globals";
import { Cliente } from "./Cliente"
import { Pedido } from "./Pedido"
import { Item } from "./Item";

describe("Quando manipular o Pedido", () => {

    test("deve ser criado com o status Pendente por padrão", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const ped: Pedido = new Pedido(cli)

        //Validação
        expect(ped.status).toBe("Pendente")
    })
    
    test("deve alterar o status do pedido ao usar o método alterarStatus", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const ped: Pedido = new Pedido(cli)

        //Execução
        ped.alterarStatus("Em Preparo")
        
        //Validação
        expect(ped.status).toBe("Em Preparo")
    })
})


describe("Remover um item do pedido", () => {

    test("deve remover um item do pedido pelo seu codigo", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();
        item1.codigo = "1";
        const item2: Item = new Item();
        item2.codigo = "2";
        pedido.adicionarItem(item1);
        pedido.adicionarItem(item2);

        //Validação
        pedido.removerItem("1");

        expect(pedido.itens.length).toBe(1);
    })

    test("deve atualizar o valorPagar após remover um item", () => {
        
        //Cenário
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();
        item1.preco = 10;
        item1.codigo = "1";
        const item2: Item = new Item();
        item2.preco = 5
        item2.codigo = "2";
        pedido.adicionarItem(item1);
        pedido.adicionarItem(item2);

        pedido.removerItem("1");

        expect(pedido.valorPagar).toBe(5);
    })

    test("não deve fazer nada ao tentar remover um item que não está no pedido", () => {
        
        //Cenário
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item(); 
        item1.codigo = "1";
        item1.preco = 5;
        pedido.adicionarItem(item1);

        pedido.removerItem("99");

        expect(pedido.itens.length).toBe(1);
    })
})

describe("Validações na classe Item", () => {

    test("deve lançar um erro ao tentar aplicar um desconto negativo", () => {
        
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();

        
        expect(() => item1.aplicarDesconto(-10)).toThrow();
    })
    
    test("deve lançar um erro ao tentar aplicar um desconto maior que 100%", () => {
        
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();

        
        expect(() => item1.aplicarDesconto(101)).toThrow();
    })
})

describe("Proteger um pedido cancelado", () => {

    test("deve lançar um erro ao tentar adicionar um item a um pedido cancelado", () => {
        
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();

        pedido.cancelarPedido()
        
        expect(() => pedido.adicionarItem(item1)).toThrow();
    })
    
    test("deve lançar um erro ao tentar remover um item de um pedido cancelado", () => {
        
        const cli: Cliente = new Cliente()
        const pedido: Pedido = new Pedido(cli)
        const item1: Item = new Item();
        item1.codigo = "1";


        pedido.cancelarPedido()
        
        expect(() => pedido.removerItem("1")).toThrow();
    })
})

    
