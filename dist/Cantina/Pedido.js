"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const Util_1 = require("./Util");
class Pedido {
    constructor(cliente) {
        this.itens = [];
        this.cliente = cliente;
        this.status = "Pendente";
        this.numero = Util_1.Util.gerarNumeroDePedido();
        this.valorPagar = 0;
    }
    cancelarPedido() {
        this.status = "Cancelado";
    }
    alterarStatus(status) {
        this.status = status;
    }
    adicionarItem(item) {
        this.itens.push(item);
        this.atualizarValorPagar();
        if (this.status == "Cancelado") {
            throw new Error("Não é possível alterar um pedido cancelado");
        }
    }
    obterCliente() {
        return this.cliente;
    }
    atualizarValorPagar() {
        this.valorPagar = 0;
        for (const item of this.itens) {
            this.valorPagar += item.obterPrecoFinal();
        }
    }
    removerItem(codigo) {
        this.itens = this.itens.filter(item => item.codigo !== codigo);
        if (this.status == "Cancelado") {
            throw new Error("Não é possível alterar um pedido cancelado");
        }
        this.atualizarValorPagar();
    }
}
exports.Pedido = Pedido;
//# sourceMappingURL=Pedido.js.map