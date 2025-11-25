"use strict";
/*
DEPOSITO
Tenho que conseguir depositar um valor positivio
Não devo conseguir depositar um valor negativa (ERRO)

SAQUE
Devo conseguir sacar um valor positivo, se houver saldo
Não deve ser possível sacar um valor negativo (ERRO)
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    saque(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    saldo = 0;
    deposito(valor) {
        if (valor < 0) {
            throw new Error("Valor de depósito inválido");
        }
        this.saldo += valor;
    }
    extrato() {
        return 1;
    }
}
exports.Conta = Conta;
//# sourceMappingURL=Conta.js.map