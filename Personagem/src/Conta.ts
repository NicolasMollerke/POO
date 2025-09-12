export class Conta{
    saldo: number = 0;

    sacar(valor: number): void {
        if (valor <= 0) {    
            throw new Error("Dado inválido")
        } 
        this.saldo -= valor;
    }
    
    depositar(valor: number):void{
        if (valor >= 0) {
            this.saldo += valor;
        }
    }

    extrato(): number{
        return this.saldo;
    }
}