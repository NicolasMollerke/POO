"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const Pessoa_1 = require("./Pessoa");
class Aluno extends Pessoa_1.Pessoa {
    constructor(nome) {
        super(nome);
        this._turma = "";
        this._discplinasMatriculadas = [];
    }
    static FabricaDeAluno(nome) {
        return new Aluno(nome);
    }
    falar() {
        return "Aluno falando!";
    }
    falaEspecial() {
        //Falar da própria classe
        this.falar();
        //Falar da classe mãe
        super.falar();
    }
}
exports.Aluno = Aluno;
//# sourceMappingURL=Aluno.js.map