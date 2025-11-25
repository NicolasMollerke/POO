"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    constructor() {
        this.nome = "";
        this.telefone = "";
    }
    atualizarTelefone(novoTelefone) {
        const ehTelefoneValido = this.validarTelefone(novoTelefone);
        if (ehTelefoneValido) {
            this.telefone = novoTelefone;
        }
        else {
            throw new Error("Telefone Inválido");
        }
    }
    validarTelefone(telefone) {
        return telefone.length === 11;
    }
    criarCliente(nome, telefone) {
        if (nome.length < 3) {
            throw new Error("Nome inválido");
        }
        this.nome = nome;
        this.telefone = telefone;
        return this;
    }
}
exports.Cliente = Cliente;
//# sourceMappingURL=Cliente.js.map