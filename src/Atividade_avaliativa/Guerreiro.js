"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
const Personagem_1 = require("./Personagem");
class Guerreiro extends Personagem_1.Personagem {
    constructor(nome, forca, habilidade, poderAtaque, esquiva, resistencia, vidaMaxima) {
        super(nome + "- Warrior", forca > 1000 || forca < 1 ? 1 : forca, 0, forca * 10, esquiva > 50 || esquiva < 1 ? 1 : esquiva, resistencia > 90 || resistencia < 0 ? 0 : resistencia, vidaMaxima > 40000 || vidaMaxima < 1 ? 1 : vidaMaxima);
        this._vidaAtual = this._vidaMaxima;
    }
    atacar(oponente) {
        const chance = Math.random() * 100;
        if (oponente._esquiva > chance) {
            console.log("Falhou");
        }
        else {
            oponente._vidaAtual = oponente._vidaAtual - (this._poderAtaque - oponente._resistencia);
        }
    }
}
exports.Guerreiro = Guerreiro;
//# sourceMappingURL=Guerreiro.js.map