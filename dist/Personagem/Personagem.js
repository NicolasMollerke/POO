"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personagem = void 0;
const Util_1 = require("./Util");
class Personagem {
    constructor(nome) {
        this.nome = nome;
        this.classe = "";
        this.raca = "";
        this.nivel = 0;
        this.arma = "";
        this.manaAtual = 0;
        this.manaMaxima = 0;
        this.vidaAtual = 0;
        this.vidaMaxima = 0;
        this.poderAtaque = 0;
    }
    treinarPoderAtaque() {
        const incrementoDoTreino = Util_1.Util.gerarNumeroAleatorio(5, 15);
        this.poderAtaque += incrementoDoTreino + this.poderAtaque * 1.1;
    }
    estaVivo() {
        return (this.vidaAtual > 0);
    }
    subirNivel() {
        this.nivel = +this.nivel + 1;
    }
    regenerarMana() {
        if (this.manaAtual < this.manaMaxima * 0.8) {
            this.manaAtual += this.manaMaxima * 0.2;
        }
    }
    equiparArma(arma) {
        this.arma = arma;
    }
    lancarFeitico(custo) {
        '';
        this.manaAtual = this.manaAtual - custo;
    }
    receberDano(dano) {
        this.vidaAtual = this.vidaAtual - dano;
        return this.vidaAtual;
    }
}
exports.Personagem = Personagem;
//# sourceMappingURL=Personagem.js.map