import { describe, expect, it } from "@jest/globals";
import { Conta } from "./Conta";

/*
DEPÓSITO
- Não pode depositar valor negativo
- Não pode depositar 0
- Se depositar positivo deve somar ao saldo

SAQUE
- Não deve sacar valor negativo
- Deve subtrair do saldo o valor do saque
- Não pode sacar um valor maior do que saldo
- Não pode sacar 0
*/

describe("Qunado depositar", () => {
    it("Deve aceitar depósito de um valor postivo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 0;

        //Execução
        conta.depositar(100)

        //Validação
        expect(conta.saldo).toBe(100);
    })

    it("Não deve ser possível depositar um valor negativo", () => {
        //Cenário
        const conta: Conta = new Conta();
        conta.saldo = 100;

        //Ação
        conta.depositar(-50);

        //Validação
        expect(conta.saldo).toBe(100);
    } )
})

describe("Quando sacar", () => {
    it("Não deve sacar valor negativo", () => {
        const conta: Conta = new Conta();
        conta.saldo = 100;

        expect(() => {conta.sacar(-50)}).toThrow("inválido")
    })

})
