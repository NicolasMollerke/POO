/*
DEPOSITO
Tenho que conseguir depositar um valor positivio
Não devo conseguir depositar um valor negativa (ERRO)

SAQUE
Devo conseguir sacar um valor positivo, se houver saldo
Não deve ser possível sacar um valor negativo (ERRO)
*/


export class Conta {
    saque(valor: number) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
    }
    saldo: number = 0;

    deposito(valor: number) {
        if (valor < 0) {
            throw new Error("Valor de depósito inválido");
        }
        this.saldo += valor;
    }
    extrato(): number {
        return 1;
    }
}