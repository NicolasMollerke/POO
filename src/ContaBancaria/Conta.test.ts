import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

describe("Quando depositar", () => {
    it("Deve aumentar o saldo da conta", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        // Execução
        conta.deposito(150);

        // Validação
        expect(conta.saldo).toBe(150)
    })

    it("Deve gerar um erro se o depósito for negativo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 1000;

        //Execução e Validação (Juntos em caso de teste erro)
        expect(() => {
            conta.deposito(-100)
        }
    ).toThrow("inválido")
    })
    
})


describe("Quando sacar", () => {
    it("Deve alterar o saldo se saque for positivo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 1000;

        // Execução
        conta.saque(500);

        // Validação
        expect(conta.saldo).toBe(500);

    })

    it("Não deve alterar o saldo se o valor de saque for maior do que o saldo", () => {
        // Cenário
        const conta: Conta = new Conta();
        conta.saldo = 500;

        // Execução
        conta.saque(1000);

        // Validação
        expect(conta.saldo).toBe(500);
    })
})

//test("", () => {})