import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente"
import { Pedido } from "./Pedido"
import { Item } from "./Item";

describe("Quando manipular o Cliente", () => {

    test("deve ser criado com o status Pendente por padrão", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const it: Item = new Item()
        const ped: Pedido = new Pedido(cli)

        //Validação
        expect(ped.status).toBe("Pendente")
    })
    
    test("deve alterar o status do pedido ao usar o método alterarStatus", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const it: Item = new Item()
        const ped: Pedido = new Pedido(cli)

        //Execução
        ped.alterarStatus("Em Preparo")
        
        //Validação
        expect(ped.status).toBe("Em Preparo")
    })
})