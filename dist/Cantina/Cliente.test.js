"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Cliente_1 = require("./Cliente");
(0, globals_1.describe)("Quando manipular o Cliente", () => {
    (0, globals_1.test)("deve validar corretamente um número de telefone com 11 dígitos", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        const telefone = "53942602917";
        cli.telefone = telefone;
        //Execução
        const validar = cli.validarTelefone(telefone);
        //Validação
        (0, globals_1.expect)(validar).toBe(true);
    });
    (0, globals_1.test)("deve invalidar um número de telefone com mais ou menos de 11 dígitos", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        //Execução
        const validar = cli.validarTelefone("5394260291734");
        const validar2 = cli.validarTelefone("53942");
        //Validação
        (0, globals_1.expect)(validar).toBe(false);
        (0, globals_1.expect)(validar2).toBe(false);
    });
    (0, globals_1.test)("deve atualizar o telefone se o novo número for válido", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        cli.telefone = "53923947203";
        //Execução
        cli.atualizarTelefone("53999998888");
        //Validação
        (0, globals_1.expect)(cli.telefone).toBe("53999998888");
    });
    (0, globals_1.test)("deve lançar um erro ao tentar atualizar com um telefone inválido", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        cli.telefone = "53923947203";
        //Validação
        (0, globals_1.expect)(() => cli.atualizarTelefone("539999")).toThrow("Inválido");
    });
    (0, globals_1.test)("deve lançar um erro ao tentar criar um cliente com nome inválido (menos de 3 caracteres)", () => {
        //Cenário
        const cli = new Cliente_1.Cliente();
        //Validação
        (0, globals_1.expect)(() => cli.criarCliente("Al", "53981560341")).toThrow("Nome inválido");
    });
});
//# sourceMappingURL=Cliente.test.js.map