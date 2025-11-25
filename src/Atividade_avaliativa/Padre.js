"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padre = void 0;
const Personagem_1 = require("./Personagem");
const Util_1 = require("./Util");
class Padre extends Personagem_1.Personagem {
    constructor() {
        super(`${Util_1.Util.gerarNome()} Priest`, 0, 0, 0, 0, 0, 0, Util_1.Util.gerarNumeroAleatorio(1, 8000));
        this._vidaAtual = this._vidaMaxima;
    }
}
exports.Padre = Padre;
//# sourceMappingURL=Padre.js.map