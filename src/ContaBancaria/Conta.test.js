"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Conta_1 = require("./Conta");
(0, globals_1.describe)("Quando depositar", () => {
    (0, globals_1.it)("Deve aumentar o saldo da conta", () => {
        // Cenário
        const conta = new Conta_1.Conta();
        conta.saldo = 0;
        // Execução
        conta.deposito(150);
        // Validação
        (0, globals_1.expect)(conta.saldo).toBe(150);
    });
    (0, globals_1.it)("Deve gerar um erro se o depósito for negativo", () => {
        // Cenário
        const conta = new Conta_1.Conta();
        conta.saldo = 1000;
        //Execução e Validação (Juntos em caso de teste erro)
        (0, globals_1.expect)(() => {
            conta.deposito(-100);
        }).toThrow("inválido");
    });
});
(0, globals_1.describe)("Quando sacar", () => {
    (0, globals_1.it)("Deve alterar o saldo se saque for positivo", () => {
        // Cenário
        const conta = new Conta_1.Conta();
        conta.saldo = 1000;
        // Execução
        conta.saque(500);
        // Validação
        (0, globals_1.expect)(conta.saldo).toBe(500);
    });
    (0, globals_1.it)("Não deve alterar o saldo se o valor de saque for maior do que o saldo", () => {
        // Cenário
        const conta = new Conta_1.Conta();
        conta.saldo = 500;
        // Execução
        conta.saque(1000);
        // Validação
        (0, globals_1.expect)(conta.saldo).toBe(500);
    });
});
//test("", () => {})
//# sourceMappingURL=Conta.test.js.map