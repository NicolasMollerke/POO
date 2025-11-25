"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const Funcionario_1 = require("./Funcionario");
class Professor extends Funcionario_1.Funcionario {
    constructor() {
        super(...arguments);
        this._titulacao = "";
    }
}
exports.Professor = Professor;
//# sourceMappingURL=Professor.js.map