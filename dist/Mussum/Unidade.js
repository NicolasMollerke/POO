"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unidade = void 0;
const GenericModel_1 = require("./GenericModel");
class Unidade extends GenericModel_1.GenericModel {
    constructor() {
        super();
        this._cursos = [];
        this._aulas = [];
        this._ativa = true;
    }
}
exports.Unidade = Unidade;
//# sourceMappingURL=Unidade.js.map