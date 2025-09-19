import { describe, expect, test } from "@jest/globals";
import { Cliente } from "./Cliente";

describe("Quando manipular o Cliente", () => {

    test("deve validar corretamente um número de telefone com 11 dígitos", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        const telefone = "53942602917"
        cli.telefone = telefone

        //Execução
        const validar = cli.validarTelefone(telefone)

        //Validação
        expect(validar).toBe(true)
    })
    
    test("deve invalidar um número de telefone com mais ou menos de 11 dígitos", () => {
        //Cenário
        const cli: Cliente = new Cliente()

        //Execução
        const validar = cli.validarTelefone("5394260291734")
        const validar2 = cli.validarTelefone("53942")

        //Validação
        expect(validar).toBe(false)
        expect(validar2).toBe(false)
    })
    
    test("deve atualizar o telefone se o novo número for válido", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        cli.telefone = "53923947203"
    
        //Execução
        cli.atualizarTelefone("53999998888")
        
        //Validação
        expect(cli.telefone).toBe("53999998888")
    })
    
    test("deve lançar um erro ao tentar atualizar com um telefone inválido", () => {
        //Cenário
        const cli: Cliente = new Cliente()
        cli.telefone = "53923947203"

        //Validação
        expect(() => cli.atualizarTelefone("539999")).toThrow("Inválido");
    })
    
    test("deve lançar um erro ao tentar criar um cliente com nome inválido (menos de 3 caracteres)", () => {
        //Cenário
        const cli: Cliente = new Cliente()

        //Validação
        expect(() => cli.criarCliente("Al", "53981560341")).toThrow("Nome inválido");
    })
})