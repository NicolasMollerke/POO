"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aula = void 0;
const GenericModel_1 = require("./GenericModel");
const Unidade_1 = require("./Unidade");
class Aula extends GenericModel_1.GenericModel {
    constructor() {
        super(...arguments);
        this._unidade = new Unidade_1.Unidade();
        this._conteudo = [];
    }
}
exports.Aula = Aula;
//# sourceMappingURL=Aula.js.map